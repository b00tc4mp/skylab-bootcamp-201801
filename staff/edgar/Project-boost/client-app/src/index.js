import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import ScrollToTop from 'react-scroll-up'
import { client } from './models'
import { Header, BigInfo, News } from './containers'
import { Preloader, Alert } from './components'
import _ from 'lodash'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            init: true,
            statusStep: 0,
            pendingError: false,
            sources: [],
            news: [],
            previewRequest: false,
            likesId: [],
            newsToSave: [],
            // 0 - source , 1 - Headlines, 2 - news ToSave
            contentType: 0,

            contentIsLoaded: false,
            errorContent: [false, 0, '']
        }
    }


    // CALLS TO API unable to aqcuire everything endpoint due ?? , removed from there.
    loadHeadlines = (q) => {
        this.setState({ contentType: 1, contentIsLoaded: false })

        client.headlines(q)
            .then(news => {
                if (news.length === 0) { this.setState({ errorContent: [true, 0, 'No results, try refine your search'] }) }
                else {
                    let article = news.map((el, idx) => {
                        let uniqueId = _.uniqueId(`new_${Date.now()}_`)
                        return {
                            id: uniqueId,
                            publisher: el.source,
                            publishedAt: el.publishedAt,
                            author: el.author,
                            title: el.title,
                            description: el.description,
                            urlToImage: el.urlToImage,
                            url: el.url
                        }
                    });
                    this.setState((prevState => ({ news: article })));
                }
            })
            .then(news => this.setState({ contentIsLoaded: true, contentType: 1 }))
            .catch(error => {
                    this.setState({ statusStep: 2 , pendingError : true , errorContent: [true, 2, `Connection status failed due: ${error.message}, please try later`] }) })

    }
    loadSources = (q) => {
        this.setState({ contentType: 0, contentIsLoaded: false })

        client.sources(q)
            .then(sources => { sources.length === 0 ? this.setState({ errorContent: [true, 0, 'No results, try refine your search or check the loaded Publishers'] }) : this.setState({ sources }) })
            .then(news => this.setState({ contentIsLoaded: true }))
            .catch(error => this.setState({ errorContent: [true, 2, `Error : ${error.message}`] }))

    }


    handleLikes = (newLiked) => {
        let likesId = this.state.likesId,
            newsToSave = this.state.newsToSave;
        if (likesId.indexOf(newLiked) === -1) {
            const findN = this.state.news.filter(el => newLiked === el.id);
            likesId = likesId.concat(newLiked);
            newsToSave = newsToSave.concat(findN);
            this.setState({ likesId, newsToSave })
        }
    }
    handleUnlikes = (newUnliked) => {
        const stateLiked = this.state.likesId,
            stateSaved = this.state.newsToSave,
            likesId = stateLiked.filter(el => el !== newUnliked),
            newsToSave = stateSaved.filter(el => el.id !== newUnliked);
        this.setState({ likesId, newsToSave })
        if (this.state.likesId.length - 1 === 0) this.setState({ previewRequest: false, contentType: 1 })

    }

    handlePreviewRequest = () => {
        this.state.newsToSave.length > 0 ?
            this.setState({ previewRequest: true, contentType: 2 }) :
            this.setState({ errorContent: [true, 0, 'You don\'t have anything pending to save.'] })
    }
    handleDisablePreviewRequest = () => {
        this.setState({ previewRequest: false, contentType: 1 })
    }

    // System events ,Steps for connection checker
    handleNext = () => {
        const { stepIndex } = this.state.statusStep;
        if (stepIndex < 2) this.setState({ statusStep: stepIndex + 1 });
    }
    handlePrev = () => {
        const { stepIndex } = this.state.statusStep;
        if (stepIndex > 0) this.setState({ statusStep: stepIndex - 1 });
    }

    // System events, server ready ?
    handleCallbackMessage = () => {
        this.setState({
            contentIsLoaded: true,
            errorContent: [false, 0, null]
        })
    }

    // Component Lifecycle
    componentDidMount(){
        this.setState({ statusStep : 0})
    }
    
    componentWillMount() {
        
        const check = async () => { await this.loadSources() }
        const getData = async () => { await this.loadHeadlines({ category: 'general', country: 'US' }) }

        check()
            .then(resp => {
                this.setState({ statusStep: 1 })
                getData()
                    .catch(e => this.setState({ statusStep: 2, errorContent: [true, 1, 'Connection ok , but unable to aqcuire data'] }))
            })
            .then(resp => this.setState({ statusStep: 3, init: false }))
            .catch(err => this.setState({ statusStep: 2, errorContent: [true, 2, `Connection status check fail, due: ${err.message}`] }))

    }

    render() {

        

        const contentLoaded = this.state.contentIsLoaded,
            init = this.state.init,
            error = this.state.errorContent,
            errorStatus = error[0],
            errorType = error[1],
            errorMessage = error[2];

        return (

            <div>
                <Header
                    setSources={this.state.sources}
                    likesCount={this.state.likesId.length}
                    queryHeadlines={this.loadHeadlines}
                    querySources={this.loadSources}
                    contentType={this.state.contentType}
                    handlePreviewRequest={this.handlePreviewRequest}
                    handleDisablePreviewRequest={this.handleDisablePreviewRequest} />

                <div className='content'>
                    <BigInfo
                        statusStep={this.state.statusStep}
                        errorType={errorType} 
                        pendingError={this.state.pendingError} />

                    {errorStatus === true ? <Alert errorMessage={errorMessage}
                        errorType={errorType}
                        callbackAction={this.handleCallbackMessage} /> : ''}
                    {contentLoaded === false || init === true ? <Preloader /> :

                        <News contentIsLoaded={this.state.contentIsLoaded}
                              contentType={this.state.contentType}
                              content={this.state.previewRequest ? this.state.newsToSave : this.state.news}
                              contentSources={this.state.sources}
                              handleLikes={this.handleLikes}
                              handleUnlikes={this.handleUnlikes}
                              likesId={this.state.likesId} />

                    }

                    <ScrollToTop showUnder={160} className='arrowToTop'>
                        <img src='media/upArrow.png' alt='' />
                    </ScrollToTop>
                </div>
            </div>
        )
    }

}
export default Main

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)} >
        <Main />
    </MuiThemeProvider>
    , document.getElementById('root'))
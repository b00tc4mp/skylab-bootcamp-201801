import React, { Component } from 'react'
import { CardActions, CardHeader, CardMedia, CardTitle, CardText, Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import ContentLink from 'material-ui/svg-icons/content/link'
import { Flex, Box } from 'reflexbox'

let uniqueId, flag, childElements

class NewsComponent extends Component {

    render(props) {

        if (this.props.contentType !== 0) {

            childElements = this.props.content.map((article, idx) => {

                const isLiked = (this.props.likesId.indexOf(article.id) > -1)
                const isSaved = (this.props.contentType === 1)

                article.author = article.author ? article.author.replace(/(https:\/\/www\.facebook.com\/)/ig, '') : article.author;
                article.author = (/[<%$/]/).test(article.author) ? '' : article.author;
                article.description = (/[<%$/]/).test(article.description) ? '' : article.description;

                return (
                    <Box w={[1, 6 / 12, 4 / 12]} key={article.id}>
                        <Card style={{ margin: 4 }} zDepth={2}>
                            <CardHeader title={article.name}
                                subtitle={new Date(article.publishedAt).toDateString()} />
                            { article.author ?
                                <CardMedia overlay={<CardTitle title={<small>{article.author}</small>} />}>
                                 <img src={article.urlToImage ? article.urlToImage : '/media/svg/noImage.svg'} alt='' style={{ height:227 }}/>
                                </CardMedia> 
                                : 
                                <CardMedia >
                                <img src={article.urlToImage ? article.urlToImage : '/media/svg/noImage.svg'} alt='' style={{ height:227 }}/>
                               </CardMedia> 
                            }
                            <CardTitle title={article.title} />
                            <CardText>
                                {article.description}
                            </CardText>
                            <CardActions style={{ backgroundColor: 'rgba(7,7,7,0.3)' }}>

                                <RaisedButton href={article.url}
                                    target='_blank'
                                    label={isSaved ? 'read more' : 'review'}
                                    style={{ margin: 12 }}
                                    icon={<ContentLink />} />
                                {isSaved ?
                                    (
                                        <RaisedButton style={{ marginTop: 2 }}
                                            onClick={(e) => { e.preventDefault(); !isLiked ? this.props.handleLikes(article.id) : this.props.handleUnlikes(article.id)}}
                                            label={isLiked ? 'added' : 'add this'}
                                            secondary={isLiked}
                                            icon={isLiked ? <ActionFavorite  /> : <ActionFavoriteBorder style={{ fill : '#ff4081'}}/>} />
                                    ) : (
                                        <RaisedButton style={{ marginTop: 2 }}
                                            onClick={(e) => { e.preventDefault(); this.props.handleUnlikes(article.id) }} secondary
                                            label={'Remove from Liked'}
                                            icon={<ActionFavorite />} />
                                    )
                                }
                            </CardActions>
                        </Card>
                    </Box>
                )
            })
        } else {

            childElements = this.props.contentSources.map((source, id) => {

                flag = '/media/svg/' + source.country + '.svg';

                return (

                    <Box w={[1, 6 / 12, 4 / 12]} key={uniqueId}>
                        <Card style={{ margin: 4 }} zDepth={2}>
                            <CardHeader
                                title={source.name}
                                subtitle={`Category : ${source.category}`} />
                            <CardMedia overlay={<CardTitle title={source.country.toUpperCase()} />}>
                                <img src={`${flag}`} alt='' />
                            </CardMedia>
                            <CardText>
                                {source.description}
                            </CardText>
                            <CardActions>
                                <RaisedButton href={source.url}
                                    target='_blank'
                                    label='Who is'
                                    secondary={true}
                                    style={{ margin: 12 }}
                                    icon={<ContentLink />} />
                            </CardActions>
                        </Card>
                    </Box>
                )
            })
        }
        return (
            <Flex wrap p={2} justify='center'>
                {childElements}
            </Flex>
        )
    }
}
export default NewsComponent
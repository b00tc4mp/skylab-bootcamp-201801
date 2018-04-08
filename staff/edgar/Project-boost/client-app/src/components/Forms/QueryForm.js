import React, { Component } from 'react'
import ChipInput from 'material-ui-chip-input'
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import ContentSend from 'material-ui/svg-icons/content/send'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader';

// MODEL SCHEMA FOR ALLOWED API QUERY
import { allowed } from '../../models'
import { fullWhite } from 'material-ui/styles/colors';

const styles = {
    block: {
        paddingBottom : 4,
        marginTop: 14
    },
    buttonClose: {
        float: 'right',
        marginTop: 6,
        marginRight: -8,
    },
    select: {
        marginTop: 16,
        color: 'black',
    },
    submitInput: {
        marginTop: 16,
      
        color: 'white',
    },
    radioButton: {
        color: fullWhite,
 
       
        padding: 4
    },
    chipInput: {
        padding: 2,
        border: '1px solid #666',
        borderRadius: 4,
        overflow: 'hidden',
    },
    customWidth: {
       
    },
}

let build = {}

class QueryForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // Criteria : everything  , headlines , sources 
            criteria: 'headlines',
            filterHeadlines: 'country',
            // body of query
            tags: [],
            selectedCountry: '',
            selectedLanguage: '',
            selectedSource: 'abc-news',
            selectedSortBy: 'technology',

        }
    }

    /** */
    /*
    /*  Handlers for form elements
    /*
    /** */
    // RADIO
    handleSwitch = (e) => {
        e.preventDefault()
        this.setState({ criteria: e.target.value })
    }
    handleFilterEverything = (e) => {
        e.preventDefault()
        this.setState({ filterEverything: e.target.value })
    }
    handleFilterHeadlines = (e) => {
        e.preventDefault()
        this.setState({ filterHeadlines: e.target.value })
    }
    // SELECTS
    handleSelectCategory = (eventIsNulled, key, value) => {
        this.setState((prevState) => ({ selectedSortBy: value }))
    }
    handleSelectCountry = (eventIsNulled, key, value) => {
        this.setState((prevState) => ({ selectedCountry: value }))
    }
    handleSelectLanguage = (eventIsNulled, key, value) => {
        this.setState((prevState) => ({ selectedLanguage: value }))
    }
    handleSelectSource = (eventIsNulled, key, value) => {
        this.setState((prevState) => ({ selectedSource: value }))
    }
    // TAGS
    handleCheckTags = (e) => {
        let tags = this.state.tags
        return (e !== '' && tags.indexOf(e) === -1 && (/[A-Za-z0-9]/).test(e)) && tags.length < 5
    }
    handleAddTag = (tags) => {
        this.setState({ tags })
    }
    handleDeleteTag = (tagOut) => {
        this.setState(prevState => ({ tags: prevState.tags.filter(tag => tag === tagOut) }))
    }
    // 
    buildQuery() {
        let bundle = {}
        const s = { ...this.state }

        let words = s.tags,
            selectedCountry = s.selectedCountry,
            selectedLanguage = s.selectedLanguage,
            selectedSortBy = s.selectedSortBy,
            selectedSource = s.selectedSource,
            criteria = s.criteria,
            filterHeadlines = s.filterHeadlines;

        switch (criteria) {
            case 'headlines':
                if (filterHeadlines === 'country') {
                    bundle = {
                        q: words.length > 0 ? words.join(',') : '',
                        country: selectedCountry,
                        category: selectedSortBy,
                        pageSize: 100
                    };
                } else {
                    bundle = {
                        q: s.tags.length > 0 ? s.tags.join(',') : '',
                        sources: selectedSource,
                        pageSize: 100
                    };
                }
                this.props.queryHeadlines(bundle);
                break;
            case 'sources':
                bundle = {
                    country: selectedCountry,
                    language: selectedLanguage,
                    category: selectedSortBy

                };
                this.props.querySources(bundle);
                break;
            default:
                break;

        }
        return bundle
    }
    handleSubmitQuery = (e) => {
        e.preventDefault()
        this.buildQuery()
    }

    componentWillReceiveProps(props) {

        build = {
            categories: allowed.categories.map( el  => { return <MenuItem key={`op-cat-${el.code}`} value={el.code} primaryText={el.option} /> }
            ),
            countries: allowed.countries.map( el => { return <MenuItem key={`op-co-${el.code}`} value={el.code} primaryText={el.option} /> }
            ),
            languages: allowed.languages.map( el => { return <MenuItem key={`op-la-${el.code}`} value={el.code} primaryText={el.option} /> }
            ),
            fromSource: this.props.setSources.map( (el, idx, arr) => { return <MenuItem key={`op-source-${el.id}`} value={arr[idx].id} primaryText={el.name} /> }
            )
        }
    }

    render() {

        return (

            <form name='query'>
                <MenuItem disabled={true}>
                    <IconButton
                        style={styles.buttonClose}
                        onClick={this.props.handleCloseButton}>
                        <NavigationClose />
                    </IconButton>
                </MenuItem>
                <MenuItem disabled={true}>
                    <FlatButton
                        label='Submit Search'
                        backgroundColor='#48b1bf'
                        hoverColor='#06beb6'
                        labelPosition='before'
                        icon={<ContentSend />}
                        onClick={this.handleSubmitQuery}
                        fullWidth={true}
                        style={styles.submitInput} />
                </MenuItem>
                <RadioButtonGroup name='criteria'
                    value={this.state.criteria}
                    onChange={this.handleSwitch}
                    style={styles.block}
                    defaultSelected='headlines'
                    fullWidth={true}>
                    <RadioButton
                        value='headlines'
                        style={styles.radioButton}
                        label=' Headlines' />
                    <RadioButton
                        value='sources'
                        style={styles.radioButton}
                        label=' Publishers' />
                </RadioButtonGroup>
                <Divider />
                <div hidden={(this.state.criteria !== 'headlines')}>
                    <RadioButtonGroup name='filterHeadlines'
                        value={this.state.filterHeadlines}
                        onChange={this.handleFilterHeadlines}
                        defaultSelected='country'
                        style={styles.block}
                        fullWidth={true}>
                        <RadioButton
                            value='country'
                            style={styles.radioButton}
                            label=' by Country & Category' />
                        <RadioButton
                            value='sources'
                            style={styles.radioButton}
                            label=' by Publisher' />
                    </RadioButtonGroup>
                </div>
                <MenuItem>
                    <SelectField name='category'
                        floatingLabelText='Category'
                        floatingLabelFixed={true}
                        onChange={this.handleSelectCategory}
                        value={this.state.selectedSortBy}
                        style={styles.select}
                        fullWidth={true}
                        disabled={(this.state.criteria === 'headlines' && this.state.filterHeadlines !== 'country')}>
                        {build.categories}
                    </SelectField>
                </MenuItem>
                <MenuItem>
                    <SelectField name='country'
                        floatingLabelText='Country'
                        floatingLabelFixed={true}
                        onChange={this.handleSelectCountry}
                        value={this.state.selectedCountry}
                        style={styles.select}
                        fullWidth={true}
                        maxHeight={200}
                        disabled={(this.state.criteria === 'headlines' && this.state.filterHeadlines === 'sources')}>
                        {build.countries}
                    </SelectField>
                </MenuItem>
                <MenuItem>
                    <SelectField name='language'
                        floatingLabelText='Language'
                        floatingLabelFixed={true}
                        onChange={this.handleSelectLanguage}
                        value={this.state.selectedLanguage}
                        style={styles.select}
                        fullWidth={true}
                        maxHeight={600}
                        disabled={(this.state.criteria === 'headlines')}>
                        {build.languages}
                    </SelectField>
                </MenuItem>
                <MenuItem>
                    <SelectField name='source'
                        floatingLabelText='Publisher'
                        onChange={this.handleSelectSource}
                        value={this.state.selectedSource}
                        style={styles.select}
                        fullWidth={true}
                        maxHeight={200}
                        disabled={(this.state.criteria === 'headlines' && this.state.filterHeadlines === 'country') || this.state.criteria === 'sources' }>
                        {build.fromSource}
                    </SelectField>
                </MenuItem>
                <MenuItem >
                <Subheader style={{ marginBottom : 0 ,paddingBottom : 0}}>Refine Search <small>( use : Enter to commit)</small></Subheader>
                    <ChipInput allowDuplicates={false}
                        hintText={'max 5 Tags'}
                        floatingLabelText='Tags'
                        style={styles.chipInput}
                        fullWidth={true}
                        searchText={this.state.tags}
                        newChipKeyCodes={[13]}
                        onRequestDelete={this.handleDeleteTag}
                        defaultValue={this.state.tags}
                        onChange={this.handleAddTag}
                        onBeforeRequestAdd={this.handleCheckTags}
                        disabled={(this.state.criteria !== 'headlines')}
                    />
                </MenuItem>
            </form>


        )
    }

}

export default QueryForm
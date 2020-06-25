import React from 'react'
import classes from './Homepage.module.scss'
import NewsList from '../NewsList/NewsList'
import NewsFiltersBar from '../NewsFiltersBar/NewsFiltersBar'
import languageContext from '../../../languageContext';
import { Pagination } from 'semantic-ui-react'


class Homepage extends React.Component {
    
    static contextType = languageContext;

    constructor(props) {
        super(props)

        this.state = {
            results: null,
            category: 'general',
            lang: null,
            activePage: 1,
        }
    }

    componentDidMount() {
        this.getArticles()
        this.setState({ lang: this.context });
    }

  componentDidUpdate(prevProps, prevState,snapshot) {
    if (
            prevState.category !== this.state.category ||
            prevState.searchQuery !== this.state.searchQuery ||
            prevState.lang !== this.state.lang
    ) {
            this.getArticles();
    }
    if (prevState.lang !== this.context) this.setState({ lang: this.context });
    if(prevState.phrase !== this.state.phrase) this.getArticles()
    if(prevState.activePage !== this.state.activePage) this.getArticles()
  
    }


    getArticles() {
       const {category, lang, phrase, activePage} = this.state
       const query = category ? `&category=${category}` : ''
       const queryWithPhrase = phrase ? `${query}&q=${phrase}` : query

        fetch(`http://localhost:4000/articles?page=${activePage}&country=${lang}${queryWithPhrase}`)
        .then((response) => response.json())
        .then((results) => this.setState({results}))
    }

    setCategory = category => this.setState({category})
    setSearchPhrase = (e) => {
        const phrase = e.target.value
        if(phrase.length >= 3) this.setState({phrase})
        if(!phrase || phrase === '') this.setState({phrase : null})
     
    }

    onPageChange = (e, {activePage}) => {
        this.setState({activePage})
    }
    
    render() {

        const {results} = this.state;

        if(!results) return null;

        return (
            <div id={classes.Homepage}>
                <NewsFiltersBar 
                    onCategoryChange={this.setCategory}
                    onSearchPhraseChange = {this.setSearchPhrase}
                />
                <NewsList articles={results.articles}/>
                {results && results.totalResults 
                ? <Pagination  
                    className={classes.Pagination}
                    defaultActivePage={1} 
                    totalPages={Math.ceil(results.totalResults/20)}
                    onPageChange={this.onPageChange}
                     /> 
                : null}
            </div>
        )
    }
}

export default Homepage


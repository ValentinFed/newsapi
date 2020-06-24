import React from 'react'
import './Homepage.css'
import NewsList from '../NewsList/NewsList'
import NewsFiltersBar from '../NewsFiltersBar/NewsFiltersBar'
import languageContext from '../../../languageContext';


class Homepage extends React.Component {
    
    static contextType = languageContext;

    constructor(props) {
        super(props)

        this.state = {
            results: null,
            category: 'general',
            lang: null,
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
  
    }


    getArticles() {
       const {category, lang, phrase} = this.state
       const query = category ? `&category=${category}` : ''
       const queryWithPhrase = phrase ? `${query}&q=${phrase}` : query

        fetch(`http://localhost:4000/articles?country=${lang}${queryWithPhrase}`)
        .then((response) => response.json())
        .then((results) => this.setState({results}))
    }

    setCategory = category => this.setState({category})
    setSearchPhrase = (e) => {
        const phrase = e.target.value
        if(phrase.length >= 3) this.setState({phrase})
        if(!phrase || phrase === '') this.setState({phrase : null})
     
    }
    
    render() {

        const {results} = this.state;

        if(!results) return null;

        return (
            <div id="Homepage">
                <NewsFiltersBar 
                    onCategoryChange={this.setCategory}
                    onSearchPhraseChange = {this.setSearchPhrase}
                />
                <NewsList articles={results.articles}/>
            </div>
        )
    }
}

export default Homepage


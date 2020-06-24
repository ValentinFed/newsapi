import React from 'react';
import PropTypes from 'prop-types'
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown'
import classes from './NewsFiltersBar.module.scss'

const NewsFiltersBar = (props) => (
    <div className={classes.NewsFiltersBar}>
        <CategoryDropdown onCategoryChange={props.onCategoryChange}/>
        <input id='search-phrase-input' onChange={props.onSearchPhraseChange} />
    </div>
)

NewsFiltersBar.propTypes = {
    onCategoryChange: PropTypes.func.isRequired,
    onSearchPhraseChange: PropTypes.func.isRequired,
}


export default NewsFiltersBar
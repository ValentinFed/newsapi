import React, { useState, useEffect, useCallback, useContext } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import  classes from './PokemonsNewsPage.module.scss'
import NewsList from "../NewsList/NewsList"
import moment from 'moment'
import languageContext from '../../../languageContext';

const sortByOptions = [
    {value:'publishedAt', name: 'Publish date'},
    {value:'relevancy', name: 'Relevancy'},
    {value:'popularity', name: 'Popularity'},
]

const PokemonsNewsPage = () => {
    
    const [startDate, setStartDate] = useState(moment().subtract(1, 'months').toDate())
    const [endDate, setEndDate] = useState(moment().toDate())
    const [sortBy, setSortBy] = useState(sortByOptions[0].value)
    const [results, setResults] = useState(null)
    const lang = useContext(languageContext);


    const fetchArticles = useCallback(() => {
        if(startDate > endDate) return alert('Whatttttt????????')

        fetch(
          `http://localhost:4000/pokemons-news?language=${lang}&from=${startDate.toISOString()}&to=${endDate.toISOString()}&sortBy=${sortBy}`
        )
          .then(response => response.json())
          .then(res => setResults(res));
      }, [startDate, endDate, lang, sortBy]);

 
      useEffect(() => {
        fetchArticles();
      }, [fetchArticles]);

     const sortBySend = (e) => {
        const value = e.target.value;
        setSortBy(value)
     }

    return (
        <div className={classes.PokemonsNewsPage}>
            <div className={classes.PokemonsNewsPage__nav}>
                <div className={classes.PokemonsNewsPage__nav_item}>
                    <label> Start date</label>
                    <DatePicker
                        selected={startDate}
                        onChange={setStartDate}
                        dateFormat='dd-MM-yyyy'
                        maxDate={endDate}
                    />
                </div>
            
                <div className={classes.PokemonsNewsPage__nav_item}>
                    <label > End date</label>
                    <DatePicker
                        selected={endDate}
                        onChange={setEndDate}
                        dateFormat='dd-MM-yyyy'
                        maxDate={new Date()}
                    />
                </div>

                <div className={classes.PokemonsNewsPage__nav_item}>
                    <label> Sort by:</label>
                    <select value={sortBy} onChange={sortBySend}>
                        {sortByOptions.map( ({value,name}) => <option key={value + Math.random()} value={value}>{name}</option>)}
                    </select>
                     
                </div>
             </div>   
         
            {results ? (<NewsList articles={results.articles} />) : null}
        </div>
    )
}

export default PokemonsNewsPage


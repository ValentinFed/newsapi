import React, { useState, useEffect, useCallback, useContext } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import  classes from './PokemonsNewsPage.module.scss'
import NewsList from "../NewsList/NewsList"
import moment from 'moment'
import languageContext from '../../../languageContext';

const PokemonsNewsPage = () => {
    
    const [startDate, setStartDate] = useState(moment().subtract(1, 'months').toDate())
    const [endDate, setEndDate] = useState(moment().toDate())
    const [results, setResults] = useState(null)
    const lang = useContext(languageContext);


    const fetchArticles = useCallback(() => {
        if(startDate > endDate) return alert('Whatttttt????????')

        fetch(
          `http://localhost:4000/pokemons-news?language=${lang}&from=${startDate.toISOString()}&to=${endDate.toISOString()}`
        )
          .then(response => response.json())
          .then(res => setResults(res));
      }, [startDate, endDate, lang]);

 
      useEffect(() => {
        fetchArticles();
      }, [fetchArticles]);



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
             </div>   
         
            {results ? (<NewsList articles={results.articles} />) : null}
        </div>
    )
}

export default PokemonsNewsPage


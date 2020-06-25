import React from 'react'
import classes from  "./NewsList.module.scss"
import NewsCard from '../NewsCard/NewsCard'


const NewsList = (props) => (
    <div id={classes.NewsList}>
        {props.articles.map(item => (
            <NewsCard
                key={item.publishedAt+Math.random()}
                urlToImage = {item.urlToImage}
                title = {item.title}
                description = {item.description}
                url = {item.url}
                sourceName= {item.source.name}
                publishedAt = {item.publishedAt}
            />
        ))}
    </div>
)

export default NewsList
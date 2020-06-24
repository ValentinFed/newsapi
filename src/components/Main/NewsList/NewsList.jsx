import React from 'react'
import "./NewsList.css"
import NewsCard from '../NewsCard/NewsCard'


const NewsList = (props) => (
    <div id="NewsList">
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
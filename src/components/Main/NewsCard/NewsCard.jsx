import React from 'react'
// import './NewsCard.css'
import { Card, Image, Button } from 'semantic-ui-react'

// const NewsCard = (props) => (
//     <div className='NewsCard'>
//         <img src={props.urlToImage} alt=""/>
//         <h2>{props.title}</h2>
//         <p className="NewsCard__date">{props.publishedAt}</p>
//         <p>{props.description}</p>
//         <div className='NewsCard__footer'>
//             <p className='NewsCard__media'>źródło: {props.sourceName}</p>
//             <a href={props.url} target="_blank" rel="noopener noreferrer">Zobacz więcej</a>
//         </div>

//     </div>
// )


const NewsCard = (props) => (
    <Card>
        <Image src={props.urlToImage} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{props.title}</Card.Header>
            <Card.Meta>
                <span className='date'>{props.publishedAt}</span>
            </Card.Meta>
            <Card.Description>
                {props.description}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <p>źródło: {props.sourceName}</p>
            <Button href={props.url} target="_blank" rel="noopener noreferrer" as="a" floated="right">Zobacz więcej</Button>
        </Card.Content>
  </Card>
)



export default NewsCard
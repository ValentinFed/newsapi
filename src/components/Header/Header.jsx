import React from 'react'
import classes from  './Header.module.scss'
import {Link} from 'react-router-dom'
import LanguageChoice from './LanguageChoice/LanguageChoice'

const Header = ({onLanguageChange}) => (
    <header className={classes.Header}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pokemons-news">Pokemons news</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </nav>
        <LanguageChoice onLanguageChange={onLanguageChange}/>
    </header>
)

export default Header
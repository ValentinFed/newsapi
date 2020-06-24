import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Homepage from './Homepage/Homepage'
import Helppage from './Helppage/Helppage'
import PokemonsNewsPage from './PokemonsNewsPage/PokemonsNewsPage'




const Main = () => (
        <main>
            <Switch>
                <Route exact path="/"> 
                    <Homepage />
                </Route>
                <Route exact path="/pokemons-news">   
                    <PokemonsNewsPage />
                </Route>
                <Route exact path="/help">   
                    <Helppage />
                </Route>
            </Switch>
        </main>
)

export default Main
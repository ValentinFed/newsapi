import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={ Link } to='/'> 
          Home
        </Menu.Item>
        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} as={ Link } to='/about'> 
          About
        </Menu.Item>
        <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} as={ Link } to='/help'> 
          Help
        </Menu.Item> 
  
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item>
              "Lang"
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
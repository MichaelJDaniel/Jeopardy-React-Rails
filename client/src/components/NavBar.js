import React from 'react'
import {NavLink,} from 'react-router-dom'
import {Menu,} from 'semantic-ui-react'

const NavBar = () => (
  <Menu inverted>
    <Menu.Item>
      <NavLink exact to="/">
        Home
      </NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink exact to="/catagories">
        Catagories
      </NavLink>
    </Menu.Item>
  </Menu>
)


export default NavBar;
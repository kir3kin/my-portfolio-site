import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/scss/blocks/components/navbar.scss'

export const Navbar: React.FC = () => {
	return (
  <nav className="nav">
    <div className="nav__wrapper">
      <ul className="nav__list">
        <li><NavLink to="/">My projects</NavLink></li>
        <li><NavLink to="/about">About me</NavLink></li>
      </ul>
    </div>
  </nav>
	)
}
import './Navbar.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import logo from '../assets/logoPomodoroBuddy.png';

export default function Navbar()
{   
    return(
        <nav className='navbar' id='navbar-menu'>
            <div className='nav-item-logo'>
                <Link to='' className='nav-item-link'>
                    <img
                    alt='logotipo do pomodoro buddies'
                    width='40px'
                    src={logo}
                    />
                    Pomodoro Buddies
                </Link>
            </div>
            <div className='nav-item' id='navbar-options'>
                <Link to='/counter'  className='nav-item-link'>Temporizador</Link>
            </div>
            <div className='nav-item' id='navbar-options'>
                <Link to='/tasks'  className='nav-item-link'>Tarefas</Link>
            </div>
            <div className='nav-item' id='navbar-options'>
                <Link to='/statistics'  className='nav-item-link'>Estatísticas</Link>
            </div>
            <div className='nav-item-toggle'>
                <a className="nav-item-link"  data-bs-toggle="collapse" href="#navbar-options" role="button" aria-expanded="false" aria-controls="navbar-menu">
                    <i className="fa fa-bars"></i>
                </a>
            </div>
    </nav>
    );
}
import './Header.css'
import logo from '../assets/findjobs.png';
import profile from '../assets/profile.png'
import Navigation from './Navigation'

export default function Header({ name }) {
  return (
    <div className='header-container'>
      <img src={logo} alt="findjobs-logo" className='logo' />
      <div className='nav-container'>
        <Navigation title='Browse Jobs' active />
        <Navigation title='My Applied' />
        <Navigation title='About Us' />
      </div>
      <div className='user-container'>
        <p className='user-name'>Hi, {name}</p>
        <img src={profile} alt="user-icon" className='logo' />
      </div>
    </div>
  )
}
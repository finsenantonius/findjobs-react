import './Menu.css'
import menu from '../assets/menu.png'
import filter from '../assets/filter.png'
import link from '../assets/link.png'

export default function Menu() {
  return (
    <div className='icon-container'>
      <img src={menu} alt="menu-icon" className='icon' />
      <img src={filter} alt="filter-icon" className='icon' />
      <img src={link} alt="link-icon" className='icon' />
    </div>
  )
}
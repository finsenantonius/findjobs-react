import './SearchBar.css'
import search from '../assets/magnifying.png'

export default function SearchBar() {
  return (
    <div className='input-container'>
      <span>
        <img src={search} alt='search-icon' className='icon' />
      </span>
      <input type='text' placeholder='Search' className='search-input' />
    </div>
  )
}
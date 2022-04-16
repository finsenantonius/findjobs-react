import './Navigation.css'

export default function Navigation({ title, active }) {
  return (
    <a href='#' className='nav-button' style={{color: active ? 'black' : 'grey'}}>
      {title}
    </a>
  )
}
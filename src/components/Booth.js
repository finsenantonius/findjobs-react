import './Booth.css'

export default function Booth({ item }) {
  return (
    <div className='container'>
      <div className='booth-header'>
        <div className='header-inner'>
          <p>{`Booth ${item.id}`}</p>
        </div>
      </div>

      <div className='booth-middle'>
        <div className='black-bar'></div>
        <div className='black-bar'></div>
      </div>

      <div className='booth-content'>
        <div className='content-inner'>
          <img src={item.img} alt="company-logo" className='logo' />
          <p>{item.name}</p>
        </div>
      </div>
    </div>
  )
}
import './Banner.css'
import Button from './Button'

export default function Banner({ title, subTitle }) {
  return (
    <div className='banner'>
      <div className='top-banner'></div>
      <div className='mid-banner'>
        <p className='banner-title'>{title}</p>
        <p className='banner-subTitle'>{subTitle}</p>
        <Button text='Register Now' />
      </div>
      
      <div className='bot-banner'></div>
      <div className='bot-square'></div>
      <div className='box-shadow'></div>
      <div className='carpet-container'>
        <div className='carpet'>
          <div className='carpet-inner'></div>
        </div>
      </div>
    </div>
  )
}
import React from 'react'
import KeyBoard from './KeyBoard'

export default function Home() {
  return (
    <div className='home'>
        <div className='home__wrapper'>
        <h1 className='home__title'>إختبر ومارس الكتابة <br/>السريعة علي لوحة المفاتيح.</h1>
        <p className='home__bling_text'>أنقر علي لوحة المفاتيح</p>
        <KeyBoard/>
        </div>
    </div>
  )
}

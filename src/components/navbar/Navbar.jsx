import React from 'react'
import { FaRegKeyboard } from "react-icons/fa";
export default function () {
    return (
        <header className="header">
          <div className="header__logo"><FaRegKeyboard fontSize='60px'/></div>
          <nav className="header__navbar">
            <ul className="navbar__list">
              <li className="navbar__item"><a href="/" className="navbar__link">الصفحة الرئيسية</a></li>
              <li className="navbar__item"><a href="#falling-words" className="navbar__link">الكلمات الممطرة</a></li>
              <li className="navbar__item"><a href="#speed-test" className="navbar__link">إختبار السرعة</a></li>
              <li className="navbar__item"><a href="/" className="navbar__link">تمارين</a></li>
            </ul>
          </nav>
        </header>
      );
}

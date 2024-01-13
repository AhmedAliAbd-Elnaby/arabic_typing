import React, { useState } from "react";

const Key = ({ children}) => {
  const [isActive, setIsActive] = useState('');
  window.addEventListener('keydown', (e)=>{ 
    if (e.key == children) setIsActive('key__active')
  })
  window.addEventListener('keyup',(e)=>{setIsActive('')})
  return <div className={`key--leter ${isActive}`}>{children}</div>;
};

export default function KeyBoard() {


  return (
    <div className="keyboard">
      <div className="keyboard__row">
        {
       ['ذ',1,2,3,4,5,6,7,8,9,0,'-','='].map((char,index)=>(
          <Key>{char}</Key>
        ))
        }
      
      </div>

      <div className="keyboard__row">
        {
          ['د', 'ج', 'ح', 'خ', 'ه', 'ع', 'غ', 'ف', 'ق', 'ث', 'ص', 'ض'].map((char,index)=>(
            <Key>{char}</Key>
          ))


        }

      </div>
      <div className="keyboard__row">
        {
          ['ط', 'ك', 'م', 'ن', 'ت', 'ا', 'ل', 'ب', 'ي', 'س', 'ش'].map((char,index)=>(
            <Key>{char}</Key>
          ))

        }


      </div>

      <div className="keyboard__row">
        {
          ['ظ', 'ز', 'و', 'ة', 'ى', 'لا', 'ر', 'ؤ', 'ء', 'ئ'].map((char,index)=>(
            <Key>{char}</Key>
          ))

        }
      </div>

      <div className="keyboard__row">
        {/* <div
          className="key--leter key--right key--space"
          data-key="32"
          data-char=" "
        >
          &nbsp;
        </div> */}

      </div>

    </div>
  );
}

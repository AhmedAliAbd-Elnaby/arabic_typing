import React, { useState,useRef } from "react";
import Word from "./Word";
import { arabicWords } from "../../modesl";
import KeyBoard from "../home/KeyBoard";

export default function FallingWords() {
  const [words, setWords] = useState(arabicWords);
  const [score, setScore] = useState(0);

  // handel Enter and Space Key.
  // remove the word from input section.
  const handelkeyDown = (e) => {
    if (e.key == "Enter" || e.key == " ") {
      e.target.value = "";
    }
  };

  const handelChange = (e) => {
    words.forEach((word, index) => {
      if (word == e.target.value) {
        const removeWord = (indexToRemove) => {
          const updatedWords = words.filter(
            (_, index) => index !== indexToRemove
          );
          setWords(updatedWords);
          setScore(score + 1);
        };
        removeWord(index);
        e.target.value = "";
      }
    });
  };
  const inputRef = useRef(null);
  const [start, setStart] = useState(false);
  const handelClick = ()=>{
    setStart(true)
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div className="falling-words" id="falling-words">
      <KeyBoard className='falling-words__keyboard'/>
      <button 
      className="falling-words--start-btn"
      onClick={handelClick} style={{display :`${(start) ? 'none' : 'block'}`}}>ابداء</button>

      {(start) ? words.map((word, index) => (
        <Word key={word} wordFromArray={word} xPos={-index * 100} />
      )
      
      ):null}

      <div className="typing-sectioin">
        <input 
        style={{opacity :`${(!start) ? 0 : 1}`}}
        ref={inputRef}
        className="falling-words--typing-input" 
        type="text" 
        onChange={handelChange} 
        onKeyDown={handelkeyDown}
        />
        <p className="falling-words__score"
        style={{opacity :`${(!start) ? 0 : 1}`}}
        >Score:{score}</p>
      </div>

      
    </div>
  );
}

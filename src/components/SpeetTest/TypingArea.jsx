// TypingArea.js 
import React from 'react'; 

const TypingArea = ({ 
typingText, 
inpFieldValue, 
timeLeft, 
mistakes, 
WPM, 
CPM, 
initTyping, 
handleKeyDown, 
resetGame, 
}) => { 
return ( 
	<div className="warpper"> 
	<div className="typing-text"> 
		<p id="paragraph">{typingText}</p> 
	</div> 
	
	<div className="results"> 

		<ul className="result-details"> 
		<li className="time"> 
			<p>الوقت المتبقي:</p> 
			<span> 
			<b>{timeLeft}</b>s 
			</span> 
		</li> 
		<li className="mistake"> 
			<p>الأخطاء:</p> 
			<span>{mistakes}</span> 
		</li> 
		<li className="wpm"> 
			<p>كلمة/دقيقة:</p> 
			<span>{WPM}</span> 
		</li> 
		<li className="cpm"> 
			<p>حرف/دقيقة:</p> 
			<span>{CPM}</span> 
		</li> 
		</ul> 
		
		<button onClick={resetGame} className="try-again-btn"> 
		حاول مجددا
		</button> 
	
	</div> 
	</div> 
); 
}; 

export default TypingArea; 

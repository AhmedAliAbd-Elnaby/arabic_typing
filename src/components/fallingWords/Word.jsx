import React, { useRef, useEffect} from "react";

export default function Word({ wordFromArray, xPos }) {
  const elementRef = useRef(null);
  let firstPos = xPos;
  const arr = [400, 600, 800];
  const ll = arr[parseInt((Math.random() * 3))];
  useEffect(() => {
    const element = elementRef.current;
    element.style.left = `${ll}px`;
    const moveElement = () => {
      element.style.top = (firstPos+= .3) + 'px';
      requestAnimationFrame(moveElement);
    };

    requestAnimationFrame(moveElement);
  }, []);

  return (
    
    <div className="falling-words__word" ref={elementRef}>{wordFromArray}</div>
  );
}

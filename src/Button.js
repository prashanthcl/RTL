import React, { useState } from "react";
function Button(props) {
  const [text, setText] = useState("Change to Blue");
  const [color, setColor] = useState("red");
  const[disabled,setDisabled] = useState(false)
  const handleClick = (e) => {
    let text = e.target.innerText;
    
    
    if (text.includes("Blue")) {
      setColor("blue");
      setText("Change to Red");
    }

    else {
      setColor("red");
      setText("Change to Blue");
    }
  };
  const changeCheckBox = (e)=>{
      setDisabled(e.target.checked)
      if(e.target.checked){
        setColor('gray')
    }
    else{
        setColor('red')
    }

  }
  return (
    <>
      <button disabled = {disabled ? disabled : disabled} onClick={handleClick} style={{ backgroundColor: color }}>
        {text}
      </button>
      <input type='checkbox' onChange={changeCheckBox}></input>
    </>
  );
}
export default Button;

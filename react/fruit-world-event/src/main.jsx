import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

const btnStyle = {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
}

const handleClickMeButton = () => {
    alert("Click me! Chúc mừng năm mới");
}

const btnClickMe = <button style={btnStyle} onClick={handleClickMeButton}>Click Me!</button>;
const btnKickMe = <button style={btnStyle} onClick={() => alert("Kick me! Năm mới làm cú chấn động")}>Kick Me!</button>;

// wrap these into div/containter,empty fragment 
const btnGroup = (
    <>
        {btnClickMe}
        {'        '}
        {btnKickMe}
    </>
)

// callback function, that assign with the button when clicked
// button (React)has a function which is onClick()
// which the button is clicked, the callback is called

createRoot(document.getElementById('root')).render(
    btnGroup
)

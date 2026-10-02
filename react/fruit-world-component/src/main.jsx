import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './FruitCards.css';
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//     <App />
// )


{/* const fruitMangCauJSX = <div className='card'> */ }
{/*     Mãng Cầu */ }
{/* </div> */ } // OKE nghen

function FruitCards() {
    return (<div className='card'>
        <h1 style={{ color: "red", fontFamily: "Arial", fontSize: "24px", fontWeight: "bold" }}>Mãng Cầu</h1>
    </div>);
}

function FruitsContainter() {
    return (<div className="container">
        <FruitCards />
        <FruitCards />
        <FruitCards />
        <FruitCards />
        <FruitCards />
    </div>
    );
}

createRoot(document.getElementById('root')).render(<FruitsContainter />)

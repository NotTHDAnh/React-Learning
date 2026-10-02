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

function FruitCards({ fruitName }) {
    return (<div className='card'>
        <h1 style={{ color: "red", fontFamily: "Arial", fontSize: "24px", fontWeight: "bold" }}>{fruitName}</h1>
    </div>);
}

function FruitsContainter() {
    return (<div className="container">
        <FruitCards fruitName="Mãng Cầu" />
        <FruitCards fruitName="Sung" />
        <FruitCards fruitName="Dừa" />
        <FruitCards fruitName="Đủ" />
        <FruitCards fruitName="Xoài" />
    </div>
    );
}

createRoot(document.getElementById('root')).render(<FruitsContainter />)

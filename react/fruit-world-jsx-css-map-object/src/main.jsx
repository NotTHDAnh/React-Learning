import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import './FruitCards.css'

const fruit = [
    { id: 1, name: "Cầu", desc: "Cầu là 1 loại trái cây", price: 10000 },
    { id: 2, name: "Dừa", desc: "Mơ ăn sung mặc sướng", price: 15000 },
    { id: 3, name: "Đủ", desc: "Dừa dừa đủ là hạnh phúc", price: 20000 },
    { id: 4, name: "Xoài", desc: "Đu đủ đặng đặng còn gì bằng", price: 25000 },
    { id: 5, name: "Sung", desc: "Tiền xài như nước", price: 30000 }
];

const jsxFruits = fruit.map(x => <div><h1>{x}</h1></div>);

const redStyle = {
    color: "red"
}

const spanStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#0000ff",
}

const jsxFruitsCSS = fruit.map(x => (
    <div className='card'>
        <h1>{x.name}</h1>
        <span style={spanStyle}>{x.desc}</span><br />
        <span style={{ fontSize: "25px", fontWeight: "bold", color: "orange" }}>${x.price}</span>
    </div>
));
const app = (<div className='container'>{jsxFruitsCSS}</div>)

createRoot(document.getElementById('root')).render(
    app
)

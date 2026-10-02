import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import './FruitCards.css'

const fruit = ['Cau', 'Dau', 'Dua', 'Du du', 'Xoai'];

const jsxFruits = fruit.map(x => <div><h1>{x}</h1></div>);
const jsxFruitsCSS = fruit.map(x => <div className='card'><h1>{x}</h1></div>);
const app = (<div className='container'>{jsxFruitsCSS}</div>)

createRoot(document.getElementById('root')).render(
    app
)

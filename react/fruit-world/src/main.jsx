import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import './FruitCards.css'

// get today date
const today = new Date();
const yearNow = today.getFullYear();

// Print Mang Cau Info
const fruitMangCau = <div className='card'>
    Mãng cầu là đầu mâm ngũ quả đất phương Nam {today.toLocaleDateString()} | {yearNow}
</div>;
const fruitSung = <div className='card'>
    Sung: SUng sướng cả năm{today.toLocaleDateString()} | {yearNow}
</div>;
const fruitDua = <div className='card'>
    Dừa: Vừa vừa, đặng đặng, cũng cũng {today.toLocaleDateString()} | {yearNow}
</div>;
const fruitDuDu = <div className='card'>
    Đu Đủ: Đu Đủ, đủ ăn đủ mặc{today.toLocaleDateString()} | {yearNow}
</div>;
const fruitXoai = <div className='card'>
    Xoài: Tiêu xoài thoải con gà mái {today.toLocaleDateString()} | {yearNow}
</div>;

// Group all these JSX in a big tag, big array
//const fruitList = [fruitMangCau, fruitDua, fruitDuDu, fruitSung, fruitXoai];
const fruitList = (<div className='container'>
    {fruitMangCau}
    {fruitSung}
    {fruitDua}
    {fruitDuDu}
    {fruitXoai}
</div>);

const fruitListFragment = (<>
    {fruitMangCau}
    {fruitSung}
    {fruitDua}
    {fruitDuDu}
    {fruitXoai}
</>);

// createRoot(document.getElementById('root')).render(
//     fruitMangCau
// ) // render(JSX) 1 card

createRoot(document.getElementById('root')).render(fruitListFragment);

// render(can only pass 1 argument)
// render(argument is a React element, JSX element)

// function HelloJSX() {
//     return <div>
//         Hello JSX and CSS
//     </div>;
// }
//
// const welcome = <h1>Welcome to Fruit Universe - F Origin</h1>

// createRoot(document.getElementById('root')).render(
//     <HelloJSX />
// )

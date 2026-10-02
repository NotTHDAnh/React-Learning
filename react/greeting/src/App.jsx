import { useState } from 'react'
import './App.css'

function App() {
    const [greeting, setGreeting] = useState("Chào bạn!")

    const updateGreeting = () => {
        const currentHour = new Date().getHours();
        if (currentHour > 5 && currentHour < 12) {
            setGreeting("Chào buổi sáng");
        }
        else if (currentHour < 18) {
            setGreeting("Chào buổi chiều")
        }
        else {
            setGreeting("Chào buổi tối");
        }
    }

    return (
        <div>
            <p>{greeting}</p>
            <button onClick={updateGreeting}>Cập nhật lời chào</button>
        </div>
    )
}

export default App

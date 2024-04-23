import { useState } from "react";



function App () {
 const now = new Date().toLocaleTimeString();
 console.log(now)
    const [time , setTime] = useState(now);

    function Clock() {
    let newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }
    setInterval(Clock, 1000);
  return (
  <div className="watch-face">
        <div className="time">{time}</div>
        <p className="digital-clock">Digital Clock</p>
        
    </div>

  )
}
export default App;
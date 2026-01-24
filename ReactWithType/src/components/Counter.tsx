import { useState } from "react"
const Counter = () => {
    const [count,setCount]=useState<number|null>()

    const handleCount=()=>{
        setCount((count?? 0) + 1)
    }

  return (
    <div>
        <p>Cups orders: {count}</p>
        {/* <button onClick={()=>setCount((c)=>c+1)}>order one more</button> */}
        <button onClick={handleCount}>order one more</button>
    </div>
  )
}

export default Counter
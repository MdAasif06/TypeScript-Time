import React, { useState } from "react"


interface OrderFormProps{
    onSubmit(order:{name:string;cups:number}):void
}


const OrderForm = ({onSubmit}:OrderFormProps) => {
    const [name,setName]=useState<string>("masala")
    const [cups,setCup]=useState<number>(1)

    const handleSubmit=((e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        onSubmit({name,cups})
    })

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="">chai name</label>
        <input className="border-2 ml-4" type="text" value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
            setName(e.target.value)
        } />
        <label htmlFor="">Cups</label>
        <input className="border-2 ml-4 gap-4" type="number" value={cups} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
            setCup(Number(e.target.value) || 0)
        } />
        <button type="submit">Place order</button>
    </form>
  )
}

export default OrderForm
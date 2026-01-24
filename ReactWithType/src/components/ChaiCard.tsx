interface chaiCardProp{
    name:string,
    price:number,
    isSpecial?:boolean
}


const  chaiCard=({name,price,isSpecial=false}:chaiCardProp)=>{
return(
    <article>
        <h2>
            {name}{isSpecial && <span>⭐</span>}
            <p>{price}</p>
        </h2>
    </article>
)
}
export default chaiCard
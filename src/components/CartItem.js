import React, {useContext, useState} from "react"
import {Context} from '../Context'

function CartItem({item}) {
    const {removeImageFromCart} = useContext(Context)
    const [isHovered, setIsHovered] = useState(false)
    const trashClass = isHovered ? "fill" : "line"

    function toggleTrashIcon() {
        setIsHovered(prevState => !prevState)
    }

    return ( 
        <div className="cart-item">
            <i 
                className={`ri-delete-bin-${trashClass}`} 
                onMouseEnter={toggleTrashIcon} 
                onMouseLeave={toggleTrashIcon} 
                onClick={()=>removeImageFromCart(item)}
            ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem
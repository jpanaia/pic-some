import React, {useContext, useState} from "react"
import CartItem from "../components/CartItem"
import {Context} from "../Context"

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item ={item}/>
    ))
    const totalCost = (cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder(){
        setButtonText("Ordering...")
        setTimeout(function() {
            console.log("Order placed!")   
            setButtonText("Place Order")
            emptyCart()
       }, 3000) 
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost}</p>
            { cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={() => placeOrder()}>{buttonText}</button>
                </div> : 
                <p>You have no items in your cart.</p>
            }
        </main>
    )
}

export default Cart
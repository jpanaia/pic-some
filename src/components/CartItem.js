import React, {useContext} from "react"
import PropTypes from 'prop-types'
import {Context} from '../Context'
import useHover from '../hooks/useHover'

function CartItem({item}) {
    const {removeImageFromCart} = useContext(Context)
    const [hovered, ref] = useHover()
    const trashClass = hovered ? "fill" : "line"

    return ( 
        <div className="cart-item">
            <i 
                className={`ri-delete-bin-${trashClass}`} 
                ref= {ref}
                onClick={()=>removeImageFromCart(item)}
            ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem
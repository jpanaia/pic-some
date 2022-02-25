import React, {useState, useContext} from "react"
import PropTypes from 'prop-types'
import {Context} from '../Context'

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, addImageToCart, removeImageFromCart, cartItems} = useContext(Context)

    const heartIcon = hovered && <i className="ri-heart-line favorite" onClick={()=> toggleFavorite(img.id)}></i>
    const heartIconFilled = <i className="ri-heart-fill favorite" onClick={()=> toggleFavorite(img.id)}></i>

    function cartIcon() {
        if (cartItems.some(e => e.id === img.id))  {
            return <i className="ri-shopping-cart-fill cart" onClick={()=>removeImageFromCart(img)}></i>
        }
        else if (hovered){
            return <i className="ri-add-circle-line cart" onClick={()=>addImageToCart(img)}></i>
        } 
    }

    return (
        <div className={`${className}  image-container`}
             onMouseEnter={() => setHovered(true)} 
             onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid" />
            {(img.isFavorite) ? heartIconFilled : heartIcon}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.exact({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool 
      })
}

export default Image
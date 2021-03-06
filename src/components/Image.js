import React, {useContext} from "react"
import PropTypes from 'prop-types'
import {Context} from '../Context'
import useHover from '../hooks/useHover'

function Image({className, img}) {
    const {toggleFavorite, addImageToCart, removeImageFromCart, cartItems} = useContext(Context)
    const [hovered, ref] = useHover()

    function heartIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={()=> toggleFavorite(img.id)}></i>
        } else if (hovered){
            return <i className="ri-heart-line favorite" onClick={()=> toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon() {
        if (cartItems.some(e => e.id === img.id)) {
            return <i className="ri-shopping-cart-fill cart" onClick={()=>removeImageFromCart(img)}></i>
        }
        else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={()=>addImageToCart(img)}></i>
        } 
    }

    return (
        <div className={`${className}  image-container`}
             ref={ref}
        >
            <img src={img.url} className="image-grid" />
            {heartIcon()}
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
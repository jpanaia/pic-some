import React, {useState, useEffect} from "react"
const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    useEffect(() => {
        const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
        
        const fetchData = async () => {
            try {
              const response = await fetch(url)
              const json = await response.json()
              console.log(json)
              setAllPhotos(json)
            } catch (error) {
              console.log("error", error)
            }
          }
      
          fetchData()
      }, [])

    function toggleFavorite(id) {
        const updatedArray = allPhotos.map(photo => {
            if(photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })

        setAllPhotos(updatedArray)
    }

    function addImageToCart(img) {
        setCartItems(prevItems => [...prevItems, img])
    }

    function removeImageFromCart(img) {
        setCartItems(cartItems.filter(item => item.id !== img.id))
    }

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addImageToCart, removeImageFromCart, cartItems, setCartItems}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

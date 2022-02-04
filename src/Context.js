import React, {useState, useEffect} from "react"
const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    
    useEffect(() => {
        const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
        
        const fetchData = async () => {
            try {
              const response = await fetch(url)
              const json = await response.json()
             // console.log(json)
              setAllPhotos(json)
            } catch (error) {
              console.log("error", error)
            }
          }
      
          fetchData()
      }, [])

    return (
        <Context.Provider value={{allPhotos}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

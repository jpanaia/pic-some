import React, {useContext} from "react"
import Image from "../components/Image"
import {getClass} from "../utils"
import {Context} from "../Context"

function Photos() {
    const {allPhotos} = useContext(Context)
    //console.log(allPhotos)

    const imgElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)}></Image>
    ))

    return (
            <main className="photos">
                {imgElements}
            </main>
    )
}

export default Photos
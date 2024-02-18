import React from "react";


const NasaPhoto = (photoData) => {
    //extract relevant data from the photoData prop
    const { title, url } = photoData;

    return (
        <div className="nasa-photo">
            <img src={url} alt={title} />
        </div>

    )
}
export default NasaPhoto
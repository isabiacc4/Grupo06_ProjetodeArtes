import { useState } from "react";
import style from "@/app/abstracionismo/abstracionismo.module.css"


const ImageGallery = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedText, setSelectedText] = useState(null);

    const openImage = (imageUrl) => {
        setSelectedImage(imageUrl.img);
        setSelectedText(imageUrl.text)
    };

    const closeImage = () => {
        setSelectedImage(null);
        setSelectedText(null);

    };


    return (
        <>

            <div className={style.imageGallery}>
                {props.fotos.map((imageUrl, index) => (

                    <div
                        key={index}
                        className={style.imageThumbnail}
                        onClick={() => openImage(imageUrl)}
                    >
                        <Image src={imageUrl.img} alt={`Image ${index}`} width={300} height={300}/>

                        
                    </div>

                ))}
            </div>

            {selectedImage && (
                <div className={style.imageModal}>

                    <span className={style.closeButton} onClick={closeImage}>
                        &times;
                    </span>

                    <Image src={selectedImage} alt="Selected Image" width={300} height={300}/>

                    <p className="descricao">{selectedText}</p>

                </div>

            )}


        </>
    )
}

export default ImageGallery
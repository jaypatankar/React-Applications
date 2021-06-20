import React, {useState, useEffect} from 'react';

const ImageLibrary = () => {
    const[images, setImages] = useState([]);

    useEffect(() => {
        fetch("https://picsum.photos/v2/list")
        .then(data => data.json())
        .then(data => {
            setImages(data)
            console.log(data);
        })
        
    },[]
    );

    return(
        <div style={{display:"flex", justifyContent:"center", flexDirection:"row" , flexWrap:"wrap", width:"100%"}}>
            {images.map((image) => (
                <Image key={image.id} url={image.download_url} author={image.author}/>
            ))}
        </div>
    )
}


const Image = (props) => {
    return(
        <div style={{display:"flex" , justifyContent:"center", alignItems:"center", flexDirection:"column", margin:"1rem"}}>
             <img style={{height:"200px", width:"auto"}} src={props.url} alt={props.author} />
             <div> <h3>{props.author}</h3></div>
        </div> 
    );
}


export default ImageLibrary;
import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../project/photo.css';
import { Link } from "react-router-dom";
import images from '../imageData';

export const Addphoto = () => {
    const [search, setSearch] = useState('');
    const [filteredImages, setFilteredImages] = useState([]);
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [folderName, setFolderName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [sourceName, setSourceName] = useState('');
    const imageurlRef = useRef();
    const sourceNameRef = useRef();
    const categoryRef = useRef();
  

    useEffect(() => {
        const imageData = localStorage.getItem(images.length + 1);
        let updatedImages = [];
        if (imageData) {
            updatedImages = [...images, JSON.parse(imageData)];
        } else {
            updatedImages = [...images];
        }
        setFilteredImages(updatedImages);
    }, []);

    const handleSearchChange = (event) => {
        const searchData = event.target.value;
        setSearch(searchData);
        const results = images.filter(image =>
            image.name.toLowerCase().includes(searchData.toLowerCase())
        );
        setFilteredImages(results);
    };

    const handleDialog = (name) => {
        setCategoryName(name === 'newFolder' ? '' : name);
        setIsOpenDialog(!isOpenDialog);
    };

    const handleChange = (value) => {
        setFolderName(value);
    };

    const handleImageClicked = useCallback(() => {
        const urlR = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!imageUrl) {
            setError(imageUrl, imageurlRef.current, "Please enter image url!");
        } else if (!urlR.test(imageUrl)) {
            setError(imageUrl, imageurlRef.current, "Please enter a valid url!");
        } else if (sourceName.length < 8) {
            setError(sourceName, sourceNameRef.current, "Image name must have more than 8 letters!");
            setError(imageUrl, imageurlRef.current, "");
        } else if ((categoryName && categoryName.length < 8) || (!categoryName && folderName.length < 8)) {
            setError(categoryName ? categoryName : folderName, categoryRef.current, "Category name must have more than 8 letters!");
            setError(imageUrl, imageurlRef.current, "");
            setError(sourceName, sourceNameRef.current, "");
        } else {
            setError(categoryName ? categoryName : folderName, categoryRef.current, "");
            setError(imageUrl, imageurlRef.current, "");
            setError(sourceName, sourceNameRef.current, "");

            const newImage = {
                id: images.length + 1,
                category: categoryName ? categoryName : folderName,
                imgsrc: imageUrl,
                name: sourceName,
            };

            const updatedImages = [...images, newImage];
            setFilteredImages(updatedImages);
            localStorage.setItem(images.length + 1, JSON.stringify(newImage));

            setIsOpenDialog(false);
        }
    },[imageUrl,sourceName,categoryName,folderName]);

    const setError = (input, errorElement, message) => {
        errorElement.innerText = message;
    };
    return (

        <>
            <div className="photo-container">
                <div id="header">
                    <div id="nav">
                        <ul>
                            <img src="image/logo.png" alt="Logo" />
                            <li><Link to="/home"><b>Home</b></Link></li>
                            <li><Link to="/gallery"><b>Gallery</b></Link></li>
                            <li><Link to="/addphoto"><b>AddPhoto</b></Link></li>
                            <input type="text" id="search" placeholder="Search here..." value={search} onChange={handleSearchChange} />
                        </ul>
                    </div>
                </div>
                <div className='imageContainer' id="photocontainer">
                    {filteredImages.map((image) => {
                        const size = image.size;
                        const originalName = image.orginialName;
                        const category = image.name;
                        return (
                            <div className="profile-picture" key={image.id} onClick={() => handleDialog(image.category)}>
                                <img src={image.imgsrc} alt={image.name} style={{ width: "300px", height: "300px" }} />
                                <div className="tooltip">
                                    {image.name}
                                    <p>Size: {size}</p>
                                    <p>Original Name: {originalName}</p>
                                    <p>Category: {category}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {isOpenDialog &&
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setIsOpenDialog(!isOpenDialog)}>&times;</span>
                        <h1>Upload</h1>
                        <p><b>Image Url: </b></p>
                        <input type='url' onChange={(e) => setImageUrl(e.target.value)} value={imageUrl}></input>
                        <span className="error-message" ref={imageurlRef}></span>
                        <p><b>Image Name:</b></p>
                        <input type='text' onChange={(e) => setSourceName(e.target.value)} value={sourceName}></input>
                        <span className="error-message" ref={sourceNameRef}></span>
                        <p><b>Image category:</b></p>
                        <input type='text' value={categoryName ? categoryName : folderName} onChange={(e) => handleChange(e.target.value)} disabled={!!categoryName}></input>
                        <span className="error-message" ref={categoryRef}></span>
                        <div className='button'>
                            <button className='cancel-button' onClick={() => setIsOpenDialog(!isOpenDialog)}><b>Cancel</b></button>
                            <button className='upload-button' onClick={handleImageClicked}><b>Upload</b></button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

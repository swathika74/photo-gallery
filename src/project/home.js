import React, { useState, useEffect } from 'react';
import '../project/photo.css';
import { Link, useNavigate } from "react-router-dom";
import images from '../imageData';

export const Home = () => {
  const [search, setSearch] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);
  const navigate = useNavigate();

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
 
  
  const handleImageClicked = (category) => {
    localStorage.setItem('imageCategory', category);
    navigate('/gallery');
  };

  useEffect(() => {
    localStorage.removeItem('imageCategory');
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    const searchData = event.target.value;
    const results = images.filter(image =>
      image.name.toLowerCase().includes(searchData.toLowerCase())
    );
    setFilteredImages(results);
  };
 
  return (
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
        {filteredImages.map((image) => (
          <div className="profile-picture" key={image.id}>
            <img src={image.imgsrc} alt={image.name} style={{ width: "300px", height: "300px" }} onClick={() => handleImageClicked(image.category)} /> 
              <div className="tooltip">
                {image.name} category
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

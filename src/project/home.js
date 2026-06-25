import React, { useState, useEffect } from 'react';
import '../project/photo.css';
import { Link, useNavigate } from "react-router-dom";
import images from '../imageData';

export const Home = () => {
  const [search, setSearch] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('imageCategory');
    const imageData = localStorage.getItem(images.length + 1);
    setFilteredImages(imageData ? [...images, JSON.parse(imageData)] : [...images]);
  }, []);

  const handleImageClicked = (category) => {
    localStorage.setItem('imageCategory', category);
    navigate('/gallery');
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setFilteredImages(
      images.filter(img => img.name.toLowerCase().includes(value.toLowerCase()))
    );
  };

  return (
    <div className="photo-container">
      <div id="header">
        <div id="nav">
          <ul>
            <img src="image/logo.png" alt="Logo" />
            <li className="nav-active"><Link to="/home">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/addphoto">Add Photo</Link></li>
            <input type="text" id="search" placeholder="Search categories..." value={search} onChange={handleSearchChange} />
          </ul>
        </div>
      </div>

      <div className="imageContainer" id="photocontainer">
        {filteredImages.map((image) => (
          <div className="profile-picture" key={image.id} onClick={() => handleImageClicked(image.category)}>
            <img src={image.imgsrc} alt={image.name} />
            <div className="tooltip">
              <strong>{image.name}</strong>
              <p>Click to view</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useState, useEffect, useMemo } from 'react';
import '../project/photo.css';
import { Link } from "react-router-dom";

export const Gallery = () => {
  const image1 = './image/image8.png';
  const image2 = '/image/image3.png';
  const nature3 = '/image/nature3.png';
  const nature4 = '/image/nature4.png';
  const nature2 = '/image/nature2.png';
  const image3 = '/image/image4.png';
  const roseimage = '/image/roseimage.png';
  const image8 = '/image/image8.png';
  const image7 = '/image/image7.png';
  const image9 = '/image/image9.png';
  const image10 = '/image/image10.png';
  const hotel1 = '/image/hotel1.png';
  const hotel2 = '/image/hotel2.png';
  const hotel3 = '/image/hotel3.png';
  const hotel4 = '/image/hotel4.png';
  const hotel5 = '/image/hotel5.png';
  const temple1 = '/image/temple1.png';
  const temple2 = '/image/temple2.png';
  const temple3 = '/image/temple3.png';
  const temple4 = '/image/temple4.png';
  const temple5 = '/image/temple5.png';
  const temple6 = '/image/temple6.png';
  const temple7 = '/image/temple7.png';
  const god1 = '/image/god1.png';
  const god2 = '/image/god2.png';
  const god3 = '/image/god3.png';
  const god4 = '/image/god4.png';
  const god5 = '/image/god5.png';
  const god6 = '/image/god6.png';
  const hero1 = '/image/hero1.png';
  const hero2 = '/image/hero2.png';
  const hero3 = '/image/hero3.png';
  const hero4 = '/image/hero4.png';
  const hero5 = '/image/hero5.png';
  const hero6 = '/image/hero6.png';
  const hero7 = '/image/hero7.png';
  const hero8 = '/image/hero8.png';
  const heroine1 = '/image/heroine1.png';
  const heroine2 = '/image/heroine2.png';
  const heroine3 = '/image/heroine3.png';
  const heroine4 = '/image/heroine4.png';
  const heroine5 = '/image/heroine5.png';
  const heroine6 = '/image/heroine6.png';
  const heroine7 = '/image/heroine7.png';
  const heroine8 = '/image/heroine8.png';
  const heroine9 = '/image/heroine9.png';

  const imageData = useMemo(() => [
    { id: 1, category: "nature", orginialName: 'globe glass', imgsrc: image2, size: '1.33mb' },
    { id: 2, category: "nature", orginialName: 'sunrise', imgsrc: nature3, size: '1.33mb' },
    { id: 3, category: "nature", orginialName: 'sunrise', imgsrc: image3, size: '1.33mb' },
    { id: 4, category: "nature", orginialName: 'moon', imgsrc: nature4, size: '7.99kb' },
    { id: 5, category: "nature", orginialName: 'sunrise', imgsrc: nature2, size: '1.33mb' },
    { id: 6, category: "flower", orginialName: 'rose', imgsrc: roseimage, size: ' 378kb' },
    { id: 7, category: "flower", orginialName: 'thransvaal daisy', imgsrc: image8, size: '1.20mb' },
    { id: 8, category: "flower", orginialName: 'rose', imgsrc: image7, size: '1.20mb' },
    { id: 9, category: "flower", orginialName: 'globe glass', imgsrc: image1 },
    { id: 10, category: "flower", orginialName: 'cornflower', imgsrc: image10, size: '707kb' },
    { id: 11, category: "flower", orginialName: 'wild flower', imgsrc: image9, size: '2.33mb' },
    { id: 12, category: "hotel", orginialName: 'sepavone resort swimming pool', imgsrc: hotel1, size: '8.13kb' },
    { id: 13, category: "hotel", orginialName: 'krishna resort', imgsrc: hotel2, size: '333mb' },
    { id: 14, category: "hotel", orginialName: 'karthika resort', imgsrc: hotel3, size: '871kb' },
    { id: 15, category: "hotel", orginialName: 'sstk resort', imgsrc: hotel4, size: '223mb' },
    { id: 16, category: "hotel", orginialName: 'meenashi resort', imgsrc: hotel5, size: '5.73mb' },
    { id: 17, category: "temple", orginialName: 'meenakshi amman', imgsrc: temple1, size: '193mb' },
    { id: 18, category: "temple", orginialName: 'shree ram', imgsrc: temple2, size: '5.37kb' },
    { id: 19, category: "temple", orginialName: 'akshardham', imgsrc: temple3, size: '9.03kb' },
    { id: 20, category: "temple", orginialName: 'vishwanathan', imgsrc: temple4, size: '4.35mb' },
    { id: 21, category: "temple", orginialName: 'brihadeeswara', imgsrc: temple5, size: '5.63mb' },
    { id: 22, category: "temple", orginialName: ' ram mandir ayodhya', imgsrc: temple6, size: '9.37kb' },
    { id: 23, category: "temple", orginialName: 'shree ram jambhoomi mandir', imgsrc: temple7, size: '8.23kb' },
    { id: 24, category: "god", orginialName: 'lakshmi', imgsrc: god1, size: '3.33mb' },
    { id: 25, category: "god", orginialName: 'krishna', imgsrc: god2, size: '8.33kb' },
    { id: 26, category: "god", orginialName: 'hanumam', imgsrc: god3, size: '4.67mb' },
    { id: 27, category: "god", orginialName: 'sivan', imgsrc: god4, size: '2.33mb' },
    { id: 28, category: "god", orginialName: 'ganeshan', imgsrc: god5, size: '893kb' },
    { id: 29, category: "god", orginialName: 'krishna', imgsrc: god6, size: '3.53mb' },
    { id: 30, category: "hero", orginialName: 'vijay', imgsrc: hero1, size: '7.83kb' },
    { id: 31, category: "hero", orginialName: 'ajith kumar', imgsrc: hero2, size: '9.38kb' },
    { id: 32, category: "hero", orginialName: 'siva karthikeyen', imgsrc: hero3, size: '2.55mb' },
    { id: 33, category: "hero", orginialName: 'suriya', imgsrc: hero4, size: '5.43mb' },
    { id: 34, category: "hero", orginialName: 'vijay antany ', imgsrc: hero5, size: '8.23kb' },
    { id: 35, category: "hero", orginialName: 'karthik', imgsrc: hero6, size: '1.33mb' },
    { id: 36, category: "hero", orginialName: 'dhanush', imgsrc: hero7, size: '2.33mb' },
    { id: 37, category: "hero", orginialName: 'sasikumar', imgsrc: hero8, size: '3.33mb' },
    { id: 38, category: "heroine", orginialName: 'krithi shetty', imgsrc: heroine1, size: '5.33mb' },
    { id: 39, category: "heroine", orginialName: 'rekha gautham', imgsrc: heroine2, size: '833kb' },
    { id: 40, category: "heroine", orginialName: 'anu', imgsrc: heroine3, size: '8.43kb' },
    { id: 41, category: "heroine", orginialName: 'rekha gautham', imgsrc: heroine4, size: '2.33mb' },
    { id: 42, category: "heroine", orginialName: 'anupama', imgsrc: heroine5, size: '8.33kb' },
    { id: 43, category: "heroine", orginialName: 'trisha', imgsrc: heroine6, size: '4.33mb' },
    { id: 44, category: "heroine", orginialName: 'tanya', imgsrc: heroine7, size: '9.33kb' },
    { id: 45, category: "heroine", orginialName: 'aishwarya', imgsrc: heroine8, size: '2.53mb' },
    { id: 46, category: "heroine", orginialName: 'nayanthare', imgsrc: heroine9, size: '6.73mb' },
  ], []);

  const [filteredImages, setFilteredImages] = useState(imageData);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const imagecategory = localStorage.getItem(9);
    const category = localStorage.getItem('imageCategory');
    let updatedImages = [];
    if (imagecategory) {
      updatedImages = [...imageData, JSON.parse(imagecategory)];
    } else {
      updatedImages = [...imageData];
    }
    if (category) {
      const filtered = updatedImages.filter(image => image.category === category);
      setFilteredImages(filtered);
    } else {
      setFilteredImages(updatedImages);
    }

  }, [imageData]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    const filtered = imageData.filter(image => image.orginialName.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredImages(filtered);
  };
  const handleDeleteImage =(id) => {
    const updatedImages = filteredImages.filter(image => image.id !== id);
    setFilteredImages(updatedImages);
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
        {filteredImages.map((image) => {
          const size = image.size;
          const originalName = image.orginialName;
          const category = image.name;

          return (
            <div className="profilePicture" key={image.id}>
              <img src={image.imgsrc} alt={image.name} style={{ width: "300px", height: "300px" }} />
              <div className="tooltip">
                <p>Size: {size}</p>
                <p>Original Name: {originalName}</p>
                <p>Category: {category}</p>
                <button onClick={() => handleDeleteImage(image.id)}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

import React, { useState, useEffect, useCallback } from 'react';
import '../project/photo.css';
import { Link } from "react-router-dom";
import images from '../imageData';

const URL_REGEX = /^(ftp|http|https):\/\/[^ "]+$/;

export const Addphoto = () => {
    const [search, setSearch] = useState('');
    const [filteredImages, setFilteredImages] = useState([]);
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [folderName, setFolderName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [sourceName, setSourceName] = useState('');
    const [errors, setErrors] = useState({ imageUrl: '', sourceName: '', category: '' });

    useEffect(() => {
        const imageData = localStorage.getItem(images.length + 1);
        setFilteredImages(imageData ? [...images, JSON.parse(imageData)] : [...images]);
    }, []);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        setFilteredImages(
            images.filter(img => img.name.toLowerCase().includes(value.toLowerCase()))
        );
    };

    const openDialog = (category) => {
        setCategoryName(category === 'newFolder' ? '' : category);
        setFolderName('');
        setImageUrl('');
        setSourceName('');
        setErrors({ imageUrl: '', sourceName: '', category: '' });
        setIsOpenDialog(true);
    };

    const closeDialog = () => setIsOpenDialog(false);

    const handleUpload = useCallback(() => {
        const effectiveCategory = categoryName || folderName;
        const newErrors = { imageUrl: '', sourceName: '', category: '' };
        let valid = true;

        if (!imageUrl) {
            newErrors.imageUrl = 'Please enter an image URL';
            valid = false;
        } else if (!URL_REGEX.test(imageUrl)) {
            newErrors.imageUrl = 'Please enter a valid URL';
            valid = false;
        }
        if (sourceName.length < 8) {
            newErrors.sourceName = 'Image name must be at least 8 characters';
            valid = false;
        }
        if (effectiveCategory.length < 8) {
            newErrors.category = 'Category name must be at least 8 characters';
            valid = false;
        }

        setErrors(newErrors);
        if (!valid) return;

        const newImage = {
            id: images.length + 1,
            category: effectiveCategory,
            imgsrc: imageUrl,
            name: sourceName,
        };
        setFilteredImages(prev => [...prev, newImage]);
        localStorage.setItem(images.length + 1, JSON.stringify(newImage));
        closeDialog();
    }, [imageUrl, sourceName, categoryName, folderName]);

    return (
        <>
            <div className="photo-container">
                <div id="header">
                    <div id="nav">
                        <ul>
                            <img src="image/logo.png" alt="Logo" />
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li className="nav-active"><Link to="/addphoto">Add Photo</Link></li>
                            <input type="text" id="search" placeholder="Search categories..." value={search} onChange={handleSearchChange} />
                        </ul>
                    </div>
                </div>

                <div className="page-header">
                    <h2>Photo Categories</h2>
                    <p>Click a category to upload a new photo</p>
                </div>

                <div className="imageContainer" id="photocontainer">
                    {filteredImages.map((image) => (
                        <div className="profile-picture add-card" key={image.id} onClick={() => openDialog(image.category)}>
                            <img src={image.imgsrc} alt={image.name} />
                            <div className="card-label">{image.name}</div>
                            <div className="tooltip">
                                <strong>{image.name}</strong>
                                {image.size && <p>Size: {image.size}</p>}
                                {image.orginialName && <p>Name: {image.orginialName}</p>}
                                <p className="tooltip-hint">Click to add photo</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isOpenDialog && (
                <div className="modal" onClick={(e) => e.target === e.currentTarget && closeDialog()}>
                    <div className="modal-content">
                        <button className="close-btn" onClick={closeDialog}>&times;</button>
                        <h2 className="modal-title">Upload Photo</h2>
                        <p className="modal-subtitle">
                            {categoryName ? `Adding to: ${categoryName}` : 'New category'}
                        </p>

                        <div className="form-group">
                            <label>Image URL</label>
                            <input
                                type="url"
                                className={errors.imageUrl ? 'input-field input-error' : 'input-field'}
                                value={imageUrl}
                                onChange={(e) => { setImageUrl(e.target.value); setErrors(p => ({ ...p, imageUrl: '' })); }}
                                placeholder="https://example.com/photo.jpg"
                            />
                            {errors.imageUrl && <span className="error-message">{errors.imageUrl}</span>}
                        </div>

                        <div className="form-group">
                            <label>Image Name</label>
                            <input
                                type="text"
                                className={errors.sourceName ? 'input-field input-error' : 'input-field'}
                                value={sourceName}
                                onChange={(e) => { setSourceName(e.target.value); setErrors(p => ({ ...p, sourceName: '' })); }}
                                placeholder="Min. 8 characters"
                            />
                            {errors.sourceName && <span className="error-message">{errors.sourceName}</span>}
                        </div>

                        <div className="form-group">
                            <label>Category</label>
                            <input
                                type="text"
                                className={errors.category ? 'input-field input-error' : 'input-field'}
                                value={categoryName || folderName}
                                onChange={(e) => { setFolderName(e.target.value); setErrors(p => ({ ...p, category: '' })); }}
                                disabled={!!categoryName}
                                placeholder="Min. 8 characters"
                            />
                            {errors.category && <span className="error-message">{errors.category}</span>}
                        </div>

                        <div className="modal-actions">
                            <button className="cancel-button" onClick={closeDialog}>Cancel</button>
                            <button className="upload-button" onClick={handleUpload}>Upload</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

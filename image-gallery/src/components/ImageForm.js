import React, { useState } from 'react';

const ImageForm = ({onClose}) => {
    const [imageUrl, setImageUrl] = useState('https://i.pinimg.com/236x/4b/fa/88/4bfa88b805008d2d794574013894eb25.jpg');
    const [imageTitle, setImageTitle] = useState('image title');
    const [imageDescription, setImageDescription] = useState('textarea');
    const [imageTag, setImageTag] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ imageUrl, imageTitle, imageDescription, imageTag });
    };

    return (
        <form id="imageForm" className="addImage open" onSubmit={handleSubmit}>
            <input
                type="text"
                id="imageUrl"
                placeholder="Enter image URL"
                required
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
            />
            <input
                type="text"
                id="imageTitle"
                placeholder="Enter image title"
                required
                value={imageTitle}
                onChange={(e) => setImageTitle(e.target.value)}
            />
            <textarea
                id="imageDescription"
                placeholder="Enter image description"
                rows="3"
                required
                value={imageDescription}
                onChange={(e) => setImageDescription(e.target.value)}
            />
            <select
                id="imageTag"
                required
                value={imageTag}
                onChange={(e) => setImageTag(e.target.value)}
            >
                <option value="">Select a tag</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
            <input type="button" id="close-btn" value="Cancel" onClick={onClose} />
            <input type="submit" value="Add Image" />
        </form>
    );
};

export default ImageForm;
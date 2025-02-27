import React from 'react';
import './PageBody.css';

const ImageContent = ({data, tags}) => {
    return (
        <div className="gallery" id="gallery">
            {data.map((item) => (
                <div className="image-card" key={item.id}>
                    <img src={item.imgUrl} alt={item.title} />
                    <div className="image-title truncate-text">{item.title}</div>
                    <div className="truncate-text">{item.description}</div>
                    <div>Tag: {tags.find(t => t.id === item.tag).name}</div>
                </div>
            ))}
        </div>
    );
};

export default ImageContent;
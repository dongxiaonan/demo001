import React from 'react';
import './PageBody.css';
import {tags} from '../data.js'

const FilterBars = () => {
    return (
        <div className="filter-bars">
            {tags.map((filter) => (
                <div className="filter-bar" key={filter.id}>
                    <img className="filter-bar-img" src={filter.imgUrl} alt={`tag:${filter.tag}`} />
                    <div className="filter-bar-text">{filter.name}</div>
                </div>
            ))}
        </div>
    );
};

export default FilterBars;
import React from "react";
import propTypes from 'prop-types';

const Item = ({data}) => (
    <div className="grid-item">
        <img className="preview-image" src={data.thumbnail} alt={data.title}/>
        <div className="preview-title">{data.title}</div>
    </div>
)

Item.prototypes = {
    data: propTypes.object.isRequired
};

export default Item;
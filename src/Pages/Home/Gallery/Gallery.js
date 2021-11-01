import React from 'react';

const Gallery = ({ gallery }) => {
    const { title, img } = gallery;
    return (
        <div className="col-lg-3 col-sm-6 ">
            <img className="w-75 h-75 " src={img} alt="" />
            <h5>{title}</h5>
        </div>
    );
};

export default Gallery;
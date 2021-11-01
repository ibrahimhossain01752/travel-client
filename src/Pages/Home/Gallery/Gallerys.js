import React, { useEffect, useState } from 'react';
import Gallery from './Gallery';

const Gallerys = () => {
    const [gallerys, setGallerys] = useState([]);
    useEffect(() => {
        fetch('gallery.json')
            .then(res => res.json())
            .then(data => setGallerys(data))
    }, [])
    return (
        <div>
            <h2 className="mb-5">Travelling Gallery</h2>
            <div className="row">
                {
                    gallerys.map(gallery => <Gallery
                        key={gallery}
                        gallery={gallery}
                    ></Gallery>)
                }
            </div>
        </div>
    );
};

export default Gallerys;
import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../static/css/WeddingPhoto.css';
import img01 from '../static/img/img01.jpg';
import img02 from '../static/img/img02.jpg';
import img03 from '../static/img/img03.jpg';
import img04 from '../static/img/img04.jpg';
import img05 from '../static/img/img05.jpg';

const imageHeight = 400;

const images = [
    {
        original: img01,
        thumbnail: img01,
        originalHeight: imageHeight,
    },
    {
        original: img02,
        thumbnail: img02,
        originalHeight: imageHeight,
    },
    {
        original: img03,
        thumbnail: img03,
        originalHeight: imageHeight,
    },
    {
        original: img04,
        thumbnail: img04,
        originalHeight: imageHeight,
    },
    {
        original: img05,
        thumbnail: img05,
        originalHeight: imageHeight,
    },
];

function WeddingPhoto() {
    return (
        <div>
            <p className="subTitle">갤러리</p>
            <div className="imageDiv">
                <ImageGallery
                    items={images}
                    // showBullets={true}
                    showIndex={true}
                    showPlayButton={true}
                    infinite={true}
                    useBrowserFullscreen={true}
                    autoPlay={true}
                    thumbnailPosition={'bottom'}
                />
            </div>
        </div>
    );
}

export default WeddingPhoto;

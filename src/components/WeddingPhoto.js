import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../static/css/WeddingPhoto.css';

const images = [];

for (let i = 1; i <= 29; i++) {
    let image = {};

    if (i < 10) {
        image = {
            original: require(`../static/img/photo/photo0${i}.jpg`),
            thumbnail: require(`../static/img/photo/photo0${i}.jpg`),
            originalHeight: 400,
        };
    } else {
        image = {
            original: require(`../static/img/photo/photo${i}.jpg`),
            thumbnail: require(`../static/img/photo/photo${i}.jpg`),
            originalHeight: 400,
        };
    }

    images.push(image);
}

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

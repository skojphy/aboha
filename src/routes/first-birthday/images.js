import galleryImages from "../../lib/dol/images/dol-gallery-full";
import thumbImages from '../../lib/dol/images/dol-gallery-thumbnail'

const images = new Array(12).fill().map((image, i) =>( { 
    largeURL: galleryImages[i],
    thumbnailURL: thumbImages[i],
    width: 500,
    height: 500,
    alt: '333',
}));

export default images;

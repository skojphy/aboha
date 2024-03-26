import galleryImages from "../../lib/dol/images/dol-gallery-full";
import thumbImages from '../../lib/dol/images/dol-gallery-thumbnail'

const images = new Array(12).fill().map((image, i) =>( { 
    largeURL: galleryImages[i],
    thumbnailURL: thumbImages[i],
    width: 500,
    height: i === 1 ?  1000 / 3 : i === 2 || i === 8 ? 281.25 : i === 0 ? 2500 / 7 : 500,
    alt: '333',
}));

export default images;

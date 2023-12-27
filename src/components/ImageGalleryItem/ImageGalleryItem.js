import css from './ImageGalleryItem.module.css';
import { Component } from 'react';

class ImageGalleryItem extends Component {
    render() {
        return (
        <>
         <li className ={css.ImageGalleryItem}>
            <img src ="" alt ="фото 1">фото</img>
         </li>
        </>
     )
 }
}
export default ImageGalleryItem;
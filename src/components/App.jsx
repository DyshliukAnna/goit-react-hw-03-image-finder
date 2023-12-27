import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Searchbar from "./Searchbar/Searchbar";
import Modal from "./Modal/Modal";


export const App = () => {
  return (
    <div className ="wrapper">
     <Searchbar/>
     <ImageGallery/>
     <ImageGalleryItem/>
     <Loader/>
     <Modal/>
     <Button/>
    </div>
  );
};

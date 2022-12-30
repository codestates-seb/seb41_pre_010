import { useState } from "react";
import ImageUploading from "react-images-uploading";

import "../Styles/Image.css";

const ImageUpload = ({ userProfileImage }) => {
  const [images, setImages] = useState([
    { data_url: userProfileImage, file: "" },
  ]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "jpeg", "svg", "png"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="upload__image-wrapper">
            {imageList.map((image, index) => {
              return (
                <div key={index} className="image-item">
                  <img src={image.data_url} alt="" width="165" height="165" />
                  <div className="image-item__btn-wrapper">
                    <button
                      style={isDragging ? { color: "red" } : null}
                      {...dragProps}
                      onClick={() => onImageUpdate(index)}
                    >
                      Update
                    </button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};
export default ImageUpload;

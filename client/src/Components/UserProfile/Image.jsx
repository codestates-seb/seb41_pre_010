import { useState } from "react";
import ImageUploading from "react-images-uploading";

import "../Styles/Image.css";

const ImageUpload = ({ userProfileImage, userId }) => {
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
          errors,
        }) => (
          <div className="Upload_Image_Container">
            <div>
              <div className="Upload_Image_Modal_DropZone_Container">
                {imageList[0] ? (
                  <img
                    src={imageList[0].data_url}
                    alt=""
                    width="165"
                    height="165"
                  />
                ) : (
                  <div
                    className="Upload_Image_DropZone"
                    {...dragProps}
                    onClick={() => onImageUpdate(0)}
                  >
                    <div className="Upload_Image_Text_Container">
                      <p className="Upload_Image_Text">
                        <b>Drag and drop or click here</b>
                        to upload your image (max 2mb)
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={() => {
                onImageRemove(0);
              }}
            >
              Remove
            </button>
            {errors && (
              <div>
                {errors.acceptType && (
                  <span>Your selected file type is not allow</span>
                )}
                {errors.maxFileSize && (
                  <span>Selected file size exceed maxFileSize</span>
                )}
                {errors.resolution && (
                  <span>
                    Selected file is not match your desired resolution
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};
export default ImageUpload;

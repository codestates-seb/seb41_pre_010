import { useState } from "react";
import { BlueButton } from "../Button";
import ImageUploading from "react-images-uploading";

import "../Styles/Image.css";

const ImageUpload = ({ userProfileImage, userId }) => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  return (
    <>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "jpeg", "svg", "png"]}
      >
        {({ imageList, onImageUpdate, onImageRemove, dragProps, errors }) => (
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
                    <div className="Upload_Image_Modal_Image">
                      <div className="Upload_Image_Text_Container">
                        <p className="Upload_Image_Text">
                          <b>Drag and drop or click here</b>
                          <p>to upload your image (max 2mb)</p>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {imageList[0] && (
                <>
                  <div className="Upload_Image_Remove_Container">
                    <button
                      onClick={() => {
                        onImageRemove(0);
                      }}
                      className="Upload_Image_Remove_Button"
                    >
                      취소하고 다른 이미지 추가하기
                    </button>
                  </div>
                </>
              )}
            </div>
            {errors && (
              <div className="Upload_Image_Remove_Container">
                {errors.acceptType && (
                  <span className="Upload_Image_Error">
                    Your selected file type is not allow
                  </span>
                )}
                {errors.maxFileSize && (
                  <span className="Upload_Image_Error">
                    Selected file size exceed maxFileSize
                  </span>
                )}
                {errors.resolution && (
                  <span className="Upload_Image_Error">
                    Selected file is not match your desired resolution
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </ImageUploading>
      <div className="UploadImage_Submit_Container">
        <BlueButton width="130px" height="50px">
          이미지 등록하기
        </BlueButton>
      </div>
    </>
  );
};
export default ImageUpload;

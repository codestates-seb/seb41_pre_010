import "../Styles/Image.css";
import ImageUpload from "./Image";

function ImageModal({ setModalOpen, userId, userProfileImage }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="Image_Modal_Container">
      <div className="Image_Modal_Upload_Container">
        <ImageUpload userId={userId} userProfileImage={userProfileImage} />
        <button className="Image_Modal_Close" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
}

export default ImageModal;

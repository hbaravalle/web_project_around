function ImagePopup() {
  return (
    <div className="popup" id="image-popup">
      <div className="popup__content">
        <button className="popup__close-button"></button>
        <form action="" className="popup__form" id="edit-avatar-form">
          <h2 className="popup__title">Upload avatar</h2>
          <input type="file" name="avatar" />
          <button type="text" className="popup__button-submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default ImagePopup;

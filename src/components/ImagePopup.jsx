function ImagePopup() {
  return (
    <div className="popup" id="image-popup">
      <div className="popup__content">
        <button className="popup__close-button"></button>
        <img className="popup__image" src="" alt="" />
        <small className="popup__image-caption"></small>
      </div>
    </div>
  );
}

export default ImagePopup;

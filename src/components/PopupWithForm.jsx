function PopupWithForm({
  title,
  name,
  children,
  isOpen,
  handleCloseAllPopups,
}) {
  return (
    <>
      <div
        className={`popup popup_type-${name} ${
          isOpen ? "popup_is-opened" : ""
        }`}
        id={`${name}-popup`}
      >
        <div className="popup__content">
          <button
            className="popup__close-button"
            onClick={handleCloseAllPopups}
          ></button>
          <form action="" className="popup__form" id={`${name}-form`}>
            <h2 className="popup__title">{title}</h2>
            {children}
            <button type="text" className="popup__button-submit">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;

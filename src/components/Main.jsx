import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

import avatar from "../images/avatar-image.jpg";

function Main({
  handleEditAvatarClick,
  handleEditProfileClick,
  handleAddPlaceClick,
  handleCloseAllPopups,
  isEditAvatarPopupOpen,
  isEditProfilePopupOpen,
  isAddPlacePopupOpen,
}) {
  return (
    <main>
      <section className="profile">
        <img
          className="profile__avatar"
          onClick={handleEditAvatarClick}
          src={avatar}
          alt="Avatar de Jacques Cousteau"
        />
        <div className="profile__info">
          <h1 className="profile__name">Jacques Cousteau</h1>
          <button
            className="profile__edit-button"
            onClick={handleEditProfileClick}
          >
            <i className="profile__edit-button-icon"></i>
          </button>
          <small className="profile__role">Explorador</small>
        </div>
        <button className="profile__add-button" onClick={handleAddPlaceClick}>
          <i className="profile__add-button-icon"></i>
        </button>
      </section>
      <section className="cards">
        <template id="card-template">
          <div className="card">
            <button className="card__delete-button">
              <i className="card__delete-button-icon"></i>
            </button>
            <img className="card__image" src={avatar} alt="" />
            <div className="card__info">
              <h2 className="card__title">Ad lorem ipsum</h2>
              <button className="card__like-button">
                <i className="card__like-button-icon"></i>
              </button>
            </div>
          </div>
        </template>
      </section>
      {/* <ImagePopup isOpen={} onClose={} /> */}
      <PopupWithForm
        title="Nuevo lugar"
        name="add-place"
        isOpen={isAddPlacePopupOpen}
        handleCloseAllPopups={handleCloseAllPopups}
      >
        <input type="text" className="popup__input-text" placeholder="Title" />
        <input
          type="text"
          className="popup__input-text"
          placeholder="Image URL"
        />
      </PopupWithForm>
      <PopupWithForm
        title="Editar perfil"
        name="edit-profile"
        isOpen={isEditProfilePopupOpen}
        handleCloseAllPopups={handleCloseAllPopups}
      >
        <input type="text" className="popup__input-text" placeholder="Name" />
        <input
          type="text"
          className="popup__input-text"
          placeholder="About me"
        />
      </PopupWithForm>
      <PopupWithForm
        title="Editar perfil"
        name="edit-profile"
        isOpen={isEditAvatarPopupOpen}
        handleCloseAllPopups={handleEditAvatarClick}
      >
        <input type="file" className="popup__input-file" name="avatar" />
      </PopupWithForm>
    </main>
  );
}

export default Main;

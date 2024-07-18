import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
      <div className="popup" id="image-popup">
        <div className="popup__content">
          <button className="popup__close-button"></button>
          <img className="popup__image" src="" alt="" />
          <small className="popup__image-caption"></small>
        </div>
      </div>
      <div className="popup" id="new-place-popup">
        <div className="popup__content">
          <button className="popup__close-button"></button>
          <form action="" className="popup__form" id="new-place-form">
            <h2 className="popup__title">Nuevo lugar</h2>
            <input
              type="text"
              className="popup__input-text"
              placeholder="Título"
              name="title"
            />
            <input
              type="text"
              className="popup__input-text"
              placeholder="Enlace a la imagen"
              name="image-url"
            />
            <button type="text" className="popup__button-submit">
              Crear
            </button>
          </form>
        </div>
      </div>
      <div className="popup" id="edit-profile-popup">
        <div className="popup__content">
          <button className="popup__close-button"></button>
          <form action="" className="popup__form" id="edit-profile-form">
            <h2 className="popup__title">Editar perfil</h2>
            <input
              type="text"
              className="popup__input-text"
              placeholder="Nombre"
              name="name"
            />
            <input
              type="text"
              className="popup__input-text"
              placeholder="Acerca de mí"
              name="role"
            />
            <button type="submit" className="popup__button-submit">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

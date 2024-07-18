import avatar from "../images/avatar-image.jpg";

function Main() {
  return (
    <main>
      <section className="profile">
        <img
          className="profile__avatar"
          src={avatar}
          alt="Avatar de Jacques Cousteau"
        />
        <div className="profile__info">
          <h1 className="profile__name">Jacques Cousteau</h1>
          <button className="profile__edit-button">
            <i className="profile__edit-button-icon"></i>
          </button>
          <small className="profile__role">Explorador</small>
        </div>
        <button className="profile__add-button">
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
    </main>
  );
}

export default Main;

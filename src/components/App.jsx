import { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleEditAvatarClick = () => {};
  const handleEditProfileClick = () => {};
  const handleAddPlaceClick = () => {};

  return (
    <>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;


import React from "react";
import '../index.css';
import Footer from './Footer.js';
import Header from './Header.js';
import ImagePopup from "./ImagePopup";
import Main from './Main.js';
import PopupWithForm from "./PopupWithForm";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {

    setIsEditAvatarPopupOpen(true);

  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);

  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        ></Main>

        <Footer />
        <PopupWithForm title="Редактировать профиль" name="edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText='Сохранить'>
          < >           <label className="popup__input-label">
            <input type="text" className="popup__input popup__input_type_name" name="name" placeholder="Имя" minLength="2"
              maxLength="40" id="person-name" required />
            <span className="person-name-error popup__input-error"></span>
          </label>

            <label className="popup__input-label">
              <input type="text" className="popup__input popup__input_type_professions" name="about" placeholder="О себе"
                minLength="2" maxLength="200" id="person-profession" required />
              <span className="person-profession-error popup__input-error"></span>
            </label>
          </>
        </PopupWithForm>

        <PopupWithForm title="Новое место" name="create" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText='Создать'>
          <>
            <label className="popup__input-label">
              <input type="text" className="popup__input popup__input_type_place-name" name="name" placeholder="Название"
                minLength="2" maxLength="30" required id="title-mesto" />
              <span className="title-mesto-error popup__input-error"></span>
            </label>
            <label className="popup__input-label">
              <input type="url" className="popup__input popup__input_type_place-link" name="link"
                placeholder="Ссылка на картинку" minLength="2" maxLength="200" required id="url-mesto" />
              <span className="url-mesto-error popup__input-error"></span>
            </label>
          </>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>

        <PopupWithForm title="Вы уверены?" name="confirm" onClose={closeAllPopups} buttonText='Да'>
          <></>
        </PopupWithForm>

        <PopupWithForm title="Обновить аватар" name="update-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText='Сохранить'>
          <>
            <label className="popup__input-label">
              <input type="url" className="popup__input popup__input_type_place-link" name="avatar"
                placeholder="Ссылка на картинку" minLength="2" maxLength="200" required id="url-avatar" />
              <span className="url-avatar-error popup__input-error"></span>
            </label>
          </>

        </PopupWithForm>
    </>
  );
}

export default App;

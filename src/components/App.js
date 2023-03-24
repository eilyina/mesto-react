
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
    <div className="App">
      <html lang="ru">

        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <title>Mesto</title>
        </head>

        <body className="page">
          <Header />


          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          ></Main>

          <Footer />
          <PopupWithForm title="Редактировать профиль" name="edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
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
              <button type="submit" className="popup__submit">Сохранить</button></>
          </PopupWithForm>

          <PopupWithForm title="Новое место" name="create" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
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

              <button type="submit" className="popup__submit">Создать</button>
            </>
          </PopupWithForm>




          <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>

          <PopupWithForm title="Вы уверены?" name="confirm" onClose={closeAllPopups}>
            <><button type="submit" className="popup__submit">Да</button></>
          </PopupWithForm>

          <PopupWithForm title="Обновить аватар" name="update-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
            <>
              <label className="popup__input-label">
                <input type="url" className="popup__input popup__input_type_place-link" name="avatar"
                  placeholder="Ссылка на картинку" minLength="2" maxLength="200" required id="url-avatar" />
                <span className="url-avatar-error popup__input-error"></span>
              </label>

              <button type="submit" className="popup__submit">Создать</button>
            </>

          </PopupWithForm>

          {/* <template id="card">
            <div className="photo-grid__item">
              <img className="photo-grid__image" />
              <button className="photo-grid__trash" type="button" hidden></button>
              <div className="photo-grid__title-container">
                <h2 className="photo-grid__title"></h2>
                <div className="photo-grid__like-container">
                  <button className="photo-grid__like" type="button"></button>
                  <p className="photo-grid__like-counter">5</p>
                </div>

              </div>

            </div>
          </template> */}



        </body>

      </html>

    </div>
  );
}

export default App;

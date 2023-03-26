import { api } from '../utils/Api.js';
import Card from './Card.js';
import { useEffect, useState } from 'react';

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo()
      , api.getInitialCards()
    ])
      .then(([userData, cardData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardData);
      })
      .catch((err) => console.log(`${err}`))
  }, [])
  //console.log(cards)
  return (

    <main className="content">
      <section className="profile">
        <div className="profile__info-block">
          <div className="profile__image" style={{ backgroundImage: `url(${userAvatar})` }} >
            <button onClick={props.onEditAvatar} className="profile__edit-avatar-button" type="button"></button>
          </div>
          <div className="profile__info">
            <div className="profile__edit-title">
              <h1 className="profile__title">{userName}</h1>
              <button onClick={props.onEditProfile} className="profile__edit-button" type="button">
              </button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} className="profile__add-button" type="button">
        </button>
      </section>
      <section className="photo-grid">
        {cards.map((card) =>
          <Card key={card._id} name={card.name} link={card.link} likes={card.likes.length} onCardClick={props.onCardClick}></Card>)
        }
      </section>
    </main>
  );

}

export default Main;

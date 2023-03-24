import { api } from '../utils/Api.js';
import Card from './Card.js';
import React from "react";

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);




  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
      .catch((err) => console.log(`${err}`))
  })


  React.useEffect(() => {
    api.getInitialCards().then((data) => {

      setCards(data.map(item => {
        return {
          id: item._id,
          name: item.name,
          link: item.link,
          likes: item.likes.length

        }

      }))
      //console.log(data)

    }, [])
      .catch((err) => console.log(`${err}`))
  })

  //console.log(props.onCardClick)

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
        {cards.map(({ id, ...propsCard }) =>
          <Card onCardClick={props.onCardClick} key={id}{...propsCard} ></Card>)}
      </section>
    </main>

  );

}

export default Main;
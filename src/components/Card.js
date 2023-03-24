

function Card(card) {
  
    function handleCard() {
        console.log(card)
        card.onCardClick(card);
      } 

//const likeCounter = card.likes.lenght();
    return (
  
        <div className="photo-grid__item">
        <img className="photo-grid__image" onClick={handleCard} style={{ backgroundImage: `url(${card.link})` }}/>
        <button className="photo-grid__trash" type="button" hidden></button>
        <div className="photo-grid__title-container">
          <h2 className="photo-grid__title">{card.name}</h2>
          <div className="photo-grid__like-container">
            <button className="photo-grid__like" type="button"></button>
            <p className="photo-grid__like-counter">{card.likes}</p>
          </div>

        </div>

      </div>
  
    );
  }
  
  export default Card;
function ImagePopup({ card, onClose }) {

  return (

    <div className={`popup popup_type_photo ${card ? 'popup_opened' : ''}`}>
      <div className="popup__image-container">
        <img className="popup__image" alt={card ? card.name : ''} src={card ? `${card.link}` : ''} />
        <h4 className="popup__photo-title">{card ? `${card.name}` : ''}</h4>
        <button className="popup__cross popup__cross_type_image" type="button" onClick={onClose}></button>
      </div>
    </div>

  );
}

export default ImagePopup;
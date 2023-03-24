function PopupWithForm({title,name,children,isOpen,onClose}) {


    return (
  
      <div className={`popup popup_type_${name} ${  isOpen ?'popup_opened' : ''}`}>
        <div className="popup__container">
          <h3 className="popup__title">{`${title}`}</h3>
          <form className={`popup__form popup__form_type_${name}`}  name={`${name}`} method="post" noValidate>
           {children}   
    
          </form>
          <button className="popup__cross popup__cross_type_edit" type="button" onClick={onClose}></button>
        </div>
    
      </div>
  
    );
  }
  
  export default PopupWithForm;
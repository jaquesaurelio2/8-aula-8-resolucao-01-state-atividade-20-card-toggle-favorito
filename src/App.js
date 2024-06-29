import * as React from "react";
import styles from "./app.module.css";
import { ReactComponent as StarIcon } from "../../public/images/star.svg";
import PhoneIcon from "../../public/images/phone.png";
import EmailIcon from "../../public/images/e-mail.png";
import AlienImage from "../../public/images/alien.png";

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "ET",
    lastName: "Bilu",
    phone: "+897522519552",
    email: "bilu@cesar.org.br",
    isFavorite: false
  });

  const handleToggleFavorite = () => {
    setContact((oldContact) => ({
      ...oldContact,
      isFavorite: !oldContact.isFavorite
    }));
  };

  return (
    <div className={styles.card}>
      <img className={styles.image} src={AlienImage} alt="foto perfil" />
      <h1>{`${contact.firstName} ${contact.lastName}`}</h1>
      <StarIcon
        onClick={handleToggleFavorite}
        className={styles.favorite}
        fill={contact.isFavorite ? "gold" : "white"}
      />
      <div className={styles.info}>
        <img src={PhoneIcon} alt="phone icon" />
        <p>{contact.phone}</p>
      </div>
      <div className={styles.info}>
        <img src={EmailIcon} alt="e-mail icon" />
        <p>{contact.email}</p>
      </div>
    </div>
  );
}

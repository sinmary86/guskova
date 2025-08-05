import { ContactInfo } from "../ContactInfo/ContactInfo.jsx";
import { ContactForm } from "../ContactForm/ContactForm.jsx";
import styles from "./ContactSection.module.scss";

export const ContactSection = () => {
  return (
    <section id="contactSection" className={styles.contactSection}>
      <ContactInfo />
      <ContactForm />
    </section>
  );
};

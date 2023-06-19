import { ContactForm } from "./ContactForm";
import "../styles/_contact.scss";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <h1>Contactez-nous</h1>
      <ContactForm />
      <Footer />
    </div>
  );
}

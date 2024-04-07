import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ContactHeader from "./Components/Navbar/ContactHeader/ContactHeader";
import ContactForm from "./Components/ContactForm/ContactForm";
function App() {
  return (
    <div >
      <Navbar />
      <div className="mainContainer">
        <ContactHeader />
        <div className="mainFormContainer">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;

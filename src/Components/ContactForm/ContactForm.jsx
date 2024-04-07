import React from "react";
import "../ContactForm/ContactForm.css";
import Button from "../Button/Button";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
const ContactForm = () => {

    const onSubmitHandler = (e) => {
      e.preventDefault();
      console.log(e);
    }

  return (
    <div className="contactContainer">
    {/* Form  SEction */}
      <div className="contact_Form">
        <div className="top_button">
          <Button text="VIA SUPPORT CHAT" icon={<AiOutlineMessage />}></Button>
          <Button 

           text="VIA CALL" icon={<IoMdCall />}></Button>
        </div>
        <Button
          outlinebtn={true}
          text="VIA EMAIL FORM"
          icon={<MdOutlineEmail />}
        ></Button>
       
        <form onSubmit={onSubmitHandler} className="form_contain">
          <div className="form_controller">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="form_controller">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className="form_controller">
            <label htmlFor="message">Text</label>
            <textarea className="textarea" name="message"></textarea>
          </div>
          <Button text="SUBMIT"></Button>
        </form>
      </div>
        {/* Img Section */}
      <div className="contact_image">
        <img className="form-img" src="./public/img/Service 24_7-pana 1.svg" alt="" />
      </div>
    </div>
  );
};

export default ContactForm;

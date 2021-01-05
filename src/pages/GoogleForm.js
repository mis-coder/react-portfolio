import React from "react";
import { Link } from "react-router-dom";
import "../styles/Form.css";

const GoogleForm = () => {
  return (
    <div className='form-section'>
      <Link to='/' className='go-back'>
        Go Back
      </Link>
      <iframe
        src='https://docs.google.com/forms/d/e/1FAIpQLSddcRk0hV0kcKvX8ZtsqvHQNbyc3LCd74_TxTxx4unBJAHDBA/viewform?embedded=true'
        width='640'
        height='901'
        frameBorder='0'
        marginHeight='0'
        marginWidth='0'
        title='Contact Form'
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;

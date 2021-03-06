import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ProductContext from '../ProductContext';

export default function ContactUs(props) {
  const context = useContext(ProductContext);
  console.log(context);
  // replicate state using React hooks
  // first argument is the default value of the state variable
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
  });

  // create a history function by using useHistory
  const history = useHistory();

  const submitForm = () => {
    history.push('/thank-you', {
      formData: formData,
    });
  };

  const updateFormField = (e) => {
    // 1. clone the original object
    let clone = { ...formData };

    // 2. make changes to the clone
    clone[e.target.name] = e.target.value;

    // 3. save back to state
    setFormData(clone);
  };

  return (
    <React.Fragment>
      <h1>Contact Us</h1>
      <div>
        <label className="form-label">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          className="form-control"
          onChange={updateFormField}
        />
      </div>
      <div>
        <label className="form-label">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          className="form-control"
          onChange={updateFormField}
        />
      </div>
      <div>
        <label className="form-label">Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          className="form-control"
          onChange={updateFormField}
        />
      </div>
      <div>
        <label className="form-label">Comments</label>
        <textarea
          name="comments"
          className="form-control"
          onChange={updateFormField}
        >
          {formData.comments}
        </textarea>
      </div>
      <button className="btn btn-primary mt-3 mb-3" onClick={submitForm}>
        Send
      </button>
    </React.Fragment>
  );
}

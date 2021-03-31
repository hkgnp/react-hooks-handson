import React from 'react';

import { useLocation } from 'react-router-dom';

export default function ThankYou(props) {
  const location = useLocation();
  const email = location.state.formData.email;
  const comments = location.state.formData.comments;

  return (
    <React.Fragment>
      <div className="alert alert-success">
        <div>
          You are submitting:
          <ul>
            <li>Email: {email}</li>
            <li>Comments: {comments}</li>
          </ul>
        </div>

        <div>
          Thank you for your comments. We will take whatever working days we
          want to get back to you.
        </div>
      </div>
    </React.Fragment>
  );
}

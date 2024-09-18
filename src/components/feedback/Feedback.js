import React, { useState } from 'react';
import axios from 'axios';

const Feedback = () => {
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/submit-feedback', {
        email,
        review,
      });
      setMessage(res.data); // Show success message
      setEmail('');
      setReview('');
    } catch (err) {
      console.error(err);
      setMessage('Failed to submit feedback');
    }
  };

  return (
    <div>
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Review:</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Feedback;

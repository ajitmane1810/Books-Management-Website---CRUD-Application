import React, { useState } from 'react';
import './BookForm.css';
import axios from 'axios';

const BookForm = () => {
  const url = "http://localhost:8080/addBook";

  const [formData, setFormData] = useState({
    bookTitle: '',
    authorName: '',
    genre: '',
  });

  const [error, setError] = useState(null); // State for error messages
  const [success, setSuccess] = useState(null); // State for success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setSuccess(null); // Clear previous success message

    try {
      const response = await axios.post(url, formData);
      console.log('Response:', response.data);

      setFormData({ bookTitle: "", authorName: "", genre: "" }); // Clear form after success
      setSuccess("✅ Book added successfully!"); // Set success message
    } catch (err) {
      console.error('Error:', err);
      
      if (err.response) {
        setError(err.response.data.message || "An error occurred while registering the book.");
      } else if (err.request) {
        setError("No response from the server. Please try again later.");
      } else {
        setError("Something went wrong. Please check your server & try again.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="form-container">
      <h2>Register Book</h2>

      {/* Show success message */}
      {success && <p className="success-message">{success}</p>}

      {/* Show error message */}
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookTitle">Book Title</label>
          <input
            type="text"
            id="bookTitle"
            name="bookTitle"
            value={formData.bookTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="authorName">Author Name</label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" id='btn'>Register</button>
      </form>
    </div>
  );
};

export default BookForm;

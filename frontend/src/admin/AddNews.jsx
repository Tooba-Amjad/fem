import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../style/AddProduct.css'
const AddNewsForm = () => {
  const [heroText, setHeroText] = useState('');
  const [heroImage, setHeroImage] = useState(null);
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('heroText', heroText);
    formData.append('heroImage', heroImage);
    formData.append('description', description);

    
    try {
      const response = await axios.post('http://localhost:5000/api/news', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setMessage('News added successfully!');
      setHeroText('');
      setHeroImage(null);
      setDescription('');
    } catch (error) {
      setMessage('Error: ' + error.response?.data?.error || 'Something went wrong.');
    }
  };

  return (
    <div style={{ margin: 'auto' }}>
      <h2>Add News</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Hero Text:</label>
          <input
            type="text"
            value={heroText}
            onChange={(e) => setHeroText(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <div>
          <label>Hero Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setHeroImage(e.target.files[0])}
            required
            style={{ marginBottom: '10px' }}
          />
        </div>
        <div>
          <label>Description:</label>
          <ReactQuill
            value={description}
            onChange={setDescription}
            theme="snow"
            style={{ height: '200px', marginBottom: '20px' }}
          />
        </div>
        <button className='submit-btn' type="submit" style={{ padding: '10px 20px' }}>Add News</button>
      </form>
    </div>
  );
};

export default AddNewsForm;

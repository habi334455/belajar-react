// src/MyForm.js
import React, { useState } from 'react';
import './MyForm.css'; // Import CSS

const MyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nama: ${name}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nama:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
      </div>
      <button type="submit">Kirim</button>
    </form>
  );
};

export default MyForm;

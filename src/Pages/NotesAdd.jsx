import React from 'react'
import { useState } from 'react';

const NotesAdd = () => {
  const [notesData, setNotesData] = useState({
    srno: '',
    notes: '',
  });

  const handleChange = (event) => {
    setFormData({ ...notesData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const itemFormData = JSON.parse(localStorage.getItem('itemFormData')) || [];
    itemFormData.push(formData);
    localStorage.setItem('itemFormData', JSON.stringify(itemFormData));
    location.reload();
  };

  const itemDataArray = JSON.parse(localStorage.getItem('itemFormData')) || [];
  return (
    <>
      <div>
        <h1>Notes and Deviation</h1>
        <form action="">
          <textarea name="notes" ></textarea>
          <button className='add-note'>Add Notes</button>
          <button className='undo-note'>UNDO</button>
        </form>
      </div>
      <div className='table-wrapper'>
        <table>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Notes and Deviations</th>
            </tr>
          </thead>
          <tbody>
            {notesDataArray.map((notesData, index) => (
              <tr key={index}>
                <td>{notesData.item_description}</td>
                <td>{notesData.item_description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default NotesAdd
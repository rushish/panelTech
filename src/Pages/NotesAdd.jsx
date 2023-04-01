import React, { useState } from 'react';
import "../assets/Styles/notesadd.css"

function NotesAdd() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');

  const addNote = () => {
    if (noteText.trim() !== '') {
      setNotes([...notes, noteText.trim()]);
      setNoteText('');
    }
  };

  const deleteNote = (note) => {
    setNotes(notes.filter((n) => n !== note));
  };

  return (
    <div className='content-wrap'>
      <h1>Notes and Deviation</h1>
      <div>
        <textarea
          className='notesarea'
          placeholder="Add a note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className='note-button' onClick={addNote}>Add</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Note</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note}>
              <td>{note}</td>
              <td>
                <button className='note-add' onClick={() => deleteNote(note)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NotesAdd;

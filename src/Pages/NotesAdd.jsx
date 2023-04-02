import React, { useEffect, useState } from "react";
import "../assets/Styles/notesadd.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function NotesAdd() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const { id } = useParams();
  const [quotationId, setQuotationId] = useState("");
  const [notesAdded, setNotesAdded] = useState([]);

  const addNote = () => {
    // if (noteText.trim() !== "") {
    //   setNotes([...notes, noteText.trim()]);
    //   setNoteText("");
    // }
    axios({
      method: "post",
      url: "http://localhost:8080/add-note",
      data: {
        note_description: noteText,
        client_id: id,
        quotation_id: quotationId,
        revised_no: 0,
        revised_no_quotation: 0,
      },
    })
      .then((resp) => {
        console.log(resp);
        getNotesFromDatabase();
      })
      .catch((err) => console.log(err));
  };

  const deleteNote = (note) => {
    // setNotes(notes.filter((n) => n !== note));
    axios({
      method: "post",
      url: `http://localhost:8080/delete-note`,
      data: {
        id: note,
      },
    })
      .then((resp) => {
        console.log(resp);
        getNotesFromDatabase();
      })
      .catch((err) => console.log(err));
  };

  const getNotesFromDatabase = () => {
    axios({
      method: "post",
      url: "http://localhost:8080/get-note-quotation",
      data: {
        client_id: id,
        quotation_id: quotationId,
      },
    })
      .then((resp) => {
        console.log(resp);
        setNotesAdded(resp.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(id);
    axios({
      method: "post",
      url: "http://localhost:8080/get-quotation-user",
      data: {
        client_id: id,
      },
    })
      .then((resp) => {
        console.log(resp);
        setQuotationId(resp.data[0].id);
      })
      .catch((err) => console.log(err));
    console.log(quotationId);
    console.log("Notes Added");
    console.log(notesAdded);
  }, []);

  return (
    <div className="content-wrap">
      <h1>Notes and Deviation</h1>
      <div>
        <textarea
          className="notesarea"
          placeholder="Add a note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button className="note-button" onClick={addNote}>
          Add
        </button>
      </div>
      <table style={{ width: "80vw" }}>
        <thead>
          <tr>
            <th>Note</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {notesAdded.map((note) => (
            <tr key={note.id}>
              <td>{note.note_description}</td>
              <td>
                <button
                  className="note-add"
                  onClick={() => deleteNote(note.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NotesAdd;

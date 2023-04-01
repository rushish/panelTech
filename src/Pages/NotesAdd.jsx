import React from 'react';
import { Link } from "react-router-dom"
import "../assets/Styles/notesadd.css"

function Table() {
  const formDataArray = JSON.parse(localStorage.getItem('addClient')) || [];

  return (
    <div className='bodywrap'>
      <h1>Notes And Deviations</h1>
      <textarea name="notesarea"></textarea>
      <div className='table-wrap'>
        <table>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Notes and Deviatation</th>
            </tr>
          </thead>
          <tbody>
            {formDataArray.map((quotationData, index) => (
              <tr key={index}>
                <td>{quotationData.companyName}</td>
                <td>{quotationData.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;

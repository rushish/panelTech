import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Table() {
  const [clientsData, setClientsData] = useState([]);
  const formDataArray = JSON.parse(localStorage.getItem("addClient")) || [];

  const navigate = useNavigate();

  axios({
    method: "get",
    url: "http://localhost:8080/get-clients",
  })
    .then((resp) => {
      //   console.log(resp);
      setClientsData(resp.data);
    })
    .catch((err) => console.log(err));

  const createQuotation = (id) => {
    // e.preventDefault();
    console.log(id);
    navigate(`/create-quotation/${id}`);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Create Quotation</th>
        </tr>
      </thead>
      <tbody>
        {clientsData.map((quotationData, index) => (
          <tr key={index}>
            <td>{quotationData.company_name}</td>
            <td className="button-wrap">
              <button
                className="create-quote"
                onClick={() => createQuotation(quotationData.id)}
              >
                Create Quotation
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

import axios from "axios";
import "../assets/Styles/addclients.css";
import { useState } from "react";

const AddClients = () => {
  const [addClients, setFormData] = useState({
    companyName: "",
    addressline1: "",
    addressline2: "",
    addressline3: "",
    phoneNumber: "",
    kindattn: "",
    email: "",
    faxno: "",
  });

  const handleChange = (event) => {
    setFormData({ ...addClients, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const addClient = JSON.parse(localStorage.getItem("addClient")) || [];
    addClient.push(addClients);
    localStorage.setItem("addClient", JSON.stringify(addClient));

    axios({
      method: "post",
      url: "http://localhost:8080/add-client",
      data: {
        company_name: addClients.companyName,
        address_line1: addClients.addressline1,
        address_line2: addClients.addressline2,
        address_line3: addClients.addressline3,
        phone_no: addClients.phoneNumber,
        kind_attn: addClients.kindattn,
        email: addClients.email,
        fax_no: addClients.faxno,
      },
    })
      .then((resp) => {
        console.log(resp);

        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="add-clients">
        <h3 className="form-title">Add Client</h3>
        <label>
          Company Name :
          <input
            type="text"
            name="companyName"
            value={addClients.companyName}
            onChange={handleChange}
          />
        </label>
        <label>
          Address Line 1 :
          <input
            type="text"
            name="addressline1"
            value={addClients.addressline1}
            onChange={handleChange}
          />
        </label>
        <label>
          Address Line 2 :
          <input
            type="text"
            name="addressline2"
            value={addClients.addressline2}
            onChange={handleChange}
          />
        </label>
        <label>
          Address Line 3 :
          <input
            type="text"
            name="addressline3"
            value={addClients.addressline3}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone No :
          <input
            type="number"
            name="phoneNumber"
            value={addClients.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Kind Attn :
          <input
            type="text"
            name="kindattn"
            value={addClients.kindattn}
            onChange={handleChange}
          />
        </label>
        <label>
          Email :
          <input
            type="email"
            name="email"
            value={addClients.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Fax No :
          <input
            type="number"
            name="faxno"
            value={addClients.faxno}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddClients;

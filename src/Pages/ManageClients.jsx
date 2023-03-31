import React, { useState } from "react";
import "../assets/Styles/manageclients.css"

function ManageClients() {
    // Initialize state variables for form inputs and table rows
    const [enquiryno, setEnquiryNo] = useState("");
    const [enquirydate, setEnquiryDate] = useState("");
    const [contactperson, setContactPerson] = useState("");
    const [contactpersonphone, setContactPersonPhone] = useState([]);
    const [contactpersonemail, setContactPersonEmail] = useState([]);
    const [rows, setRows] = useState([]);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Create a new row object from form inputs
        const newRow = {
            enquiryno: enquiryno,
            enquirydate: enquirydate,
            contactperson: contactperson,
            contactpersonphone: contactpersonphone,
            contactpersonemail: contactpersonemail
        };

        // Add the new row object to the list of rows
        setRows([...rows, newRow]);

        // Clear form inputs
        setEnquiryNo("");
        setEnquiryDate("");
        setContactPerson("");
        setContactPersonPhone("");
        setContactPersonEmail("");
    };

    return (
        <div>
            <form className="quotation-form" onSubmit={handleSubmit}>
                <h1 className="form-title">Form Table Example</h1>
                <label>
                    Customer Enquiry no.:
                    <input type="text" value={enquiryno} onChange={(e) => setEnquiryNo(e.target.value)} />
                </label>
                <label>
                    Enquiry Date:
                    <input type="number" value={enquirydate} onChange={(e) => setEnquiryDate(e.target.value)} />
                </label>
                <label>
                    Contact person:
                    <input type="text" value={contactperson} onChange={(e) => setContactPerson(e.target.value)} />
                </label>
                <label>
                    Contact person Phone no.:
                    <input type="number" value={contactpersonphone} onChange={(e) => setContactPersonPhone(e.target.value)} />
                </label>
                <label>
                    Contact Person Email:
                    <input type="email" value={contactpersonemail} onChange={(e) => setContactPersonEmail(e.target.value)} />
                </label>
                <button className="quotation-btn" type="submit">Submit</button>
            </form>
            <table className="quotation-details">
                <thead>
                    <tr>
                        <th>Customer Enquiry no.:</th>
                        <th>Enquiry Date:</th>
                        <th>Contact person:</th>
                        <th>Contact person Phone no.:</th>
                        <th>Contact Person Email:</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>{row.enquiryno}</td>
                            <td>{row.enquirydate}</td>
                            <td>{row.contactperson}</td>
                            <td>{row.contactpersonphone}</td>
                            <td>{row.contactpersonemail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ManageClients;

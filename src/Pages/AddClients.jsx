import "../assets/Styles/addclients.css"
import { useState } from "react";

const AddClients = () => {
    const [addClients, setFormData] = useState({
        companyName: '',
        addressline1: '',
        addressline2: '',
        addressline3: '',
        phoneNumber: '',
        kindattn: '',
        email: '',
        faxno: '',
    });

    const handleChange = (event) => {
        setFormData({ ...addClients, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const addClient = JSON.parse(localStorage.getItem('addClient')) || [];
        addClient.push(addClients);
        localStorage.setItem('addClient', JSON.stringify(addClient));
        window.location.href = "/"
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="add-clients">
                <h3 className="form-title">Add Client</h3>
                <label>
                    Company Name :
                    <input type="number" name='companyName' value={addClients.companyName} onChange={handleChange} />
                </label>
                <label>
                    Addressline 2 :
                    <input type="date" name='addressline1' value={addClients.addressline1} onChange={handleChange} />
                </label>
                <label>
                    Addressline 2 :
                    <input type='text' name='addressline2' value={addClients.addressline2} onChange={handleChange} />
                </label>
                <label>
                    Addressline 3 :
                    <input type="tel" name='addressline3' value={addClients.addressline3} onChange={handleChange} />
                </label>
                <label>
                    Phone No :
                    <input type="email" name='phoneNumber' value={addClients.phoneNumber} onChange={handleChange} />
                </label>
                <label>
                    Kind Attn :
                    <input type="email" name='kindattn' value={addClients.kindattn} onChange={handleChange} />
                </label>
                <label>
                    Email :
                    <input type="email" name='email' value={addClients.email} onChange={handleChange} />
                </label>
                <label>
                    Fax No :
                    <input type="email" name='faxno' value={addClients.faxno} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddClients;
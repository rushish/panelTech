import "../assets/Styles/addclients.css"
import { useState } from "react";

const AddClients = () => {
    const [companyName, setcompanyName] = useState('');
    const [addressline1, setaddressline1] = useState('');
    const [addressline2, setaddressline2] = useState('');
    const [addressline3, setaddressline3] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [kindattn, setkindattn] = useState('');
    const [email, setemail] = useState('');
    const [faxno, setfaxno] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            companyName,
            addressline1,
            addressline2,
            addressline3,
            phoneNumber,
            kindattn,
            email,
            faxno
        };
        formData.push({
            companyName,
            addressline1,
            addressline2,
            addressline3,
            phoneNumber,
            kindattn,
            email,
            faxno
        });
        localStorage.setItem('formData', JSON.stringify(formData));
        window.location.href = "/"
    }


    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="add-clients">
                <h3 className="form-title">Add Client</h3>
                <label>Company Name<br></br><input type="text" value={companyName} onChange={(event) => setcompanyName(event.target.value)} /></label><br />
                <label>Address Line 1<br></br><input type="text" value={addressline1} onChange={(event) => setaddressline1(event.target.value)} /></label><br />
                <label>Address Line 2<br></br><input type="text" value={addressline2} onChange={(event) => setaddressline2(event.target.value)} /></label><br />
                <label>Address Line 3<br></br><input type="text" value={addressline3} onChange={(event) => setaddressline3(event.target.value)} /></label><br />
                <label>Phone No.<br></br><input type="tel" value={phoneNumber} onChange={(event) => setphoneNumber(event.target.value)} /></label><br />
                <label>Kind Attn.<br></br><input type="text" value={kindattn} onChange={(event) => setkindattn(event.target.value)} /></label><br />
                <label>Email<br></br><input type="email" value={email} onChange={(event) => setemail(event.target.value)} /></label><br />
                <label>Fax No.<br></br><input type="number" value={faxno} onChange={(event) => setfaxno(event.target.value)} /></label><br />
                <input className="addcli-btn" type="submit" value="ADD" />
            </form>
        </div>
    );
}

export default AddClients;
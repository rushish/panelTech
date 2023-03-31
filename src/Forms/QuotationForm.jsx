import React, { useState } from 'react';

function Form() {
    const [quotationData, setquotationData] = useState({
        enquiryno: '',
        enquirydate: '',
        contactperson: '',
        contactpersonphone: '',
        contactpersonemail: '',
    });

    const handleChange = (event) => {
        setquotationData({ ...quotationData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const quotationquotationData = JSON.parse(localStorage.getItem('quotationquotationData')) || [];
        quotationquotationData.push(quotationData);
        localStorage.setItem('quotationquotationData', JSON.stringify(quotationquotationData));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Customer Enquiry no.:
                <input type="text" name="name" value={quotationData.name} onChange={handleChange} />
            </label>
            <label>
                Enquiry Date:
                <input type="date" name="email" value={quotationData.email} onChange={handleChange} />
            </label>
            <label>
                Contact person:
                <input type='text' name="message" value={quotationData.message} onChange={handleChange} />
            </label>
            <label>
                Contact person Phone no.:
                <input type='number' name="message" value={quotationData.message} onChange={handleChange} />
            </label>
            <label>
                Contact Person Email:
                <input type='email' name="message" value={quotationData.message} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;

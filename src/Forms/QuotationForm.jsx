import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        enquiryno: '',
        enquirydate: '',
        contactperson: '',
        contactpersonphone: '',
        contactpersonemail: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const quotationFormData = JSON.parse(localStorage.getItem('quotationFormData')) || [];
        quotationFormData.push(formData);
        localStorage.setItem('quotationFormData', JSON.stringify(quotationFormData));
        window.location.href = "/add-quotation"
    };

    return (
        <form className='quot-form' onSubmit={handleSubmit}>
            <label>
                Customer Enquiry no.:
                <input type="number" name='enquiryno' value={formData.enquiryno} onChange={handleChange} />
            </label>
            <label>
                Enquiry Date:
                <input type="date" name='enquirydate' value={formData.enquirydate} onChange={handleChange} />
            </label>
            <label>
                Contact person:
                <input type='text' name='contactperson' value={formData.contactperson} onChange={handleChange} />
            </label>
            <label>
                Contact person Phone no.:
                <input type="tel" name='contactpersonphone' value={formData.contactpersonphone} onChange={handleChange} />
            </label>
            <label>
                Contact Person Email:
                <input type="email" name='contactpersonemail' value={formData.contactpersonemail} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;

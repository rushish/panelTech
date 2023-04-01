import React, { useState } from 'react'
import "../assets/Styles/addQuot.css"

function AddQuot() {
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
    };

    return (
        <form className='quot' onSubmit={handleSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>Add Item</th>
                        <th>Delete Item</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='add'>
                            <section>
                                <label>
                                    Item Description <br />
                                    <textarea rows="5" name='contactperson' value={formData.contactperson} onChange={handleChange} />
                                </label>
                            </section>
                            <section>
                                <div className='flex-section'>
                                    <div>
                                        <label>
                                            Model Number
                                            <input type='text' name='contactperson' value={formData.contactperson} onChange={handleChange} />
                                        </label>
                                        <label>
                                            HSN Code
                                            <input type='text' name='contactperson' value={formData.contactperson} onChange={handleChange} />
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            Quantity
                                            <input type='number' name='contactperson' value={formData.contactperson} onChange={handleChange} />
                                        </label>
                                        <label>
                                            Unit Price
                                            <input type='number' name='contactperson' value={formData.contactperson} onChange={handleChange} />
                                        </label>
                                    </div>
                                </div>
                                <button className='add-item'>Add Item</button>
                            </section>
                        </td>
                        <td>
                            <label>
                                Delete Item
                                <input type='text' name='contactperson' value={formData.contactperson} onChange={handleChange} />
                                <button className='delete-item'>Delete Item</button>
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <th>

                    </th>
                </thead>
            </table>
        </form>
    );
}

export default AddQuot;

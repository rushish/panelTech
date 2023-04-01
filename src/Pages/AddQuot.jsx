import React, { useState } from 'react'
import "../assets/Styles/addQuot.css"
import { Link } from 'react-router-dom';

function AddQuot() {
    const [formData, setFormData] = useState({
        model_no: '',
        quantity: '',
        hsn_code: '',
        unit_price: '',
        item_description: '',
        delete_item: '',
        itemId: 1,
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const itemFormData = JSON.parse(localStorage.getItem('itemFormData')) || [];
        itemFormData.push(formData);
        localStorage.setItem('itemFormData', JSON.stringify(itemFormData));
        location.reload();
    };

    const itemDataArray = JSON.parse(localStorage.getItem('itemFormData')) || [];

    return (
        <form className='quot'>
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
                                    <textarea rows="5" name='item_description' value={formData.item_description} onChange={handleChange} />
                                </label>
                            </section>
                            <section>
                                <div className='flex-section'>
                                    <div>
                                        <label>
                                            Model Number
                                            <input type='text' name='model_no' value={formData.model_no} onChange={handleChange} />
                                        </label>
                                        <label>
                                            HSN Code
                                            <input type='text' name='hsn_code' value={formData.hsn_code} onChange={handleChange} />
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            Quantity
                                            <input type='number' name='quantity' value={formData.quantity} onChange={handleChange} />
                                        </label>
                                        <label>
                                            Unit Price
                                            <input type='number' name='unit_price' value={formData.unit_price} onChange={handleChange} />
                                        </label>
                                    </div>
                                </div>
                                <button className='add-item' onClick={handleSubmit}>Add Item</button>
                            </section>
                        </td>
                        <td>
                            <label>
                                Delete Item
                                <input type='text' name='delete_item' value={formData.delete_item} onChange={handleChange} />
                                <button className='delete-item'>Delete Item</button>
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item Description</th>
                        <th>Model Number</th>
                        <th>Hsn Code</th>
                        <th>Item ID</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {itemDataArray.map((itemData, index) => (
                        <tr key={index}>
                            <td>{itemData.item_description}</td>
                            <td>{itemData.item_description}</td>
                            <td>{itemData.model_no}</td>
                            <td>{itemData.hsn_code}</td>
                            <td>{itemData.item_id}</td>
                            <td>{itemData.item_description}</td>
                            <td>{itemData.item_description}</td>
                            <td>{itemData.item_description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/notes-add"><button>Proceed Next to Add Notes and Deviation</button></Link>
        </form>
    );
}

export default AddQuot;

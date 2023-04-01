import React from 'react';
import { Link } from "react-router-dom"

function Table() {
    const formDataArray = JSON.parse(localStorage.getItem('addClient')) || [];

    return (
        <table>
            <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Create Quotation</th>
                </tr>
            </thead>
            <tbody>
                {formDataArray.map((quotationData, index) => (
                    <tr key={index}>
                        <td>{quotationData.companyName}</td>
                        <td className='button-wrap'><Link to="/create-quotation"><button className='create-quote'>Create Quotation</button></Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;

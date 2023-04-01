import React from 'react';

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
                        <td className='button-wrap'><button className='create-quote'>Create Quotation</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;

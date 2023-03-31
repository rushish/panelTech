import React from 'react';

function Table() {
    const formDataArray = JSON.parse(localStorage.getItem('quotationFormData')) || [];

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {formDataArray.map((formData, index) => (
                    <tr key={index}>
                        <td>{quotationData.name}</td>
                        <td>{quotationData.email}</td>
                        <td>{quotationData.message}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;

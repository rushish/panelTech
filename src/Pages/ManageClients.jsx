import React, { useState, useEffect } from 'react';

function ManageClients() {
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        // Fetch form data from localStorage
        const storedData = localStorage.getItem('formData');
        if (storedData) {
            setFormData(JSON.parse(storedData));
        }
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {/* {formData.map((data, index) => ( */}
                <tr>
                    <td>{formData.companyName}</td>
                    <td>{formData.email}</td>
                </tr>
                {/* ))} */}
            </tbody>
        </table>
    );
}
export default ManageClients;
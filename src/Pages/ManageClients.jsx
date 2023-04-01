import React from 'react';
import Table from '../Forms/QuotationTable';
import "../assets/Styles/manageclients.css"

function ManageClients() {
    return (
        <div className='wrapper'>
            <h2 className='title'>Manage Clients</h2>
            <Table />
        </div>
    );
}

export default ManageClients;

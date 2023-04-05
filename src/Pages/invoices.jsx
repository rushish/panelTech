import "../assets/Styles/invoices.css"

const Invoices = () => {
    return (
        <div className="invoice-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Company Name: Company Name Variable</th>
                        <th>Quotation Number: Quotation Number Variable</th>
                        <th>Revision No.:</th>
                    </tr>
                </thead>
            </table>
            <div className="listed">
                <table className="listed-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Description</th>
                            <th>Model Number</th>
                            <th>Hsn Code</th>
                            <th>Quantity</th>
                            <th>Unit Price (in ₹)[Original]</th>
                            <th>Latest Amended price</th>
                            <th>New Revised Unit Price (in ₹)</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><textarea name="description" id="" cols="30" rows="3"></textarea></td>
                            <td><input type="number" className="text" /></td>
                            <td><input type="number" className="text" /></td>
                            <td><input type="number" className="text" /></td>
                            <td><input type="number" className="text" /></td>
                            <td><input type="number" className="text" /></td>
                            <td><input type="number" className="text" /></td>
                        </tr>
                    </thead>
                </table>
                <button className="update-btn">Update</button>
            </div>
        </div>
    );
}

export default Invoices;
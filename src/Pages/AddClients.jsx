import "../assets/Styles/addclients.css"

const AddClients = () => {


    return (
        <div className="form-wrapper">
            <form className="add-clients">
                <h3 className="form-title">Add Client</h3>
                <label>Company Name<br></br><input type="email" /></label><br />
                <label>Address Line 1<br></br><input type="email" /></label><br />
                <label>Address Line 2<br></br><input type="email" /></label><br />
                <label>Address Line 3<br></br><input type="email" /></label><br />
                <label>Phone No.<br></br><input type="email" /></label><br />
                <label>Kind Attn.<br></br><input type="email" /></label><br />
                <label>Email<br></br><input type="email" /></label><br />
                <label>Fax No.<br></br><input type="email" /></label><br />
                <input className="addcli-btn" type="submit" value="ADD" />
            </form>
        </div>
    );
}

export default AddClients;
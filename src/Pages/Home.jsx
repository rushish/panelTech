import "../assets/Styles/home.css"

const Home = () => {
    return (
        <>
            <h2 className="home-heading">Admin Controls</h2>
            <div className="cards-wrapper">
                <div className="card">Add Clients</div>
                <div className="card">Manage Clients</div>
                <div className="card">Edit Original Quotations</div>
                <div className="card">Revise Quotations</div>
                <div className="card">Print Invoice</div>
                <div className="card">OAS</div>
            </div>
            <div className="black-footer"></div>
        </>
    );
}

export default Home;
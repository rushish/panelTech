import "../assets/Styles/home.css"
import Slider from "../Components/Slider";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Slider />
            <h2 className="home-heading">Admin Controls</h2>
            <div className="cards-wrapper">
                <Link className="card" to="/add-clients">Add Clients</Link>
                <Link className="card" to="/manage-clients">Manage Clients</Link>
                <Link className="card" to="/original">Edit Original Quotations</Link>
                <Link className="card" to="#">Revise Quotations</Link>
                <Link className="card" to="#">Print Invoice</Link>
                <Link className="card" to="#">OAS</Link>
            </div>
            <div className="black-footer"></div>
        </>
    );
}

export default Home;
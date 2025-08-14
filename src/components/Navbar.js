import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg fixed-top bg-body clean-navbar">
        <div className="container"><Link className="navbar-brand logo" to="/">Brand</Link>
        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" href="features.html">Features</Link></li>
                    <li className="nav-item"><Link className="nav-link" href="pricing.html">Pricing</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/About">About Us</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Navbar;
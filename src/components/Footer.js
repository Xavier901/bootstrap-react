import { Link } from "react-router-dom";


function Footer() {
    return(
<footer className="page-footer dark">
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <h5>Get started</h5>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Log in</Link></li>
                        <li><Link to="#">Downloads</Link></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h5>About us</h5>
                    <ul>
                        <li><Link to="#">Company Information</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                        <li><Link to="#">Reviews</Link></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h5>Support</h5>
                    <ul>
                        <li><Link to="#">FAQ</Link></li>
                        <li><Link to="#">Help desk</Link></li>
                        <li><Link to="#">Forums</Link></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <h5>Legal</h5>
                    <ul>
                        <li><Link to="#">Terms of Service</Link></li>
                        <li><Link to="#">Terms of Use</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p>© 2025 Copyright Text</p>
        </div>
    </footer>
    );
}
export default Footer;
import avatar1 from '../assets/img/avatars/avatar1.jpg'
import avatar2 from '../assets/img/avatars/avatar2.jpg'
import avatar3 from '../assets/img/avatars/avatar3.jpg'
import { Link } from "react-router-dom";

function About() {
    return(
       <main className="page">
        <section className="clean-block">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-lg-4">
                        <div className="card text-center clean-card">
                            <img className="card-img-top w-100 d-block" src={avatar1} alt='Avatar'/>
                            <div className="card-body info">
                                <h4 className="card-title">John Smith</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="icons">
                                    <Link to="#">
                                    <i className="icon-social-facebook"></i>
                                    </Link>
                                    <Link href="#">
                                    <i className="icon-social-instagram"></i>
                                    </Link>
                                    <Link href="#"><i className="icon-social-twitter"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="card text-center clean-card">
                             <img className="card-img-top w-100 d-block" src={avatar2} alt='Avatar2'/>
                            <div className="card-body info">
                                <h4 className="card-title">Robert Downturn</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="icons">
                                    <Link href="#"><i className="icon-social-facebook"></i>
                                    </Link>
                                    <Link href="#"><i className="icon-social-instagram"></i></Link>
                                    <Link href="#"><i className="icon-social-twitter"></i></Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="card text-center clean-card">
                            <img className="card-img-top w-100 d-block" src={avatar3} alt='Avatar3'/>
                            <div className="card-body info">
                                <h4 className="card-title">Ally Sanders</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="icons">
                                    <Link href="#"><i className="icon-social-facebook"></i></Link>
                                    <Link href="#"><i class="icon-social-instagram"></i></Link>
                                    <Link href="#"><i class="icon-social-twitter"></i></Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
}

export default About;
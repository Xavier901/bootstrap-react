import avatar1 from '../assets/img/avatars/avatar1.jpg'
import avatar2 from '../assets/img/avatars/avatar2.jpg'
import avatar3 from '../assets/img/avatars/avatar3.jpg'
import image5 from '../assets/img/scenery/image5.jpg'
import image4 from '../assets/img/scenery/image4.jpg'
import image6 from '../assets/img/scenery/image6.jpg'
import image1 from '../assets/img/scenery/image1.jpg'
import { Link } from 'react-router-dom'

function Home() {
    return(
        <main className="page">
            <section className="clean-block clean-hero" style={{backgroundImage: `url(${image4})`,color: 'rgba(9, 162, 255, 0.85)', }}>   
            <div className="text">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p><button class="btn btn-outline-light btn-lg" type="button">Learn More</button>
            </div>
        </section>
        <section className="clean-block clean-info dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Info</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src={image5} alt='Image5'/></div>
                    <div className="col-md-6">
                        <h3>Lorem impsum dolor sit amet</h3>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div><button className="btn btn-outline-primary btn-lg" type="button">Join Now</button>
                    </div>
                </div>
            </div>
        </section>
        <section className="clean-block features">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Features</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-5 feature-box"><i class="icon-star icon"></i>
                        <h4>Bootstrap 5</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>
                    <div className="col-md-5 feature-box"><i class="icon-pencil icon"></i>
                        <h4>Customizable</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>
                    <div className="col-md-5 feature-box"><i class="icon-screen-smartphone icon"></i>
                        <h4>Responsive</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>
                    <div className="col-md-5 feature-box"><i class="icon-refresh icon"></i>
                        <h4>All Browser Compatibility</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="clean-block slider dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Slider</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <div className="carousel slide" data-bs-ride="carousel" id="carousel-1">
                    <div className="carousel-inner">
                        <div className="carousel-item active"><img className="w-100 d-block" src={image1} alt="Slide 1"/></div>
                        <div className="carousel-item"><img className="w-100 d-block" src={image4} alt="Slide2"/></div>
                        <div className="carousel-item"><img className="w-100 d-block" src={image6} alt="Slide3"/></div>
                    </div>
                    <div>
                        <Link className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                        <span className="visually-hidden">Previous</span>
                        </Link>
                        <Link className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                        <span className="visually-hidden">Next</span>
                        </Link>
                        </div>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></button>
                         <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"></button>
                          <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"></button>
                          </div>
                </div>
            </div>
        </section>
        <section className="clean-block">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-lg-4">
                        <div className="card text-center clean-card">
                            <img class="card-img-top w-100 d-block" src={avatar1} alt='avatar1'/>
                            <div className="card-body info">
                                <h4 className="card-title">John Smith</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="icons">
                                    <Link href="#"><i className="icon-social-facebook"></i></Link>
                                <Link href="#"><i className="icon-social-instagram"></i></Link>
                                <Link href="#"><i className="icon-social-twitter"></i></Link>
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
                                    <Link href="#"><i className="icon-social-facebook"></i></Link>
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
                                    <Link href="#"><i class="icon-social-facebook"></i></Link>
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

export default Home;
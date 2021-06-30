import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backgroundimg: {

    },
    btn: {
        color: '#fffff0',
        textTransform: 'none',
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(3),
        borderRadius: 25,
        fontSize: 20,
        textDecoration: 'none',
        '&:hover': {
            color: '#fffff0',
        }
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <React.Fragment>

            <section id="hero">
                <div className="hero-container">
                    <h1>Welcome to Black Code</h1>
                    <h2>We Are Going To Make Your Education Easy</h2>
                    <Button variant="contained" color="primary" className={classes.btn}>
                        <a href="#about" className={classes.btn}>Get Started</a>
                    </Button>
                </div>
            </section>
            {/* <!-- #hero --> */}

            <section id="about">
                <div className="container">
                    <div className="row about-container">

                        <div className="col-lg-6 content order-lg-1 order-2">
                            <h2 className="title">About DTSS Education</h2>
                            <p>
                                Education is the process of facilitating learning, or the acquisition of knowledge, skills, values,
                                morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and
                                directed research
                            </p>

                            <div className="icon-box wow fadeInUp">
                                <div className="icon"><i className="fa fa-search-plus"></i></div>
                                <h4 className="title">Research Publishing</h4>
                                <p className="description">
                                    Publications make scientific information publically available, and allow the rest
                                    of the academic audience to evaluate the quality of the research. There are various types of
                                    publications like Scholarly Journals, Professional or Trade Publications, Popular and General Interest
                                    Magazines.
                                </p>
                            </div>

                            <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon"><i className="fa fa-file"></i></div>
                                <h4 className="title">Workshop Proposals</h4>
                                <p className="description">
                                    Workshops should highlight current topics related to technical and business issues
                                    in communications and networking, and should include a mix of regular papers, invited presentations, and
                                    panels that encourage the participation of attendees in active discussion.
                                </p>
                            </div>

                            <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon"><i className="fa fa-address-card"></i></div>
                                <h4 className="title">Personal Profile</h4>
                                <p className="description">
                                    A personal profile gives a brief and clear account on someone's life. On the one
                                    hand, you can write it in a form of a description, giving the most important information such as
                                    personal data, your education, and career achievements. You also might add a few words about your
                                    interests.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 background order-lg-2 order-1 wow fadeInRight"></div>
                    </div>

                </div>
            </section>
            {/* <!-- #about --> */}

            {/* <!--==========================Facts Section============================--> */}
            <section id="facts">
                <div className="container wow fadeIn">
                    <div className="section-header">
                        <h3 className="section-title">Facts</h3>
                        <p className="section-description">About Our Company Facts</p>
                    </div>
                    <div className="row counters">

                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">65</span>
                            <p>Users</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">128</span>
                            <p>Research Publications</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">800</span>
                            <p>Hours Of Workshops</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">4</span>
                            <p>Workers</p>
                        </div>

                    </div>

                </div>
            </section>
            {/* <!-- #facts --> */}

            {/* <!--==========================Services Section============================--> */}
            <section id="services">
                <div className="container wow fadeIn">
                    <div className="section-header">
                        <h3 className="section-title">Services</h3>
                        <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="box">
                                <div className="icon"><i className="fa fa-desktop"></i></div>
                                <h4 className="title">Lorem Ipsum</h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="box">
                                <div className="icon"><i className="fa fa-bar-chart"></i></div>
                                <h4 className="title">Dolor Sitema</h4>
                                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat tarad limino ata</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="box">
                                <div className="icon"><i className="fa fa-paper-plane"></i></div>
                                <h4 className="title">Sed ut perspiciatis</h4>
                                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="box">
                                <div className="icon"><i className="fa fa-photo"></i></div>
                                <h4 className="title">Magni Dolores</h4>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="box">
                                <div className="icon"><i className="fa fa-road"></i></div>
                                <h4 className="title">Nemo Enim</h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="box">
                                <div className="icon"><i className="fa fa-shopping-bag"></i></div>
                                <h4 className="title">Eiusmod Tempor</h4>
                                <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                soluta nobis est eligendi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- #services --> */}

            {/* <!--==========================Call To Action Section============================--> */}
            <section id="call-to-action">
                <div className="container wow fadeIn">
                    <div className="row calltoaction">
                        <div className="col-lg-9 text-center text-lg-left">
                            <h3 className="cta-title">Not Signed Yet..?</h3>
                            <p className="cta-text">If You Wish To Join With Us...</p>
                        </div>
                        <div className="col-lg-3 cta-btn-container text-center">
                            <Button variant="contained" color="primary" className={classes.btn}>
                                <Link to={'/signup'} style={{ textDecoration: "none", color: "#fffff0" }}>Sign Up</Link>
                            </Button>

                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- #call-to-action --> */}

            {/* <!--==========================Team Section============================--> */}
            <section id="leatetnews">

                <div className="container wow fadeIn">
                    <div className="section-header">
                        <h3 className="section-title">Team</h3>
                        <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque</p>
                    </div>
                </div>

            </section>
            {/* <!-- #team --> */}

            {/* <!--==========================Portfolio Section============================--> */}
            <section id="callforpapers">

                <div className="container wow fadeIn">
                    <div className="section-header">
                        <h3 className="section-title">Call For Papers</h3>
                        <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque</p>
                    </div>
                </div>

            </section>
            {/* <!-- #portfolio --> */}

            {/* <!--==========================Team Section============================--> */}
            <section id="team">

                <div className="container wow fadeIn">
                    <div className="section-header">
                        <h3 className="section-title">Team</h3>
                        <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque</p>
                    </div>
                </div>

            </section>
            {/* <!-- #team --> */}

            {/* <!--==========================Contact Section============================--> */}
            <section id="contactus">

                <div className="container wow fadeIn">
                    <div className="section-header">
                        <h3 className="section-title">Contact</h3>
                        <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque</p>
                    </div>
                </div>

            </section>
            {/* <!-- #contact --> */}

        </React.Fragment>
    )
}

export default Home

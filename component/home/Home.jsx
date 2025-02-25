import React, {useState, useEffect} from 'react';
import styles from "./home.module.scss";
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import { isMobile } from 'react-device-detect';
import { Button } from '@mui/material';
import Link from 'next/link';
import banner from '../../public/banner.jpg';
import Image from "next/image";


const Home = (props) =>{

    const [loaded, setLoad] = useState(false);

    useEffect(()=>{
        setLoad(true);
    },[])

    return (
        <>
            {loaded ? 
                <section className="section-container">
                    <Grid className="banner-container">
                        <div className={styles["banner-holder"]}>
                            <div className={styles['benner-img']}>
                                <Image
                                    src={banner}
                                    alt="logo"
                                />
                            </div>
                            <div className={styles['banner-text']}>
                                The promise of conformity to standards and ethics - CTRS
                            </div>
                        </div>
                    </Grid>
                    <Container >
                        <Grid>
                            <div className={`section-heading text-center ${isMobile ? "font-24" : "font-38"} `}>
                                <h3 className="section-title">Why Choose CTRS</h3>
                            </div>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid className="text-center" xs={isMobile ? 12 : 3}>
                                <div className={`${styles.card_holder}`}>
                                    <div className={`${styles.card_title} font-30`}>
                                        <div className={styles.card_title_text}>C</div>
                                    </div>
                                    <div className={styles.card_list}>
                                        <ul className="text-white font-16">
                                            <li className={`${styles.card_li}`}>Credible </li> 
                                            <li className={`${styles.card_li}`}>comprehensive</li> 
                                            <li className={`${styles.card_li}`}>committed</li>
                                            <li className={`${styles.card_li}`}>Capacious</li>
                                        </ul>
                                    </div>
                                </div>
                            </Grid>
                            <Grid className="text-center" xs={isMobile ? 12 : 3}>
                                <div className={`${styles.card_holder}`}>
                                    <div className={`${styles.card_title} font-30`}>
                                        <div className={styles.card_title_text}>T</div>
                                    </div>
                                    <div className={styles.card_list}>
                                        <ul className="text-white font-16">
                                            <li className={`${styles.card_li}`}>Trustworthy</li> 
                                            <li className={`${styles.card_li}`}>Time-honoured</li> 
                                            <li className={`${styles.card_li}`}>Transparent</li>
                                            <li className={`${styles.card_li}`}>Take Charge</li>
                                        </ul>
                                    </div>
                                </div>
                            </Grid>
                            <Grid className="text-center" xs={isMobile ? 12 : 3}>
                                <div className={`${styles.card_holder}`}>
                                    <div className={`${styles.card_title} font-30`}>
                                        <div className={styles.card_title_text}>R</div>
                                    </div>
                                    <div className={styles.card_list}>
                                        <ul className="text-white font-16">
                                            <li className={`${styles.card_li}`}>Reliable</li> 
                                            <li className={`${styles.card_li}`}>Responsible</li> 
                                            <li className={`${styles.card_li}`}>Reputable</li>
                                            <li className={`${styles.card_li}`}>Rational</li>
                                        </ul>
                                    </div>
                                </div>
                            </Grid>
                            <Grid className="text-center" xs={isMobile ? 12 : 3}>
                                <div className={`${styles.card_holder}`}>
                                    <div className={`${styles.card_title} font-30`}>
                                        <div className={styles.card_title_text}>S</div>
                                    </div>
                                    <div className={styles.card_list}>
                                        <ul className="text-white font-16">
                                            <li className={`${styles.card_li}`}>Scientific</li> 
                                            <li className={`${styles.card_li}`}>Skilled</li> 
                                            <li className={`${styles.card_li}`}>Sincere</li>
                                            <li className={`${styles.card_li}`}>Supportive</li>
                                        </ul>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid className="mgt-40">
                            <div className={`${isMobile ? "font-24" : "font-38"} mgb-25`}>
                                <h3 className="section-title">About Us</h3>
                            </div>
                            <div className={styles['about-section']}>
                                <p className='mgb-30'>Clinical Trial Research Services (CTRS) is a India Based SMO offers cutting-edge, specialised clinical trial and research-related services. Above our name, expresses our enthusiasm for conducting clinical trials, doing research, and providing the globe with the best services and treatment solutions. We provide exceptional site management and project management and monitoring of phase II, III and IV clinical trials involving pharmaceutical, biological and medical device products to its clients. We maintain High retention of our clients due to our commitment, responsiveness, flexibility, performance, cost effectiveness and unmatched quality. We complement each client's working culture and management style and are flexible to their requirements.</p>
                                <div className={`text-end ${styles["read-more-btn"]}`}>
                                    <Link href="/about">
                                        <span>
                                            Read More
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                        <Grid className="pdt-40" container spacing={3}>
                            <Grid className="" xs={isMobile ? 12 : 6}>
                                <div className={`${isMobile ? "font-24" : "font-38"} mgb-25`}>
                                    <h3 className="section-title">Services</h3>
                                </div>
                                <div className='mgb-20'>
                                    Efficiently launch your product with our customised services
                                </div>
                                <div className=''>
                                    This model increases quality and speed while significantly reducing the cost of the whole program.
                                </div>
                            </Grid>
                            <Grid className="" xs={isMobile ? 12 : 6}>
                                <div className={styles['service-content-holder']}>
                                    <ul>
                                        <li>Site Selection & Feasibility</li>
                                        <li>Specialised Site Support</li>
                                        <li>Rapid Start-up</li>
                                        <li>Patient Recruitment & Retention</li>
                                        <li>Overall study management</li>
                                        <li>Training</li>
                                    </ul>
                                    <div className={`text-end ${styles["read-more-btn"]}`}>
                                        <Link href="/services">
                                            <span>
                                                Read More
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid className="pdt-40" container spacing={3}>
                            <Grid className="" xs={isMobile ? 12 : 6}>
                                <div className={styles['service-content-holder']}>
                                    <Link href="/therapeutic">
                                        <ul>
                                            <li>COVID-19 Clinical Trial</li>
                                            <li>Cardiology</li>
                                            <li>Oncology</li>
                                            <li>Respiratory</li>
                                            <li>Rheumatology</li>
                                            <li>Dermatology</li>
                                            <li>Orthopaedics</li>
                                            <li>Neurology and Neurosurgery</li>
                                            <li>Ophthalmology</li>
                                        </ul>
                                    </Link>
                                    <div className={`text-end ${styles["read-more-btn"]}`}>
                                        <Link href="/therapeutic">
                                            <span>
                                                Read More
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                            <Grid className="" xs={isMobile ? 12 : 6}>
                                <div className={`${isMobile ? "font-24" : "font-38"} mgb-25`}>
                                    <h3 className="section-title">Therapeutic Areas</h3>
                                </div>
                                <div className='mgb-20'>
                                    We have an expanding network of dedicated experienced and quality conscious investigators and multispeciality hospitals. We also have network with many renowned CROs and Sponsors medical devices.
                                </div>
                            </Grid>
                        </Grid>
                        {/* <Grid>
                            <div className={`section-heading text-center ${isMobile ? "font-24" : "font-38"} mgt-25`}>
                                <h3 className="section-title">Who We Are</h3>
                            </div>
                        </Grid>
                        <Grid>
                            <p className={`${styles.content}`}>
                                Clinical Trial Research Services (CTRS) is an India-based SMO that offers cutting-edge, specialised clinical trial and research-related services. Above our name, we express our enthusiasm for conducting clinical trials, doing research, and providing the globe with the best services and treatment solutions. We provide exceptional site management, project management, and monitoring of phases II, III, and IV clinical trials involving pharmaceutical, biological, and medical device products to its clients. We maintain high client retention rates due to our commitment, responsiveness, flexibility, performance, cost effectiveness, and unmatched quality. We complement each client's working culture and management style and are flexible with their requirements.
                            </p>
                        </Grid>      */}
                        {/* <Grid>
                            <div className={`section-heading text-center ${isMobile ? "font-24" : "font-38"} mgt-25`}>
                                <h3 className="section-title">How We Work</h3>
                            </div>
                        </Grid>
                        <Grid>
                            <ul className={styles.content}>
                                <li>
                                    We deploy highly qualified Clinical Research Coordinators (CRCs) who are protocol-specific to each research site. CRCs are assigned by Principle Investigators and mostly assist investigators with non-medical evaluation-related study activities when a clinical trial is being conducted.
                                </li>
                                <li>
                                    Our knowledgeable research coordinators execute each clinical trial in accordance with the most recent ICH-GCP & NDCT guidelines from India.
                                </li>
                                <li>
                                    Our investigators are chosen based on their prior experience with patient recruitment, the accuracy of the data, and a feasibility report created using the specific protocol.
                                </li>
                                <li>
                                    We offer services across all therapeutic specialties.
                                </li>
                                <li>
                                    We also perform document preparation (such as informed consent forms (ICF), tracking forms, and recruitment materials).
                                </li>
                                <li>
                                    Submission of a clinical trial to an institutional or central review board
                                </li>
                                <li>
                                    Subject recruitment and follow-up
                                </li>
                                <li>
                                    Reporting of serious adverse events to the sponsor, the CRO, and the overseeing review board
                                </li>
                            </ul>
                        </Grid> */}
                        {/* <Grid>
                            <div className={`section-heading text-center ${isMobile ? "font-24" : "font-38"} mgt-25`}>
                                <h3 className="section-title">Why Choose Us</h3>
                            </div>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid className="text-center" xs={isMobile ? 6 : 3}>
                                <p>
                                    Excellence in Onsite Coordination and Monitoring of Phase II, III, and IV Clinical Trials.
                                </p>
                            </Grid>
                            <Grid className="text-center" xs={isMobile ? 6 : 3}>
                                <p>
                                    Multiple therapeutic segments.
                                </p>
                            </Grid>
                            <Grid className="text-center" xs={isMobile ? 6 : 3}>
                                <p>
                                    Quality source documentation, CRFs, and other paperwork.
                                </p>
                            </Grid>
                            <Grid className="text-center" xs={isMobile ? 6 : 3}>
                                <p>
                                    Large and diverse patient population with a positive attitude towards clinical research.
                                </p>
                            </Grid> 
                        </Grid> */}
                        {/* <Grid>
                            <div className={`section-heading text-center ${isMobile ? "font-24" : "font-38"} mgt-25`}>
                                <h3 className="section-title">Services We Offered</h3>
                            </div>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid xs={isMobile ? 6 : 3}>
                                <span>COVID-19 Clinical Trial</span>
                            </Grid>
                            <Grid xs={isMobile ? 6 : 3}>
                                <span>Cardiology</span>
                            </Grid>
                            <Grid xs={isMobile ? 6 : 3}><span>Oncology</span></Grid>
                            <Grid xs={isMobile ? 6 : 3}><span>Respiratory</span></Grid>
                            <Grid xs={isMobile ? 6 : 3}><span>Rheumatology</span></Grid>
                            <Grid xs={isMobile ? 6 : 3}><span>Dermatology</span></Grid>
                            <Grid xs={isMobile ? 6 : 3}><span>Orthopaedics</span></Grid>
                            <Grid xs={isMobile ? 6 : 3}><span>Neurology</span> and Neurosurgery</Grid>
                            <Grid xs={isMobile ? 6 : 3}><span>Ophthalmology</span></Grid>
                            <Grid xs={isMobile ? 6 : 3}><span>Nutraceuticals</span> and Cosmetics</Grid>
                            <Grid xs={isMobile ? 6 : 3}><span>Endocrinology</span> / Metabolism</Grid>
                            <Grid xs={isMobile ? 6 : 3}><span>Infectious</span> Disease</Grid>
                            <Grid xs={isMobile ? 6 : 3}><span>Pulmonology</span></Grid>
                            <Grid xs={isMobile ? 6 : 3}><span>Nephrology</span></Grid>
                        </Grid> */}
                        {/* <Grid>
                            <div className={`section-heading text-center font-38 mgt-25`}>
                                <h3 className="section-title">Our Leaders</h3>
                            </div>
                        </Grid>
                        */}
                    </Container>
                </section>
                :null
            }
        </>
    );
}

export default Home;

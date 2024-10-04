import BannerCarousel from "../components/bannercarousel"
import MyImage from "../components/myimage"
import Banners from "../data/banners.json"
import {Row, Col, Container, Ratio, Button, Fade} from "react-bootstrap"
import Link from "next/link"
import { motion, animate } from "framer-motion"
import FadeInWhenVisible from "../components/fadeinwhenvisible"


export default function Home() {
    return (
        <>
            <BannerCarousel banners={Banners["banners"]} className="mb-4 text-center"/>
            <Container className="mb-4">
                <div className="border-bottom border-light mb-4">
                    <Row className="align-items-center mb-4">
                        <Col xs={12} sm={12} md={6} className="py-2">
                        <FadeInWhenVisible>
                            <p className="title-size title-font-condensed text-uppercase border-bottom text-center">Who are we?</p>
                            <p className="mb-2 text-center">We&apos;re the anime club at UCSD :D </p>
                            <p className="mb-2 text-center">Do stop by our weekly club meetups
                            sometime to really get to know us! Don&apos;t be worried if you can&apos;t show up to the first
                            couple of meetings or events. </p>
                            <p className="mp-2 text-center">Feel free to hang out with us at any of the events that we host
                            throughout the school year.</p>
                        
                            <div className="d-grid">
                            <Button variant="primary" size="lg"
                                        href="https://www.youtube.com/channel/UC5GqPKHSGDl18dKxpwn0juw">Check out our Youtube channel!</Button>
                            </div>
                            </FadeInWhenVisible>
                        </Col>
                        <Col xs={12} sm={12} md={6} className="py-2">
                            <Ratio aspectRatio="4x3">
                            <iframe width="463" height="823" src="https://www.youtube.com/embed/yn7MMjtPiQ0?rel=0" title="AME tries Gojo’s sauce 🤞 #shorts" 
                            allow="allowfullscreen" allowFullScreen muted></iframe>
                            </Ratio>
                        </Col>
                    </Row>
                </div>
                <div className="border-bottom border-light mb-4">
                    <Row className="align-items-center mb-4">
                        <Col xs={12} sm={12} md={6} className="py-2">
                            <Ratio aspectRatio={350 / 500}>
                                <iframe src="https://discord.com/widget?id=247566229383020546&theme=dark" width="350"
                                        height="500"
                                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                            </Ratio>
                        </Col>
                        <Col xs={12} sm={12} md={6} className="py-2">
                            <FadeInWhenVisible>
                            <p className="title-size title-font-condensed text-uppercase border-bottom text-left">Future
                                Events!</p>
                                <p className="mb-2 text-left">We hold GBMs every Monday evening and other events throughout the
                                quarter. Although we are
                                currently preparing for Animefest, we still have plenty of other events happening this
                                quarter.</p>
                                <p className="mp-4 text-left">Check out our Discord for details!</p>
                            <div className="d-grid gap-2">
                                <Link href="/history" passHref><Button variant="primary" size="lg">History</Button></Link>
                                <Link href="/officers" passHref><Button variant="primary" size="lg">Current Officers</Button></Link>
                            </div>
                            </FadeInWhenVisible>
                        </Col>
                    </Row>
                </div>
                <FadeInWhenVisible>
                <div>
                    <Row className="align-items-center">
                        <Col xs={12} sm={12} md={6} className="py-2">
                            <p className="title-size title-font-condensed text-uppercase border-bottom">What Do We
                                Do?</p>
                            <p>We host anime showings and other activities <strong style={{color: "red"}}>every Monday evening</strong>. We also hang out and
                                    organize weekend socials like karaoke, club dinner, beach day etc. </p>
                                
                            <p>Our largest event is our on-campus convention, <a href="https://animefest.ucsd.moe">Animefest</a>, 
                                    which takes place every Winter Quarter, around February.</p>

                            <p>Check out our calendar to learn more about our events this quarter!</p>
                        </Col>
                        <Col xs={12} sm={12} md={6} className="py-2">
                            <MyImage src="images/ame_fall_24_event_calendar.png" alt="Triton sitting"
                                     className="w-100"></MyImage>
                        </Col>
                    </Row>
                </div>
                </FadeInWhenVisible>
            </Container>
        </>
    )
}

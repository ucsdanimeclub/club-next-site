import Link from 'next/link'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import MyImage from "../myimage"
import Social from "./social"
import Socials from "../../data/socials.json"


export default function Layout({children}) {
    return (
        <>
            <Navbar bg="dark" expand="lg" sticky="top" variant="dark">
                <Container className="title-font text-uppercase">
                    <Link href='/' passHref><Navbar.Brand>
                        <MyImage alt="AME logo" src="images/AME_navbar_logo.svg" className="w-50"/>
                    </Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav navbarScroll className="ms-auto">
                            <Link href='/' passHref><Nav.Link>Events</Nav.Link></Link>
                            <NavDropdown title="ABOUT" id="basic-nav-dropdown">
                                <Link href='/history' passHref><NavDropdown.Item>History</NavDropdown.Item></Link>
                                <Link href='/officers' passHref><NavDropdown.Item>Officers</NavDropdown.Item></Link>
                            </NavDropdown>
                            <Link href='/gallery' passHref><Nav.Link>Gallery</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main>{children}</main>
            <footer className="footer bg-dark">
                <Container className="text-center text-light">
                    <p className="caption-size">&copy; 2024 Anime &amp; Manga Enthusiasts at UC San Diego. All assets
                        belong to their respective owners.</p>
                    <Social data={Socials} className="mb-3"/>
                    <p className="caption-size highlight text-uppercase mb-0"><Link href="#">Back to top</Link></p>
                </Container>
            </footer>
        </>
    )
}

import React,{useState,useEffect} from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

function Header(props) {
    const [theme,setTheme] = useState("black")
    const onThemeChange = () => {
        props.changeTheme();
    }
    useEffect(() =>{
        console.log(props.record)
        // if(props.record === 'light'){
        //     setTheme("white")
        // }else{
        //     setTheme("black")
        // }
    },[props.record])
    return (
        <>
        {props.record == "light"?
        <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">TELESOTT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Pagrindinis</Nav.Link>
                            <Nav.Link href="/apie">Apie</Nav.Link>
                            <Nav.Link href="/galerija">Galerija</Nav.Link>
                            <Nav.Link href="/kontaktai">Kontaktai</Nav.Link>
                            <Nav.Link href="/anketa">Anketa</Nav.Link>
                            <Nav.Link href="/schema">Schema</Nav.Link>
                            <Nav.Link href="/yezaidimas">Žaidimas</Nav.Link>   
                            <button onClick={onThemeChange}>{props.record === "light"?
                            "Padaryt tamsu fona":"Padaryt sviesu fona"
                            }</button>        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> :
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand href="/">TELESOTT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Pagrindinis</Nav.Link>
                            <Nav.Link href="/apie">Apie</Nav.Link>
                            <Nav.Link href="/galerija">Galerija</Nav.Link>
                            <Nav.Link href="/kontaktai">Kontaktai</Nav.Link>
                            <Nav.Link href="/anketa">Anketa</Nav.Link>
                            <Nav.Link href="/schema">Schema</Nav.Link>
                            <Nav.Link href="/yezaidimas">Žaidimas</Nav.Link>   
                            <button onClick={onThemeChange}>{props.record === "light"?
                            "Padaryt tamsu fona":"Padaryt sviesu fona"
                            }</button>          
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        }
            
        </>
    )
}

export default Header

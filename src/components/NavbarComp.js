import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavbarComp() {
  return (
    <>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Megalodon Coaching
          </Navbar.Brand>
          <Nav.Link href="/online-coaching">ONLINE COACHING</Nav.Link>
          {/*  <Nav.Link href="link">RESULTS</Nav.Link> */}
          <Nav.Link href="/contact">KONTAKT</Nav.Link>
          <Nav.Link href="/qualifications">QUALIFIKATIONEN</Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import navlogo from "./navlogo.png"

function Navbars() {
  return (
    <Navbar bg="dark" variant="dark" style={{'height' : '10vh' , position:"relative" , width: "100%"}}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={navlogo}
            width="50"
            height="33"
            className="d-inline-block align-top"
          />{"   "} 
          Book-My-Movie
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navbars;

import Navigation from "./components/navigation";
import { Container } from "react-bootstrap/";
import { Outlet } from "react-router-dom";
import "./App.css"

function App() {
        return (
                <>
                        <Navigation />
                        <Container fluid>
                                <Outlet />
                        </Container>
                </>
        );
}

export default App;

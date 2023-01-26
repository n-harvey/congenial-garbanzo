import Navigation from "./components/navigation";
import { Container } from "react-bootstrap/";
import { Outlet } from "react-router-dom";

function App() {
        return (
                <>
                        <Navigation />
                        <Container>
                                <Outlet />
                        </Container>
                </>
        );
}

export default App;

import { Outlet } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/menu.jsx";
import Footer from "./components/footer/footer";

function App() {
    return (
        <>
            <Menu />
            <Outlet />
            <Footer />
        </>
    );
}
export default App;

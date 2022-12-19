import { Button, Nav } from "react-bootstrap";
import { Link, Outlet, redirect } from "react-router-dom";
import "../Styles/background.css";
const Layout = () => {
    /* This is a function that clears the local storage and redirects to the home page. */
    const loggin = localStorage.getItem("credentials");
    const logOut = () => {
        localStorage.clear();
        redirect("/");
        window.location.reload();
    };
    return (
        <div className="bg-light">
            <Nav variant="pills" defaultActiveKey="/" className="p-2">
                <Nav.Item>
                    <Nav.Link>
                        <Link className="nav-link active" to="/">
                            Home
                        </Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        {loggin && (
                            <Link className="nav-link" to="/Employee-page">
                                Employee
                            </Link>
                        )}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Button
                            variant="outline-danger"
                            className="logOut"
                            onClick={logOut}
                        >
                            <Link to="/" className="logOut">
                                LogOut
                            </Link>
                        </Button>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Outlet />
        </div>
    );
};
export default Layout;

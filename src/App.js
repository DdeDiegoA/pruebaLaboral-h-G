// import EmployeeList from "./Components/container/EmployeeList";
import { Routes, Route, redirect } from "react-router-dom";
import Layout from "./Routes/layout";
import HomePage from "./pages/homePage";
import EmployeePage from "./pages/employeePage";
import ErrorPage from "./pages/errorPage";

function App() {
    // const SearchPage = () => <h1>Search</h1>;
    // const accesDeclined = () => redirect("/");
    const isLoggin = localStorage.getItem("credentials") ? true : false;
    const isLogged = async () => {
        if (!isLoggin) {
            alert("you must be logged! redirect...");
            return redirect("/");
        }
    };
    return (
        <div>
            {/* The routing of the app. */}
            <Layout />
            <Routes errorElement={<ErrorPage />}>
                <Route path="/" element={<HomePage isLoggin={isLoggin} />} />
                <Route
                    shouldRevalidate={isLogged}
                    element={<EmployeePage />}
                    path="/Employee-page"
                />
            </Routes>
        </div>
    );
}

export default App;

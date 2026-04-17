import "./index.css";
import NavBar from "./NavBar";
import { Outlet } from "react-router";

function App() {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <NavBar />
            <Outlet />
            <div id="lastUpdated" className="text-sm font-[Trebuchet_MS] text-5w-blue-dark mt-auto ml-1 mb-1">
                This site was last updated April 16, 2026. (Happy Birthday,
                webmaster's brother!)
            </div>
        </div>
    );
}

export default App;

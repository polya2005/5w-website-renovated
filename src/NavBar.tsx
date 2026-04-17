import "./index.css";
import { NavLink } from "react-router";

function NavBar() {
    // return (
    //     <>
    //         <header>
    //             <button
    //                 onclick="document.location = 'index.html'"
    //                 id="homeButton"
    //                 class="homeButton"
    //             >
    //                 <img src="./images/5W Banner.png" alt="5W Banner"></img>
    //             </button>
    //         </header>
    return (
        <nav>
            <div className="block h-0.5 bg-5w-blue w-full" />
            <div className="block h-1.5 bg-5w-blue-dark w-full" />
            <div className="block h-0.5 bg-5w-blue w-full" />
            <div className="flex items-stretch">
                <NavLink
                    to="/"
                    className="grow border-x-5w-blue-dark border-[0.1vh] border-y-0 text-2xl bg-5w-blue-light font-[Palatino] italic font-black text-center text-5w-blue-dark"
                >
                    About
                </NavLink>
                <NavLink
                    to="/chairs"
                    className="grow border-x-5w-blue-dark border-[0.1vh] border-y-0 text-2xl bg-5w-blue-light font-[Palatino] italic font-black text-center text-5w-blue-dark"
                >
                    Chairs
                </NavLink>
                <NavLink
                    to="/events"
                    className="grow border-x-5w-blue-dark border-[0.1vh] border-y-0 text-2xl bg-5w-blue-light font-[Palatino] italic font-black text-center text-5w-blue-dark"
                >
                    Events
                </NavLink>
                <NavLink
                    to="/photos"
                    className="grow border-x-5w-blue-dark border-[0.1vh] border-y-0 text-2xl bg-5w-blue-light font-[Palatino] italic font-black text-center text-5w-blue-dark"
                >
                    Photos
                </NavLink>
                <NavLink
                    to="/misc"
                    className="grow border-x-5w-blue-dark border-[0.1vh] border-y-0 text-2xl bg-5w-blue-light font-[Palatino] italic font-black text-center text-5w-blue-dark"
                >
                    Misc.
                </NavLink>
            </div>
            <div className="block h-0.5 bg-5w-blue w-full" />
            <div className="block h-1.5 bg-5w-blue-dark w-full" />
            <div className="block h-0.5 bg-5w-blue w-full" />
        </nav>
    );
}

export default NavBar;

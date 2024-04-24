import {NavbarProps} from "../types";

export default function Navbar(props : NavbarProps){
    return (
        <div className="navbar">
            {props.values.map((value) => (
                <a href={"".concat("#", value.toLowerCase())}>{value}</a>
            ))}
            <button onClick={props.toggleTheme} className="theme-toggle-button">
            {props.darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    );
}
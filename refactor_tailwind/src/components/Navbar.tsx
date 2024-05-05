

export default function Navbar(props : {darkMode : boolean, toggleTheme : () => void, values : string[]}){
    return (
        <div className="bg-gray dark:bg-zinc-900
        sticky top-0 py-2 text-center z-50">
            {props.values.map((value) => (
                <a className="text-gray-800 dark:text-white px-4" href={"".concat("#", value.toLowerCase())}>{value}</a>
            ))}
            <button onClick={props.toggleTheme} 
            className="bg-black text-white
             font-semibold py-2 px-4 border border-gray-400 rounded shadow
             dark:bg-white dark:text-black"
            >
            {props.darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    );
}
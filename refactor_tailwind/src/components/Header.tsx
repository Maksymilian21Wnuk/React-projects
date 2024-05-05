import { HeaderProps } from "../types";


export default function Header(props : HeaderProps){
    return (
        <header id="header" className="bg-white dark:bg-black py-12 text-center dark:text-white ">
        <div className="header-content">
          <h1 className="text-4xl mb-6 font-medium">{props.name}</h1>
          <p className="text-lg">{props.slogan}</p>
        </div>
      </header>
);
}
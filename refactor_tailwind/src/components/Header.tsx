import { HeaderProps } from "../types";



export default function Header(props : HeaderProps){
    return (
        <header id="header" className="header">
        <div className="header-content">
          <h1>{props.name.name}</h1>
          <p>{props.slogan.slogan}</p>
        </div>
      </header>
);
}
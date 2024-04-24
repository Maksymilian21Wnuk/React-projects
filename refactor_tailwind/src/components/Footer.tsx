import { Name } from "../types";


export default function Footer(props : Name){
    return (
        <footer className="footer">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} {props.name}
          </p>
        </div>
      </footer>
    );
}
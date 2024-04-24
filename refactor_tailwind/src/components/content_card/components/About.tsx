import { About } from "../../../types";


export default function AboutSection(props : About){
    return (
        <section id="about" className="section about">
        <div className="section-content">
          <h2>About Us</h2>
          <p>{props.about}</p>
        </div>
      </section>
    );
}
import { ServiceProps } from "../../../types";


export default function Services(props : ServiceProps){
    return(
        <section id="services" className="section services">
        <div className="section-content">
        <h2>Our Services</h2>
        <ul>
            {props.services.map((service) => (
            <li key={service.id}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
            </li>
            ))}
        </ul>
        </div>
    </section>
  );
}
import { Service } from "../../../types";


export default function Services(props : {services: Service[]}){
    return(
        <section id="services" className="bg-zinc-100 dark:bg-zinc-800 dark:text-white text-black py-5">
        <div className="max-w-[800px] mx-auto">
        <h2 className="text-4xl mb-6 font-medium">Our Services</h2>
        <ul>
            {props.services.map((service : Service) => (
            <li key={service.id}>
                <h3 className="text-2xl py-2 font-medium ">{service.name}</h3>
                <p>{service.description}</p>
            </li>
            ))}
        </ul>
        </div>
    </section>
  );
}
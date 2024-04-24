import Services from "./components/Services";
import { ContentCardProps } from "../../types";
import AboutSection from "./components/About";
import Team from "./components/Team";
import BlogPosts from "./components/Blogs";
import ContactSection from "./components/Contact";

export default function Content_card(props : ContentCardProps) { 
    return (
    <div className="content-card">
    <AboutSection {...props.about} />
    <Services {...props.services} />
    {
        //impostors
        //<Team {...props.teamMembers} />
        //<BlogPosts {...props.blogPosts} />
    }

    <ContactSection handleSubmit={props.handleSubmit} />
    </div>
    );
}
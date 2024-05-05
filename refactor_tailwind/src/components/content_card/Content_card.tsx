import Services from "./components/Services";
import AboutSection from "./components/About";
import Team from "./components/Team";
import BlogPosts from "./components/Blogs";
import ContactSection from "./components/Contact";
import { CompanyProps } from "../../types";

export default function Content_card(props : CompanyProps) { 
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      };

    return (
    <div className="content-card text-left">
    <AboutSection about={props.about} />
    <Services services={props.services} />
    <Team team={props.teamMembers} />
    <BlogPosts posts={props.blogposts} />
    <ContactSection handleSubmit={handleSubmit} />
    </div>
    );
}
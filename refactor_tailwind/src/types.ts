


export type CompanyProps = {
    name: string;
    slogan: string;
    about : string;
    services : Service[];
    teamMembers : TeamMember[];
    blogposts : BlogPost[];
}

export type About = {
    about: string;
}

export type TeamMember = {
    id: number;
    name: string;
    position: string;
    bio: string;
    image: string;
}

export type BlogPost = {
    id: number;
    title: string;
    date: string;
    content: string;
}

export type Service = {
    id: number;
    name: string;
    description: string;
}


export type ServiceProps = {
    services: Service[];
}

export type HeaderProps = {
    name: string;
    slogan: string;
}

export type Contact = {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export type ContentCardProps = {
    about: About;
    teamMembers: TeamMember[];
    blogPosts: BlogPost[];
    services: ServiceProps;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

import React, { useState } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content_card from "./components/content_card/Content_card";
import { navbar_str, header_props, services, name, about, team_members, blog_posts } from "./data";
import { ContentCardProps } from "./types";



const App = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const content_card : ContentCardProps = {
    about : about, 
    teamMembers : team_members, 
    blogPosts : blog_posts, 
    services : services,
    handleSubmit : handleSubmit
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`portfolio ${darkMode ? "dark-theme" : "light-theme"}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} values={navbar_str} />
      <Header {...header_props} />
        <Content_card {...content_card} />
      <Footer name={name.name} />
    </div>
  );
};

export default App;

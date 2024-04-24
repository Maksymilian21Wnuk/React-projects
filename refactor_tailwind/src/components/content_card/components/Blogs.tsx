import { BlogPost } from "../../../types";


export default function BlogPosts(props : BlogPost[]){
  return (
  <section id="blog" className="section blog">
    <div className="section-content">
      <h2>Latest Blog Posts</h2>
      <div className="blog-posts">
        {props.map((post) => (
          <div key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.date}</p>
            <p>{post.content}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}
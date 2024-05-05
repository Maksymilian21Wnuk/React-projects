import { BlogPost } from "../../../types";


export default function BlogPosts(props: { posts: BlogPost[] }) {
  return (
    <section id="blog" className="bg-zinc-100 dark:bg-zinc-800 dark:text-white text-black py-5">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-4xl mb-6 font-medium">Latest Blog Posts</h2>
        <div className="blog-posts grid grid-cols-1 sm:grid-cols-2 gap-8 py-5">
          {props.posts.map((post) => (
            <div key={post.id} className="blog-post bg-zinc-200 dark:bg-zinc-900 p-4 rounded" >
              <h3 className="font-medium">{post.title}</h3>
              <p className="py-1">{post.date}</p>
              <p className="py-2">{post.content}</p>
              <button className="bg-green-500 text-white font-bold py-1 px-4 rounded">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

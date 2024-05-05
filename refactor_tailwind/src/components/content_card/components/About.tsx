
export default function AboutSection(props : {about : string}){
    return (
        <section id="about" className="bg-gray dark:bg-zinc-900 dark:text-white text-black py-5">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-4xl mb-6 font-medium">About Us</h2>
          <p>{props.about}</p>
        </div>
      </section>
    );
}
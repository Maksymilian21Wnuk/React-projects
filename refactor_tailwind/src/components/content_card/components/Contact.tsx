import { Contact } from "../../../types";


export default function ContactSection(props: Contact) {
  return (
    <section id="contact" className="bg-gray dark:bg-zinc-900 dark:text-white text-black py-5">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-4xl mb-6 font-medium dark:text-white">Contact Us</h2>
        <form onSubmit={props.handleSubmit} className="contact-form max-w-lg mx-auto " >
          <div className="mb-4 ">
            <input type="text" placeholder="Name" className="dark:bg-zinc-700 w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500" required />
          </div>
          <div className="mb-4 ">
            <input type="email" placeholder="Email" className="dark:bg-zinc-700 w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500" required />
          </div>
          <div className="mb-4">
            <textarea rows={5} placeholder="Message" className="dark:bg-zinc-700 w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-green-500" required></textarea>
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
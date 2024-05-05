

export default function Footer(props : {name : string}){
    return (
        <footer className="py-6 text-center bg-gray-50 dark:bg-black dark:text-white">
        <div className="footer_content ">
          <p>
            &copy; {new Date().getFullYear()} {props.name}
          </p>
        </div>
      </footer>
    );
}
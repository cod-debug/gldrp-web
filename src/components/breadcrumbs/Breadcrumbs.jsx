import { Link } from "react-router-dom";
import BackIcon from "../Icons/Back";

export default function Breadcrumbs({ links }){
    return (
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
                <Link to="/" className={`inline-flex items-center px-2 py-1 rounded text-white border border-white 
                    hover:text-white hover:bg-accent hover:border-accent
                    transition-all ease-in duration-200`}>
                    <BackIcon className="scale-75" /> Back
                </Link>
            </li>

            {
                links.map((item, key) => (
                    <li className="inline-flex items-center" key={item.name}>
                        {
                            key > 0 &&
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-200 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        }
                        <Link to={item.link} className={`inline-flex items-center font-medium hover:text-blue-600 hover:underline dark:text-gray-400 dark:hover:text-white ${key === (links.length - 1) ? ' text-gray-200' : '  text-gray-700'}`}>
                            {item.name}
                        </Link>
                    </li>
                ))
            }
        </ol>
    )
}
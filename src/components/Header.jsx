import { useState, useEffect } from "react";
import { Button, Dropdown, Navbar } from "flowbite-react";
import { CaretDown } from "./Icons/Arrow";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      let brandImg = document.getElementById('brandImg');
      let brandImg2 = document.getElementById('brandImg2');

      if(scrollY > 50){
        brandImg.className="mr-3 h-10 sm:h-[50px] transition-all ease-in";
        brandImg2.className="mr-3 h-10 sm:h-[50px] transition-all ease-in";
      } else {
        brandImg.className="mr-3 h-12 sm:h-[63px] transition-all ease-in";
        brandImg2.className="mr-3 h-12 sm:h-[63px] transition-all ease-in";
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    // Close the navbar when the route changes
    useEffect(() => {
      setIsOpen(false);
    }, [location]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed top-0 z-50 px-4 md:px-12 py-4 w-full">
            <Container>
                <Navbar fluid rounded className="bg-transparent">
                    <Link to="/" className="block md:hidden">
                        <img src="./assets/images/logo.png" className="mr-3 h-12 sm:h-[63px]" alt="Flowbite React Logo" id="brandImg" />
                    </Link>
                    <Navbar.Toggle onClick={handleToggle} />
                    <Navbar.Collapse className={`w-[100%!important] ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="flex flex-col md:flex-row md:items-center w-full justify-between gap-12">
                            <Link to="/" className="hidden md:block">
                                <img src="./assets/images/logo.png" className="mr-3 h-12 sm:h-[63px]" alt="Flowbite React Logo" id="brandImg2" />
                            </Link>
                            <div className="flex flex-col md:flex-row justify-end flex-grow gap-6">
                                <Navbar.Link className="font-normal">
                                    <Link to="/" className="w-full text-white">HOME</Link>
                                </Navbar.Link>
                                <Navbar.Link className="font-normal">
                                    <Link to="/" className="w-full text-white">WHO WE ARE</Link>
                                </Navbar.Link>
                                <Navbar.Link className="font-normal">
                                    <Link to="/" className="w-full text-white">CONNECT WITH US</Link>
                                </Navbar.Link>
                                <Navbar.Link className="font-normal">
                                    <Link to="/" className="w-full text-white">PROJECTS</Link>
                                </Navbar.Link>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    )
}

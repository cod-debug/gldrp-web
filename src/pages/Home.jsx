import { useEffect } from "react";
// import { Link } from "react-router-dom";
import Container from "../components/Container";

export default function Home(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <div class={`radial-glow w-[32vw] aspect-square rounded-full fixed -top-[14vw] -left-[18vw]`}></div>
            <div class={`radial-glow w-[25vw] aspect-square rounded-full fixed -top-[12vw] -right-[16vw]`}></div>
            <main>
                <Container>
                    <div className="min-h-[100vh] flex items-center text-white p-4">
                        <div className="grid grid-cols-12 w-full gap-4 items-center">
                            <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
                                <div className="flex flex-col gap-4 text-center lg:text-left">
                                    <div className="text-4xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">DEVELOPING FUTURE ONE TECH AT A TIME</div>
                                    <p className="font-normal">Streamline and automate your business with ease!</p>
                                    <div className="flex flex-col lg:flex-row gap-4">
                                        <button className="border border-accent
                                            bg-accent px-8 py-2 rounded-3xl 
                                            hover:bg-primary
                                            hover:border-white
                                            transition ease-in duration-300
                                        ">EXPLORE</button>
                                        <button className="border border-accent 
                                            px-8 py-2 
                                            rounded-3xl
                                            hover:bg-accent
                                            hover:border-white
                                            transition ease-in duration-300
                                        ">INQUIRE</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
                                <img alt="isometric technology" src="./assets/images/isometric-tech.png" className="max-full w-full mx-auto" />
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
        </div>
    )
}
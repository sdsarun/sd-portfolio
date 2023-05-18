import dark from "../assets/dark.png";
import light from "../assets/light.png";
import TypewriterComponent from "typewriter-effect";

export default function Navbar() {

    return (
        <nav className="flex w-full justify-between">
            <div className="">
                <h1 className="text-6xl tracking-widest font-bold">
                    <TypewriterComponent
                        onInit={(typewriter) => {
                            typewriter.typeString('HI! All.')
                                .callFunction(() => {
                                    console.log('Welcome to my web portfilo.');
                                })
                                .pauseFor(2500)
                                .deleteAll()
                                .typeString('Welcome to my web portfilo.')
                                .pauseFor(2500)
                                .deleteAll()
                                .typeString('My name is Sarun Daunghirun.')
                                .pauseFor(2500)
                                .deleteAll()
                                .typeString("I'm a Software Developer.")
                                .pauseFor(2500)
                                .deleteAll()
                                .typeString("Enjoy!")
                                .start()
                        }}
                    />
                </h1>
            </div>
            <div className="flex items-center">
                {/* <img className="block w-5 h-5" src={dark} />
                <img className="block w-5 h-5" src={light} /> */}
            </div>
        </nav>
    );
}
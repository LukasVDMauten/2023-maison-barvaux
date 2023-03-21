import Header from "@/Components/Header";
import HeroHome from "@/Components/HeroHome";
import Footer from "@/Components/Footer";
import {Link} from "@inertiajs/react";

export default function Home() {
    return (
        <div className="flex flex-col justify-start items-center text-[#5C5C5C] text-[18px]">
            <Header currentTab="Home" />
            <div className="max-w-[1200px] w-full">
                <HeroHome />
                <section className="flex flex-col-reverse lg:flex-row justify-center items-center mt-5 mb-5 px-5">
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <img src="/assets/home_collage.png" alt="pictures of the villa"/>
                    </div>
                    <div className="lg:w-1/2 flex flex-col justify-center items-start max-w-[500px]">
                        <p className="text-[#89A87B] font-semibold text-lg mb-4">Dit is een charmante & comfortabele woning tot 7 personen + 1 baby in “Les Closeries“ te Barvaux sur Ourthe.</p>
                        <p className="mb-4">Hier kan je genieten van de rust die de prachtige streek te bieden heeft, dit samen met je gezin of familie. Ook sportliefhebbers hebben het hier naar hun zin!</p>
                        <Link className="flex justify-center items-center hover:font-bold mt-2" href="/accommodation">
                            <img className="mr-2" src="/assets/next.png" alt=""/>
                            <p>Kom meer te weten</p>
                        </Link>
                    </div>
                </section>
                <section className="flex flex-col lg:flex-row justify-center items-center mt-5 mb-5 px-5">
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <p className="text-[#89A87B] font-semibold text-lg mb-4 max-w-[500px]">Onze vakantiewoning is gelegen in het schilderachtige Barvaux, in het hart van de prachtige Ardennen.</p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <p className="max-w-[500px] ">Het landelijk huisje heeft alle voorzieningen om u een zorgeloze vakantie te bieden en u ten volle te laten genieten.</p>
                    </div>
                </section>
                <section className="h-[650px] mt-5 mb-5 ">
                    <div className="h-[400px] w-full lg:absolute lg:left-0 z-40">
                        <div className="bg-gradient-home h-full w-full bg-center">
                        </div>
                        <div className="m-5 lg:w-[400px] bg-white drop-shadow flex flex-col justify-center items-start p-5 lg:right-1/4 lg:-bottom-1/4 lg:absolute">
                            <h3 className="text-xl font-bold">Locatie</h3>
                            <p className="mt-1 mb-1">Onze charmante vakantiewoning is gelegen in het rustige en pittoreske Barvaux, omringd door de prachtige natuur van de Ardennen. Hier kunt u genieten van de perfecte combinatie van ontspanning, avontuur en ontdekking.</p>
                            <Link className="flex justify-center items-center hover:font-bold mt-2" href="/info">
                                <img className="mr-2" src="/assets/next.png" alt=""/>
                                <p>Kom meer te weten</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

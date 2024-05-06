import Header from "@/Components/Header";
import HeroHome from "@/Components/HeroHome";
import HeroNormal from "@/Components/HeroNormal";
import Footer from "@/Components/Footer";
import Carousel from "@/Components/Carousel";
import {usePage} from "@inertiajs/react";

const Accommodation = () => {
    const { images } = usePage().props;

    return (
        <div className="flex flex-col justify-start items-center text-[#5C5C5C]">
            <Header currentTab="Accommodation" />
            <div className="max-w-[1200px] w-full">
                <HeroNormal currentTab="Accommodation" />
                <section className="flex flex-col lg:flex-row justify-center items-center mt-5 mb-5 px-5">
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <p className="text-[#89A87B] font-semibold text-lg mb-4 max-w-[500px]"> Ontdek onze prachtige vakantiewoning in Barvaux en maak uw volgende vakantie onvergetelijk.</p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <p className="max-w-[500px] ">Onze charmante woning is met zorg ingericht en biedt comfortabele accommodatie voor maximaal 7 personen, omringd door de prachtige natuur van de Ardennen.</p>
                    </div>
                </section>
                <section className="flex flex-col justify-center items-center mt-5 mb-5 px-5">
                    <div className="w-4/5 lg:w-2/3">
                        <h3 className="text-xl font-bold mb-5" >Leefruimte</h3>
                        <p className="mb-5">onze vakantiewoning biedt een gezellige en uitnodigende leefruimte met een houtkachel, een volledig gecombineerde keuken, en een eetkamer met uitzicht op de prachtige tuin. Het is de perfecte plek om te ontspannen en te genieten van quality time met familie en vrienden.</p>
                        <Carousel pictures={images.filter(i => i.tag === "living")} />
                    </div>
                </section>
                <section className="flex flex-col justify-center items-center mt-5 mb-5 px-5">
                    <div className="w-4/5 lg:w-2/3">
                        <h3 className="text-xl font-bold mb-5" >Slaap- en Badkamers</h3>
                        <p className="mb-5">In het huis zijn drie comfortabele slaapkamers en twee badkamers beschikbaar. U kunt genieten van een goede nachtrust en ontwaken met het rustgevende geluid van de natuur om u heen.</p>
                        <Carousel pictures={images.filter(i => i.tag === "bed_bath")} />
                    </div>
                </section>
                <section className="flex flex-col justify-center items-center mt-5 mb-5 px-5">
                    <div className="w-4/5 lg:w-2/3">
                        <h3 className="text-xl font-bold mb-5" >Tuin</h3>
                        <p className="mb-5">De tuin is rustig gelegen in een doodlopende straat en helemaal omheind voor de honden . Er is een vaste barbecue ter beschikking en een groot overdekt terras waar je steeds verder kunt genieten bij regenachtige weer.</p>
                        <Carousel pictures={images.filter(i => i.tag === "garden")} />
                    </div>
                </section>
                <section className="flex flex-col justify-center items-center mt-5 mb-5 px-5">
                    <p>Heeft u nog vragen of wilt u alvast boeken? Aarzel dan niet om ons te contacteren.</p>
                    <a href="/contact" className="bg-[#89A87B] pl-5 pr-5 pt-1 pb-1 text-white text-sm font-bold mt-3">Boek Nu!</a>
                </section>
            </div>
            <Footer />
        </div>
    )
};

export default Accommodation;

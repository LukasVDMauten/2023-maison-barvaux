import Header from "@/Components/Header";
import HeroNormal from "@/Components/HeroNormal";
import Footer from "@/Components/Footer";
import Calendar from "@/Components/Calendar";
import {usePage} from "@inertiajs/react";

const Prices = () => {
    const {prices} = usePage().props;

    console.log(prices)

    return (
        <div className="flex flex-col justify-start items-center text-[#5C5C5C] text-[18px]">
            <Header currentTab="Prices" />
            <div className="max-w-[1200px] w-full ">
                <HeroNormal currentTab="Prices" />
                <section className="flex flex-col lg:flex-row justify-center items-center mt-5 mb-5 px-5">
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <p className="text-[#89A87B] font-semibold text-lg mb-4 max-w-[500px]">Bekijk onze beschikbaarheid en prijzen voor een onvergetelijk verblijf in onze charmante villa in Barvaux.</p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <p className="max-w-[500px] ">Of u nu op zoek bent naar een romantisch weekendje weg, een gezinsvakantie of een uitje met vrienden, wij hebben de perfecte accommodatie voor u tegen betaalbare prijzen.</p>
                    </div>
                </section>
                <section className="flex flex-col justify-center items-center mt-5 mb-12 ">
                    <div className="w-2/3">
                        <h3 className="text-xl font-bold">Beschikbaarheid</h3>
                    </div>
                    <Calendar />
                </section>
                <section className="flex flex-col justify-center items-center mt-5 mb-5 px-5">
                    <div className="w-2/3">
                        <h3 className="text-xl font-bold">Prijzen</h3>
                        <p className="text-sm mb-5">De prijzen zijn inclusief : water, elektriciteit en eindschoonmaak</p>
                        <div className="flex flex-col justify-center items-center w-full">
                            <h4 className="font-bold">Laagseizoen</h4>
                            <div className="w-full flex justify-between items-center border-b-2 border-[#5C5C5C] pt-3 pb-3">
                                <div>
                                    <p className="font-semibold text-[16px]">Weekend</p>
                                    <p>Vrijdag 16u t.e.m. zondag 16u</p>
                                    <p className="text-[15px]">Per extra nacht +€50</p>
                                </div>
                                <p className="text-2xl font-bold">€{prices.filter(p => p.label === "LAAG_WEEKEND")[0].price}</p>
                            </div>
                            <div className="w-full flex justify-between items-center border-b-2 border-[#5C5C5C] pt-3 pb-3">
                                <div>
                                    <p className="font-semibold text-[16px]">Midweek</p>
                                    <p>Maandag 16u t.e.m. vrijdag 16u</p>
                                    <p className="text-[15px]">Per extra nacht +€50</p>
                                </div>
                                <p className="text-2xl font-bold">€{prices.filter(p => p.label === "LAAG_MIDWEEK")[0].price}</p>
                            </div>
                            <div className="w-full flex justify-between items-center pt-3 pb-3">
                                <div>
                                    <p className="font-semibold text-[16px]">Week</p>
                                    <p>Maandag 16u t.e.m. zondag 16u</p>
                                    <p className="text-[15px]">Of vrijdag 16u tot vrijdag 16u</p>
                                    <p className="text-[15px]">Per extra nacht +€50</p>
                                </div>
                                <p className="text-2xl font-bold">€{prices.filter(p => p.label === "LAAG_WEEK")[0].price}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center w-full mt-8">
                            <h4 className="font-bold">Hoogseizoen (Schoolvakanties & Feestdagen)</h4>
                            <div className="w-full flex justify-between items-center border-b-2 border-[#5C5C5C] pt-3 pb-3">
                                <div>
                                    <p className="font-semibold text-[16px]">Weekend</p>
                                    <p>Vrijdag 16u t.e.m. zondag 16u</p>
                                    <p className="text-[15px]">Per extra nacht +€50</p>
                                </div>
                                <p className="text-2xl font-bold">€{prices.filter(p => p.label === "HOOG_WEEKEND")[0].price}</p>
                            </div>
                            <div className="w-full flex justify-between items-center border-b-2 border-[#5C5C5C] pt-3 pb-3">
                                <div>
                                    <p className="font-semibold text-[16px]">Midweek</p>
                                    <p>Maandag 16u t.e.m. vrijdag 16u</p>
                                    <p className="text-[15px]">Per extra nacht +€50</p>
                                </div>
                                <p className="text-2xl font-bold">€{prices.filter(p => p.label === "HOOG_MIDWEEK")[0].price}</p>
                            </div>
                            <div className="w-full flex justify-between items-center pt-3 pb-3">
                                <div>
                                    <p className="font-semibold text-[16px]">Week</p>
                                    <p>Maandag 16u t.e.m. zondag 16u</p>
                                    <p className="text-[15px]">Of vrijdag 16u tot vrijdag 16u</p>
                                    <p className="text-[15px]">Per extra nacht +€50</p>
                                </div>
                                <p className="text-2xl font-bold">€{prices.filter(p => p.label === "HOOG_WEEK")[0].price}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col justify-center items-center mt-5 mb-5 px-5">
                    <div className="w-2/3">
                        <h3 className="text-xl font-bold mb-5">Hoe betalen</h3>
                        <div className="text-center">
                            <p>Per verhuur wordt er een waarborg gevraagd van <b>€150</b>.</p>
                            <p>Gelieve bij het vastleggen van de reservering meteen de de waarborg te betalen.</p>
                            <p>Twee weken voor verblijf word het huur bedrag gestort.</p>
                            <p>Als de boeking en verblijf binnen de twee weken is word de borg en huur samen betaald .</p>
                            <p className="mt-3">Betalen kan op:</p>
                            <div className="mt-5 mb-5">
                                <p>Rekeningsnummer: <b>BE41 0018 4054 6910</b></p>
                                <p>Mededeling : <b>Naam Voornaam + reserveringsdatum</b></p>
                            </div>
                            <p>Na het verlaten van de huisje en een controle wordt het voorschot teruggestort.</p>
                        </div>
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

export default Prices;

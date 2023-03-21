import Header from "@/Components/Header";
import HeroNormal from "@/Components/HeroNormal";
import Footer from "@/Components/Footer";

const Info = () => {
    return (
        <div className="flex flex-col justify-start items-center text-[#5C5C5C] text-[18px]">
            <Header currentTab="Info" />
            <div className="max-w-[1200px] w-full">
                <HeroNormal currentTab="Info" />
                <section className="flex flex-col lg:flex-row justify-center items-center mt-5 mb-5 px-5">
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <p className="text-[#89A87B] font-semibold text-lg mb-4 max-w-[500px]">Hier vindt u alle praktische informatie die u nodig heeft voor uw verblijf in onze charmante vakantiewoning in Barvaux.</p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <p className="max-w-[500px] ">Van inchecktijden en -procedures tot informatie over de omgeving en activiteiten in de buurt, wij zorgen ervoor dat uw verblijf zo soepel en aangenaam mogelijk verloopt.</p>
                    </div>
                </section>
                <section className="flex flex-col justify-center items-center mt-5 mb-5 px-5">
                    <div className="w-4/5 lg:w-2/3">
                        <h3 className="text-2xl font-bold mb-5" >Voorzieningen</h3>
                        <div className="flex">
                            <ul className="w-1/2">
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>3 Slaapkamers</li>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>1 Douche</li>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>1 Ligbad</li>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>2 Wc’s</li>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>Wifi + Smart TV</li>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>BBQ</li>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>Fietsenstalling</li>
                            </ul>
                            <ul className="w-1/2">
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>Parking (2 auto’s)</li>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>Houtkachel - (hout zelf voorzien)</li>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>Verwarming Warmtepomp</li>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>Ingerichte Keuken (zonder oven)</li>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>Vaatwasser</li>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>Overdekt Terras</li>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>Omheinde Tuin</li>
                            </ul>
                        </div>
                        <p className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>Prijzen inclusief : water, elektriciteit, bedlinnen en eindschoonmaak</p>
                    </div>
                </section>
                {/*<section className="flex flex-col justify-center items-center mt-5 mb-5">*/}
                {/*    <div className="w-2/3">*/}
                {/*        <h3 className="text-2xl font-bold mb-5" >Afmetingen</h3>*/}
                {/*        <div className="flex">*/}

                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                <section className="flex flex-col justify-center items-center mt-5 mb-5 px-5">
                    <div className="w-4/5 lg:w-2/3">
                        <h3 className="text-2xl font-bold mb-5" >Bezienswaardigheden</h3>
                        <p>Ontdek de schoonheid van de Ardennen met schilderachtige uitzichten, uitgestrekte bossen, en kristalheldere rivieren. Bezoek middeleeuwse kastelen, charmante dorpjes en historische steden, of ontspan in de rustige natuur. Voor avontuur, ontspanning of cultuur, de Ardennen hebben het allemaal.</p>
                        <div className="flex justify-center items-center w-full my-5 gap-3">
                            <div className="h-[300px] w-1/2 flex justify-center items-center">
                                <img className="drop-shadow-xl lg:h-full" src="/assets/barvaux.jpg" alt="Barvaux"/>
                            </div>
                            <div className="w-1/2 flex flex-col justify-center items-start">
                                <p>Het historisch centrum van Durbuy is een stap terug in de tijd! Geniet van de smalle straatjes, de 17e eeuwse huizen, goede restaurants en leuke winkels.</p>
                                <div className="flex justify-center items-center mt-2">
                                    <p className="text-[#89A87B]">6.5 kilometer</p>
                                    <img className="w-7 ml-3" src="/assets/icon/car.png" alt="Car"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-full my-5 gap-3">
                            <div className="w-1/2 flex flex-col justify-center items-start">
                                <p>In Wéris kan je een bezoek brengen aan de megalieten. Hier kan je megalieten museum bezoeken, een wandeling maken door de steengroeve en veel meer.</p>
                                <div className="flex flex-col lg:flex-row justify-center items-center mt-2">
                                    <p className="text-[#89A87B]">2,9 kilometer</p>
                                    <img className="w-7 ml-3 mr-3" src="/assets/icon/walk.png" alt="Car"/>
                                    <p className="text-[#89A87B]">via natuurreservaat</p>
                                </div>
                            </div>
                            <div className="h-[300px] w-1/2 flex justify-center items-center">
                                <img className="drop-shadow-xl lg:h-full" src="/assets/dolmen.jpg" alt="Barvaux"/>
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-full my-5 gap-3">
                            <div className="h-[300px] w-1/2 flex justify-center items-center">
                                <img className="drop-shadow-xl lg:h-full" src="/assets/kajak.jpeg" alt="Barvaux"/>
                            </div>
                            <div className="w-1/2 flex flex-col justify-center items-start">
                                <p>Geniet van een gezellige en ontspannende activiteit met de familie tijdens een kajaktocht op de Ourthe.</p>
                                <div className="flex justify-center items-center mt-2">
                                    <p className="text-[#89A87B]">7.9 kilometer</p>
                                    <img className="w-7 ml-3" src="/assets/icon/car.png" alt="Car"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-full my-5 gap-3">
                            <div className="w-1/2 flex flex-col justify-center items-start">
                                <p>Adventure valley is het grootste indoor & outdoor park waar elke leeftijd de behoefte vind om de adrenaline door elke ader van je lichaam te laten stromen . de pendelbussen brengen je ernaartoe van uit de parkings in barvaux.</p>
                                <div className="flex flex-col lg:flex-row justify-center items-center mt-2">
                                    <p className="text-[#89A87B]">5.3 kilometer</p>
                                    <img className="w-7 ml-3" src="/assets/icon/car.png" alt="Car"/>
                                </div>
                            </div>
                            <div className="h-[300px] w-1/2 flex justify-center items-center">
                                <img className="drop-shadow-xl w-full object-contain lg:h-full" src="/assets/wall_climbing.jpg" alt="Barvaux"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col justify-center items-center mt-5 mb-5 px-5">
                    <div className="w-4/5 lg:w-2/3">
                        <h3 className="text-2xl font-bold mb-5" >Huisregels</h3>
                        <div className="flex">
                            <ul>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>Plezier word alleen maar aangemoedigd doch vragen wij geen nachtlawaai en luide muziek te maken.</li>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>Honden mogen relaxen in de zetels maar gebruik in dit geval dekentjes die beschikbaar zijn of gebruik eigen dekentjes.</li>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>Ruim de hondenpoep op in de tuin.</li>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>Rookverbod binnen het huis , gelieve de peuken niet in de tuin te gooien.</li>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>Barbeque enkel gebruiken met houtskool. Niet als kampvuur!</li>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>Gelieve eventuele schade steeds te melden , wij zoeken samen naar de beste oplossing voor beide partijen.</li>
                                <li className="flex justify-start items-center pb-1"><div className="bg-[#89A87B] w-3 h-3 rounded-full  mr-2"></div>We zijn niet verantwoordelijk voor gebeurlijke ongevallen.</li>
                            </ul>
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

export default Info;

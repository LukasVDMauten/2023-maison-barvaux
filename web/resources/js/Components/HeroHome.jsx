const HeroHome = () => {

    return (
        <div className="bg-hero-home w-full bg-no-repeat bg-center bg-cover">
            <div className="w-full h-full bg-black bg-opacity-25 flex justify-center items-center flex-col pt-10 pb-10">
                <div className="max-w-[700px] w-full h-full flex justify-center items-start flex-col ml-12">
                    <div className="pt-12 pb-12">
                        <h2 className="text-4xl font-bold text-white max-w-[250px]">Rustig Huisje In De Ardennen</h2>
                        <p className="text-white font-semibold max-w-[350px] mt-2">Kom tot rust in dit charmant, comfortabel huisje gelegend in Barvaux sur Ourthe</p>
                    </div>
                    <a href="/contact" className="bg-[#89A87B] pl-5 pr-5 pt-1 pb-1 text-white text-sm font-bold">Boek Nu!</a>
                </div>
            </div>
        </div>
    )
}

export default HeroHome;

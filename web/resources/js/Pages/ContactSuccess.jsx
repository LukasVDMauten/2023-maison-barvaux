import Header from "@/Components/Header";
import HeroNormal from "@/Components/HeroNormal";
import Footer from "@/Components/Footer";

const Contact = () => {
    return (
        <div className="flex flex-col justify-start items-center text-[#5C5C5C]">
            <Header currentTab="Contact" />
            <div className="max-w-[1200px] w-full">
                <HeroNormal currentTab="Contact" />
                <section className="flex justify-center items-center mt-8 mb-10">
                    <div className="w-2/3">
                        <h3 className="text-2xl font-bold mb-5">Contact Formulier</h3>
                        <p className="bg-[#89A87B] text-white p-2 text-center font-bold text-xl">We hebben uw mail goed onvangen!</p></div>
                </section>
            </div>
            <Footer />
        </div>
    )
};

export default Contact;

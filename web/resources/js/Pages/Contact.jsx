import Header from "@/Components/Header";
import HeroNormal from "@/Components/HeroNormal";
import Footer from "@/Components/Footer";
import {useState} from "react";
import ActivityIndicator from 'react-activity-indicator'

const Contact = () => {
    const [errorFlag, setErrorFlag] = useState(false);
    const [error, setError] = useState(null);
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [countPersons, setCountPersons] = useState();
    const [message, setMessage] = useState();
    // const [street, setStreet] = useState();
    // const [number, setNumber] = useState();
    // const [zip, setZip] = useState();
    // const [city, setCity] = useState();
    const [loading, setLoading] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();

        setLoading(true);

        axios.post("/send-mail", {
            firstname,
            lastname,
            phone,
            countPersons,
            email,
            message
        })
            .then(response => {
                console.log(response);
                if (response.data)
                    window.location = "/success";
            })
            .catch((e) => {
                setError(e.response.data.errors)
                setErrorFlag(true);
            })

        setLoading(false);
    }

    console.log(error)

    return (
        <div className="flex flex-col justify-start items-center text-[#5C5C5C]">
            <Header currentTab="Contact" />
            <div className="max-w-[1200px] w-full">
                <HeroNormal currentTab="Contact" />
                <section className="flex justify-center items-center mt-8 mb-10">
                    <div className="w-2/3">
                        <h3 className="text-2xl font-bold mb-5">Contact Formulier</h3>
                        <form>
                            <div className="grid grid-cols-6 gap-1">
                                <div className="col-span-6 mb-4">
                                    <input type="text" onChange={(e) => setFirstname(e.target.value)} placeholder="Voornaam" className={`bg-[#F5F5F5] w-full outline-none ${error?.firstname ? "border border-red-500" : "border-none "}`} required />
                                    {error?.firstname && <span className="text-red-500 p-1 text-sm font-semibold">Dit veld is verplicht!</span>}
                                </div>
                                <div className="col-span-6 mb-4">
                                    <input type="text" onChange={(e) => setLastname(e.target.value)} placeholder="Achternaam" className={`bg-[#F5F5F5] w-full outline-none ${error?.lastname ? "border border-red-500" : "border-none "}`} required />
                                    {error?.lastname && <span className="text-red-500 p-1 text-sm font-semibold">Dit veld is verplicht!</span>}
                                </div>
                                <div className="col-span-6 sm:col-span-4 mb-4">
                                    <input type="text" onChange={(e) => setPhone(e.target.value)} placeholder="Tel. nummer" className={`bg-[#F5F5F5] w-full outline-none ${error?.phone ? "border border-red-500" : "border-none "}`} required />
                                    {error?.phone && <span className="text-red-500 p-1 text-sm font-semibold">Dit veld is verplicht!</span>}
                                </div>
                                <div className="col-span-6 sm:col-span-2 mb-4">
                                    <input type="number" onChange={(e) => setCountPersons(e.target.value)} placeholder="Aantal personen" className={`bg-[#F5F5F5] w-full outline-none ${error?.countPersons ? "border border-red-500" : "border-none "}`} required />
                                    {error?.countPersons && <span className="text-red-500 p-1 text-sm font-semibold">Dit veld is verplicht!</span>}
                                </div>
                                <div className="col-span-6 mb-4">
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className={`bg-[#F5F5F5] w-full outline-none ${error?.email ? "border border-red-500" : "border-none "}`} required />
                                    {error?.email && <span className="text-red-500 p-1 text-sm font-semibold">Dit veld is verplicht!</span>}
                                </div>
                                <div className="col-span-6 mb-4">
                                    <textarea placeholder="Het bericht" rows="5" onChange={(e) => setMessage(e.target.value)} className={`bg-[#F5F5F5] w-full outline-none ${error?.message ? "border border-red-500" : "border-none "}`} required />
                                    {error?.message && <span className="text-red-500 p-1 text-sm font-semibold">Dit veld is verplicht!</span>}
                                </div>
                            </div>
                            {errorFlag && <p className="bg-red-500 text-white p-1 text-lg font-bold text-center">Er ging iets mis. Controleer of het formulier volledig is ingevuld.</p>}
                            <button className="bg-[#89A87B] pl-5 pr-5 pt-1 pb-1 text-white text-sm font-bold mt-3" type="submit" onClick={e => submitForm(e)}>{loading ? <ActivityIndicator diameter={10} activeColor="white" /> : "Verstuur"}</button>
                        </form>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
};

export default Contact;

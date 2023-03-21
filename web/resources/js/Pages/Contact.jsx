import Header from "@/Components/Header";
import HeroNormal from "@/Components/HeroNormal";
import Footer from "@/Components/Footer";
import {useState} from "react";
import ActivityIndicator from 'react-activity-indicator'

const Contact = () => {
    const [error, setError] = useState(false);
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [countPersons, setCountPersons] = useState();
    const [message, setMessage] = useState();
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
                console.log(e)
                setError(true);
            })

        setLoading(false);
    }

    return (
        <div className="flex flex-col justify-start items-center text-[#5C5C5C]">
            <Header currentTab="Contact" />
            <div className="max-w-[1200px] w-full">
                <HeroNormal currentTab="Contact" />
                <section className="flex justify-center items-center mt-8 mb-10">
                    <div className="w-2/3">
                        <h3 className="text-2xl font-bold mb-5">Contact Formulier</h3>
                        <form>
                            <input type="text" onChange={(e) => setFirstname(e.target.value)} placeholder="Voornaam" className="border-none bg-[#F5F5F5] w-full outline-none mb-4" required />
                            <input type="text" onChange={(e) => setLastname(e.target.value)} placeholder="Achternaam" className="border-none bg-[#F5F5F5] w-full outline-none mb-4" required />
                            <input type="number" onChange={(e) => setPhone(e.target.value)} placeholder="Tel. nummer" className="border-none bg-[#F5F5F5] w-full outline-none mb-4" required />
                            <input type="number" onChange={(e) => setCountPersons(e.target.value)} placeholder="Aantal personen" className="border-none bg-[#F5F5F5] w-full outline-none mb-4" required />
                            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border-none bg-[#F5F5F5] w-full outline-none mb-4" required />
                            <textarea placeholder="Het bericht" rows="5" onChange={(e) => setMessage(e.target.value)} className="border-none bg-[#F5F5F5] w-full outline-none mb-4" required />
                            {error && <p className="bg-red-500 text-white p-1 text-lg font-bold text-center">Er ging iets mis. Probeer het later opnieuw!</p>}
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

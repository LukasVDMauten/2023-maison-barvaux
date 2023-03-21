import {Link} from "@inertiajs/react";

const Footer = () => {
    return (
        <>
            <div className="max-w-[1200px] flex flex-col lg:flex-row justify-between items-center w-full lg:max-h-[200px] border-t-2 border-[#D9D9D9] mt-12 pt-6">
                <div className="text-center w-5/12">
                    <h1 className="text-[#5C5C5C] text-5xl font-[400] font-abereto opacity-50">MAISON</h1>
                    <h1 className="text-[#4C5D44] text-2xl font-[600] font-dancing-script opacity-50">Barvaux</h1>
                </div>
                <div className="w-1/4 m-5">
                    <h4 className="font-semibold">Contact</h4>
                    <p className="text-sm">Anne & Frankie</p>
                    <p className="text-sm">info@maisonbarvaux.be</p>
                    <p className="text-sm">Allée du val 49</p>
                    <p className="text-sm">6940 Durbuy</p>
                    <p className="text-sm">Luxemburg</p>
                </div>
                <div className="w-1/4 m-5">
                    <ul>
                        <li className="pt-2"><a href="/">Home</a></li>
                        <li className="pt-2"><a href="/accommodatie">Accommodatie</a></li>
                        <li className="pt-2"><a href="/info">Info</a></li>
                        <li className="pt-2"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="w-1/12 m-5">
                    <ul>
                        <li><Link target="_blank" href="https://www.facebook.com/profile.php?id=100090961963299" ><img className="w-8 mt-2" src="/assets/facebook.png" alt="link to Facebook page"/></Link></li>
                        <li><Link href="/contact" ><img className="w-8 mt-2" src="/assets/mail.png" alt="link to Contact page"/></Link></li>
                    </ul>
                </div>
            </div>
            <p className="pt-7 pb-7 font-semibold ">Designed & developed by <Link href="https://www.inect.be/">Inect</Link></p>
        </>
    )
}

export default Footer;

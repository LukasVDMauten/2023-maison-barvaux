import {useEffect, useState} from "react";

const HeroNormal = ({currentTab}) => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("forest2.jpg");

    useEffect(() => {
        switch (currentTab) {
            case "Accommodation":
                setTitle("Accommodatie");
                setImage("forest2.jpg")
                break;
            case "Info":
                setTitle("Praktische Info");
                setImage("deer.jpg")
                break;
            case "Contact":
                setTitle("Contact");
                setImage("mushroom.jpg")
                break;
            case "Prices":
                setTitle("Beschikbaarhied & Prijzen");
                setImage("trees.jpg")
                break;
        }
    }, [currentTab])

    return (
        <>
            <div style={{backgroundImage: `url(/assets/${image})`}} className={`h-full w-full bg-no-repeat bg-center bg-cover`}>
                <div className="w-full h-full bg-black bg-opacity-25 flex justify-center items-center flex-col">
                    <div className="max-w-[700px] pl-12 w-full h-[200px] flex justify-center items-start flex-col">
                            <h2 className="text-4xl font-bold text-white">{title}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroNormal;

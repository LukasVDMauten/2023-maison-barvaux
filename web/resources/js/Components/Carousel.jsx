import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import '../../css/carousel.css'
import {useState} from "react";

const Carousel = ({pictures}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageFullscreen, setImageFullscreen] = useState(false)

    const imageNext = () => {
        if (currentImageIndex === pictures.length - 1) {
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(currentImageIndex + 1)
        }
    }

    const imagePrev = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(pictures.length - 1);
        } else {
            setCurrentImageIndex(currentImageIndex - 1)
        }
    }

    console.log(pictures)

    return (
        <>
            <Slide duration={500} autoplay={false} indicators={index => <div key={index} className="indicator"></div>}>
                {pictures.map((p, index) => (
                    <div onClick={() => {
                        setCurrentImageIndex(index);
                        setImageFullscreen(true);
                    }} key={index} className="each-slide-effect flex justify-center items-center">
                        <img className="max-h-[300px] drop-shadow-lg" src={p.media[0].original_url} alt=""/>
                    </div>
                ))}
            </Slide>
            {imageFullscreen && <div className="fixed left-0 top-0 w-screen h-screen bg-black z-50 flex justify-around items-center bg-opacity-50">
                <div onClick={imagePrev} className="w-1/5 h-full flex justify-center items-center cursor-pointer">
                    <img className="w-12" src="/assets/left-arrow.png" alt=""/>
                </div>
                <div className="w-3/5 h-full flex justify-center items-center" onClick={() => setImageFullscreen(false)}>
                    <img className="opacity-100 w-full h-4/5 object-contain" src={pictures[currentImageIndex].media[0].original_url} alt=""/>
                </div>
                <div onClick={imageNext} className="w-1/5 h-full flex justify-center items-center cursor-pointer">
                    <img className="w-12" src="/assets/right-arrow.png" alt=""/>
                </div>
                <img className="absolute top-12 right-12 w-8 cursor-pointer"  onClick={() => setImageFullscreen(false)} src="/assets/close.png" alt=""/>
            </div>}
        </>
    )
}

export default Carousel;



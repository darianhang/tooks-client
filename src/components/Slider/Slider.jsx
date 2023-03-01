import React from "react";
import "./Slider.scss"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = React.useState(0)

    const images = [
        "https://res.cloudinary.com/df5etts2d/image/upload/v1669843505/tooks/hero1_zez5zs.webp",
        "https://res.cloudinary.com/df5etts2d/image/upload/v1669843505/tooks/hero5_g2h49l.webp",
        "https://res.cloudinary.com/df5etts2d/image/upload/v1669859196/tooks/hero3_1_g39d8q.webp"
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => prev === 2 ? 0 : prev + 1)
        console.log(currentSlide)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => prev === 0 ? 2 : prev - 1)
    }

    return (
        <div className="slide-wrapper">
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img className="slide-img" src={images[0]}></img>
                <img className="slide-img" src={images[1]}></img>
                <img className="slide-img" src={images[2]}></img>
            </div>
            <div className="slide-controls">
                <KeyboardArrowLeftIcon onClick={() => prevSlide()} />
                <KeyboardArrowRightIcon onClick={() => nextSlide()} />
            </div>
            <div className="slide-header">
                <h1>TOOKS</h1>
                <h2>Made in Canada</h2>
            </div>
        </div>
    )
}

export default Slider
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'
import banner5 from '../assets/banner5.jpg'
import banner6 from '../assets/banner6.jpg'
import banner7 from '../assets/banner7.jpg'
const Carousel = () => {
    return (
       <div className="carousel  rounded-box">
  <div className="carousel-item">
    <img src={banner1} alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src={banner3}
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src={banner4}
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src={banner5}
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img src={banner2} alt="Drink" />
  </div>
  <div className="carousel-item">
    <img src={banner7} alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src={banner6}
      alt="Drink" />
  </div>
</div>
    );
};

export default Carousel;
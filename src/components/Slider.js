import Carousel from 'react-bootstrap/Carousel';
import siteData from '../siteData.js';
import "../styles/MainStyleSheet.css";

function Slider() {
  return (
    <Carousel>
        {siteData.testimonials.map(item => {
            return (

      <Carousel.Item>
        <div className='slider_container'>
        <div className='slider_img' style={{ backgroundImage: `url('images/testimonials/${item.name}.jpg')`}}>
        </div>
          <div className='slider_text'>         
          <h3>{item.description}</h3>
          </div>
        </div>
      </Carousel.Item>
                  )
                })}
    </Carousel>
  );
}

export default Slider;
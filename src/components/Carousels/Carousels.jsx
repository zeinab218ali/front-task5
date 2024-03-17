// import Carousel from 'react-bootstrap/Carousel';
// import CarouselIMG from '../CarouselIMG/CarouselIMG';

// const Carousels = () => {
//     return (
//       <Carousel>
//       <Carousel.Item>
//         <CarouselIMG photo='./1.jpg' />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <CarouselIMG photo='./2.jpg' />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <CarouselIMG photo='./3.jpg' />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//     );
// }

// export default Carousels
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import './Carousels.css'
const Carousels = () => {
  return (
    <Container>
      
<Carousel>
          <Carousel.Item>
            <img src="./1.jpg" alt="" />
            <Carousel.Caption>
              <h3>Toronto , Canada</h3>
              <p>HURRY! GET THE BEST VILLA FOR YOU</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src="./2.jpg" alt="" />
            <Carousel.Caption>
              <h3>Melbourna, Australia</h3>
              <p>BE QUIK! GET THE BEST VILLA TOWN</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src="./3.jpg" alt="" />
            <Carousel.Caption>
              <h3>Miami, South Florida</h3>
              <p>
                ACT NOW! GET THE HIGHEST LEVEL PENTHOUSE
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </Container>
  )
}

export default Carousels
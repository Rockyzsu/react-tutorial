import React from "react";
import { Carousel } from "react-bootstrap";

const Demo = () => (
  <Carousel>
    <Carousel.Item>
      <img className="d-block w-100" src={`${process.env.PUBLIC_URL}`+'/img/1.png'} alt="First slide" />
      <Carousel.Caption>
        <h3>夕阳</h3>
        <p>一同欣赏美景</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={`${process.env.PUBLIC_URL}`+'/img/2.jpg'} alt="Third slide" />
      <Carousel.Caption>
        <h3>白云</h3>
        <p>一同欣赏美景</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100"  src={`${process.env.PUBLIC_URL}`+'/img/3.jpg'} alt="Third slide" />
      <Carousel.Caption>
        <h3>海滨</h3>
        <p>一同欣赏美景</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

// const SloganV1 = () => (
//   <JumbotronV1>
//     <h1>Jumbotron 空间</h1>
//     <p>
//       欢迎来到xxBBS系统。
//       <br />
//       请畅所欲言！
//     </p>
//   </JumbotronV1>
// );

const Introduction = () => (
  <div>
    <Demo />
    <Slogan />
  </div>
);

const Slogan = () => {
  return (
    <>
      <div class="container-fluid bg-light text-dark p-5">
        <div class="container bg-light p-5">
          <h1 class="display-4 fw-bold">BBS 空间</h1>
          <a href="#" class="btn btn-primary">
    <p>
      欢迎来到xxBBS系统。
      <br />
      请畅所欲言！
    </p>
          </a>
        </div>
      </div>
    </>
  );
};
export default Introduction;

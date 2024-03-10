import Img from './static/img/1.png';
const ImageTag = () => {
//   const myimg = "/static/img/1.jpg";
  return (
  <div>
  <img src={Img} alt="random" />
  <p></p>
  <img src={process.env.PUBLIC_URL + '/img/1.png'} alt="random" />

  </div>);
};

export default ImageTag;

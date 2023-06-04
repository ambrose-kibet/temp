import HeroComponent from '../Components/HeroComponent';
import img1 from '../Assets/img1.jpg';
const AboutPage = () => {
  return (
    <main className="main">
      <HeroComponent title={'About'} />
      <div className="about-container">
        <div className="about-img-container">
          <img src={img1} alt="capenter" className="about-img" />
        </div>
        <div className="about-text">
          <h3> Our Story</h3>
          <div className="underline"></div>
          <p>
            Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Fugiat
            Accusantium Sapiente Tempora Sed Dolore Esse Deserunt Eaque
            Excepturi, Delectus Error Accusamus Vel Eligendi, Omnis Beatae.
            Quisquam, Dicta. Eos Quod Quisquam Esse Recusandae Vitae Neque
            Dolore, Obcaecati Incidunt Sequi Blanditiis Est Exercitationem
            Molestiae Delectus Saepe Odio Eligendi Modi Porro Eaque In Libero
            Minus Unde Sapiente Consectetur Architecto. Ullam Rerum, Nemo Iste
            Ex, Eaque Perspiciatis Nisi, Eum Totam Velit Saepe Sed Quos
            Similique Amet. Ex, Voluptate Accusamus Nesciunt Totam Vitae Esse
            Iste.Lorem Ipsum,
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;

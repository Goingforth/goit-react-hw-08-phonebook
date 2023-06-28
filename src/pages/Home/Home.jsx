import TelephoneImage from '../../images/telephone.jpg';
import css from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={css.panel}>
        <div className={css.container}>
          <img src={TelephoneImage} alt=" old telephone" />
        </div>
      </div>
    </>
  );
};
export default Home;

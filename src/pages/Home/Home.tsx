import axios from "axios";
import styles from './Home.module.scss'

const Home = () => {

  const getData = async () => {
    await axios
      .get("https://appevent.ru/dev/task1/catalog")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  getData()

  return <div className={styles.test} >home</div>;
};

export default Home;

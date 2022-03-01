import axios from "axios";

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

  return <div>home</div>;
};

export default Home;

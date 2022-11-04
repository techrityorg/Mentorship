import Footer from "../../components/Footer/Footer";
import Header from "../../components/Home/Header/Header";
import HomeBlog from "../../components/Home/HomeBlog/HomeBlog";
import Service from "../../components/Home/Services/Service";
import Team from "../../components/Home/Team/Team";


const HomePage = () => {
  return (
    <>
      <Header />
      <Service />
      <Team />
      <HomeBlog />
      <Footer />
    </>
  );
};

export default HomePage;

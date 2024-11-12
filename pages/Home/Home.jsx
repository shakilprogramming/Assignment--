import { useContext, useEffect } from "react";
import Header from "../shared/Navbar/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import Banner from "../../Banner/Banner";
import Footer from "../../Footer/Footer";
import Shah from "../../Shah/Shah";
import FeaturedJobs from "../../components/FeaturedJobs/FeaturedJobs";
import Notun from "../../components/Notun/Notun";


// import { AuthContext } from "../../AuthProvider/AuthProvider";


const Home = () => {
    // const user = useContext(AuthContext)
    // console.log(user)
    useEffect(() => {
        // Dynamically setting the title when the component mounts
        document.title = "Home - Bhaii";
      }, []);
    return (
        <div>
            
            <Header></Header>
            <Navbar></Navbar>
            <Banner></Banner>
           <FeaturedJobs></FeaturedJobs>
           <Notun></Notun>
            <Shah></Shah>
            <Footer></Footer>
        </div>
    );
};

export default Home;
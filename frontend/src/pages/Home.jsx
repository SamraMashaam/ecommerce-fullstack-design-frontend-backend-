import Header from '../components/Header';
import Hero from '../components/HeroCarousel';
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';


function Home(){
    return(
    <div>
      <Header />
      <Hero/>
      <CategorySection/>
      <FeaturedProducts/>
      <Newsletter/>
      <Footer/>
    </div>
    );
}

export default Home;
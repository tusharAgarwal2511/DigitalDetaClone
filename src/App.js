
import './App.css';
import Clients from './components/Clients';
import ContentConsultation from './components/ContentConsultation';
import ContentRevenue from './components/ContentRevenue';
import ContentServices from './components/ContentServices';
import Header from './components/Header';
import HeadingContent from './components/HeadingContent';
import ContentPrices from './components/ContentPrices';
import ContentTestimonial from './components/ContentTestimonial';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <HeadingContent />
      <br />
      <Clients />
      <br />
      <ContentRevenue />
      <br />
      <ContentServices />
      <br />
      <ContentConsultation />
      <br />
      <ContentPrices />
      <br />
      <ContentTestimonial />
      <br />
      <Footer />
      <BackToTop />

    </div>
  );
}

export default App;

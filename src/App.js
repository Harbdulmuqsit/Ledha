import './App.css';
import { Component } from 'react/cjs/react.production.min';
import Herosection from './components/Herosection';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import FinanceLifestyle from './components/FinanceLifestyle';
import Loan from './components/Loan';
import Invest from './components/Invest';
import Image from './components/Image';
import FAQ from './components/FAQ';
import Footer from './components/Footer';


class App extends Component {
  render() { 
     return (
    <div className="App">
    <Header />
    <Herosection />
    <FinanceLifestyle />
    <Loan />
    <Invest />
    <Image />
    <FAQ />
    <Footer />
    </div>
  );
}
}

export default App;
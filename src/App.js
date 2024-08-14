import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainComponent from './components/MainComponent';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <MainComponent/>
      <Footer/>
    </div>
  );
}

export default App;

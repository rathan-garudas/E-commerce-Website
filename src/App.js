import logo from './logo.svg';
import './App.css';
import Navigation from './Customer/Components/Navigation/Navigation';
import HomePage from './Customer/Components/Pages/HomePage/Homepage';
import Footer from './Customer/Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        <HomePage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

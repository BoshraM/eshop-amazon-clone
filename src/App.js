import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/login" />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

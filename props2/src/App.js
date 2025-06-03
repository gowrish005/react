import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  const title = "This is CITNC";
  const tagline = "CITNC is good college";
  const copyright = "Owned by BABU";
  return (
    <div className="App">
      <Header title={title}></Header>
      <Footer tagline={tagline} copyright={copyright}></Footer>
    </div>
  );
}

export default App;

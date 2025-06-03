import './App.css';
import Footer from './Footer';
import Header from './Header';


function App() {
  const title = "CITNC UNDER VTU "
  const tagline = "By Gowrish"
  const copyright = "Copy Righted by CITNC"
  
  return (
    <div>
      <Header title={title}></Header>
      <Footer tagline={tagline} copyright={copyright}></Footer>
      <br />
    </div>
  );
}

export default App;

import React,{useState} from 'react'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


function App() {

  const [step, setStep] = useState("1/2");
  return (
    <div>
      <header >
        <Header step={step}/>
      </header>
      <main>
        <Body setStep={setStep} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;


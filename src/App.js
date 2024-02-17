import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Form from './components/Form';

function App() {
  
  return (
   <>
   <div className='container'>
    <div className='row'>
    <div className='col-6'>
    <Form/>
    </div>
   
  <div className='col-6'>
   <Home/>
   </div>
   </div>
   </div>
   </>
  );
}

export default App;

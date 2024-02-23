import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Form from './components/Form';

function App() {

  return (
    <>
      <div className='container fullview'>
        <div className='row'>
          <div className='col-6 formclass'>
            <Form />
          </div>

          <div className='col-6 homeclass'>
            <Home />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

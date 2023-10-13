
import './App.css';
import './css/bootstrap.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Shorts from './components/Shorts';
import Subscriptions from './components/Subscriptions';
import Searchbar from './components/Searchbar';
function App() {
  return (
    <>
      <BrowserRouter>

        <div className='container-fluid'>
          <div className='row'>
            <Sidebar />
            <div className='col-md-10'>
            <Searchbar/>
            <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Shorts' element={<Shorts/>}/>
            <Route path='/Subscriptions' element={<Subscriptions/>}/>
           </Routes>
            </div>
          </div>
          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

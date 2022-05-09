import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path='/' exact element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
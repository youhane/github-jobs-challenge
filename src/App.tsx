import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { GlobalStyles } from './GlobalStyles';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} />
      </Routes>
      <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;

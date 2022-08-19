import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { JobProvider } from './components/Context/JobContext';
import { GlobalStyles } from './GlobalStyles';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <JobProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </JobProvider>
  );
}

export default App;

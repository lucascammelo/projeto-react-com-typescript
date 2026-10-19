import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/projeto-final/context/ThemeContext';
import PrivateRoute from './components/projeto-final/routes/PrivateRoute';

import Login from './components/projeto-final/pages/Login';
import Home from './components/projeto-final/pages/Home';
import Registrar from './components/projeto-final/pages/Registrar';
import CriarProduto from './components/projeto-final/pages/CriarProduto';
import EditarProduto from './components/projeto-final/pages/EditarProduto';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/CriarProduto" element={<PrivateRoute><CriarProduto /></PrivateRoute>} />
          <Route path="/EditarProduto/:id" element={<PrivateRoute><EditarProduto /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

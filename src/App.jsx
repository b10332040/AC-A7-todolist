import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, TodoPage, LoginPage, SignUpPage } from './pages';
import { AuthProvider } from 'contexts/AuthContext';

const basename = window.location.host.includes('localhost')
  ? ''
  : process.env.PUBLIC_URL;

function App() {
  return (
    <div className="app">
      <BrowserRouter basename={basename}>
        <AuthProvider>
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="todos" element={<TodoPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

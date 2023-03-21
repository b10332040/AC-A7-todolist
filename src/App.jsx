import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  TodoPage,
  LoginPage,
  SignUpPage,
  UserPage,
  UserPageReplyList,
  UserPageTweetList,
} from './pages';
import { AuthProvider } from 'contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

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
            <Route path="/:userId" element={<UserPage />}>
              <Route path="reply" element={<UserPageReplyList />} />
              <Route index element={<UserPageTweetList />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

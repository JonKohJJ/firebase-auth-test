import './styles/Global.scss'
import { useAuthContext } from './hooks/useAuthContext';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 

// Components
import Home from './pages/home/Home.js'
import Login from './pages/login/Login.js'
import Signup from './pages/signup/Signup.js'
import Navbar from './components/Navbar';

function App() {

  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <Router>
          <Navbar />
          <Routes>

            <Route 
              path='/' 
              element={
              user ? <Home /> : <Navigate to='/login'></Navigate>
              }
            ></Route>

            <Route 
              path='/login' 
              element={
                !user ? <Login /> : <Navigate to='/'></Navigate>
              }
            ></Route>

            <Route 
              path='/signup' 
              element={
                !user ? <Signup /> : <Navigate to='/'></Navigate>
              }
            ></Route>

          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;

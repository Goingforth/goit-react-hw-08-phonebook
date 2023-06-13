import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Home from 'components/pages/Home/Home';
import Register from 'components/pages/Register/Register';
import Login from 'components/pages/Login/Login';
import Contacts from 'components/pages/Contacts/Contacts';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <ToastContainer autoClose={3000} theme={'colored'} /> */}
    </div>
  );
};
export default App;

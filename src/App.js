
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import TraDetails from './Pages/TraDetails/TraDetails';
import NotFound from './Pages/NotFound/NotFound';
import Customer from './Pages/Customer/Customer';
import AddService from './Pages/AddService/AddService';
import Admin from './Pages/Admin/Admin';
import Gallerys from './Pages/Home/Gallery/Gallerys';
import Reviews from './Pages/Home/Reviews/Reviews';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route path="/tradetail">
              <TraDetails></TraDetails>
            </Route>
            <Route path="/customer">
              <Customer></Customer>
            </Route>
            <Route path="/reviews">
              <Reviews></Reviews>
            </Route>
            <Route path="/gallerys">
              <Gallerys></Gallerys>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;

/*

<Home></Home>
      <Footer></Footer>


*/
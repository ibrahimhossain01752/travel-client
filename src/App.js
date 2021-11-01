
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import TraDetails from './Pages/TraDetails/TraDetails';
import OrderReview from './Pages/OrderReview/OrderReview';
import NotFound from './Pages/NotFound/NotFound';
import Customer from './Pages/Customer/Customer';



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
            <Route path="/booking">
              <Booking></Booking>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/tradetail">
              <TraDetails></TraDetails>
            </Route>
            <Route path="/customer">
              <Customer></Customer>
            </Route>
            <Route path="/orserreviews">
              <OrderReview></OrderReview>
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
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Routes from './routes';
import History from './history';
import GlobalStyle from './Styles/global';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login'
//import Header from './Pages/Shared/Header';

import { AuthProvider } from './Context/AuthContext';

function App() {
  return (


    
    <div className="App">
    <AuthProvider>
        <Router history={History}>
      <Switch>
          <Route exact path="/login" component={Login} />
        {/* <Route exact path="/(login)" component={LoginContainer}/> */}
        {/* <Route component={DefaultContainer}/> */}
          <Navbar/>
          <Routes/>
          <Footer/> 
         </Switch>
        </Router>


        {/* <Header/> */}
        <GlobalStyle/>
      </AuthProvider>
    </div>

  );
}



// const LoginContainer = () => (
//   <div className="container">
//     <Route exact path="/" render={() => <Redirect to="/login" />} />
//     <Route path="/login" component={Login} />
//   </div>
// )






export default App;

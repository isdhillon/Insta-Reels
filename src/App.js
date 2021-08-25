 import './App.css';
import React, { useContext } from "react"
import {Switch,Route,BrowserRouter as Router,Redirect} from "react-router-dom"
import Login from './Components/Login';
import Signup from './Components/Signup';
import Feed from './Components/Feed';
import Profile from './Components/Profile'
import AuthProvider,{AuthContext} from './contexts/AuthProvider'

function App() {
  
  return(
    <>
      <AuthProvider>
        <Router>
            <Switch>
              <Route path="/login" component={Login}></Route>
              <Route path="/signup" component={Signup}></Route>
              <PrivateRoute path="/profile" abc={Profile}></PrivateRoute>
              <PrivateRoute path="/" exact abc={Feed}></PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </>
   
  )
  function PrivateRoute(props){
    let {currentUser}=useContext(AuthContext)
    let Component =props.abc;
    return (
      <Route {...props} render={(props)=>{
        return (currentUser!=null?<Component {...props}></Component>:
        <Redirect to="/login"></Redirect>)
      }}></Route>
    )
  }
}

export default App;

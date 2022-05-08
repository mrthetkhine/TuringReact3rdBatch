import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import './App.css';
import ToDoUI from "./features/todos/ToDoUI";

import HomePage from "./pages/HomePage";
import MovieListPage from "./pages/MovieListPage";

function App() {

  return (
    <div className="App">
     {/* <Counter />*/}
     <Router>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">


             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav mr-auto">
                     <li className="nav-item active">
                         <Link className="nav-link" to="/">Home</Link>
                     </li>
                     <li className="nav-item active">
                         <Link className="nav-link" to="/movie-list">Movie list</Link>
                     </li>
                     <li className="nav-item active">
                         <Link className="nav-link" to="/login?redirectTo=/">Login</Link>
                     </li>
                     {/*{
                        useAuthentication()
                        && <li className="nav-item">
                            <Link className="nav-link" to="/movie-list">Movie List</Link>
                        </li>
                    }

                    {useAuthentication() && <li className="nav-item">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>}*/}


                 </ul>

             </div>
         </nav>
         <Routes>
             <Route path="/" element={<HomePage/>}>

             </Route>
             <Route path="/movie-list" element={<MovieListPage/>}>

             </Route>
             {/*<Route path="/login" element={<LoginPage/>}>

             </Route>*/}
             {/*<Route path="/movie-list" element={
                 <PrivateRoute
                     redirectTo={"/login?redirectTo=/movie-list"}
                     isAuth={useAuthentication()}>
                     <MovieList />
                 </PrivateRoute>}>

             </Route>

             <Route
                 path="/movie-detail/:movieId"
                 element={
                     <PrivateRoute
                         redirectTo={"/login?redirectTo=/movie-detail/:movieId"}
                         isAuth={useAuthentication()}>
                         <MovieDetailPage />
                     </PrivateRoute>
                 }
             />
             <Route path="/logout" element={<LogoutPage/>}>

             </Route>
*/}


         </Routes>
     </Router>


      {/*  <ToDoUI/>*/}
    </div>
  );
}

export default App;

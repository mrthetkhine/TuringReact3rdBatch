import React from 'react';
import ReactDOM from 'react-dom';

import store from './app/store';
import { Provider } from 'react-redux'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Hello from './components/Hello';
import reportWebVitals from './reportWebVitals';
import Expense from "./routes/Expense";
import Invoice from "./routes/Invoice";
import NotFound from "./routes/NotFound";
import LoadUser from "./components/unit_testing/LoadUser";
import User from "./components/unit_testing/User";
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<App />}>
                      <Route path="expenses" element={<Expense />} />
                      <Route path="invoices" element={<Invoice />} />

                      <Route path="users" element={<LoadUser />} >
                          <Route path=":userId" element={<User />} />
                      </Route>
                      <Route path="*" element={<NotFound/>}/>
                  </Route>
              </Routes>

          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
/*
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('container'));
}

setInterval(tick, 1000);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

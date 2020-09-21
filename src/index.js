import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV === "production") {  
  let currentVersion = process.env.REACT_APP_COMMIT_REF;
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      fetch(`/version.txt?_=${Date.now()}`)
        .then(res => res.text())
        .then(latestVersion => {
          if (latestVersion !== currentVersion) {
            window.location.reload(true);
          }
        });
    }
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

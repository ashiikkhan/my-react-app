// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  render() {
    console.log(this.props);
    const { locale, user, children } = this.props;
    return (
      <h1>
        <span>
          Hello {user} ! this is {children}{' '}
          {new Date().toLocaleTimeString(locale)}
        </span>
      </h1>
    );
  }
}

ReactDOM.render(
  <Clock locale='bn-BD' user='ashik'>
    test
  </Clock>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const style = {
    fontSize: 'clamp(2rem, 10vw, 6rem)',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadow: `
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 20px #007BFF,
      0 0 30px #007BFF,
      0 0 40px #007BFF,
      0 0 50px #007BFF,
      0 0 60px #007BFF
    `,
    animation: 'flicker 1.5s infinite alternate'
  };

  const keyframes = `
    @keyframes flicker {
      0%, 18%, 22%, 25%, 53%, 57%, 100% {
        text-shadow:
          0 0 4px #fff,
          0 0 11px #fff,
          0 0 19px #fff,
          0 0 40px #007BFF,
          0 0 80px #007BFF,
          0 0 90px #007BFF,
          0 0 100px #007BFF,
          0 0 150px #007BFF;
      }
      20%, 24%, 55% {
        text-shadow: none;
      }
    }
  `;

  return React.createElement(
    'div',
    null,
    React.createElement('style', null, keyframes),
    React.createElement(
      'h1',
      { style: style },
      'EU SOU LEGAL'
    )
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App)
  )
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import reportWebVitals from './reportWebVitals';

import { App } from './components/App';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <Router>
        <App />
      </Router>
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './font.scss';

import 'jquery';
import 'popper.js';
import './bootstrapCustom.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import IndexCtrl from './components/indexCtrl';


ReactDOM.render(
  <React.StrictMode>

    <IndexCtrl />
    
  </React.StrictMode>,
  document.getElementById('root')
);



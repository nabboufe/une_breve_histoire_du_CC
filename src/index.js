import React from 'react';
import ReactDOM from 'react-dom';
import HeroBanner from './HeroBanner';
import ChapterOne from './ChapterOne';

ReactDOM.render(
  <React.StrictMode>
    <HeroBanner />
    <ChapterOne />
  </React.StrictMode>,
  document.getElementById('App-front')
);

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import { fetchVideoPoints } from './actions/videoPoints';
import DatePicker from './components/DatePicker';
import MapFrame from './components/MapFrame';
import TextOverlay from './components/TextOverlay';

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchVideoPoints()), [dispatch]);

  return (
    <Router>
      <div className="App">
        <TextOverlay/>
        <MapFrame/>
        <DatePicker/>
      </div>
    </Router>
  );
}

export default App;

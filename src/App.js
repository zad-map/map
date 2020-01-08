import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { fetchVideoPoints } from './actions/videoPoints';
import DatePicker from './components/DatePicker';
import MapFrame from './components/MapFrame';
import TextOverlay from './components/TextOverlay';

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchVideoPoints()), [dispatch]);

  return (
    <div className="App">
      <TextOverlay/>
      <MapFrame/>
      <DatePicker/>
    </div>
  );
}

export default App;

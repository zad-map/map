import React, { useState } from 'react';
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";
import { useSelector } from 'react-redux';

import VideoPopup from './VideoPopup';
import './MapFrame.scss';

const Map = ReactMapboxGl({
    accessToken: ""
});

const MapFrame = (props) => {
  const videoPoints = useSelector(state => state.videoPoints.points);
  const [selectedVideo, selectVideo] = useState(null);

  return (
    <div className='MapFrame'>
        {/* eslint-disable-next-line */}
        <Map
          style="https://api.maptiler.com/maps/basic/style.json?key=RTkrAcFuX6L6NwSiRn6b" 
          center={[-1.733823,47.348622]}
        >
          <ZoomControl/>
          <Layer
            id='videos'
            type='circle'
            paint={{
              'circle-color': '#ff0000'
            }}
          >
            {videoPoints.map(point => (
              <Feature
                key={point.id}
                coordinates={[point.longitude, point.latitude]}
                properties={point}
                onClick={e => selectVideo(e.feature)}
              />
            ))}
          </Layer>

          {selectedVideo ? (
            <VideoPopup 
              onClose={() => selectVideo(null)}
              selectedVideo={selectedVideo}
            />
          ) : null}
        </Map>
    </div>
  )
};

export default MapFrame;

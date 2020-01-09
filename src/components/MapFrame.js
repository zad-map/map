import React, { useState } from 'react';
import ReactMapboxGl, { ZoomControl } from "react-mapbox-gl";
import classNames from 'classnames';

import VideoLayer from './VideoLayer';
import VideoPopup from './VideoPopup';
import ZadRaster from './ZadRaster';
import './MapFrame.scss';

const Map = ReactMapboxGl({
  accessToken: ""
});

const MapFrame = (props) => {
  const [mouseOverVideo, setMouseOverVideo] = useState(false);
  const [selectedVideo, selectVideo] = useState(null);

  return (
    <div className={classNames('MapFrame', {
      'over-point': mouseOverVideo
    })}>
      {/* eslint-disable-next-line */}
      <Map
        style="https://api.maptiler.com/maps/basic/style.json?key=RTkrAcFuX6L6NwSiRn6b" 
        center={[-1.733823,47.348622]}
      >
        <ZoomControl/>

        <ZadRaster/>

        <VideoLayer
          onMouseEnter={video => setMouseOverVideo(true)}
          onMouseLeave={video => setMouseOverVideo(false)}
          onVideoSelect={video => selectVideo(video)}
        />

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

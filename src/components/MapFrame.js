import React, { useState } from 'react';
import ReactMapboxGl, { ZoomControl } from "react-mapbox-gl";
import classNames from 'classnames';
import { useLocation } from "react-router-dom";

import VideoLayer from './VideoLayer';
import VideoPopup from './VideoPopup';
import ZadRaster from './ZadRaster';
import './MapFrame.scss';

const Map = ReactMapboxGl({
  accessToken: ""
});

function useHash() {
  const [zoom, lat, lng] = useLocation().hash.slice(1)
    .split('/')
    .map(parseFloat);
  if (!(zoom && lat && lng)) return {};
  return {
    center: { lat, lng },
    zoom,
  }
}

const MapFrame = (props) => {
  const [map, setMap] = useState(null);
  const [mouseOverVideo, setMouseOverVideo] = useState(false);
  const [selectedVideo, selectVideo] = useState(null);

  const hash = useHash();

  function setHash({ center, zoom }) {
    const parts = [];

    parts.push(zoom.toFixed(1));
    parts.push(center.lat.toFixed(3));
    parts.push(center.lng.toFixed(3));

    window.location.hash = parts.join('/');
  }

  let center = [-1.734, 47.349];
  if (map) {
    center = map.getCenter();
  }
  else if (hash.maplat && hash.maplng) {
    center = [hash.maplng, hash.maplat];
  }

  let zoom = 13;
  if (map) {
    zoom = map.getZoom();
  }
  else if (hash.zoom) {
    zoom = hash.zoom;
  }

  return (
    <div className={classNames('MapFrame', {
      'over-point': mouseOverVideo
    })}>
      {/* eslint-disable-next-line */}
      <Map
        style="https://api.maptiler.com/maps/basic/style.json?key=RTkrAcFuX6L6NwSiRn6b" 
        onStyleLoad={setMap}
        onMoveEnd={map => setHash({ center: map.getCenter(), zoom: map.getZoom() })}
        onZoomEnd={map => setHash({ center: map.getCenter(), zoom: map.getZoom() })}
        center={center}
        zoom={[zoom]}
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

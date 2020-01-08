import React from 'react';
import { Layer, Feature } from "react-mapbox-gl";
import { useSelector } from 'react-redux';

const VideoLayer = ({ onMouseEnter, onMouseLeave, onVideoSelect }) => {
  const date = useSelector(state => state.date.date);
  const videoPoints = useSelector(state => state.videoPoints.points);

  const currentVideos = videoPoints.filter(point => 
    date.isBetween(point.date_start, point.date_end, null, '[]')
  );

  return (
    <Layer
      id='videos'
      type='circle'
      paint={{
        'circle-color': '#000000',
        'circle-radius': 15
      }}
    >
      {currentVideos.map(point => (
        <Feature
          key={point.id}
          coordinates={[point.longitude, point.latitude]}
          properties={point}
          onClick={e => onVideoSelect(e.feature)}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ))}
    </Layer>
  );
}

export default VideoLayer;

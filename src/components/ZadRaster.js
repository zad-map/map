import React, { useMemo } from 'react';
import { Layer, Source } from 'react-mapbox-gl';

const ZadRaster = () => {
  const layer = useMemo(() => {
    const RASTER_SOURCE_OPTIONS = {
      scheme: "tms",
      type: "raster",
      tiles: ["./tiles/zad-2015/{z}/{x}/{y}.png"],
      tileSize: 256
    };

    return (
      <>
        <Source id="zad_raster_source" tileJsonSource={RASTER_SOURCE_OPTIONS} />
        <Layer type="raster" id="zad_raster_layer" sourceId="zad_raster_source" minZoom={11} />
      </>
    );
  }, []);

  return layer;
};

export default ZadRaster;

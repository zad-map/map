import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as d3 from 'd3';
import moment from 'moment';

import { setDate } from '../actions/date';
import { MINIMUM_DATE } from '../constants/config';
import './DatePicker.scss';

const DatePicker = (props) => {
  const [svgDimensions, setSvgDimensions] = useState({
    height: 50,
    width: 100
  });
  const [isDragging, setIsDragging] = useState(false);
  const svgElement = useRef(null);

  // eslint-disable-next-line
  const { t, i18n } = useTranslation();
  const date = useSelector(state => state.date.date);
  const dispatch = useDispatch();

  const startDate = MINIMUM_DATE.toDate();
  const endDate = new Date();

  const dateScale = d3.scaleTime()
    .domain([startDate, endDate])
    .range([0, svgDimensions.width]);

  const years = d3.timeYear.every(1).range(startDate, endDate);

  // Get the mouse position within the SVG element
  const getMousePosition = event => {
    const CTM = svgElement.current.getScreenCTM();
    return {
      x: (event.clientX - CTM.e) / CTM.a,
      y: (event.clientY - CTM.f) / CTM.d
    };
  }

  const resize = () => {
    const rect = svgElement.current.getBoundingClientRect();
    setSvgDimensions({
      height: rect.height,
      width: rect.width
    });
  };

  useEffect(() => {
    const rect = svgElement.current.getBoundingClientRect();
    setSvgDimensions({
      height: rect.height,
      width: rect.width
    });

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [svgElement]);

  return (
    <div className='DatePicker'>
      <div className='DatePicker-display'>
        {date.locale(i18n.language).format('MMMM YYYY')}
      </div>
      <div className='DatePicker-container'>
        <svg 
          ref={svgElement}
          style={{ height: '100%', width: '100%' }}
          viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={e => {
            e.preventDefault();
            if (isDragging) {
              const { x } = getMousePosition(e);
              dispatch(setDate(moment(dateScale.invert(x))));
            }
          }}
        >
          <g>
            <path
              d={d3.line()([
                [dateScale(startDate), svgDimensions.height / 2],
                [dateScale(endDate), svgDimensions.height / 2]
              ])}
              className='timeline'
            />
          </g>
          <g>
            {years.map(year => (
              <path
                key={year.toISOString()}
                d={d3.line()([
                  [
                    dateScale(year),
                    svgDimensions.height / 2 - svgDimensions.height / 4
                  ],
                  [
                    dateScale(year),
                    svgDimensions.height / 2 + svgDimensions.height / 4
                  ]
                ])}
                className='tick'
              />
            ))}
          </g>
          <g>
            <circle
              className='current-date-marker'
              r='10'
              cx={dateScale(date.toDate())}
              cy={svgDimensions.height / 2}
              onMouseDown={() => setIsDragging(true)}
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default () => (
  <Suspense fallback='loading'>
    <DatePicker/>
  </Suspense>
);

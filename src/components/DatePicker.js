import React, { Suspense, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as d3 from 'd3';
import moment from 'moment';

import { setDate } from '../actions/date';
import { MINIMUM_DATE } from '../constants/config';
import './DatePicker.scss';

const DatePicker = (props) => {
  const [isDragging, setIsDragging] = useState(false);
  const svgElement = useRef(null);

  // eslint-disable-next-line
  const { t, i18n } = useTranslation();
  const date = useSelector(state => state.date.date);
  const dispatch = useDispatch();

  const width = 1200;
  const height = 100;

  const startDate = MINIMUM_DATE.toDate();
  const endDate = new Date();

  const dateScale = d3.scaleTime()
    .domain([startDate, endDate])
    .range([0, width]);

  const years = d3.timeYear.every(1).range(startDate, endDate);

  // Get the mouse position within the SVG element
  const getMousePosition = event => {
    const CTM = svgElement.current.getScreenCTM();
    return {
      x: (event.clientX - CTM.e) / CTM.a,
      y: (event.clientY - CTM.f) / CTM.d
    };
  }

  return (
    <div className='DatePicker'>
      <div className='DatePicker-display'>
        {date.locale(i18n.language).format('MMMM YYYY')}
      </div>
      <div className='DatePicker-container'>
        <svg 
          ref={svgElement}
          viewBox={`0 0 ${width} ${height}`}
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
                [dateScale(startDate), height / 2],
                [dateScale(endDate), height / 2]
              ])}
              className='timeline'
            />
          </g>
          <g>
            {years.map(year => (
              <path
                key={year.toISOString()}
                d={d3.line()([
                  [dateScale(year), height / 2 - height / 4],
                  [dateScale(year), height / 2 + height / 4]
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
              cy={height / 2}
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

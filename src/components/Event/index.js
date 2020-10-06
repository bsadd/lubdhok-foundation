import React from 'react';
import get from 'lodash/get';
import DateComponent from '../DateComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { getNumberOfDaysToGo } from '../../utils/date';

import styles from './event.module.css';

export default ({ event }) => {
  const imageSrc = get(event, 'media.fluid.src');
  return (
    <>
      <div className={styles.eventHeader}>
        <DateComponent date={event.date} />
        <div>
          <div className={styles.eventTitle}>{event.name}</div>
          <div className={styles.eventVenue}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {event.venueText}
          </div>
        </div>
      </div>
      {event.isNew ? (
        <div className={styles.remainingDay}>
          {getNumberOfDaysToGo(event.date)}
        </div>
      ) : null}
      <div className={styles.eventInfo}>
        <div
          dangerouslySetInnerHTML={{
            __html: event.summary.childMarkdownRemark.html,
          }}
        />
        {event.videoUrl ? (
          <div className={styles.eventVideoContainer}>
            <iframe
              src={event.videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : null}
        {event.media && !event.videoUrl ? (
          <div className={styles.eventImageContainer}>
            <img alt={event.name} src={imageSrc} />
          </div>
        ) : null}
      </div>
    </>
  );
};

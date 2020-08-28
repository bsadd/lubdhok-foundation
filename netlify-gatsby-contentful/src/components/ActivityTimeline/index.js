import React from 'react';
import { Link } from 'gatsby';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { useActivityTimelineData } from './query';
import { defaultDateFormat } from '../../utils/date';

import 'react-vertical-timeline-component/style.min.css';
import styles from './activityTimeline.module.css';

export const ActivityTimeline = () => {
  const activities = useActivityTimelineData();

  if (!activities.length) {
    return null;
  }
  return (
    <>
      <div className={styles.title}>Recent activites</div>
      <VerticalTimeline className={styles.activityTimline}>
        {activities.map(({ node: activity }) => (
          <VerticalTimelineElement
            contentStyle={{ border: '3px solid #a23c38', color: '#a23c38' }}
            contentArrowStyle={{ borderRight: '10px solid  #a23c38' }}
            date={defaultDateFormat(activity.date)}
            iconStyle={{ background: '#a23c38', color: '#fff' }}
          >
            <h4>{activity.name}</h4>
            <h5>{activity.venueText}</h5>
            {activity.media && activity.media.fluid && (
              <img src={activity.media.fluid.src} />
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <div className={styles.seeMoreBtn}>
        <Link to="/activities">
          See more activites
        </Link>
      </div>
    </>
  );
};

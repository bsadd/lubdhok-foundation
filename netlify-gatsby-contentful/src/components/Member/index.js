import React from 'react'
import get from 'lodash/get'
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './member.module.css'

export default ({ member, reverse }) => {
  const imageSrc = get(member, 'displayPicture.fluid.src')
   || "https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"
  return (
    <ScrollAnimation
      animateIn={ reverse ? 'slideInRight' : 'slideInLeft'} 
      delay={200}
      className={styles.homeSectionTitle}
      animateOnce
    >
    <div className={`${styles.memberContainer} ${reverse ? styles.reverse : '' }`}>
      <div className={styles.memberProfilePic}>
        <img src={imageSrc} alt={member.fullName}/>
      </div>
      <div className={`${styles.memberDetails} ${reverse ? styles.reverse : '' }`}>
        <div className={styles.name}>{member.fullName}</div>
        <div className={styles.position}>{member.position}</div>
        <div>Member No {member.memberNo}</div>
      </div>
    </div>
    </ScrollAnimation>
  )
}
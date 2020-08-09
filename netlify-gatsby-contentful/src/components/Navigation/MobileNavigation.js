import React, { useState , useEffect } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faPhone, faCalendarAlt, faPeopleCarry } from '@fortawesome/free-solid-svg-icons'

import styles from './navigation.module.css'

const navIcons = {
  event: faCalendarAlt,
  workshop: faBlog,
  contact: faPhone,
  member: faPeopleCarry
}

const HamburgerIcon = ({open, onClick}) => (
  <div
    role="button"
    onClick={onClick}
    className={`
    ${styles.hamburgerMenu}
    ${open ? styles.open : null}
    `}
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
);

export default ({ navigationLink }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, []);
  const handleClick = () => {
    if (open) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
    setOpen(!open);
  }
  return (
    <nav role="navigation" className={styles.mobNav}>
      <HamburgerIcon
        open={open}
        onClick={handleClick}
      />
      { open ?
        <ul>
           {
             navigationLink.map(({ node }, index) => (
              <li key={index}>
                 <Link to={node.url}>
                   <FontAwesomeIcon icon={navIcons[node.icon]} />
                   {node.name}
                 </Link>
              </li>
             ))
           }
        </ul>
        : null
      }
    </nav>
  )
}

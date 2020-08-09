import React from 'react'
import { Link } from 'gatsby'
import styles from './logo.module.css'

const Logo = ({ logo, lightMode = false }) => {
  let logoText = styles.navigationLogoText
  if (lightMode) {
    logoText += ' ' + styles.lightLogoText
  }
  return (
    <div className={styles.navigationLogo}>
      <div>
          <Link to="/">
            {
              logo && <img src={logo.src} alt={logo.alt} />
            }
            <div className={logoText}>
              <span>{logo && logo.logoText}</span>
              <span>{logo && logo.logoLongText}</span>
            </div>
          </Link>
      </div>
    </div>
  )
}

export default Logo;
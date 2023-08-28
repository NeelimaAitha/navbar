// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundBgClassName = isDarkTheme
        ? 'not-found-dark-theme'
        : 'not-found-light-theme'

      const notFoundHeadingTextClassName = isDarkTheme
        ? 'not-found-heading-text-light'
        : 'not-found-heading-text-dark'

      const notFoundContentTextClassName = isDarkTheme
        ? 'not-found-content-text-light'
        : 'not-found-content-text-dark'

      return (
        <div className={`not-found-app-container ${notFoundBgClassName}`}>
          <Navbar />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not-found"
            />
            <h1 className={`${notFoundHeadingTextClassName}`}>
              Lost Your Way?
            </h1>
            <p className={`${notFoundContentTextClassName}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound

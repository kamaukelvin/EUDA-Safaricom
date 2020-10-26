import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        
        <footer className="footer">
          <div>
            <span>© {date} Safaricom </span>
          </div>
          <div>
            <nav className="nav">
              <a href="https://safaricom.com" className="nav-link">Terms and Conditions</a>
              <a href="https://safaricom.com" className="nav-link">Get Help</a>
            </nav>
          </div>
        </footer>
    )
}

export default Footer

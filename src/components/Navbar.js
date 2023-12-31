import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

import styles from './Navbar.module.scss'

export default function Navbar() {

  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>Firebase Authenticator App</li>

            {!user && (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
              </>
            )}
            
            {user && (
              <>
              <li>Hello, {user.displayName}</li>
              <li>
                <button className='btn' onClick={logout}>Logout</button>
              </li>
              </>
            )}
            
        </ul>
    </nav>
  )
}

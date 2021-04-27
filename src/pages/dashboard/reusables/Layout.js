import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from '../../../styles/Nav.module.css';

const Layout = (props) => {

    const [isOpen,
        setIsOpen] = useState(true);

    const [navLinks] = useState([
        {
            icon: 'fas fa-user',
            text: 'Dashboard',
            url: '/'
        }
    ])

    return (
        <div>
            <div
                className={`alignOnly ${styles.sideNav} \n ${isOpen
                ? styles.open
                : ''}`}>
                    <div>
                        <ul>
                            {navLinks.map(link => (
                                <Link to={link.url} className='textIsWhite'>
                                    <li>
                                        <p className={`mb-1 \n ${link.icon}`}></p>
                                        <p>{link.text}</p>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                </div>
            </div>

            <div
                className={`${styles.mainContent} ${isOpen
                ? styles.open
                : ''}`}>
                <div className={`container-fluid \n ${styles.navBar}`}>
                    <div>
                        <i
                            className="fas fa-bars isClickable"
                            onClick={() => {
                            setIsOpen(!isOpen)
                        }}></i>
                    </div>
                </div>
                {props.children}
            </div>

        </div>
    )
}

export default Layout

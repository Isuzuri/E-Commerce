import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss'

const Header = ({user}) => {
    user = user || 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200';

    return (
        <nav>
            <div className={styles.left}>
                <div className={styles.logo}></div>
                <div className={styles.navigation}>
                    <NavLink to={'/collections'}>Collections</NavLink>
                    <NavLink to={'/men'}>Men</NavLink>
                    <NavLink to={'/women'}>Women</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.cart}></div>
                <div className={styles.user} style={{backgroundImage: `url(${user})`}}></div>
            </div>
        </nav>
    );
}
 
export default Header;
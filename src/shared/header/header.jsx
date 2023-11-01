import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from './styles.module.scss'

const Header = ({user}) => {
    user = user || 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200';

    return (
        <nav>
            <div className={styles.left}>
                <div className={styles.logo}></div>
                <div className={styles.navigation}>
                    <Link to={'/collections'}>Collections</Link>
                    <Link to={'/men'}>Men</Link>
                    <Link to={'/women'}>Women</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact</Link>
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
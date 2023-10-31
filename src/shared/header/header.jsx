import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './styles.module.scss'

const Header = ({user}) => {
    return (
        <nav>
            <div className={styles.left}>
                <div className={styles.logo}></div>
                <div className={styles.navigation}>
                    <span>Collections</span>
                    <span>Men</span>
                    <span>Women</span>
                    <span>About</span>
                    <span>Contact</span>
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
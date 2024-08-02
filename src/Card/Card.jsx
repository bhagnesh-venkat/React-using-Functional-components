import profilepic from '../assets/profile.jpeg'
import styles from './card.module.css'
function  Card() {
    return(
        <div className={styles.card}>
            <img src={profilepic} alt="Profile Picture" className={styles['card-image']}></img>
            <h2 className={styles['card-title']}>Venkata Bhagnesh</h2>
            <p className={styles['card-text']}>I am Searching for a job</p>
        </div>
    );
}
export default Card
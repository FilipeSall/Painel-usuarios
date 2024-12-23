import styles from './icon.module.css';

type IconProps = {
    icon: string
    description: string
}

const Icon = ({ icon, description }: IconProps) => {
    return (
        <div className={styles.iconWrapper}>
            <img src={icon} alt={description} className={styles.icon} />
        </div>
    )

}

export default Icon
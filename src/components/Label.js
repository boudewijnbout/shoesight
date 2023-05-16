import styles from "../styles/components/Label.module.css";

const Label = ({ title }) => {
    return (
        <span className={styles.label}>{title}</span>
    )
}

export default Label;
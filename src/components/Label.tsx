// Styles
import styles from "../styles/components/Label.module.css";

interface LabelProps {
    title: string,
}

const Label = ({ title }: LabelProps) => {
    return (
        <span className={styles.label}>{title}</span>
    )
}

export default Label;
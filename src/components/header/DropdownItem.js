import styles from "@/styles/components/header/DropdownItem.module.css";

import Link from "next/link";

const DropdownItem = ({ linkUrl, title }) => {
    return (
        <li className={styles.dropdownItem}>
            <Link href={linkUrl}>{title}</Link>
        </li>
    )
}

export default DropdownItem;
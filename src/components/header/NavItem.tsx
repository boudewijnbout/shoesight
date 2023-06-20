import Link from "next/link";
import { ReactNode } from "react";

interface NavItemProps {
    linkUrl: string,
    title: string,
}

// Styles
import styles from "@/styles/components/header/NavItem.module.css";

const NavItem = ({ linkUrl, title, children }: NavItemProps) => {
    return (
        <>
            <li className={styles.navItem}>
                <Link href={linkUrl}>{title}</Link>
            </li>
        </>
    )
}

export default NavItem;
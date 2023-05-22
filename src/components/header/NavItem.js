import Link from "next/link";

const NavItem = ({ linkUrl, title, children }) => {
    return (
        <>
            <li>
                <Link href={linkUrl}>{title}</Link>
                {children}
            </li>
        </>
    )
}

export default NavItem;
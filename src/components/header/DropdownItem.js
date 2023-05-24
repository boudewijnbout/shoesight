import Link from "next/link";

const DropdownItem = ({ linkUrl, title }) => {
    return (
        <li>
            <Link href={linkUrl}>{title}</Link>
        </li>
    )
}

export default DropdownItem;
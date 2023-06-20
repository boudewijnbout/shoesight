import Link from "next/link";

interface DropdownItemProps {
    linkUrl: string,
    title: string,
}

const DropdownItem = ({ linkUrl, title }: DropdownItemProps) => {
    return (
        <li>
            <Link href={linkUrl}>{title}</Link>
        </li>
    )
}

export default DropdownItem;
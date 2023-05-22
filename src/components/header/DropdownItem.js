import Link from "next/link";

const DropdownItem = ({ link, title }) => {
  return (
    <>
      <Link href={link}>
        {title}
      </Link>
    </>
  );
};

export default DropdownItem;

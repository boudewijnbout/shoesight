// Styles
import styles from "@/styles/components/header/Searchbar.module.css";

interface SearchBarProps {
    label: string,
}

const SearchBar = ({ label }: SearchBarProps) => {
    return (
        <>
            <form className={styles.searchBar}>
                <input type="search" placeholder={label} />
            </form>
        </>
    )
}

export default SearchBar;
// Styles
import styles from "@/styles/components/header/Searchbar.module.css";

const SearchBar = ({ label }) => {
    return (
        <>
            <form className={styles.searchBar}>
                <input type="search" placeholder={label} />
            </form>
        </>
    )
}

export default SearchBar;
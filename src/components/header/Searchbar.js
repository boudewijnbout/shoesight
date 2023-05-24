import styles from "@/styles/components/header/Searchbar.module.css";

const SearchBar = () => {
    return (
        <>
            <form className={styles.searchBar}>
                <input type="search" placeholder="Artikelen zoeken..." />
            </form>
        </>
    )
}

export default SearchBar;
import styles from "@/styles/components/header/Searchbar.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
const SearchBar = ({ onSubmit }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  //   const [results, setResults] = useState([]);
  //   console.log(searchTerm);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value;
    router.push({
      pathname: "/search-results",
      query: { query: searchQuery },
    });
  };

  return (
    <>
      <form className={styles.searchBar} onSubmit={handleSearch}>
        <input
          type="search"
          name="search"
          placeholder="Artikelen zoeken..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </form>
    </>
  );
};

export default SearchBar;

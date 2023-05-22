import styles from "../../styles/components/header/Searchbar.module.css";

const Searchbar = ({ title }) => {
  return (
    <>
      <form className={styles.searchBar}>
        <input
          type="search"
          placeholder={title}
        ></input>
      </form>
    </>
  );
};

export default Searchbar;

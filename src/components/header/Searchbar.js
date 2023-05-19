import classes from "../../styles/components/header/Header.module.css";

const Searchbar = (props) => {
  return (
    <>
      <form className={classes.searchbar}>
        <input
          type="search"
          placeholder="Artikelen zoeken.."
        ></input>
      </form>
    </>
  );
};

export default Searchbar;

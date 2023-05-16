import classes from "../../src/styles/Header.module.css";

const Searchbar = (props) => {
  return (
    <>
      <input
        className={classes.searchbar}
        type="search"
        placeholder="Artikelen zoeken.."
      ></input>
    </>
  );
};

export default Searchbar;

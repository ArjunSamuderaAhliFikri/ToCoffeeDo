import styles from "./searchBar.module.css";

const SearchBar = (): JSX.Element => {
  return (
    <>
      <div className={styles.wrapper_search_task}>
        <input type="text" name="" id="" placeholder="Find Task..." />
      </div>
    </>
  );
};

export default SearchBar;

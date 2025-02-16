import SearchBar from "../../elements/SearchBar";
import HeroImage from "../../fragments/HeroImage";
import MainFeatures from "../../fragments/MainFeatures";
import styles from "./headerTask.module.css";

type HeaderTaskProps = {
  children: React.ReactNode;
};

const HeaderTask = (props: HeaderTaskProps): JSX.Element => {
  const { children } = props;
  return (
    <>
      <section className={styles.container_header_task}>
        <HeroImage />

        {children}

        <SearchBar />
        <MainFeatures />
      </section>
    </>
  );
};

export default HeaderTask;

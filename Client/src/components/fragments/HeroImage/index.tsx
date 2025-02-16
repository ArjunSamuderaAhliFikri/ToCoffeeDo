import styles from "./heroImage.module.css";

const HeroImage = (): JSX.Element => {
  return (
    <>
      <div className={styles.hero_image}>
        <img
          className={styles.hero_image}
          src="/img/jungle.jpg"
          alt="hero-image"
        />
      </div>
    </>
  );
};

export default HeroImage;

import styles from "./right__task.module.css";

const RightTask = () => {
  return (
    <section className={styles.right__bar}>
      <h2 className={styles.current__task__header}>current task</h2>

      <div className={styles.container__description__current__task}>
        <h1 className={styles.title__task}>belajar next.js</h1>
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui corporis
          similique cupiditate perferendis pariatur sed!
        </p>
      </div>

      <div className={styles.container__list__task}>
        <h3>list task</h3>

        <ul className={styles.wrapper__list}>
          <li>
            <div className={styles.container__checkbox}>
              <input
                onChange={() => console.log("isChanged!")}
                type="checkbox"
              />
            </div>
            <span>belajar dasar react</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default RightTask;

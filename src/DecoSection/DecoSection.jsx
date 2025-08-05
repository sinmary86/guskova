import styles from "./DecoSection.module.scss";

export const DecoSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.contentContainer}>
        <h5>
          Мой голос — это мой способ говорить о том, что чувствуют миллионы.
        </h5>
      </div>
    </section>
  );
};

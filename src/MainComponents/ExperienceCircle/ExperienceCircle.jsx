import styles from './ExperienceCircle.module.scss';

export const ExperienceCircle = () => {
    
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 2013;

  return (
    <div className={styles.wrapper}>
      <svg className={styles.svg} viewBox="0 0 300 300">
        <defs>
          <path
            id="topText"
            d="M 150,150 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
          />
        </defs>

        <text className={styles.circleText}>
          <textPath href="#topText" startOffset="0%" textLength="754">
            •&ensp;ЛЕТ&ensp;В&ensp;ШОУ-БИЗНЕСЕ&ensp;•&ensp;ЛЕТ&ensp;В&ensp;ШОУ-БИЗНЕСЕ&ensp;
          </textPath>
        </text>

        <text
            x="150"
            y="150"
            textAnchor="middle"
            className={styles.centerNumber}
            dy=".33em"
            >
            {experienceYears}
        </text>
      </svg>
    </div>
  );
};
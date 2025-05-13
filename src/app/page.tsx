import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <h1 className={styles.title}>
            Her kommer Bygg-nord.no
          </h1>
        </div>
      </main>
      <footer className={styles.footer}>
        Kontakt oss på e-post: 
        <a
          href="mailto:kej@bygg-nord.no"
          rel="noopener noreferrer"
        >
          kej@bygg-nord.no
        </a>
        eller telefon: 
        <a
          href="tel:004793204280"
          target="_blank"
          rel="noopener noreferrer"
        >
          +47 932 04 280
        </a>
      </footer>
    </div>
  );
}

import styles from "@/app/styles/common.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.error_page}>
          <h1>404</h1>
          <h2>Page not found</h2>
          <p>Could not find resource</p>
          <Link href={"/"}>
            <button>Go to home</button>
          </Link>
        </div>
      </section>
    </>
  );
}

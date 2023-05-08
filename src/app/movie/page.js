import MoviCard from "../components/MoviCard";
import styles from "@/app/styles/common.module.css";

const Page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const url = process.env.RAPID_URL;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "162680085emsh5f9c8a86ec4daddp1fef06jsnc9549ca43731",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>

          <div className={styles.card_section}>
            {main_data.map((curEle) => {
              return <MoviCard key={curEle.id} curEle={curEle} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

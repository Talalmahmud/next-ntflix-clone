import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const Page = async ({ params }) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "162680085emsh5f9c8a86ec4daddp1fef06jsnc9549ca43731",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.movie_title}>
          Netlify / <span>{main_data.type}</span>
        </h2>
        <div className={styles.card_section}>
          <div>
            <Image
              src={main_data.backgroundImage.url}
              alt={main_data.title}
              height={300}
              width={600}
            />
          </div>
          <div>
            <h1>{main_data.title}</h1>
            <p>{main_data.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

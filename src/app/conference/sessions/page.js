import styles from "../conference.module.css";

// Dynamic Data Fetching or Server Side Rendering
async function fetchSessions() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    { cache: "no-store" }
  );

  const data = await response.json();
  return data;
}

export default async function Page() {
  const data = await fetchSessions();
  return (
    <div className={styles.parentContainer}>
      <h1>Our Posts Lists</h1>

      {data.map(
        ({ id, title,body}) => (
          <div key={id} className={styles.infoContainer}>
            <h3 className={styles.titleText}>{title}</h3>
            <h5 className={styles.descText}>{body}</h5>
          </div>
        )
      )}
    </div>
  );
}

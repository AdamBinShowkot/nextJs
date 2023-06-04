import styles from "../conference.module.css";
import Link from "next/link";

export let speakerJson = {};

// Static data fetching
async function fetchSpeakers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const data = await response.json();
  speakerJson = data;
  //console.log("KK",data)
  return data;
}

export default async function Page() {
  const data = await fetchSpeakers();

  return (
    <div className={styles.parentContainer}>
      <h1>Our Users Lists</h1>
      {data.map(({ id, name, email,address }) => (
        <div key={id} className={styles.infoContainer}>
          <Link
            className={styles.bgLinks}
            href={`/conference/speakers/${id}`}
            prefetch={false}
          >
            <h3 className={styles.titleText}>{name}</h3>
          </Link>
          <h5 className={styles.descText}><strong>Email : </strong> {email} <strong>Street : </strong> {address.street} <strong>City : </strong> {address.city} <strong>Zip-Code : </strong> {address.zipcode}</h5>
        </div>
      ))}
    </div>
  );
}

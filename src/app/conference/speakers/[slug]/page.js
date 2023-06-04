import { speakerJson } from "../page";
import styles from "../../conference.module.css";

async function fetchSpeakerInfo(params) {
  // API call, DB Query, fetch from the app
  const userDetails=await fetch('https://jsonplaceholder.typicode.com/users/'+params);

  const data=await userDetails.json();

  return data;
}

export default async function Page({ params }) {
  const userInfos =await fetchSpeakerInfo(params.slug);

  const { name,email,username,address,phone,website } = userInfos;
  return (
    <div className={styles.infoContainer}>
      <h3 className={styles.titleText}>{name}</h3>
      <h5 className={styles.descText}>Username: {username}</h5>
      <h5 className={styles.descText}>Email: {email}</h5>
      <h5 className={styles.descText}>Address: {address.street} , {address.city} , {address.zipcode}</h5>
      <h5 className={styles.descText}>{phone} , {website}</h5>
    </div>
  );
}

import styles from "../styles/ServiceList.module.css";
import ServiceCard from "./ServiceCard"

const ServiceList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Servicios</h1>
      <p className={styles.desc}>
        realizamos lo siguientes servicios
      </p>
      <div className={styles.wrapper}>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
      </div>
    </div>
  );
};

export default ServiceList;
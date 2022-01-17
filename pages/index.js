import { useState } from "react";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";
import Information from "../components/Information/index";
import Data from "../components/Data";
import planets from "../data.json";

export default function Home() {
  const [planetView, setPlanetView] = useState("planet");
  const planet = planets[0];
  return (
    <>
      <Head title={"homepage"} />
      <div className={styles.container}>
        <Navigation />
        <div className={styles.information}>
          <img src={planet.images[planetView]} />
          <Information
            name={planet.name}
            description={planet[planetView].content}
            source={planet[planetView].source}
            planetView={planetView}
            setPlanetView={setPlanetView}
          />
        </div>
        <div className={styles.data}>
          <Data
            rotation={planet.rotation}
            revolution={planet.revolution}
            radius={planet.radius}
            temp={planet.temperature}
          />
        </div>
      </div>
    </>
  );
}

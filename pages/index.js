import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as React from "react";
import { useEffect, useState } from "react";

export default function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return (
    <div className={styles.App}>
      <section className={styles.hero}>
        <img
          src="http:////picsum.photos/800/600"
          alt="test"
          className={styles.parallax}
          style={{
            transform: `translateY(${offset * 0.5}px)`,
          }}
        />
        <div className={styles.textWrapper}>
          <h1 className={styles.headline}>Parallax</h1>
          <h2 className={styles.subheadline}>Scrolling effect</h2>
          <p>
            Mollit ex aute Lorem ex excepteur ullamco dolor. Aliqua fugiat ea
            aliqua amet elit tempor. Ullamco sit ea duis ullamco duis anim et
            est qui. Cupidatat magna consectetur quis veniam cupidatat sint
            occaecat dolor aliqua duis elit eiusmod. Ut deserunt sunt eu mollit
            mollit aute cillum ullamco mollit dolore Lorem. Ad ea voluptate ad
            incididunt Lorem aute est sit do irure eu pariatur consectetur
            commodo. Aliquip dolor consequat anim non mollit id reprehenderit
            consectetur aute tempor eu elit adipisicing reprehenderit. Ad amet
            proident ad voluptate pariatur do duis aliquip proident cupidatat
            id. Ad magna est tempor tempor eu nostrud. In id ad velit laborum
            Lorem dolor proident in cupidatat non labore consectetur. Nulla et
            enim sint nostrud eiusmod. Reprehenderit minim adipisicing occaecat
            proident nisi cillum veniam cupidatat aliqua amet. Consectetur
            incididunt eu ut consequat dolore dolore cupidatat nostrud nostrud
            excepteur dolore. Do eiusmod laborum tempor excepteur nulla esse ea
            elit magna et fugiat sunt nulla qui. Quis commodo esse do
            reprehenderit nulla fugiat ut tempor sit commodo eiusmod non et sit.
            Ipsum commodo consequat aliquip aliquip incididunt adipisicing ipsum
            cupidatat. Esse laborum consequat anim qui eu sunt proident sit amet
            laborum nulla ut labore. Esse pariatur enim est fugiat ex qui quis
            officia quis do occaecat. Id ipsum veniam magna sunt cupidatat
            aliquip. Irure ad Lorem nostrud reprehenderit eiusmod incididunt
            minim dolore. Pariatur nisi id culpa qui aute non ex. Consectetur
            occaecat eu minim dolor minim qui amet consequat. Consectetur ea
            aliqua nulla non sit nostrud sit et nulla adipisicing deserunt
            voluptate consequat tempor. Sint proident cillum ad consequat
            aliquip in adipisicing voluptate. Ex duis enim cillum aliqua fugiat
            aliquip occaecat. Veniam excepteur irure culpa nisi tempor do. Irure
            cupidatat exercitation culpa nisi dolor magna excepteur excepteur
            irure labore duis consectetur amet non. Fugiat duis dolore ex
            officia amet nisi dolor consequat ea nisi ad eu. Minim incididunt
            nulla minim culpa ipsum excepteur reprehenderit cupidatat magna ut.
            Dolore do quis non elit occaecat amet ut sunt culpa consequat qui
            commodo occaecat nisi. Dolore ad magna minim quis id et eiusmod
            labore sint. Nisi cillum voluptate ut culpa aliquip culpa amet Lorem
            commodo incididunt laborum. Non occaecat anim proident reprehenderit
            elit proident in nisi non. Labore officia adipisicing enim nisi
            voluptate consectetur Lorem occaecat deserunt officia excepteur.
            Commodo ullamco nulla anim sint sit elit fugiat do proident duis
            sit. Consequat sunt ad dolor eiusmod irure qui irure excepteur
            voluptate culpa.
          </p>
        </div>
      </section>
      <section className={styles.overflow}></section>
    </div>
  );
}

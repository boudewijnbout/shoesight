import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Image from 'next/image';
import styles from "../../styles/slices/nieuwSlice.module.css"


/**
 * @typedef {import("@prismicio/client").Content.NieuwSliceSlice} NieuwSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NieuwSliceSlice>} NieuwSliceProps
 * @param {NieuwSliceProps}
 */

const NieuwSlice = ({ slice }) => {
  return (
    
    <section className={styles.nieuw}>
            <h2><PrismicRichText field={slice.primary.title} /></h2>
    </section>
  );
};

export default NieuwSlice;


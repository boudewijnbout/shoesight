import { PrismicRichText } from "@prismicio/react";
import styles from "../../styles/slices/highlightsSlice.module.css";
import HighlightArticleLarge from "@/components/highlightArticleLarge";

/**
 * @typedef {import("@prismicio/client").Content.NieuwSliceSlice} NieuwSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NieuwSliceSlice>} NieuwSliceProps
 * @param {NieuwSliceProps}
 */
const HighlightsSlice = ({ slice }) => {
  const articles = slice.items.map(obj => obj.articlelink.data)

  return (
    <section className={styles.section}>
      <PrismicRichText field={slice.primary.title} />

      <HighlightArticleLarge imageUrl={articles[0].featuredimage.url} />
    </section>
  );
};

export default HighlightsSlice;

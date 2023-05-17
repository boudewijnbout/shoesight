import { PrismicRichText } from "@prismicio/react";
import styles from "../../styles/slices/highlightsSlice.module.css";
import HighlightArticleLarge from "@/components/highlightArticleLarge";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.NieuwSliceSlice} NieuwSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NieuwSliceSlice>} NieuwSliceProps
 * @param {NieuwSliceProps}
 */
const HighlightsSlice = ({ slice }) => {
  const articles = slice.items.map(obj => obj.articlelink.data)
  const icons = articles.slice(1);

  return (
    <section className={styles.section}>
      <PrismicRichText field={slice.primary.title} />

      <HighlightArticleLarge imageUrl={articles[0].featuredimage} label={articles[0].label[0].text}  />

      {icons.map((icon) => {          
        return (
          <>
            <article>
              <picture>
                <PrismicNextImage field={icon.featuredImage} />
              </picture>
            </article>
          </>
        )
      })}
    </section>
  );
};

export default HighlightsSlice;

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

      <div className={styles.highlightsArticleWrapper}>
        <HighlightArticleLarge imageUrl={articles[0].featuredimage} label={articles[0].label[0].text} />

        <div className={styles.iconsWrapper}>
          {icons.map((icon) => {

            return (
              <>
                <article className={styles.iconCard}>
                  <picture>
                    <PrismicNextImage field={icon.featuredimage} />
                  </picture>

                  <div>
                    <span>{icon.label[0].text}</span>
                    <PrismicRichText field={icon.title} />
                    <PrismicRichText field={icon.shortdescription} />
                  </div>
                </article>
              </>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSlice;

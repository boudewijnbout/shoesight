import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

// Components
import Label from "@/components/Label";

// Styles
import styles from "@/styles/slices/FunstuffSlice.module.css";

/**
 * @typedef {import("@prismicio/client").Content.FunstuffSliceSlice} FunstuffSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FunstuffSliceSlice>} FunstuffSliceProps
 * @param {FunstuffSliceProps}
 */
const FunstuffSlice = ({ slice }) => {
  const articles = slice.items.map((obj) => obj.article_link.data);

  return (
    <section className={styles.section}>

      {/* Slice title */}
      <PrismicRichText field={slice.primary.title} />

      {/* Articles */}
      <div className={styles.funstuffContainer}>
        {articles.map((article) => {
          return (
            <article key={article.uid} className={styles.article}>
              <picture>
                <PrismicNextImage field={article.featuredimage} />
              </picture>
              <Label title={article.label[0].text} />
              <div>
                <h4>{article.title[0].text}</h4>
                <PrismicRichText field={article.shortdescription} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FunstuffSlice;

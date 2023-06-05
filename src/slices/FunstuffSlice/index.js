import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import styles from "../../styles/slices/funstuffSlice.module.css";
import Label from "@/components/Label";

/**
 * @typedef {import("@prismicio/client").Content.FunstuffSliceSlice} FunstuffSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FunstuffSliceSlice>} FunstuffSliceProps
 * @param {FunstuffSliceProps}
 */
const FunstuffSlice = ({ slice }) => {
  const articles = slice.items.map((obj) => obj.article_link.data);

  return (
    <section className={styles.section}>
      <PrismicRichText field={slice.primary.title} />

      <div className={styles.funstuffContainer}>
        {articles.map((article) => {
          return (
            <>
              <article className={styles.article}>
                <picture>
                  <PrismicNextImage field={article.featuredimage} />
                  <Label title={article.label[0].text} />
                </picture>
                <div>
                  <h4>{article.title[0].text}</h4>
                  <PrismicRichText field={article.shortdescription} />
                </div>
              </article>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default FunstuffSlice;

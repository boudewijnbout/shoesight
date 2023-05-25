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
                  <PrismicNextImage
                    // priority
                    // sizes="(max-width: 30rem) 100vw, (max-width: 75rem) 33vw, 33vw"
                    field={article.featuredimage}
                  />
                  <Label title={article.label[0].text} />
                </picture>

                <PrismicRichText field={article.title} />
                <PrismicRichText field={article.shortdescription} />
              </article>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default FunstuffSlice;

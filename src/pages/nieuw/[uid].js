import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "../../../prismicio";
import { PrismicRichText } from "@prismicio/react";

import Link from "next/link";

// Components
import Label from "@/components/Label";

// Styles
import styles from "../../styles/pages/nieuwDetail.module.css";
import Head from "next/head";

const Page = ({ page }) => {
  const article = page.data;
  const publishDate = page.data.publishdate;
  const date = new Date(publishDate);

  const publishDateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  // Format publish date to NL format
  const formattedPublishDate = date.toLocaleString("nl-NL", publishDateOptions);

  return (
    <>
      <Head>
        <title>{article.title[0].text}</title>
        <meta name="description" content={article.shortdescription[0].text} />
      </Head>

      <main>
        {/* Nieuw detail article */}
        <section className={styles.nieuwDetail}>
          <article className={styles.nieuwDetailArticle}>
            <h3>{article.title[0].text}</h3>

            <div className={styles.publishInformation}>
              publisher
              <p>{formattedPublishDate}</p>
            </div>

            <picture>
              <PrismicNextImage priority field={article.featuredimage} />
              <Label title={article.label[0].text} />
            </picture>

            <div className={styles.nieuwDetailBody}>
              <p className={styles.introduction}>
                {article.introduction[0].text}
              </p>
              <PrismicRichText field={article.body} />
            </div>
          </article>

          <hr />

          {/* Related articles */}
          <div className={styles.relatedArticles}>
            <h4>gerelateerde artikelen</h4>

            <div>
              {article.relatedarticles.map((relatedArticle) => {
                return (
                  <>
                    <Link
                      href={`/nieuw/${relatedArticle.articlelink.data.uid}`}
                    >
                      <article>
                        <picture>
                          <PrismicNextImage
                            field={
                              relatedArticle.articlelink.data.featuredimage
                            }
                          />
                          <Label
                            title={
                              relatedArticle.articlelink.data.label[0].text
                            }
                          />
                        </picture>

                        <h5>{relatedArticle.articlelink.data.title[0].text}</h5>
                        <PrismicRichText
                          field={
                            relatedArticle.articlelink.data.shortdescription
                          }
                        />
                      </article>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps({ params }) {
  const { uid } = params;
  const client = createClient();
  const page = await client.getByUID("article", uid, {
    fetchLinks: [
      "article.title, article.featuredimage, article.label, article.shortdescription, article.uid",
    ],
  });

  return {
    props: {
      page,
    },

    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const res = await client.getByType("article");

  const articleUids = res.results.map((result) => result.uid);

  const paths = articleUids.map((uid) => ({ params: { uid } }));

  return {
    paths,
    fallback: false,
  };
}

export default Page;

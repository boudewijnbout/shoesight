import { PrismicNextImage } from "@prismicio/next";
import { asText } from "@prismicio/helpers";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../../prismicio";
import { PrismicRichText } from "@prismicio/react";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";
import Head from "next/head";
import { format, formatRelative } from "date-fns";

// Components
import Label from "@/components/Label";

// Styles
import styles from "@/styles/pages/nieuwDetail.module.css";

type NieuwArticleProps = InferGetStaticPropsType<typeof getStaticProps>;

const Page = ({ nieuwArticle }: NieuwArticleProps) => {    
    const date = prismicH.asDate(nieuwArticle.data.publishdate ? nieuwArticle.data.publishdate : undefined);
        
    return (
        <>
            <Head>
                <title>{asText(nieuwArticle.data.title)}</title>
                <meta name="description" content={asText(nieuwArticle.data.shortdescription)} />
            </Head>

            <main>

                {/* Nieuw detail article */}
                <section className={styles.nieuwDetail}>
                      <article className={styles.nieuwDetailArticle}>
                        <h3>{asText(nieuwArticle.data.title)}</h3>

                        <div className={styles.publishInformation}>
                            publisher
                            <p>{date && format(date, "dd/MM/yyy")}</p>
                        </div>

                        <picture>
                            <PrismicNextImage priority field={nieuwArticle.data.featuredimage} />
                            <Label title={asText(nieuwArticle.data.label)} />
                        </picture>

                        <div className={styles.nieuwDetailBody}>
                            <p className={styles.introduction}>{asText(nieuwArticle.data.introduction)}</p>
                            <PrismicRichText field={nieuwArticle.data.body} />
                        </div> 
                    </article>

                    <hr />

                    {/* Related articles */}
                    <div className={styles.relatedArticles}>
                        <h4>gerelateerde artikelen</h4>

                        <div>
                            {nieuwArticle.data.relatedarticles.map((relatedArticle) => {                                     
                                return (
                                    <>
                                        <Link href={`/nieuw/${relatedArticle.articlelink.uid}`}>
                                            <article>
                                                <picture>
                                                    <PrismicNextImage field={relatedArticle.articlelink.data.featuredimage} />
                                                    <Label title={relatedArticle.articlelink.data.label[0].text} />
                                                </picture>

                                                <h5>{relatedArticle.articlelink.data.title[0].text}</h5>
                                                <PrismicRichText field={relatedArticle.articlelink.data.shortdescription} />
                                            </article>
                                        </Link>
                                    </>
                                )
                            })}
                        </div>
                    </div> 
                </section>
            </main>
        </>
    )
}

export async function getStaticProps({ params }: GetStaticPropsContext) {    
    const uid = params?.uid ? params.uid.toString() : "";
    const client = createClient();

    const nieuwArticle = await client.getByUID("article", uid, {
        fetchLinks: [
            "article.title, article.featuredimage, article.label, article.shortdescription, article.uid"
        ]
    });
    
    return {
        props: {
            nieuwArticle,
        },

        revalidate: 60,
    }
}

export async function getStaticPaths() {
    const client = createClient();

    const res = await client.getByType("article");

    const articleUids = res.results.map((result) => result.uid);

    const paths = articleUids.map((uid) => ({ params: { uid } }));

    return {
        paths,
        fallback: false,
    }
}

export default Page;
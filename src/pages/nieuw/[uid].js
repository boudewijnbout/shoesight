import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "../../../prismicio";
import { PrismicRichText } from "@prismicio/react";

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
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };

    // Format publish date to NL format
    const formattedPublishDate = date.toLocaleString('nl-NL', publishDateOptions);

    return (
        <>
            <Head>
                <title>{article.title[0].text}</title>
                <meta name="description" content={article.shortdescription[0].text} />
            </Head>

            <main>
                <section className={styles.nieuwDetail}>
                    <article>
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
                            <p className={styles.introduction}>{article.introduction[0].text}</p>
                            <PrismicRichText field={article.body} />
                        </div>
                    </article>

                    <hr />

                    <h4>gerelateerde artikelen</h4>
                </section>
            </main>
        </>
    )
}

export async function getStaticProps({ params }) {
    const { uid } = params;
    const client = createClient();
    const page = await client.getByUID("article", uid, {
        fetchLinks: [
            "article.title"
        ]
    });

    return {
        props: {
            page,
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
import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "../../../prismicio";
import { PrismicRichText } from "@prismicio/react";

// Components
import Label from "@/components/Label";

// Styles
import styles from "../../styles/pages/nieuwDetail.module.css";
import Head from "next/head";

const Page = ({ page }) => {
    const publishDate = page.data.publishdate;
    const date = new Date(publishDate);

    console.log(page.data.relatedarticles);

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
                <title>{page.data.title[0].text}</title>
                <meta name="description" content={page.data.shortdescription[0].text} />
            </Head>

            <main>
                <section className={styles.nieuwDetail}>
                    <article>
                        <h3>{page.data.title[0].text}</h3>

                        <div className={styles.publishInformation}>
                            publisher
                            <p>{formattedPublishDate}</p>
                        </div>

                        <picture>
                            <PrismicNextImage priority field={page.data.featuredimage} />
                            <Label title={page.data.label[0].text} />
                        </picture>

                        <div className={styles.nieuwDetailBody}>
                            <p className={styles.introduction}>{page.data.introduction[0].text}</p>
                            <PrismicRichText field={page.data.body} />
                        </div>
                    </article>

                    <hr />

                    <h4>gerelateerde artikelen</h4>

                    {page.data.relatedarticles.map((article) => {
                        console.log(article);

                        return (
                            <>
                                {article.articlelink.data.title[0].text}
                            </>
                        );
                    })}
                </section>
            </main>
        </>
    )
}

export async function getStaticProps({ previewData, params }) {
    const { uid } = params;
    const client = createClient({ previewData });
    const page = await client.getByUID("article", uid, {
        fetchLinks: [
            "article.title"
        ]
    });

    return {
        props: {
            page,
        }
    }
}

export async function getStaticPaths() {
    const client = createClient();

    const res = await client.getByType("article");
    const articleUids = res.results.map((result) => result.uid);

    const paths = articleUids.map((uid) => ({ params: { uid } }));

    return {
        paths,
        fallback: true,
    }
}

export default Page;
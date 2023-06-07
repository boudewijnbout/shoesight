import { SliceZone } from "@prismicio/react";
import { createClient } from "../../prismicio";
import { components } from "../slices";
import Head from "next/head";

const Page = ({ page, metaTitle, metaDescription }) => {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <main>
        <SliceZone slices={page.data.slices} components={components} />
      </main>
    </>
  )
};

export default Page;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const page = await client.getByUID("homepage", "homepage", {
    fetchLinks: [
      "article.label, article.featuredimage, article.title, article.shortdescription, article.uid",
    ],
  });

  return {
    props: {
      metaTitle: page.data.meta_title,
      metaDescription: page.data.meta_description,
      page,
    },

    revalidate: 60,
  };
}

import { PrismicRichText } from "@prismicio/react";
import { createClient } from "../../../prismicio";

const Page = ({ page }) => {

    return (
        <>
            <PrismicRichText field={page.data.title} />
        </>
    )
}

export async function getStaticProps({ previewData, params }) {
    const { uid } = params;
    const client = createClient({ previewData });
    const page = await client.getByUID('article', uid);

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
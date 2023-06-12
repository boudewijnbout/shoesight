import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

// Styles
import styles from "../../styles/slices/nieuwSlice.module.css";

// Components
import Label from "@/components/Label";
import Link from "next/link";

/**
 * @typedef {import("@prismicio/client").Content.NieuwSliceSlice} NieuwSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NieuwSliceSlice>} NieuwSliceProps
 * @param {NieuwSliceProps}
 */
const NieuwSlice = ({ slice }) => {
	const articles = slice.items.map((obj) => obj.articlelink.data);

	return (
		<section className={styles.nieuw}>
			<PrismicRichText field={slice.primary.title} />

			<ul>
				{articles.map((article) => {
					return (
						<li key={article.uid}>
							<Link href={`/nieuw/${article.uid}`}>
								<article>
									<div>
										<picture>
											<PrismicNextImage priority sizes="(max-width: 30rem) 100vw, (max-width: 75rem) 33vw, 33vw" field={article.featuredimage} />
										</picture>
										<Label title={article.label[0].text} />
									</div>
									<h4>{article.title[0].text}</h4>
									<PrismicRichText field={article.shortdescription} />
								</article>
							</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default NieuwSlice;

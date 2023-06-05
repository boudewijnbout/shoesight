import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

// Styles
import styles from "../../styles/slices/nieuwSlice.module.css";

// Components
import Label from "@/components/Label";

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

			<div>
				{articles.map((article) => {
					return (
						<>
							<article>
								<picture>
									<PrismicNextImage priority sizes="(max-width: 30rem) 100vw, (max-width: 75rem) 33vw, 33vw" field={article.featuredimage} />
									<Label title={article.label[0].text} />
								</picture>
								<h4>{article.title[0].text}</h4>
								<PrismicRichText field={article.shortdescription} />
							</article>
						</>
					);
				})}
			</div>
		</section>
	);
};

export default NieuwSlice;

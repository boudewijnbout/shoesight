import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import styles from "../../styles/slices/nieuwSlice.module.css";
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

			{/* Section title */}
			<PrismicRichText field={slice.primary.title} />

			<div>
				{articles.map((article) => {
					return (
						<>

							{/* Nieuw article */}
							<article>
								<picture>
									<PrismicNextImage priority sizes="(max-width: 30rem) 100vw, (max-width: 75rem) 33vw, 33vw" field={article.featuredimage} />
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

export default NieuwSlice;

import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import styles from "../../styles/slices/nieuwSlice.module.css";

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
									<PrismicNextImage field={article.featuredimage} />
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

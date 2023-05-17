import { PrismicNextImage } from "@prismicio/next";
import styles from "../styles/components/HighlightArticleLarge.module.css";

const HighlightArticleLarge = ({ imageUrl, label }) => {
    return (
        <>
            <article className={styles.highlightArticle}>
                <picture>
                    <PrismicNextImage field={imageUrl} />
                    <span className={styles.highlightArticleLabel}>{label}</span>
                </picture>
            </article>
        </>

    )
}

export default HighlightArticleLarge;
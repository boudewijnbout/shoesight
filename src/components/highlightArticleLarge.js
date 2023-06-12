import { PrismicNextImage } from "@prismicio/next";
import styles from "../styles/components/HighlightArticleLarge.module.css";

const HighlightArticleLarge = ({ imageUrl, label }) => {
    return (
        <>
            <div className={styles.highlightArticle}>
                <picture>
                    <PrismicNextImage field={imageUrl} />
                </picture>
                <span className={styles.highlightArticleLabel}>{label}</span>
            </div>
        </>

    )
}

export default HighlightArticleLarge;
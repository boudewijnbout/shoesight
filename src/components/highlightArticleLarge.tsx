import { PrismicNextImage } from "@prismicio/next";

// Styles
import styles from "@/styles/components/HighlightArticleLarge.module.css";

interface HighlightArticleLargeProps {
    imageUrl: string,
    label: string,
}

const HighlightArticleLarge = ({ imageUrl, label }: HighlightArticleLargeProps) => {
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
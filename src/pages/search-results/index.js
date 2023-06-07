import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "../../../prismicio";
import { PrismicRichText } from "@prismicio/react";
import Label from "@/components/Label";
import styles from "../../styles/pages/searchResults.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Page = ({ page }) => {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState([]);
  const { query } = router.query;
  const [activeFilters, setActiveFilters] = useState([]);
  const filters = ["trends", "brands", "shoe of the day", "icons"];

  useEffect(() => {
    const searchQuery = query.toLowerCase();

    const filtered = page.filter((article) => {
      const title = article.data.title[0].text.toLowerCase();
      return title.includes(searchQuery);
    });

    setFilteredData(filtered);
  }, [query, page]);

  const filterByLabel = (category) => {
    let updatedFilters = [...activeFilters];

    if (updatedFilters.includes(category)) {
      updatedFilters = updatedFilters.filter((filter) => filter !== category);
    } else {
      updatedFilters.push(category);
    }

    setActiveFilters(updatedFilters);
    applyFilters(updatedFilters, query);
  };

  const applyFilters = (filters, searchQuery) => {
    let filteredByLabels = page;

    if (filters.length > 0) {
      filteredByLabels = page.filter((article) =>
        article.data.label.some((label) =>
          filters.includes(label.text.toLowerCase())
        )
      );
    }

    const filteredBySearchQuery = filteredByLabels.filter((article) => {
      const title = article.data.title[0].text.toLowerCase();
      return title.includes(searchQuery);
    });

    setFilteredData(filteredBySearchQuery);
  };

  // const resetFilter = () => {
  //   setActiveFilters([]);
  //   const searchQuery = query.toLowerCase();
  //   const filtered = page.filter((article) => {
  //     const title = article.data.title[0].text.toLowerCase();
  //     return title.includes(searchQuery);
  //   });
  //   setFilteredData(filtered);
  // };

  return (
    <>
      <main>
        <section className={styles.searchResults}>
          <h3 className={styles.header}>
            ({filteredData.length}) Zoekresultaten voor {query}:
          </h3>

          <div className={styles.filterButtons}>
            <p>Label category</p>
            {/* <button onClick={resetFilter}>Alle artikelen</button> */}
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => filterByLabel(filter)}
                className={
                  activeFilters.includes(filter)
                    ? styles.active
                    : styles.categoryBtn
                }
              >
                {filter}
              </button>
            ))}
          </div>

          <div className={styles.searchResultContainer}>
            {filteredData.length === 0 ? (
              <p className={styles.noResults}>Geen artikelen gevonden.</p>
            ) : (
              filteredData.map((article) => {
                return (
                  <article key={article.id} className={styles.article}>
                    <picture>
                      <PrismicNextImage field={article.data.featuredimage} />
                      <Label title={article.data.label[0].text} />
                    </picture>
                    <div>
                      <PrismicRichText field={article.data.title} />
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });
  const page = await client.getAllByType("article");

  return {
    props: {
      page,
    },
  };
}

export default Page;

/**
 * @typedef {import("@prismicio/client").Content.HighlightsSliceSlice} HighlightsSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HighlightsSliceSlice>} HighlightsSliceProps
 * @param {HighlightsSliceProps}
 */
const HighlightsSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for highlights_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HighlightsSlice;

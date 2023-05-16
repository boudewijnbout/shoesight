/**
 * @typedef {import("@prismicio/client").Content.NieuwSliceSlice} NieuwSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NieuwSliceSlice>} NieuwSliceProps
 * @param {NieuwSliceProps}
 */
const NieuwSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nieuw_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default NieuwSlice;

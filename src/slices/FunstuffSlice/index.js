/**
 * @typedef {import("@prismicio/client").Content.FunstuffSliceSlice} FunstuffSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FunstuffSliceSlice>} FunstuffSliceProps
 * @param {FunstuffSliceProps}
 */
const FunstuffSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for funstuff_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FunstuffSlice;

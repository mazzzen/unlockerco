import { ImageFragment } from "../../generated/graphql";

interface IShrinkPhoto {
  photo: ImageFragment;
  maxWidth: number;
  maxHeight: number;
}

const shrinkPhoto = ({ photo, maxWidth, maxHeight }: IShrinkPhoto) => {
  if (photo?.format === "gif") {
    return { imageWidth: maxWidth, imageHeight: maxHeight };
  } else {
    const largerSide = Math.max(photo?.width || 0, photo?.height || 0);
    const smallerSide = Math.min(photo?.width || 0, photo?.height || 0);
    const ratio = smallerSide / largerSide;
    const shrinkImageHeight =
      largerSide === photo?.height ? maxHeight : maxHeight * ratio;
    const shrinkImageWidth =
      largerSide === photo?.width ? maxWidth : maxWidth * ratio;
    return {
      imageHeight: shrinkImageHeight,
      imageWidth: shrinkImageWidth,
    };
  }
};

export default shrinkPhoto;

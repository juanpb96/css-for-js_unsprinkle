export const generateImageSrcSet = (src) => {
  return (extension) => {
    return ["1x", "2x", "3x"].map(density => {
      if (density === "1x") {
        return src.replace(".jpg", `${extension} ${density}`);
      }
    
      return src.replace(".jpg", `@${density}${extension} ${density}`);
    });
  }
};
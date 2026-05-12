module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/modules/figures");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
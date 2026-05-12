module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/figures");
  eleventyConfig.addPassthroughCopy("src/applet");

  return {
    pathPrefix: "/2D_wec/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "static-root": "/" });
  eleventyConfig.addPassthroughCopy({ "static-last": "/static" });
  eleventyConfig.addPassthroughCopy("static");

  eleventyConfig.addShortcode("formatDate", function(date) { 
    return "" + date.toLocaleDateString(
      "en-US",
      { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    ) + "";
  });

  return {
    //htmlTemplateEngine: "njk",
    dir: {
      output: "dist",
    }
  }
};


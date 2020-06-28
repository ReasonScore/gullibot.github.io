const pluginRss = require("@11ty/eleventy-plugin-rss");

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

  eleventyConfig.addPlugin(pluginRss);
  
  return {
    //htmlTemplateEngine: "njk",
    dir: {
      output: "dist",
    }
  }
};


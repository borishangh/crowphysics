module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets')
    eleventyConfig.addPassthroughCopy('./src/style.css')

    eleventyConfig.addFilter('selectOnly', function (collection, tag) {
        return collection.filter(item => {
            if (item.data && item.data.tags) {
                return item.data.tags.includes(tag);
            }
            return false;
        });
    });

    eleventyConfig.addFilter('withTopic', function(collection, topicId) {
        return collection.filter(item => {
          if (item.data && item.data.topicId) {
            return item.data.topicId === topicId;
          }
          return false;
        });
      });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}
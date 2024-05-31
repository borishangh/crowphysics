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

    eleventyConfig.addFilter('hasId', function(collection, type, id) {
        return collection.filter(item => {
          if (type == 'topic'){
              if (item.data && item.data.topicId)
                  return item.data.topicId === id;
          }
          else if (type == 'page'){
            if (item.data && item.data.pageId)
                return item.data.pageId === id;
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
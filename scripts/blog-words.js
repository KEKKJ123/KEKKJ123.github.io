hexo.extend.filter.register('theme_inject', function(injects) {
    injects.bodyEnd.file('showword', 'source/scripts/show_wordcount_total.js', { key: 'value' }, -1);
  });
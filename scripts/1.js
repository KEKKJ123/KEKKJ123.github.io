hexo.extend.filter.register('theme_inject', function(injects) {
    injects.bodyEnd.file('showword', 'source/_inject/show_wordcount_total.ejs', { key: 'value' }, -1);
  });
<%# 处理每篇文章的阅读次数 #%>
<% if ( theme.web_analytics.firebase.show_detail ) { %>
  <div class="mt-1">
    <span id="firebase-page-views-container" class="post-meta" >
      <i class="iconfont icon-eye" aria-hidden="true"></i>
      <span id="detail_cnt">NA</span>
    </span>
  </div>
<% } %>
<script type="text/javascript">
document.getElementById("g-post-count-id").innerHTML = "小世界总字数<%= wordtotal(site) %>";
</script>
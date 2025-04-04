!(function() {
    /** 计时起始时间，自行修改 **/
    var Birth_Time = new Date("2024/08/12 23:15:44");
    // by https://hexo.fluid-dev.com/posts/fluid-footer-custom/index.html
    function update() {
      var now = new Date();
      now.setTime(now.getTime()+250);
      days = (now - Birth_Time) / 1000 / 60 / 60 / 24;
      dnum = Math.floor(days);
      hours = (now - Birth_Time) / 1000 / 60 / 60 - (24 * dnum);
      hnum = Math.floor(hours);
      if(String(hnum).length === 1 ){
        hnum = "0" + hnum;
      }
      minutes = (now - Birth_Time) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
      mnum = Math.floor(minutes);
      if(String(mnum).length === 1 ){
        mnum = "0" + mnum;
      }
      seconds = (now - Birth_Time) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
      snum = Math.round(seconds);
      if(String(snum).length === 1 ){
        snum = "0" + snum;
      }
      document.getElementById("timeDate").innerHTML = "小世界已经运行了&nbsp" + dnum + "&nbsp天";
      document.getElementById("times").innerHTML = hnum + "&nbsp小时&nbsp" + mnum + "&nbsp分&nbsp" + snum + "&nbsp秒";
    }
  
    update();
    setInterval(update, 1000);
  })();
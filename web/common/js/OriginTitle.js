"use strict";var OriginTitle=document.title;var titleTime;document.addEventListener('visibilitychange',function(){if(document.hidden){document.title='👀跑哪里去了~';clearTimeout(titleTime)}else{document.title='🐖抓到你啦～';titleTime=setTimeout(function(){document.title=OriginTitle},2000)}});

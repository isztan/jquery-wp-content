/*******************************************************************************/
/*
 * respond.js - A small and fast polyfill for min/max-width CSS3 Media Queries
 * Copyright 2011, Scott Jehl, scottjehl.com
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * Usage: Check out the readme file or github.com/scottjehl/respond
 */
/*******************************************************************************/
(function(d,g){d.respond={};respond.update=function(){};respond.mediaQueriesSupported=g;if(g){return}var s=d.document,q=s.documentElement,h=[],j=[],o=[],n={},f=30,e=s.getElementsByTagName("head")[0]||q,b=e.getElementsByTagName("link"),a=function(){var y=s.styleSheets,u=y.length;for(var x=0;x<u;x++){var w=y[x],v=w.href;if(!!v&&!n[v]){if(!/^([a-zA-Z]+?:(\/\/)?(www\.)?)/.test(v)||v.replace(RegExp.$1,"").split("/")[0]===d.location.host){var t=v;m(v,function(z){l(z,t);n[t]=true})}else{n[v]=true}}}},l=function(B,t){var z=B.match(/@media ([^\{]+)\{([\S\s]+?)(?=\}\/\*\/mediaquery\*\/)/gmi),C=z&&z.length||0,t=t.substring(0,t.lastIndexOf("/"));if(t.length){t+="/"}for(var w=0;w<C;w++){var x=z[w].match(/@media ([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,u=x.split(","),A=u.length;j.push(RegExp.$2&&RegExp.$2.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3"));for(var v=0;v<A;v++){var y=u[v];h.push({media:y.match(/(only\s+)?([a-zA-Z]+)(\sand)?/)&&RegExp.$2,rules:j.length-1,minw:y.match(/\(min\-width:\s?(\s?[0-9]+)px\s?\)/)&&parseFloat(RegExp.$1),maxw:y.match(/\(max\-width:\s?(\s?[0-9]+)px\s?\)/)&&parseFloat(RegExp.$1)})}}i()},k,p,i=function(C){var t="clientWidth",v=q[t],B=s.compatMode==="CSS1Compat"&&v||s.body[t]||v,x={},A=s.createDocumentFragment(),z=b[b.length-1],u=(new Date()).getTime();if(C&&k&&u-k<f){clearTimeout(p);p=setTimeout(i,f);return}else{k=u}for(var w in h){var D=h[w];if(!D.minw&&!D.maxw||(!D.minw||D.minw&&B>=D.minw)&&(!D.maxw||D.maxw&&B<=D.maxw)){if(!x[D.media]){x[D.media]=[]}x[D.media].push(j[D.rules])}}for(var w in o){if(o[w]&&o[w].parentNode===e){e.removeChild(o[w])}}for(var w in x){var E=s.createElement("style"),y=x[w].join("\n");E.type="text/css";E.media=w;if(E.styleSheet){E.styleSheet.cssText=y}else{E.appendChild(s.createTextNode(y))}A.appendChild(E);o.push(E)}e.insertBefore(A,z.nextSibling)},m=function(t,v){var u=c();if(!u){return}u.open("GET",t,true);u.onreadystatechange=function(){if(u.readyState!=4||u.status!=200&&u.status!=304){return}v(u.responseText)};if(u.readyState==4){return}u.send()},c=(function(){var t=false,u=[function(){return new ActiveXObject("Microsoft.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new XMLHttpRequest()}],w=u.length;while(w--){try{t=u[w]()}catch(v){continue}break}return function(){return t}})();a();respond.update=a;function r(){i(true)}if(d.addEventListener){d.addEventListener("resize",r,false)}else{if(d.attachEvent){d.attachEvent("onresize",r)}}})(this,(function(f){var g=(function(k){var i=3,l=document.createElement("div"),j=l.getElementsByTagName("i");while(l.innerHTML="<!--[if gt IE "+(++i)+"]><i></i><![endif]-->",j[0]){}return i>4?i:k}());if(f.matchMedia||g&&g>=9){return true}if(g&&g<=8){return false}var e=f.document,a=e.documentElement,b=e.createElement("body"),h=e.createElement("div"),d=e.createElement("style"),c="@media only all { #qtest { position: absolute; } }";h.setAttribute("id","qtest");d.type="text/css";b.appendChild(h);if(d.styleSheet){d.styleSheet.cssText=c}else{d.appendChild(e.createTextNode(c))}a.insertBefore(b,a.firstChild);a.insertBefore(d,b);support=(f.getComputedStyle?f.getComputedStyle(h,null):h.currentStyle)["position"]=="absolute";a.removeChild(b);a.removeChild(d);return support})(this));


/*
 * LIVE UPDATE
 * for filtering lists of methods from the search field on api sites
 */
(function($) {

  $.fn.liveUpdate = function(list) {
    list = $(list);

    var filter = function() {
      var term = $.trim( $(this).val().toLowerCase() ), scores = [];

      if ( !term ) {
        rows.show().addClass("keynav withoutfocus");
      } else {
        rows.hide().removeClass("keynav withfocus withoutfocus");

        cache.each(function(i){
          if ( this.indexOf( term ) > -1 ) {
            $(rows[i]).show().addClass("keynav withoutfocus");
          }
        });
      }
    };

    if ( list.length ) {
      var rows = list.children(),
        cache = rows.map(function(){
          return $(this).text().toLowerCase();
        });

      this
        .keyup(filter); //.keyup();
    }

    return this;
  };
})(jQuery);

/*
 CLEditor WYSIWYG HTML Editor v1.3.0
 http://premiumsoftware.net/cleditor
 requires jQuery v1.4.2 or later

 Copyright 2010, Chris Landowski, Premium Software, LLC
 Dual licensed under the MIT or GPL Version 2 licenses.
*/
(function(e){function t(t){var n=this,r=t.target,i=e.data(r,C),s=X[i],o=s.popupName,u=z[o];if(!n.disabled&&e(r).attr(O)!=O){var l={editor:n,button:r,buttonName:i,popup:u,popupName:o,command:s.command,useCSS:n.options.useCSS};if(s.buttonClick&&s.buttonClick(t,l)===!1)return!1;if(i=="source")E(n)?(delete n.range,n.$area.hide(),n.$frame.show(),r.title=s.title):(n.$frame.hide(),n.$area.show(),r.title="Show Rich Text"),setTimeout(function(){m(n)},100);else if(!E(n)){if(o){var c=e(u);if(o=="url"){if(i=="link"&&y(n)==="")return b(n,"A selection is required when inserting a link.",r),!1;c.children(":button").unbind(A).bind(A,function(){var t=c.find(":text"),r=e.trim(t.val());r!==""&&a(n,l.command,r,null,l.button),t.val("http://"),p(),f(n)})}else o=="pastetext"&&c.children(":button").unbind(A).bind(A,function(){var e=c.find("textarea"),t=e.val().replace(/\n/g,"<br />");t!==""&&a(n,l.command,t,null,l.button),e.val(""),p(),f(n)});if(r!==e.data(u,N))return w(n,u,r),!1;return}if(i=="print")n.$frame[0].contentWindow.print();else if(!a(n,l.command,l.value,l.useCSS,r))return!1}f(n)}}function n(t){t=e(t.target).closest("div"),t.css(T,t.data(C)?"#FFF":"#FFC")}function r(t){e(t.target).closest("div").css(T,"transparent")}function i(t){var n=t.data.popup,r=t.target;if(n!==z.msg&&!e(n).hasClass(F)){var i=e.data(n,N),s=e.data(i,C),o=X[s],u=o.command,l,c=this.options.useCSS;s=="font"?l=r.style.fontFamily.replace(/"/g,""):s=="size"?(r.tagName=="DIV"&&(r=r.children[0]),l=r.innerHTML):s=="style"?l="<"+r.tagName+">":s=="color"?l=h(r.style.backgroundColor):s=="highlight"&&(l=h(r.style.backgroundColor),q?u="backcolor":c=!0),n={editor:this,button:i,buttonName:s,popup:n,popupName:o.popupName,command:u,value:l,useCSS:c};if(!o.popupClick||o.popupClick(t,n)!==!1){if(n.command&&!a(this,n.command,n.value,n.useCSS,i))return!1;p(),f(this)}}}function s(e){for(var t=1,n=0,r=0;r<e.length;++r)t=(t+e.charCodeAt(r))%65521,n=(n+t)%65521;return n<<16|t}function o(t,i,s,o,u){if(z[t])return z[t];var a=e(M).hide().addClass(H).appendTo("body");return o?a.html(o):t=="color"?(i=i.colors.split(" "),i.length<10&&a.width("auto"),e.each(i,function(t,n){e(M).appendTo(a).css(T,"#"+n)}),s=j):t=="font"?e.each(i.fonts.split(","),function(t,n){e(M).appendTo(a).css("fontFamily",n).html(n)}):t=="size"?e.each(i.sizes.split(","),function(t,n){e(M).appendTo(a).html("<font size="+n+">"+n+"</font>")}):t=="style"?e.each(i.styles,function(t,n){e(M).appendTo(a).html(n[1]+n[0]+n[1].replace("<","</"))}):t=="url"?(a.html('Enter URL:<br><input type=text value="http://" size=35><br><input type=button value="Submit">'),s=F):t=="pastetext"&&(a.html("Paste your content here and click submit.<br /><textarea cols=40 rows=3></textarea><br /><input type=button value=Submit>"),s=F),!s&&!o&&(s=B),a.addClass(s),q&&a.attr(_,"on").find("div,font,p,h1,h2,h3,h4,h5,h6").attr(_,"on"),(a.hasClass(B)||u===!0)&&a.children().hover(n,r),z[t]=a[0],a[0]}function u(e,t){t?(e.$area.attr(O,O),e.disabled=!0):(e.$area.removeAttr(O),delete e.disabled);try{q?e.doc.body.contentEditable=!t:e.doc.designMode=t?"off":"on"}catch(n){}m(e)}function a(e,t,n,r,i){g(e);if(!q){if(r===undefined||r===null)r=e.options.useCSS;e.doc.execCommand("styleWithCSS",0,r.toString())}r=!0;var s;if(q&&t.toLowerCase()=="inserthtml")l(e).pasteHTML(n);else{try{r=e.doc.execCommand(t,0,n||null)}catch(o){s=o.description,r=!1}r||("cutcopypaste".indexOf(t)>-1?b(e,"For security reasons, your browser does not support the "+t+" command. Try using the keyboard shortcut or context menu instead.",i):b(e,s?s:"Error executing the "+t+" command.",i))}return m(e),r}function f(e){setTimeout(function(){E(e)?e.$area.focus():e.$frame[0].contentWindow.focus(),m(e)},0)}function l(e){return q?c(e).createRange():c(e).getRangeAt(0)}function c(e){return q?e.doc.selection:e.$frame[0].contentWindow.getSelection()}function h(e){var t=/rgba?\((\d+), (\d+), (\d+)/.exec(e),n=e.split("");if(t)for(e=(t[1]<<16|t[2]<<8|t[3]).toString(16);e.length<6;)e="0"+e;return"#"+(e.length==6?e:n[1]+n[1]+n[2]+n[2]+n[3]+n[3])}function p(){e.each(z,function(t,n){e(n).hide().unbind(A).removeData(N)})}function d(){var t=e("link[href$='jquery.cleditor.css']").attr("href");return t.substr(0,t.length-19)+"images/"}function v(t){var n=t.$main,r=t.options;t.$frame&&t.$frame.remove();var i=t.$frame=e('<iframe frameborder="0" src="javascript:true;">').hide().appendTo(n),s=i[0].contentWindow,o=t.doc=s.document,a=e(o);o.open(),o.write(r.docType+"<html>"+(r.docCSSFile===""?"":'<head><link rel="stylesheet" type="text/css" href="'+r.docCSSFile+'" /></head>')+'<body style="'+r.bodyStyle+'"></body></html>'),o.close(),q&&a.click(function(){f(t)}),S(t),q&&(a.bind("beforedeactivate beforeactivate selectionchange keypress",function(e){if(e.type=="beforedeactivate")t.inactive=!0;else if(e.type=="beforeactivate")!t.inactive&&t.range&&t.range.length>1&&t.range.shift(),delete t.inactive;else if(!t.inactive){t.range||(t.range=[]);for(t.range.unshift(l(t));t.range.length>2;)t.range.pop()}}),i.focus(function(){g(t)})),(e.browser.mozilla?a:e(s)).blur(function(){x(t,!0)}),a.click(p).bind("keyup mouseup",function(){m(t)}),U?t.$area.show():i.show(),e(function(){var e=t.$toolbar,s=e.children("div:last"),o=n.width();s=s.offset().top+s.outerHeight()-e.offset().top+1,e.height(s),s=(/%/.test(""+r.height)?n.height():parseInt(r.height))-s,i.width(o).height(s),t.$area.width(o).height(R?s-2:s),u(t,t.disabled),m(t)})}function m(t){!U&&e.browser.webkit&&!t.focused&&(t.$frame[0].contentWindow.focus(),window.focus(),t.focused=!0);var n=t.doc;q&&(n=l(t));var r=E(t);e.each(t.$toolbar.find("."+D),function(i,s){var o=e(s),u=e.cleditor.buttons[e.data(s,C)],a=u.command,f=!0;if(t.disabled)f=!1;else if(u.getEnabled)f=u.getEnabled({editor:t,button:s,buttonName:u.name,popup:z[u.popupName],popupName:u.popupName,command:u.command,useCSS:t.options.useCSS}),f===undefined&&(f=!0);else if((r||U)&&u.name!="source"||q&&(a=="undo"||a=="redo"))f=!1;else if(a&&a!="print"){q&&a=="hilitecolor"&&(a="backcolor");if(!q||a!="inserthtml")try{f=n.queryCommandEnabled(a)}catch(l){f=!1}}f?(o.removeClass(P),o.removeAttr(O)):(o.addClass(P),o.attr(O,O))})}function g(e){q&&e.range&&e.range[0].select()}function y(e){return g(e),q?l(e).text:c(e).toString()}function b(e,t,n){var r=o("msg",e.options,I);r.innerHTML=t,w(e,r,n)}function w(t,n,r){var s,o,u=e(n);if(r){var a=e(r);s=a.offset(),o=--s.left,s=s.top+a.height()}else a=t.$toolbar,s=a.offset(),o=Math.floor((a.width()-u.width())/2)+s.left,s=s.top+a.height()-2;p(),u.css({left:o,top:s}).show(),r&&(e.data(n,N,r),u.bind(A,{popup:n},e.proxy(i,t))),setTimeout(function(){u.find(":text,textarea").eq(0).focus().select()},100)}function E(e){return e.$area.is(":visible")}function S(t,n){var r=t.$area.val(),i=t.options,o=i.updateFrame,u=e(t.doc.body);if(o){var a=s(r);if(n&&t.areaChecksum==a)return;t.areaChecksum=a}r=o?o(r):r,r=r.replace(/<(?=\/?script)/ig,"&lt;"),i.updateTextArea&&(t.frameChecksum=s(r)),r!=u.html()&&(u.html(r),e(t).triggerHandler(k))}function x(t,n){var r=e(t.doc.body).html(),i=t.options,o=i.updateTextArea,u=t.$area;if(o){var a=s(r);if(n&&t.frameChecksum==a)return;t.frameChecksum=a}r=o?o(r):r,i.updateFrame&&(t.areaChecksum=s(r)),r!=u.val()&&(u.val(r),e(t).triggerHandler(k))}e.cleditor={defaultOptions:{width:500,height:250,controls:"bold italic underline strikethrough subscript superscript | font size style | color highlight removeformat | bullets numbering | outdent indent | alignleft center alignright justify | undo redo | rule image link unlink | cut copy paste pastetext | print source",colors:"FFF FCC FC9 FF9 FFC 9F9 9FF CFF CCF FCF CCC F66 F96 FF6 FF3 6F9 3FF 6FF 99F F9F BBB F00 F90 FC6 FF0 3F3 6CC 3CF 66C C6C 999 C00 F60 FC3 FC0 3C0 0CC 36F 63F C3C 666 900 C60 C93 990 090 399 33F 60C 939 333 600 930 963 660 060 366 009 339 636 000 300 630 633 330 030 033 006 309 303",fonts:"Arial,Arial Black,Comic Sans MS,Courier New,Narrow,Garamond,Georgia,Impact,Sans Serif,Serif,Tahoma,Trebuchet MS,Verdana",sizes:"1,2,3,4,5,6,7",styles:[["Paragraph","<p>"],["Header 1","<h1>"],["Header 2","<h2>"],["Header 3","<h3>"],["Header 4","<h4>"],["Header 5","<h5>"],["Header 6","<h6>"]],useCSS:!1,docType:'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">',docCSSFile:"",bodyStyle:"margin:4px; font:10pt Arial,Verdana; cursor:text"},buttons:{init:"bold,,|italic,,|underline,,|strikethrough,,|subscript,,|superscript,,|font,,fontname,|size,Font Size,fontsize,|style,,formatblock,|color,Font Color,forecolor,|highlight,Text Highlight Color,hilitecolor,color|removeformat,Remove Formatting,|bullets,,insertunorderedlist|numbering,,insertorderedlist|outdent,,|indent,,|alignleft,Align Text Left,justifyleft|center,,justifycenter|alignright,Align Text Right,justifyright|justify,,justifyfull|undo,,|redo,,|rule,Insert Horizontal Rule,inserthorizontalrule|image,Insert Image,insertimage,url|link,Insert Hyperlink,createlink,url|unlink,Remove Hyperlink,|cut,,|copy,,|paste,,|pastetext,Paste as Text,inserthtml,|print,,|source,Show Source"},imagesPath:function(){return d()}},e.fn.cleditor=function(t){var n=e([]);return this.each(function(r,i){if(i.tagName=="TEXTAREA"){var s=e.data(i,L);s||(s=new cleditor(i,t)),n=n.add(s)}}),n};var T="backgroundColor",N="button",C="buttonName",k="change",L="cleditor",A="click",O="disabled",M="<div>",_="unselectable",D="cleditorButton",P="cleditorDisabled",H="cleditorPopup",B="cleditorList",j="cleditorColor",F="cleditorPrompt",I="cleditorMsg",q=e.browser.msie,R=/msie\s6/i.test(navigator.userAgent),U=/iphone|ipad|ipod/i.test(navigator.userAgent),z={},W,X=e.cleditor.buttons;e.each(X.init.split("|"),function(e,t){var n=t.split(","),r=n[0];X[r]={stripIndex:e,name:r,title:n[1]===""?r.charAt(0).toUpperCase()+r.substr(1):n[1],command:n[2]===""?r:n[2],popupName:n[3]===""?r:n[3]}}),delete X.init,cleditor=function(i,s){var u=this;u.options=s=e.extend({},e.cleditor.defaultOptions,s);var a=u.$area=e(i).hide().data(L,u).blur(function(){S(u,!0)}),f=u.$main=e(M).addClass("cleditorMain").width(s.width).height(s.height),l=u.$toolbar=e(M).addClass("cleditorToolbar").appendTo(f),c=e(M).addClass("cleditorGroup").appendTo(l);e.each(s.controls.split(" "),function(i,a){if(a==="")return!0;if(a=="|")e(M).addClass("cleditorDivider").appendTo(c),c=e(M).addClass("cleditorGroup").appendTo(l);else{var f=X[a],h=e(M).data(C,f.name).addClass(D).attr("title",f.title).bind(A,e.proxy(t,u)).appendTo(c).hover(n,r),p={};f.css?p=f.css:f.image&&(p.backgroundImage="url("+d()+f.image+")"),f.stripIndex&&(p.backgroundPosition=f.stripIndex*-24),h.css(p),q&&h.attr(_,"on"),f.popupName&&o(f.popupName,s,f.popupClass,f.popupContent,f.popupHover)}}),f.insertBefore(a).append(a),W||(e(document).click(function(t){t=e(t.target),t.add(t.parents()).is("."+F)||p()}),W=!0),/auto|%/.test(""+s.width+s.height)&&e(window).resize(function(){v(u)}),v(u)};var V=cleditor.prototype;e.each([["clear",function(e){e.$area.val(""),S(e)}],["disable",u],["execCommand",a],["focus",f],["hidePopups",p],["sourceMode",E,!0],["refresh",v],["select",function(e){setTimeout(function(){E(e)?e.$area.select():a(e,"selectall")},0)}],["selectedHTML",function(t){g(t),t=l(t);if(q)return t.htmlText;var n=e("<layer>")[0];return n.appendChild(t.cloneContents()),n.innerHTML},!0],["selectedText",y,!0],["showMessage",b],["updateFrame",S],["updateTextArea",x]],function(e,t){V[t[0]]=function(){for(var e=[this],n=0;n<arguments.length;n++)e.push(arguments[n]);return e=t[1].apply(this,e),t[2]?e:this}}),V.change=function(t){var n=e(this);return t?n.bind(k,t):n.trigger(k)}})(jQuery);
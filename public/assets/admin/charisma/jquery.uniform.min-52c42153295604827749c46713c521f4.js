(function(e){e.uniform={options:{selectClass:"selector",radioClass:"radio",checkboxClass:"checker",fileClass:"uploader",filenameClass:"filename",fileBtnClass:"action",fileDefaultText:"No file selected",fileBtnText:"Choose File",checkedClass:"checked",focusClass:"focus",disabledClass:"disabled",buttonClass:"button",activeClass:"active",hoverClass:"hover",useID:!0,idPrefix:"uniform",resetSelector:!1,autoHide:!0},elements:[]},e.browser.msie&&e.browser.version<7?e.support.selectOpacity=!1:e.support.selectOpacity=!0,e.fn.uniform=function(t){function r(t){$el=e(t),$el.addClass($el.attr("type")),c(t)}function i(t){e(t).addClass("uniform"),c(t)}function s(n){var r=e(n),i=e("<div>"),s=e("<span>");i.addClass(t.buttonClass),t.useID&&r.attr("id")!=""&&i.attr("id",t.idPrefix+"-"+r.attr("id"));var o;if(r.is("a")||r.is("button"))o=r.text();else if(r.is(":submit")||r.is(":reset")||r.is("input[type=button]"))o=r.attr("value");o=o==""?r.is(":reset")?"Reset":"Submit":o,s.html(o),r.css("opacity",0),r.wrap(i),r.wrap(s),i=r.closest("div"),s=r.closest("span"),r.is(":disabled")&&i.addClass(t.disabledClass),i.bind({"mouseenter.uniform":function(){i.addClass(t.hoverClass)},"mouseleave.uniform":function(){i.removeClass(t.hoverClass),i.removeClass(t.activeClass)},"mousedown.uniform touchbegin.uniform":function(){i.addClass(t.activeClass)},"mouseup.uniform touchend.uniform":function(){i.removeClass(t.activeClass)},"click.uniform touchend.uniform":function(t){if(e(t.target).is("span")||e(t.target).is("div"))if(n[0].dispatchEvent){var r=document.createEvent("MouseEvents");r.initEvent("click",!0,!0),n[0].dispatchEvent(r)}else n[0].click()}}),n.bind({"focus.uniform":function(){i.addClass(t.focusClass)},"blur.uniform":function(){i.removeClass(t.focusClass)}}),e.uniform.noSelect(i),c(n)}function o(n){var r=e(n),i=e("<div />"),s=e("<span />");!r.css("display")=="none"&&t.autoHide&&i.hide(),i.addClass(t.selectClass),t.useID&&n.attr("id")!=""&&i.attr("id",t.idPrefix+"-"+n.attr("id"));var o=n.find(":selected:first");o.length==0&&(o=n.find("option:first")),s.html(o.html()),n.css("opacity",0),n.wrap(i),n.before(s),i=n.parent("div"),s=n.siblings("span"),n.bind({"change.uniform":function(){s.text(n.find(":selected").html()),i.removeClass(t.activeClass)},"focus.uniform":function(){i.addClass(t.focusClass)},"blur.uniform":function(){i.removeClass(t.focusClass),i.removeClass(t.activeClass)},"mousedown.uniform touchbegin.uniform":function(){i.addClass(t.activeClass)},"mouseup.uniform touchend.uniform":function(){i.removeClass(t.activeClass)},"click.uniform touchend.uniform":function(){i.removeClass(t.activeClass)},"mouseenter.uniform":function(){i.addClass(t.hoverClass)},"mouseleave.uniform":function(){i.removeClass(t.hoverClass),i.removeClass(t.activeClass)},"keyup.uniform":function(){s.text(n.find(":selected").html())}}),e(n).attr("disabled")&&i.addClass(t.disabledClass),e.uniform.noSelect(s),c(n)}function u(n){var r=e(n),i=e("<div />"),s=e("<span />");!r.css("display")=="none"&&t.autoHide&&i.hide(),i.addClass(t.checkboxClass),t.useID&&n.attr("id")!=""&&i.attr("id",t.idPrefix+"-"+n.attr("id")),e(n).wrap(i),e(n).wrap(s),s=n.parent(),i=s.parent(),e(n).css("opacity",0).bind({"focus.uniform":function(){i.addClass(t.focusClass)},"blur.uniform":function(){i.removeClass(t.focusClass)},"click.uniform touchend.uniform":function(){e(n).attr("checked")?s.addClass(t.checkedClass):s.removeClass(t.checkedClass)},"mousedown.uniform touchbegin.uniform":function(){i.addClass(t.activeClass)},"mouseup.uniform touchend.uniform":function(){i.removeClass(t.activeClass)},"mouseenter.uniform":function(){i.addClass(t.hoverClass)},"mouseleave.uniform":function(){i.removeClass(t.hoverClass),i.removeClass(t.activeClass)}}),e(n).attr("checked")&&s.addClass(t.checkedClass),e(n).attr("disabled")&&i.addClass(t.disabledClass),c(n)}function f(n){var r=e(n),i=e("<div />"),s=e("<span />");!r.css("display")=="none"&&t.autoHide&&i.hide(),i.addClass(t.radioClass),t.useID&&n.attr("id")!=""&&i.attr("id",t.idPrefix+"-"+n.attr("id")),e(n).wrap(i),e(n).wrap(s),s=n.parent(),i=s.parent(),e(n).css("opacity",0).bind({"focus.uniform":function(){i.addClass(t.focusClass)},"blur.uniform":function(){i.removeClass(t.focusClass)},"click.uniform touchend.uniform":function(){if(!e(n).attr("checked"))s.removeClass(t.checkedClass);else{var r=t.radioClass.split(" ")[0];e("."+r+" span."+t.checkedClass+":has([name='"+e(n).attr("name")+"'])").removeClass(t.checkedClass),s.addClass(t.checkedClass)}},"mousedown.uniform touchend.uniform":function(){e(n).is(":disabled")||i.addClass(t.activeClass)},"mouseup.uniform touchbegin.uniform":function(){i.removeClass(t.activeClass)},"mouseenter.uniform touchend.uniform":function(){i.addClass(t.hoverClass)},"mouseleave.uniform":function(){i.removeClass(t.hoverClass),i.removeClass(t.activeClass)}}),e(n).attr("checked")&&s.addClass(t.checkedClass),e(n).attr("disabled")&&i.addClass(t.disabledClass),c(n)}function l(n){var r=e(n),i=e("<div />"),s=e("<span>"+t.fileDefaultText+"</span>"),o=e("<span>"+t.fileBtnText+"</span>");!r.css("display")=="none"&&t.autoHide&&i.hide(),i.addClass(t.fileClass),s.addClass(t.filenameClass),o.addClass(t.fileBtnClass),t.useID&&r.attr("id")!=""&&i.attr("id",t.idPrefix+"-"+r.attr("id")),r.wrap(i),r.after(o),r.after(s),i=r.closest("div"),s=r.siblings("."+t.filenameClass),o=r.siblings("."+t.fileBtnClass);if(!r.attr("size")){var u=i.width();r.attr("size",u/10)}var f=function(){var e=r.val();e===""?e=t.fileDefaultText:(e=e.split(/[\/\\]+/),e=e[e.length-1]),s.text(e)};f(),r.css("opacity",0).bind({"focus.uniform":function(){i.addClass(t.focusClass)},"blur.uniform":function(){i.removeClass(t.focusClass)},"mousedown.uniform":function(){e(n).is(":disabled")||i.addClass(t.activeClass)},"mouseup.uniform":function(){i.removeClass(t.activeClass)},"mouseenter.uniform":function(){i.addClass(t.hoverClass)},"mouseleave.uniform":function(){i.removeClass(t.hoverClass),i.removeClass(t.activeClass)}}),e.browser.msie?r.bind("click.uniform.ie7",function(){setTimeout(f,0)}):r.bind("change.uniform",f),r.attr("disabled")&&i.addClass(t.disabledClass),e.uniform.noSelect(s),e.uniform.noSelect(o),c(n)}function c(t){t=e(t).get(),t.length>1?e.each(t,function(t,n){e.uniform.elements.push(n)}):e.uniform.elements.push(t)}t=e.extend(e.uniform.options,t);var n=this;return t.resetSelector!=0&&e(t.resetSelector).mouseup(function(){function t(){e.uniform.update(n)}setTimeout(t,10)}),e.uniform.restore=function(t){t==undefined&&(t=e(e.uniform.elements)),e(t).each(function(){e(this).is(":checkbox")?e(this).unwrap().unwrap():e(this).is("select")?(e(this).siblings("span").remove(),e(this).unwrap()):e(this).is(":radio")?e(this).unwrap().unwrap():e(this).is(":file")?(e(this).siblings("span").remove(),e(this).unwrap()):e(this).is("button, :submit, :reset, a, input[type='button']")&&e(this).unwrap().unwrap(),e(this).unbind(".uniform"),e(this).css("opacity","1");var n=e.inArray(e(t),e.uniform.elements);e.uniform.elements.splice(n,1)})},e.uniform.noSelect=function(t){function n(){return!1}e(t).each(function(){this.onselectstart=this.ondragstart=n,e(this).mousedown(n).css({MozUserSelect:"none"})})},e.uniform.update=function(n){n==undefined&&(n=e(e.uniform.elements)),n=e(n),n.each(function(){var r=e(this);if(r.is("select")){var i=r.siblings("span"),s=r.parent("div");s.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass),i.html(r.find(":selected").html()),r.is(":disabled")?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)}else if(r.is(":checkbox")){var i=r.closest("span"),s=r.closest("div");s.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass),i.removeClass(t.checkedClass),r.is(":checked")&&i.addClass(t.checkedClass),r.is(":disabled")?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)}else if(r.is(":radio")){var i=r.closest("span"),s=r.closest("div");s.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass),i.removeClass(t.checkedClass),r.is(":checked")&&i.addClass(t.checkedClass),r.is(":disabled")?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)}else if(r.is(":file")){var s=r.parent("div"),o=r.siblings(t.filenameClass);btnTag=r.siblings(t.fileBtnClass),s.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass),o.text(r.val()),r.is(":disabled")?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)}else if(r.is(":submit")||r.is(":reset")||r.is("button")||r.is("a")||n.is("input[type=button]")){var s=r.closest("div");s.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass),r.is(":disabled")?s.addClass(t.disabledClass):s.removeClass(t.disabledClass)}})},this.each(function(){if(e.support.selectOpacity){var t=e(this);t.is("select")?t.attr("multiple")!=1&&(t.attr("size")==undefined||t.attr("size")<=1)&&o(t):t.is(":checkbox")?u(t):t.is(":radio")?f(t):t.is(":file")?l(t):t.is(":text, :password, input[type='email']")?r(t):t.is("textarea")?i(t):(t.is("a")||t.is(":submit")||t.is(":reset")||t.is("button")||t.is("input[type=button]"))&&s(t)}})}})(jQuery);
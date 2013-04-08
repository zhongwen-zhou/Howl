/**
 * bootstrap-toggle.js v1.0
 * http://github.com/Nijikokun/bootstrap-toggle/
 * --
 * http://twitter.com/nijikokun
 * Copyright 2012 Nijiko Yonskai, Goodybag Inc
 * --
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(e){var t=function(t,n){var r=this;this.$element=e(t),this.$checkbox=this.$element.children(".checkbox"),this.options=e.extend({},e.fn.toggle.defaults,n),this.options.text.enabled&&this.$element.attr("data-enabled",this.options.text.enabled),this.options.text.disabled&&this.$element.attr("data-disabled",this.options.text.disabled),this.setState(this.$checkbox.is(":checked")),this.$element.click(function(e){r.options.onClick&&r.options.onClick(e,r.$checkbox.is(":checked")),r.toggle()})};t.prototype.setState=function(e){this.$checkbox.attr("checked",e),e?(this.$element.removeClass("disabled"),this.options.style.disabled&&this.$element.removeClass("disabled-"+this.options.style.disabled),this.options.style.enabled&&this.$element.addClass(this.options.style.enabled)):(this.$element.addClass("disabled"),this.options.style.enabled&&this.$element.removeClass(this.options.style.enabled),this.options.style.disabled&&this.$element.addClass("disabled-"+this.options.style.disabled))},t.prototype.on=function(){this.setState(!0)},t.prototype.off=function(){this.setState(!1)},t.prototype.toggle=function(){var e=this.$checkbox.is(":checked");this.setState(!e)},e.fn.toggle=function(e){return new t(this,typeof e=="object"?e:{})},e.fn.toggle.defaults={onClick:function(){},text:{enabled:!1,disabled:!1},style:{enabled:!1,disabled:!1}},e.fn.toggle.Constructor=t}(window.jQuery);
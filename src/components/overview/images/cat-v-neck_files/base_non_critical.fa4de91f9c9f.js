function password_validate(e){var t=e.find(".passwordVerify").val(),n=/^(?=.*[a-z])(?=.*[A-Z])/;containsSpecialChar=/^(?=.*[!@#$%])/,n.test(t)===!0&&e.find(".password-validation--case").addClass("valid-green"),n.test(t)===!1&&e.find(".password-validation--case").removeClass("valid-green"),containsSpecialChar.test(t)===!0&&e.find(".password-validation--special-character").addClass("valid-green"),containsSpecialChar.test(t)===!1&&e.find(".password-validation--special-character").removeClass("valid-green"),t.length>=8&&e.find(".password-validation--length").addClass("valid-green"),t.length<8&&e.find(".password-validation--length").removeClass("valid-green");var r=t.length>=8&&containsSpecialChar.test(t)===!0&&n.test(t)===!0;return r}var THREADLESS=THREADLESS||{};THREADLESS.Grecaptcha={init:function(e){this.options=$.extend(this._default,e),this.$_readyCallback=this.options.$_readyCallback,this.$_loaded=typeof grecaptcha!="undefined"?!0:!1,this.bind()},loadSrc:function(){var e=this,t=typeof e.$_readyCallback=="function"?e.$_readyCallback:function(){},n=document.createElement("script");n.src="//www.google.com/recaptcha/api.js",n.async=!0,n.defer=!0,document.body.appendChild(n);if(typeof t!="function")return;t(!0)},bind:function(){var e=this;if(e.$_loaded){var t=typeof e.$_readyCallback=="function"?e.$_readyCallback:function(){};t(!0)}else e.loadSrc()}},jQuery(document).ready(function(e){var t=t||{};window.Auth=t,t.Join={},t.Login={},t.FBLogin={},t.modal=e("#login"),t.Login.selector="form.login_form",t.Login.$form=e(t.Login.selector,"#login"),t.Login.$tab=e("#login_tab"),t.Join.selector="form.join_form",t.Join.$form=e(t.Join.selector,"#login"),t.Join.$tab=e("#join_tab"),t.Join.xhr=null,t.FBLogin.selector="form.facebook_form",t.getCookie=function(e){var t=null,n=null,r=null;if(document.cookie&&document.cookie!==""){n=document.cookie.split(";");for(var i=0;i<n.length;i++){r=jQuery.trim(n[i]);if(r.substring(0,e.length+1)==e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}}return t},t.replaceCSRF=function(e){for(var n=0;n<e.length;n++)if(e[n]["name"]=="csrfmiddlewaretoken"){e[n].value=t.getCookie("csrftoken3");break}return e},t.init=function(){e(document).on("submit",t.Login.selector,function(n){var r,i,s,o;n.preventDefault(),t.clearErrors(),i=e(":submit",this),i.attr("disabled",!0),t.validateLogin()?(r=e(this).serializeArray(),r=t.replaceCSRF(r),e(":input[name=next]").length&&(t.callback=function(t){window.location.href=e(":input[name=next]").val()}),e.ajax({type:"POST",url:e(this).attr("action"),data:e.param(r),dataType:"json",xhrFields:{withCredentials:!0},beforeSend:function(e){e.setRequestHeader("X-Requested-With","XMLHttpRequest"),s=t.getCookie("csrftoken3");if(!s){window.location="/login/";return}e.setRequestHeader("X-CSRFToken",s)},success:function(n,r){n.result===!0?(t.close(),e(window).trigger("login_success"),t.callback?t.callback(n):window.location.reload()):t.handleErrors(n,t.Login.selector)},error:function(n,r,i){o=e("div.login_error",t.Login.selector).empty(),e("<p/>").html("Oops, something went wrong!").appendTo(o)},complete:function(e,t){i.attr("disabled",!1)}})):i.attr("disabled",!1)}),e(document).on("submit",t.Join.selector,function(n){var r,i,s,o;n.preventDefault(),r=e(":submit",this),t.clearErrors(),r.attr("disabled",!0),t.validateRegister()?(i=e(this),s=e(this).serializeArray(),s=t.replaceCSRF(s),e.ajax({type:"POST",url:i.attr("action"),data:e.param(s),dataType:"json",xhrFields:{withCredentials:!0},crossDomain:!0,success:function(n,i){n.result?window.location.reload():(t.handleErrors(n,t.Login.selector),r.attr("disabled",!1),grecaptcha instanceof Object&&e(".recaptcha-form-field").each(function(e){grecaptcha.reset(e)}))},error:function(n,i,s){o=e("div.login_error",t.Join.selector).empty(),e("<p/>").html(s).appendTo(o),r.attr("disabled",!1),grecaptcha instanceof Object&&e(".recaptcha-form-field").each(function(e){grecaptcha.reset(e)})}})):r.attr("disabled",!1)}),e(document).on("submit",t.FBLogin.selector,function(n){var r;r=t.getCookie("csrftoken3"),e(t.FBLogin.selector).find('input[name="csrfmiddlewaretoken"]').val(r)}),e(document).on("click",".mod .tabs a, li.login_show a, li.join_show a, span.login_show a, span.join_show a, #login_page_to_modal, .login_modal_trigger, .join_modal_trigger",function(n){if(window.location.pathname.match(/^\/(join|login)\/?$/))return!0;n.preventDefault();var r=null,i=null;e(this).is("li.login_show a, span.login_show a, #login_page_to_modal, .login_modal_trigger, .js-login-trigger")?(r=t.Login,i=t.Login.actuallyShow):(r=t.Join,i=t.Join.show);if(e(this).is("a.login_modal_trigger, a.join_modal_trigger")&&e(this).attr("href")!="#"){var s=e(this).attr("href");i(function(){window.location.href=s})}else e(this).is(".mod .tabs a")?i(!0):i()}),e(".mod .close").on("click",t.close),e(document).keyup(function(e){e.keyCode==27&&t.close()}),window.location.search.indexOf("login")!==-1&&e(".login a").click(),e(document).ajaxError(function(n,r,i){r.status===403&&t.Login.actuallyShow(function(t){e.ajax(i)})}),e.extend(e.validity.messages,{require:"This field is required."})},e(".switch-users").click(function(){t.Login.actuallyShow(),typeof t.loadJoinForm=="function"&&t.loadJoinForm()}),t.show=function(e){typeof e=="function"?t.callback=e:typeof e=="object"&&e.preventDefault?e.preventDefault():e||(t.callback=null),t.modal.fadeIn()},t.close=function(e){typeof e=="object"&&e.preventDefault&&e.preventDefault(),t.modal.fadeOut()},t.Join.show=function(n){function r(){t.show(n),t.Login.$tab.removeClass("current"),t.Login.$form.hide(),t.Join.$tab.addClass("current"),t.Join.$form.show(),e(".mod").removeClass("login").addClass("join")}typeof THREADLESS.Grecaptcha!="undefined"?THREADLESS.Grecaptcha.init({$_readyCallback:function(){r()}}):r()},t.Login.show=function(e){t.Join.show(e)},t.Login.actuallyShow=function(n){t.show(n),t.Join.$tab.removeClass("current"),t.Join.$form.hide(),t.Login.$tab.addClass("current"),t.Login.$form.show(),e(".mod").removeClass("join").addClass
("login"),e(":input[name=username]",t.Login.selector).focus()},t.clearErrors=function(){e("p.login_error:has(:input)",this).removeClass("login_error"),e("div.login_error",this).empty(),e("div.registration_error",this).empty(),e("p.error").removeClass("error")},t.handleErrors=function(n,r){var i=e(":submit",this);if(n.errors){for(key in n.errors)e(":input[name="+key+"]",t.Login.modal).parent().addClass("login_error").attr("title",n.errors[key]);if(n.errors.registration){var s=e("div.registration_error").empty();e("<p>"+n.errors.registration[0]+"</p>").appendTo(s)}if(n.errors.__all__){var s=e("div.login_error").empty();e("<p>"+n.errors.__all__[0]+"</p>").appendTo(s)}i.attr("disabled",!1)}},t.validateLogin=function(){var n=e(t.Login.selector).filter(":visible:first");e.validity.start(),n.find("#id_username").require(),n.find("#id_password").require();var r=e.validity.end();return r.valid},t.validateRegister=function(){var n=e(t.Join.selector).filter(":visible:first");e.validity.start(),n.find("#create_username").require().minLength(3,"Username must be at least 3 characters."),n.find('input[type="password"]').require().minLength(8,"Password must be at least 8 characters.").equal("Passwords must match"),n.find("#email").require().match("email");var r=e.validity.end();return r.valid},t.init(),e(".validateSubmit").prop("disabled",!0),e(document).on("keyup",".join_form :input, #auth-join-form :input",function(n){var r=e(this).closest("form");password_validate(r)===!0&&t.validateRegister()===!0?e(".validateSubmit").prop("disabled",!1):e(".validateSubmit").prop("disabled",!0)})}),$(document).ready(function(){function r(e){return"/search/lookahead/"}function i(e){var t=typeof e=="string"?$.parseJSON(e):e;return{suggestions:$.map(t,function(e){return{value:e.payload.product_title,data:e.payload}})}}function s(e){var t,n,r,i,s,o;return s=e.data.design_bg_color?e.data.design_bg_color:"FFFFFF",e.data.catalog=="discover"?(o=new Loom.GiraffeImage("https://cdn-images.threadless.com/"+e.data.s3key),t=o.call("trim",[],{}).call("resize",[100],{}).call("canvas_centered",[100,100,"#"+s],{}).call("encode",["jpg",85],{}).getUrl(),n=e.data.product_title,r=e.data.name):e.data.catalog=="threadless"&&(t="https://dov5cor25da49.cloudfront.net/products/"+e.data.product_id+"/100x100design_01.jpg",n=e.data.product_title,r=e.data.artist_name||e.data.artist_username),s=e.data.design_bg_color?e.data.design_bg_color:"FFFFFF",r=r?"By "+r:"",i='<div style="min-height:50px;"><div style="float:left;background-color:#'+s+'"><img src="'+t+'" class="photo" alt="" width="50" height="50"></div>'+'<div class="img-text"><strong>'+n+"</strong><span>"+r+"</span></div>"+"</div>",i}var e=null,t=$(".search-dropdown"),n=$("#search_form_page");$("#search_form").on("submit",function(e){try{ga("send","event","Search","primary search bar","form submitted")}catch(t){}if($("#pjax-content #dotcom-app, #pjax-content #discover-app, #pjax-content #search-app").length){e.preventDefault();var n=$(this).attr("action")+"?"+$(this).serialize();router.navigate(n),$(this).find("input").val(""),$(this).data("autocomplete")&&$(this).data("autocomplete").hide()}}),e=t.autocomplete({serviceUrl:r,transformResult:i,formatResult:s,width:"auto",tabDisabled:!0,zIndex:899,noCache:!1,triggerSelectOnValidInput:!1,preventBadQueries:!1,deferRequestBy:250,onSelect:function(e,t){var n=null;if(e.data.catalog=="threadless"){try{ga("send","event","Search","primary search bar","product selected (Threadless)")}catch(r){}n="/product/"+e.data.product_id}else if(e.data.catalog=="discover"){try{ga("send","event","Search","primary search bar","product selected (Discover)")}catch(r){}n="/discover/s/"+e.data.name+"/design/"+e.data.slug}$("#pjax-content #dotcom-app, #pjax-content #discover-app, #pjax-content #search-app").length?(router.navigate(n),$(this).val(""),$(this).data("autocomplete").hide()):window.location=n},onSearchStart:function(){var e=$(this).parents("form");e.find("button i.fa").removeClass("fa-search").addClass("fa-spinner")},onSearchComplete:function(){var e=$(this).closest("form");e.find("button i.fa").addClass("fa-search").removeClass("fa-spinner")},onSearchError:function(){var e=$(this).closest("form");e.find("button i.fa").addClass("fa-search").removeClass("fa-spinner")}})}),$(document).ready(function(){$("body").addClass("js"),$(document).delegate(".submenu-link","click",function(e){e.preventDefault();var t=$(this),n=$(t.attr("href")),r=t.data("message");t.hasClass("active")?(t.removeClass("active").text(r),n.removeClass("active")):(t.addClass("active").text("Close"),n.addClass("active"))}),$(document).delegate("#treys-awesome-menu","click",function(e){var t=$(e.currentTarget),n=t.parent().find(".submenu-link");n.removeClass("active")}),$(document).delegate("menu.vertical li a","click",function(e){var t=$(this),n=t.parent("li"),r=n.find("ul:first, > ol:first"),i=t.closest("menu.vertical"),s=i.find("ul:first > li.selected, ol:first > li.selected"),o=s.find("> ul, > ol");r.length&&s.length&&(e.preventDefault(),o.length?o.is(":visible")?(o.css({display:"block"}),s.removeClass("selected"),o.slideUp()):o.slideDown():s.removeClass("selected")),r.length&&!n.is(s)&&(e.preventDefault(),r.css({display:"none"}),n.addClass("selected"),r.slideDown())})}),$(function(){function i(){r.addClass("animated shake"),setTimeout(function(){r.removeClass("shake")},900)}function s(e){e.preventDefault();var n=$("#users-email").val();if(n!==""){var r=loom.resetPassword(n);t.addClass("operation-in-progress"),r.done(function(){$(".resetting-password--success").addClass("working")}),r.fail(function(e,n){if(e.status==404||n=="Not Found")t.removeClass("operation-in-progress"),$("resetting-password").addClass("th-removed"),i(),setTimeout(function(){$("#users-email").addClass("bad-input").val("").attr("placeholder","That email is incorrect"),$(".error-container").removeClass("th-removed").addClass("alerting").html("<p>No account found with this email.</p>")},650),setTimeout(function(){$("#users-email"
).addClass("bad-input").val("").attr("placeholder","That email is incorrect"),$(".error-container").removeClass("alerting").html("")},5e3);e.status==500&&alert("We're sorry this request cannot be completed, please try again later.")})}else i(),setTimeout(function(){$("#users-email").addClass("bad-input").attr("placeholder","Your email is required")},850)}var e=$(".recover-password"),t=$(".forgot-form"),n=$("error-container"),r=$(".forgot");e.on("click",s)}),function(e){"use strict";function a(e){e=e||"";if(e instanceof URLSearchParams||e instanceof a)e=e.toString();this[i]=v(e)}function h(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g,function(e){return t[e]})}function p(e){return e.replace(/[ +]/g,"%20").replace(/(%[a-f0-9]{2})+/ig,function(e){return decodeURIComponent(e)})}function d(t){var n={next:function(){var e=t.shift();return{done:e===undefined,value:e}}};return u&&(n[e.Symbol.iterator]=function(){return n}),n}function v(e){var t={};if(typeof e=="object")if(g(e))for(var n=0;n<e.length;n++){var r=e[n];if(!g(r)||r.length!==2)throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");m(t,r[0],r[1])}else for(var i in e)e.hasOwnProperty(i)&&m(t,i,e[i]);else{e.indexOf("?")===0&&(e=e.slice(1));var s=e.split("&");for(var o=0;o<s.length;o++){var u=s[o],a=u.indexOf("=");-1<a?m(t,p(u.slice(0,a)),p(u.slice(a+1))):u&&m(t,p(u),"")}}return t}function m(e,t,n){var r=typeof n=="string"?n:n!==null&&n!==undefined&&typeof n.toString=="function"?n.toString():JSON.stringify(n);t in e?e[t].push(r):e[t]=[r]}function g(e){return!!e&&"[object Array]"===Object.prototype.toString.call(e)}var t=e.URLSearchParams&&e.URLSearchParams.prototype.get?e.URLSearchParams:null,n=t&&(new t({a:1})).toString()==="a=1",r=t&&(new t("s=%2B")).get("s")==="+",i="__URLSearchParams__",s=t?function(){var e=new t;return e.append("s"," &"),e.toString()==="s=+%26"}():!0,o=a.prototype,u=!!e.Symbol&&!!e.Symbol.iterator;if(t&&n&&r&&s)return;o.append=function(e,t){m(this[i],e,t)},o["delete"]=function(e){delete this[i][e]},o.get=function(e){var t=this[i];return e in t?t[e][0]:null},o.getAll=function(e){var t=this[i];return e in t?t[e].slice(0):[]},o.has=function(e){return e in this[i]},o.set=function(t,n){this[i][t]=[""+n]},o.toString=function(){var e=this[i],t=[],n,r,s,o;for(r in e){s=h(r);for(n=0,o=e[r];n<o.length;n++)t.push(s+"="+h(o[n]))}return t.join("&")};var f=!r,l=!f&&t&&!n&&e.Proxy;Object.defineProperty(e,"URLSearchParams",{value:l?new Proxy(t,{construct:function(e,t){return new e((new a(t[0])).toString())}}):a});var c=e.URLSearchParams.prototype;c.polyfill=!0,c.forEach=c.forEach||function(e,t){var n=v(this.toString());Object.getOwnPropertyNames(n).forEach(function(r){n[r].forEach(function(n){e.call(t,n,r,this)},this)},this)},c.sort=c.sort||function(){var e=v(this.toString()),t=[],n,r,i;for(n in e)t.push(n);t.sort();for(r=0;r<t.length;r++)this["delete"](t[r]);for(r=0;r<t.length;r++){var s=t[r],o=e[s];for(i=0;i<o.length;i++)this.append(s,o[i])}},c.keys=c.keys||function(){var e=[];return this.forEach(function(t,n){e.push(n)}),d(e)},c.values=c.values||function(){var e=[];return this.forEach(function(t){e.push(t)}),d(e)},c.entries=c.entries||function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),d(e)},u&&(c[e.Symbol.iterator]=c[e.Symbol.iterator]||c.entries)}(typeof global!="undefined"?global:typeof window!="undefined"?window:this);
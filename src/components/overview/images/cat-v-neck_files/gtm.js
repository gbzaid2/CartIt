
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"86",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date;a.setDate(a.getDate()+10);var b=(\"0\"+a.getDate()).slice(-2),c=(\"0\"+(a.getMonth()+1)).slice(-2);a=a.getFullYear();return b=a+\"-\"+c+\"-\"+b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionItems"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],";return a.reduce(function(a,b){return a.concat(b.stockId)},[])})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"discoverTransactionItems"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],";return a.reduce(function(a,b){return a.concat(b.content_ids)},[])})();"]
    },{
      "function":"__d",
      "vtp_elementSelector":".active_price",
      "vtp_selectorType":"CSS"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],";return a=a.replace(\"$\",\"\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orderTotal"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",7],8,16],";return a=a.replace(\"$\",\"\")})();"]
    },{
      "function":"__d",
      "vtp_elementSelector":".carty--total",
      "vtp_selectorType":"CSS"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",9],8,16],";return a=a.replace(\"$\",\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],";return a.length})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(\"#id_shop_url\").val();return a})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__d",
      "vtp_elementSelector":".picked",
      "vtp_attributeName":"data-glskuid",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"designName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"departmentName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"stockIds"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=0\u003E",["escape",["macro",6],8,16],".length?",["escape",["macro",6],8,16],":$(\".size-buttons a:first-of-type\").data(\"glprice\");return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"response.statusText"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"request.url"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"request.method"
    },{
      "function":"__d",
      "vtp_elementSelector":".productPicker-design",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"discoverDepartmentName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"discoverStockId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"discoverProductPrice"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"discoverStockIds"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"encodedCustomerEmail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"productId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"departmentId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"styleId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cart"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchTerm"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"catalogCategories"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f"
    },{
      "function":"__e"
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"URL"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_CHANGE_SOURCE"
    },{
      "function":"__v",
      "vtp_name":"orderId",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"ProductID",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Price",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"DesignName",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"DesignBy",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"CategoryID",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"Gender",
      "vtp_dataLayerVersion":2
    },{
      "function":"__c",
      "vtp_value":"CategoryName"
    },{
      "function":"__v",
      "vtp_name":"elementURL",
      "vtp_dataLayerVersion":2
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"URL"
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list","https:\/\/www.threadless.com\/cart\/add\/"]
    },{
      "function":"__j",
      "vtp_name":["macro",51]
    },{
      "function":"__v",
      "vtp_name":["macro",47],
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"price"
    },{
      "function":"__cid"
    },{
      "function":"__d",
      "vtp_elementSelector":".thanks section .head p strong",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":".productPicker-cart",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"pjax-link",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hashedCustomerEmail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.4.value"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    }],
  "tags":[{
      "function":"__html",
      "priority":3,
      "setup_tags":["list",["tag",25,0]],
      "unlimited":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Epintrk(\"track\",\"AddToCart\",{value:",["escape",["macro",5],8,16],",order_quantity:1,currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "priority":2,
      "setup_tags":["list",["tag",25,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Epintrk(\"track\",\"pagevisit\",{});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":67
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":["macro",7],
      "vtp_conversionId":"868006678",
      "vtp_conversionLabel":"It5VCK_YiGwQlvbynQM",
      "vtp_url":["macro",15],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":false,
      "tag_id":54
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":72
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":75
    },{
      "function":"__cl",
      "tag_id":76
    },{
      "function":"__cl",
      "tag_id":77
    },{
      "function":"__cl",
      "tag_id":78
    },{
      "function":"__fsl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"3000",
      "vtp_uniqueTriggerId":"707361_35",
      "tag_id":79
    },{
      "function":"__cl",
      "tag_id":80
    },{
      "function":"__evl",
      "vtp_elementId":"search-app",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"707361_100",
      "tag_id":81
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"l4csa\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=l4csa\u0026amp;p_id=Twitter\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{content_ids:[\"",["escape",["macro",20],7],"\"],content_type:\"product\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":29
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"718941741538586\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=718941741538586\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript\u003Efbq(\"track\",\"Purchase\",{value:\"",["escape",["macro",8],7],"\",currency:\"USD\",content_type:\"product\",content_ids:",["escape",["macro",2],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":35
    },{
      "function":"__html",
      "setup_tags":["list",["tag",13,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ArtistShopPricingPage\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":50
    },{
      "function":"__html",
      "setup_tags":["list",["tag",13,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ArtistShopFeaturesPage\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":51
    },{
      "function":"__html",
      "setup_tags":["list",["tag",13,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ArtistShopGalleryPage\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":52
    },{
      "function":"__html",
      "setup_tags":["list",["tag",13,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\",{content_name:\"Artist Shop Sign Up\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "unlimited":true,
      "vtp_html":["template","\u003Cscript\u003Efbq(\"track\",\"ViewContent\",{content_name:\"",["escape",["macro",22],7],"\",content_category:\"",["escape",["macro",23],7],"\",content_ids:",["escape",["macro",24],8,16],",content_type:\"product\",value:\"",["escape",["macro",25],7],"\",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":57
    },{
      "function":"__html",
      "unlimited":true,
      "vtp_html":["template","\n\u003Cscript\u003Efbq(\"track\",\"AddToCart\",{content_name:\"",["escape",["macro",29],7],"\",content_category:\"",["escape",["macro",30],7],"\",content_ids:\"",["escape",["macro",31],7],"\",content_type:\"product\",value:",["escape",["macro",32],8,16],",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":59
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{content_ids:",["escape",["macro",4],8,16],",content_type:\"product\",value:\"",["escape",["macro",10],7],"\",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "unlimited":true,
      "vtp_html":["template","\u003Cscript\u003Efbq(\"track\",\"ViewContent\",{content_name:\"",["escape",["macro",29],7],"\",content_category:",["escape",["macro",30],8,16],",content_ids:",["escape",["macro",33],8,16],",value:",["escape",["macro",32],8,16],",content_type:\"product\",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E(function(a){var b=a.createElement(\"script\");b.src=a.location.protocol+\"\/\/tag.bounceexchange.com\/2956\/i.js\";b.async=!0;a.getElementsByTagName(\"head\")[0].appendChild(b)})(document);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":62
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/js.b1js.com\/tagcontainer.js?id=55e7fc36559745cd862649e05dec5672\u0026amp;type=1\u0026amp;onload=false\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "priority":0,
      "once_per_load":true,
      "vtp_html":"  \n  \u003Cscript type=\"text\/gtmscript\"\u003E!function(b){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var a=window.pintrk;a.queue=[];a.version=\"3.0\";a=document.createElement(\"script\");a.async=!0;a.src=b;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(\"https:\/\/s.pinimg.com\/ct\/core.js\");pintrk(\"load\",\"2616400429829\");pintrk(\"page\");\u003C\/script\u003E\n  \u003Cnoscript\u003E\n    \u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/ct.pinterest.com\/v3\/?tid=2616400429829\u0026amp;noscript=1\"\u003E\n  \u003C\/noscript\u003E\n  ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":66
    },{
      "function":"__html",
      "setup_tags":["list",["tag",25,0]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Epintrk(\"track\",\"checkout\",{value:",["escape",["macro",8],8,16],",order_quantity:",["escape",["macro",11],8,16],",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "unlimited":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(g,e,a,f,b,c,d){b.ire_o=a;b[a]=b[a]||function(){(b[a].a=b[a].a||[]).push(arguments)};c=f.createElement(e);d=f.getElementsByTagName(e)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(\"\/\/d.impactradius-event.com\/A58235-487f-4b3f-96e6-e72c368c19971.js\",\"script\",\"ire\",document,window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar ScarabQueue=ScarabQueue||[],pushedEmail=!1,pushedView=!1,pushedCart=!1,pushedSearchTerm=!1,pushedCategory=!1,pushedPurchase=!1,urlPath=",["escape",["macro",35],8,16],";(function(a){if(!document.getElementById(a)){var b=document.createElement(\"script\");b.id=a;b.src=\"\/\/cdn.scarabresearch.com\/js\/133EFC539377FB00\/scarab-v2.js\";a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)}})(\"scarab-js-api\");var encoded_customer_email=",["escape",["macro",36],8,16],";\nif(encoded_customer_email\u0026\u0026\"undefined\"!==typeof encoded_customer_email){var customer_email=atob(encoded_customer_email);ScarabQueue.push([\"setEmail\",customer_email]);pushedEmail=!0}var product_id=",["escape",["macro",37],8,16],",department_id=",["escape",["macro",38],8,16],",style_id=",["escape",["macro",39],8,16],";\nif(product_id\u0026\u0026\"undefined\"!==typeof product_id\u0026\u0026department_id\u0026\u0026\"undefined\"!==typeof department_id\u0026\u0026style_id\u0026\u0026\"undefined\"!==typeof style_id){var item_id=product_id+\"-\"+department_id+\"-\"+style_id;ScarabQueue.push([\"view\",item_id]);pushedView=!0}var cart=",["escape",["macro",40],8,16],";\nif(\"undefined\"!==typeof cart){for(var cart_items=[],i=0;i\u003Ccart.length;i++)item_id=cart[i].productId+\"-\"+cart[i].departmentId+\"-\"+cart[i].styleId,cart_items.push({item:item_id,price:parseFloat(cart[i].price),quantity:parseInt(cart[i].quantity)});ScarabQueue.push([\"cart\",cart_items]);pushedCart=!0}var searchTerm=",["escape",["macro",41],8,16],";searchTerm\u0026\u0026\"undefined\"!==typeof searchTerm\u0026\u0026urlPath.startsWith(\"\/search\")\u0026\u0026(ScarabQueue.push([\"searchTerm\",searchTerm]),pushedSearchTerm=!0);var catalog_categories=",["escape",["macro",42],8,16],";\nif(catalog_categories\u0026\u0026\"undefined\"!==typeof catalog_categories)for(i=0;i\u003Ccatalog_categories.length;i++){var category=catalog_categories[i];ScarabQueue.push([\"category\",category]);pushedCategory=!0}var transaction_items=",["escape",["macro",1],8,16],";\nif(transaction_items\u0026\u0026\"undefined\"!==typeof transaction_items){var purchase={orderId:transaction_items[0].orderId,items:[]};for(i=0;i\u003Ctransaction_items.length;i++)item_id=transaction_items[i].id+\"-\"+transaction_items[i].departmentId+\"-\"+transaction_items[i].styleId,purchase.items.push({item:item_id,price:parseFloat(transaction_items[i].price),quantity:parseInt(transaction_items[i].quantity)});ScarabQueue.push([\"purchase\",purchase]);pushedPurchase=!0}\n(pushedEmail||pushedView||pushedCart||pushedSearchTerm||pushedCategory||pushedPurchase)\u0026\u0026ScarabQueue.push([\"go\"]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"\\\/cart\\\/step\\\/place-order.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"artist-shop-signup-form"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"(^$|((^|,)707361_35($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.js"
    },{
      "function":"_sw",
      "arg0":["macro",18],
      "arg1":"https:\/\/www.threadless.com"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"\/artist-shops\/signup"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"productPicker-cart"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"product"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"\/step\/place-order\/"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"\/pricing"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"\/features"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"\/gallery"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"pjax-navigation-threadless"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"OK"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"\/shared-cart\/"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"POST"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"ajaxSuccess"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"\/checkout\/confirmation\/"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"pjax-navigation-discover"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",34],
      "arg1":"\/catalog"
    },{
      "function":"_sw",
      "arg0":["macro",34],
      "arg1":"\/cart"
    },{
      "function":"_sw",
      "arg0":["macro",34],
      "arg1":"\/discover"
    },{
      "function":"_sw",
      "arg0":["macro",34],
      "arg1":"\/checkout"
    },{
      "function":"_sw",
      "arg0":["macro",27],
      "arg1":"\/search"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"GET"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"lookahead"
    },{
      "function":"_sw",
      "arg0":["macro",18],
      "arg1":"\/search"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"(^$|((^|,)707361_100($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"\/product\\\/\\d+"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"\/discover\/s\/"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"\/discover\/s\/"
    }],
  "rules":[
    [["if",0,1],["add",2]],
    [["if",2,3,4],["add",3,18]],
    [["if",5],["add",4,11,13,5,6,7,9,10]],
    [["if",5,7],["add",8]],
    [["if",8,9,10],["add",12,0]],
    [["if",1,11],["add",14,26],["block",27]],
    [["if",7,10,12],["add",15]],
    [["if",7,10,13],["add",16]],
    [["if",7,10,14],["add",17]],
    [["if",15],["add",19,28]],
    [["if",16,17,18,19],["add",20]],
    [["if",1,20],["add",21],["block",25,27]],
    [["if",21],["add",22]],
    [["if",1,22],["add",23,24,25,1,27,28]],
    [["if",16,19,27,28],["unless",29],["add",28]],
    [["if",30,31,32],["add",28]],
    [["if",1],["unless",6],["block",4,23,24,25,1,27,28]],
    [["if",5,23],["block",24]],
    [["if",5,24],["block",24]],
    [["if",5,25],["block",24,25,1,27]],
    [["if",5,26],["block",24,25,1,28]],
    [["if",1,33],["block",28]],
    [["if",16,19,28,34],["block",28]],
    [["if",1,35],["block",28]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={lf:!0},fa={};try{fa.__proto__=ea;da=fa.lf;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=ca,ja=this||self,la=/^[\w+/_-]+[=]{0,2}$/,ma=null;var pa=function(){},qa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},ra=function(a){return"number"==typeof a&&!isNaN(a)},ua=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},r=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},va=function(a,b){if(a&&ua(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!ra(a)||
!ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},za=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Aa=function(a){return Math.round(Number(a))||0},Ba=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ca=function(a){var b=[];if(ua(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};
var Ga=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ha=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ia=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ja=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ka=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},La=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Ma=function(a){var b=
[];za(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")},Na=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b.push(d):2048>d?b.push(192|d>>6,128|d&63):55296>d||57344<=d?b.push(224|d>>12,128|d>>6&63,128|d&63):(d=65536+((d&1023)<<10|a.charCodeAt(++c)&1023),b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return new Uint8Array(b)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Oa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Pa=function(a){if(null==a)return String(a);var b=Oa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Qa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ra=function(a){if(!a||"object"!=Pa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Qa(a,"constructor")&&!Qa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Qa(a,b)},B=function(a,b){var c=b||("array"==Pa(a)?[]:{}),d;for(d in a)if(Qa(a,d)){var e=a[d];"array"==Pa(e)?("array"!=Pa(c[d])&&(c[d]=[]),c[d]=B(e,c[d])):Ra(e)?(Ra(c[d])||(c[d]={}),c[d]=B(e,c[d])):c[d]=e}return c};
var Sa=[],Ta={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ua=function(a){return Ta[a]},Va=/[\x00\x22\x26\x27\x3c\x3e]/g;var Za=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,cb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},db=function(a){return cb[a]};Sa[7]=function(a){return String(a).replace(Za,db)};
Sa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Za,db)+"'"}};var mb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,nb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ob=function(a){return nb[a]};Sa[16]=function(a){return a};var qb;
var rb=[],sb=[],tb=[],vb=[],wb=[],xb={},yb,zb,Ab,Bb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Cb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=xb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):qb(c,e,b)},Eb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Db(a[e],b,c));
return d},Fb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=xb[b];return c?c.priorityOverride||0:0},Db=function(a,b,c){if(ua(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Db(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=rb[f];if(!h||b.Lc(h))return;c[f]=!0;try{var k=Eb(h,b,c);k.vtp_gtmEventId=b.id;d=Cb(k,b);Ab&&(d=Ab.Mf(d,k))}catch(y){b.te&&b.te(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Db(a[l],b,c)]=Db(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=Db(a[n],b,c);zb&&(m=m||q===zb.ub);d.push(q)}return zb&&m?zb.Pf(d):d.join("");case "escape":d=Db(a[1],b,c);if(zb&&ua(a[1])&&"macro"===a[1][0]&&zb.mg(a))return zb.Jg(d);d=String(d);for(var u=2;u<a.length;u++)Sa[a[u]]&&(d=Sa[a[u]](d));return d;case "tag":var p=a[1];if(!vb[p])throw Error("Unable to resolve tag reference "+p+".");return d={fe:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Gb(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Gb=function(a,b,c){try{return yb(Eb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Ib=function(){var a=function(b){return{toString:function(){return b}}};return{qd:a("convert_case_to"),rd:a("convert_false_to"),sd:a("convert_null_to"),td:a("convert_true_to"),ud:a("convert_undefined_to"),rh:a("debug_mode_metadata"),ra:a("function"),Qe:a("instance_name"),Ue:a("live_only"),We:a("malware_disabled"),Xe:a("metadata"),sh:a("original_vendor_template_id"),af:a("once_per_event"),Dd:a("once_per_load"),Ld:a("setup_tags"),Nd:a("tag_id"),Od:a("teardown_tags")}}();var Jb=null,Mb=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];Jb=Kb(a);for(var e=0;e<sb.length;e++){var f=sb[e],h=Lb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<vb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Lb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Jb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Jb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Kb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Gb(tb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var dc,ec=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Af&&(l["fix_"+m]=!0),l.he=l.he||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var p=k.indexOf("--\x3e");if(0<=p)return{content:k.substr(4,p),length:p+3}},endTag:function(){var p=k.match(d);if(p)return{tagName:p[1],length:p[0].length}},atomicTag:function(){var p=q.startTag();
if(p){var t=k.slice(p.length);if(t.match(new RegExp("</\\s*"+p.tagName+"\\s*>","i"))){var v=t.match(new RegExp("([\\s\\S]*?)</\\s*"+p.tagName+"\\s*>","i"));if(v)return{tagName:p.tagName,O:p.O,content:v[1],length:v[0].length+p.length}}}},startTag:function(){var p=k.match(c);if(p){var t={};p[2].replace(e,function(v,w,y,x,z){var C=y||x||z||f.test(w)&&w||null,A=document.createElement("div");A.innerHTML=C;t[w]=A.textContent||A.innerText||C});return{tagName:p[1],O:t,pb:!!p[3],length:p[0].length}}},chars:function(){var p=
k.indexOf("<");return{length:0<=p?p:k.length}}},u=function(){for(var p in n)if(n[p].test(k)){var t=q[p]();return t?(t.type=t.type||p,t.text=k.substr(0,t.length),k=k.slice(t.length),t):null}};l.he&&function(){var p=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,t=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.qe=function(){return this[this.length-1]};v.Nc=function(A){var E=this.qe();return E&&E.tagName&&E.tagName.toUpperCase()===A.toUpperCase()};v.Lf=
function(A){for(var E=0,J;J=this[E];E++)if(J.tagName===A)return!0;return!1};var w=function(A){A&&"startTag"===A.type&&(A.pb=p.test(A.tagName)||A.pb);return A},y=u,x=function(){k="</"+v.pop().tagName+">"+k},z={startTag:function(A){var E=A.tagName;"TR"===E.toUpperCase()&&v.Nc("TABLE")?(k="<TBODY>"+k,C()):l.Ah&&t.test(E)&&v.Lf(E)?v.Nc(E)?x():(k="</"+A.tagName+">"+k,C()):A.pb||v.push(A)},endTag:function(A){v.qe()?l.Yf&&!v.Nc(A.tagName)?x():v.pop():l.Yf&&(y(),C())}},C=function(){var A=k,E=w(y());k=A;if(E&&
z[E.type])z[E.type](E)};u=function(){C();return w(y())}}();return{append:function(p){k+=p},Rg:u,Gh:function(p){for(var t;(t=u())&&(!p[t.type]||!1!==p[t.type](t)););},clear:function(){var p=k;k="";return p},Hh:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Jh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Ih=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.M=b;a.P=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,q;for(q in m.O){var u=m.O[q];n+=
" "+q+'="'+(u?u.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.pb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.C=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.h=a.h||!b[h]&&h;dc=a})();(function(){function a(){}function b(q){return void 0!==q&&null!==q}function c(q,u,p){var t,v=q&&q.length||0;for(t=0;t<v;t++)u.call(p,q[t],t)}function d(q,u,p){for(var t in q)q.hasOwnProperty(t)&&u.call(p,t,q[t])}function e(q,
u){d(u,function(p,t){q[p]=t});return q}function f(q,u){q=q||{};d(u,function(p,t){b(q[p])||(q[p]=t)});return q}function h(q){try{return m.call(q)}catch(p){var u=[];c(q,function(t){u.push(t)});return u}}var k={rf:a,sf:a,tf:a,uf:a,Bf:a,Cf:function(q){return q},done:a,error:function(q){throw q;},Ug:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function q(p,t,v){var w="data-ps-"+t;if(2===arguments.length){var y=p.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?p.setAttribute(w,
v):p.removeAttribute(w)}function u(p,t){var v=p.ownerDocument;e(this,{root:p,options:t,qb:v.defaultView||v.parentWindow,Ha:v,Vb:dc("",{Af:!0}),zc:[p],Wc:"",Xc:v.createElement(p.nodeName),mb:[],ya:[]});q(this.Xc,"proxyof",0)}u.prototype.write=function(){[].push.apply(this.ya,arguments);for(var p;!this.Ib&&this.ya.length;)p=this.ya.shift(),"function"===typeof p?this.Hf(p):this.jd(p)};u.prototype.Hf=function(p){var t={type:"function",value:p.name||p.toString()};this.Tc(t);p.call(this.qb,this.Ha);this.ve(t)};
u.prototype.jd=function(p){this.Vb.append(p);for(var t,v=[],w,y;(t=this.Vb.Rg())&&!(w=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("script"):!1)&&!(y=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("style"):!1);)v.push(t);this.mh(v);w&&this.eg(t);y&&this.fg(t)};u.prototype.mh=function(p){var t=this.Ef(p);t.Zd&&(t.Jc=this.Wc+t.Zd,this.Wc+=t.Ng,this.Xc.innerHTML=t.Jc,this.jh())};u.prototype.Ef=function(p){var t=this.zc.length,v=[],w=[],y=[];c(p,function(x){v.push(x.text);if(x.O){if(!/^noscript$/i.test(x.tagName)){var z=
t++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==x.O.id&&"ps-style"!==x.O.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+z+(x.pb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{Kh:p,raw:v.join(""),Zd:w.join(""),Ng:y.join("")}};u.prototype.jh=function(){for(var p,t=[this.Xc];b(p=t.shift());){var v=1===p.nodeType;if(!v||!q(p,"proxyof")){v&&(this.zc[q(p,"id")]=p,q(p,"id",null));var w=p.parentNode&&q(p.parentNode,"proxyof");
w&&this.zc[w].appendChild(p)}t.unshift.apply(t,h(p.childNodes))}};u.prototype.eg=function(p){var t=this.Vb.clear();t&&this.ya.unshift(t);p.src=p.O.src||p.O.th;p.src&&this.mb.length?this.Ib=p:this.Tc(p);var v=this;this.lh(p,function(){v.ve(p)})};u.prototype.fg=function(p){var t=this.Vb.clear();t&&this.ya.unshift(t);p.type=p.O.type||p.O.vh||"text/css";this.nh(p);t&&this.write()};u.prototype.nh=function(p){var t=this.Gf(p);this.jg(t);p.content&&(t.styleSheet&&!t.sheet?t.styleSheet.cssText=p.content:
t.appendChild(this.Ha.createTextNode(p.content)))};u.prototype.Gf=function(p){var t=this.Ha.createElement(p.tagName);t.setAttribute("type",p.type);d(p.O,function(v,w){t.setAttribute(v,w)});return t};u.prototype.jg=function(p){this.jd('<span id="ps-style"/>');var t=this.Ha.getElementById("ps-style");t.parentNode.replaceChild(p,t)};u.prototype.Tc=function(p){p.Eg=this.ya;this.ya=[];this.mb.unshift(p)};u.prototype.ve=function(p){p!==this.mb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.mb.shift(),this.write.apply(this,p.Eg),!this.mb.length&&this.Ib&&(this.Tc(this.Ib),this.Ib=null))};u.prototype.lh=function(p,t){var v=this.Ff(p),w=this.$g(v),y=this.options.rf;p.src&&(v.src=p.src,this.Yg(v,w?y:function(){t();y()}));try{this.ig(v),p.src&&!w||t()}catch(x){this.options.error(x),t()}};u.prototype.Ff=function(p){var t=this.Ha.createElement(p.tagName);d(p.O,function(v,w){t.setAttribute(v,w)});p.content&&(t.text=p.content);return t};u.prototype.ig=function(p){this.jd('<span id="ps-script"/>');
var t=this.Ha.getElementById("ps-script");t.parentNode.replaceChild(p,t)};u.prototype.Yg=function(p,t){function v(){p=p.onload=p.onreadystatechange=p.onerror=null}var w=this.options.error;e(p,{onload:function(){v();t()},onreadystatechange:function(){/^(loaded|complete)$/.test(p.readyState)&&(v(),t())},onerror:function(){var y={message:"remote script failed "+p.src};v();w(y);t()}})};u.prototype.$g=function(p){return!/^script$/i.test(p.nodeName)||!!(this.options.Ug&&p.src&&p.hasAttribute("async"))};
return u}();l.postscribe=function(){function q(){var w=t.shift(),y;w&&(y=w[w.length-1],y.sf(),w.stream=u.apply(null,w),y.tf())}function u(w,y,x){function z(J){J=x.Cf(J);v.write(J);x.uf(J)}v=new n(w,x);v.id=p++;v.name=x.name||v.id;var C=w.ownerDocument,A={close:C.close,open:C.open,write:C.write,writeln:C.writeln};e(C,{close:a,open:a,write:function(){return z(h(arguments).join(""))},writeln:function(){return z(h(arguments).join("")+"\n")}});var E=v.qb.onerror||a;v.qb.onerror=function(J,M,V){x.error({Dh:J+
" - "+M+":"+V});E.apply(v.qb,arguments)};v.write(y,function(){e(C,A);v.qb.onerror=E;x.done();v=null;q()});return v}var p=0,t=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.Ch?w[0]:w;var z=[w,y,x];w.Ig={cancel:function(){z.stream?z.stream.abort():z[1]=a}};x.Bf(z);t.push(z);v||q();return w.Ig},{streams:{},Fh:t,wh:n})}();ec=l.postscribe}})();var D=window,F=document,fc=navigator,gc=F.currentScript&&F.currentScript.src,hc=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},ic=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},jc=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;ic(d,b);c&&(d.onerror=c);var e;if(null===ma)b:{var f=ja.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&la.test(k)){ma=k;break b}}ma=""}e=ma;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},kc=function(){if(gc){var a=gc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},lc=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);ic(c,b);void 0!==a&&(c.src=a);return c},mc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},nc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},oc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){D.setTimeout(a,0)},qc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},rc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},sc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},tc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},uc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var wc=function(a){return vc?F.querySelectorAll(a):null},xc=function(a,b){if(!vc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yc=!1;if(F.querySelectorAll)try{var zc=F.querySelectorAll(":root");zc&&1==zc.length&&zc[0]==F.documentElement&&(yc=!0)}catch(a){}var vc=yc;var H={qa:"_ee",nc:"event_callback",tb:"event_timeout",D:"gtag.config",X:"allow_ad_personalization_signals",oc:"restricted_data_processing",Qa:"allow_google_signals",Y:"cookie_expires",sb:"cookie_update",Ra:"session_duration",ca:"user_properties"};
H.de=[H.X,H.Qa,H.sb];H.ke=[H.Y,H.tb,H.Ra];var Pc=/[A-Z]+/,Qc=/\s/,Rc=function(a){if(g(a)&&(a=Ea(a),!Qc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Pc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],o:d}}}}},Tc=function(a){for(var b={},c=0;c<a.length;++c){var d=Rc(a[c]);d&&(b[d.id]=d)}Sc(b);var e=[];za(b,function(f,h){e.push(h)});return e};
function Sc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.o[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Uc={},Vc=null,Wc=Math.random();Uc.s="GTM-MCSQ99";Uc.yb="1t0";var Xc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Yc="www.googletagmanager.com/gtm.js";var Zc=Yc,$c=null,bd=null,cd=null,dd="//www.googletagmanager.com/a?id="+Uc.s+"&cv=86",ed={},fd={},gd=function(){var a=Vc.sequence||0;Vc.sequence=a+1;return a};var hd={},I=function(a,b){hd[a]=hd[a]||[];hd[a][b]=!0},id=function(a){for(var b=[],c=hd[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var jd=function(){return"&tc="+vb.filter(function(a){return a}).length},md=function(){kd||(kd=D.setTimeout(ld,500))},ld=function(){kd&&(D.clearTimeout(kd),kd=void 0);void 0===nd||od[nd]&&!pd&&!qd||(rd[nd]||sd.og()||0>=td--?(I("GTM",1),rd[nd]=!0):(sd.Sg(),mc(ud()),od[nd]=!0,vd=wd=qd=pd=""))},ud=function(){var a=nd;if(void 0===a)return"";var b=id("GTM"),c=id("TAGGING");return[xd,od[a]?"":"&es=1",yd[a],b?"&u="+b:"",c?"&ut="+c:"",jd(),pd,qd,wd,vd,"&z=0"].join("")},zd=function(){return[dd,"&v=3&t=t","&pid="+
wa(),"&rv="+Uc.yb].join("")},Ad="0.005000">Math.random(),xd=zd(),Bd=function(){xd=zd()},od={},pd="",qd="",vd="",wd="",nd=void 0,yd={},rd={},kd=void 0,sd=function(a,b){var c=0,d=0;return{og:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},Sg:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),td=1E3,Cd=function(a,b){if(Ad&&!rd[a]&&nd!==a){ld();nd=a;vd=pd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";yd[a]="&e="+c+"&eid="+a;md()}},Dd=function(a,b,c){if(Ad&&!rd[a]&&
b){a!==nd&&(ld(),nd=a);var d,e=String(b[Ib.ra]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;pd=pd?pd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(xb[h]?"1":"2")+d;vd=vd?vd+"."+k:"&ti="+k;md();2022<=ud().length&&ld()}},Ed=function(a,b,c){if(Ad&&!rd[a]){a!==nd&&(ld(),nd=a);var d=c+b;qd=qd?qd+
"."+d:"&epr="+d;md();2022<=ud().length&&ld()}};var Fd={},Gd=new xa,Hd={},Id={},Ld={name:"dataLayer",set:function(a,b){B(La(a,b),Hd);Jd()},get:function(a){return Kd(a,2)},reset:function(){Gd=new xa;Hd={};Jd()}},Kd=function(a,b){if(2!=b){var c=Gd.get(a);if(Ad){var d=Md(a);c!==d&&I("GTM",5)}return c}return Md(a)},Md=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:Od(d)},Od=function(a){for(var b=Hd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Qd=function(a,b){Id.hasOwnProperty(a)||(Gd.set(a,b),B(La(a,b),Hd),Jd())},Jd=function(a){za(Id,function(b,c){Gd.set(b,c);B(La(b,void 0),Hd);B(La(b,c),Hd);a&&delete Id[b]})},Rd=function(a,b,c){Fd[a]=Fd[a]||{};var d=1!==c?Md(b):Gd.get(b);"array"===Pa(d)||"object"===Pa(d)?Fd[a][b]=B(d):Fd[a][b]=d},Sd=function(a,b){if(Fd[a])return Fd[a][b]},Td=function(a,b){Fd[a]&&delete Fd[a][b]};var Ud=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===Vd()||d||"http:"!=D.location.protocol?a:b)+c},Vd=function(){var a=kc(),b;if(1===a)a:{var c=Zc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var je=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),ke={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},le={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},me="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var oe=function(a){var b=Kd("gtm.whitelist");b&&I("GTM",9);var c=b&&Ka(Ca(b),ke),d=Kd("gtm.blacklist");d||(d=Kd("tagTypeBlacklist"))&&I("GTM",3);d?
I("GTM",8):d=[];ne()&&(d=Ca(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=r(Ca(d),"google")&&I("GTM",2);var e=d&&Ka(Ca(d),le),f={};return function(h){var k=h&&h[Ib.ra];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=fd[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>r(c,k))if(l&&0<l.length)for(var q=0;q<
l.length;q++){if(0>r(c,l[q])){I("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=r(e,k);if(p)u=p;else{var t=ya(e,l||[]);t&&I("GTM",10);u=t}}var v=!m||u;v||!(0<=r(l,"sandboxedScripts"))||c&&-1!==r(c,"sandboxedScripts")||(v=ya(e,me));return f[k]=v}},ne=function(){return je.test(D.location&&D.location.hostname)};var pe={Mf:function(a,b){b[Ib.qd]&&"string"===typeof a&&(a=1==b[Ib.qd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Ib.sd)&&null===a&&(a=b[Ib.sd]);b.hasOwnProperty(Ib.ud)&&void 0===a&&(a=b[Ib.ud]);b.hasOwnProperty(Ib.td)&&!0===a&&(a=b[Ib.td]);b.hasOwnProperty(Ib.rd)&&!1===a&&(a=b[Ib.rd]);return a}};var qe={active:!0,isWhitelisted:function(){return!0}},re=function(a){var b=Vc.zones;!b&&a&&(b=Vc.zones=a());return b};var se=function(){};var te=!1,ue=0,ve=[];function we(a){if(!te){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){te=!0;for(var e=0;e<ve.length;e++)G(ve[e])}ve.push=function(){for(var f=0;f<arguments.length;f++)G(arguments[f]);return 0}}}function xe(){if(!te&&140>ue){ue++;try{F.documentElement.doScroll("left"),we()}catch(a){D.setTimeout(xe,50)}}}var ye=function(a){te?a():ve.push(a)};var ze={},Ae={},Be=function(a,b,c,d){if(!Ae[a]||Xc[b]||"__zone"===b)return-1;var e={};Ra(d)&&(e=B(d,e));e.id=c;e.status="timeout";return Ae[a].tags.push(e)-1},Ce=function(a,b,c,d){if(Ae[a]){var e=Ae[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function De(a){for(var b=ze[a]||[],c=0;c<b.length;c++)b[c]();ze[a]={push:function(d){d(Uc.s,Ae[a])}}}
var Ge=function(a,b,c){Ae[a]={tags:[]};qa(b)&&Ee(a,b);c&&D.setTimeout(function(){return De(a)},Number(c));return Fe(a)},Ee=function(a,b){ze[a]=ze[a]||[];ze[a].push(Ha(function(){return G(function(){b(Uc.s,Ae[a])})}))};function Fe(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ha(function(){b++;d&&b>=c&&De(a)})},yf:function(){d=!0;b>=c&&De(a)}}};var He=function(){function a(d){return!ra(d)||0>d?0:d}if(!Vc._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=ra(Ld.get("gtm.start"))?Ld.get("gtm.start"):0;Vc._li={cst:a(c-b),cbt:a(bd-b)}}};var Le={},Me=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Ne=!1;
var Re=function(a){},Qe=function(){return D.GoogleAnalyticsObject||"ga"};var Te=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Ue=/:[0-9]+$/,Ve=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Ye=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=We(a.protocol)||We(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(Ue,"").toLowerCase());var f=b,h,k=We(a.protocol);f&&(f=String(f).toLowerCase());switch(f){case "url_no_fragment":h=Xe(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Ue,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||I("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=r(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Ve(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},We=function(a){return a?a.replace(":","").toLowerCase():""},Xe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
Ze=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||I("TAGGING",1),c="/"+c);var d=b.hostname.replace(Ue,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function df(a,b,c,d){var e=vb[a],f=ef(a,b,c,d);if(!f)return null;var h=Db(e[Ib.Ld],c,[]);if(h&&h.length){var k=h[0];f=df(k.index,{B:f,w:1===k.fe?b.terminate:f,terminate:b.terminate},c,d)}return f}
function ef(a,b,c,d){function e(){if(f[Ib.We])k();else{var w=Eb(f,c,[]),y=Be(c.id,String(f[Ib.ra]),Number(f[Ib.Nd]),w[Ib.Xe]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Fa()-C;Dd(c.id,vb[a],"5");Ce(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Fa()-C;Dd(c.id,vb[a],"6");Ce(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Dd(c.id,f,"1");var z=function(){var A=Fa()-C;Dd(c.id,f,"7");Ce(c.id,y,"exception",A);x||(x=!0,k())};var C=Fa();try{Cb(w,c)}catch(A){z(A)}}}var f=vb[a],h=b.B,k=b.w,l=b.terminate;if(c.Lc(f))return null;var m=Db(f[Ib.Od],c,[]);if(m&&m.length){var n=m[0],q=df(n.index,{B:h,w:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.fe?l:q}if(f[Ib.Dd]||f[Ib.af]){var u=f[Ib.Dd]?wb:c.ah,p=h,t=k;if(!u[a]){e=Ha(e);var v=ff(a,u,e);h=v.B;k=v.w}return function(){u[a](p,t)}}return e}
function ff(a,b,c){var d=[],e=[];b[a]=gf(d,e,c);return{B:function(){b[a]=hf;for(var f=0;f<d.length;f++)d[f]()},w:function(){b[a]=jf;for(var f=0;f<e.length;f++)e[f]()}}}function gf(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function hf(a){a()}function jf(a,b){b()};var mf=function(a,b){for(var c=[],d=0;d<vb.length;d++)if(a.kb[d]){var e=vb[d];var f=b.add();try{var h=df(d,{B:f,w:f,terminate:f},a,d);h?c.push({Ee:d,ze:Fb(e),Xf:h}):(kf(d,a),f())}catch(l){f()}}b.yf();c.sort(lf);for(var k=0;k<c.length;k++)c[k].Xf();return 0<c.length};function lf(a,b){var c,d=b.ze,e=a.ze;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Ee,k=b.Ee;f=h>k?1:h<k?-1:0}return f}
function kf(a,b){if(!Ad)return;var c=function(d){var e=b.Lc(vb[d])?"3":"4",f=Db(vb[d][Ib.Ld],b,[]);f&&f.length&&c(f[0].index);Dd(b.id,vb[d],e);var h=Db(vb[d][Ib.Od],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var nf=!1,of=function(a,b,c,d,e){if("gtm.js"==b){if(nf)return!1;nf=!0}Cd(a,b);var f=Ge(a,d,e);Rd(a,"event",1);Rd(a,"ecommerce",1);Rd(a,"gtm");var h={id:a,name:b,Lc:oe(c),kb:[],ah:[],te:function(){I("GTM",6)}};h.kb=Mb(h);var k=mf(h,f);"gtm.js"!==b&&"gtm.sync"!==b||Re(Uc.s);if(!k)return k;for(var l=0;l<h.kb.length;l++)if(h.kb[l]){var m=vb[l];if(m&&!Xc[String(m[Ib.ra])])return!0}return!1};var qf=/^https?:\/\/www\.googletagmanager\.com/;function rf(){var a;return a}function tf(a,b){}
function sf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function uf(){var a=!1;return a};var vf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.B=function(){};this.w=function(){}},wf=function(a){var b=new vf;b.eventModel=a;return b},xf=function(a,b){a.targetConfig=b;return a},yf=function(a,b){a.containerConfig=b;return a},zf=function(a,b){a.h=b;return a},Af=function(a,b){a.globalConfig=b;return a},Bf=function(a,b){a.B=b;return a},Cf=function(a,b){a.w=b;return a};
vf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Df=function(a){function b(e){za(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];za(c,function(e){d.push(e)});return d};var Ef={},Ff=["G"];Ef.Fe="";var Gf=Ef.Fe.split(",");function Hf(){var a=Vc;return a.gcq=a.gcq||new If}
var Jf=function(a,b,c){Hf().register(a,b,c)},Kf=function(a,b,c,d){Hf().push("event",[b,a],c,d)},Lf=function(a,b){Hf().push("config",[a],b)},Mf={},Nf=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},Of=function(a,b,c,d,e){this.type=a;this.m=b;this.N=c||"";this.h=d;this.i=e},If=function(){this.i={};this.m={};this.h=[]},Pf=function(a,b){var c=Rc(b);return a.i[c.containerId]=a.i[c.containerId]||new Nf},Qf=function(a,b,c,d){if(d.N){var e=Pf(a,d.N),
f=e.m;if(f){var h=B(c),k=B(e.targetConfig[d.N]),l=B(e.containerConfig),m=B(e.i),n=B(a.m),q=Kd("gtm.uniqueEventId"),u=Rc(d.N).prefix,p=Cf(Bf(Af(zf(yf(xf(wf(h),k),l),m),n),function(){Ed(q,u,"2");}),function(){Ed(q,u,"3");});try{Ed(q,u,"1");f(d.N,b,d.m,p)}catch(t){
Ed(q,u,"4");}}}};
If.prototype.register=function(a,b,c){if(3!==Pf(this,a).status){Pf(this,a).m=b;Pf(this,a).status=3;c&&(Pf(this,a).i=c);var d=Rc(a),e=Mf[d.containerId];if(void 0!==e){var f=Vc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Vc[d.containerId]._spx&&(h=h.toLowerCase());var k=Kd("gtm.uniqueEventId"),l=h,m=Fa()-f;if(Ad&&!rd[k]){k!==nd&&(ld(),nd=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);wd=wd?wd+","+n:"&cl="+n}delete Mf[d.containerId]}this.flush()}};
If.prototype.push=function(a,b,c,d){var e=Math.floor(Fa()/1E3);if(c){var f=Rc(c),h;if(h=f){var k;if(k=1===Pf(this,c).status)a:{var l=f.prefix;k=!0}h=k}if(h&&(Pf(this,c).status=2,this.push("require",[],f.containerId),Mf[f.containerId]=Fa(),!Ud())){var m=encodeURIComponent(f.containerId),n=("http:"!=D.location.protocol?"https:":"http:")+
"//www.googletagmanager.com";jc(n+"/gtag/js?id="+m+"&l=dataLayer&cx=c")}}this.h.push(new Of(a,e,c,b,d));d||this.flush()};
If.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Pf(this,c.N).status&&!a)return;break;case "set":za(c.h[0],function(l,m){B(La(l,m),b.m)});break;case "config":var d=c.h[0],e=!!d[H.Qb];delete d[H.Qb];var f=Pf(this,c.N),h=Rc(c.N),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.N]={});f.h&&e||Qf(this,H.D,d,c);f.h=!0;delete d[H.qa];k?B(d,f.containerConfig):B(d,f.targetConfig[c.N]);break;
case "event":Qf(this,c.h[1],c.h[0],c)}this.h.shift()}};var Rf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Uf=function(a,b,c,d){var e=Sf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Tf(e,function(f){return f.Jb},b);if(1===e.length)return e[0].id;e=Tf(e,function(f){return f.lb},c);return e[0]?e[0].id:void 0}};
function Wf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Rf(b,e).indexOf(c)}
var Zf=function(a,b,c,d,e,f){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{f&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,u=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var t=h[p];if(null!=t)switch(p){case "secure":t&&(m+="; secure");break;case "domain":q=t;break;default:"path"==p&&(u=t),"expires"==p&&t instanceof Date&&(t=
t.toUTCString()),m+="; "+p+"="+t}}if("auto"===q){for(var v=Xf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!Yf(y,u)&&Wf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!Yf(q,u)&&Wf(m,a,l)}return k};function Tf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}
function Sf(a,b){for(var c=[],d=Rf(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Jb:1*k[0]||1,lb:1*k[1]||1}))}}return c}
var $f=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ag=/(^|\.)doubleclick\.net$/i,Yf=function(a,b){return ag.test(document.location.hostname)||"/"===b&&$f.test(a)},Xf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;ag.test(e)||$f.test(e)||a.push("none");return a};var bg="G".split(/,/),cg=!1;var dg=null,eg={},fg={},gg;function hg(a,b){var c={event:a};b&&(c.eventModel=B(b),b[H.nc]&&(c.eventCallback=b[H.nc]),b[H.tb]&&(c.eventTimeout=b[H.tb]));return c}
var ng={config:function(a){},
event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ra(a[2])&&void 0!=a[2])return;c=a[2]}var d=hg(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Ra(a[1])?b=B(a[1]):3==a.length&&g(a[1])&&(b={},Ra(a[2])||ua(a[2])?b[a[1]]=B(a[2]):b[a[1]]=a[2]);
if(b){b._clear=!0;return b}}},og={policy:!0};var pg=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},rg=function(a){var b=qg(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var sg=!1,tg=[];function ug(){if(!sg){sg=!0;for(var a=0;a<tg.length;a++)G(tg[a])}}var vg=function(a){sg?G(a):tg.push(a)};var Kg=function(a){if(Jg(a))return a;this.h=a};Kg.prototype.dg=function(){return this.h};var Jg=function(a){return!a||"object"!==Pa(a)||Ra(a)?!1:"getUntrustedUpdateValue"in a};Kg.prototype.getUntrustedUpdateValue=Kg.prototype.dg;var Lg=[],Mg=!1,Ng=function(a){return D["dataLayer"].push(a)},Og=function(a){var b=Vc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Pg(a){var b=a._clear;za(a,function(f,h){"_clear"!==f&&(b&&Qd(f,void 0),Qd(f,h))});$c||($c=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=gd(),a["gtm.uniqueEventId"]=d,Qd("gtm.uniqueEventId",d));cd=c;var e=
Qg(a);cd=null;switch(c){case "gtm.init":I("GTM",19),e&&I("GTM",20)}return e}function Qg(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Vc.zones;d=e?e.checkState(Uc.s,c):qe;return d.active?of(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Rg(){for(var a=!1;!Mg&&0<Lg.length;){Mg=!0;delete Hd.eventModel;Jd();var b=Lg.shift();if(null!=b){var c=Jg(b);if(c){var d=b;b=Jg(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Kd(h,1);if(ua(k)||Ra(k))k=B(k);Id[h]=k}}try{if(qa(b))try{b.call(Ld)}catch(v){}else if(ua(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),u=Kd(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&g(b[0])){var t=ng[b[0]];if(t&&(!c||!og[b[0]])){b=t(b);break a}}b=void 0}if(!b){Mg=!1;continue}}a=Pg(b)||a}}finally{c&&Jd(!0)}}Mg=!1}
return!a}function Sg(){var a=Rg();try{pg(D["dataLayer"],Uc.s)}catch(b){}return a}
var Ug=function(){var a=hc("dataLayer",[]),b=hc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};ye(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});vg(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Vc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Kg(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Lg.push.apply(Lg,d);if(300<
this.length)for(I("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Rg()&&h};Lg.push.apply(Lg,a.slice(0));Tg()&&G(Sg)},Tg=function(){var a=!0;return a};var Vg={};Vg.ub=new String("undefined");
var Wg=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Vg.ub?b:a[d]);return c.join("")}};Wg.prototype.toString=function(){return this.h("undefined")};Wg.prototype.valueOf=Wg.prototype.toString;Vg.jf=Wg;Vg.xc={};Vg.Pf=function(a){return new Wg(a)};var Xg={};Vg.Tg=function(a,b){var c=gd();Xg[c]=[a,b];return c};Vg.be=function(a){var b=a?0:1;return function(c){var d=Xg[c];if(d&&"function"===typeof d[b])d[b]();Xg[c]=void 0}};Vg.mg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Vg.Jg=function(a){if(a===Vg.ub)return a;var b=gd();Vg.xc[b]=a;return'google_tag_manager["'+Uc.s+'"].macro('+b+")"};Vg.xg=function(a,b,c){a instanceof Vg.jf&&(a=a.h(Vg.Tg(b,c)),b=pa);return{Jc:a,B:b}};var Yg=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||qc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Zg=function(a){Vc.hasOwnProperty("autoEventsSettings")||(Vc.autoEventsSettings={});var b=Vc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},$g=function(a,b,c){Zg(a)[b]=c},ah=function(a,b,c,d){var e=Zg(a),f=Ga(e,b,d);e[b]=c(f)},bh=function(a,b,c){var d=Zg(a);return Ga(d,b,c)};var ch=function(){for(var a=fc.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},fh=function(a,b,c,d){var e=dh(b);return Uf(a,e,eh(c),d)},gh=function(a,b,c,d){var e=""+dh(c),f=eh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},dh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},eh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var hh=["1"],ih={},mh=function(a,b,c,d){var e=jh(a);ih[e]||kh(e,b,c)||(lh(e,ch(),b,c,d),kh(e,b,c))};function lh(a,b,c,d,e){var f=gh(b,"1",d,c);Zf(a,f,c,d,0==e?void 0:new Date(Fa()+1E3*(void 0==e?7776E3:e)))}function kh(a,b,c){var d=fh(a,b,c,hh);d&&(ih[a]=d);return d}function jh(a){return(a||"_gcl")+"_au"};var nh=function(){for(var a=[],b=F.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({dd:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].dd]||(f[a[h].dd]=[]),f[a[h].dd].push({timestamp:k[1],$f:k[2]}))}return f};function oh(){for(var a=ph,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function qh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var ph,rh;function sh(a){ph=ph||qh();rh=rh||oh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(ph[l],ph[m],ph[n],ph[q])}return b.join("")}
function th(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=rh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}ph=ph||qh();rh=rh||oh();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var uh;function vh(a,b){if(!a||b===F.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var zh=function(){var a=wh,b=xh,c=yh(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){nc(F,"mousedown",d);nc(F,"keyup",d);nc(F,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Ah=function(a,b,c){for(var d=yh().decorators,e={},f=0;f<d.length;++f){var h=d[f];if((!c||h.forms)&&vh(h.domains,a)){var k=h.placement;void 0==k&&(k=h.fragment?2:1);k===b&&Ia(e,h.callback())}}return e},
yh=function(){var a=hc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Bh=/(.*?)\*(.*?)\*(.*)/,Ch=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Dh=/^(?:www\.|m\.|amp\.)+/,Eh=/([^?#]+)(\?[^#]*)?(#.*)?/,Gh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(sh(String(d))))}var e=b.join("*");return["1",Fh(e),e].join("*")},Fh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/
60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=uh)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}uh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^uh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Ih=function(){return function(a){var b=Ze(D.location.href),c=b.search.replace("?",""),d=Ve(c,"_gl",!0)||"";a.query=Hh(d)||{};var e=Ye(b,"fragment").match(/(.*?)(^|&)_gl=([^&]*)&?(.*)/);a.fragment=Hh(e&&e[3]||"")||{}}},Jh=function(){var a=
Ih(),b=yh();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ia(c,d.query),Ia(c,d.fragment));return c},Hh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Bh.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Fh(k,n)){l=!0;break a}l=!1}if(l){for(var q={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)q[u[p]]=th(u[p+1]);return q}}}}catch(t){}};
function Kh(a,b,c){function d(m){var n=m,q=/(.*?)(^|&)_gl=([^&]*)&?(.*)/.exec(n),u=n;if(q){var p=q[2],t=q[4];u=q[1];t&&(u=u+p+t)}m=u;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Eh.exec(b);if(!e)return"";var f=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+f+h+k}
function Lh(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Ah(b,1,c),e=Ah(b,2,c);if(Ja(d)){var f=Gh(d);if(c){if(a&&a.action){var h=(a.method||"").toLowerCase();if("get"===h){for(var k=a.childNodes||[],l=!1,m=0;m<k.length;m++){var n=k[m];if("_gl"===n.name){n.setAttribute("value",f);l=!0;break}}if(!l){var q=F.createElement("input");q.setAttribute("type","hidden");q.setAttribute("name","_gl");q.setAttribute("value",f);a.appendChild(q)}}else if("post"===h){var u=Kh(f,a.action);Te.test(u)&&(a.action=
u)}}}else Mh(f,a,!1)}if(!c&&Ja(e)){var p=Gh(e);Mh(p,a,!0)}}function Mh(a,b,c){if(b.href){var d=Kh(a,b.href,void 0===c?!1:c);Te.test(d)&&(b.href=d)}}
var wh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Lh(e,e.hostname)}}catch(h){}},xh=function(a){try{if(a.action){var b=Ye(Ze(a.action),"host");Lh(a,b)}}catch(c){}},Nh=function(a,b,c,d){zh();var e="fragment"===c?2:1,f={callback:a,domains:b,fragment:2===e,placement:e,forms:!!d};yh().decorators.push(f)},Oh=function(){var a=F.location.hostname,b=Ch.exec(F.referrer);
if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Dh,""),l=e.replace(Dh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Ph=function(a,b){return!1===a?!1:a||b||Oh()};var Qh={};var Rh=/^\w+$/,Sh=/^[\w-]+$/,Th=/^~?[\w-]+$/,Uh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Vh(a){return a&&"string"==typeof a&&a.match(Rh)?a:"_gcl"}
var Xh=function(){var a=Ze(D.location.href),b=Ye(a,"query",!1,void 0,"gclid"),c=Ye(a,"query",!1,void 0,"gclsrc"),d=Ye(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ve(e,"gclid",void 0);c=c||Ve(e,"gclsrc",void 0)}return Wh(b,c,d)},Wh=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Sh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==
Qh.gtm_3pds?0:Qh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Zh=function(a){var b=Xh();Yh(b,a)};
function Yh(a,b,c){function d(q,u){var p=$h(q,e);p&&Zf(p,u,h,f,l,!0)}b=b||{};var e=Vh(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.Ka?7776E3:b.Ka;c=c||Fa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.Lh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var bi=function(a,b,c,d,e){for(var f=Jh(),h=Vh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Uh[l]){var m=$h(l,h),n=f[m];if(n){var q=Math.min(ai(n),Fa()),u;b:{for(var p=q,t=Rf(m,F.cookie),v=0;v<t.length;++v)if(ai(t[v])>p){u=!0;break b}u=!1}u||Zf(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Yh(Wh(f.gclid,f.gclsrc),w)},$h=function(a,b){var c=Uh[a];if(void 0!==c)return b+c},ai=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ci(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var di=function(a,b,c,d,e){if(ua(b)){var f=Vh(e);Nh(function(){for(var h={},k=0;k<a.length;++k){var l=$h(a[k],f);if(l){var m=Rf(l,F.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},ei=function(a){return a.filter(function(b){return Th.test(b)})},fi=function(a,b){for(var c=Vh(b&&b.prefix),d={},e=0;e<a.length;e++)Uh[a[e]]&&(d[a[e]]=Uh[a[e]]);za(d,function(f,h){var k=Rf(c+h,F.cookie);if(k.length){var l=k[0],m=ai(l),n={};n[f]=[ci(l)];Yh(n,b,m)}})};var gi=/^\d+\.fls\.doubleclick\.net$/;function hi(a){var b=Ze(D.location.href),c=Ye(b,"host",!1);if(c&&c.match(gi)){var d=Ye(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function ii(a,b){if("aw"==a||"dc"==a){var c=hi("gcl"+a);if(c)return c.split(".")}var d=Vh(b);if("_gcl"==d){var e;e=Xh()[a]||[];if(0<e.length)return e}var f=$h(a,d),h;if(f){var k=[];if(F.cookie){var l=Rf(f,F.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=ci(l[m]);n&&-1===r(k,n)&&k.push(n)}h=ei(k)}else h=k}else h=k}else h=[];return h}
var ji=function(){var a=hi("gac");if(a)return decodeURIComponent(a);var b=nh(),c=[];za(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].$f);f=ei(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},ki=function(a,b,c,d,e){mh(b,c,d,e);var f=ih[jh(b)],h=Xh().dc||[],k=!1;if(f&&0<h.length){var l=Vc.joined_au=Vc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk",u=q=q+"?gclid="+h[n]+"&auiddc="+f;fc.sendBeacon&&fc.sendBeacon(u)||mc(u);k=l[m]=
!0}}null==a&&(a=k);if(a&&f){var p=jh(b),t=ih[p];t&&lh(p,t,c,d,e)}};var li;if(3===Uc.yb.length)li="g";else{var mi="G";li=mi}
var ni={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:li,OPT:"o"},oi=function(a){var b=Uc.s.split("-"),c=b[0].toUpperCase(),d=ni[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Uc.yb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Uc.yb+e};var ti=["input","select","textarea"],ui=["button","hidden","image","reset","submit"],vi=function(a){var b=a.tagName.toLowerCase();return!va(ti,function(c){return c===b})||"input"===b&&va(ui,function(c){return c===a.type.toLowerCase()})?!1:!0},wi=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):tc(a,["form"],100)},xi=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(vi(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Ai=!!D.MutationObserver,Bi=void 0,Ci=function(a){if(!Bi){var b=function(){var c=F.body;if(c)if(Ai)(new MutationObserver(function(){for(var e=0;e<Bi.length;e++)G(Bi[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;nc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<Bi.length;e++)G(Bi[e])}))})}};Bi=[];F.body?b():G(b)}Bi.push(a)};
var Ni=function(){var a=F.body,b=F.documentElement||a&&a.parentElement,c,d;if(F.compatMode&&"BackCompat"!==F.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};I("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Oi=function(a){var b=Ni(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,0)+
Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Pi=function(a){if(F.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};var Qi=[],Ri=!(!D.IntersectionObserver||!D.IntersectionObserverEntry),Si=function(a,b,c){for(var d=new D.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Qi.length;f++)if(!Qi[f])return Qi[f]=d,f;return Qi.push(d)-1},Ti=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Fa()};G(function(){return a(n)})}for(var e=[],f=[],h=0;h<b.length;h++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=Oi(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},Ui=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Ri){var e=!1;G(function(){e||Ti(a,b,c)()});return Si(function(f){e=!0;for(var h={Na:0};h.Na<f.length;h={Na:h.Na},h.Na++)G(function(k){return function(){return a(f[k.Na])}}(h))},b,c)}return D.setInterval(Ti(a,b,c),1E3)},Wi=function(a){Ri?0<=a&&a<Qi.length&&Qi[a]&&(Qi[a].disconnect(),Qi[a]=void 0):D.clearInterval(a)};var Yi=D.clearTimeout,Zi=D.setTimeout,R=function(a,b,c){if(Ud()){b&&G(b)}else return jc(a,b,c)},$i=function(){return D.location.href},aj=function(a){return Ye(Ze(a),"fragment")},bj=function(a){return Xe(Ze(a))},U=function(a,b){return Kd(a,b||2)},cj=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Ng(a)):d=Ng(a);return d},dj=function(a,b){D[a]=b},X=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},ej=function(a,b,c){return Rf(a,b,void 0===c?!0:!!c)},fj=function(a,b){if(Ud()){b&&G(b)}else lc(a,b)},gj=function(a){return!!bh(a,"init",!1)},hj=function(a){$g(a,"init",!0)},ij=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Zc;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";R(Q("https://","http://",c))},jj=function(a,b){var c=a[b];return c};var kj=Vg.xg;var lj;var Ij=new xa;function Jj(a,b){function c(h){var k=Ze(h),l=Ye(k,"protocol"),m=Ye(k,"host",!0),n=Ye(k,"port"),q=Ye(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Kj(a){return Lj(a)?1:0}
function Lj(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ua(c)){for(var d=0;d<c.length;d++)if(Kj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=r(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=Ij.get(p);t||(t=new RegExp(c,u),Ij.set(p,t));q=t.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Jj(b,
c)}return!1};var Mj=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Nj={},Oj=encodeURI,Y=encodeURIComponent,Pj=mc;var Qj=function(a,b){if(!a)return!1;var c=Ye(Ze(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Rj=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Nj.ng=function(){var a=!1;return a};var dl=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var ol=window,pl=document,ql=function(a){var b=ol._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ol["ga-disable-"+a])return!0;try{var c=ol.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Rf("AMP_TOKEN",pl.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return pl.getElementById("__gaOptOutExtension")?!0:!1};var tl=function(a){za(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.ca]||{};za(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var xl=function(a,b,c){Kf(b,c,a)},yl=function(a,b,c){Kf(b,c,a,!0)},Al=function(a,b){};
function zl(a,b){}var Z={a:{}};


Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=wc(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=F.getElementById(a.vtp_elementId);b&&(d?c=qc(b,d):c=rc(b));return Ea(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Sd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=U("gtm.referrer",1)||F.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ye(Ze(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):bj(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Yg(c,"gtm.click");cj(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!gj("cl")){var c=X("document");nc(c,"click",a,!0);hj("cl")}G(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=X(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();

Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=U("gtm.url",1);c=c||$i();var d=b[a("vtp_component")];if(!d||"URL"==d)return bj(String(c));var e=Ze(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?ua(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var q=Ye(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=Ye(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();



Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return Uc.s})}();

Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0;Z.__gclidw.priorityOverride=100})(function(b){G(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var f=null;b.vtp_enableCookieUpdateFeature&&(f=!0,void 0!==b.vtp_cookieUpdate&&(f=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
Oh())){bi(a,h,k,l,void 0);}var m={prefix:e,path:c,domain:d,Ka:void 0};Zh(m);fi(["aw","dc"],m);ki(f,e,c,d);var n=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var q=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),u=b.vtp_urlPosition,p=!!b.vtp_formDecoration;di(a,q,u,p,n);}})}();


Z.a.aev=["google"],function(){function a(p,t){var v=Sd(p,"gtm");if(v)return v[t]}function b(p,t,v,w){w||(w="element");var y=p+"."+t,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(p,w);if(z&&(x=v(z),n[y]=x,q.push(y),35<q.length)){var C=q.shift();delete n[C]}}return x}function c(p,t,v){var w=a(p,u[t]);return void 0!==w?w:v}function d(p,t){if(!p)return!1;var v=e($i());ua(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(p))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!Qj(p,w)}function e(p){m.test(p)||(p="http://"+p);return Ye(Ze(p),"HOST",!0)}function f(p,t,v){switch(p){case "SUBMIT_TEXT":return b(t,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return qc(p,"value");case "button":return rc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var t=0,v=0;v<p.elements.length;v++)vi(p.elements[v])&&t++;return t}}function l(p,t,v){var w=a(p,"interactedFormField");return w&&qc(w,t)||v}var m=/^https?:\/\//i,n={},q=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var t=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
v;case "TEXT":return b(t,w,rc)||v;case "URL":var x;a:{var z=String(a(t,"elementUrl")||v||""),C=Ze(z),A=String(p.vtp_component||"URL");switch(A){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,p.vtp_affiliatedDomains);break a;default:x=Ye(C,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(t,w,v);else{var J=p.vtp_attribute,M=a(t,"element");E=M&&qc(M,J)||v||""}return E;case "MD":var V=p.vtp_mdValue,W=b(t,"MD",Ji);return V&&W?Mi(W,V)||
v:W||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=X("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(k){He();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:oi()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,y,x){var z="DATA_LAYER"==v?U(x):k[y];z&&(l[w]=z)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var q=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||
{})[v]=w},u=function(v){return function(w,y,x,z){var C="DATA_LAYER"==v?U(x):k[y];z(C)&&q(w,C)}},p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=u(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=
v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var t=!0;t&&b.push(l);a||(a=!0,R(p,f(),e(p)))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0;Z.__awct.priorityOverride=0}();
Z.a.fsl=[],function(){function a(){var e=X("document"),f=c(),h=HTMLFormElement.prototype.submit;nc(e,"click",function(k){var l=k.target;if(l&&(l=tc(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&qc(l,"value")){var m;l.form?l.form.tagName?m=l.form:m=F.getElementById(l.form):m=tc(l,["form"],100);m&&f.store(m,l)}},!1);nc(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=b(l)&&!m,q=f.get(l),u=!0;if(d(l,function(){if(u){var p;
q&&(p=e.createElement("input"),p.type="hidden",p.name=q.name,p.value=q.value,l.appendChild(p));h.call(l);p&&l.removeChild(p)}},m,n,q))u=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),m=!0;d(k,function(){m&&h.call(k)},!1,l)&&(h.call(k),m=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(h){return va(e,function(k){return k.form===
h})};return{store:function(h,k){var l=f(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=f(h);return k?k.button:null}}}function d(e,f,h,k,l){var m=bh("fsl",h?"nv.mwt":"mwt",0),n;n=h?bh("fsl","nv.ids",[]):bh("fsl","ids",[]);if(!n.length)return!0;var q=Yg(e,"gtm.formSubmit",n),u=e.action;u&&u.tagName&&(u=e.cloneNode(!1).action);q["gtm.elementUrl"]=u;l&&(q["gtm.formSubmitElement"]=l);if(k&&m){if(!cj(q,Og(f),m))return!1}else cj(q,function(){},m||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.b=
"fsl";Z.__fsl.g=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(q){return Math.max(k,q)};ah("fsl","mwt",m,0);h||ah("fsl","nv.mwt",m,0)}var n=function(q){q.push(l);return q};ah("fsl","ids",n,[]);h||ah("fsl","nv.ids",n,[]);gj("fsl")||(a(),hj("fsl"));G(e.vtp_gtmOnSuccess)})}();




Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){G(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,ic(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(u){G(h)}}}var b=function(d,e,f){ye(function(){var h,k=Vc;k.postscribe||(k.postscribe=ec);h=k.postscribe;var l={done:e},m=F.createElement("div");m.style.display="none";m.style.visibility="hidden";F.body.appendChild(m);try{h(m,d,l)}catch(n){G(f)}})};var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,f=kj(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Jc,k=f.B;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,sc(h),k,e)()}else Zi(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();







Z.a.evl=["google"],function(){function a(f,h){this.element=f;this.uid=h}function b(){var f=Number(U("gtm.start"))||0;return(new Date).getTime()-f}function c(f,h,k,l){function m(){if(!Pi(f.target)){h.has(e.xb)||h.set(e.xb,""+b());h.has(e.sc)||h.set(e.sc,""+b());var q=0;h.has(e.zb)&&(q=Number(h.get(e.zb)));q+=100;h.set(e.zb,""+q);if(q>=k){var u=Yg(f.target,"gtm.elementVisibility",[h.uid]),p=Oi(f.target);u["gtm.visibleRatio"]=Math.round(1E3*p)/10;u["gtm.visibleTime"]=k;u["gtm.visibleFirstTime"]=Number(h.get(e.sc));
u["gtm.visibleLastTime"]=Number(h.get(e.xb));cj(u);l()}}}if(!h.has(e.Wa)&&(0==k&&m(),!h.has(e.Ba))){var n=X("self").setInterval(m,100);h.set(e.Wa,n)}}function d(f){f.has(e.Wa)&&(X("self").clearInterval(Number(f.get(e.Wa))),f.h(e.Wa))}var e={Wa:"polling-id-",sc:"first-on-screen-",xb:"recent-on-screen-",zb:"total-visible-time-",Ba:"has-fired-"};a.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.uid)};a.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.uid)};a.prototype.set=function(f,h){this.element.setAttribute("data-gtm-vis-"+f+this.uid,h)};a.prototype.h=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.uid)};(function(f){Z.__evl=f;Z.__evl.b="evl";Z.__evl.g=!0;Z.__evl.priorityOverride=0})(function(f){function h(){var y=!1,x=null;if("CSS"===l){try{x=wc(m)}catch(J){}y=!!x&&v.length!=x.length}else if("ID"===l){var z=F.getElementById(m);z&&(x=[z],y=1!=v.length||v[0]!==z)}x||(x=[],y=0<v.length);if(y){for(var C=0;C<v.length;C++){var A=
new a(v[C],p);d(A)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&Wi(w);0<v.length&&(w=Ui(k,v,[u]))}}function k(y){var x=new a(y.target,p);y.intersectionRatio>=u?x.has(e.Ba)||c(y,x,q,"ONCE"===t?function(){for(var z=0;z<v.length;z++){var C=new a(v[z],p);C.set(e.Ba,"1");d(C)}Wi(w);if(n&&Bi)for(var A=0;A<Bi.length;A++)Bi[A]===h&&Bi.splice(A,1)}:function(){x.set(e.Ba,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===t&&x.has(e.Ba)&&(x.h(e.Ba),x.h(e.zb)),x.h(e.xb))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,q=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,u=(Number(f.vtp_onScreenRatio)||50)/100,p=f.vtp_uniqueTriggerId,t=f.vtp_firingFrequency,v=[],w=-1;h();n&&Ci(h);G(f.vtp_gtmOnSuccess)})}();

var vm={};vm.macro=function(a){if(Vg.xc.hasOwnProperty(a))return Vg.xc[a]},vm.onHtmlSuccess=Vg.be(!0),vm.onHtmlFailure=Vg.be(!1);vm.dataLayer=Ld;vm.callback=function(a){ed.hasOwnProperty(a)&&qa(ed[a])&&ed[a]();delete ed[a]};function wm(){Vc[Uc.s]=vm;Ia(fd,Z.a);zb=zb||Vg;Ab=pe}
function xm(){Qh.gtm_3pds=!0;Vc=D.google_tag_manager=D.google_tag_manager||{};if(Vc[Uc.s]){var a=Vc.zones;a&&a.unregisterChild(Uc.s)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)rb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)vb.push(e[f]);for(var h=b.predicates||[],k=0;k<
h.length;k++)tb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},u=0;u<n.length;u++)q[n[u][0]]=Array.prototype.slice.call(n[u],1);sb.push(q)}xb=Z;yb=Kj;wm();Ug();te=!1;ue=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)we();else{nc(F,"DOMContentLoaded",we);nc(F,"readystatechange",we);if(F.createEventObject&&F.documentElement.doScroll){var p=!0;try{p=!D.frameElement}catch(y){}p&&xe()}nc(D,"load",we)}sg=!1;"complete"===F.readyState?ug():nc(D,
"load",ug);a:{if(!Ad)break a;D.setInterval(Bd,864E5);}
bd=(new Date).getTime();
}}xm();

})()

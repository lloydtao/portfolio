(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{351:function(t,e,r){var n=r(4),l=r(36),o=r(17),c=/"/g,f=n("".replace);t.exports=function(t,e,r,n){var d=o(l(t)),v="<"+e;return""!==r&&(v+=" "+r+'="'+f(o(n),c,"&quot;")+'"'),v+">"+d+"</"+e+">"}},352:function(t,e,r){var n=r(5);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},357:function(t,e,r){"use strict";var n=r(3),l=r(351);n({target:"String",proto:!0,forced:r(352)("link")},{link:function(t){return l(this,"a","href",t)}})},364:function(t,e,r){"use strict";r.r(e);r(357),r(19),r(41);var n={props:{title:{type:String,default:""},project:{type:String,default:""},date:{type:String,default:""},description:{type:String,default:""},image:{type:String,default:""},link:{type:String,default:"#"}}},l=r(2),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("a",{staticClass:"overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow duration-200 hover:bg-gray-700",attrs:{href:t.link}},[e("div",{staticClass:"flex flex-col md:flex-row"},[e("div",{staticClass:"overflow-hidden"},[e("image-safe",{attrs:{"image-class":"object-cover h-48 md:h-64 xl:h-48 w-full md:w-96",src:t.image,width:"640",height:"360",alt:"Preview image for"+t.project,format:"webp"}})],1),t._v(" "),e("div",{staticClass:"flex flex-1 flex-col px-5 py-4"},[e("p",{staticClass:"text-xl font-semibold text-gray-100"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),e("h2",{staticClass:"mt-1 text-sm text-gray-400"},[t._v(t._s(t.date))]),t._v(" "),e("h2",{staticClass:"mt-2 text-lg text-gray-300"},[t._v(t._s(t.project))]),t._v(" "),e("p",{staticClass:"mt-2 text-gray-400"},[t._v("\n        "+t._s(t.description)+"\n      ")]),t._v(" "),e("div",{staticClass:"mt-3"},[t._t("default")],2)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ImageSafe:r(232).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{348:function(t,e,r){var n=r(4),l=r(36),o=r(17),c=/"/g,d=n("".replace);t.exports=function(t,e,r,n){var f=o(l(t)),v="<"+e;return""!==r&&(v+=" "+r+'="'+d(o(n),c,"&quot;")+'"'),v+">"+f+"</"+e+">"}},349:function(t,e,r){var n=r(5);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},351:function(t,e,r){"use strict";var n=r(2),l=r(348);n({target:"String",proto:!0,forced:r(349)("link")},{link:function(t){return l(this,"a","href",t)}})},352:function(t,e,r){"use strict";r.r(e);r(351),r(19),r(41);var n={props:{title:{type:String,default:""},project:{type:String,default:""},date:{type:String,default:""},description:{type:String,default:""},image:{type:String,default:""},link:{type:String,default:"#"}}},l=r(3),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("a",{staticClass:"bg-gray-900 hover:bg-gray-700 duration-200 rounded-lg shadow border border-gray-700 overflow-hidden",attrs:{href:t.link}},[e("div",{staticClass:"flex flex-col md:flex-row"},[e("div",{staticClass:"overflow-hidden"},[e("nuxt-img",{staticClass:"object-cover h-48 md:h-64 xl:h-48 w-full md:w-96",attrs:{src:t.image,width:"640",height:"360",alt:"Preview image for"+t.project}})],1),t._v(" "),e("div",{staticClass:"flex flex-1 flex-col px-5 py-4"},[e("p",{staticClass:"text-xl text-gray-100 font-semibold"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),e("h2",{staticClass:"text-sm text-gray-400 mt-1"},[t._v(t._s(t.date))]),t._v(" "),e("h2",{staticClass:"text-lg text-gray-300 mt-2"},[t._v(t._s(t.project))]),t._v(" "),e("p",{staticClass:"text-gray-400 mt-2"},[t._v("\n        "+t._s(t.description)+"\n      ")]),t._v(" "),e("div",{staticClass:"mt-3"},[t._t("default")],2)])])])}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{350:function(t,e,l){"use strict";l.r(e);l(19),l(41);var r={props:{route:{type:String,default:"page-slug"},slug:{type:String,default:"slug"},title:{type:String,default:"Title"},subtitle:{type:String,default:"Subtitle"},series:{type:String,default:"Series"},localimage:{type:String,default:"localimage"},description:{type:String,default:"Description"},publishedAt:{type:String,default:"2000-01-01T00:00:00.000Z"}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},n=l(2),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("li",{staticClass:"w-full"},[e("NuxtLink",{attrs:{to:{name:t.route,params:{slug:t.slug}}}},[e("div",{staticClass:"h-full border border-gray-600 bg-gray-800 py-3 duration-100 hover:border-gray-500 hover:bg-gray-700"},[e("h1",{staticClass:"px-5 font-semibold text-white"},[t._v(t._s(t.title))]),t._v(" "),e("h2",{staticClass:"mt-0.5 px-5 text-sm text-gray-300"},[t._v("\n        "+t._s(t.formatDate(t.publishedAt))+"\n      ")]),t._v(" "),e("h2",{staticClass:"mt-1 mb-3 truncate px-5 text-sm text-gray-500"},[t._v("\n        "+t._s(t.subtitle)+"\n      ")]),t._v(" "),e("div",{staticClass:"overflow-hidden",staticStyle:{"aspect-ratio":"16 / 9"}},[e("img",{staticClass:"w-full object-cover",attrs:{src:t.localimage,alt:"Cover image placeholder",width:"640",height:"360"}})]),t._v(" "),e("p",{staticClass:"mt-3 overflow-hidden px-5 text-gray-200 sm:text-sm"},[t._v("\n        "+t._s(t.description)+"\n      ")])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);
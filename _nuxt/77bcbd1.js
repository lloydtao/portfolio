(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{358:function(t,e,r){"use strict";r.r(e);var l={props:{route:{type:String,default:"page-slug"},slug:{type:String,default:"slug"},title:{type:String,default:"Title"},series:{type:String,default:"Series"},publishedAt:{type:String,default:"2000-01-01T00:00:00.000Z"}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},n=r(2),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("li",{staticClass:"w-full"},[e("NuxtLink",{attrs:{to:{name:t.route,params:{slug:t.slug}}}},[e("div",{staticClass:"h-full bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-gray-500 py-3 duration-100"},[e("h1",{staticClass:"font-semibold text-white px-5"},[t._v(t._s(t.title))]),t._v(" "),e("h2",{staticClass:"text-sm text-gray-300 px-5"},[t._v("\n        "+t._s(t.formatDate(t.publishedAt))+" · "+t._s(t.series)+"\n      ")])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);
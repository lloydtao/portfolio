(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{394:function(t,e,n){"use strict";n.r(e);n(19),n(41);var o={props:{post:{type:Object,default:function(){return{}}}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},r=n(2),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto px-5"},[e("h1",{staticClass:"text-4xl text-gray-100 font-black mt-5"},[t._v("\n    "+t._s(t.post.title)+"\n  ")]),t._v(" "),e("p",{staticClass:"text-gray-200 mt-3"},[t._v("\n    "+t._s(t.formatDate(t.post.publishedAt))+" · "+t._s(t.post.series)+"\n  ")]),t._v(" "),e("p",{staticClass:"text-lg text-gray-200 mt-3"},[t._v("\n    "+t._s(t.post.description)+"\n  ")]),t._v(" "),e("div",{staticClass:"bg-gray-100 prose prose-sm md:prose-lg rounded mt-8 mx-auto overflow-hidden"},[e("NuxtContent",{staticClass:"px-8 pb-5",attrs:{document:t.post}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);
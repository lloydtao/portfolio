(window.webpackJsonp=window.webpackJsonp||[]).push([[8,9,10],{349:function(t,e,n){var l=n(4),r=n(36),o=n(17),c=/"/g,d=l("".replace);t.exports=function(t,e,n,l){var h=o(r(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+d(o(l),c,"&quot;")+'"'),f+">"+h+"</"+e+">"}},350:function(t,e,n){var l=n(5);t.exports=function(t){return l((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},352:function(t,e,n){"use strict";var l=n(2),r=n(349);l({target:"String",proto:!0,forced:n(350)("link")},{link:function(t){return r(this,"a","href",t)}})},353:function(t,e,n){"use strict";n.r(e);n(352),n(19),n(41);var l={props:{title:{type:String,default:""},project:{type:String,default:""},date:{type:String,default:""},description:{type:String,default:""},image:{type:String,default:""},link:{type:String,default:"#"}}},r=n(3),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("a",{staticClass:"bg-gray-900 hover:bg-gray-700 duration-200 rounded-lg shadow border border-gray-700 overflow-hidden",attrs:{href:t.link}},[e("div",{staticClass:"flex flex-col md:flex-row"},[e("div",{staticClass:"overflow-hidden"},[e("image-safe",{attrs:{"image-class":"object-cover h-48 md:h-64 xl:h-48 w-full md:w-96",src:t.image,width:"640",height:"360",alt:"Preview image for"+t.project,format:"webp"}})],1),t._v(" "),e("div",{staticClass:"flex flex-1 flex-col px-5 py-4"},[e("p",{staticClass:"text-xl text-gray-100 font-semibold"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),e("h2",{staticClass:"text-sm text-gray-400 mt-1"},[t._v(t._s(t.date))]),t._v(" "),e("h2",{staticClass:"text-lg text-gray-300 mt-2"},[t._v(t._s(t.project))]),t._v(" "),e("p",{staticClass:"text-gray-400 mt-2"},[t._v("\n        "+t._s(t.description)+"\n      ")]),t._v(" "),e("div",{staticClass:"mt-3"},[t._t("default")],2)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ImageSafe:n(232).default})},366:function(t,e,n){"use strict";n.r(e);var l=n(3),component=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col space-y-5 mx-auto md:mx-0"},[e("HackathonCard",{attrs:{title:"Junction 2021",project:"KeepChat",description:"Programmable chat API with adaptive hate speech filtering, designed to be integrated into video games as a service",image:"/images/keepchat.png",date:"19th November 2021",link:"https://dev.to/tao/keepchat-managed-chat-api-with-adaptive-hate-speech-filtering-2o0l"}}),t._v(" "),e("HackathonCard",{attrs:{title:"NASA Space Apps COVID-19 Challenge",project:"Bunchup",description:"Online community builder and event scheduler to tackle loneliness, especially during COVID-19",image:"/images/bunchup.png",date:"30th May 2020",link:"https://covid19.spaceappschallenge.org/challenges/covid-challenges/isolation-solution/teams/code-scamps/project"}}),t._v(" "),e("HackathonCard",{attrs:{title:"Met Office Hackathon 2020",project:"Tropical cyclone visualiser",description:"Visualise the path, speed and intensity of historic tropical cyclones in 3D, and filter via web interface",image:"/images/cyclones.png",date:"25th January 2020",link:"https://github.com/LloydTao/Hackathon-Met-Office-2020"}},[e("p",{staticClass:"text-yellow-400 font-semibold"},[t._v("🥇 First place!")])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HackathonCard:n(353).default})},386:function(t,e,n){"use strict";n.r(e);var l=n(3),component=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"text-3xl text-gray-100 uppercase font-black"},[t._v("\n    Hackathon showcase\n  ")]),t._v(" "),e("h1",{staticClass:"text-lg text-gray-200 mt-2"},[t._v("\n    Applications built in less than a weekend\n  ")]),t._v(" "),e("HackathonCardRow",{staticClass:"mt-5"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HackathonCardRow:n(366).default})}}]);
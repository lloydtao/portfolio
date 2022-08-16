(window.webpackJsonp=window.webpackJsonp||[]).push([[44,7,8,10,17,18,19,20,21,22,24,31,32,33,34,37],{"./components/home/hero/Hero.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)({},(function render(){var _c=this._self._c;return _c("div",{staticClass:"flex flex-col lg:w-3/4 xl:w-2/3 sm:pt-3 pb-3 sm:pb-8 mx-auto"},[_c("HeroHeading"),this._v(" "),_c("HeroButtonRow",{staticClass:"flex justify-center mt-5"})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{HeroHeading:__webpack_require__("./components/home/hero/HeroHeading.vue").default,HeroButtonRow:__webpack_require__("./components/home/hero/HeroButtonRow.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"Hero",description:"",tags:{}}},"./components/home/hero/HeroButton.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)({},(function render(){var _c=this._self._c;return _c("a",{staticClass:"flex rounded shadow py-3 px-5"},[_c("div",{staticClass:"flex items-center text-white space-x-3"},[this._t("default")],2)])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"HeroButton",description:"",tags:{},slots:[{name:"default"}]}},"./components/home/hero/HeroButtonRow.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)({},(function render(){var _c=this._self._c;return _c("div",{staticClass:"flex flex-col sm:flex-row space-y-3 sm:space-x-3 sm:space-y-0"},[_c("HeroButton",{staticClass:"bg-github-primary hover:bg-github-lighter duration-100",attrs:{href:"https://github.com/LloydTao"}},[_c("IconWrapper",[_c("GitHub")],1),this._v(" "),_c("span",{staticClass:"text-xl font-semibold"},[this._v("GitHub")])],1),this._v(" "),_c("HeroButton",{staticClass:"bg-twitter-websafe hover:bg-twitter-primary duration-100",attrs:{href:"https://twitter.com/LloydTao"}},[_c("IconWrapper",[_c("Twitter")],1),this._v(" "),_c("span",{staticClass:"text-xl font-semibold"},[this._v("Twitter")])],1)],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{GitHub:__webpack_require__("./components/icons/GitHub.vue").default,IconWrapper:__webpack_require__("./components/icons/IconWrapper.vue").default,HeroButton:__webpack_require__("./components/home/hero/HeroButton.vue").default,Twitter:__webpack_require__("./components/icons/Twitter.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"HeroButtonRow",description:"",tags:{}}},"./components/home/hero/HeroHeading.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)({},(function render(){var _c=this._self._c;return _c("div",{staticClass:"flex flex-col text-center"},[_c("div",{staticClass:"mx-auto"},[_c("image-safe",{attrs:{"image-class":"h-48 sm:h-64 w-48 sm:w-64 rounded-full shadow ring-2 sm:ring-4 ring-gray-200 bg-gray-200 overflow-hidden",src:"/images/square.png",width:"256",height:"256",alt:"Group holiday photo in Portugal",format:"webp"}})],1),this._v(" "),_c("h1",{staticClass:"text-4xl sm:text-5xl text-gray-100 uppercase font-black mt-5"},[this._v("\n    Lewis Lloyd\n  ")]),this._v(" "),_c("p",{staticClass:"text-gray-300 mt-3"},[this._v("yung software engineer ™")]),this._v(" "),_c("p",{staticClass:"text-lg sm:text-xl text-gray-200 mt-3"},[this._v("\n    Specialising in full-stack web applications and cloud architecture, with a\n    dash of product management and technical strategy.\n  ")])])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{ImageSafe:__webpack_require__("./components/ImageSafe.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"HeroHeading",description:"",tags:{}}},"./components/home/skills/Skills.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)({},(function render(){var _vm=this,_c=_vm._self._c;return _c("div",[_c("SkillsHeading"),_vm._v(" "),_c("div",{staticClass:"grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 mt-3"},[_c("SkillsCard",{staticClass:"flex-1",attrs:{skill:"Frontend",description:"JavaScript, Vue, Tailwind"},scopedSlots:_vm._u([{key:"icon",fn:function fn(){return[_c("IconWrapperSolid",{staticClass:"text-gray-50"},[_c("TemplateIcon")],1)]},proxy:!0}])}),_vm._v(" "),_c("SkillsCard",{staticClass:"flex-1",attrs:{skill:"Backend",description:"Django, PHP"},scopedSlots:_vm._u([{key:"icon",fn:function fn(){return[_c("IconWrapperSolid",{staticClass:"text-gray-50"},[_c("Server")],1)]},proxy:!0}])}),_vm._v(" "),_c("SkillsCard",{staticClass:"flex-1",attrs:{skill:"DevOps",description:"AWS, Git, Docker"},scopedSlots:_vm._u([{key:"icon",fn:function fn(){return[_c("IconWrapperSolid",{staticClass:"text-gray-50"},[_c("Cloud")],1)]},proxy:!0}])}),_vm._v(" "),_c("SkillsCard",{staticClass:"flex-1",attrs:{skill:"Database",description:"SQL, Postgres"},scopedSlots:_vm._u([{key:"icon",fn:function fn(){return[_c("IconWrapperSolid",{staticClass:"text-gray-50"},[_c("Database")],1)]},proxy:!0}])}),_vm._v(" "),_c("SkillsCard",{staticClass:"flex-1",attrs:{skill:"API Design",description:"REST, JWT, Serverless"},scopedSlots:_vm._u([{key:"icon",fn:function fn(){return[_c("IconWrapperSolid",{staticClass:"text-gray-50"},[_c("Link")],1)]},proxy:!0}])}),_vm._v(" "),_c("SkillsCard",{staticClass:"flex-1",attrs:{skill:"Machine Learning",description:"Python, scikit-learn"},scopedSlots:_vm._u([{key:"icon",fn:function fn(){return[_c("IconWrapperSolid",{staticClass:"text-gray-50"},[_c("Chip")],1)]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{SkillsHeading:__webpack_require__("./components/home/skills/SkillsHeading.vue").default,TemplateIcon:__webpack_require__("./components/icons/solid/TemplateIcon.vue").default,IconWrapperSolid:__webpack_require__("./components/icons/solid/IconWrapperSolid.vue").default,SkillsCard:__webpack_require__("./components/home/skills/SkillsCard.vue").default,Server:__webpack_require__("./components/icons/solid/Server.vue").default,Cloud:__webpack_require__("./components/icons/solid/Cloud.vue").default,Database:__webpack_require__("./components/icons/solid/Database.vue").default,Link:__webpack_require__("./components/icons/solid/Link.vue").default,Chip:__webpack_require__("./components/icons/solid/Chip.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"Skills",description:"",tags:{}}},"./components/home/skills/SkillsCard.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js");var skills_SkillsCardvue_type_script_lang_ts_=__webpack_require__("./node_modules/vue/dist/vue.esm.js").a.extend({props:{skill:{type:String,default:""},description:{type:String,default:""}}}),componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(skills_SkillsCardvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("div",{staticClass:"bg-gray-700 border border-gray-500 rounded shadow px-5 py-5 duration-100"},[_c("div",{staticClass:"flex flex-col"},[_c("div",{staticClass:"flex justify-center"},[_vm._t("icon")],2),_vm._v(" "),_c("div",{staticClass:"text-center text-gray-200 font-semibold mt-1"},[_vm._v("\n      "+_vm._s(_vm.skill)+"\n    ")]),_vm._v(" "),_c("div",{staticClass:"text-center text-sm text-gray-300 font-mono mt-1"},[_vm._v("\n      "+_vm._s(_vm.description)+"\n    ")])])])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={exportName:"default",displayName:"SkillsCard",description:"",tags:{},props:[{name:"skill",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"icon"}]}},"./components/home/skills/SkillsHeading.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)({},(function render(){this._self._c;return this._m(0)}),[function(){var _c=this._self._c;return _c("div",[_c("h1",{staticClass:"text-3xl sm:text-4xl text-gray-100 uppercase font-black"},[this._v("\n    Skills\n  ")]),this._v(" "),_c("h1",{staticClass:"text-lg text-gray-200 mt-2"},[this._v("What can I help you with?")])])}],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"SkillsHeading",description:"",tags:{}}},"./components/icons/IconWrapper.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)({},(function render(){return(0,this._self._c)("div",{staticClass:"h-6 w-6"},[this._t("default")],2)}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"IconWrapper",description:"",tags:{},slots:[{name:"default"}]}},"./components/icons/solid/Chip.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)({},(function render(){var _c=this._self._c;return _c("svg",{attrs:{role:"img",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"}},[_c("path",{attrs:{d:"M13 7H7v6h6V7z"}}),this._v(" "),_c("path",{attrs:{"fill-rule":"evenodd",d:"M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z","clip-rule":"evenodd"}})])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"Chip",description:"",tags:{}}},"./components/icons/solid/Cloud.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)({},(function render(){var _c=this._self._c;return _c("svg",{attrs:{role:"img",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"}},[_c("path",{attrs:{d:"M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"}})])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"Cloud",description:"",tags:{}}},"./components/icons/solid/Database.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)({},(function render(){var _c=this._self._c;return _c("svg",{attrs:{role:"img",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"}},[_c("path",{attrs:{d:"M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"}}),this._v(" "),_c("path",{attrs:{d:"M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"}}),this._v(" "),_c("path",{attrs:{d:"M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"}})])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"Database",description:"",tags:{}}},"./components/icons/solid/IconWrapperSolid.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)({},(function render(){return(0,this._self._c)("div",{staticClass:"h-5 w-5"},[this._t("default")],2)}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"IconWrapperSolid",description:"",tags:{},slots:[{name:"default"}]}},"./components/icons/solid/Link.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)({},(function render(){var _c=this._self._c;return _c("svg",{attrs:{role:"img",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"}},[_c("path",{attrs:{"fill-rule":"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z","clip-rule":"evenodd"}})])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"Link",description:"",tags:{}}},"./components/icons/solid/Server.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)({},(function render(){var _c=this._self._c;return _c("svg",{attrs:{role:"img",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"}},[_c("path",{attrs:{"fill-rule":"evenodd",d:"M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"Server",description:"",tags:{}}},"./components/icons/solid/TemplateIcon.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)({},(function render(){var _c=this._self._c;return _c("svg",{attrs:{role:"img",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"}},[_c("path",{attrs:{d:"M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"}})])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"TemplateIcon",description:"",tags:{}}},"./pages/index.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var pagesvue_type_script_lang_ts_=__webpack_require__("./node_modules/vue/dist/vue.esm.js").a.extend({name:"IndexPage"}),componentNormalizer=__webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(pagesvue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("div",[_c("Section",[_c("Hero")],1),this._v(" "),_c("Section",{staticClass:"bg-gray-800"},[_c("div",{staticClass:"pt-3 pb-5"},[_c("Skills")],1)])],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{Hero:__webpack_require__("./components/home/hero/Hero.vue").default,Section:__webpack_require__("./components/section/Section.vue").default,Skills:__webpack_require__("./components/home/skills/Skills.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"IndexPage",exportName:"default",description:"",tags:{}}}}]);
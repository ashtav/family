(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3,4,5],{403:function(t,e,o){var content=o(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("0836a539",content,!0,{sourceMap:!1})},404:function(t,e,o){"use strict";o(403)},405:function(t,e,o){var l=o(16)(!1);l.push([t.i,".backdrop[data-v-373e2f8e]{position:fixed;background:rgba(0,0,0,.5);width:100%;left:0;top:0;height:100%;z-index:1040}.modal-header[data-v-373e2f8e]{background:#fff;border-bottom:1px solid #eee;padding:15px 12px 15px 20px;display:flex;align-items:center}.modal-footer[data-v-373e2f8e]{border:none}.modal-close[data-v-373e2f8e]{border:none;background:none;color:#999}.modal-close[data-v-373e2f8e]:hover{color:#666}.modal-dialog-scrollable .modal-content[data-v-373e2f8e]{overflow:hidden}.modal-dialog-scrollable .modal-content .modal-body[data-v-373e2f8e]{overflow:auto;max-height:calc(100vh - 220px)}",""]),t.exports=l},406:function(t,e,o){"use strict";o.r(e);o(39),o(27),o(28),o(11),o(48),o(33),o(49);var l=o(18),r=(o(70),o(83),o(59),o(26));function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var d={props:{id:{type:String,default:""},title:{type:String,default:"Modal Title"},size:{type:String,default:"modal-md"}},data:function(){return{active:!1,display:"none",backdrop:!1}},methods:{dismiss:function(t){t.target.closest(".modal-content")&&!t.target.parentElement.classList.contains("modal-close")||this.modal(this.id)}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.d)("modal",{ids:function(t){return t.actives}})),watch:{ids:function(t){var e=this;t.includes(this.id)?(this.display="block",this.backdrop=!0,setTimeout((function(){e.active=!0}),150)):(this.active=!1,this.backdrop=!1,setTimeout((function(){e.display="none"}),100))}}},c=d,f=(o(404),o(20)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"modal fade",class:t.active?"show":"",style:{display:t.display},on:{click:t.dismiss}},[o("div",{staticClass:"modal-dialog modal-dialog-scrollable modal-dialog-centered",class:t.size,attrs:{role:"document"}},[o("div",{staticClass:"modal-content flat-style"},[o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title",domProps:{textContent:t._s(t.title)}}),t._v(" "),t._m(0)]),t._v(" "),o("div",{staticStyle:{background:"#fafbfc","border-radius":"2px"}},[t._t("default")],2)])])]),t._v(" "),o("Transition",[t.backdrop?o("div",{staticClass:"backdrop"}):t._e()])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"modal-close",attrs:{type:"button"}},[e("i",{staticClass:"la la-lg la-close"})])}],!1,null,"373e2f8e",null);e.default=component.exports},407:function(t,e,o){var content=o(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("1549979f",content,!0,{sourceMap:!1})},408:function(t,e,o){var content=o(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("0ddb9a1b",content,!0,{sourceMap:!1})},409:function(t,e,o){"use strict";o(407)},410:function(t,e,o){var l=o(16)(!1);l.push([t.i,".folder[data-v-48f7c423]{padding:35px;color:#fff;background:#363636;border-radius:3px}.folder i[data-v-48f7c423]{font-size:35px}",""]),t.exports=l},411:function(t,e,o){"use strict";o(408)},412:function(t,e,o){var l=o(16)(!1);l.push([t.i,'.example{overflow:hidden}.example .ql-toolbar.ql-snow{border:none;border-bottom:1px solid #eee;background:#fff}.example .ql-container.ql-snow{min-height:10rem;max-height:60vh;overflow:auto;border:none}.example .ql-container.ql-snow::-webkit-scrollbar,.example .ql-container.ql-snow::-webkit-scrollbar-thumb{width:5px}.example .ql-container.ql-snow::-webkit-scrollbar-track{width:5px}.example .ql-container.ql-snow::-webkit-scrollbar-thumb{background-color:#4b545c;border-radius:5px}.example .ql-editor{min-height:10rem;font-family:"Montserrat",Helvetica,Arial,serif}.modal-body::-webkit-scrollbar,.modal-body::-webkit-scrollbar-thumb{width:5px}.modal-body::-webkit-scrollbar-track{width:5px}.modal-body::-webkit-scrollbar-thumb{background-color:#4b545c;border-radius:5px}.folder-selection{list-style:none;padding:0;margin:0;position:absolute;left:23px;bottom:60px;background:#fff;min-width:280px;max-height:200px;overflow-y:auto;border:1px solid #ddd;border-radius:5px}.folder-selection::-webkit-scrollbar,.folder-selection::-webkit-scrollbar-thumb{width:5px}.folder-selection::-webkit-scrollbar-track{width:5px}.folder-selection::-webkit-scrollbar-thumb{background-color:#4b545c;border-radius:5px}.folder-selection li{padding:10px 15px;border-bottom:1px solid #eee}.folder-selection li:hover{background:#f5f5f5;cursor:pointer}.folder-selection li:last-child{border-bottom:none}.folder-selection li.active{background:#f5f5f5}',""]),t.exports=l},413:function(t,e,o){"use strict";o.r(e);var l={components:{},data:function(){return{}},computed:{},methods:{_submit:function(){}}},r=(o(409),o(20)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Modal",{attrs:{id:"form-folder-diary",title:"Folder Baru"}},[o("form",{on:{submit:function(e){return e.preventDefault(),t._submit.apply(null,arguments)}}},[o("div",{staticClass:"modal-body"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-auto"},[o("div",{staticClass:"folder"},[o("i",{staticClass:"la la-lg la-folder"})])]),t._v(" "),o("div",{staticClass:"col"},[o("div",{staticClass:"form-group"},[o("label",{staticClass:"form-label"},[t._v("Nama Folder")]),t._v(" "),o("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Inputkan nama folder"}})])])])]),t._v(" "),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.modal("form-folder-diary")}}},[t._v("\n          Batal\n        ")]),t._v(" "),o("button",{staticClass:"btn btn-primary",domProps:{textContent:t._s("Simpan")}})])])])],1)}),[],!1,null,"48f7c423",null);e.default=component.exports;installComponents(component,{Modal:o(406).default})},415:function(t,e,o){var content=o(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("dfde6f6e",content,!0,{sourceMap:!1})},419:function(t,e,o){"use strict";o.r(e);o(59);var l={components:{},data:function(){return{folders:["None","Religion","Story of My Life","Psychology","Finance","Health","Education","Relationship","Family","Work","Hobby","Other"],folder:"None",settings:{view_list_folder:!1},content:"",editorOption:{placeholder:"Apa yang ingin kamu ceritakan?",modules:{toolbar:[["bold","italic","underline","strike"],[{align:[]}],[{list:"ordered"},{list:"bullet"}],["blockquote"],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],["clean"]]}}}},computed:{},methods:{_submit:function(){var data={content:this.content};console.log(data)},selectFolder:function(t){var e=this;this.folder=t,setTimeout((function(){e.settings.view_list_folder=!1}),0)},onEditorChange:function(t){t.quill;var html=t.html;t.text;this.content=html}}},r=(o(411),o(20)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Modal",{attrs:{id:"form-diary",title:"Buat Diary",size:"modal-lg"}},[o("form",{on:{submit:function(e){return e.preventDefault(),t._submit.apply(null,arguments)}}},[o("div",{staticClass:"modal-body p-0 example"},[o("client-only",[o("quill-editor",{attrs:{content:t.content,options:t.editorOption},on:{change:function(e){return t.onEditorChange(e)}}})],1)],1),t._v(" "),o("div",{staticClass:"modal-footer"},[t.settings.view_list_folder?o("ul",{staticClass:"folder-selection"},t._l(t.folders,(function(e,i){return o("li",{key:i,class:e==t.folder?"active":"",domProps:{textContent:t._s(e)},on:{click:function(o){return t.selectFolder(e)}}})})),0):t._e(),t._v(" "),o("button",{staticClass:"btn btn-outline-secondary mr-auto",attrs:{type:"button"},on:{click:function(e){t.settings.view_list_folder=!t.settings.view_list_folder}}},[o("i",{staticClass:"la la-lg la-folder"}),t._v(" "+t._s(t.folder)+"\n        ")]),t._v(" "),o("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.modal("form-diary")}}},[t._v("\n          Batal\n        ")]),t._v(" "),o("button",{staticClass:"btn btn-primary",domProps:{textContent:t._s("Simpan")}})])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Modal:o(406).default})},423:function(t,e,o){"use strict";o(415)},424:function(t,e,o){var l=o(16)(!1);l.push([t.i,".folder[data-v-b433b026]{padding:15px;color:#fff;background:#363636;border-radius:3px}",""]),t.exports=l},433:function(t,e,o){"use strict";o.r(e);var l={meta:{auth:!0},layout:"dashboard",name:"diary",methods:{_add:function(){this.modal("form-diary")},_add_folder:function(){this.modal("form-folder-diary")}},components:{FormFolder:o(413).default}},r=(o(423),o(20)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"content-overlay"}),t._v(" "),o("div",{staticClass:"header-navbar-shadow"}),t._v(" "),o("div",{staticClass:"content-wrapper"},[o("div",{staticClass:"content-header row mb-2"},[o("div",{staticClass:"content-header-left col-md-9 col-12 mb-2"},[o("div",{staticClass:"row breadcrumbs-top"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"breadcrumb-wrapper"},[o("ol",{staticClass:"breadcrumb pl-0"},[o("li",{staticClass:"breadcrumb-item"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("Dashboard")])],1),t._v(" "),o("li",{staticClass:"breadcrumb-item"},[t._v("My Diary")])])])])])]),t._v(" "),o("div",{staticClass:"content-header-right text-md-right col-md-3 col-12"},[o("button",{staticClass:"btn btn-primary",on:{click:t._add_folder}},[o("i",{staticClass:"la la-lg la-folder-plus"})]),t._v(" "),o("button",{staticClass:"btn btn-primary",on:{click:t._add}},[o("i",{staticClass:"la la-lg la-plus"}),t._v(" Tambah\r\n          ")])])]),t._v(" "),t._m(0)]),t._v(" "),o("FormDiary"),t._v(" "),o("FormFolder")],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content-body"},[o("h4",[t._v("Recent")]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6 col-lg-4"},[o("div",{staticClass:"card"},[o("h6",{staticClass:"card-header"},[t._v("Quote")]),t._v(" "),o("div",{staticClass:"card-body"},[o("blockquote",{staticClass:"blockquote mb-0"},[o("p",[t._v("\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                        Integer posuere erat a ante.Lorem ipsum dolor sit amet,\r\n                        Integer posuere erat a ante Integer posuere erat a\r\n                        anteconsectetur.\r\n                      ")]),t._v(" "),o("footer",{staticClass:"blockquote-footer"},[t._v("\r\n                        Someone famous in\r\n                        "),o("cite",{attrs:{title:"Source Title"}},[t._v("Source Title")])])])])])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6 col-lg-3"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[o("div",{staticClass:"row mb-1"},[o("div",{staticClass:"col-auto"},[o("div",{staticClass:"folder"},[o("i",{staticClass:"la la-lg la-folder"})])]),t._v(" "),o("div",{staticClass:"col"},[o("div",[o("b",[t._v("Story of My Life")])]),t._v(" "),o("span",[t._v("24 diary")])])]),t._v(" "),o("blockquote",{staticClass:"blockquote mb-0"},[o("footer",{staticClass:"blockquote-footer"},[t._v("\r\n                        Monday, 12 January 2022\r\n                      ")])])])])])])])}],!1,null,"b433b026",null);e.default=component.exports;installComponents(component,{FormDiary:o(419).default,FormFolder:o(413).default})}}]);
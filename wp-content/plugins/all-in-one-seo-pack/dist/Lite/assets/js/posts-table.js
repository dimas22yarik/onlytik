(function(t){function e(e){for(var i,r,a=e[0],c=e[1],l=e[2],d=0,p=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,a=1;a<s.length;a++){var c=s[a];0!==n[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},n={"posts-table":0},o=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["aioseopjsonp"]=window["aioseopjsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;o.push([10,"chunk-vendors","chunk-common"]),s()})({10:function(t,e,s){t.exports=s("7ca8")},6477:function(t,e,s){},"78a7":function(t,e,s){},"7ca8":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("159b"),s("99af");var i=s("a026"),n=(s("1725"),s("75b9"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.$isPro?s("PostColumn",{attrs:{post:t.post}}):t._e(),t.$isPro?t._e():s("PostColumnLite",{attrs:{post:t.post}})],1)}),o=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("core-post-column",{attrs:{post:t.post}},[[t.post.linkCounts?s("div",{staticClass:"links"},[s("strong",{staticClass:"header"},[t._v(t._s(t.strings.links))]),s("span",[s("svg-link-internal-inbound"),t._v(t._s(t.post.linkCounts.inboundInternal))],1),s("span",[s("svg-link-internal-outbound"),t._v(t._s(t.post.linkCounts.outboundInternal))],1),s("span",[s("svg-link-affiliate"),t._v(t._s(t.post.linkCounts.affiliate))],1),s("span",[s("svg-link-external"),t._v(t._s(t.post.linkCounts.external))],1)]):t._e()]],2)},a=[],c={props:{post:Object},data:function(){return{strings:{links:this.$t.__("Links:",this.$tdPro)}}}},l=c,u=(s("8929"),s("2877")),d=Object(u["a"])(l,r,a,!1,null,null,null),p=d.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("core-post-column",{attrs:{post:t.post}})},f=[],m={props:{post:Object}},v=m,w=Object(u["a"])(v,h,f,!1,null,null,null),_=w.exports,g={components:{PostColumn:p,PostColumnLite:_},props:{post:Object}},b=g,$=Object(u["a"])(b,n,o,!1,null,null,null),k=$.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-details-column",class:{editing:t.showEditTitle||t.showEditDescription}},[s("div",[s("div",{staticClass:"edit-row edit-title"},[s("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(e){return e.preventDefault(),t.editTitle.apply(null,arguments)}}}),s("strong",[t._v(t._s(t.strings.title)+" ")]),s("span",{attrs:{id:"aioseo-"+t.columnName+"-"+t.termId+"-value"},domProps:{innerHTML:t._s(t.truncate(t.titleParsed,100))}})]),t.showEditTitle?s("div",{staticClass:"edit-row"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),s("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[s("svg-circle-check",{attrs:{width:"20"}})],1),s("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(e){return e.preventDefault(),t.cancel.apply(null,arguments)}}},[s("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e(),s("div",{staticClass:"edit-row edit-description"},[s("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(e){return e.preventDefault(),t.editDescription.apply(null,arguments)}}}),s("strong",[t._v(t._s(t.strings.description)+" ")]),s("span",{attrs:{id:"aioseo-"+t.columnName+"-"+t.termId+"-value"},domProps:{innerHTML:t._s(t.truncate(t.descriptionParsed))}})]),t.showEditDescription?s("div",{staticClass:"edit-row"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.termDescription,expression:"termDescription"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.termDescription},on:{input:function(e){e.target.composing||(t.termDescription=e.target.value)}}}),t._v(" "),s("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[s("svg-circle-check",{attrs:{width:"20"}})],1),s("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(e){return e.preventDefault(),t.cancel.apply(null,arguments)}}},[s("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e()])])},j=[],O=s("1da1"),y=s("5530"),C=(s("96cf"),s("a4d3"),s("e01a"),s("bfad")),D=s("4245"),x=s.n(D),E=s("2f62"),T=s("9c0e"),N=s("caf7"),q={mixins:[T["p"],T["r"]],props:{term:Object},data:function(){return{termId:null,columnName:null,title:null,titleParsed:null,termDescription:null,descriptionParsed:null,showEditTitle:!1,showEditDescription:!1,showTruSeo:!1,strings:{title:this.$t.__("Title:",this.$td),description:this.$t.__("Description:",this.$td),edit:this.$t.__("Edit",this.$td),save:this.$t.__("Save",this.$td),cancel:this.$t.__("Cancel",this.$td),wait:this.$t.__("Please wait...",this.$td)}}},computed:Object(y["a"])({},Object(E["e"])(["options","currentPost"])),methods:{save:function(){var t=this;this.showEditTitle=!1,this.showEditDescription=!1,this.term.title=this.title,this.term.description=this.termDescription,this.$http.post(this.$links.restUrl("termscreen")).send({termId:this.term.id,title:this.term.title,description:this.term.description}).then((function(e){t.titleParsed=e.body.title,t.descriptionParsed=e.body.description})).catch((function(e){console.error("Unable to update term with ID ".concat(t.term.id,": ").concat(e))}))},cancel:function(){this.showEditTitle=!1,this.showEditDescription=!1},editTitle:function(){this.showEditTitle=!0},editDescription:function(){this.showEditDescription=!0}},mounted:function(){this.termId=this.term.id,this.columnName=this.term.columnName,this.title=this.term.title,this.titleParsed=this.term.titleParsed,this.termDescription=this.term.description,this.descriptionParsed=this.term.descriptionParsed},created:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){var s,i,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(C["a"])(t.$http);case 2:s=e.sent,i=s.options,n=s.currentPost,o=s.tags,t.$set(t.$store.state,"options",x()(Object(y["a"])({},t.$store.state.options),Object(y["a"])({},i))),t.$set(t.$store.state,"currentPost",x()(Object(y["a"])({},t.$store.state.currentPost),Object(y["a"])({},n))),t.$set(t.$store.state,"tags",x()(Object(y["a"])({},t.$store.state.tags),Object(y["a"])({},o))),t.showTruSeo=Object(N["r"])();case 10:case"end":return e.stop()}}),e)})))()}},I=q,S=(s("dcf0"),Object(u["a"])(I,P,j,!1,null,null,null)),M=S.exports,L=s("cf27");s("2d26");i["default"].config.productionTip=!1,window.aioseo.posts&&window.aioseo.posts.forEach((function(t){new i["default"]({store:L["a"],data:{screen:window.aioseo.screen},render:function(e){return e(k,{props:{post:t}})}}).$mount("#".concat(t.columnName,"-").concat(t.id))})),window.aioseo.terms&&0===window.aioseo.posts.length&&window.aioseo.terms.forEach((function(t){new i["default"]({store:L["a"],data:{screen:window.aioseo.screen},render:function(e){return e(M,{props:{term:t}})}}).$mount("#".concat(t.columnName,"-").concat(t.id))}))},8929:function(t,e,s){"use strict";s("6477")},dcf0:function(t,e,s){"use strict";s("78a7")}});
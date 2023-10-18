"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[127],{8127:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,i,o,a,p,c,s,u=t(4165),d=t(5861),l=t(9439),h=t(8174),f=t(1087),x=t(7689),g=t(4390),b=t(168),v=t(6444),m=(v.ZP.div(r||(r=(0,b.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),v.ZP.form(i||(i=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  /* max-width: 600px; */\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"])))),Z=v.ZP.button(o||(o=(0,b.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://www.svgrepo.com/show/19021/search.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n  //Added\n  &:active {\n    opacity: 0.8;\n  }\n  //Added\n  &:focus {\n    outline: none;\n  }\n"]))),w=v.ZP.span(a||(a=(0,b.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n  color: #000;\n"]))),y=v.ZP.input(p||(p=(0,b.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),j=v.ZP.ul(c||(c=(0,b.Z)(["\n  margin-top: 20px;\n  padding-left: 10px;\n  padding-bottom: 20px;\n"]))),k=v.ZP.li(s||(s=(0,b.Z)(["\n  padding-bottom: 5px;\n"]))),z=t(2791),I=t(8379),N=t(184);var J=function(){var n=(0,z.useState)("idle"),e=(0,l.Z)(n,2),t=e[0],r=e[1],i=(0,z.useState)(null),o=(0,l.Z)(i,2),a=o[0],p=o[1],c=(0,f.lr)({searchQuery:""}),s=(0,l.Z)(c,2),b=s[0],v=s[1],J=b.get("searchQuery"),C=(0,x.TH)();return(0,z.useEffect)((function(){var n=function(){var n=(0,d.Z)((0,u.Z)().mark((function n(){var e;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r("pending"),n.prev=1,n.next=4,(0,g.v)("search/movie",{query:J});case 4:if(!(e=n.sent)){n.next=9;break}return r("resolved"),p(e.results),n.abrupt("return");case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(1),console.log(n.t0),n.abrupt("return");case 15:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(){return n.apply(this,arguments)}}();n()}),[J]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(m,{onSubmit:function(n){n.preventDefault(),""!==J.trim()?fetch():h.Am.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c!!!")},children:[(0,N.jsx)(Z,{type:"submit",children:(0,N.jsx)(w,{children:"Search"})}),(0,N.jsx)(y,{type:"text",name:"search",autocomplete:"off",value:J,autoFocus:!0,placeholder:"Search films",onChange:function(n){v({searchQuery:n.currentTarget.value.toLowerCase()})}})]}),"pending"===t&&(0,N.jsx)(I.a,{}),"resolved"===t&&(0,N.jsx)(j,{children:a.map((function(n){return(0,N.jsx)(k,{children:(0,N.jsx)(f.OL,{to:n.id.toString(),state:{from:C},children:n.title})},n.id)}))})]})},C=J},4390:function(n,e,t){t.d(e,{v:function(){return c}});var r=t(4165),i=t(1413),o=t(5861),a=t(4569),p=t.n(a)().create({baseURL:"https://api.themoviedb.org/3/",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjI2NzM2NDE0YjQyOThhMjhhNTBjMWI4ODEzZTlhNiIsInN1YiI6IjY1MjU2Y2UzNDQ3ZjljMDBhZDcxNDZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8rEsMXUCTlrOZG7wX4q7BjxLIzMsf9BEzSeowZL4e8g"}});function c(n){return s.apply(this,arguments)}function s(){return s=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,a=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:{},n.prev=1,n.next=4,p.get(e,{params:(0,i.Z)({},t)});case 4:return o=n.sent,n.abrupt("return",o.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])}))),s.apply(this,arguments)}}}]);
//# sourceMappingURL=127.3eb7e477.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[887],{4887:function(t,n,e){e.r(n),e.d(n,{Cast:function(){return N}});var r,a,c,u,i,s,o=e(5861),p=e(9439),f=e(4687),h=e.n(f),d=e(168),l=e(5867),m=l.ZP.li(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-bottom: auto;\n  text-align: center;\n"]))),x=l.ZP.img(a||(a=(0,d.Z)(["\n  width: 100%;\n  height: 240px;\n  object-fit: cover;\n"]))),v=l.ZP.div(c||(c=(0,d.Z)(["\n  padding-top: 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),g=l.ZP.p(u||(u=(0,d.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 10px;\n"]))),w=l.ZP.p(i||(i=(0,d.Z)(["\n  font-size: 12px;\n"]))),Z=e(184),y=function(t){var n=t.photo,e=void 0===n?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09uJRvSYTZguOy_L--3XALEwxqNIuvBvF8yJOHWNiew&s":n,r=t.name,a=t.character;return(0,Z.jsxs)(m,{children:[(0,Z.jsx)(x,{src:e,alt:r}),(0,Z.jsxs)(v,{children:[(0,Z.jsx)(g,{children:r}),(0,Z.jsxs)(w,{children:["Character: ",a]})]})]})},b=e(2791),k=e(7689),_=e(7972),j=l.ZP.ul(s||(s=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 24px;\n  grid-row-gap: 32px;\n"]))),L=e(9263),N=function(){var t=(0,b.useState)([]),n=(0,p.Z)(t,2),e=n[0],r=n[1],a=(0,b.useState)(!1),c=(0,p.Z)(a,2),u=c[0],i=c[1],s=(0,k.UO)().movieId;return(0,b.useEffect)((function(){function t(){return(t=(0,o.Z)(h().mark((function t(){var n;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(!0),t.prev=1,t.next=4,(0,_.wL)(s);case 4:n=t.sent,r(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),alert(t.t0.message);case 11:return t.prev=11,i(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[s]),(0,Z.jsxs)(Z.Fragment,{children:[u&&(0,Z.jsx)(L.a,{}),e.length>0?(0,Z.jsx)(j,{children:e.map((function(t){var n=t.id,e=t.profile_path,r=t.name,a=t.character;return(0,Z.jsx)(y,{photo:e?"http://image.tmdb.org/t/p/w185/".concat(e):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09uJRvSYTZguOy_L--3XALEwxqNIuvBvF8yJOHWNiew&s",name:r,character:a},n)}))}):(0,Z.jsx)("b",{children:"There is no info about actors"})]})}},7972:function(t,n,e){e.d(n,{Bt:function(){return f},LI:function(){return h},Sg:function(){return o},wL:function(){return p},wr:function(){return s}});var r=e(5861),a=e(4687),c=e.n(a),u=e(5294),i="e0f61313dcf9f8698c9430989ed8bb6d";u.Z.defaults.baseURL="https://api.themoviedb.org";var s=function(){var t=(0,r.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/3/trending/movie/day?api_key=".concat(i)).then((function(t){return t.data.results}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/3/movie/".concat(n,"?api_key=").concat(i)).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/3/movie/".concat(n,"/credits?api_key=").concat(i)).then((function(t){return t.data.cast}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/3/movie/".concat(n,"/reviews?api_key=").concat(i)).then((function(t){return t.data.results}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/3/search/movie?query=".concat(n,"&api_key=").concat(i)).then((function(t){return t.data.results}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=887.b01c0b03.chunk.js.map
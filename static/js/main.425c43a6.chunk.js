(this["webpackJsonpkpi-app"]=this["webpackJsonpkpi-app"]||[]).push([[0],{203:function(e,t,a){},339:function(e,t,a){},343:function(e,t,a){},344:function(e,t,a){},362:function(e,t,a){},366:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),i=a(57),n=a.n(i),r=(a(203),a(20)),j=a(18),l=(a(194),a(2)),d=(a(367),a(371)),o=a(70),b=a(71),O=a(85),m=a(83),x=a(97),h=a(375),v=a(182),u=a(99),p=function(e){var t=e.allTasks,a=e.indicatorData;return Object(l.jsxs)(h.a,{width:900,height:270,data:t,margin:{top:20,right:20,bottom:20,left:20},children:[Object(l.jsx)(d.a,{stroke:"#f5f5f5"}),Object(l.jsx)(o.a,{dataKey:"gsx$pagename.$t",scale:"band"}),Object(l.jsx)(b.a,{}),Object(l.jsx)(O.a,{}),Object(l.jsx)(v.a,{y:a,label:"Average",stroke:"red",strokeDasharray:"3 3"}),Object(l.jsx)(m.a,{payload:{value:"123",id:1}}),Object(l.jsx)(x.a,{dataKey:function(e){return parseFloat(e.gsx$efficiency.$t)},barSize:20,fill:"#ff7f2f"}),Object(l.jsx)(u.a,{type:"monotone",dataKey:"gsx$efficiency.$t",stroke:"#413ea0"})]})},f=(a(339),function(e){var t=e.allTasks,a=e.setTargetTask;return Object(l.jsx)("div",{className:"list-box",children:t.map((function(e,t){return Object(l.jsxs)("div",{className:"list",onClick:function(){a(e)},children:[Object(l.jsx)("div",{className:"text",children:e.gsx$pagename.$t}),Object(l.jsxs)("div",{className:"text page-score",children:[e.gsx$efficiency.$t,"%"]}),Object(l.jsx)("div",{className:"create-time",children:e.gsx$createtime.$t})]},t)}))})}),N=a(372),g=a(373),k=function(e){var t=e.pageData,a=e.indicatorName;return Object(l.jsx)(N.a,{width:"100%",children:Object(l.jsxs)(g.a,{width:343,height:130,data:t,margin:{top:20,right:30,left:5,bottom:0},children:[Object(l.jsx)(d.a,{strokeDasharray:"3 3"}),Object(l.jsx)(o.a,{mirror:!0,tick:!1,hide:"true",dataKey:"createdAt"}),Object(l.jsx)(b.a,{axisLine:!1}),Object(l.jsx)(O.a,{}),Object(l.jsx)(m.a,{verticalAlign:"bottom",height:20}),Object(l.jsx)(u.a,{type:"monotone",dataKey:a,stroke:"#d9812f",activeDot:{r:2}})]})})},y=(a(343),function(e){e.page;var t=e.pageData,a=e.openModal,c=e.setOpenModal;return Object(l.jsx)("div",{className:"modal-box",style:{display:a?"block":"none"},children:Object(l.jsxs)("div",{className:"page-detail-modal",children:[Object(l.jsx)("div",{className:"cancel-icon",onClick:function(){return c(!1)}}),Object(l.jsx)("div",{className:"main",children:"hello"}),Object(l.jsx)("div",{className:"graph-box",children:["CLS","FCP","FMP","LCP","SI","TBT"].map((function(e,a){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"graph-text",children:e}),Object(l.jsx)("div",{className:"graph-content",children:Object(l.jsx)(k,{pageData:t,indicatorName:e})})]},a)}))})]})})}),$=(a(344),a(100)),S=a.n($),C=function(e){return S.a.get(e)},D=C("https://spreadsheets.google.com/feeds/list/1pCvD5tJAirXHWGC4CRDkaLsedSlopYCTkkynSq4RbxI/2/public/values?alt=json"),w=C("https://spreadsheets.google.com/feeds/list/1pCvD5tJAirXHWGC4CRDkaLsedSlopYCTkkynSq4RbxI/3/public/values?alt=json"),T=C("https://kpi-node.herokuapp.com/all-page-name"),A=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)({}),n=Object(j.a)(i,2),r=(n[0],n[1]),d=Object(c.useState)(""),o=Object(j.a)(d,2),b=o[0],O=o[1],m=Object(c.useState)([]),x=Object(j.a)(m,2),h=x[0],v=x[1],u=Object(c.useState)([]),N=Object(j.a)(u,2),g=N[0],k=N[1],$=Object(c.useState)(""),C=Object(j.a)($,2),A=C[0],z=C[1],M=Object(c.useState)(!1),B=Object(j.a)(M,2),K=B[0],L=B[1],I=Object(c.useState)(0),J=Object(j.a)(I,2),P=J[0],R=J[1];return Object(c.useEffect)((function(){D.then((function(e){var t=e.data;R(t.feed.entry.length),s(t.feed.entry),z(t.feed.entry[0].gsx$pagename.$t)})),w.then((function(e){var t=e.data;O(t.feed.entry[0].gsx$efficiencyaverage.$t)})),T.then((function(e){var t=e.data;v(t)}))}),[]),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"topic",children:"Optimization"}),Object(l.jsxs)("div",{className:"page-optimization",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"graph-up",children:[Object(l.jsxs)("div",{className:"indicator",children:[Object(l.jsxs)("div",{className:"inter",children:[Object(l.jsx)("div",{className:"accumulate-icon"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"inter-title",children:"\u76ee\u524d\u7d2f\u7a4d\u512a\u5316\u9801\u9762"}),Object(l.jsxs)("div",{className:"inter-value",children:[P,"\u4ef6"]})]})]}),Object(l.jsxs)("div",{className:"inter",children:[Object(l.jsx)("div",{className:"average-icon"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"inter-title",children:"\u512a\u5316\u5e73\u5747\u6210\u9577"}),Object(l.jsxs)("div",{className:"inter-value",children:[b,"\uff05"]}),Object(l.jsx)("div",{className:"inter-content",children:"\u5099\u8a3b\uff1a\u6548\u7387\u5e73\u5747\u503c"})]})]})]}),Object(l.jsxs)("div",{className:"indicator",children:[Object(l.jsxs)("div",{className:"inter",children:[Object(l.jsx)("div",{className:"trace-icon"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"inter-title",children:"\u6b63\u5728\u8ffd\u8e64\u7684\u7db2\u9801"}),Object(l.jsx)("div",{className:"tag-box",children:h.map((function(e,t){return Object(l.jsx)("div",{className:"tag",onClick:function(){return t=e.pageName,S.a.get("https://kpi-node.herokuapp.com/all-score/".concat(t)).then((function(e){var t=e.data;k(t)})),void L(!0);var t},children:e.name},t)}))}),Object(l.jsx)(y,{setOpenModal:L,openModal:K,page:h,pageData:g})]})]}),Object(l.jsxs)("div",{className:"inter",children:[Object(l.jsx)("div",{className:"compare-icon"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"inter-title",children:"\u512a\u5316\u524d\u5f8c\u5dee\u7570\u6700\u9ad8\u7db2\u9801"}),Object(l.jsx)("div",{className:"inter-value",children:A}),Object(l.jsx)("div",{className:"inter-content",children:"\u5099\u8a3b\uff1a\u7121"})]})]})]}),Object(l.jsx)("div",{className:"page-count",children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("div",{className:"rank-icon"}),Object(l.jsx)("div",{className:"title-text",children:"\u7db2\u9801\u512a\u5316\u6548\u7387\u63d0\u5347\u6392\u540d"})]}),a.slice(0,8).map((function(e,t){return Object(l.jsxs)("div",{className:"rank-content",style:{color:t<3?"#ff7f2f":"#c0c0c0"},children:[Object(l.jsx)("div",{className:"rank-num",children:t+1}),Object(l.jsx)("div",{className:"rank-name",children:e.gsx$pagename.$t}),Object(l.jsxs)("div",{className:"rank-score",children:[e.gsx$efficiency.$t,"%"]})]},t)}))]})})]}),Object(l.jsxs)("div",{className:"line-chart-container",children:[Object(l.jsxs)("div",{className:"inter",children:[Object(l.jsx)("div",{className:"indicator-icon"}),Object(l.jsx)("div",{className:"inter-title",children:"\u5c08\u6848\u7e3e\u6548\u5206\u4f48"})]}),Object(l.jsx)(p,{indicatorData:b,allTasks:a})]})]}),Object(l.jsx)("div",{className:"all-list-container",children:Object(l.jsx)(f,{allTasks:a,setTargetTask:r})})]})]})},z=a(51),M=(a(362),function(){var e=Object(r.f)();return Object(l.jsxs)("nav",{className:"nav-bar",children:[Object(l.jsx)(z.b,{to:"/",className:"/"===e.pathname?"active":"",children:"Overview"}),Object(l.jsx)(z.b,{to:"/project",className:"/project"===e.pathname?"active":"",children:"Project"}),Object(l.jsx)(z.b,{to:"/optimization",className:"/optimization"===e.pathname?"active":"",children:"Optimization"})]})});var B=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(M,{}),Object(l.jsx)(r.a,{path:"/",exact:!0}),Object(l.jsx)(r.a,{path:"/optimization",exact:!0,component:A})]})},K=a(103),L=Object(K.b)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),I=L.actions,J=(I.increment,I.decrement,I.incrementByAmount,L.reducer),P=Object(K.a)({reducer:{counter:J}}),R=a(192);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(R.a,{store:P,children:Object(l.jsx)(z.a,{children:Object(l.jsx)(r.c,{children:Object(l.jsx)(B,{})})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[366,1,2]]]);
//# sourceMappingURL=main.425c43a6.chunk.js.map
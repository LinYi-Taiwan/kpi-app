(this["webpackJsonpkpi-app"]=this["webpackJsonpkpi-app"]||[]).push([[0],{214:function(e,t,a){},215:function(e,t,a){},353:function(e,t,a){},354:function(e,t,a){},355:function(e,t,a){},356:function(e,t,a){},357:function(e,t,a){},358:function(e,t,a){},359:function(e,t,a){},360:function(e,t,a){},378:function(e,t,a){},382:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(57),i=a.n(s),r=(a(214),a(20)),j=a(205),l=a(19),o=(a(215),a(2)),d=function(e){var t=e.allTasks;e.setTargetTask;return Object(o.jsx)("div",{className:"list-box",children:t.map((function(e,t){return Object(o.jsxs)("div",{className:"list",children:[Object(o.jsx)("div",{className:"text",children:e.gsx$pagename.$t}),Object(o.jsxs)("div",{className:"text page-score",children:[e.gsx$efficiency.$t,"%"]}),Object(o.jsx)("div",{className:"create-time",children:e.gsx$createtime.$t})]},t)}))})},b=a(383),u=a(384),O=a(388),x=a(99),m=a(100),v=a(83),h=a(97),f=a(178),p=a.n(f),g=function(e){var t=e.pageData,a=e.indicatorName;return Object(o.jsx)(b.a,{children:Object(o.jsxs)(u.a,{data:t,margin:{top:20,right:30,left:-20},children:[Object(o.jsx)(O.a,{strokeDasharray:"3 3"}),Object(o.jsx)(x.a,{tickFormatter:function(e){return p()(e).format("M/D")},axisLine:!1,label:!1,dataKey:"createdAt"}),Object(o.jsx)(m.a,{axisLine:!1,hide:""}),Object(o.jsx)(v.a,{}),Object(o.jsx)(h.a,{type:"monotone",dataKey:a,stroke:"#ff7f2f",activeDot:{r:4},dot:!1})]})})},N=a(389),k=a(390),y=a(195),D=a(196),$=a(193),C=a(81),S=function(e){for(var t=e.averageData,a=[],c=0,n=Object.entries(t);c<n.length;c++){var s=Object(l.a)(n[c],2),i=s[0],r=s[1];a.push({name:i,score:r})}return Object(o.jsx)(b.a,{width:"100%",height:"100%",children:Object(o.jsxs)(N.a,{outerRadius:"80%",data:a,children:[Object(o.jsx)(k.a,{stroke:"#ffb135"}),Object(o.jsx)(y.a,{tick:{fill:"#707070"},dataKey:"name",color:"#707070"}),Object(o.jsx)(D.a,{angle:30,domain:[0,1]}),Object(o.jsx)($.a,{name:"Average",dataKey:"score",stroke:"#fdd38f",fill:"rgba(255, 229, 59, 0.5)"}),Object(o.jsx)(C.a,{})]})})},w=(a(353),function(e){var t=e.pageName,a=e.pageData,c=e.averageData,n=e.openModal,s=e.setOpenModal;return Object(o.jsx)("div",{className:"modal-box",style:{display:n?"block":"none"},children:Object(o.jsxs)("div",{className:"page-detail-modal",children:[Object(o.jsx)("div",{className:"cancel-icon",onClick:function(){return s(!1)}}),Object(o.jsxs)("div",{className:"overall",children:[Object(o.jsx)("div",{className:"page-name",children:t}),Object(o.jsx)("div",{children:"time select"}),Object(o.jsx)("div",{className:"radar",children:Object(o.jsx)(S,{averageData:c})})]}),Object(o.jsx)("div",{className:"graph-box",children:["CLS","FCP","FMP","LCP","SI","TBT"].map((function(e,t){return Object(o.jsxs)("div",{className:"graph-container",children:[Object(o.jsx)("div",{className:"graph-text",children:e}),Object(o.jsx)("div",{className:"graph-content",children:Object(o.jsx)(g,{pageData:a,indicatorName:e})})]},t)}))})]})})}),T=(a(354),a(355),function(e){var t=e.projectCount;return Object(o.jsxs)("div",{className:"inter",children:[Object(o.jsx)("div",{className:"accumulate-icon"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"inter-title",children:"\u76ee\u524d\u7d2f\u7a4d\u512a\u5316\u9801\u9762"}),Object(o.jsxs)("div",{className:"inter-value",children:[t,"\u4ef6"]})]})]})}),A=(a(356),function(e){var t=e.indicatorData;return Object(o.jsxs)("div",{className:"inter",children:[Object(o.jsx)("div",{className:"average-icon"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"inter-title",children:"\u512a\u5316\u5e73\u5747\u6210\u9577"}),Object(o.jsxs)("div",{className:"inter-value",children:[t,"\uff05"]}),Object(o.jsx)("div",{className:"inter-content",children:"\u5099\u8a3b\uff1a\u6548\u7387\u5e73\u5747\u503c"})]})]})}),z=(a(357),function(e){var t=e.mostEfficientPage;return Object(o.jsxs)("div",{className:"inter",children:[Object(o.jsx)("div",{className:"compare-icon"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"inter-title",children:"\u512a\u5316\u524d\u5f8c\u5dee\u7570\u6700\u9ad8\u7db2\u9801"}),Object(o.jsx)("div",{className:"inter-value",children:t}),Object(o.jsx)("div",{className:"inter-content",children:"\u5099\u8a3b\uff1a\u7121"})]})]})}),K=(a(358),function(e){var t=e.allTasks;return Object(o.jsxs)("div",{className:"page-count",children:[Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("div",{className:"rank-icon"}),Object(o.jsx)("div",{className:"title-text",children:"\u7db2\u9801\u512a\u5316\u6548\u7387\u63d0\u5347\u6392\u540d"})]}),t.slice(0,8).map((function(e,t){return Object(o.jsxs)("div",{className:"rank-content",style:{color:t<3?"#ff7f2f":"#c0c0c0"},children:[Object(o.jsx)("div",{className:"rank-num",children:t+1}),Object(o.jsx)("div",{className:"rank-name",children:e.gsx$pagename.$t}),Object(o.jsxs)("div",{className:"rank-score",children:[e.gsx$efficiency.$t,"%"]})]},t)}))]})}),M=(a(359),function(e){var t=e.page,a=e.tagClick;return Object(o.jsxs)("div",{className:"inter",children:[Object(o.jsx)("div",{className:"trace-icon"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"inter-title",children:"\u6b63\u5728\u8ffd\u8e64\u7684\u7db2\u9801"}),Object(o.jsx)("div",{className:"tag-box",children:t.map((function(e,t){return Object(o.jsx)("div",{className:"tag",onClick:function(){return a(e.pageName)},children:e.name},t)}))})]})]})}),P=a(392),L=a(186),B=a(199),R=function(e){var t=e.allTasks,a=e.indicatorData;return Object(o.jsxs)(P.a,{width:900,height:270,data:t,margin:{top:20,right:20,bottom:20,left:20},children:[Object(o.jsx)(O.a,{stroke:"#f5f5f5"}),Object(o.jsx)(x.a,{dataKey:"gsx$pagename.$t",scale:"band"}),Object(o.jsx)(m.a,{}),Object(o.jsx)(v.a,{}),Object(o.jsx)(L.a,{y:a,label:"Average",stroke:"red",strokeDasharray:"3 3"}),Object(o.jsx)(C.a,{payload:{value:"123",id:1}}),Object(o.jsx)(B.a,{dataKey:function(e){return parseFloat(e.gsx$efficiency.$t)},barSize:20,fill:"#ff7f2f"}),Object(o.jsx)(h.a,{type:"monotone",dataKey:"gsx$efficiency.$t",stroke:"#413ea0"})]})},E=(a(360),function(e){var t=e.indicatorData,a=e.allTasks;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"inter",children:[Object(o.jsx)("div",{className:"indicator-icon"}),Object(o.jsx)("div",{className:"inter-title",children:"\u5c08\u6848\u7e3e\u6548\u5206\u4f48"})]}),Object(o.jsx)(R,{indicatorData:t,allTasks:a})]})}),F=a(200),I=a.n(F),J="localhost"===window.location.hostname?"http://localhost:3001":"https://kpi-node.herokuapp.com",W=function(e){return I.a.get(e)},q=W("https://spreadsheets.google.com/feeds/list/1pCvD5tJAirXHWGC4CRDkaLsedSlopYCTkkynSq4RbxI/2/public/values?alt=json"),G=W("https://spreadsheets.google.com/feeds/list/1pCvD5tJAirXHWGC4CRDkaLsedSlopYCTkkynSq4RbxI/3/public/values?alt=json"),H=W("".concat(J,"/all-page-name")),X=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(0),i=Object(l.a)(s,2),r=i[0],b=i[1],u=Object(c.useState)([]),O=Object(l.a)(u,2),x=O[0],m=O[1],v=Object(c.useState)([]),h=Object(l.a)(v,2),f=h[0],p=h[1],g=Object(c.useState)(""),N=Object(l.a)(g,2),k=N[0],y=N[1],D=Object(c.useState)(!1),$=Object(l.a)(D,2),C=$[0],S=$[1],P=Object(c.useState)(0),L=Object(l.a)(P,2),B=L[0],R=L[1],F=Object(c.useState)(""),I=Object(l.a)(F,2),X=I[0],Y=I[1],_=Object(c.useState)({}),Q=Object(l.a)(_,2),U=Q[0],V=Q[1];return Object(c.useEffect)((function(){q.then((function(e){var t=e.data;R(t.feed.entry.length),n(t.feed.entry),y(t.feed.entry[0].gsx$pagename.$t)})),G.then((function(e){var t=e.data;b(t.feed.entry[0].gsx$efficiencyaverage.$t)})),H.then((function(e){var t=e.data;m(t)}))}),[]),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"topic",children:"Optimization"}),Object(o.jsxs)("div",{className:"page-optimization",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"graph-up",children:[Object(o.jsxs)("div",{className:"indicator",children:[Object(o.jsx)(T,{projectCount:B}),Object(o.jsx)(A,{indicatorData:r})]}),Object(o.jsxs)("div",{className:"indicator",children:[Object(o.jsx)(M,{page:x,tagClick:function(e){(function(e){return W("".concat(J,"/all-score/").concat(e))})(e).then((function(t){var a=t.data;p(a),Y(e)})),function(e){return W("".concat(J,"/average-score/").concat(e))}(e).then((function(e){var t=e.data[0],a=(t._id,Object(j.a)(t,["_id"]));V(a)})),S(!0)}}),Object(o.jsx)(z,{mostEfficientPage:k})]}),Object(o.jsx)(K,{allTasks:a})]}),Object(o.jsx)("div",{className:"line-chart-container",children:Object(o.jsx)(E,{indicatorData:r,allTasks:a})})]}),Object(o.jsx)("div",{className:"all-list-container",children:Object(o.jsx)(d,{allTasks:a})})]}),Object(o.jsx)(w,{setOpenModal:S,pageName:X,openModal:C,pageData:f,averageData:U})]})},Y=a(61),_=(a(378),function(){var e=Object(r.f)();return Object(o.jsxs)("nav",{className:"nav-bar",children:[Object(o.jsx)(Y.b,{to:"/",className:"/"===e.pathname?"active":"",children:"Overview"}),Object(o.jsx)(Y.b,{to:"/project",className:"/project"===e.pathname?"active":"",children:"Project"}),Object(o.jsx)(Y.b,{to:"/optimization",className:"/optimization"===e.pathname?"active":"",children:"Optimization"})]})});var Q=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(_,{}),Object(o.jsx)(r.a,{path:"/",exact:!0}),Object(o.jsx)(r.a,{path:"/optimization",exact:!0,component:X})]})},U=a(80),V=a(71),Z=a.n(V),ee=a(201);function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}Object(U.b)("counter/fetchCount",function(){var e=Object(ee.a)(Z.a.mark((function e(t){var a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te(t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var ae=Object(U.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),ce=ae.actions,ne=(ce.increment,ce.decrement,ce.incrementByAmount,ae.reducer),se=Object(U.a)({reducer:{counter:ne}}),ie=a(203);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(ie.a,{store:se,children:Object(o.jsx)(Y.a,{children:Object(o.jsx)(r.c,{children:Object(o.jsx)(Q,{})})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[382,1,2]]]);
//# sourceMappingURL=main.4ecac2b6.chunk.js.map
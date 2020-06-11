(this["webpackJsonpmisai-nagarro"]=this["webpackJsonpmisai-nagarro"]||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),l=(a(54),a(76)),i=a(10),s=a(12),u=a(21),m=a(70),d=a.n(m),p=a(153),f=a(18),g=a(168),b=a(71),h=a.n(b),v=a(45),E=a.n(v),y=a(156),C=a(158),j=a(167),w=a(72),x=a.n(w),O=Object(p.a)((function(e){var t;return{header:{flexGrow:1},nav:{background:"#ffffff",borderBottomStyle:"solid",borderBottomColor:"#C8A79C",borderBottomWidth:"8px"},img:{marginRight:e.spacing(1)},bar:{display:"flex",flexDirection:"row",justifyContent:"space-between"},button2:{alignItems:"left",color:"black","&:hover":{color:"#C8A79C"}},button:{color:"#C8A79C","&:hover":{backgroundColor:"#C8A79C",color:"white"}},links:{display:"flex",flexDirection:"row",justifyContent:"center"},search:Object(u.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(f.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(f.b)(e.palette.common.white,.25)},marginLeft:0,display:"flex",alignItems:"center",justifyContent:"space-between",width:"20%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"20%"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",color:"black"},inputInput:(t={padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),borderRadius:e.shape.borderRadius,transition:e.transitions.create("width"),width:"100%"},Object(u.a)(t,e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),Object(u.a)(t,"&:hover",{border:"1px solid #cccccc",color:"black"}),t)}})),k=function(e){var t=e.categoriesSection,a=e.handleShowProducts,n=O();return r.a.createElement("div",{className:n.header},r.a.createElement(y.a,{className:n.nav},r.a.createElement(C.a,{className:n.bar},r.a.createElement("img",{src:d.a,alt:"Logo Misai",width:150}),r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(h.a,null)),r.a.createElement(g.a,{placeholder:" Search\u2026",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",null,r.a.createElement(j.a,null," ",r.a.createElement(E.a,{style:{fontSize:30}})," "),r.a.createElement(j.a,{className:n.button},"Admin "))),r.a.createElement(C.a,{className:n.links},r.a.createElement(j.a,{className:n.button2},r.a.createElement(x.a,null)," All discount"),r.a.createElement("form",null,t.map((function(e){return r.a.createElement(j.a,{className:n.button,key:e.description,onClick:a,value:e.categoryId,type:"submit"},e.description)}))))))},S=a(159),N=a(161),I=a(160),A=a(162),P=Object(p.a)({root:{maxWidth:345,margin:"10px"},listContainer:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},btn:{margin:"10px",color:"black","&:hover":{border:"1px solid black",color:"black"}}}),D=function(e){var t=e.productsList,a=e.handleDetailedProduct,n=(e.goBack,P()),o=t.map((function(e){return r.a.createElement(S.a,{key:e.productId,className:n.root},r.a.createElement(I.a,{component:"img",alt:"img",height:"300",width:"50",image:e.picture,title:"img"}),r.a.createElement(N.a,null,r.a.createElement(A.a,{gutterBottom:!0,variant:"h7",component:"h2"},"$",e.price,r.a.createElement(j.a,{className:n.btn,value:e.productId,onClick:a},"View")),r.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},e.description)))}));return r.a.createElement("div",{className:n.listContainer},o)};a(77),a(163),Object(p.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));a(91);var z=a(73),B=function(e){var t=e.promotionsSection,a={height:"400px",width:"auto",background:"transparent"};return r.a.createElement("div",null,r.a.createElement(z.Carousel,{showThumbs:!1,infiniteLoop:!0,centerMode:!0},t.map((function(e){return r.a.createElement("div",{key:e.promotionID},r.a.createElement("img",{alt:e.description,src:e.picture,style:a}),r.a.createElement("h1",{className:"legend"},e.description))}))))},L=a(50),M=a(164),T=a(165),F=a(170),W=a(169),R=a(166),Q=a(74),$=a.n(Q),G=a(75),J=a.n(G),q=a(46),U=a.n(q),V=Object(p.a)((function(e){var t;return t={Container:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",height:"70vh",width:"100vh"},text:{margin:"1em"},divImg:{display:"flex",flexDirection:"Column",alignItems:"center",height:"60vh",width:"40vh"},divDetails:{display:"flex",flexDirection:"Column",alignItems:"center"},formControl:{margin:e.spacing(1),minWidth:120,"& label.Mui-focused":{color:"#C8A79C"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#C8A79C"},"&:hover fieldset":{borderColor:"#C8A79C"},"&.Mui-focused fieldset":{borderColor:"#C8A79C"}}},selectEmpty:{marginTop:e.spacing(2)}},Object(u.a)(t,"selectEmpty",{marginTop:e.spacing(2),color:"#C8A79C",border:" #C8A79C"}),Object(u.a)(t,"btn",{margin:"10px",color:"black","&:hover":{border:"1px solid black",color:"black"}}),t})),H=function(e){var t=e.productById,a=(e.goBack,V()),n=r.a.useState({quantity:"",name:"hai"}),o=Object(s.a)(n,2),c=o[0],l=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{className:a.btn,style:{marginTop:"20px"}}," ",r.a.createElement(U.a,{style:{fontSize:15}})," back "),r.a.createElement(M.a,null),r.a.createElement(T.a,{className:a.Container,maxWidth:"sm"},r.a.createElement("div",{className:a.divImg},r.a.createElement("img",{src:t.picture,alt:"Logo Misai",width:250}),r.a.createElement("div",null,r.a.createElement(A.a,{variant:"subtitle1"}," Share with :"),r.a.createElement(j.a,null," ",r.a.createElement($.a,{style:{fontSize:30}})," "),r.a.createElement(j.a,null," ",r.a.createElement(J.a,{style:{fontSize:30}})," "))),r.a.createElement("div",{className:a.divDetails},r.a.createElement(A.a,{className:a.text,variant:"h5"}," ",t.description," "),r.a.createElement(A.a,{className:a.text,variant:"subtitle1"}," Color: ",t.colors," "),r.a.createElement(A.a,{className:a.text,variant:"subtitle1"}," Sizes: ",t.sizes," "),r.a.createElement(A.a,{className:a.text,variant:"subtitle1"}," Price: $",t.price," USD"),r.a.createElement(W.a,{variant:"outlined",className:a.formControl},r.a.createElement(F.a,{htmlFor:"outlined-age-native-simple"},"Quantity"),r.a.createElement(R.a,{native:!0,value:c.age,onChange:function(e){var t=e.target.name;l(Object(L.a)(Object(L.a)({},c),{},Object(u.a)({},t,e.target.value))),console.log(e.target.value)},label:"Quantity",inputProps:{name:"Quantity",id:"outlined-age-native-simple"}},r.a.createElement("option",{"aria-label":"None",value:""}),r.a.createElement("option",{value:1},"1"),r.a.createElement("option",{value:2},"2"),r.a.createElement("option",{value:3},"3"),r.a.createElement("option",{value:4},"4"))),r.a.createElement(j.a,{className:a.btn},r.a.createElement(E.a,{style:{fontSize:20}})," Add cart"))))},K=a(14),X=a.n(K),Y=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),c=Object(s.a)(o,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){!function(){var e=X.a.get("https://genericapiv1.azurewebsites.net/v1/shop/categories");X.a.all([e]).then(X.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=t[0].data;r(n)}))).catch((function(e){i(e)}))}()}),[]),{categories:a,errorCategories:l}},Z=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),c=Object(s.a)(o,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){!function(){var e=X.a.get("https://genericapiv1.azurewebsites.net/v1/shop/products");X.a.all([e]).then(X.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=t[0].data;r(n)}))).catch((function(e){i(e)}))}()}),[]),{products:a,errorProducts:l}},_=function(e){var t=Object(n.useState)(),a=Object(s.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(null),l=Object(s.a)(c,2),i=l[0],u=l[1];return Object(n.useEffect)((function(){!function(){var t="https://genericapiv1.azurewebsites.net/v1/shop/products/".concat(e),a=X.a.get(t);X.a.all([a]).then(X.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];o(t[0].data)}))).catch((function(e){u(e)}))}()}),[e]),{product:r,errorProduct:i}},ee=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),c=Object(s.a)(o,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){!function(){var e=X.a.get("https://genericapiv1.azurewebsites.net/v1/shop/promotions");X.a.all([e]).then(X.a.spread((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=t[0].data;r(n)}))).catch((function(e){i(e)}))}()}),[]),{promotions:a,errorPromotion:l}},te=Object(p.a)((function(){return{Page:{display:"flex",flexDirection:"column"}}})),ae=function(){var e=te(),t=Object(n.useState)(0),a=Object(s.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(0),i=Object(s.a)(l,2),u=i[0],m=i[1],d=Y(),p=d.categories,f=(d.errorCategories,ee()),g=f.promotions,b=(f.errorPromotions,Z()),h=b.products,v=(b.errorProducts,_(u)),E=v.product,y=(v.errorProduct,Object(n.useState)(0)),C=Object(s.a)(y,2),w=C[0],x=C[1],O=function(){c(o-1)},S=h.filter((function(e){return e.categoryId===w}));return r.a.createElement("div",{className:e.Page},r.a.createElement(k,{categoriesSection:p,handleShowProducts:function(e){e.preventDefault();var t=e.currentTarget.value;x(parseInt(t,10)),c(1)}}),r.a.createElement("div",{style:{marginTop:"140px"}},0===o?r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{promotionsSection:g}),r.a.createElement(D,{productsList:h})):null,1===o?r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{onClick:O,className:e.btn,style:{marginTop:"20px"}}," ",r.a.createElement(U.a,{style:{fontSize:15}})," back "),r.a.createElement(D,{productsList:S,goBack:O,handleDetailedProduct:function(e){e.preventDefault();var t=e.currentTarget.value;m(t),c(2)}})):null,2===o?r.a.createElement(H,{productById:E,goBack:O}):null))};var ne=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null))},re=function(){return r.a.createElement("h1",null,"Modal Login Form")},oe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null))};var ce=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{exact:!0,path:"/Login",component:oe}),r.a.createElement(i.a,{exact:!0,path:"/",component:ne}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){},70:function(e,t,a){e.exports=a.p+"static/media/Logo-Misai.3d55adf1.svg"},82:function(e,t,a){e.exports=a(116)}},[[82,1,2]]]);
//# sourceMappingURL=main.a7b65f2b.chunk.js.map
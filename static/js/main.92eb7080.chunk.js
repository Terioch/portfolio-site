(this["webpackJsonpportfolio-client"]=this["webpackJsonpportfolio-client"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var r=n(10),c=n.n(r),i=n(18),o=n(11),a=n(135),s=n(13),l=n(0),u=n(2),h=Object(l.createContext)({screenWidth:0,setScreenWidth:function(){}}),j=function(e){var t=e.children,n=Object(l.useState)(window.innerWidth),r=Object(s.a)(n,2),c=r[0],i=r[1];return Object(l.useEffect)((function(){window.addEventListener("resize",(function(){i(window.innerWidth)}))}),[]),Object(u.jsx)(h.Provider,{value:{screenWidth:c,setScreenWidth:i},children:t})},d=function(){return Object(l.useContext)(h)},b=n(131),p=(n(78),function(){var e=oe.DesktopMenu,t=oe.MobileMenu,n=d().screenWidth;return Object(u.jsxs)(b.a,{className:"header",children:[Object(u.jsx)(i.b,{className:"header__textDecoration",to:"/",children:Object(u.jsx)("h1",{className:"header__logo",children:"Terioch"})}),n>=568?Object(u.jsx)(e,{}):Object(u.jsx)(t,{})]})}),m=n(143),g=function(e){var t=e.label,n=e.multiline,r=e.rows,c=e.name,i=e.value,o=e.error,a=void 0===o?void 0:o,s=e.helperText,l=e.onChange;return Object(u.jsx)(m.a,{variant:"outlined",label:t,multiline:n,rows:r,name:c,value:i,onChange:l,error:a,helperText:s})},f=n(19),x=n(3),O=n(137),_=n(138),v=Object(O.a)((function(e){return{root:{margin:e.spacing(.5)},label:{textTransform:"none"}}})),y=function(e){var t=e.variant,n=e.color,r=e.size,c=e.children,i=Object(x.a)(e,["variant","color","size","children"]),o=v();return Object(u.jsx)(_.a,Object(f.a)(Object(f.a)({variant:t||"contained",color:n||"primary",size:r||"large"},i),{},{classes:o,children:c}))},C=Object(O.a)((function(e){return{root:{"& .MuiFormControl-root":{width:"97%",margin:e.spacing(1)}},MuiButton:{fontSize:"18px"}}})),k=function(e){var t=e.children,n=Object(x.a)(e,["children"]),r=C();return Object(u.jsx)("form",Object(f.a)(Object(f.a)({className:r.root,autoComplete:"off"},n),{},{children:t}))},w=n(49),N=n(146),M=(n(88),{Input:g,MuiButton:y,Form:k,Popup:function(e){var t=e.children,n=e.anchorOrigin,r=e.transformOrigin,c=e.elevation,i=Object(l.useState)(null),o=Object(s.a)(i,2),a=o[0],h=o[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(w.a,{className:"popup__link",variant:"h6",onClick:function(e){return h(e.currentTarget)},children:"Read App Description..."}),Object(u.jsx)(N.a,{open:Boolean(a),anchorEl:a,anchorOrigin:n,transformOrigin:r,elevation:c||8,onClose:function(){return h(null)},children:t})]})}}),S=Object(O.a)((function(){return{MuiButton:{fontSize:"18px"}}})),A=function(){var e=S();return Object(u.jsxs)("ul",{className:"header__menu",children:[Object(u.jsx)(i.b,{className:"header__link header__textDecoration",to:"/",children:Object(u.jsx)("li",{className:"header__linkText",children:"Portfolio"})}),Object(u.jsx)(i.b,{className:"header__link header__textDecoration",to:"/contact",children:Object(u.jsx)(M.MuiButton,{className:e.MuiButton,children:"Contact"})})]})},B=n(139),P=n(145),T=n(136),z=n(140),F=n(141),I=n(64),D=n.n(I),E=Object(O.a)((function(){return{drawerPaper:{backgroundColor:"#212121"},burger:{color:"white"}}})),R=function(){var e=E(),t=Object(l.useState)(!1),n=Object(s.a)(t,2),r=n[0],c=n[1],o=function(){return c(!r)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(B.a,{className:e.burger,onClick:o,children:Object(u.jsx)(D.a,{})}),Object(u.jsx)(P.a,{classes:{paper:e.drawerPaper},anchor:"right",keepMounted:!0,elevation:16,open:r,onClose:o,children:Object(u.jsxs)(T.a,{children:[Object(u.jsx)(z.a,{className:"header__mobile__item",onClick:o,children:Object(u.jsx)(i.b,{className:"header__link header__textDecoration",to:"/",children:Object(u.jsx)(F.a,{children:"Portfolio"})})}),Object(u.jsx)(z.a,{className:"header__mobile__item",onClick:o,children:Object(u.jsx)(i.b,{className:"header__link header__textDecoration",to:"/contact",children:Object(u.jsx)(F.a,{children:"Contact"})})})]})})]})},V=Object(O.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"absolute",right:"2.5rem",top:"40%"},icon:{color:"#fff",cursor:"pointer",margin:e.spacing(.8,0)}}})),L=Object(O.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center"},icon:{color:"#fff",cursor:"pointer",margin:e.spacing(.6,1)}}})),W=function(e){var t=V(),n=L();return"Portfolio"===e?t:n},J=(n(93),function(e){var t=e.component,n=W(t),r=n.root,c=n.icon;return Object(u.jsxs)("section",{className:"profiles__container ".concat(r),children:[Object(u.jsx)("a",{href:"https://github.com/Terioch",target:"__blank",rel:"noopener noreferrer",children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi ".concat(c),viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})}),Object(u.jsx)("a",{href:"https://twitter.com/DevTerioch",target:"__blank",rel:"noopener noreferrer",children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi ".concat(c),viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})})}),Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi ".concat(c),viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})})]})}),H=n(142),q={bookStore:{title:"Infinite Book Store",name:"book-store.png",github:"infinite-book-store",link:"https://book-store-nine.vercel.app",desc:"A Book store built in NextJS with Typescript and Shopify as a headless CMS. Products were fetched through the Shopify API with the Buy-SDK library."},technologyBlog:{title:"Technology Blog",name:"technology-blog.png",github:"technology-blog",link:"https://technology-blog-mx3fs17kh-terioch.vercel.app",desc:"A Technology Blog built in NextJS with Typescript using static site generation and styled using the Material-ui library."},todoApp:{title:"Todo App",name:"todo-app.png",github:"react-todo-app",link:"https://optimistic-poitras-267ce4.netlify.app",desc:"A Todo List App built in ReactJS using CRA and structured using class components. Contains a background image fetched using the Unsplash API."},countryLibrary:{title:"Country Library",name:"country-library.png",github:"infinite-country-library",link:"https://modest-volhard-e48a9a.netlify.app",desc:"A website built in vanilla HTML, CSS and Javascript which displays information regarding a specific country fetched using the countries.eu API."},currencyConverter:{title:"Currency Converter",name:"currency-converter.png",github:"react-currency-converter",link:"https://dreamy-hopper-a7849c.netlify.app",desc:"A simple currency converter built in ReactJS using CRA. Currency data is fetched via the Exchange Rates API."},clickerGame:{title:"Clicker Game",name:"clicker-game.png",github:"react-clicker-game",link:"http://rio-clicker-game.herokuapp.com",desc:"A simple clicker game built in React with Typescript using CRA. Earn points based on clicks and progress through purchasing upgrades in the shop."}},K=(n(94),Object(O.a)((function(e){return{MuiButton__learnMore:{borderRadius:"30px",padding:e.spacing(1.5,3),fontSize:"20px"},MuiButton__viewSite:{fontSize:"18px"},Paper:{padding:e.spacing(0),backgroundColor:"#0F1217",cursor:"pointer",borderRadius:"15px"},imageContainer:{position:"relative"},Link:{textDecoration:"none"},typography:{backgroundColor:"#e8e8e8",padding:e.spacing(1)}}}))),G=function(){var e=K(),t=oe.PortfolioItem,n=oe.Profiles,r=M.MuiButton,c=d().screenWidth;return Object(u.jsxs)("main",{className:"portfolio__container",children:[Object(u.jsxs)("section",{className:"portfolio__intro__container",children:[Object(u.jsx)("h1",{className:"portfolio__intro__title",children:"Frontend ReactJS Developer based in the UK"}),c>968&&Object(u.jsx)(n,{component:"Portfolio"}),Object(u.jsx)(i.b,{className:e.Link,to:"/contact",children:Object(u.jsx)(r,{className:e.MuiButton__learnMore,children:"Learn More"})})]}),Object(u.jsxs)("section",{className:"portfolio__main__container",children:[Object(u.jsx)("h1",{className:"portfolio__main__title",children:"Portfolio"}),Object(u.jsx)(H.a,{container:!0,spacing:2,children:Object.keys(q).map((function(n,r){return Object(u.jsx)(t,{Images:q,image:n,classes:e},r)}))})]})]})},Q=function(e){var t=e.Images,n=e.image,r=e.classes,c=d().screenWidth,i=M.MuiButton,o=M.Popup,h=t[n],j=h.title,b=h.name,p=h.github,m=h.link,g=h.desc,f=Object(l.useState)(""),x=Object(s.a)(f,2),O=x[0],_=x[1];Object(l.useEffect)((function(){if(c>1300||c<=960&&c>568)return _("h6");_("body1")}),[c]);return Object(u.jsx)(H.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(a.a,{className:"".concat(r.Paper," portfolio__grid__item"),children:[Object(u.jsx)("h1",{className:"portfolio__grid__title",children:j}),Object(u.jsxs)("div",{className:r.imageContainer,children:[Object(u.jsx)("img",{className:"portfolio__grid__image",src:"".concat("/portfolio-site","/images/").concat(b),alt:"Loading..."}),Object(u.jsx)("div",{className:"portfolio__grid__overlay",children:Object(u.jsxs)("div",{className:"overlay__item",children:[Object(u.jsx)("a",{href:"https://github.com/Terioch/".concat(p),target:"__blank",rel:"noopener noreferrer",children:Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"portfolio__grid__github",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})}),Object(u.jsx)("a",{className:r.Link,href:m,target:"__blank",rel:"noopener noreferrer",children:Object(u.jsx)(i,{className:r.MuiButton__viewSite,size:c<=1068?"medium":"large",children:"View Site"})}),c<=568?Object(u.jsx)(o,{open:!0,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},elevation:8,children:Object(u.jsx)(w.a,{className:r.typography,children:g})}):Object(u.jsx)(w.a,{className:"portfolio__grid__text",variant:"h6"===O?"h6":"body1",children:g})]})})]})]})})},U=n(56),Z=n.n(U),$=n(65),X=n(66),Y=n.n(X),ee=(n(98),n(17));var te=function(e){var t=Object(l.useState)(e),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(l.useState)(Object(f.a)({},e)),o=Object(s.a)(i,2),a=o[0],u=o[1];return{formValues:r,setFormValues:c,formErrors:a,setFormErrors:u,handleInputChange:function(e){var t=e.target,n=t.name,i=t.value;c(Object(f.a)(Object(f.a)({},r),{},Object(ee.a)({},n,i)))},resetForm:function(){c(e),u({})}}},ne=Object(O.a)((function(){return{MuiButton:{fontSize:"18px"}}})),re={name:"",email:"",message:""},ce=function(){var e=ne(),t=M.Form,n=M.Input,r=M.MuiButton,c=te(re),i=c.formValues,o=c.formErrors,a=c.setFormErrors,s=c.handleInputChange,l=c.resetForm,h=function(){var e=Object($.a)(Z.a.mark((function e(t){var n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.a.sendForm("gmail_dit3vnl","portfolio_template",t.currentTarget,"user_KjeqDIChuQZZtV1bpVSjl");case 3:n=e.sent,console.log(n.text),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.text);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(t,{onSubmit:function(e){e.preventDefault(),function(){var e=Object(f.a)({},i);return e.name=i.name?"":"This field is required.",e.email=/$^|.+@.+..+/.test(i.email)?"":"Please provide a valid Email address.",e.message=i.message?"":"This field is required.",a(Object(f.a)({},e)),Object.values(e).every((function(e){return""===e}))}()&&(h(e),l())},children:[Object(u.jsx)("h1",{className:"contact__title",children:"Queries"}),Object(u.jsx)(H.a,{container:!0,children:Object(u.jsxs)(H.a,{item:!0,xs:12,children:[Object(u.jsx)(n,{label:"Full Name*",name:"name",value:i.name,error:!!o.name,helperText:o.name,onChange:s}),Object(u.jsx)(n,{label:"Email",name:"email",value:i.email,error:!!o.email,helperText:o.email,onChange:s}),Object(u.jsx)(n,{label:"Message*",multiline:!0,rows:5,name:"message",value:i.message,error:!!o.message,helperText:o.message,onChange:s}),Object(u.jsx)("div",{className:"contact__btn__container",children:Object(u.jsx)(r,{className:e.MuiButton,type:"submit",children:"Send Message"})})]})})]})})},ie=Object(O.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:e.spacing(2.1),textAlign:"center",backgroundColor:"#212121"},text:{color:"rgba(245, 245, 245, 0.719)",margin:e.spacing(.6)}}})),oe={Header:p,MobileMenu:R,DesktopMenu:A,Profiles:J,Portfolio:G,PortfolioItem:Q,Contact:ce,Footer:function(){var e=ie(),t=oe.Profiles;return Object(u.jsxs)("footer",{className:e.root,children:[Object(u.jsx)(t,{component:"Footer"}),Object(u.jsx)("p",{className:e.text,children:"Terioch Development | Copyright \xa9 2021"})]})}};n(99);var ae=function(){var e=oe.Header,t=oe.Portfolio,n=oe.Contact,r=oe.Footer;return Object(u.jsx)(j,{children:Object(u.jsxs)("main",{className:"App",children:[Object(u.jsx)(e,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,component:t}),Object(u.jsx)(a.a,{className:"contact__container",children:Object(u.jsx)(o.a,{path:"/contact",component:n})})]}),Object(u.jsx)(r,{})]})})};c.a.render(Object(u.jsx)(i.a,{children:Object(u.jsx)(o.a,{path:"/",component:ae})}),document.getElementById("root"))},78:function(e,t,n){},88:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.92eb7080.chunk.js.map
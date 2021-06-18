(this["webpackJsonpportfolio-client"]=this["webpackJsonpportfolio-client"]||[]).push([[0],{100:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var r=n(10),c=n.n(r),o=n(19),i=n(11),a=n(150),s=n(72),l=n(52),h=n(138),u=n(51),d=Object(s.a)({palette:{primary:{main:l.a[800],light:h.a[300]},secondary:{main:u.a[500],light:u.a[300]}},overrides:{MuiButton:{root:{textTransform:"none"}}},props:{MuiButton:{disableRipple:!0,disableElevation:!0}}}),j=n(144),b=n(13),p=n(0),m=n(2),f=Object(p.createContext)({screenWidth:0,setScreenWidth:function(){}}),g=function(e){var t=e.children,n=Object(p.useState)(window.innerWidth),r=Object(b.a)(n,2),c=r[0],o=r[1];return Object(p.useEffect)((function(){window.addEventListener("resize",(function(){o(window.innerWidth)}))}),[]),Object(m.jsx)(f.Provider,{value:{screenWidth:c,setScreenWidth:o},children:t})},O=function(){return Object(p.useContext)(f)},x=n(139),_=(n(86),function(){var e=be.DesktopMenu,t=be.MobileMenu,n=O().screenWidth;return Object(m.jsxs)(x.a,{className:"header",children:[Object(m.jsx)(o.b,{className:"header__textDecoration",to:"/",children:Object(m.jsx)("h1",{className:"header__logo",children:"Terioch"})}),n>=568?Object(m.jsx)(e,{}):Object(m.jsx)(t,{})]})}),v=function(e){var t=e.href,n=e.target,r=e.rel,c=e.className,o=e.children;return Object(m.jsx)("a",{className:c,href:t,target:n||"__blank",rel:r||"noopener noreferrer",children:o})},y=n(20),k=n(3),N=n(142),C=n(143),w=Object(N.a)((function(e){return{root:{margin:e.spacing(.5)}}})),M=function(e){var t=e.variant,n=e.color,r=e.size,c=e.children,o=Object(k.a)(e,["variant","color","size","children"]),i=w();return Object(m.jsx)(C.a,Object(y.a)(Object(y.a)({variant:t||"contained",color:n||"primary",size:r||"large"},o),{},{classes:i,children:c}))},S=Object(N.a)((function(e){return{root:{"& .MuiFormControl-root":{width:"97%",margin:e.spacing(1)}},MuiButton:{fontSize:"18px"}}})),A=function(e){var t=e.children,n=Object(k.a)(e,["children"]),r=S();return Object(m.jsx)("form",Object(y.a)(Object(y.a)({className:r.root,autoComplete:"off"},n),{},{children:t}))},T=n(151),z=function(e){var t=e.label,n=e.multiline,r=e.rows,c=e.name,o=e.value,i=e.error,a=void 0===i?void 0:i,s=e.helperText,l=e.onChange;return Object(m.jsx)(T.a,{variant:"outlined",label:t,multiline:n,rows:r,name:c,color:"secondary",value:o,onChange:l,error:a,helperText:s})},P=n(154),B=(n(94),{AnchorLink:v,MuiButton:M,Form:A,Input:z,Popup:function(e){var t=e.children,n=e.anchor,r=e.anchorOrigin,c=e.transformOrigin,o=e.onClose;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(P.a,{open:Boolean(n),anchorEl:n,anchorOrigin:r,transformOrigin:c,onClose:o,children:t})})},SvgIcon:function(e){var t=e.width,n=e.height,r=e.className,c=e.children,o=e.onMouseEnter,i=e.onMouseLeave;return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t||"25",height:n||"25",fill:"currentColor",className:r,viewBox:"0 0 16 16",onMouseEnter:o,onMouseLeave:i,children:c})}}),I=Object(N.a)((function(){return{MuiButton:{fontSize:"18px"}}})),L=function(){var e=I(),t=B.MuiButton;return Object(m.jsxs)("ul",{className:"header__menu",children:[Object(m.jsx)(o.b,{className:"header__link header__textDecoration",to:"/",children:Object(m.jsx)("li",{className:"header__linkText",children:"Portfolio"})}),Object(m.jsx)(o.b,{className:"header__link header__textDecoration",to:"/contact",children:Object(m.jsx)(t,{className:e.MuiButton,children:"Contact"})})]})},F=n(146),E=n(153),D=n(145),V=n(147),R=n(148),W=n(69),J=n.n(W),H=Object(N.a)((function(){return{drawerPaper:{backgroundColor:"#212121"},burger:{color:"white"}}})),q=function(){var e=H(),t=Object(p.useState)(!1),n=Object(b.a)(t,2),r=n[0],c=n[1],i=function(){return c(!r)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(F.a,{className:e.burger,onClick:i,children:Object(m.jsx)(J.a,{})}),Object(m.jsx)(E.a,{classes:{paper:e.drawerPaper},anchor:"right",keepMounted:!0,elevation:16,open:r,onClose:i,children:Object(m.jsxs)(D.a,{children:[Object(m.jsx)(V.a,{className:"header__mobile__item",onClick:i,children:Object(m.jsx)(o.b,{className:"header__link header__textDecoration",to:"/",children:Object(m.jsx)(R.a,{children:"Portfolio"})})}),Object(m.jsx)(V.a,{className:"header__mobile__item",onClick:i,children:Object(m.jsx)(o.b,{className:"header__link header__textDecoration",to:"/contact",children:Object(m.jsx)(R.a,{children:"Contact"})})})]})})]})},Q=n(149),G={borgfy:{title:"Borgfy",src:"borgfy.png",github:"null",link:"https://borgfy-five.vercel.app",desc:"A website for a technology development company built in NextJS with Ghost as a headless CMS. The design was implemented using Styled Components, SCSS and Material UI."},bookStore:{title:"Infinite Book Store",src:"book-store.png",github:"infinite-book-store",link:"https://book-store-nine.vercel.app",desc:"A Book store built in NextJS, Typescript, and Shopify with headless integration as well as full firebase authentication. Products are fetched using GraphQL through Shopify's storefront API."},technologyBlog:{title:"Technology Blog",src:"technology-blog.png",github:"technology-blog",link:"https://tech-blog-five.vercel.app/",desc:"A Technology Blog built in NextJS, Typescript, and Material-UI with SQLite database integration using Prisma alongside form authentication."},todoApp:{title:"Todo App",src:"todo-app.png",github:"react-todo-app",link:"https://optimistic-poitras-267ce4.netlify.app",desc:"A Todo List App built in ReactJS and structured using class components. Includes full CRUD functionality as well as MySQL database integration. Contains a background image fetched using the Unsplash REST API."},countryLibrary:{title:"Country Library",src:"country-library.png",github:"infinite-country-library",link:"https://modest-volhard-e48a9a.netlify.app",desc:"A website built in vanilla HTML, CSS and Javascript that displays information regarding a specific country fetched using the countries.eu API."},currencyConverter:{title:"Currency Converter",src:"currency-converter.png",github:"react-currency-converter",link:"https://dreamy-hopper-a7849c.netlify.app",desc:"A simple currency converter built in ReactJS. Currency data is fetched via the Exchange Rates API."},clickerGame:{title:"Clicker Game",src:"clicker-game.png",github:"react-clicker-game",link:"http://rio-clicker-game.herokuapp.com",desc:"A clicker game built in React with Typescript. Earn points based on clicks and make progress by purchasing upgrades in the shop."}},U=(n(99),Object(N.a)((function(e){return{MuiButton__learnMore:{borderRadius:"30px",padding:e.spacing(1.5,3),fontSize:"20px"},MuiButton__viewSite:{fontSize:"18px"},Paper:{backgroundColor:"#0F1217",cursor:"pointer",borderRadius:"15px"},Link:{textDecoration:"none"},Typography:{backgroundColor:"#e8e8e8",padding:e.spacing(1)}}}))),Z=function(){var e=be.PortfolioItem,t=be.Profiles,n=B.MuiButton,r=U(),c=O().screenWidth;return Object(m.jsxs)("main",{className:"portfolio__container",children:[Object(m.jsxs)("section",{className:"portfolio__intro__container",children:[Object(m.jsx)("h1",{className:"portfolio__intro__title",children:"Web Developer specializing in React and NextJS."}),c>968&&Object(m.jsx)(t,{component:"Portfolio"}),Object(m.jsx)(o.b,{className:r.Link,to:"/contact",children:Object(m.jsx)(n,{className:r.MuiButton__learnMore,color:"secondary",children:"Learn More"})})]}),Object(m.jsxs)("section",{className:"portfolio__main__container",children:[Object(m.jsx)("h1",{className:"portfolio__main__title",children:"Portfolio"}),Object(m.jsx)(Q.a,{container:!0,spacing:2,children:Object.keys(G).map((function(t,n){return Object(m.jsx)(e,{Items:G,item:t,classes:r},n)}))})]})]})};var K=function(){var e=Object(p.useState)(null),t=Object(b.a)(e,2),n=t[0],r=t[1];return{anchor:n,setAnchor:r,handleAnchorOpen:function(e){return r(e.currentTarget)},handleAnchorClose:function(){return r(null)}}},$=n(53),X=function(e){var t=e.Items,n=e.item,r=e.classes,c=B.MuiButton,o=B.Popup,i=B.AnchorLink,a=B.SvgIcon,s=t[n],l=s.title,h=s.src,u=s.github,d=s.link,f=s.desc,g=K(),x=g.anchor,_=g.handleAnchorOpen,v=g.handleAnchorClose,y=O().screenWidth,k=Object(p.useState)(""),N=Object(b.a)(k,2),C=N[0],w=N[1];Object(p.useEffect)((function(){if(y>768)return w("h6");w("body1")}),[y]);return Object(m.jsx)(Q.a,{item:!0,xs:12,md:6,children:Object(m.jsxs)(j.a,{className:"".concat(r.Paper," portfolio__grid__item"),children:[Object(m.jsx)("h1",{className:"portfolio__grid__title",children:l}),Object(m.jsxs)("div",{className:"portfolio__grid__imageContainer",children:[Object(m.jsx)("img",{className:"portfolio__grid__image",src:"".concat("/portfolio-site","/images/").concat(h),alt:"Loading..."}),Object(m.jsx)("div",{className:"portfolio__grid__overlay",children:Object(m.jsxs)("div",{className:"portfolio__grid__overlay__items",children:[Object(m.jsx)(i,{href:"https://github.com/Terioch/".concat(u),children:Object(m.jsx)(a,{className:"portfolio__grid__github",width:y<=414?"25":"35",height:y<=414?"25":"35",children:Object(m.jsx)("path",{d:"M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"})})}),Object(m.jsx)(i,{className:r.Link,href:d,children:Object(m.jsx)(c,{className:r.MuiButton__viewSite,size:y<=568?"medium":"large",children:"View Site"})}),y<=668||y>960&&y<1400?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)($.a,{className:"popup__link",variant:"h6",onClick:_,children:"Read App Description..."}),Object(m.jsx)(o,{open:!0,anchor:x,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},onClose:v,children:Object(m.jsx)($.a,{className:r.Typography,children:f})})]}):Object(m.jsx)($.a,{className:"portfolio__grid__text",variant:"h6"===C?"h6":"body1",children:f})]})})]})]})})},Y=Object(N.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"absolute",right:"2.5rem",top:"40%"},icon:{color:"#fff",cursor:"pointer",margin:e.spacing(.8,0)}}})),ee=Object(N.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center"},icon:{color:"#fff",cursor:"pointer",margin:e.spacing(.6,1)}}})),te=function(e){var t=Y(),n=ee();return"Portfolio"===e?t:n},ne=(n(100),function(e){var t=e.component,n=B.AnchorLink,r=B.SvgIcon,c=te(t),o=c.root,i=c.icon;return Object(m.jsxs)("section",{className:"profiles__container ".concat(o),children:[Object(m.jsx)(n,{href:"https://github.com/Terioch",children:Object(m.jsx)(r,{className:"bi bi-github ".concat(i),children:Object(m.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})}),Object(m.jsx)(n,{href:"https://buzzcv.com/cv/qpplkkwiwy58/qpplkkwiwy58",children:Object(m.jsx)(r,{className:"bi bi-resume ".concat(i),children:Object(m.jsx)("path",{d:"M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z"})})}),Object(m.jsx)(n,{href:"https://www.linkedin.com/in/rio-stockton-774259179/",children:Object(m.jsx)(r,{className:"bi bi-linkedin ".concat(i),children:Object(m.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})})]})}),re=n(60),ce=n.n(re),oe=n(70),ie=n(71),ae=n.n(ie),se=n(18);var le=function(e){var t=Object(p.useState)(e),n=Object(b.a)(t,2),r=n[0],c=n[1],o=Object(p.useState)(Object(y.a)({},e)),i=Object(b.a)(o,2),a=i[0],s=i[1];return{formValues:r,setFormValues:c,formErrors:a,setFormErrors:s,handleInputChange:function(e){var t=e.target,n=t.name,o=t.value;c(Object(y.a)(Object(y.a)({},r),{},Object(se.a)({},n,o)))},resetForm:function(){c(e),s({})}}},he=(n(104),Object(N.a)((function(){return{MuiButton:{fontSize:"18px"}}}))),ue={name:"",email:"",message:""},de=function(){var e=he(),t=B.Form,n=B.Input,r=B.MuiButton,c=le(ue),o=c.formValues,i=c.formErrors,a=c.setFormErrors,s=c.handleInputChange,l=c.resetForm,h=function(){var e=Object(oe.a)(ce.a.mark((function e(t){var n;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.a.sendForm("gmail_dit3vnl","portfolio_template",t.currentTarget,"user_KjeqDIChuQZZtV1bpVSjl");case 3:n=e.sent,console.log(n.text),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.text);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(t,{onSubmit:function(e){e.preventDefault(),function(){var e=Object(y.a)({},o);return e.name=o.name?"":"This field is required.",e.email=/$^|.+@.+..+/.test(o.email)?"":"Please provide a valid Email address.",e.message=o.message?"":"This field is required.",a(Object(y.a)({},e)),Object.values(e).every((function(e){return""===e}))}()&&(h(e),l())},children:[Object(m.jsx)("h1",{className:"contact__title",children:"Queries"}),Object(m.jsx)(Q.a,{container:!0,children:Object(m.jsxs)(Q.a,{item:!0,xs:12,children:[Object(m.jsx)(n,{label:"Full Name*",name:"name",value:o.name,error:!!i.name,helperText:i.name,onChange:s}),Object(m.jsx)(n,{label:"Email",name:"email",value:o.email,error:!!i.email,helperText:i.email,onChange:s}),Object(m.jsx)(n,{label:"Message*",multiline:!0,rows:5,name:"message",value:o.message,error:!!i.message,helperText:i.message,onChange:s}),Object(m.jsx)("div",{className:"contact__btn__container",children:Object(m.jsx)(r,{className:e.MuiButton,type:"submit",color:"secondary",children:"Send Message"})})]})})]})})},je=Object(N.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:e.spacing(2.1),textAlign:"center",backgroundColor:"#212121"},text:{color:"rgba(245, 245, 245, 0.719)",margin:e.spacing(.6)}}})),be={Header:_,MobileMenu:q,DesktopMenu:L,Portfolio:Z,PortfolioItem:X,Profiles:ne,Contact:de,Footer:function(){var e=je(),t=be.Profiles;return Object(m.jsxs)("footer",{className:e.root,children:[Object(m.jsx)(t,{component:"Footer"}),Object(m.jsx)("p",{className:e.text,children:"Terioch Development | Copyright \xa9 2021"})]})}};n(105);var pe=function(){var e=be.Header,t=be.Portfolio,n=be.Contact,r=be.Footer;return Object(m.jsx)(g,{children:Object(m.jsxs)("main",{className:"App",children:[Object(m.jsx)(e,{}),Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{path:"/",exact:!0,component:t}),Object(m.jsx)(j.a,{className:"contact__container",children:Object(m.jsx)(i.a,{path:"/contact",component:n})})]}),Object(m.jsx)(r,{})]})})};c.a.render(Object(m.jsx)(a.a,{theme:d,children:Object(m.jsx)(o.a,{children:Object(m.jsx)(i.a,{path:"/",component:pe})})}),document.getElementById("root"))},86:function(e,t,n){},94:function(e,t,n){},99:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.28b06da8.chunk.js.map
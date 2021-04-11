(this["webpackJsonpportfolio-client"]=this["webpackJsonpportfolio-client"]||[]).push([[0],{63:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(9),a=n.n(i),o=n(25),s=n(11),l=n(107),u=n(19),h=n(2),j=Object(r.createContext)({screenWidth:0,setScreenWidth:function(){}}),d=function(e){var t=e.children,n=Object(r.useState)(window.innerWidth),c=Object(u.a)(n,2),i=c[0],a=c[1];return Object(r.useEffect)((function(){window.addEventListener("resize",(function(){a(window.innerWidth)}))}),[]),Object(h.jsx)(j.Provider,{value:{screenWidth:i,setScreenWidth:a},children:t})},m=n(108),b=n(111),p=function(e){var t=e.label,n=e.multiline,r=e.rows,c=e.name,i=e.value,a=e.error,o=void 0===a?void 0:a,s=e.helperText,l=e.onChange;return Object(h.jsx)(b.a,{variant:"outlined",label:t,multiline:n,rows:r,name:c,value:i,onChange:l,error:o,helperText:s})},g=n(14),f=n(3),x=n(112),O=Object(m.a)((function(e){return{root:{margin:e.spacing(.5)},label:{textTransform:"none"}}})),_=function(e){var t=e.variant,n=e.color,r=e.size,c=e.children,i=Object(f.a)(e,["variant","color","size","children"]),a=O();return Object(h.jsx)(x.a,Object(g.a)(Object(g.a)({variant:t||"contained",color:n||"primary",size:r||"large"},i),{},{classes:a,children:c}))},v=Object(m.a)((function(e){return{root:{"& .MuiFormControl-root":{width:"97%",margin:e.spacing(1)}},MuiButton:{fontSize:"18px"}}})),w={Input:p,MuiButton:_,Form:function(e){var t=e.children,n=Object(f.a)(e,["children"]),r=v();return Object(h.jsx)("form",Object(g.a)(Object(g.a)({className:r.root,autoComplete:"off"},n),{},{children:t}))}},y=(n(63),Object(m.a)((function(e){return{MuiButton:{fontSize:"18px"}}}))),C=function(){var e=y();return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)(o.b,{className:"header__logo__container",to:"/",children:Object(h.jsx)("h1",{className:"header__logo",children:"Terioch"})}),Object(h.jsxs)("ul",{className:"header__menu",children:[Object(h.jsx)(o.b,{className:"header__link",to:"/",children:Object(h.jsx)("li",{className:"header__linkText",children:"Portfolio"})}),Object(h.jsx)(o.b,{className:"header__link",to:"/contact",children:Object(h.jsx)(w.MuiButton,{className:e.MuiButton,children:"Contact"})})]})]})},N=(n(68),Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"absolute",right:"2.5rem",top:"40%"},icon:{color:"#fff",cursor:"pointer",margin:e.spacing(.8,0)}}}))),k=Object(m.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center"},icon:{color:"#fff",cursor:"pointer",margin:e.spacing(.6,1)}}})),M=function(e){var t=N(),n=k();return"Portfolio"===e?t:n},S=function(e){var t=e.component,n=M(t),r=n.root,c=n.icon;return Object(h.jsxs)("section",{className:"profiles__container ".concat(r),children:[Object(h.jsx)("a",{href:"https://github.com/Terioch",target:"__blank",rel:"noopener noreferrer",children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi ".concat(c),viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})}),Object(h.jsx)("a",{href:"https://twitter.com/DevTerioch",target:"__blank",rel:"noopener noreferrer",children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi ".concat(c),viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})})}),Object(h.jsx)("a",{href:"#",children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"bi ".concat(c),viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})})]})},A=n(109),T={blogSite:{title:"Technology Blog",name:"technology-blog.png",github:"technology-blog",link:"https://technology-blog-wecxvwfsh-terioch.vercel.app/",desc:"A Technology Blog built in React with NextJS and Typescript using static site generation. Design and styling was implemented using the Material-ui library."},todoApp:{title:"Todo App",name:"todo-app.png",github:"react-todo-app",link:"https://optimistic-poitras-267ce4.netlify.app/",desc:"A Todo List App built in ReactJS using CRA and structured using class components. Contains a background image fetched using the Unsplash API."},countryLibrary:{title:"Country Library",name:"country-library.png",github:"infinite-country-library",link:"https://modest-volhard-e48a9a.netlify.app/",desc:"A website built in vanilla HTML, CSS and Javascript which displays information regarding a specific country fetched using the countries.eu API."},currencyConverter:{title:"Currency Converter",name:"currency-converter.png",github:"react-currency-converter",link:"https://dreamy-hopper-a7849c.netlify.app/",desc:"A simple currency converter built in ReactJS using CRA. Currency data is fetched via the Exchange Rates API."},clickerGame:{title:"Clicker Game",name:"clicker-game.png",github:"react-clicker-game",link:"http://rio-clicker-game.herokuapp.com/",desc:"A simple clicker game built in React with Typescript using CRA. Earn points based on clicks and progress through purchasing upgrades in the shop."}},B=(n(69),Object(m.a)((function(e){return{MuiButton__learnMore:{borderRadius:"30px",padding:e.spacing(1.5,3),fontSize:"20px"},MuiButton__viewSite:{fontSize:"18px"},Paper:{padding:e.spacing(0),backgroundColor:"#0F1217",cursor:"pointer",borderRadius:"15px"},imageContainer:{position:"relative"},Link:{textDecoration:"none"}}}))),P=function(){var e=B(),t=K.PortfolioItem,n=K.Profiles,c=w.MuiButton,i=Object(r.useContext)(j).screenWidth;return Object(h.jsxs)("main",{className:"portfolio__container",children:[Object(h.jsxs)("section",{className:"portfolio__intro__container",children:[Object(h.jsx)("h1",{className:"portfolio__intro__title",children:"Frontend ReactJS Developer based in the UK"}),i>968&&Object(h.jsx)(n,{component:"Portfolio"}),Object(h.jsx)(o.b,{className:e.Link,to:"/contact",children:Object(h.jsx)(c,{className:e.MuiButton__learnMore,children:"Learn More"})})]}),Object(h.jsxs)("section",{className:"portfolio__main__container",children:[Object(h.jsx)("h1",{className:"portfolio__main__title",children:"Portfolio"}),Object(h.jsx)(A.a,{container:!0,spacing:2,children:Object.keys(T).map((function(n,r){return Object(h.jsx)(t,{Images:T,image:n,classes:e},r)}))})]})]})},F=n(110),z=function(e){var t=e.Images,n=e.image,c=e.classes,i=Object(r.useContext)(j).screenWidth,a=t[n],o=a.title,s=a.name,u=a.github,d=a.link,m=a.desc;return Object(h.jsx)(A.a,{item:!0,xs:12,md:6,children:Object(h.jsxs)(l.a,{className:"".concat(c.Paper," portfolio__grid__item"),children:[Object(h.jsx)("h1",{className:"portfolio__grid__title",children:o}),Object(h.jsxs)("div",{className:c.imageContainer,children:[Object(h.jsx)("img",{className:"portfolio__grid__image",src:"/images/".concat(s),alt:"Loading..."}),Object(h.jsx)("div",{className:"portfolio__grid__overlay",children:Object(h.jsxs)("div",{className:"overlay__item",children:[Object(h.jsx)("a",{href:"https://github.com/Terioch/".concat(u),target:"__blank",rel:"noopener noreferrer",children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"currentColor",className:"portfolio__grid__github",viewBox:"0 0 16 16",children:Object(h.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"})})}),Object(h.jsx)("a",{className:c.Link,href:d,target:"__blank",rel:"noopener noreferrer",children:Object(h.jsx)(w.MuiButton,{className:c.MuiButton__viewSite,children:"View Site"})}),Object(h.jsx)(F.a,{className:"portfolio__grid__text",variant:i<=768?"body1":"h6",children:m})]})})]})]})})},I=n(40),V=n.n(I),E=n(46),R=n(47),L=n.n(R),D=(n(73),n(18));var W=function(e){var t=Object(r.useState)(e),n=Object(u.a)(t,2),c=n[0],i=n[1],a=Object(r.useState)(Object(g.a)({},e)),o=Object(u.a)(a,2),s=o[0],l=o[1];return{formValues:c,setFormValues:i,formErrors:s,setFormErrors:l,handleInputChange:function(e){var t=e.target,n=t.name,r=t.value;i(Object(g.a)(Object(g.a)({},c),{},Object(D.a)({},n,r)))},resetForm:function(){i(e),l({})}}},J=Object(m.a)((function(e){return{MuiButton:{fontSize:"18px"}}})),H={name:"",email:"",message:""},q=function(){var e=J(),t=w.Form,n=w.Input,r=w.MuiButton,c=W(H),i=c.formValues,a=(c.setFormValues,c.formErrors),o=c.setFormErrors,s=c.handleInputChange,l=c.resetForm,u=function(){var e=Object(E.a)(V.a.mark((function e(t){var n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.sendForm("gmail_dit3vnl","portfolio_template",t.currentTarget,"user_KjeqDIChuQZZtV1bpVSjl");case 3:n=e.sent,console.log(n.text),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.text);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(t,{onSubmit:function(e){e.preventDefault(),function(){var e=Object(g.a)({},i);return e.name=i.name?"":"This field is required.",e.email=/$^|.+@.+..+/.test(i.email)?"":"Please provide a valid Email address.",e.message=i.message?"":"This field is required.",o(Object(g.a)({},e)),Object.values(e).every((function(e){return""===e}))}()&&(u(e),l())},children:[Object(h.jsx)("h1",{className:"contact__title",children:"Queries"}),Object(h.jsx)(A.a,{container:!0,children:Object(h.jsxs)(A.a,{item:!0,xs:12,children:[Object(h.jsx)(n,{label:"Full Name*",name:"name",value:i.name,error:!!a.name,helperText:a.name,onChange:s}),Object(h.jsx)(n,{label:"Email",name:"email",value:i.email,error:!!a.email,helperText:a.email,onChange:s}),Object(h.jsx)(n,{label:"Message*",multiline:!0,rows:5,name:"message",value:i.message,error:!!a.message,helperText:a.message,onChange:s}),Object(h.jsx)("div",{className:"contact__btn__container",children:Object(h.jsx)(r,{className:e.MuiButton,type:"submit",children:"Send Message"})})]})})]})})},G=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:e.spacing(2.1),textAlign:"center",backgroundColor:"#212121"},text:{color:"rgba(245, 245, 245, 0.719)",margin:e.spacing(.6)}}})),K={Header:C,Profiles:S,Portfolio:P,PortfolioItem:z,Contact:q,Footer:function(){var e=G(),t=K.Profiles;return Object(h.jsxs)("footer",{className:e.root,children:[Object(h.jsx)(t,{component:"Footer"}),Object(h.jsx)("p",{className:e.text,children:"Terioch Development | Copyright \xa9 2021"})]})}};n(74);var Q=function(){var e=K.Header,t=K.Portfolio,n=K.Contact,r=K.Footer;return Object(h.jsx)(d,{children:Object(h.jsx)(o.a,{children:Object(h.jsxs)("main",{className:"App",children:[Object(h.jsx)(e,{}),Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{path:"/",exact:!0,component:t}),Object(h.jsx)(l.a,{className:"contact__container",children:Object(h.jsx)(s.a,{path:"/contact",component:n})})]}),Object(h.jsx)(r,{})]})})})};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(Q,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.2b0ba4ea.chunk.js.map
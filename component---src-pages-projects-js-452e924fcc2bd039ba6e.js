(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{145:function(n,t,e){"use strict";e.r(t);e(165);var r=e(0),o=e.n(r),i=e(151),a=e(156),c=e(157),u=(e(180),e(7)),s=e.n(u),l=e(149),f=e.n(l),m=e(150);function d(){var n=f()(["\n  width: 300px;\n  height: 150px;\n\n  background: ",";\n  background-size: contain;\n  background-position: center;\n\n  transition: filter 0.25s linear;\n\n  filter: ",";\n\n  @media (min-width: ",") {\n    width: 400px;\n    height: 175px;\n  }\n"]);return d=function(){return n},n}var p=m.c.div(d(),function(n){return"url("+n.src+")"},function(n){return n.hovered?"blur(2px);":"none"},function(n){return n.theme.sizes.desktop});function h(){var n=f()(["\n  width: 100%;\n  height: 100%;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  padding: 10px;\n\n  text-shadow: 2px 2px black;\n\n  color: ",";\n  font-family: ",";\n  text-align: center;\n\n  display: ",";\n"]);return h=function(){return n},n}var g=m.c.p(h(),function(n){return n.theme.colors.secondary},function(n){return n.theme.font.family},function(n){return n.hovered?"block":"none"});function v(){var n=f()(["\n  position: relative;\n  border: 1px solid ",";\n"]);return v=function(){return n},n}var x=m.c.div(v(),function(n){return n.theme.colors.secondary}),y=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).state={hover:!1},t.toggleHover=function(){t.setState(function(n){return{hover:!n.hover}})},t}return s()(t,n),t.prototype.render=function(){var n=this.props.info,t=n.link,e=n.image,r=n.name,a=n.technologies;return o.a.createElement("a",{href:t},o.a.createElement(x,{onMouseEnter:this.toggleHover,onMouseLeave:this.toggleHover,onTouchStart:this.toggleHover,onTouchEnd:this.toggleHover},o.a.createElement(p,{src:Object(i.b)(e),hovered:this.state.hover}),o.a.createElement(g,{hovered:this.state.hover},r," ",o.a.createElement("br",null)," ",a)))},t}(r.Component),b=[{name:"Portfolio",technologies:"GatsbyJS, React, Styled-Components, animate.css",link:"/",image:"portfolio.png"}];t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,{isRed:!0},o.a.createElement("div",{className:"animated bounceInDown delay-1s"},b.map(function(n){return o.a.createElement(y,{info:n,key:n.name})})),o.a.createElement(i.a,{to:"/contact/",className:"animated bounceInLeft delay-2s"},o.a.createElement(c.a,null,"Contact with me!"))))}},151:function(n,t,e){"use strict";var r=e(0),o=e.n(r),i=e(4),a=e.n(i),c=e(33),u=e.n(c);e.d(t,"a",function(){return u.a}),e.d(t,"b",function(){return c.withPrefix});e(152),o.a.createContext({});a.a.object,a.a.string.isRequired,a.a.func,a.a.func},152:function(n,t,e){var r;n.exports=(r=e(155))&&r.default||r},153:function(n,t,e){"use strict";var r=e(149),o=e.n(r);function i(){var n=o()(["\n  padding: 0;\n  margin: 0;\n\n  color: ",";\n  font-family: ",";\n\n  font-size: ",";\n\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n"]);return i=function(){return n},n}var a=e(150).c.p(i(),function(n){var t=n.reversed,e=n.theme.colors;return t?e.primary:e.secondary},function(n){return n.theme.font.family},function(n){var t=n.size;return t?t+"px":"22px"},function(n){return n.theme.sizes.desktop},function(n){var t=n.size;return t?t+"px":"28px"});t.a=a},154:function(n,t,e){"use strict";var r=e(149),o=e.n(r);function i(){var n=o()(["\n  color: inherit;\n  text-decoration: none;\n"]);return i=function(){return n},n}var a=e(150).c.a(i());t.a=a},155:function(n,t,e){"use strict";e.r(t);e(34);var r=e(0),o=e.n(r),i=e(4),a=e.n(i),c=e(55),u=e(2),s=function(n){var t=n.location,e=u.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(c.a,Object.assign({location:t,pageResources:e},e.json))};s.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=s},156:function(n,t,e){"use strict";var r=e(7),o=e.n(r),i=e(149),a=e.n(i),c=e(0),u=e.n(c),s=e(158),l=e(150);e(159);function f(){var n=a()(["\n  width: 25px;\n  height: 17px;\n  background: ",';\n\n  position: relative;\n\n  cursor: pointer;\n\n  ::after,\n  ::before {\n    content: "";\n\n    position: absolute;\n    top: 3px;\n    left: 0;\n\n    width: inherit;\n    height: 4px;\n    background: ',";\n  }\n\n  ::after {\n    top: 10px;\n  }\n\n  @media (min-width: ",") {\n    width: 36px;\n    height: 24px;\n\n    ::before,\n    ::after {\n      height: 6px;\n      top: 4px;\n    }\n\n    ::after {\n      top: 14px;\n    }\n  }\n"]);return f=function(){return n},n}var m=l.c.div(f(),function(n){var t=n.reverse,e=n.theme.colors;return t?e.primary:e.secondary},function(n){var t=n.reverse,e=n.theme.colors;return t?e.secondary:e.primary},function(n){return n.theme.sizes.desktop});function d(){var n=a()(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding: 10px;\n  background: ",";\n  border-bottom: 2px solid ",";\n\n  position: sticky;\n  top: 0;\n\n  z-index: 1;\n\n  @media (min-width: ",") {\n    padding: 15px;\n    border-bottom: 3px solid ",";\n  }\n"]);return d=function(){return n},n}var p=l.c.header(d(),function(n){return n.theme.colors.primary},function(n){return n.theme.colors.secondary},function(n){return n.theme.sizes.desktop},function(n){return n.theme.colors.secondary});function h(){var n=a()(["\n  margin: 0;\n  color: ",";\n  font-family: ",";\n  text-align: center;\n  letter-spacing: 1.5px;\n\n  font-size: 32px;\n  @media (min-width: ",") {\n    font-size: 38px;\n  }\n"]);return h=function(){return n},n}var g=l.c.h1(h(),function(n){return n.theme.colors.secondary},function(n){return n.theme.font.family},function(n){return n.theme.sizes.desktop}),v=function(n){var t=n.onClick;return u.a.createElement(u.a.Fragment,null,u.a.createElement(p,null,u.a.createElement(g,null,"scheffchukk"),u.a.createElement("div",{onClick:t},u.a.createElement(m,null))))};function x(){var n=a()(["\n  background: ",";\n\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100vw;\n  height: 100vh;\n\n  background: ",";\n  color: ",";\n\n  display: ",";\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n\n  z-index: 1;\n\n  padding: 30px;\n"]);return x=function(){return n},n}var y=l.c.nav(x(),function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.primary},function(n){return n.navigationToggled?"flex":"none"});function b(){var n=a()(["\n  width: 100%;\n  height: 100%;\n\n  list-style: none;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  padding: 0;\n"]);return b=function(){return n},n}var w=l.c.ul(b());function k(){var n=a()(["\n  color: ",";\n  text-align: center;\n\n  @media (min-width: ",") {\n    margin-bottom: 20px;\n  }\n"]);return k=function(){return n},n}var E=l.c.li(k(),function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.desktop}),z=e(151);function C(){var n=a()(["\n  color: ",";\n  font-family: ",";\n  text-decoration: none;\n\n  font-size: 26px;\n\n  @media (min-width: ",") {\n    font-size: 32px;\n  }\n"]);return C=function(){return n},n}var j=Object(l.c)(z.a)(C(),function(n){return n.theme.colors.primary},function(n){return n.theme.font.family},function(n){return n.theme.sizes.desktop}),T=e(153),S=e(154),F=[{text:"Main",to:"/"},{text:"About",to:"/about/"},{text:"Offer",to:"/offer/"},{text:"Advantages",to:"/advantages/"},{text:"Projects",to:"/projects/"},{text:"Contact",to:"/contact/"}],N=function(n){var t=n.navigationToggled,e=n.onClick;return u.a.createElement(y,{navigationToggled:t},u.a.createElement("div",{className:"animated bounceInDown",onClick:e},u.a.createElement(m,{reverse:!0})),u.a.createElement(w,{className:"animated bounceInDown delay-1s"},F.map(function(n){return u.a.createElement(E,{key:n.text},u.a.createElement(j,{to:n.to},n.text))})),u.a.createElement(u.a.Fragment,null,u.a.createElement(T.a,{size:"12",reversed:!0,style:{position:"absolute",top:"calc(100vh - 22px)",left:"10px"}},"Icons made by"," ",u.a.createElement(S.a,{href:"https://www.flaticon.com/authors/",title:""},"Users of www.flaticon.com")," ","from"," ",u.a.createElement(S.a,{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," ","is licensed by"," ",u.a.createElement(S.a,{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"},"CC 3.0 BY"))))},R=(e(34),{font:{family:"Titillium Web"},sizes:{desktop:"1270px"}}),O=Object.assign({},R,{colors:{primary:"#ff0031",secondary:"#ffffff"}}),H=Object.assign({},R,{colors:{primary:"#ffffff",secondary:"#ff0031"}});function I(){var n=a()(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n\n  padding: 10px;\n\n  min-height: calc(100vh - 70px);\n\n  background: ",";\n\n  @media (min-width: ",") {\n    min-height: calc(100vh - 91px);\n  }\n"]);return I=function(){return n},n}function P(){var n=a()(["\n    @import url('https://fonts.googleapis.com/css?family=Titillium+Web');\n\n\t\t*, *::before, *::after {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\t\t\n\t\tbody {\n\t\t\tmargin: 0;\n\t\t}\n  "]);return P=function(){return n},n}e.d(t,"a",function(){return D});var q=Object(l.b)(P()),A=l.c.div(I(),function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.desktop}),D=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).state={navigationToggled:!1},t}o()(t,n);var e=t.prototype;return e.toggleNavigation=function(){this.setState(function(n){return{navigationToggled:!n.navigationToggled}})},e.render=function(){var n=this,t=this.props,e=t.isRed,r=t.children;return u.a.createElement(l.a,{theme:e?O:H},u.a.createElement(u.a.Fragment,null,u.a.createElement(s.Helmet,null,u.a.createElement("meta",{charset:"utf-8"}),u.a.createElement("meta",{name:"description",content:"Dmitro Szewczuk - Young Fullstack web developer"}),u.a.createElement("title",null,"scheffchuk"),u.a.createElement("html",{lang:"en"})),u.a.createElement(q,null),u.a.createElement(v,{onClick:function(){return n.toggleNavigation()}}),u.a.createElement(N,{navigationToggled:this.state.navigationToggled,onClick:function(){return n.toggleNavigation()}}),u.a.createElement(A,{className:e?"animated fadeInLeft":""},r)))},t}(c.Component)},157:function(n,t,e){"use strict";var r=e(149),o=e.n(r);function i(){var n=o()(["\n  width: 196px;\n  height: 47px;\n\n  border-radius: 50px;\n\n  font-family: ",";\n  font-size: 19px;\n  color: ",";\n\n  background: ",";\n  border: 2px solid ",";\n  outline: none;\n\n  cursor: pointer;\n  transition: transform 0.5s linear;\n  :hover {\n    transform: translateY(-5px);\n\n    color: ",";\n\n    background: ",";\n    border: 2px solid ",";\n  }\n\n  @media (min-width: ",") {\n    font-size: 26px;\n    width: 260px;\n    height: 70px;\n  }\n"]);return i=function(){return n},n}var a=e(150).c.button(i(),function(n){return n.theme.font.family},function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.primary},function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.primary},function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.desktop});t.a=a},165:function(n,t,e){var r=e(25).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||e(18)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(n){return""}}})},180:function(n,t,e){"use strict";e(181)("link",function(n){return function(t){return n(this,"a","href",t)}})},181:function(n,t,e){var r=e(11),o=e(19),i=e(20),a=/"/g,c=function(n,t,e,r){var o=String(i(n)),c="<"+t;return""!==e&&(c+=" "+e+'="'+String(r).replace(a,"&quot;")+'"'),c+">"+o+"</"+t+">"};n.exports=function(n,t){var e={};e[n]=t(c),r(r.P+r.F*o(function(){var t=""[n]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",e)}}}]);
//# sourceMappingURL=component---src-pages-projects-js-452e924fcc2bd039ba6e.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(151),i=t(156),c=t(153),u=t(157);e.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,null,o.a.createElement(c.a,{className:"animated bounceInDown"},"My name is Dmitro Szewczuk, ",o.a.createElement("br",null)," I'm young, 17 years old full-stack web developer. ",o.a.createElement("br",null),"Programming is my passion, in which I'm good at. ",o.a.createElement("br",null),"Despite my young age, I have long programming experience. ",o.a.createElement("br",null),o.a.createElement("br",null),"I want to help people by my passion. ",o.a.createElement("br",null)," Check what can I do for you!"),o.a.createElement(a.a,{to:"/offer/",className:"animated bounceInLeft"},o.a.createElement(u.a,null,"My offer"))))}},151:function(n,e,t){"use strict";var r=t(0),o=t.n(r),a=t(4),i=t.n(a),c=t(33),u=t.n(c);t.d(e,"a",function(){return u.a}),t.d(e,"b",function(){return c.withPrefix});t(152),o.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},152:function(n,e,t){var r;n.exports=(r=t(155))&&r.default||r},153:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function a(){var n=o()(["\n  padding: 0;\n  margin: 0;\n\n  color: ",";\n  font-family: ",";\n\n  font-size: ",";\n\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n"]);return a=function(){return n},n}var i=t(150).c.p(a(),function(n){var e=n.reversed,t=n.theme.colors;return e?t.primary:t.secondary},function(n){return n.theme.font.family},function(n){var e=n.size;return e?e+"px":"22px"},function(n){return n.theme.sizes.desktop},function(n){var e=n.size;return e?e+"px":"28px"});e.a=i},154:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function a(){var n=o()(["\n  color: inherit;\n  text-decoration: none;\n"]);return a=function(){return n},n}var i=t(150).c.a(a());e.a=i},155:function(n,e,t){"use strict";t.r(e);t(34);var r=t(0),o=t.n(r),a=t(4),i=t.n(a),c=t(55),u=t(2),l=function(n){var e=n.location,t=u.default.getResourcesForPathnameSync(e.pathname);return o.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},156:function(n,e,t){"use strict";var r=t(7),o=t.n(r),a=t(149),i=t.n(a),c=t(0),u=t.n(c),l=t(150);t(158);function s(){var n=i()(["\n  width: 25px;\n  height: 17px;\n  background: ",';\n\n  position: relative;\n\n  cursor: pointer;\n\n  ::after,\n  ::before {\n    content: "";\n\n    position: absolute;\n    top: 3px;\n    left: 0;\n\n    width: inherit;\n    height: 4px;\n    background: ',";\n  }\n\n  ::after {\n    top: 10px;\n  }\n\n  @media (min-width: ",") {\n    width: 36px;\n    height: 24px;\n\n    ::before,\n    ::after {\n      height: 6px;\n      top: 4px;\n    }\n\n    ::after {\n      top: 14px;\n    }\n  }\n"]);return s=function(){return n},n}var f=l.c.div(s(),function(n){var e=n.reverse,t=n.theme.colors;return e?t.primary:t.secondary},function(n){var e=n.reverse,t=n.theme.colors;return e?t.secondary:t.primary},function(n){return n.theme.sizes.desktop});function m(){var n=i()(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding: 10px;\n  background: ",";\n  border-bottom: 2px solid ",";\n\n  position: sticky;\n  top: 0;\n\n  z-index: 1;\n\n  @media (min-width: ",") {\n    padding: 15px;\n    border-bottom: 3px solid ",";\n  }\n"]);return m=function(){return n},n}var d=l.c.header(m(),function(n){return n.theme.colors.primary},function(n){return n.theme.colors.secondary},function(n){return n.theme.sizes.desktop},function(n){return n.theme.colors.secondary});function p(){var n=i()(["\n  margin: 0;\n  color: ",";\n  font-family: ",";\n  text-align: center;\n  letter-spacing: 1.5px;\n\n  font-size: 32px;\n  @media (min-width: ",") {\n    font-size: 38px;\n  }\n"]);return p=function(){return n},n}var h=l.c.h1(p(),function(n){return n.theme.colors.secondary},function(n){return n.theme.font.family},function(n){return n.theme.sizes.desktop}),g=function(n){var e=n.onClick;return u.a.createElement(u.a.Fragment,null,u.a.createElement(d,null,u.a.createElement(h,null,"scheffchukk"),u.a.createElement("div",{onClick:e},u.a.createElement(f,null))))};function v(){var n=i()(["\n  background: ",";\n\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100vw;\n  height: 100vh;\n\n  background: ",";\n  color: ",";\n\n  display: ",";\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n\n  z-index: 1;\n\n  padding: 30px;\n"]);return v=function(){return n},n}var x=l.c.nav(v(),function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.primary},function(n){return n.navigationToggled?"flex":"none"});function y(){var n=i()(["\n  width: 100%;\n  height: 100%;\n\n  list-style: none;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  padding: 0;\n"]);return y=function(){return n},n}var b=l.c.ul(y());function w(){var n=i()(["\n  color: ",";\n  text-align: center;\n\n  @media (min-width: ",") {\n    margin-bottom: 20px;\n  }\n"]);return w=function(){return n},n}var E=l.c.li(w(),function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.desktop}),k=t(151);function z(){var n=i()(["\n  color: ",";\n  font-family: ",";\n  text-decoration: none;\n\n  font-size: 26px;\n\n  @media (min-width: ",") {\n    font-size: 32px;\n  }\n"]);return z=function(){return n},n}var C=Object(l.c)(k.a)(z(),function(n){return n.theme.colors.primary},function(n){return n.theme.font.family},function(n){return n.theme.sizes.desktop}),j=t(153),I=t(154),T=[{text:"Main",to:"/"},{text:"About",to:"/about/"},{text:"Offer",to:"/offer/"},{text:"Advantages",to:"/advantages/"},{text:"Projects",to:"/projects/"},{text:"Contact",to:"/contact/"}],N=function(n){var e=n.navigationToggled,t=n.onClick;return u.a.createElement(x,{navigationToggled:e},u.a.createElement("div",{className:"animated bounceInDown",onClick:t},u.a.createElement(f,{reverse:!0})),u.a.createElement(b,{className:"animated bounceInDown delay-1s"},T.map(function(n){return u.a.createElement(E,{key:n.text},u.a.createElement(C,{to:n.to},n.text))})),u.a.createElement(u.a.Fragment,null,u.a.createElement(j.a,{size:"12",reversed:!0,style:{position:"absolute",top:"calc(100vh - 22px)",left:"10px"}},"Icons made by"," ",u.a.createElement(I.a,{href:"https://www.flaticon.com/authors/",title:""},"Users of www.flaticon.com")," ","from"," ",u.a.createElement(I.a,{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," ","is licensed by"," ",u.a.createElement(I.a,{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"},"CC 3.0 BY"))))},F=(t(34),{font:{family:"Titillium Web"},sizes:{desktop:"1270px"}}),O=Object.assign({},F,{colors:{primary:"#ff0031",secondary:"#ffffff"}}),R=Object.assign({},F,{colors:{primary:"#ffffff",secondary:"#ff0031"}});function D(){var n=i()(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n\n  padding: 10px;\n\n  min-height: calc(100vh - 70px);\n\n  background: ",";\n\n  @media (min-width: ",") {\n    min-height: calc(100vh - 91px);\n  }\n"]);return D=function(){return n},n}function P(){var n=i()(["\n    @import url('https://fonts.googleapis.com/css?family=Titillium+Web');\n\n\t\t*, *::before, *::after {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\t\t\n\t\tbody {\n\t\t\tmargin: 0;\n\t\t}\n  "]);return P=function(){return n},n}t.d(e,"a",function(){return M});var q=Object(l.b)(P()),A=l.c.div(D(),function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.desktop}),M=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))||this).state={navigationToggled:!1},e}o()(e,n);var t=e.prototype;return t.toggleNavigation=function(){this.setState(function(n){return{navigationToggled:!n.navigationToggled}})},t.render=function(){var n=this,e=this.props,t=e.isRed,r=e.children;return u.a.createElement(l.a,{theme:t?O:R},u.a.createElement(u.a.Fragment,null,u.a.createElement(q,null),u.a.createElement(g,{onClick:function(){return n.toggleNavigation()}}),u.a.createElement(N,{navigationToggled:this.state.navigationToggled,onClick:function(){return n.toggleNavigation()}}),u.a.createElement(A,{className:t?"animated fadeInLeft":""},r)))},e}(c.Component)},157:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function a(){var n=o()(["\n  width: 196px;\n  height: 47px;\n\n  border-radius: 50px;\n\n  font-family: ",";\n  font-size: 19px;\n  color: ",";\n\n  background: ",";\n  border: 2px solid ",";\n  outline: none;\n\n  cursor: pointer;\n  transition: transform 0.5s linear;\n  :hover {\n    transform: translateY(-5px);\n\n    color: ",";\n\n    background: ",";\n    border: 2px solid ",";\n  }\n\n  @media (min-width: ",") {\n    font-size: 26px;\n    width: 260px;\n    height: 70px;\n  }\n"]);return a=function(){return n},n}var i=t(150).c.button(a(),function(n){return n.theme.font.family},function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.primary},function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.primary},function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.desktop});e.a=i}}]);
//# sourceMappingURL=component---src-pages-about-js-151ace0b7c947954f05b.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{147:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(151),i=t(156),c=t(161),u=t(160),s=t(162),f=function(n){var e=n.data,t=e.red,r=e.text,i=e.src;return o.a.createElement(s.a,{red:t,radius:"50"},o.a.createElement(u.a,{src:Object(a.b)(i)}),o.a.createElement(c.a,{red:t},r))},l=t(157),d=t(163),m=[{red:!0,src:"svg/feature.svg",text:"Web applications"},{red:!1,src:"svg/coding.svg",text:"Responsive websites"},{red:!0,src:"svg/photoshop-file-format.svg",text:"Coding PSD files"},{red:!1,src:"svg/reuse.svg",text:"Refreshing old websites"}];e.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{isRed:!0},o.a.createElement(d.a,{className:"animated bounceInLeft delay-2s"},m.map(function(n){return o.a.createElement(f,{data:n,key:n.text})})),o.a.createElement(a.a,{to:"/advantages/",className:"animated bounceInDown delay-1s"},o.a.createElement(l.a,null,"My advantages"))))}},151:function(n,e,t){"use strict";var r=t(0),o=t.n(r),a=t(4),i=t.n(a),c=t(33),u=t.n(c);t.d(e,"a",function(){return u.a}),t.d(e,"b",function(){return c.withPrefix});t(152),o.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},152:function(n,e,t){var r;n.exports=(r=t(155))&&r.default||r},153:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function a(){var n=o()(["\n  padding: 0;\n  margin: 0;\n\n  color: ",";\n  font-family: ",";\n\n  font-size: ",";\n\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n"]);return a=function(){return n},n}var i=t(150).c.p(a(),function(n){var e=n.reversed,t=n.theme.colors;return e?t.primary:t.secondary},function(n){return n.theme.font.family},function(n){var e=n.size;return e?e+"px":"22px"},function(n){return n.theme.sizes.desktop},function(n){var e=n.size;return e?e+"px":"28px"});e.a=i},154:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function a(){var n=o()(["\n  color: inherit;\n  text-decoration: none;\n"]);return a=function(){return n},n}var i=t(150).c.a(a());e.a=i},155:function(n,e,t){"use strict";t.r(e);t(34);var r=t(0),o=t.n(r),a=t(4),i=t.n(a),c=t(55),u=t(2),s=function(n){var e=n.location,t=u.default.getResourcesForPathnameSync(e.pathname);return o.a.createElement(c.a,Object.assign({location:e,pageResources:t},t.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},156:function(n,e,t){"use strict";var r=t(7),o=t.n(r),a=t(149),i=t.n(a),c=t(0),u=t.n(c),s=t(158),f=t(150);t(159);function l(){var n=i()(["\n  width: 25px;\n  height: 17px;\n  background: ",';\n\n  position: relative;\n\n  cursor: pointer;\n\n  ::after,\n  ::before {\n    content: "";\n\n    position: absolute;\n    top: 3px;\n    left: 0;\n\n    width: inherit;\n    height: 4px;\n    background: ',";\n  }\n\n  ::after {\n    top: 10px;\n  }\n\n  @media (min-width: ",") {\n    width: 36px;\n    height: 24px;\n\n    ::before,\n    ::after {\n      height: 6px;\n      top: 4px;\n    }\n\n    ::after {\n      top: 14px;\n    }\n  }\n"]);return l=function(){return n},n}var d=f.c.div(l(),function(n){var e=n.reverse,t=n.theme.colors;return e?t.primary:t.secondary},function(n){var e=n.reverse,t=n.theme.colors;return e?t.secondary:t.primary},function(n){return n.theme.sizes.desktop});function m(){var n=i()(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding: 10px;\n  background: ",";\n  border-bottom: 2px solid ",";\n\n  position: sticky;\n  top: 0;\n\n  z-index: 1;\n\n  @media (min-width: ",") {\n    padding: 15px;\n    border-bottom: 3px solid ",";\n  }\n"]);return m=function(){return n},n}var p=f.c.header(m(),function(n){return n.theme.colors.primary},function(n){return n.theme.colors.secondary},function(n){return n.theme.sizes.desktop},function(n){return n.theme.colors.secondary});function h(){var n=i()(["\n  margin: 0;\n  color: ",";\n  font-family: ",";\n  text-align: center;\n  letter-spacing: 1.5px;\n\n  font-size: 32px;\n  @media (min-width: ",") {\n    font-size: 38px;\n  }\n"]);return h=function(){return n},n}var g=f.c.h1(h(),function(n){return n.theme.colors.secondary},function(n){return n.theme.font.family},function(n){return n.theme.sizes.desktop}),v=function(n){var e=n.onClick;return u.a.createElement(u.a.Fragment,null,u.a.createElement(p,null,u.a.createElement(g,null,"scheffchukk"),u.a.createElement("div",{onClick:e},u.a.createElement(d,null))))};function x(){var n=i()(["\n  background: ",";\n\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100vw;\n  height: 100vh;\n\n  background: ",";\n  color: ",";\n\n  display: ",";\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n\n  z-index: 1;\n\n  padding: 30px;\n"]);return x=function(){return n},n}var y=f.c.nav(x(),function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.primary},function(n){return n.navigationToggled?"flex":"none"});function b(){var n=i()(["\n  width: 100%;\n  height: 100%;\n\n  list-style: none;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n\n  padding: 0;\n"]);return b=function(){return n},n}var w=f.c.ul(b());function k(){var n=i()(["\n  color: ",";\n  text-align: center;\n\n  @media (min-width: ",") {\n    margin-bottom: 20px;\n  }\n"]);return k=function(){return n},n}var E=f.c.li(k(),function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.desktop}),z=t(151);function j(){var n=i()(["\n  color: ",";\n  font-family: ",";\n  text-decoration: none;\n\n  font-size: 26px;\n\n  @media (min-width: ",") {\n    font-size: 32px;\n  }\n"]);return j=function(){return n},n}var C=Object(f.c)(z.a)(j(),function(n){return n.theme.colors.primary},function(n){return n.theme.font.family},function(n){return n.theme.sizes.desktop}),T=t(153),R=t(154),N=[{text:"Main",to:"/"},{text:"About",to:"/about/"},{text:"Offer",to:"/offer/"},{text:"Advantages",to:"/advantages/"},{text:"Projects",to:"/projects/"},{text:"Contact",to:"/contact/"}],F=function(n){var e=n.navigationToggled,t=n.onClick;return u.a.createElement(y,{navigationToggled:e},u.a.createElement("div",{className:"animated bounceInDown",onClick:t},u.a.createElement(d,{reverse:!0})),u.a.createElement(w,{className:"animated bounceInDown delay-1s"},N.map(function(n){return u.a.createElement(E,{key:n.text},u.a.createElement(C,{to:n.to},n.text))})),u.a.createElement(u.a.Fragment,null,u.a.createElement(T.a,{size:"12",reversed:!0,style:{position:"absolute",top:"calc(100vh - 22px)",left:"10px"}},"Icons made by"," ",u.a.createElement(R.a,{href:"https://www.flaticon.com/authors/",title:""},"Users of www.flaticon.com")," ","from"," ",u.a.createElement(R.a,{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," ","is licensed by"," ",u.a.createElement(R.a,{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"},"CC 3.0 BY"))))},O=(t(34),{font:{family:"Titillium Web"},sizes:{desktop:"1270px"}}),I=Object.assign({},O,{colors:{primary:"#ff0031",secondary:"#ffffff"}}),D=Object.assign({},O,{colors:{primary:"#ffffff",secondary:"#ff0031"}});function P(){var n=i()(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n\n  padding: 10px;\n\n  min-height: calc(100vh - 70px);\n\n  background: ",";\n\n  @media (min-width: ",") {\n    min-height: calc(100vh - 91px);\n  }\n"]);return P=function(){return n},n}function S(){var n=i()(["\n    @import url('https://fonts.googleapis.com/css?family=Titillium+Web');\n\n\t\t*, *::before, *::after {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\t\t\n\t\tbody {\n\t\t\tmargin: 0;\n\t\t}\n  "]);return S=function(){return n},n}t.d(e,"a",function(){return A});var Y=Object(f.b)(S()),q=f.c.div(P(),function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.desktop}),A=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))||this).state={navigationToggled:!1},e}o()(e,n);var t=e.prototype;return t.toggleNavigation=function(){this.setState(function(n){return{navigationToggled:!n.navigationToggled}})},t.render=function(){var n=this,e=this.props,t=e.isRed,r=e.children;return u.a.createElement(f.a,{theme:t?I:D},u.a.createElement(u.a.Fragment,null,u.a.createElement(s.Helmet,null,u.a.createElement("meta",{charset:"utf-8"}),u.a.createElement("meta",{name:"description",content:"Dmitro Szewczuk - Young Fullstack web developer"}),u.a.createElement("title",null,"scheffchuk"),u.a.createElement("html",{lang:"en"})),u.a.createElement(Y,null),u.a.createElement(v,{onClick:function(){return n.toggleNavigation()}}),u.a.createElement(F,{navigationToggled:this.state.navigationToggled,onClick:function(){return n.toggleNavigation()}}),u.a.createElement(q,{className:t?"animated fadeInLeft":""},r)))},e}(c.Component)},157:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function a(){var n=o()(["\n  width: 196px;\n  height: 47px;\n\n  border-radius: 50px;\n\n  font-family: ",";\n  font-size: 19px;\n  color: ",";\n\n  background: ",";\n  border: 2px solid ",";\n  outline: none;\n\n  cursor: pointer;\n  transition: transform 0.5s linear;\n  :hover {\n    transform: translateY(-5px);\n\n    color: ",";\n\n    background: ",";\n    border: 2px solid ",";\n  }\n\n  @media (min-width: ",") {\n    font-size: 26px;\n    width: 260px;\n    height: 70px;\n  }\n"]);return a=function(){return n},n}var i=t(150).c.button(a(),function(n){return n.theme.font.family},function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.primary},function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.primary},function(n){return n.theme.colors.secondary},function(n){return n.theme.colors.primary},function(n){return n.theme.sizes.desktop});e.a=i},160:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function a(){var n=o()(["\n  width: ",";\n  height: auto;\n\n  margin: 10px;\n"]);return a=function(){return n},n}var i=t(150).c.img(a(),function(n){var e=n.size;return e?e+"px":"64px"});e.a=i},161:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function a(){var n=o()(["\n  padding: 0;\n  margin: 0;\n\n  color: ",";\n  font-family: ",";\n\n  font-size: ",";\n\n  @media (min-width: ",") {\n    font-size: ",";\n  }\n"]);return a=function(){return n},n}var i=t(150).c.p(a(),function(n){var e=n.red,t=n.theme.colors;return e?t.secondary:t.primary},function(n){return n.theme.font.family},function(n){var e=n.size;return e?e+"px":"22px"},function(n){return n.theme.sizes.desktop},function(n){var e=n.size;return e?1.5*e+"px":"32px"});e.a=i},162:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function a(){var n=o()(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 10px;\n  padding: 5px;\n\n  border: 2px solid\n    ",";\n\n  background: ",";\n\n  border-radius: ",";\n\n  transition: transform 0.5s linear;\n  :hover {\n    transform: ",";\n  }\n\n  width: ",";\n  height: ",";\n\n  @media (min-width: ",") {\n    border: 4px solid\n      ",";\n\n    padding: 15px;\n    margin: 20px;\n\n    width: ",";\n    height: ",";\n\n    border-radius: ",";\n  }\n"]);return a=function(){return n},n}var i=t(150).c.div(a(),function(n){var e=n.red,t=n.theme.colors;return e?t.secondary:t.primary},function(n){var e=n.red,t=n.theme.colors;return e?t.primary:t.secondary},function(n){return n.radius+"px"},function(n){return n.red?"translateX(-5px)":"translateX(5px)"},function(n){n.extended;return"300px"},function(n){return n.extended?"125px":"100px"},function(n){return n.theme.sizes.desktop},function(n){var e=n.red,t=n.theme.colors;return e?t.secondary:t.primary},function(n){return n.extended?"425px":"450px"},function(n){return n.extended?"175px":"125px"},function(n){return 2*n.radius+"px"});e.a=i},163:function(n,e,t){"use strict";var r=t(149),o=t.n(r);function a(){var n=o()(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 1000px;\n  align-items: center;\n  justify-content: center;\n"]);return a=function(){return n},n}var i=t(150).c.div(a());e.a=i}}]);
//# sourceMappingURL=component---src-pages-offer-js-b6867b4189c23808e610.js.map
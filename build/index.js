!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t(require("react"),require("react-dom"));else if("function"===typeof define&&define.amd)define(["react","react-dom"],t);else{var a="object"===typeof exports?t(require("react"),require("react-dom")):t(e.react,e["react-dom"]);for(var n in a)("object"===typeof exports?exports:e)[n]=a[n]}}(this,(function(e,t){return function(e){function t(t){for(var n,i,c=t[0],l=t[1],s=t[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var l=a[c];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={0:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=this["webpackJsonpmui-shell"]=this["webpackJsonpmui-shell"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;return o.push([66,1]),a()}({0:function(t,a){t.exports=e},66:function(e,t,a){e.exports=a(79)},7:function(e,a){e.exports=t},79:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(9),o=a(18),i=a(19),c=a(21),l=a(8),s=a(0),u=a.n(s),p=a(5),d=a(2),m=a(34),b=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={lastIn:null,lastPassedProps:{}},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.lastPassedProps,t=this.props,a=t.children,n=t.passedProps,r=Object(d.a)(t,["children","passedProps"]),o=r.in?n:e;return u.a.createElement(m.CSSTransition,Object.assign({unmountOnExit:!0},r),a(o))}}]),t}(s.PureComponent);b.getDerivedStateFromProps=function(e,t){var a=t.lastIn,n=e.in,r=e.passedProps;return!n&&a?null:{lastIn:n,lastPassedProps:r}};var f=a(16),h=a(13),v=a(35),g=u.a.createContext(),y=g,j=function(e){return function(t){return Object(v.c)(e,{path:t.path,exact:!0})}},O=function e(t){return[Object(f.a)({},t,{path:t.fullPath})].concat(Object(h.a)((t.children||[]).map(e).reduce((function(e,t){return null===t||void 0===t?e:Array.isArray(t)?[].concat(Object(h.a)(e),Object(h.a)(t)):[].concat(Object(h.a)(e),[t])}),[])))},E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={routes:null,flatRoutes:null,currentRoute:null,currentMatch:null,lastRoute:null,lastMatch:null,parentRoutes:null,location:null,locations:[],lastLocation:{},position:null},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),t}(u.a.PureComponent);E.getDerivedStateFromProps=function(e,t){var a=e.routes,n=e.location,r=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=Object(f.a)({},t,{fullPath:a+t.path,depth:n,parentRoute:r,children:t.children||[]});return t.children&&(o.children=t.children.map((function(r){return e(r,a+t.path,n+1,o)}))),o}(a),o=O(r),i=o.find(j(n.pathname)),c=i&&j(n.pathname)(i),s=function e(t){return t&&t.parentRoute?[t.parentRoute].concat(Object(h.a)(e(t.parentRoute))):[]}(i),u=t.locations.findIndex((function(e){return e.key===n.key})),p=-1!==u,d=p?u:t.locations.length,m=Object(f.a)({},n,{position:d}),b=p?t.locations:[].concat(Object(h.a)(t.locations),[m]),v=t.lastLocation;return i&&(v=Object(f.a)({},v,Object(l.a)({},i.label,m))),{routes:r,flatRoutes:o,currentRoute:i,currentMatch:c,parentRoutes:s,lastRoute:t.currentRoute,lastMatch:t.currentMatch,location:n,locations:b,lastLocation:v,position:d}},E=Object(v.d)(E);var x=function(e){var t=e.title;return Object(s.useEffect)((function(){document.title=t})),null},w=function(e){var t=e.documentTitleFormatter,a=e.appTitle;return u.a.createElement(y.Consumer,null,(function(e){var n=e.currentRoute;return n&&u.a.createElement(x,{title:t?t(n):"".concat(n.label," - ").concat(a)})}))},k=a(1),C=function(e){var t=e.route,a=e.passedProps,n=Object(d.a)(e,["route","passedProps"]),r=t.component,o=t.fullscreen?ee:me;return u.a.createElement(o,n,u.a.createElement(r,a))},P=function(e){var t=e.routes.noMatchComponent;return t?u.a.createElement(t,null):null},R=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).transitionChildFactory=function(e){return function(t){return u.a.cloneElement(t,{classNames:e})}},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=Object(k.a)({},this.props);return u.a.createElement(y.Consumer,null,(function(a){var n,r,o=a.currentRoute,i=a.currentMatch,c=a.lastRoute,l=a.routes,s=Object(f.a)({},t,{match:i}),p="scene-".concat((r=c,((n=o)?n.depth:0)>=(r?r.depth:0)?"forward":"backward"));return o?o.fullscreen?u.a.createElement(C,{route:o,passedProps:s}):u.a.createElement(m.TransitionGroup,{component:null,childFactory:e.transitionChildFactory(p)},u.a.createElement(m.CSSTransition,{classNames:p,key:o.label,timeout:200},u.a.createElement(C,{route:o,passedProps:s}))):u.a.createElement(P,{routes:l})}))}}]),t}(s.PureComponent),N=Object(v.d)(R),M=a(56),S=a.n(M),B=a(38),F=a(110),T=a(115),L=a(57),A=a.n(L),D=a(58),I=a.n(D),q=a(114),U=a(3),Y={path:U.string.isRequired,component:U.func.isRequired,label:U.string.isRequired,breadcrumb:U.func,sharable:U.bool,fullscreen:U.bool,disableCountrySwitch:U.bool,menu:Object(U.shape)({icon:U.object.isRequired,exact:U.bool})};Y.children=Object(U.arrayOf)(Object(U.shape)(Y));Object(U.shape)(Y);var $=function(e){var t=e.match,a=e.route,n=e.classes,r=e.breadcrumbFormatter,o=e.children,i=e.lastLocation,c=a.breadcrumb;return t?u.a.createElement("span",{className:S()(n.breadcrumbItem,Object(l.a)({},n.disabled,t.isExact))},u.a.createElement(F.a,{mini:"true",disabled:t.isExact,component:B.a,to:i[a.label]||t.url,color:t.isExact?"default":"primary",className:n.breadcrumbButton,classes:{disabled:n.disabled}},c?u.a.createElement(c,{match:t}):r?r(a):a.label,!t.isExact&&u.a.createElement(A.a,null)),o):null},H=function e(t){var a=t.url,n=void 0===a?"":a,r=t.disabled,o=void 0!==r&&r,i=t.location,c=t.route,l=t.match,s=Object(d.a)(t,["url","disabled","location","route","match"]),p=!1;return u.a.createElement(m.TransitionGroup,{component:null},!o&&u.a.createElement(m.CSSTransition,{key:c.label,unmountOnExit:!0,classNames:"bcslide",timeout:200},u.a.createElement($,Object.assign({match:l,route:c},s),(c.children||[]).map((function(t){var a=Object(v.c)(i.pathname,{path:n+c.path+t.path});return u.a.createElement(e,Object.assign({key:n+c.path+t.path,url:n+c.path,disabled:!a||Boolean(p++),location:i,route:t,match:a},s))})))))},_=function(e){var t=e.position,a=e.history,n=e.classes;return u.a.createElement(F.a,{mini:"true",disabled:0===t,onClick:function(){return a.goBack()},color:0===t?"default":"primary",className:n.goBackButton},u.a.createElement(I.a,null))},z=navigator&&navigator.platform&&navigator.platform.match(/iPhone|iPod|iPad/),X=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).scrollRight=function(){a.appBarElt.scrollBy&&a.appBarElt.scrollBy({left:2147483647,behavior:"smooth"})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.scrollRight()}},{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&this.scrollRight()}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.location,r=t.history,o=(t.match,t.routes),i=t.lastLocation,c=t.position,l=t.currentRoute,s=t.rightBreadcrumbRender,p=Object(d.a)(t,["classes","location","history","match","routes","lastLocation","position","currentRoute","rightBreadcrumbRender"]);return u.a.createElement(q.a,{rootRef:function(t){e.appBarElt=t}},u.a.createElement(T.a,{position:"static",color:"default",className:a.breadcrumb},u.a.createElement("div",{className:a.breadcrumbContainer},z&&u.a.createElement(_,{classes:a,location:n,position:c,history:r}),u.a.createElement(H,Object.assign({route:o,match:Object(v.c)(n.pathname,{path:o.path}),classes:a,location:n,lastLocation:i},p)),s&&s(l))))}}]),t}(s.PureComponent),W=Object(v.d)(Object(p.a)((function(e){return{breadcrumb:{overflowX:"auto"},breadcrumbContainer:{paddingLeft:"8px",whiteSpace:"nowrap",position:"relative",minHeight:"36px",display:"flex"},breadcrumbButton:{paddingRight:0,paddingLeft:0,minWidth:"auto","&$disabled":{color:e.palette.text.primary,paddingRight:"24px"}},breadcrumbItem:{"&.bcslide-enter":{opacity:"0",transform:"translateX(-20px)"},"&.bcslide-enter.bcslide-enter-active":{position:"absolute",opacity:1,transform:"translateX(0)",transitionProperty:"transform, opacity",transitionDuration:"0.2s",transitionTimingFunction:"ease"},"&.bcslide-exit":{opacity:1,transform:"translateX(0)"},"&.bcslide-exit.bcslide-exit-active":{position:"absolute",opacity:0,transform:"translateX(-20px)",transitionProperty:"transform, opacity",transitionDuration:"0.2s",transitionTimingFunction:"ease"},flex:1},goBackButton:{padding:"0 8px",height:"24px",minWidth:"auto"},disabled:{},hide:{visibility:"hidden"},shareButton:{height:"36px",width:"36px",padding:"6px"}}}))((function(e){return u.a.createElement(y.Consumer,null,(function(t){var a=t.routes,n=t.currentRoute,r=t.lastLocation,o=t.position;return u.a.createElement(X,Object.assign({routes:a,currentRoute:n,lastLocation:r,position:o},e))}))}))),G=a(116),J=a(121),K=a(117),Q=a(59),V=a.n(Q),Z=Object(p.a)((function(e){return{toolBar:Object(l.a)({display:"flex"},e.breakpoints.down("md"),{padding:"0 2px"}),rightSide:{flex:1},originalColor:Object(f.a)({},e.typography.h6,{color:"inherit"})}}))((function(e){var t=e.openMenu,a=e.classes,n=e.hideMenu,r=e.leftAppBarComponent,o=e.rightAppBarComponent,i=e.appTitle;return u.a.createElement(T.a,{position:"static"},u.a.createElement(G.a,{className:a.toolBar},!n&&u.a.createElement(J.a,{lgUp:!0},u.a.createElement(K.a,{"aria-label":"open drawer",onClick:t,className:a.originalColor},u.a.createElement(V.a,null))),r||u.a.createElement("div",{className:a.originalColor},i),u.a.createElement("span",{className:a.rightSide}),o))})),ee=Object(p.a)((function(e){return{root:{flex:1,height:"100%",display:"flex",flexDirection:"column",backgroundColor:"inherit",position:"relative"},"@global":{html:{height:"100%"},body:{height:"100%"}}}}))((function(e){var t=e.classes,a=e.children;return u.a.createElement("div",{className:t.root},a)})),te=a(25),ae=a(122),ne=a(118),re=a(119),oe=a(123),ie=a(124),ce=a(120),le=Object(p.a)((function(e){return{drawerHeader:Object(f.a)({},e.mixins.toolbar,{display:"block"}),drawerMenu:{flex:1},drawerFooter:{textAlign:"center",color:e.palette.text.secondary,fontSize:"12px",margin:"4px"},drawerPaper:{height:"100%",width:"200px"},activeMenuItem:{backgroundColor:"rgba(0,0,0,0.1)"}}}))((function(e){var t=e.toggled,a=e.openMenu,n=e.closeMenu,r=e.menuLogoSrc,o=e.classes,i=e.linkFormatter,c=e.menuLabelFormatter,l=e.drawerFooter,p=i||B.b,d=u.a.createElement(s.Fragment,null,u.a.createElement(p,{to:"/",className:o.drawerHeader,style:r&&{background:'url("'.concat(r,'") no-repeat center'),backgroundSize:"contain"},onClick:n}),u.a.createElement(ne.a,null),u.a.createElement(re.a,{component:"div",className:o.drawerMenu},u.a.createElement(y.Consumer,null,(function(e){var t=e.flatRoutes,a=e.currentRoute,r=e.parentRoutes,i=a&&[a].concat(Object(h.a)(r)).find((function(e){return e.menu}));return t.filter((function(e){return e.menu})).map((function(e){return u.a.createElement(oe.a,{key:e.label,component:p,to:e.path,exact:e.menu.exact,isActive:function(){return e.fullPath===(i&&i.fullPath)},activeClassName:o.activeMenuItem,button:!0,onClick:n},u.a.createElement(ce.a,null,e.menu.icon),u.a.createElement(ie.a,{primary:c?c(e):e.label}))}))}))),l&&u.a.createElement(s.Fragment,null,u.a.createElement(ne.a,null),u.a.createElement("div",{className:o.drawerFooter},l)));return u.a.createElement(s.Fragment,null,u.a.createElement(J.a,{lgUp:!0},u.a.createElement(ae.a,{variant:"temporary",open:t,onClose:n,onOpen:a,ModalProps:{keepMounted:!0,disableRestoreFocus:!0},classes:{paper:o.drawerPaper}},d)),u.a.createElement(J.a,{mdDown:!0,implementation:"css"},u.a.createElement(te.a,{variant:"permanent",open:!0,classes:{paper:o.drawerPaper}},d)))})),se=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).setNavbar=function(e,t){a.setState({navbar:e,blockTransition:Boolean(t)})},a.onAppScroll=function(e){var t=window.scrollY,n=a.state.navbar,r=a.lastScrollY-t,o=r>0;o?(a.offsetUp+=r,a.offsetDown=0):(a.offsetDown-=r,a.offsetUp=0),a.lastScrollY=t;var i=t>a.navbarHeight+100,c=a.offsetUp>100,l=a.offsetDown>100;"static"!==n&&0===t?a.setNavbar("static"):"hidden"===n&&o&&!i?a.setNavbar("static"):"static"===n&&l&&i?a.setNavbar("hidden","blockTransition"):"hidden"===n&&c?a.setNavbar("sticky"):"sticky"===n&&l&&a.setNavbar("hidden")},a.offsetDown=0,a.offsetUp=0,a.lastScrollY=0,a.state={navbar:"static",blockTransition:!0},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.navbarHeight=this.elt.clientHeight,window&&window.addEventListener("scroll",this.onAppScroll)}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("scroll",this.onAppScroll)}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.breadcrumbFormatter,r=t.rightBreadcrumbRender,o=Object(d.a)(t,["classes","breadcrumbFormatter","rightBreadcrumbRender"]),i=this.state,c=i.navbar,l=i.blockTransition,s=[a.navbar,"static"===c?a.staticNavbar:a.stickyNavbar,"hidden"===c?a.hiddenStickyNavbar:"",l?a.blockTransition:""];return u.a.createElement("div",{className:s.join(" "),ref:function(t){return e.elt=t}},u.a.createElement(Z,Object.assign({className:a.appBar},o)),u.a.createElement(W,{breadcrumbFormatter:n,rightBreadcrumbRender:r}))}}]),t}(u.a.PureComponent),ue=Object(p.a)((function(e){return{appBar:{position:"initial"},navbar:{zIndex:1e3},staticNavbar:{position:"static"},stickyNavbar:{position:"sticky",top:0,transition:"transform 0.3s ease",transform:"translate3d(0, 0, 0)"},hiddenStickyNavbar:{transform:"translate3d(0, calc(-100% - 10px), 0)"},blockTransition:{transition:"none"}}}))(se),pe={position:"absolute",top:0,left:0,right:0},de={transitionProperty:"transform, opacity",transitionDuration:"200ms",transitionTimingFunction:"ease"},me=Object(p.a)((function(e){return{animation:{backgroundColor:"initial"},root:{backgroundColor:"initial",position:"relative","&.scene-forward-enter $animation":{opacity:.01,transform:"translateY(10px)"},"&.scene-forward-enter.scene-forward-enter-active $animation":Object(f.a)({},pe,{},de,{zIndex:1,opacity:.99,transform:"translateY(0)"}),"&.scene-forward-exit $animation":{opacity:.99},"&.scene-forward-exit.scene-forward-exit-active $animation":Object(f.a)({},pe,{},de,{opacity:.01}),"&.scene-backward-enter.scene-backward-enter-active $animation":Object(f.a)({},pe),"&.scene-backward-exit $animation":{opacity:.99,transform:"translateY(0)"},"&.scene-backward-exit.scene-backward-exit-active $animation":Object(f.a)({},pe,{},de,{zIndex:1,opacity:.01,transform:"translateY(10px)"})}}}))((function(e){var t=e.classes,a=e.children;return u.a.createElement("div",{className:t.root},u.a.createElement("div",{className:t.animation,id:"scrollable-scene"},a))}));a.d(t,"RoutesContext",(function(){return y}));var be=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={menuToggled:!1},a.openMenu=function(){a.setState({menuToggled:!0})},a.closeMenu=function(){a.setState({menuToggled:!1})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.routes,n=e.hideMenu,r=e.menuLogoSrc,o=e.leftAppBarComponent,i=e.rightAppBarComponent,c=e.appTitle,l=e.documentTitleFormatter,s=e.menuLabelFormatter,p=e.linkFormatter,d=e.breadcrumbFormatter,m=e.drawerFooter,b=e.rightBreadcrumbRender,f=this.state.menuToggled,h=n?{marginLeft:"initial"}:void 0;return u.a.createElement(E,{routes:a},!n&&u.a.createElement(le,{toggled:f,openMenu:this.openMenu,closeMenu:this.closeMenu,menuLogoSrc:r,linkFormatter:p,menuLabelFormatter:s,drawerFooter:m}),u.a.createElement(w,{appTitle:c,documentTitleFormatter:l}),u.a.createElement("div",{className:t.appContent,style:h},u.a.createElement(ue,{hideMenu:n,openMenu:this.openMenu,appTitle:c,leftAppBarComponent:o,rightAppBarComponent:i,breadcrumbFormatter:d,rightBreadcrumbRender:b}),u.a.createElement(N,null)))}}]),t}(u.a.Component);t.default=Object(p.a)((function(e){return{appContent:Object(l.a)({display:"flex",flexDirection:"column",width:"100%"},e.breakpoints.up("lg"),{marginLeft:"200px"})}}))(be)}})}));
//# sourceMappingURL=index.js.map
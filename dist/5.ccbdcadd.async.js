(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"4Ofr":function(e,t,a){e.exports={themeColor:"antd-pro\\components\\-setting-drawer\\-theme-color-themeColor",title:"antd-pro\\components\\-setting-drawer\\-theme-color-title",colorBlock:"antd-pro\\components\\-setting-drawer\\-theme-color-colorBlock"}},"8TWP":function(e,t,a){"use strict";var n=a("wwZU"),l=a("asgD");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("FeTH");var o=l(a("V4f5"));a("+OBR");var r=l(a("Uu/a"));a("vZQa");var i=l(a("pK6Z"));a("3I20");var u=l(a("HVGt")),c=l(a("hx8R")),d=l(a("tkTL")),s=l(a("wQec")),f=l(a("lx1e")),p=l(a("Ngnc")),m=l(a("UQKB"));a("yqUe");var h=l(a("Vyxh")),g=n(a("fjaS")),v=l(a("IU9N")),y=l(a("c+W/")),b=l(a("SlZz")),E=l(a("btmg")),k=h.default.TabPane,M=function(e){function t(){var e,a;(0,d.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,f.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(l))),a.onItemClick=function(e,t){var n=a.props.onItemClick,l=e.clickClose;n(e,t),l&&a.popover.click()},a.onClear=function(e){var t=a.props,n=t.onClear,l=t.clearClose;n(e),l&&a.popover.click()},a.onTabChange=function(e){var t=a.props.onTabChange;t(e)},a}return(0,m.default)(t,e),(0,s.default)(t,[{key:"getNotificationBox",value:function(){var e=this,t=this.props,a=t.children,n=t.loading,l=t.locale;if(!a)return null;var o=g.default.Children.map(a,function(t){var a=t.props.list&&t.props.list.length>0?"".concat(t.props.title," (").concat(t.props.list.length,")"):t.props.title;return g.default.createElement(k,{tab:a,key:t.props.name},g.default.createElement(b.default,(0,c.default)({},t.props,{data:t.props.list,onClick:function(a){return e.onItemClick(a,t.props)},onClear:function(){return e.onClear(t.props.name)},title:t.props.title,locale:l})))});return g.default.createElement(u.default,{spinning:n,delay:0},g.default.createElement(h.default,{className:E.default.tabs,onChange:this.onTabChange},o))}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.count,l=t.popupAlign,u=t.popupVisible,d=t.onPopupVisibleChange,s=t.bell,f=(0,y.default)(a,E.default.noticeButton),p=this.getNotificationBox(),m=s||g.default.createElement(i.default,{type:"bell",className:E.default.icon}),h=g.default.createElement("span",{className:f},g.default.createElement(r.default,{count:n,style:{boxShadow:"none"},className:E.default.badge},m));if(!p)return h;var b={};return"popupVisible"in this.props&&(b.visible=u),g.default.createElement(o.default,(0,c.default)({placement:"bottomRight",content:p,popupClassName:E.default.popover,trigger:"click",arrowPointAtCenter:!0,popupAlign:l,onVisibleChange:d},b,{ref:function(t){e.popover=v.default.findDOMNode(t)}}),h)}}]),t}(g.PureComponent);t.default=M,M.Tab=k,M.defaultProps={onItemClick:function(){},onPopupVisibleChange:function(){},onTabChange:function(){},onClear:function(){},loading:!1,clearClose:!1,locale:{emptyText:"No notifications",clear:"Clear"},emptyImage:"https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"}},AcjU:function(e,t,a){"use strict";var n=a("wwZU"),l=a("asgD");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.getMenuMatchKeys=t.getFlatMenuKeys=void 0;var o=l(a("hx8R")),r=l(a("4bTj")),i=l(a("3uD/")),u=l(a("tkTL")),c=l(a("wQec")),d=l(a("lx1e")),s=l(a("Ngnc")),f=l(a("UQKB"));a("bIL1");var p=l(a("KYe6")),m=n(a("fjaS")),h=l(a("aruW")),g=l(a("c+W/")),v=l(a("vVA6")),y=l(a("mR0u")),b=n(a("oFg3")),E=a("S/9j"),k=p.default.Sider,M=function(e){var t=e.location.pathname,a=e.flatMenuKeys;return(0,E.urlToList)(t).map(function(e){return(0,b.getMenuMatches)(a,e)[0]}).filter(function(e){return e})},x=function e(t){return t.reduce(function(t,a){return t.push(a.path),a.children?t.concat(e(a.children)):t},[])};t.getFlatMenuKeys=x;var C=function(e,t){return t.reduce(function(t,a){return t.concat(e.filter(function(e){return(0,h.default)(e).test(a)}))},[])};t.getMenuMatchKeys=C;var N=function(e){function t(e){var a;return(0,u.default)(this,t),a=(0,d.default)(this,(0,s.default)(t).call(this,e)),a.isMainMenu=function(e){var t=a.props.menuData;return t.some(function(t){return!!e&&(t.key===e||t.path===e)})},a.handleOpenChange=function(e){var t=e.filter(function(e){return a.isMainMenu(e)}).length>1;a.setState({openKeys:t?[e.pop()]:(0,i.default)(e)})},a.flatMenuKeys=x(e.menuData),a.state={openKeys:M(e)},a}return(0,f.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e,t=this.props,a=t.logo,n=t.collapsed,l=t.onCollapse,i=t.fixSiderbar,u=t.theme,c=this.state.openKeys,d=n?{}:{openKeys:c},s=(0,g.default)(y.default.sider,(e={},(0,r.default)(e,y.default.fixSiderbar,i),(0,r.default)(e,y.default.light,"light"===u),e));return m.default.createElement(k,{trigger:null,collapsible:!0,collapsed:n,breakpoint:"lg",onCollapse:l,width:256,theme:u,className:s},m.default.createElement("div",{className:y.default.logo,id:"logo"},m.default.createElement(v.default,{to:"/"},m.default.createElement("img",{src:a,alt:"logo"}),m.default.createElement("h1",null,"IAT Manager"))),m.default.createElement(b.default,(0,o.default)({},this.props,{mode:"inline",handleOpenChange:this.handleOpenChange,onOpenChange:this.handleOpenChange,style:{padding:"16px 0",width:"100%"}},d)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=t.pathname;return e.location.pathname!==a?{pathname:e.location.pathname,openKeys:M(e)}:null}}]),t}(m.PureComponent);t.default=N},BFsb:function(e,t,a){e.exports={content:"antd-pro\\components\\-setting-drawer\\index-content",blockChecbox:"antd-pro\\components\\-setting-drawer\\index-blockChecbox",item:"antd-pro\\components\\-setting-drawer\\index-item",selectIcon:"antd-pro\\components\\-setting-drawer\\index-selectIcon",color_block:"antd-pro\\components\\-setting-drawer\\index-color_block",title:"antd-pro\\components\\-setting-drawer\\index-title",handle:"antd-pro\\components\\-setting-drawer\\index-handle",productionHint:"antd-pro\\components\\-setting-drawer\\index-productionHint"}},BsfW:function(e,t,a){e.exports={list:"antd-pro\\components\\-notice-icon\\-notice-list-list",item:"antd-pro\\components\\-notice-icon\\-notice-list-item",meta:"antd-pro\\components\\-notice-icon\\-notice-list-meta",avatar:"antd-pro\\components\\-notice-icon\\-notice-list-avatar",iconElement:"antd-pro\\components\\-notice-icon\\-notice-list-iconElement",read:"antd-pro\\components\\-notice-icon\\-notice-list-read",title:"antd-pro\\components\\-notice-icon\\-notice-list-title",description:"antd-pro\\components\\-notice-icon\\-notice-list-description",datetime:"antd-pro\\components\\-notice-icon\\-notice-list-datetime",extra:"antd-pro\\components\\-notice-icon\\-notice-list-extra",notFound:"antd-pro\\components\\-notice-icon\\-notice-list-notFound",clear:"antd-pro\\components\\-notice-icon\\-notice-list-clear"}},G3lK:function(e,t,a){e.exports={headerSearch:"antd-pro\\components\\-header-search\\index-headerSearch",input:"antd-pro\\components\\-header-search\\index-input",show:"antd-pro\\components\\-header-search\\index-show"}},IGtV:function(e,t,a){e.exports={fixedHeader:"antd-pro\\layouts\\-header-fixedHeader"}},IamK:function(e,t,a){"use strict";var n=a("asgD");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("alfu");var l=n(a("VqkI")),o=n(a("hx8R")),r=n(a("fjaS")),i=n(a("AcjU")),u=function e(t){var a=[];return t.forEach(function(t){t.children&&(a=a.concat(e(t.children))),a.push(t.path)}),a},c=function(e){var t=e.isMobile,a=e.menuData,n=e.collapsed,c=e.onCollapse;return t?r.default.createElement(l.default,{visible:!n,placement:"left",onClose:function(){return c(!0)},style:{padding:0,height:"100vh"}},r.default.createElement(i.default,(0,o.default)({},e,{flatMenuKeys:u(a),collapsed:!t&&n}))):r.default.createElement(i.default,(0,o.default)({},e,{flatMenuKeys:u(a)}))},d=c;t.default=d},JwhZ:function(e,t,a){e.exports={head:"antd-pro\\components\\-top-nav-header\\index-head",light:"antd-pro\\components\\-top-nav-header\\index-light",main:"antd-pro\\components\\-top-nav-header\\index-main",wide:"antd-pro\\components\\-top-nav-header\\index-wide",left:"antd-pro\\components\\-top-nav-header\\index-left",right:"antd-pro\\components\\-top-nav-header\\index-right",logo:"antd-pro\\components\\-top-nav-header\\index-logo"}},NtFa:function(e,t,a){"use strict";var n=a("asgD"),l=a("wwZU");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("vZQa");var o,r,i,u=n(a("pK6Z")),c=n(a("tkTL")),d=n(a("wQec")),s=n(a("lx1e")),f=n(a("Ngnc")),p=n(a("UQKB")),m=n(a("/MxS")),h=l(a("fjaS")),g=n(a("vVA6")),v=n(a("JWke")),y=n(a("h3zL")),b=n(a("X5mu")),E=(o=(0,v.default)(600),i=function(e){function t(){var e,a;(0,c.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,s.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(l))),a.toggle=function(){var e=a.props,t=e.collapsed,n=e.onCollapse;n(!t),a.triggerResizeEvent()},a}return(0,p.default)(t,e),(0,d.default)(t,[{key:"componentWillUnmount",value:function(){this.triggerResizeEvent.cancel()}},{key:"triggerResizeEvent",value:function(){var e=document.createEvent("HTMLEvents");e.initEvent("resize",!0,!1),window.dispatchEvent(e)}},{key:"render",value:function(){var e=this.props,t=e.collapsed,a=e.isMobile,n=e.logo;return h.default.createElement("div",{className:y.default.header},a&&h.default.createElement(g.default,{to:"/",className:y.default.logo,key:"logo"},h.default.createElement("img",{src:n,alt:"logo",width:"32"})),h.default.createElement(u.default,{className:y.default.trigger,type:t?"menu-unfold":"menu-fold",onClick:this.toggle}),h.default.createElement(b.default,this.props))}}]),t}(h.PureComponent),r=i,(0,m.default)(r.prototype,"triggerResizeEvent",[o],Object.getOwnPropertyDescriptor(r.prototype,"triggerResizeEvent"),r.prototype),r);t.default=E},PceP:function(e,t,a){"use strict";var n=a("asgD"),l=a("wwZU");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("alfu");var o=n(a("VqkI"));a("2l8O");var r=n(a("XwTc"));a("80wb");var i=n(a("0h6Q"));a("UWBG");var u=n(a("9p/O"));a("ehcg");var c=n(a("Wjv/"));a("vZQa");var d=n(a("pK6Z"));a("+TwZ");var s=n(a("h7Pk"));a("vaoI");var f=n(a("pgnz"));a("t9io");var p=n(a("sfFO")),m=n(a("tkTL")),h=n(a("wQec")),g=n(a("lx1e")),v=n(a("Ngnc")),y=n(a("UQKB")),b=n(a("WkHf"));a("jKTL");var E,k,M,x=n(a("u866")),C=l(a("fjaS")),N=a("4sYn"),w=a("SsxR"),S=a("32uE"),P=n(a("RoSp")),K=n(a("BFsb")),T=n(a("WJM/")),I=n(a("Pjk0")),j=x.default.Option,D=function(e){var t=e.children,a=e.title,n=e.style;return C.default.createElement("div",{style:(0,b.default)({},n,{marginBottom:24})},C.default.createElement("h3",{className:K.default.title},a),t)},O=(E=(0,S.connect)(function(e){var t=e.setting;return{setting:t}}),E((M=function(e){function t(){var e,a;(0,m.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,g.default)(this,(e=(0,v.default)(t)).call.apply(e,[this].concat(l))),a.state={collapse:!1},a.getLayoutSetting=function(){var e=a.props.setting,t=e.contentWidth,n=e.fixedHeader,l=e.layout,o=e.autoHideHeader,r=e.fixSiderbar;return[{title:(0,N.formatMessage)({id:"app.setting.content-width"}),action:C.default.createElement(x.default,{value:t,size:"small",onSelect:function(e){return a.changeSetting("contentWidth",e)},style:{width:80}},"sidemenu"===l?null:C.default.createElement(j,{value:"Fixed"},(0,N.formatMessage)({id:"app.setting.content-width.fixed"})),C.default.createElement(j,{value:"Fluid"},(0,N.formatMessage)({id:"app.setting.content-width.fluid"})))},{title:(0,N.formatMessage)({id:"app.setting.fixedheader"}),action:C.default.createElement(p.default,{size:"small",checked:!!n,onChange:function(e){return a.changeSetting("fixedHeader",e)}})},{title:(0,N.formatMessage)({id:"app.setting.hideheader"}),disabled:!n,disabledReason:(0,N.formatMessage)({id:"app.setting.hideheader.hint"}),action:C.default.createElement(p.default,{size:"small",checked:!!o,onChange:function(e){return a.changeSetting("autoHideHeader",e)}})},{title:(0,N.formatMessage)({id:"app.setting.fixedsidebar"}),disabled:"topmenu"===l,disabledReason:(0,N.formatMessage)({id:"app.setting.fixedsidebar.hint"}),action:C.default.createElement(p.default,{size:"small",checked:!!r,onChange:function(e){return a.changeSetting("fixSiderbar",e)}})}]},a.changeSetting=function(e,t){var n=a.props.setting,l=(0,b.default)({},n);l[e]=t,"layout"===e?l.contentWidth="topmenu"===t?"Fixed":"Fluid":"fixedHeader"!==e||t||(l.autoHideHeader=!1),a.setState(l,function(){var e=a.props.dispatch;e({type:"setting/changeSetting",payload:a.state})})},a.togglerContent=function(){var e=a.state.collapse;a.setState({collapse:!e})},a.renderLayoutSettingItem=function(e){var t=C.default.cloneElement(e.action,{disabled:e.disabled});return C.default.createElement(s.default,{title:e.disabled?e.disabledReason:"",placement:"left"},C.default.createElement(f.default.Item,{actions:[t]},C.default.createElement("span",{style:{opacity:e.disabled?"0.5":""}},e.title)))},a}return(0,y.default)(t,e),(0,h.default)(t,[{key:"render",value:function(){var e=this,t=this.props.setting,a=t.navTheme,n=t.primaryColor,l=t.layout,s=t.colorWeak,m=this.state.collapse;return C.default.createElement(o.default,{visible:m,width:300,onClose:this.togglerContent,placement:"right",handler:C.default.createElement("div",{className:K.default.handle},C.default.createElement(d.default,{type:m?"close":"setting",style:{color:"#fff",fontSize:20}})),onHandleClick:this.togglerContent,style:{zIndex:999}},C.default.createElement("div",{className:K.default.content},C.default.createElement(D,{title:(0,N.formatMessage)({id:"app.setting.pagestyle"})},C.default.createElement(I.default,{list:[{key:"dark",url:"https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg",title:(0,N.formatMessage)({id:"app.setting.pagestyle.dark"})},{key:"light",url:"https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg",title:(0,N.formatMessage)({id:"app.setting.pagestyle.light"})}],value:a,onChange:function(t){return e.changeSetting("navTheme",t)}})),C.default.createElement(T.default,{title:(0,N.formatMessage)({id:"app.setting.themecolor"}),value:n,onChange:function(t){return e.changeSetting("primaryColor",t)}}),C.default.createElement(c.default,null),C.default.createElement(D,{title:(0,N.formatMessage)({id:"app.setting.navigationmode"})},C.default.createElement(I.default,{list:[{key:"sidemenu",url:"https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg",title:(0,N.formatMessage)({id:"app.setting.sidemenu"})},{key:"topmenu",url:"https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg",title:(0,N.formatMessage)({id:"app.setting.topmenu"})}],value:l,onChange:function(t){return e.changeSetting("layout",t)}})),C.default.createElement(f.default,{split:!1,dataSource:this.getLayoutSetting(),renderItem:this.renderLayoutSettingItem}),C.default.createElement(c.default,null),C.default.createElement(D,{title:(0,N.formatMessage)({id:"app.setting.othersettings"})},C.default.createElement(f.default.Item,{actions:[C.default.createElement(p.default,{size:"small",checked:!!s,onChange:function(t){return e.changeSetting("colorWeak",t)}})]},(0,N.formatMessage)({id:"app.setting.weakmode"}))),C.default.createElement(c.default,null),C.default.createElement(w.CopyToClipboard,{text:JSON.stringify((0,P.default)(t,["colorWeak"]),null,2),onCopy:function(){return u.default.success((0,N.formatMessage)({id:"app.setting.copyinfo"}))}},C.default.createElement(i.default,{block:!0,icon:"copy"},(0,N.formatMessage)({id:"app.setting.copy"}))),C.default.createElement(r.default,{type:"warning",className:K.default.productionHint,message:C.default.createElement("div",null,(0,N.formatMessage)({id:"app.setting.production.hint"})," ",C.default.createElement("a",{href:"https://u.ant.design/pro-v2-default-settings",target:"_blank",rel:"noopener noreferrer"},"src/defaultSettings.js"))})))}}]),t}(C.PureComponent),k=M))||k),W=O;t.default=W},Pjk0:function(e,t,a){"use strict";var n=a("asgD");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+TwZ");var l=n(a("h7Pk"));a("vZQa");var o=n(a("pK6Z")),r=n(a("fjaS")),i=n(a("BFsb")),u=function(e){var t=e.value,a=e.onChange,n=e.list;return r.default.createElement("div",{className:i.default.blockChecbox,key:t},n.map(function(e){return r.default.createElement(l.default,{title:e.title,key:e.key},r.default.createElement("div",{className:i.default.item,onClick:function(){return a(e.key)}},r.default.createElement("img",{src:e.url,alt:e.key}),r.default.createElement("div",{className:i.default.selectIcon,style:{display:t===e.key?"block":"none"}},r.default.createElement(o.default,{type:"check"}))))}))},c=u;t.default=c},SlZz:function(e,t,a){"use strict";var n=a("asgD");Object.defineProperty(t,"__esModule",{value:!0}),t.default=d,a("vaoI");var l=n(a("pgnz"));a("03OL");var o=n(a("4lwQ")),r=n(a("4bTj")),i=n(a("fjaS")),u=n(a("c+W/")),c=n(a("BsfW"));function d(e){var t=e.data,a=void 0===t?[]:t,n=e.onClick,d=e.onClear,s=e.title,f=e.locale,p=e.emptyText,m=e.emptyImage,h=e.showClear,g=void 0===h||h;return 0===a.length?i.default.createElement("div",{className:c.default.notFound},m?i.default.createElement("img",{src:m,alt:"not found"}):null,i.default.createElement("div",null,p||f.emptyText)):i.default.createElement("div",null,i.default.createElement(l.default,{className:c.default.list},a.map(function(e,t){var a=(0,u.default)(c.default.item,(0,r.default)({},c.default.read,e.read)),d=e.avatar?"string"===typeof e.avatar?i.default.createElement(o.default,{className:c.default.avatar,src:e.avatar}):e.avatar:null;return i.default.createElement(l.default.Item,{className:a,key:e.key||t,onClick:function(){return n(e)}},i.default.createElement(l.default.Item.Meta,{className:c.default.meta,avatar:i.default.createElement("span",{className:c.default.iconElement},d),title:i.default.createElement("div",{className:c.default.title},e.title,i.default.createElement("div",{className:c.default.extra},e.extra)),description:i.default.createElement("div",null,i.default.createElement("div",{className:c.default.description,title:e.description},e.description),i.default.createElement("div",{className:c.default.datetime},e.datetime))}))})),g?i.default.createElement("div",{className:c.default.clear,onClick:d},f.clear," ",s):null)}},"WJM/":function(e,t,a){"use strict";var n=a("asgD");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+TwZ");var l=n(a("h7Pk")),o=n(a("hx8R"));a("vZQa");var r=n(a("pK6Z")),i=n(a("f5eZ")),u=n(a("fjaS")),c=a("4sYn"),d=n(a("4Ofr")),s=function(e){var t=e.color,a=e.check,n=(0,i.default)(e,["color","check"]);return u.default.createElement("div",(0,o.default)({},n,{style:{backgroundColor:t}}),a?u.default.createElement(r.default,{type:"check"}):"")},f=function(e){var t=e.colors,a=e.title,n=e.value,o=e.onChange,r=t;return t||(r=[{key:"dust",color:"#F5222D"},{key:"volcano",color:"#FA541C"},{key:"sunset",color:"#FAAD14"},{key:"cyan",color:"#13C2C2"},{key:"green",color:"#52C41A"},{key:"daybreak",color:"#1890FF"},{key:"geekblue",color:"#2F54EB"},{key:"purple",color:"#722ED1"}]),u.default.createElement("div",{className:d.default.themeColor},u.default.createElement("h3",{className:d.default.title},a),u.default.createElement("div",{className:d.default.content},r.map(function(e){var t=e.key,a=e.color;return u.default.createElement(l.default,{key:a,title:(0,c.formatMessage)({id:"app.setting.themecolor.".concat(t)})},u.default.createElement(s,{className:d.default.colorBlock,color:a,check:n===a,onClick:function(){return o&&o(a)}}))})))},p=f;t.default=p},X5mu:function(e,t,a){"use strict";var n=a("wwZU"),l=a("asgD");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("3I20");var o=l(a("HVGt"));a("3SVD");var r=l(a("Xa+8"));a("03OL");var i=l(a("4lwQ"));a("IZpt");var u=l(a("Jg7g"));a("vZQa");var c=l(a("pK6Z"));a("NStP");var d=l(a("zyE+")),s=l(a("WkHf")),f=l(a("tkTL")),p=l(a("wQec")),m=l(a("lx1e")),h=l(a("Ngnc")),g=l(a("UQKB")),v=n(a("fjaS")),y=a("4sYn"),b=l(a("aBXT")),E=l(a("6BNT")),k=(l(a("8TWP")),l(a("k5GS")),l(a("bfXr")),l(a("h3zL"))),M=function(e){function t(){return(0,f.default)(this,t),(0,m.default)(this,(0,h.default)(t).apply(this,arguments))}return(0,g.default)(t,e),(0,p.default)(t,[{key:"getNoticeData",value:function(){var e=this.props.notices,t=void 0===e?[]:e;if(0===t.length)return{};var a=t.map(function(e){var t=(0,s.default)({},e);if(t.datetime&&(t.datetime=(0,b.default)(e.datetime).fromNow()),t.id&&(t.key=t.id),t.extra&&t.status){var a={todo:"",processing:"blue",urgent:"red",doing:"gold"}[t.status];t.extra=v.default.createElement(d.default,{color:a,style:{marginRight:0}},t.extra)}return t});return(0,E.default)(a,"type")}},{key:"render",value:function(){var e=this.props,t=e.currentUser,a=(e.fetchingNotices,e.onNoticeVisibleChange,e.onMenuClick),n=(e.onNoticeClear,e.theme),l=v.default.createElement(u.default,{className:k.default.menu,selectedKeys:[],onClick:a},v.default.createElement(u.default.Item,{key:"logout"},v.default.createElement(c.default,{type:"logout"}),v.default.createElement(y.FormattedMessage,{id:"menu.account.logout",defaultMessage:"logout"}))),d=k.default.right;return"dark"===n&&(d="".concat(k.default.right,"  ").concat(k.default.dark)),v.default.createElement("div",{className:d},t.name?v.default.createElement(r.default,{overlay:l},v.default.createElement("span",{className:"".concat(k.default.action," ").concat(k.default.account)},v.default.createElement(i.default,{size:"small",className:k.default.avatar,src:t.avatar,alt:"avatar"}),v.default.createElement("span",{className:k.default.name},t.name))):v.default.createElement(o.default,{size:"small",style:{marginLeft:8,marginRight:8}}))}}]),t}(v.PureComponent);t.default=M},btmg:function(e,t,a){e.exports={popover:"antd-pro\\components\\-notice-icon\\index-popover",noticeButton:"antd-pro\\components\\-notice-icon\\index-noticeButton",icon:"antd-pro\\components\\-notice-icon\\index-icon",tabs:"antd-pro\\components\\-notice-icon\\index-tabs"}},ctiy:function(e,t,a){"use strict";var n=a("wwZU"),l=a("asgD");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a("hx8R"));a("UWBG");var r=l(a("9p/O")),i=l(a("tkTL")),u=l(a("wQec")),c=l(a("lx1e")),d=l(a("Ngnc")),s=l(a("UQKB"));a("bIL1");var f=l(a("KYe6")),p=n(a("fjaS")),m=a("4sYn"),h=l(a("WauI")),g=a("32uE"),v=l(a("JQpn")),y=l(a("NtFa")),b=l(a("wWO0")),E=l(a("IGtV")),k=l(a("HZnN")),M=f.default.Header,x=function(e){function t(){var e,a;(0,i.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,c.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(l))),a.state={visible:!0},a.getHeadWidth=function(){var e=a.props,t=e.isMobile,n=e.collapsed,l=e.setting,o=l.fixedHeader,r=l.layout;return t||!o||"topmenu"===r?"100%":n?"calc(100% - 80px)":"calc(100% - 256px)"},a.handleNoticeClear=function(e){r.default.success("".concat((0,m.formatMessage)({id:"component.noticeIcon.cleared"})," ").concat((0,m.formatMessage)({id:"component.globalHeader.".concat(e)})));var t=a.props.dispatch;t({type:"global/clearNotices",payload:e})},a.handleMenuClick=function(e){var t=e.key,n=a.props.dispatch;"userCenter"!==t?"triggerError"!==t?"userinfo"!==t?"logout"===t&&n({type:"login/logout"}):v.default.push("/account/settings/base"):v.default.push("/exception/trigger"):v.default.push("/account/center")},a.handleNoticeVisibleChange=function(e){if(e){var t=a.props.dispatch;t({type:"global/fetchNotices"})}},a.handScroll=function(){var e=a.props.autoHideHeader,t=a.state.visible;if(e){var n=document.body.scrollTop+document.documentElement.scrollTop;a.ticking||(a.ticking=!0,requestAnimationFrame(function(){a.oldScrollTop>n&&a.setState({visible:!0}),n>300&&t&&a.setState({visible:!1}),n<300&&!t&&a.setState({visible:!0}),a.oldScrollTop=n,a.ticking=!1}))}},a}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handScroll,{passive:!0})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handScroll)}},{key:"render",value:function(){var e=this.props,t=e.isMobile,a=e.handleMenuCollapse,n=e.setting,l=n.navTheme,r=n.layout,i=n.fixedHeader,u=this.state.visible,c="topmenu"===r,d=this.getHeadWidth(),s=u?p.default.createElement(M,{style:{padding:0,width:d},className:i?E.default.fixedHeader:""},c&&!t?p.default.createElement(b.default,(0,o.default)({theme:l,mode:"horizontal",Authorized:k.default,onCollapse:a,onNoticeClear:this.handleNoticeClear,onMenuClick:this.handleMenuClick,onNoticeVisibleChange:this.handleNoticeVisibleChange},this.props)):p.default.createElement(y.default,(0,o.default)({onCollapse:a,onNoticeClear:this.handleNoticeClear,onMenuClick:this.handleMenuClick,onNoticeVisibleChange:this.handleNoticeVisibleChange},this.props))):null;return p.default.createElement(h.default,{component:"",transitionName:"fade"},s)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.autoHideHeader||t.visible?null:{visible:!0}}}]),t}(p.PureComponent),C=(0,g.connect)(function(e){var t=e.user,a=e.global,n=e.setting,l=e.loading;return{currentUser:t.currentUser,collapsed:a.collapsed,fetchingNotices:l.effects["global/fetchNotices"],notices:a.notices,setting:n}})(x);t.default=C},gJ0l:function(e,t,a){"use strict";var n=a("wwZU"),l=a("asgD");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("vZQa");var o=l(a("pK6Z"));a("bIL1");var r=l(a("KYe6")),i=n(a("fjaS")),u=l(a("ggcP")),c=r.default.Footer,d=function(){return i.default.createElement(c,{style:{padding:0}},i.default.createElement(u.default,{links:[{key:"github",title:i.default.createElement(o.default,{type:"github"}),href:"https://github.com/ant-design/ant-design-pro",blankTarget:!0}],copyright:i.default.createElement(i.Fragment,null,"Copyright ",i.default.createElement(o.default,{type:"copyright"})," 2018 \u6280\u672f\u90e8\u8001\u6cb9\u6761\u51fa\u54c1")}))},s=d;t.default=s},h3zL:function(e,t,a){e.exports={header:"antd-pro\\components\\-global-header\\index-header",logo:"antd-pro\\components\\-global-header\\index-logo",menu:"antd-pro\\components\\-global-header\\index-menu",trigger:"antd-pro\\components\\-global-header\\index-trigger",right:"antd-pro\\components\\-global-header\\index-right",action:"antd-pro\\components\\-global-header\\index-action",search:"antd-pro\\components\\-global-header\\index-search",account:"antd-pro\\components\\-global-header\\index-account",avatar:"antd-pro\\components\\-global-header\\index-avatar",dark:"antd-pro\\components\\-global-header\\index-dark",name:"antd-pro\\components\\-global-header\\index-name"}},k5GS:function(e,t,a){"use strict";var n=a("asgD"),l=a("wwZU");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("o8Ej");var o=n(a("Kjvl")),r=n(a("hx8R"));a("kHSo");var i=n(a("chwx"));a("vZQa");var u,c,d,s,f,p=n(a("pK6Z")),m=n(a("4bTj")),h=n(a("f5eZ")),g=n(a("tkTL")),v=n(a("lx1e")),y=n(a("Ngnc")),b=n(a("wQec")),E=n(a("UQKB")),k=n(a("/MxS")),M=l(a("fjaS")),x=(n(a("gHS5")),n(a("c+W/"))),C=n(a("JWke")),N=n(a("WIym")),w=n(a("G3lK")),S=(u=(0,N.default)(),c=(0,C.default)(500,{leading:!0,trailing:!1}),f=s=function(e){function t(e){var a;return(0,g.default)(this,t),a=(0,v.default)(this,(0,y.default)(t).call(this,e)),a.onKeyDown=function(e){if("Enter"===e.key){var t=a.props.onPressEnter,n=a.state.value;a.timeout=setTimeout(function(){t(n)},0)}},a.onChange=function(e){var t=a.props.onChange;a.setState({value:e}),t&&t(e)},a.enterSearchMode=function(){var e=a.props.onVisibleChange;e(!0),a.setState({searchMode:!0},function(){var e=a.state.searchMode;e&&a.input.focus()})},a.leaveSearchMode=function(){a.setState({searchMode:!1,value:""})},a.state={searchMode:e.defaultOpen,value:""},a}return(0,E.default)(t,e),(0,b.default)(t,null,[{key:"getDerivedStateFromProps",value:function(e){return"open"in e?{searchMode:e.open}:null}}]),(0,b.default)(t,[{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout)}},{key:"debouncePressEnter",value:function(){var e=this.props.onPressEnter,t=this.state.value;e(t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.placeholder,l=(t.open,(0,h.default)(t,["className","placeholder","open"])),u=this.state,c=u.searchMode,d=u.value;delete l.defaultOpen;var s=(0,x.default)(w.default.input,(0,m.default)({},w.default.show,c));return M.default.createElement("span",{className:(0,x.default)(a,w.default.headerSearch),onClick:this.enterSearchMode,onTransitionEnd:function(t){var a=t.propertyName;if("width"===a&&!c){var n=e.props.onVisibleChange;n(c)}}},M.default.createElement(p.default,{type:"search",key:"Icon"}),M.default.createElement(o.default,(0,r.default)({key:"AutoComplete"},l,{className:s,value:d,onChange:this.onChange}),M.default.createElement(i.default,{ref:function(t){e.input=t},"aria-label":n,placeholder:n,onKeyDown:this.onKeyDown,onBlur:this.leaveSearchMode})))}}]),t}(M.PureComponent),s.defaultProps={defaultActiveFirstOption:!1,onPressEnter:function(){},onSearch:function(){},className:"",placeholder:"",dataSource:[],defaultOpen:!1,onVisibleChange:function(){}},d=f,(0,k.default)(d.prototype,"debouncePressEnter",[u,c],Object.getOwnPropertyDescriptor(d.prototype,"debouncePressEnter"),d.prototype),d);t.default=S},m8Tn:function(e,t,a){"use strict";var n=a("asgD");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("hx8R")),o=n(a("tkTL")),r=n(a("wQec")),i=n(a("lx1e")),u=n(a("Ngnc")),c=n(a("UQKB")),d=n(a("WkHf"));a("bIL1");var s=n(a("KYe6")),f=n(a("fjaS")),p=n(a("Iy4X")),m=n(a("7A4L")),h=n(a("Gwjl")),g=a("32uE"),v=a("TViv"),y=n(a("c+W/")),b=n(a("aruW")),E=a("DqOq"),k=a("4sYn"),M=n(a("IamK")),x=n(a("HZnN")),C=(n(a("PceP")),n(a("zwU1"))),N=n(a("gJ0l")),w=n(a("ctiy")),S=n(a("R1Dz")),P=n(a("wOmh")),K=s.default.Content;function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;return e.map(function(e){var l="menu";if(n&&e.name?l="".concat(n,".").concat(e.name):e.name?l="menu.".concat(e.name):n&&(l=n),e.path){var o=(0,d.default)({},e,{locale:l,authority:e.authority||a});if(e.routes){var r=T(e.routes,"".concat(t).concat(e.path,"/"),e.authority,l);o.children=r}return delete o.routes,o}return null}).filter(function(e){return e})}var I=(0,h.default)(T,m.default),j={"screen-xs":{maxWidth:575},"screen-sm":{minWidth:576,maxWidth:767},"screen-md":{minWidth:768,maxWidth:991},"screen-lg":{minWidth:992,maxWidth:1199},"screen-xl":{minWidth:1200,maxWidth:1599},"screen-xxl":{minWidth:1600}},D=function(e){function t(e){var a;return(0,o.default)(this,t),a=(0,i.default)(this,(0,u.default)(t).call(this,e)),a.state={rendering:!0,isMobile:!1,menuData:a.getMenuData()},a.matchParamsPath=function(e){var t=Object.keys(a.breadcrumbNameMap).find(function(t){return(0,b.default)(t).test(e)});return a.breadcrumbNameMap[t]},a.getPageTitle=function(e){var t=a.matchParamsPath(e);if(!t)return"IAT Manager";var n=(0,k.formatMessage)({id:t.locale||t.name,defaultMessage:t.name});return"".concat(n," - IAT Manager")},a.getLayoutStyle=function(){var e=a.state.isMobile,t=a.props,n=t.fixSiderbar,l=t.collapsed,o=t.layout;return n&&"topmenu"!==o&&!e?{paddingLeft:l?"80px":"256px"}:null},a.getContentStyle=function(){var e=a.props.fixedHeader;return{margin:"24px 24px 0",paddingTop:e?64:0}},a.handleMenuCollapse=function(e){var t=a.props.dispatch;t({type:"global/changeLayoutCollapsed",payload:e})},a.getPageTitle=(0,h.default)(a.getPageTitle),a.getBreadcrumbNameMap=(0,h.default)(a.getBreadcrumbNameMap,m.default),a.breadcrumbNameMap=a.getBreadcrumbNameMap(),a.matchParamsPath=(0,h.default)(a.matchParamsPath,m.default),a}return(0,c.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.dispatch;t({type:"user/fetchCurrent"}),t({type:"setting/getSetting"}),this.renderRef=requestAnimationFrame(function(){e.setState({rendering:!1})}),this.enquireHandler=(0,E.enquireScreen)(function(t){var a=e.state.isMobile;a!==t&&e.setState({isMobile:t})})}},{key:"componentDidUpdate",value:function(e){this.breadcrumbNameMap=this.getBreadcrumbNameMap();var t=this.state.isMobile,a=this.props.collapsed;!t||e.isMobile||a||this.handleMenuCollapse(!1)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.renderRef),(0,E.unenquireScreen)(this.enquireHandler)}},{key:"getContext",value:function(){var e=this.props.location;return{location:e,breadcrumbNameMap:this.breadcrumbNameMap}}},{key:"getMenuData",value:function(){var e=this.props.route.routes;return I(e)}},{key:"getBreadcrumbNameMap",value:function(){var e={},t=function t(a){a.forEach(function(a){a.children&&t(a.children),e[a.path]=a})};return t(this.getMenuData()),e}},{key:"renderSettingDrawer",value:function(){this.state.rendering;return null}},{key:"render",value:function(){var e=this,t=this.props,a=t.navTheme,n=t.layout,o=t.children,r=t.location.pathname,i=this.state,u=i.isMobile,c=i.menuData,m="topmenu"===n,h=this.matchParamsPath(r),g=f.default.createElement(s.default,null,m&&!u?null:f.default.createElement(M.default,(0,l.default)({logo:C.default,Authorized:x.default,theme:a,onCollapse:this.handleMenuCollapse,menuData:c,isMobile:u},this.props)),f.default.createElement(s.default,{style:(0,d.default)({},this.getLayoutStyle(),{minHeight:"100vh"})},f.default.createElement(w.default,(0,l.default)({menuData:c,handleMenuCollapse:this.handleMenuCollapse,logo:C.default,isMobile:u},this.props)),f.default.createElement(K,{style:this.getContentStyle()},f.default.createElement(x.default,{authority:h.authority,noMatch:f.default.createElement(P.default,null)},o)),f.default.createElement(N.default,null)));return f.default.createElement(f.default.Fragment,null,f.default.createElement(p.default,{title:this.getPageTitle(r)},f.default.createElement(v.ContainerQuery,{query:j},function(t){return f.default.createElement(S.default.Provider,{value:e.getContext()},f.default.createElement("div",{className:(0,y.default)(t)},g))})),this.renderSettingDrawer())}}]),t}(f.default.PureComponent),O=(0,g.connect)(function(e){var t=e.global,a=e.setting;return(0,d.default)({collapsed:t.collapsed,layout:a.layout},a)})(D);t.default=O},mR0u:function(e,t,a){e.exports={logo:"antd-pro\\components\\-sider-menu\\index-logo",sider:"antd-pro\\components\\-sider-menu\\index-sider",fixSiderbar:"antd-pro\\components\\-sider-menu\\index-fixSiderbar",light:"antd-pro\\components\\-sider-menu\\index-light",icon:"antd-pro\\components\\-sider-menu\\index-icon"}},oFg3:function(e,t,a){"use strict";var n=a("wwZU"),l=a("asgD");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.getMenuMatches=void 0;var o=l(a("hx8R")),r=l(a("tkTL")),i=l(a("wQec")),u=l(a("lx1e")),c=l(a("Ngnc")),d=l(a("UQKB"));a("vZQa");var s=l(a("pK6Z"));a("IZpt");var f=l(a("Jg7g")),p=n(a("fjaS")),m=l(a("vVA6")),h=l(a("7A4L")),g=l(a("Gwjl")),v=l(a("aruW")),y=a("4sYn"),b=a("S/9j"),E=l(a("mR0u")),k=f.default.SubMenu,M=function(e){return"string"===typeof e&&0===e.indexOf("http")?p.default.createElement("img",{src:e,alt:"icon",className:E.default.icon}):"string"===typeof e?p.default.createElement(s.default,{type:e}):e},x=function(e,t){return e.filter(function(e){return!!e&&(0,v.default)(e).test(t)})};t.getMenuMatches=x;var C=function(e){function t(e){var a;return(0,r.default)(this,t),a=(0,u.default)(this,(0,c.default)(t).call(this,e)),a.getNavMenuItems=function(e,t){return e?e.filter(function(e){return e.name&&!e.hideInMenu}).map(function(e){var n=a.getSubMenuOrItem(e,t);return a.checkPermissionItem(e.authority,n)}).filter(function(e){return e}):[]},a.getSelectedMenuKeys=function(e){return(0,b.urlToList)(e).map(function(e){return x(a.flatMenuKeys,e).pop()})},a.getSubMenuOrItem=function(e){if(e.children&&!e.hideChildrenInMenu&&e.children.some(function(e){return e.name})){var t=e.locale?(0,y.formatMessage)({id:e.locale}):e.name;return p.default.createElement(k,{title:e.icon?p.default.createElement("span",null,M(e.icon),p.default.createElement("span",null,t)):t,key:e.path},a.getNavMenuItems(e.children))}return p.default.createElement(f.default.Item,{key:e.path},a.getMenuItemPath(e))},a.getMenuItemPath=function(e){var t=e.locale?(0,y.formatMessage)({id:e.locale}):e.name,n=a.conversionPath(e.path),l=M(e.icon),o=e.target;if(/^https?:\/\//.test(n))return p.default.createElement("a",{href:n,target:o},l,p.default.createElement("span",null,t));var r=a.props,i=r.location,u=r.isMobile,c=r.onCollapse;return p.default.createElement(m.default,{to:n,target:o,replace:n===i.pathname,onClick:u?function(){c(!0)}:void 0},l,p.default.createElement("span",null,t))},a.checkPermissionItem=function(e,t){var n=a.props.Authorized;if(n&&n.check){var l=n.check;return l(e,t)}return t},a.conversionPath=function(e){return e&&0===e.indexOf("http")?e:"/".concat(e||"").replace(/\/+/g,"/")},a.getSelectedMenuKeys=(0,g.default)(a.getSelectedMenuKeys,h.default),a.flatMenuKeys=a.getFlatMenuKeys(e.menuData),a}return(0,d.default)(t,e),(0,i.default)(t,[{key:"getFlatMenuKeys",value:function(e){var t=this,a=[];return e.forEach(function(e){e.children&&(a=a.concat(t.getFlatMenuKeys(e.children))),a.push(e.path)}),a}},{key:"render",value:function(){var e=this.props,t=e.openKeys,a=e.theme,n=e.mode,l=e.location.pathname,r=this.getSelectedMenuKeys(l);!r.length&&t&&(r=[t[t.length-1]]);var i={};t&&(i={openKeys:t});var u=this.props,c=u.handleOpenChange,d=u.style,s=u.menuData;return p.default.createElement(f.default,(0,o.default)({key:"Menu",mode:n,theme:a,onOpenChange:c,selectedKeys:r,style:d,className:"horizontal"===n?"top-nav-menu":""},i),this.getNavMenuItems(s))}}]),t}(p.PureComponent);t.default=C},wWO0:function(e,t,a){"use strict";var n=a("wwZU"),l=a("asgD");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a("hx8R")),r=l(a("tkTL")),i=l(a("wQec")),u=l(a("lx1e")),c=l(a("Ngnc")),d=l(a("UQKB")),s=n(a("fjaS")),f=l(a("vVA6")),p=l(a("X5mu")),m=l(a("oFg3")),h=l(a("JwhZ")),g=function(e){function t(){var e,a;(0,r.default)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=(0,u.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(l))),a.state={maxWidth:void 0},a}return(0,d.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.theme,n=t.contentWidth,l=t.logo,r=this.state.maxWidth;return s.default.createElement("div",{className:"".concat(h.default.head," ").concat("light"===a?h.default.light:"")},s.default.createElement("div",{ref:function(t){e.maim=t},className:"".concat(h.default.main," ").concat("Fixed"===n?h.default.wide:"")},s.default.createElement("div",{className:h.default.left},s.default.createElement("div",{className:h.default.logo,key:"logo",id:"logo"},s.default.createElement(f.default,{to:"/"},s.default.createElement("img",{src:l,alt:"logo"}),s.default.createElement("h1",null,"IAT Manager"))),s.default.createElement("div",{style:{maxWidth:r}},s.default.createElement(m.default,(0,o.default)({},this.props,{style:{border:"none",height:64}})))),s.default.createElement(p.default,this.props)))}}],[{key:"getDerivedStateFromProps",value:function(e){return{maxWidth:("Fixed"===e.contentWidth?1200:window.innerWidth)-280-165-40}}}]),t}(s.PureComponent);t.default=g}}]);
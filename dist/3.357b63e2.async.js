(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{ZpO0:function(e,a,t){"use strict";var l=t("asgD"),r=t("wwZU");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,t("PikD");var n=l(t("9QT/"));t("uU5H");var u=l(t("CucC"));t("80wb");var s=l(t("0h6Q"));t("dSGA");var d=l(t("z3tR")),i=l(t("hx8R"));t("vZQa");var f=l(t("pK6Z")),o=l(t("tkTL")),c=l(t("wQec")),m=l(t("lx1e")),p=l(t("Ngnc")),y=l(t("UQKB"));t("eEKF");var h=l(t("jBcA"));t("jKTL");var k=l(t("u866"));t("kHSo");var v=l(t("chwx"));t("4dnL");var E,g,I,b,T=l(t("CvEA")),V=r(t("fjaS")),w=l(t("aBXT")),j=t("32uE"),q=l(t("zHco")),C=l(t("IN2g")),x=l(t("oQmc")),F=T.default.Item,H=v.default.TextArea,L=k.default.Option,P=(h.default.Group,0),S=0,B=(E=(0,j.connect)(function(e){var a=e.system,t=e.task;return{system:a,task:t}}),g=T.default.create({onValuesChange:function(e,a,t){if(a)for(var l in a)if("project"===l){var r=t.project,n=e.dispatch;n({type:"task/queryProjectCaseList",payload:{id:r}})}}}),E(I=g((b=function(e){function a(){var e,t;(0,o.default)(this,a);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return t=(0,m.default)(this,(e=(0,p.default)(a)).call.apply(e,[this].concat(r))),t.state={taskId:"",projectList:[],headerKeys:[],paramkeys:[],params:[],headers:[],taskInfo:{}},t.queryTaskInfo=function(e){t.props.dispatch({type:"task/queryTaskInfo",payload:{id:e}}).then(function(){var a=t.props.task,l=[],r=[],n=[],u=[];P=a.taskInfo.headers.length>0&&a.taskInfo.headers.length-1,S=a.taskInfo.params.length>0&&a.taskInfo.params.length-1,a.taskInfo.headers.forEach(function(e,a){l.push(a),n.push(e)}),a.taskInfo.params.forEach(function(e,a){r.push(a),u.push(e)}),t.setState({taskId:e,taskInfo:a.taskInfo,headerKeys:l,paramkeys:r,headers:n,params:u},function(){var e=t.props.dispatch;e({type:"task/queryProjectCaseList",payload:{id:a.taskInfo.project}})})})},t.queryProjectList=function(e){var a=t.props.dispatch;a({type:"system/queryProjectList",payload:{status:"1"}}).then(function(){var a=t.props.system;t.setState({projectList:a.projectList},function(){t.queryTaskInfo(e)})})},t.handleBack=function(){var e=t.props.dispatch;e({type:"task/goListPage"})},t.handleSubmit=function(e){var a=t.props,l=a.dispatch,r=a.form;e.preventDefault(),r.validateFieldsAndScroll(function(e,a){if(!e){var r=(0,w.default)(a.runTime).format("HH:mm");a.runTime=r,l({type:"task/queryUpdateTaskInfo",payload:{info:a,id:t.state.taskId}})}})},t.addHeader=function(){var e=t.props.form,a=e.getFieldValue("headerkeys"),l=a.concat(++P);e.setFieldsValue({headerkeys:l})},t.addParam=function(){var e=t.props.form,a=e.getFieldValue("paramkeys"),l=a.concat(++S);e.setFieldsValue({paramkeys:l})},t.removeHeader=function(e){var a=t.props.form,l=a.getFieldValue("headerkeys");a.setFieldsValue({headerkeys:l.filter(function(a){return a!==e})})},t.removeParam=function(e){var a=t.props.form,l=a.getFieldValue("paramkeys");a.setFieldsValue({paramkeys:l.filter(function(a){return a!==e})})},t}return(0,y.default)(a,e),(0,c.default)(a,[{key:"componentWillMount",value:function(){var e=this.props.location.search;if(-1!==e.indexOf("?")){var a=e.substr(1);this.queryProjectList(a)}}},{key:"render",value:function(){var e=this,a=this.props,t=a.form,l=t.getFieldDecorator,r=t.getFieldValue,o=a.task,c=this.state,m=c.projectList,p=c.taskInfo,y=c.headerKeys,E=c.headers,g=c.params,I=c.paramkeys,b={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},j={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};l("headerkeys",{initialValue:y});var P=r("headerkeys"),S=P.map(function(a,t){if(E[a])return V.default.createElement(T.default.Item,(0,i.default)({},0===t?b:j,{label:0===t?"\u8bf7\u6c42\u5934\u53c2\u6570":"",required:!1,key:a}),l("headers[".concat(a,"]"),{validateTrigger:["onChange","onBlur"],initialValue:E[a]})(V.default.createElement(C.default,null)),P.length>0?V.default.createElement(f.default,{className:x.default.dynamic_delete_button,type:"minus-circle-o",onClick:function(){return e.removeHeader(a)}}):null)});l("paramkeys",{initialValue:I});var B=r("paramkeys"),K=B.map(function(a,t){if(g[a])return V.default.createElement(T.default.Item,(0,i.default)({},0===t?b:j,{label:0===t?"\u5168\u5c40\u53c2\u6570":"",required:!1,key:a}),l("params[".concat(a,"]"),{validateTrigger:["onChange","onBlur"],initialValue:g[a]})(V.default.createElement(C.default,null)),I.length>0?V.default.createElement(f.default,{className:x.default.dynamic_delete_button,type:"minus-circle-o",onClick:function(){return e.removeParam(a)}}):null)});return V.default.createElement(q.default,null,V.default.createElement(n.default,{bordered:!1},V.default.createElement(T.default,{onSubmit:this.handleSubmit,hideRequiredMark:!0,style:{marginTop:8}},V.default.createElement(F,(0,i.default)({},b,{label:"\u9879\u76ee\u540d\u79f0"}),l("project",{rules:[{required:!0,message:"\u9879\u76ee\u540d\u79f0\u4e0d\u53ef\u4e3a\u7a7a"}],initialValue:p.project})(V.default.createElement(k.default,{placeholder:"\u8bf7\u5148\u9009\u62e9\u9879\u76ee",style:{width:220}},m&&m.map(function(e){return V.default.createElement(L,{value:e.id,key:e.id,title:e.name},e.name)})))),V.default.createElement(F,(0,i.default)({},b,{label:"\u4efb\u52a1\u540d\u79f0"}),l("name",{rules:[{required:!0,message:"\u4efb\u52a1\u540d\u79f0\u4e0d\u53ef\u4e3a\u7a7a"}],initialValue:p.testname})(V.default.createElement(v.default,{placeholder:"\u8bf7\u8f93\u5165\u4efb\u52a1\u540d\u79f0"}))),V.default.createElement(F,(0,i.default)({},b,{label:"\u4efb\u52a1\u63cf\u8ff0"}),l("taskDesc",{rules:[{required:!1}],initialValue:p.taskDesc})(V.default.createElement(H,{style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u4efb\u52a1\u63cf\u8ff0",rows:4}))),V.default.createElement(F,(0,i.default)({},b,{label:"\u4efb\u52a1\u7c7b\u578b"}),V.default.createElement("div",null,l("taskType",{rules:[{required:!0,message:"\u4efb\u52a1\u7c7b\u578b\u4e0d\u53ef\u4e3a\u7a7a"}],initialValue:p.taskType&&p.taskType.toString()})(V.default.createElement(h.default.Group,null,V.default.createElement(h.default,{value:"1"},"\u5373\u65f6\u4efb\u52a1"),V.default.createElement(h.default,{value:"2"},"\u5b9a\u65f6\u4efb\u52a1"))),V.default.createElement(F,{style:{marginBottom:0}},l("runTime",{initialValue:(0,w.default)(p.runTime,"HH:mm")})(V.default.createElement(d.default,{format:"HH:mm",style:{margin:"8px 0",display:"2"===r("taskType")?"block":"none"}}))))),V.default.createElement(F,(0,i.default)({},b,{label:"\u6d4b\u8bd5\u57df\u540d"}),l("domain",{rules:[{required:!0,message:"\u6d4b\u8bd5\u57df\u540d\u4e0d\u53ef\u4e3a\u7a7a"}],initialValue:p.domain})(V.default.createElement(v.default,{placeholder:"\u8bf7\u8f93\u5165\u6d4b\u8bd5\u57df\u540d .eg: app.xxx.com"}))),V.default.createElement(F,(0,i.default)({},b,{label:"\u4ee3\u7406\u8bbe\u7f6e"}),l("proxy",{initialValue:p.proxy})(V.default.createElement(v.default,{placeholder:"\u683c\u5f0f: user:password@server:port"}))),V.default.createElement(T.default.Item,{className:x.default.listForm},S,V.default.createElement(T.default.Item,j,V.default.createElement(s.default,{type:"dashed",onClick:this.addHeader,style:{width:"100%"}},V.default.createElement(f.default,{type:"plus"})," \u8bbe\u7f6e\u8bf7\u6c42\u5934\u53c2\u6570"))),V.default.createElement(T.default.Item,{className:x.default.listForm},K,V.default.createElement(T.default.Item,j,V.default.createElement(s.default,{type:"dashed",onClick:this.addParam,style:{width:"100%"}},V.default.createElement(f.default,{type:"plus"})," \u6dfb\u52a0\u5168\u5c40\u9ed8\u8ba4\u53c2\u6570"))),V.default.createElement(F,(0,i.default)({},b,{label:"\u7528\u4f8b\u8bbe\u7f6e"}),l("case",{rules:[{required:!0,message:"\u4efb\u52a1\u7528\u4f8b\u4e0d\u53ef\u4e3a\u7a7a"}],initialValue:p.caseIds})(V.default.createElement(u.default,{dataSource:o.caseData,titles:["\u9879\u76ee\u7528\u4f8b","\u4efb\u52a1\u7528\u4f8b"],targetKeys:r("case"),render:function(e){return e.name}}))),V.default.createElement(F,(0,i.default)({},j,{style:{marginTop:32}}),V.default.createElement(s.default,{onClick:function(){return e.handleBack()}},"\u53d6\u6d88"),V.default.createElement(s.default,{type:"primary",htmlType:"submit",style:{marginLeft:8}},"\u4fdd\u5b58")))))}}]),a}(V.PureComponent),I=b))||I)||I),K=B;a.default=K}}]);
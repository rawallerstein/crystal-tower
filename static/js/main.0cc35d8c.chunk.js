(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){},38:function(e,t,a){e.exports=a(70)},45:function(e,t,a){},46:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(8),c=a.n(n),l=(a(44),a(25),a(45),a(9)),o=a(10),i=a(13),u=a(11),h=a(12),m=a(74),d=a(73),p=(a(46),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).hideModal=function(){a.setState({show:!1})},a.showModal=function(){a.setState({show:!0})},a.addCharacterId=function(e){if(isNaN(e.target[0].value))return null;localStorage.setItem("characterId",e.target[0].value)},a.state={id:localStorage.getItem("characterId"),show:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){null===localStorage.getItem("characterId")&&this.setState({show:!0})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{variant:"primary",onClick:this.showModal},"Select Character"),s.a.createElement(d.a,{show:this.state.show,onHide:this.hideModal},s.a.createElement(d.a.Header,{closeButton:!0},s.a.createElement(d.a.Title,null,"Enter Character ID")),s.a.createElement("form",{onSubmit:this.addCharacterId},s.a.createElement(d.a.Body,null,s.a.createElement("div",{className:"form-group"},"It may take a few seconds to update the page",s.a.createElement("br",null),"Entry must be valid lodestone ID",s.a.createElement("input",{type:"text",className:"form-control"}))),s.a.createElement(d.a.Footer,null,s.a.createElement(m.a,{variant:"secondary",onClick:this.hideModal},"Close"),s.a.createElement("input",{className:"btn btn-success",type:"submit",value:"Submit"})))))}}]),t}(s.a.Component)),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={classes:a.props.classes},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("ul",{className:"list-group list-group-flush"},this.state.classes.map(function(e){return s.a.createElement("li",{className:"list-group-item"},"Level ",e.Level," ",e.Name,s.a.createElement("br",null),e.ExpLevel,"/",e.ExpLevelMax," experience")}))}}]),t}(s.a.Component),b=(a(68),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={id:localStorage.getItem("characterId"),results:a.props.results},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.state.results&&!0!==this.state.results.Error?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{class:"card mb-3"},s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},this.state.results.Character.Name),s.a.createElement("h6",{class:"card-subtitle text-muted"},this.state.results.FreeCompany.Name)),s.a.createElement("img",{height:"96px",width:"96x",src:this.state.results.Character.Avatar,alt:"Character Avatar"}),s.a.createElement("div",{class:"card-body"},s.a.createElement("p",{class:"card-text"},"Level ",this.state.results.Character.ActiveClassJob.Level," ",this.state.results.Character.ActiveClassJob.Name,s.a.createElement("br",null)," ",this.state.results.Character.ActiveClassJob.ExpLevel,"/",this.state.results.Character.ActiveClassJob.ExpLevelMax," experience")),s.a.createElement(v,{classes:this.state.results.Character.ClassJobs}))):null}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.results===t.results?null:{results:e.results}}}]),t}(s.a.Component)),E=(a(69),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={results:JSON.parse(localStorage.getItem("results")),characterId:JSON.parse(localStorage.getItem("characterId"))},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("characterId")||localStorage.setItem("characterId",null),null===this.state.results||!0===this.state.results.Error||this.state.characterId!==this.state.results.Character.ID?fetch("https://xivapi.com/character/".concat(localStorage.getItem("characterId"),"?data=AC,FR,FC,FCM,PVP")).then(function(e){return e.json()}).then(function(t){localStorage.setItem("results",JSON.stringify(t)),e.setState({isLoaded:!0,results:JSON.parse(localStorage.getItem("results"))})},function(t){e.setState({isLoaded:!0,error:t})}):(this.state.characterID,this.state.results.Character.ID)}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(b,{results:this.state.results}),s.a.createElement(p,null))}}]),t}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.0cc35d8c.chunk.js.map
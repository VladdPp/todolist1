(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=n(1),s=n(2),l=n(4),u=n(3),m=(n(12),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Header"}," TODO List ")}}]),n}(r.a.Component)),d=m,h=(n(13),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).addItem=function(e){"Enter"===e.key&&fetch("http://localhost:8081/item/create/".concat(e.target.value)).then(alert("Bug: Reload The Page To View Changes"))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"AddBar"},r.a.createElement("input",{className:"AddBar-Text",type:"text",placeholder:"Enter TODO Item",onKeyDown:this.addItem}))}}]),n}(r.a.Component)),f=h,v=n(7),p=(n(14),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={items:[]},a}return Object(s.a)(n,[{key:"removeItem",value:function(e){fetch("http://localhost:8081/item/delete/".concat(e)).then(this.setState({items:this.state.items.filter((function(t){return t.id!==e}))}))}},{key:"toggleDone",value:function(e){var t=Object(v.a)(this.state.items),n=t.find((function(t){return t.id===e}));n.done=!n.done,fetch("http://localhost:8081/item/update/".concat(e,"/").concat(n.done)).then(this.setState({items:t}))}},{key:"isDone",value:function(e){return e?"Done":"Not Done"}},{key:"createItem",value:function(e){var t=this;return r.a.createElement("div",{className:"ListItem",key:e.id,id:e.id},r.a.createElement("div",{className:"Title"},r.a.createElement("div",{className:"RemoveItem",onClick:function(){return t.removeItem(e.id)}},"X"),e.item),r.a.createElement("div",{className:"Status",onClick:function(){return t.toggleDone(e.id)}},this.isDone(e.done)))}},{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8081/items").then((function(e){return e.json()})).then((function(t){return e.setState({items:t.items})}))}},{key:"render",value:function(){var e=this,t=this.state.items;return r.a.createElement("div",{className:"TodoList"},r.a.createElement("div",{className:"List"},t.map((function(t){return e.createItem(t)}))))}}]),n}(r.a.Component)),O=(n(15),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(f,null),r.a.createElement(p,null))}}]),n}(r.a.Component)),b=O;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[16,1,2]]]);
//# sourceMappingURL=main.9c177f06.chunk.js.map
(this["webpackJsonprpe-calc"]=this["webpackJsonprpe-calc"]||[]).push([[0],{19:function(e,t,n){e.exports=n(29)},24:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(15),c=n.n(r);n(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(2),u=n(7),s=n(4),i=n(3),p=n(16),d=n(32),m=d.c(d.b(d.a([[100,95.5,92.2,89.2,86.3,83.7,81.1,78.6,76.2,73.9],[97.8,93.9,90.7,87.8,85,82.4,79.9,77.4,75.1,72.3],[95.5,92.2,89.2,86.3,83.7,81.1,78.6,76.2,73.9,70.7],[93.9,90.7,87.8,85,82.4,79.9,77.4,75.1,72.3,69.4],[92.2,89.2,86.3,83.7,81.1,78.6,76.2,73.9,70.7,68],[90.7,87.8,85,82.4,79.9,77.4,75.1,72.3,69.4,66.7],[89.2,86.3,83.7,81.1,78.6,76.2,73.9,70.7,68,65.3],[87.8,85,82.4,79.9,77.4,75.1,72.3,69.4,66.7,64],[86.3,83.7,81.1,78.6,76.2,73.9,70.7,68,65.3,62.6],[85,82.4,79.9,77.4,75.1,72.3,69.4,66.7,64,61.3],[83.7,81.1,78.6,76.2,73.9,70.7,68,65.3,62.6,59.9]]),.01),2),h=[10,9.5,9,8.5,8,7.5,7,6.5,6,5.5,5],f=[1,2,3,4,5,6,7,8,9,10];function b(e,t,n){var a=function(e,t){return m.get([t,e])}(e,t);return Math.round(n/a)}function v(e,t){return e.map((function(e){return function(e,t){return t*Math.round(e/t)}(e,t)}))}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return v(d.b(m,e),t)}function g(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=b(e,t,n);return y(o,a)}n(26);var E=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("td",{className:"number-of-reps",style:{textAlign:"center"},colSpan:f.length+1},o.a.createElement("span",{className:"left-help-button"}),o.a.createElement("span",{onClick:this.props.onHelp,className:"help-button"}),o.a.createElement("strong",{className:"number-of-reps-span"},"Number of Reps"),o.a.createElement("span",{className:"round-to-the-nearest",style:{float:"right"}},"Round to the nearest"," ",o.a.createElement("input",{type:"number",onChange:this.props.onRoundChange,defaultValue:this.props.roundTo})))),o.a.createElement("tr",null,o.a.createElement("th",{className:"td-content",key:"RPE"},"RPE"),f.map((function(e){return o.a.createElement("th",{className:"td-content",key:e},e,"x")}))))}}]),n}(o.a.PureComponent),w=["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"];function k(e,t){var n=Math.round((e+t)/2.2);return{backgroundColor:w[n],color:n<3||n>8?"white":"black"}}var x=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).node=null,e.onMouseDown=function(){e.node&&(e.node.placeholder=e.node.value,e.node.value="")},e.onBlur=function(){e.node&&!e.node.value&&(e.node.value=String(e.props.n))},e}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(){this.node&&(this.node.value=String(this.props.n))}},{key:"render",value:function(){var e=this,t=this.props,n=t.x,a=t.y,r=t.n,c=t.onKeyDown;return o.a.createElement("input",{type:"number","data-x":n,"data-y":a,onMouseDown:this.onMouseDown,onKeyDown:c,onBlur:this.onBlur,className:"weight-input",style:Object(p.a)({fontWeight:700},k(n,a)),defaultValue:r,ref:function(t){return e.node=t}})}}]),n}(o.a.PureComponent),N=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={rpeMatrix:m,roundTo:5},e.onKeyDown=function(t){if("Enter"===t.key){t.preventDefault();var n=t.target,a=g(Number(n.dataset.x),Number(n.dataset.y),Number(n.value),e.state.roundTo);e.setState({rpeMatrix:a})}},e.onRoundChange=function(t){var n=t.target,a=Number(n.value);e.setState({roundTo:a})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state.rpeMatrix.toArray();return o.a.createElement("table",{className:"rpe-calc-table"},o.a.createElement(E,{onHelp:this.props.onHelp,roundTo:this.state.roundTo,onRoundChange:this.onRoundChange}),o.a.createElement("tbody",null,t.map((function(t,n){return o.a.createElement("tr",{className:"rpe-calc-row",key:"row-".concat(n)},o.a.createElement("td",{className:"rpe-calc-cell",style:{textAlign:"center"},key:h[n]},o.a.createElement("span",{className:"td-content rpe-value-cell"},h[n])),t.map((function(t,a){return o.a.createElement("td",{className:"rpe-calc-cell",key:"".concat(a,",").concat(n)},o.a.createElement(x,{x:a,y:n,n:t,onKeyDown:e.onKeyDown}))})))}))),o.a.createElement("tfoot",null,o.a.createElement("tr",null,o.a.createElement("td",{className:"reactive-link",colSpan:f.length+1},o.a.createElement("span",null,"Percentages and methods based off ",o.a.createElement("a",{href:"https://www.reactivetrainingsystems.com/Home/Main"},"Reactive Training Systems"))))))}}]),n}(o.a.PureComponent),O=n(18),j=(n(27),n(28),new O.a.Tour({defaultStepOptions:{scrollTo:!0,cancelIcon:{enabled:!1}},useModalOverlay:!0,exitOnEsc:!0})),R={text:"Previous",action:j.back,classes:"previous-tour-btn"},T={text:"Cancel",action:j.cancel,classes:"cancel-tour-btn"},C={text:"Next",action:j.next,classes:"next-tour-btn"},M=[R,T,C],P=[{id:"intro",text:"Welcome to RPE Matrix Calculator! This allows you to calculate multiple Rep/RPE Combinations at once",attachTo:{element:".number-of-reps > .number-of-reps-span",on:"bottom"},buttons:[T,C]},{id:"weight-input",text:"Input the weight lifted at the given RPE/Rep combination (eg. 295 for 3 reps at RPE 9.5). Then press Enter/Go",attachTo:{element:"#root > table > tbody > tr:nth-child(2) > td:nth-child(7) > input",on:"right"},buttons:M},{id:"rounding-to",text:"Round to the nearest 5, 2.5, or 1 increment using this input",attachTo:{element:".round-to-the-nearest",on:"left"},buttons:M},{id:"redo-tour",text:"If you'd like to see this tour again, just click this button",attachTo:{element:".left-help-button",on:"bottom"},buttons:[R,T]}];j.addSteps(P);var D=function(){return j.start()},S=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){localStorage.getItem("rpe-tour-completed")||(j.start(),localStorage.setItem("rpe-tour-completed","true"))}},{key:"render",value:function(){return o.a.createElement(N,{onHelp:D})}}]),n}(o.a.PureComponent);c.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.e4dc3679.chunk.js.map
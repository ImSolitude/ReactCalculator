(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(3),react_awesome_button__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(19),react_awesome_button__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_awesome_button__WEBPACK_IMPORTED_MODULE_8__),react_awesome_button_dist_themes_theme_indigo_css__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(35),react_awesome_button_dist_themes_theme_indigo_css__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react_awesome_button_dist_themes_theme_indigo_css__WEBPACK_IMPORTED_MODULE_9__),_Credit__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(20),_App_scss__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(39),_App_scss__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_11__),util__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(15),util__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_12__);function _templateObject5(){var _=Object(_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n  animation: "," 1s cubic-bezier(1, 0, 0, 1) infinite;\n  //Basic styling\n  display: inline-block;\n  position: absolute;\n  right: 0;\n  width: 1px;\n  height: 19px;\n  margin-left: 10px;\n  box-shadow: 0 0 10px rgba(white, 0.3);\n  background: white;\n  transition: all 0.3s ease;\n"]);return _templateObject5=function(){return _},_}function _templateObject4(){var _=Object(_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n  from { opacity: 1.0; }\n  to { opacity: 0.0; }\n"]);return _templateObject4=function(){return _},_}function _templateObject3(){var _=Object(_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n  width: 100%;\n  text-align: right;\n  color: white;\n  font-size: 3rem;\n  letter-spacing: 2px;\n  font-weight: 700;\n"]);return _templateObject3=function(){return _},_}function _templateObject2(){var _=Object(_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n  width: 100%;\n  position: relative;\n  text-align: right;\n  height: 19px;\n  /* color: rgba(255, 255, 255, 0.4); */\n  color: rgba(232, 234, 246, 0.5);\n  font-size: 1rem;\n  letter-spacing: 5px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n"]);return _templateObject2=function(){return _},_}function _templateObject(){var _=Object(_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.a)(["\n  --button-default-border-radius: 6px;\n  --button-horizontal-padding: 20px;\n  /* --button-anchor-color-light: #ffffff;\n  --button-anchor-color: #293b83;\n  --button-anchor-color-dark: #ee3253;\n  --button-secondary-color-dark: #edce31;\n  --button-primary-color-dark: #edce31; */\n  --button-raise-level: 3px;\n  --button-hover-pressure: 2;\n  --transform-speed: 0.185s;\n  --button-primary-color-light: white;\n  flex-basis: ",";\n  flex-basis: ",";\n  font-size: ",";\n  @media screen and (max-width: 365px) {\n    font-size: 2rem;\n  }\n"]);return _templateObject=function(){return _},_}var Button=Object(styled_components__WEBPACK_IMPORTED_MODULE_7__.a)(react_awesome_button__WEBPACK_IMPORTED_MODULE_8__.AwesomeButton)(_templateObject(),function(_){return _.twocell?"50%!important":""},function(_){return _.threecell?"75%":"23%"},function(_){return _.threecell?"2rem":"3rem"}),LCD=styled_components__WEBPACK_IMPORTED_MODULE_7__.a.div(_templateObject2()),Output=styled_components__WEBPACK_IMPORTED_MODULE_7__.a.div(_templateObject3()),blinkAnimation=Object(styled_components__WEBPACK_IMPORTED_MODULE_7__.b)(_templateObject4()),Blinker=styled_components__WEBPACK_IMPORTED_MODULE_7__.a.span(_templateObject5(),blinkAnimation),Screen=function(_){function e(){return Object(_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,e),Object(_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(e).apply(this,arguments))}return Object(_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(e,_),Object(_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(e,[{key:"render",value:function(_){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"row screen"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(LCD,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",null,this.props.lastFormula),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Blinker,null)),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Output,null,this.props.results))}}]),e}(react__WEBPACK_IMPORTED_MODULE_6__.Component),App=function(_Component2){function App(){var _getPrototypeOf2,_this;Object(_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App)).call.apply(_getPrototypeOf2,[this].concat(args))),_this.state={formula:[],results:"",lastFormula:[],areWePuttingDot:!1,dotIterate:0,wasOperatorLast:!1},_this.handleFormula=function(_,e){var t=_this.state.formula,a=t[t.length-1],r=_this.state.wasOperatorLast,n=Object(util__WEBPACK_IMPORTED_MODULE_12__.isNumber)(e),l=Object(util__WEBPACK_IMPORTED_MODULE_12__.isNumber)(a)&&!r,o=n&&l,s=!n&&!l,u=n&&!l||!n&&l;if(o&&_this.state.areWePuttingDot&&!r){var i=_this.state.dotIterate+1,m=_this.state.lastFormula,c=a+e/Math.pow(10,i);return console.log(c),t.pop(),t.push(c),m.pop(),m.push(c),void _this.setState({formula:t,lastFormula:m,dotIterate:i})}if(n?_this.setState({wasOperatorLast:!1}):_this.setState({wasOperatorLast:!0}),o){var E="".concat(a).concat(e);t.pop(),t.push(parseInt(E));var p=_this.state.lastFormula;return p.push(e),void _this.setState({formula:t,lastFormula:p})}if(s)_this.setState({areWePuttingDot:!1});else if(u){var O=_this.state.formula,d=_this.state.lastFormula;return O.push(e),d.push(e),void _this.setState({formula:O,lastFormula:d,areWePuttingDot:!1,dotIterate:0})}},_this.handleClear=function(){_this.setState({formula:[],results:0,lastFormula:[]})},_this.handleCalculation=function(){var formula=_this.state.formula,isLastInputOperator=isNaN(formula[formula.length-1]);if(!isLastInputOperator){var results=eval(_this.state.formula.join(" "));results=parseFloat(results.toFixed(2)),_this.setState({results:results,formula:[results],lastFormula:formula,areWePuttingDot:!1})}},_this.handleDot=function(){if(_this.state.wasOperatorLast)console.log("wasOperatorLast!");else{var _=_this.state.lastFormula,e=_[_.length-1];e=e.toFixed(2),console.log(Number(e)),_.pop(),_.push(e),_this.setState({areWePuttingDot:!0,lastFormula:_})}},_this}return Object(_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component2),Object(_home_muhammadj_Desktop_GitHub_ReactCalculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(_){var e=this;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"bar"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Screen,{lastFormula:this.state.lastFormula,results:this.state.results}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{type:"link",size:"small",threecell:!0,id:"clear",onPress:this.handleClear},"AC"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{type:"secondary",size:"small",onPress:function(_){return e.handleFormula(_,"/")}},"\xf7")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{type:"primary",size:"small",onPress:function(_){return e.handleFormula(_,7)}},"7"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{type:"primary",size:"small",onPress:function(_){return e.handleFormula(_,8)}},"8"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{type:"primary",size:"small",onPress:function(_){return e.handleFormula(_,9)}},"9"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{type:"secondary",size:"small",onPress:function(_){return e.handleFormula(_,"*")}},"\xd7")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{type:"primary",size:"small",onPress:function(_){return e.handleFormula(_,4)}},"4"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{type:"primary",size:"small",onPress:function(_){return e.handleFormula(_,5)}},"5"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{type:"primary",size:"small",onPress:function(_){return e.handleFormula(_,6)}},"6"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{type:"secondary",size:"small",onPress:function(_){return e.handleFormula(_,"-")}},"-")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{type:"primary",size:"small",onPress:function(_){return e.handleFormula(_,1)}},"1"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{type:"primary",size:"small",onPress:function(_){return e.handleFormula(_,2)}},"2"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{type:"primary",size:"small",onPress:function(_){return e.handleFormula(_,3)}},"3"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{type:"secondary",size:"small",className:"fix",onPress:function(_){return e.handleFormula(_,"+")}},"+")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{type:"primary",size:"small",onPress:function(_){return e.handleFormula(_,0)}},"0"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{type:"primary",size:"small",className:"fix",onPress:this.handleDot},"."),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button,{type:"secondary",size:"small",twocell:!0,className:"fix",onPress:this.handleCalculation},"="))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Credit__WEBPACK_IMPORTED_MODULE_10__.a,null))}}]),App}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=App},20:function(_,e,t){"use strict";var a=t(5),r=t(6),n=t(8),l=t(7),o=t(9),s=t(2),u=t(0),i=t.n(u),m=t(3),c=t(21),E=t(22);function p(){var _=Object(s.a)(['\n  position: absolute;\n  bottom: -40px;\n  left: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-family: "Karla", sans-serif;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.08rem;\n  font-size: 0.8rem;\n']);return p=function(){return _},_}function O(){var _=Object(s.a)(["\n  color: inherit;\n  text-decoration: none;\n"]);return O=function(){return _},_}var d=m.a.a(O()),h=m.a.h3(p()),D=function(_){function e(){return Object(a.a)(this,e),Object(n.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(o.a)(e,_),Object(r.a)(e,[{key:"render",value:function(){return i.a.createElement(h,null,"Made with"," ",i.a.createElement(c.a,{icon:E.a,pulse:!0,style:{color:"#f44336",opacity:"1"}})," ","by"," ",i.a.createElement(d,{href:"http://imsolitude.github.io",style:{color:"rgba(255, 255, 255, 1)"}},"muhammadj"))}}]),e}(u.Component);e.a=D},27:function(_,e,t){_.exports=t(42)},32:function(_,e,t){},39:function(_,e,t){},42:function(_,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),n=t(17),l=t.n(n),o=(t(32),t(18));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(_){_.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.e25e8ea8.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(46)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),l=(a(29),a(16)),o=a(2),s=a(3),u=a(5),m=a(4),h=a(13),f=a(6),p=(a(30),a(11)),b=(a(31),a(32),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("form",{className:"page__filters"},r.a.createElement("label",{htmlFor:"input-name",className:"filters__label"},"Search for your favorite character"),r.a.createElement("input",{type:"text",className:"filters__input",id:"input-name",name:"input-name",onChange:this.props.handleInputName,value:this.props.inputNameValue})))}}]),t}(n.Component)),d=(a(33),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.characterInfo;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"card-image__container"},r.a.createElement("img",{className:"card__image",src:e.image,alt:e.name})),r.a.createElement("h3",{className:"card__title"},e.name),r.a.createElement("p",{className:"card__info"},e.house))}}]),t}(n.Component)),_=a(10),E=(a(34),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.fetchData,a=e.inputNameValue;return r.a.createElement(n.Fragment,null,r.a.createElement("ul",{className:"main__list"},t.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())}).map(function(e){return r.a.createElement("li",{key:e.id,className:"card__container"},r.a.createElement(_.b,{to:"/character/".concat(e.id),className:"card__link"},r.a.createElement(d,{characterInfo:e})))})))}}]),t}(n.Component)),N=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"page__main"},r.a.createElement("nav",null,r.a.createElement(b,{handleInputName:this.props.handleInputName,inputNameValue:this.props.inputNameValue})),r.a.createElement("section",null,r.a.createElement(E,{fetchData:this.props.fetchData,inputNameValue:this.props.inputNameValue})))}}]),t}(r.a.Component),j=(a(43),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.character;return console.log(e),r.a.createElement("div",{className:"main__character-detail"},r.a.createElement("div",{className:"card--detail"},r.a.createElement("div",{className:"image__container"},r.a.createElement("img",{src:e.image,alt:e.name,className:"character-detail__image"})),r.a.createElement("div",{className:"character-detail__info"},r.a.createElement("h2",{className:"info__title"},e.name),r.a.createElement("p",{className:"info info__house"},"House: ",e.house),r.a.createElement("p",{className:"info info__birth"},"Year of birth: ",e.yearOfBirth),r.a.createElement("p",{className:"info info__state"},"State: "),r.a.createElement("i",{className:"info info__icon fas ".concat(e.alive?"fa-heart":"fa-skull")}))),r.a.createElement(_.b,{className:"character-detail__back",to:"/"},"Back"))}}]),t}(r.a.Component)),O=(a(44),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"page__footer"},r.a.createElement("small",null,"Harry Potter's Directory - made by ",r.a.createElement("a",{className:"footer__link",rel:"noopener noreferrer",href:"mailto:elvirafuente@gmail.com",target:"_blank"},"Elvira Fuente")," for ",r.a.createElement("a",{className:"footer__link",rel:"noopener noreferrer",href:"https:www.adalab.es",target:"_blank"},"Adalab")))}}]),t}(r.a.Component)),v=(a(45),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"page__header"},r.a.createElement("img",{alt:"harry potter's logo",className:"header__image",src:"https://pngriver.com/wp-content/uploads/2018/03/Download-Harry-Potter-Logo-PNG-Photos-265.png"}),r.a.createElement("h1",{className:"header__title"},"Harry Potter's characters Directory"))}}]),t}(r.a.Component)),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={fetchData:[],filters:{byName:""},isFetching:!0},a.handleInputName=a.handleInputName.bind(Object(h.a)(a)),a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchService()}},{key:"fetchService",value:function(){var e=this;return fetch("http://hp-api.herokuapp.com/api/characters").then(function(e){return e.json()}).then(function(t){var a=t.map(function(e,t){return Object(l.a)({},e,{id:t+1})});e.setState({fetchData:a,isFetching:!1})})}},{key:"handleInputName",value:function(e){var t=e.target.value;this.setState(function(e){return{filters:Object(l.a)({},e.filters,{byName:t})}})}},{key:"getCharacter",value:function(e){return this.state.fetchData.find(function(t){return t.id===parseInt(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement(v,null),this.state.isFetching?r.a.createElement("p",null,"Loading..."):r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(N,{fetchData:e.state.fetchData,handleInputName:e.handleInputName,inputNameValue:e.state.filters.byName})}}),r.a.createElement(p.a,{path:"/character/:id",render:function(t){var a=t.match.params.id;return r.a.createElement(j,{match:a,character:e.getCharacter(a)})}})),r.a.createElement(O,null))}}]),t}(n.Component);i.a.render(r.a.createElement(_.a,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.b6e8c1f3.chunk.js.map
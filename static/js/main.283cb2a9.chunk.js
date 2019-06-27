(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(82)},48:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(17),r=a.n(l),c=a(4),s=a(2),o=a(6),m=a(5),u=a(7),d=(a(48),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"header"},i.a.createElement("div",{className:"top"},i.a.createElement("div",{id:"logo"},i.a.createElement("span",{className:"image avatar48"},i.a.createElement("img",{src:"images/avatar.jpg",alt:""})),i.a.createElement("h1",{id:"title"},"Tram Nguyen"),i.a.createElement("p",null,"A Junior Developer")),i.a.createElement("nav",{id:"nav"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"#top",id:"top-link"},i.a.createElement("span",{className:"icon solid fa-home"},"Intro"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#portfolio",id:"portfolio-link"},i.a.createElement("span",{className:"icon solid fa-th"},"Portfolio"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#about",id:"about-link"},i.a.createElement("span",{className:"icon solid fa-user"},"About Me"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#contact",id:"contact-link"},i.a.createElement("span",{className:"icon solid fa-envelope"},"Contact")))))),i.a.createElement("div",{className:"bottom"},i.a.createElement("ul",{className:"icons"},i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon brands fa-twitter"},i.a.createElement("span",{className:"label"},"Twitter"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon brands fa-facebook-f"},i.a.createElement("span",{className:"label"},"Facebook"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon brands fa-github"},i.a.createElement("span",{className:"label"},"Github"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon brands fa-dribbble"},i.a.createElement("span",{className:"label"},"Dribbble"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon solid fa-envelope"},i.a.createElement("span",{className:"label"},"Email"))))))}}]),t}(n.Component)),h=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{id:"top",className:"one dark cover"},i.a.createElement("div",{className:"container"},i.a.createElement("header",null,i.a.createElement("h2",{className:"alt"},"Hi! How are ",i.a.createElement("strong",null,"You")," ?",i.a.createElement("br",null),"The website is designed with  ",i.a.createElement("a",{href:"http://reactjs.org"},"React")," and HTML, CSS3 ."),i.a.createElement("p",null," A junior developer with HTML, CSS, SASS, Nodejs, Javascript, Typescript and PHP skills")),i.a.createElement("footer",null,i.a.createElement("a",{href:"#portfolio",className:"button scrolly"},"More"))))}}]),t}(n.Component),p=a(16),b=a(15),E=a(8),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={total:0},a.sumPrice=a.sumPrice.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"sumPrice",value:function(e){this.setState({total:this.state.total+e})}}]),Object(s.a)(t,[{key:"render",value:function(){var e=this;console.log(this.props.items);var t=this.props.items.map(function(t,a){return i.a.createElement(f,{name:t.name,price:t.price,key:a,sumPrice:e.sumPrice,active:t.active})});return i.a.createElement("div",null,i.a.createElement("h4",null,"You can buy fruits: "),i.a.createElement("div",{id:"fruits"},t,i.a.createElement("p",{id:"total"}," Total ",i.a.createElement("b",null,this.state.total))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={active:!1},a.clicker=a.clicker.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"clicker",value:function(){var e=!this.state.active;this.setState({active:e}),this.props.sumPrice(e?this.props.price:-this.props.price)}}]),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",{className:this.state.active?"active":"",onClick:this.clicker},this.props.name," ",i.a.createElement("b",null,this.props.price)))}}]),t}(n.Component),g=v,j=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{id:"sale",className:"two"},i.a.createElement("div",{className:"container"},i.a.createElement("header",null,i.a.createElement("h2",null,"Pick And Poo")),i.a.createElement(g,{items:[{name:"Yubari King Melon",price:100},{name:"Square Watermelon",price:80},{name:"Ruby Roman Grapes",price:140},{name:"Dekopon Citrus",price:99}]})))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={total:0},a.sumPrice=a.sumPrice.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"sumPrice",value:function(e){this.setState({total:this.state.total+e})}}]),Object(s.a)(t,[{key:"render",value:function(){var e=this;console.log(this.props.items);var t=this.props.items.map(function(t,a){return i.a.createElement(O,{name:t.name,price:t.price,key:a,sumPrice:e.sumPrice,active:t.active})});return i.a.createElement("div",null,i.a.createElement("h4",null,"You can buy cosmetics: "),i.a.createElement("div",{id:"cosmetics"},t,i.a.createElement("p",{id:"total"}," Total ",i.a.createElement("b",null,this.state.total))))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={active:!1},a.clicker=a.clicker.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"clicker",value:function(){var e=!this.state.active;this.setState({active:e}),this.props.sumPrice(e?this.props.price:-this.props.price)}}]),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",{className:this.state.active?"active":"",onClick:this.clicker},this.props.name," ",i.a.createElement("b",null,this.props.price)))}}]),t}(n.Component),w=y,k=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{id:"sale",className:"two"},i.a.createElement("div",{className:"container"},i.a.createElement("header",null,i.a.createElement("h2",null,"Pick And Poo")),i.a.createElement(w,{items:[{name:"InnisFree Greentea Gel",price:55.5},{name:"Apieu Cushion 50SPF",price:65.5},{name:"COSRX Acne Pimple Master",price:122.5},{name:"BANILA CO Clean It Zero ",price:139.5}]})))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={total:0},a.sumPrice=a.sumPrice.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"sumPrice",value:function(e){this.setState({total:this.state.total+e})}}]),Object(s.a)(t,[{key:"render",value:function(){var e=this;console.log(this.props.items);var t=this.props.items.map(function(t,a){return i.a.createElement(S,{name:t.name,price:t.price,key:a,sumPrice:e.sumPrice,active:t.active})});return i.a.createElement("div",null,i.a.createElement("h4",null,"You can buy smartphones: "),i.a.createElement("div",{id:"smartphone"},t,i.a.createElement("p",{id:"total"}," Total ",i.a.createElement("b",null,this.state.total))))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={active:!1},a.clicker=a.clicker.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"clicker",value:function(){var e=!this.state.active;this.setState({active:e}),this.props.sumPrice(e?this.props.price:-this.props.price)}}]),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",{className:this.state.active?"active":"",onClick:this.clicker},this.props.name," ",i.a.createElement("b",null,this.props.price)))}}]),t}(n.Component),C=N,I=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{id:"sale",className:"two"},i.a.createElement("div",{className:"container"},i.a.createElement("header",null,i.a.createElement("h2",null,"Pick And Poo")),i.a.createElement(C,{items:[{name:"Yubari King Melon",price:100},{name:"Square Watermelon",price:80},{name:"Ruby Roman Grapes",price:140},{name:"Dekopon Citrus",price:99}]})))}}]),t}(n.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(j,null)," ",i.a.createElement(I,null)," ",i.a.createElement(k,null))}}]),t}(n.Component),P=a(26),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={err:""},a.login=a.login.bind(Object(E.a)(a)),a.signup=a.signup.bind(Object(E.a)(a)),a.logout=a.logout.bind(Object(E.a)(a)),a.google=a.google.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"login",value:function(e){var t=this,a=this.refs.email.value,n=this.refs.password.value;console.log(a,n);var i=P.auth().signInWithEmailAndPassword(a,n);i.then(function(e){var a=document.getElementById("logout"),n=document.getElementById("signup");a.classList.remove("hide"),n.classList.add("hide"),t.setState({err:"You are Login"})}),i.catch(function(e){var a=e.message;console.log(a),t.setState({err:a})})}},{key:"signup",value:function(){var e=this,t=this.refs.email.value,a=this.refs.password.value;console.log(t,a);var n=P.auth().createUserWithEmailAndPassword(t,a);n.then(function(t){console.log(t.user.email);var a="Welcome "+t.user.email;P.database().ref("users/"+t.user.userId).set({email:t.user.email}),e.setState({err:a})}),n.catch(function(t){var a=t.message;console.log(a),e.setState({err:a})})}},{key:"logout",value:function(){P.auth().signOut();var e=document.getElementById("logout"),t=document.getElementById("login"),a=document.getElementById("signup"),n=document.getElementById("google");this.setState({err:""}),e.classList.add("hide"),t.classList.remove("hide"),a.classList.remove("hide"),n.classList.remove("hide")}},{key:"google",value:function(){var e=this;console.log("I am in google method");var t=new P.auth.GoogleAuthProvider,a=P.auth().signInWithPopup(t);a.then(function(t){var a=t.user;console.log(t),P.database().ref("users/"+a.uid).set({email:a.email,name:a.displayName});var n="Welcome "+a.email;e.setState({err:n});var i=document.getElementById("logout"),l=document.getElementById("login"),r=document.getElementById("signup"),c=document.getElementById("google");i.classList.remove("hide"),l.classList.add("hide"),r.classList.add("hide"),c.classList.add("hide")}),a.catch(function(e){var t=e.message;console.log(t)})}}]),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"firebaselogin"},i.a.createElement("input",{id:"email",ref:"email",type:"email",placeholder:"Enter your email"}),i.a.createElement("br",null),i.a.createElement("input",{id:"pass",ref:"password",type:"password",placeholder:"Enter your password"}),i.a.createElement("br",null),i.a.createElement("p",null,this.state.err),i.a.createElement("button",{onClick:this.login,id:"login"},"Log In"),i.a.createElement("button",{onClick:this.signup,id:"signup"},"Sign Up"),i.a.createElement("button",{onClick:this.logout,id:"logout",className:"hide"},"Log out"),i.a.createElement("br",null),i.a.createElement("button",{onClick:this.google,id:"google",className:"google"},"Sign In with Google"))}}]),t}(n.Component),L=a(26),M=a(58);L.initializeApp({apiKey:"AIzaSyApF2_Si-avJNrOHskVhVqIi9zLWKyGD6I",authDomain:"usurvey-fc7eb.firebaseapp.com",databaseURL:"https://usurvey-fc7eb.firebaseio.com",projectId:"usurvey-fc7eb",storageBucket:"usurvey-fc7eb.appspot.com",messagingSenderId:"877484439246",appId:"1:877484439246:web:64a977c1330ff0ce"});var A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={uid:M.v1(),userName:"",answers:{answer1:"",answer2:"",answer3:""},isSubmitted:!1},a.nameSubmit=a.nameSubmit.bind(Object(E.a)(a)),a.answerSelected=a.answerSelected.bind(Object(E.a)(a)),a.questionSubmit=a.questionSubmit.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"nameSubmit",value:function(){var e=this.refs.name.value;this.setState({userName:e},function(){console.log(this.state)})}},{key:"answerSelected",value:function(e){var t=this.state.answers;"answer1"===e.target.name?t.answer1=e.target.value:"answer2"===e.target.name?t.answer2=e.target.value:"answer3"===e.target.name&&(t.answer3=e.target.value),this.setState({answers:t},function(){console.log(this.state)})}},{key:"questionSubmit",value:function(){L.database().ref("uSurvey/"+this.state.uid).set({userName:this.state.userName,answers:this.state.answers}),this.setState({isSubmitted:!0})}}]),Object(s.a)(t,[{key:"render",value:function(){var e,t;return""===this.state.userName&&!1===this.state.isSubmitted?(e=i.a.createElement("div",null,i.a.createElement("h1",null,"Hey Student, please let us know your name: "),i.a.createElement("form",{onSubmit:this.nameSubmit},i.a.createElement("input",{className:"namy",type:"text",placeholder:"Enter your name",ref:"name"}))),t=""):""!==this.state.userName&&!1===this.state.isSubmitted?(e=i.a.createElement("h1",null,"Welcome to U-Survey, ",this.state.userName),t=i.a.createElement("div",null,i.a.createElement("h2",null,"Here are some questions: "),i.a.createElement("form",{onSubmit:this.questionSubmit},i.a.createElement("div",{className:"card"},i.a.createElement("label",null,"What kind of courses you like the most: "),i.a.createElement("input",{type:"radio",name:"answer1",value:"Technology",onChange:this.answerSelected}),"Technology ",i.a.createElement("br",null),i.a.createElement("input",{type:"radio",name:"answer1",value:"Design",onChange:this.answerSelected}),"Design ",i.a.createElement("br",null),i.a.createElement("input",{type:"radio",name:"answer1",value:"Marketing",onChange:this.answerSelected}),"Marketing ",i.a.createElement("br",null)),i.a.createElement("div",{className:"card"},i.a.createElement("label",null,"Your current position: "),i.a.createElement("input",{type:"radio",name:"answer2",value:"Student",onChange:this.answerSelected}),"Student ",i.a.createElement("br",null),i.a.createElement("input",{type:"radio",name:"answer2",value:"in-job",onChange:this.answerSelected}),"in-job ",i.a.createElement("br",null),i.a.createElement("input",{type:"radio",name:"answer2",value:"looking-job",onChange:this.answerSelected}),"looking-job ",i.a.createElement("br",null)),i.a.createElement("div",{className:"card"},i.a.createElement("label",null,"Is online learning helpful:  "),i.a.createElement("input",{type:"radio",name:"answer3",value:"yes",onChange:this.answerSelected}),"yes ",i.a.createElement("br",null),i.a.createElement("input",{type:"radio",name:"answer3",value:"no",onChange:this.answerSelected}),"no ",i.a.createElement("br",null),i.a.createElement("input",{type:"radio",name:"answer3",value:"maybe",onChange:this.answerSelected}),"maybe ",i.a.createElement("br",null)),i.a.createElement("input",{className:"feedback-button",type:"submit",value:"submit"})))):!0===this.state.isSubmitted&&(e=i.a.createElement("h1",null,"Thanks, ",this.state.userName)),i.a.createElement("div",{id:"uSurvey"},i.a.createElement("h1",null,"This Survey will store the data in Firebase Real time database: ")," ",i.a.createElement("br",null),e,"-----------------------------------",t)}}]),t}(n.Component),W=a(40),T=a.n(W),q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={posts:[],subr:"",isClear:!1},a.subrSumbit=a.subrSumbit.bind(Object(E.a)(a)),a.getReddit=a.getReddit.bind(Object(E.a)(a)),a.clear=a.clear.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.getReddit()}},{key:"getReddit",value:function(){var e=this;T.a.get("https://www.reddit.com/r/".concat(this.state.subr,".json")).then(function(t){var a=t.data.data.children.map(function(e){return e.data});e.setState({posts:a})})}},{key:"subrSumbit",value:function(){this.setState({isClear:!1});var e=this.refs.name.value;this.setState({subr:e},function(){console.log(this.state.subr),this.getReddit()})}},{key:"clear",value:function(){this.setState({posts:[]}),this.setState({subr:""}),this.setState({isClear:!0})}}]),Object(s.a)(t,[{key:"render",value:function(){var e;return""===this.state.subr?e=i.a.createElement("div",null,i.a.createElement("h1",null,"Let us know your favorite subreddit: "),i.a.createElement("form",{onSubmit:this.subrSumbit},i.a.createElement("input",{className:"subreddit",type:"text",placeholder:"Enter your name",ref:"name"}))):""!==this.state.userName?e=i.a.createElement("div",null,i.a.createElement("h1",null,"/r/".concat(this.state.subr)),i.a.createElement("ul",null,this.state.posts.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement("a",{href:e.url},e.title))})),i.a.createElement("button",{onClick:this.clear,id:"clear"},"Clear")):!0===this.state.isClear&&(e=i.a.createElement("div",null,i.a.createElement("h1",null,"/r/".concat(this.state.subr)),i.a.createElement("ul",null,this.state.posts.map(function(e){return i.a.createElement("li",{key:e.id},e.title)})),i.a.createElement("button",{onClick:this.clear,id:"clear"},"Clear"))),i.a.createElement("div",{id:"subreddit"},e)}}]),t}(n.Component),B=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={slideIndex:0};var n=a.props.ratio.split(":");return a.ratioWH=n[0]/n[1],a.backward=a.backward.bind(Object(E.a)(a)),a.forward=a.forward.bind(Object(E.a)(a)),a.setSlideIndex=a.setSlideIndex.bind(Object(E.a)(a)),a.getNewSlideIndex=a.getNewSlideIndex.bind(Object(E.a)(a)),a.updateDimensions=a.updateDimensions.bind(Object(E.a)(a)),a.runAutomatic=a.runAutomatic.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"getNewSlideIndex",value:function(e){var t=this.state.slideIndex,a=this.props.input.length,n=t+e;return n>=a?n=0:n<0&&(n=a-1),n}},{key:"backward",value:function(){this.setState({slideIndex:this.getNewSlideIndex(-1)})}},{key:"forward",value:function(){this.setState({slideIndex:this.getNewSlideIndex(1)})}},{key:"setSlideIndex",value:function(e){this.setState({slideIndex:e})}},{key:"updateDimensions",value:function(){this.containerElm.style.height="".concat(this.containerElm.offsetWidth/this.ratioWH,"px"),this.containerBottomElm.style.height="".concat(this.containerBottomElm.offsetWidth/this.props.input.length/this.ratioWH,"px")}},{key:"runAutomatic",value:function(){this.setState({slideIndex:this.getNewSlideIndex(1)})}},{key:"componentDidMount",value:function(){var e=this;if(this.rootElm=r.a.findDOMNode(this),this.containerElm=this.rootElm.querySelector(".container"),this.containerBottomElm=this.rootElm.querySelector(".container-bottom"),this.updateDimensions(),window.addEventListener("resize",this.updateDimensions),"automatic"===this.props.mode){var t=this.props.timeout||5e3;this.automaticInterval=setInterval(function(){return e.runAutomatic()},Number.parseInt(t))}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions),this.automaticInterval&&clearInterval(this.automaticInterval)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"lp-slideshow"},i.a.createElement("div",{className:"container"},this.props.input.map(function(t,a){return i.a.createElement("div",{key:a,className:"slide ".concat(e.state.slideIndex===a?"active":"")},i.a.createElement("div",{className:"number-text"},"".concat(a+1," / ").concat(e.props.input.length)),i.a.createElement("img",{className:"image",src:t.src,alt:t.caption}),i.a.createElement("div",{className:"caption-text"},t.caption))}),i.a.createElement("span",{className:"prev",onClick:this.backward},"\u276e"),i.a.createElement("span",{className:"next",onClick:this.forward},"\u276f")),i.a.createElement("div",{className:"container-bottom"},this.props.input.map(function(t,a){return i.a.createElement("img",{key:a,src:t.src,alt:t.caption,className:"image ".concat(e.state.slideIndex===a?"active":""),onClick:function(){return e.setSlideIndex(a)},style:{width:"".concat(1/e.props.input.length*100,"%"),height:"100%"}})})))}}]),t}(n.Component),R=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).slideshowGallery=i.a.createRef();var n=a.props.ratio.split(":");return a.ratioWH=n[0]/n[1],a.updateDimensions=a.updateDimensions.bind(Object(E.a)(a)),a.showModal=a.showModal.bind(Object(E.a)(a)),a.hideModal=a.hideModal.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"showModal",value:function(e){this.slideshowGallery.current.setSlideIndex(e),this.modalElm.style.visibility="visible"}},{key:"hideModal",value:function(){this.modalElm.style.visibility="hidden"}},{key:"updateDimensions",value:function(){var e=this.containerElm.offsetWidth/this.props.input.length/this.ratioWH;this.containerElm.style.height="".concat(e,"px")}},{key:"componentDidMount",value:function(){this.rootElm=r.a.findDOMNode(this),this.containerElm=this.rootElm.querySelector(".container"),this.modalElm=this.rootElm.querySelector(".modal"),this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"lightbox"},i.a.createElement("div",{className:"container"},this.props.input.map(function(t,a){return i.a.createElement("div",{key:a,className:"image-wrapper",style:{width:"".concat(1/e.props.input.length*100,"%"),height:"100%"}},i.a.createElement("img",{className:"image",src:t.src,alt:t.caption,onClick:function(){return e.showModal(a)}}))})),i.a.createElement("div",{className:"modal"},i.a.createElement("span",{className:"close",onClick:function(){return e.hideModal()}},"\xd7"),i.a.createElement("div",{className:"modal-content"},i.a.createElement(B,{ref:this.slideshowGallery,input:this.props.input,ratio:this.props.ratio,mode:"manual"}))))}}]),t}(n.Component),G=[{src:"https://www.creativeuncut.com/gallery-36/art/dmc5-lady-face.jpg",caption:"Lady"},{src:"https://www.creativeuncut.com/gallery-36/art/dmc5-trish-face.jpg",caption:"Trish"},{src:"https://www.creativeuncut.com/gallery-36/art/dmc5-nico-face.jpg",caption:"Nico"},{src:"https://www.creativeuncut.com/gallery-36/art/dmc5-v-face.jpg",caption:"V"},{src:"https://www.creativeuncut.com/gallery-36/art/dmc5-nero-face.jpg",caption:"Nero"},{src:"https://www.creativeuncut.com/gallery-36/art/dmc5-dante-face.jpg",caption:"Dante"}],H=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"lp-slideshow"},i.a.createElement("h1",null,"The Deveil May Cry 5 Characters Gallery"),i.a.createElement("h3",null,"The first slideshow, manually click to the next picture"),i.a.createElement(B,{input:G,ratio:"3:2",mode:"manual"}),i.a.createElement("h3",null,"The second slideshow, automatically change to the next picture"),i.a.createElement(B,{input:G,ratio:"3:2",mode:"automatic",timeout:"2000"}),i.a.createElement("h3",null,"LightBox"),i.a.createElement("p",null,"Click on each image below to show the Slideshow Gallery."),i.a.createElement(R,{input:G,ratio:"3:2"}))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={clock:0},a.ticker=a.ticker.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.ticker,1e3)}},{key:"ticker",value:function(){this.setState({clock:new Date-this.props.start})}}]),Object(s.a)(t,[{key:"render",value:function(){var e=Math.round(this.state.clock/1e3);return i.a.createElement("header",null,i.a.createElement("h3",null,"Tick Tock"),i.a.createElement("h4",null,"You are on this site since: "),i.a.createElement("span",{className:"timer"},e),i.a.createElement("br",null),i.a.createElement("span",null," seconds"))}}]),t}(n.Component);function Y(){return i.a.createElement("div",null)}var U=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement("section",{id:"portfolio",className:"two"},i.a.createElement("div",{className:"container"},i.a.createElement("header",null,i.a.createElement("h2",null,"Portfolio")),i.a.createElement("p",null,"There are some small projects. Feel relax and stay till. Try as much as you can."),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-4 col-12-mobile"},i.a.createElement("article",{className:"item"},i.a.createElement(F,{start:Date.now()})),i.a.createElement("article",{className:"item"},i.a.createElement("a",{href:"#",className:"image fit"},i.a.createElement("img",{src:"images/pic09.jpg",alt:""})),i.a.createElement("header",null,i.a.createElement("h3",null,i.a.createElement(p.b,{to:"/ProjectSale"},"Pick and Poo"))))),i.a.createElement("div",{className:"col-4 col-12-mobile"},i.a.createElement("article",{className:"item"},i.a.createElement("a",{href:"#",className:"image fit"},i.a.createElement("img",{src:"images/pic04.jpg",alt:""})),i.a.createElement("header",null,i.a.createElement("h3",null,i.a.createElement(p.b,{to:"/uSurvey"},"uSurvey")))),i.a.createElement("article",{className:"item"},i.a.createElement("a",{href:"#",className:"image fit"},i.a.createElement("img",{src:"images/pic05.jpg",alt:""})),i.a.createElement("header",null,i.a.createElement("h3",null,i.a.createElement(p.b,{to:"/FirebaseLogin"},"Firebase Login"))))),i.a.createElement("div",{className:"col-4 col-12-mobile"},i.a.createElement("article",{className:"item"},i.a.createElement("a",{href:"#",className:"image fit"},i.a.createElement("img",{src:"images/pic06.jpg",alt:""})),i.a.createElement("header",null,i.a.createElement("h3",null,i.a.createElement(p.b,{to:"/ApiCall"},"Get SubReddits")))),i.a.createElement("article",{className:"item"},i.a.createElement("a",{href:"#",className:"image fit"},i.a.createElement("img",{src:"images/pic07.jpg",alt:""})),i.a.createElement("header",null,i.a.createElement("h3",null,i.a.createElement(p.b,{to:"/Slideshow"},"Slideshow")))))))),i.a.createElement("hr",null),i.a.createElement(b.a,{exact:!0,path:"/",component:Y}),i.a.createElement(b.a,{path:"/ProjectSale",component:x}),i.a.createElement(b.a,{path:"/uSurvey",component:A}),i.a.createElement(b.a,{path:"/FirebaseLogin",component:D}),i.a.createElement(b.a,{path:"/ApiCall",component:q}),i.a.createElement(b.a,{path:"/Slideshow",component:H}))}}]),t}(n.Component),z=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{id:"about",className:"three"},i.a.createElement("div",{className:"container"},i.a.createElement("header",null,i.a.createElement("h2",null,"About Me")),i.a.createElement("h4",null,"I design and code beautifully simple things, and I love what I do."),i.a.createElement("br",null),i.a.createElement("a",{href:"#",className:"image featured"},i.a.createElement("img",{src:"images/pic08.jpg",alt:""})),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")))}}]),t}(n.Component),J=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{id:"contact",className:"four"},i.a.createElement("div",{className:"container"},i.a.createElement("header",null,i.a.createElement("h2",null,"Contact")),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),i.a.createElement("form",{method:"post",action:"#"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-6 col-12-mobile"},i.a.createElement("input",{type:"text",name:"name",placeholder:"Name"})),i.a.createElement("div",{className:"col-6 col-12-mobile"},i.a.createElement("input",{type:"text",name:"email",placeholder:"Email"})),i.a.createElement("div",{className:"col-12"},i.a.createElement("textarea",{name:"message",placeholder:"Message"})),i.a.createElement("div",{className:"col-12"},i.a.createElement("input",{type:"button",value:"Send Message"}))))))}}]),t}(n.Component),K=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"footer"},i.a.createElement("ul",{className:"copyright"},i.a.createElement("li",null,"\xa9 2019"),i.a.createElement("li",null," | ",i.a.createElement("a",{href:"https://bonnyishere.000webhostapp.com/devlab/index.html"},"Tram Nguyen"))))}}]),t}(n.Component),V=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"is-preload"},i.a.createElement(d,null),i.a.createElement("div",{id:"main"},i.a.createElement(h,null),i.a.createElement(U,null),i.a.createElement(z,null),i.a.createElement(J,null)),i.a.createElement(K,null)))}}]),t}(n.Component);a(81),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.283cb2a9.chunk.js.map
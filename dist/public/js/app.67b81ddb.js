(function(t){function e(e){for(var n,s,i=e[0],u=e[1],c=e[2],f=0,d=[];f<i.length;f++)s=i[f],r[s]&&d.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var u=o[i];0!==r[u]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},a=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0b7d":function(t,e,o){"use strict";var n=o("96c2"),r=o.n(n);r.a},1263:function(t,e,o){"use strict";var n=o("4966"),r=o.n(n);r.a},4966:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:{name:"book-list"}}},[t._v("Главная")]),o("router-link",{attrs:{to:{name:"book-make"}}},[t._v("Добавить книгу")])],1),o("router-view",{key:t.$route.fullPath})],1)},a=[],s=o("2f62"),i={created:function(){this.$store.dispatch("makeBlankBook")},computed:Object(s["b"])(["book"])},u=i,c=(o("5c0b"),o("2877")),l=Object(c["a"])(u,r,a,!1,null,null,null),f=l.exports,d=o("8c4f"),p=(o("7514"),o("6ee6")),b=o("bc3a"),m=o.n(b),h=m.a.create({baseURL:"http://localhost:3000",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"},timeout:15e3}),k={getBooks:function(){return h.get("/books")},getBook:function(t){return h.get("/books/"+t)},postBook:function(t){return h.post("/books",t)},updateBook:function(t){return h.put("/books/"+t.id,t)},removeBook:function(t){return h.delete("/books/"+t)}};n["a"].use(s["a"]);var v=new s["a"].Store({state:{books:[],book:{}},mutations:{ADD_BOOK:function(t,e){t.books.push(e)},SET_BOOK:function(t,e){t.book=e},SET_BOOKS:function(t,e){t.books=e},SET_CURRENT_ACTION:function(t,e){t.action=e}},actions:{makeBlankBook:function(t){var e=t.commit;e("SET_BOOK",{id:Math.floor(1e7*Math.random()),title:null,poster:null,desc:null,author:null,publisher:null,ISBN:null,year:null,pages:null,raiting:0,review:null,note:null})},makeBook:function(t,e){var o=t.commit;return k.postBook(e).then(function(){o("ADD_BOOK",e)}).catch(function(t){dt.push("/")})},fetchBooks:function(t){var e=t.commit;return k.getBooks().then(function(t){return e("SET_BOOKS",t.data),t.data})},fetchBook:function(t,e){var o=t.commit,n=t.getters,r=n.getBookById(e);return r?(o("SET_BOOK",r),r):k.getBook(e).then(function(t){return o("SET_BOOK",t.data),t.data})},updateBook:function(t,e){return Object(p["a"])(t),k.updateBook(e).then(function(t){}).catch(function(t){dt.push("/")})},removeBook:function(t,e){return Object(p["a"])(t),k.removeBook(e.id).then(function(t){}).catch(function(t){dt.push("/")})}},getters:{getBookById:function(t){return function(e){return t.books.find(function(t){return t.id===e})}},getCurrentBook:function(t){return t.book},getBooks:function(t){return function(e){return t.books.filter(function(t){return t.id!==e})}}}}),_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-wrapper"},[o("div",{staticClass:"form-action"},[o("form",{on:{submit:function(t){t.preventDefault()},key:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.whatAction("enter")}}},[o("BaseButton",{attrs:{buttonClass:"default"===t.state?"btn-simple":"btn-cucumber"},domProps:{textContent:t._s(t.actions[t.state])},on:{click:function(e){return t.whatAction(t.state)}}}),"make"!==t.state?o("BaseButton",{attrs:{buttonClass:"btn-tomato"},domProps:{textContent:t._s("Удалить книгу")},on:{click:function(e){return t.whatAction("remove")}}}):t._e(),t._l(t.fields,function(e,n){return o("div",{key:n,staticClass:"form-field-control"},["input"===e.type?o("div",{staticClass:"form-field-input"},[o("BaseInput",{attrs:{label:e.label,name:e.name,placeholder:e.label,disabled:"default"===t.state,hasError:!!t.errors[e.name]},model:{value:t.book[e.name],callback:function(o){t.$set(t.book,e.name,o)},expression:"book[field.name]"}}),o("div",{directives:[{name:"show",rawName:"v-show",value:!!t.errors[e.name],expression:"!!errors[field.name]"}],staticClass:"error-message",domProps:{textContent:t._s(t.errors[e.name])}})],1):"star"===e.type?o("div",{staticClass:"form-field-stars"},[o("label",{domProps:{textContent:t._s(e.label)}}),t._l(5,function(e){return o("BaseIcon",{key:e,attrs:{cursor:"default"!==t.state?"pointer":t.state,name:"star",color:e<=t.raiting?"orange":"gray"},on:{click:t.setRaiting,mouseover:function(o){return t.mouseOverStars(e)},mouseleave:t.mouseLeaveStars},model:{value:t.raiting,callback:function(e){t.raiting=e},expression:"raiting"}})})],2):"textarea"==e.type?o("div",{staticClass:"form-field-textarea"},["textarea"===e.type?o("BaseTextarea",{attrs:{label:e.label,name:"field.name",placeholder:e.label,disabled:"default"===t.state,hasError:!!t.errors[e.name]},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}},model:{value:t.book[e.name],callback:function(o){t.$set(t.book,e.name,o)},expression:"book[field.name]"}}):t._e(),o("div",{directives:[{name:"show",rawName:"v-show",value:!!t.errors[e.name],expression:"!!errors[field.name]"}],staticClass:"error-message",domProps:{textContent:t._s(t.errors[e.name])}})],1):t._e()])})],2)])])},g=[],B=(o("a481"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",t._g(t._b({staticClass:"btn",class:t.buttonClass},"button",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),y=[],x={inheritAttrs:!1,props:{buttonClass:{type:String}}},O=x,C=(o("72f3"),Object(c["a"])(O,B,y,!1,null,"0b9dbbed",null)),S=C.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.label?o("label",[t._v(t._s(t.label))]):t._e(),o("input",t._b({class:[t.hasError?"error":""],domProps:{value:t.value},on:{input:t.updateValue}},"input",t.$attrs,!1))])},$=[],E=(o("c5f6"),{inheritAttrs:!1,props:{hasError:Boolean,label:{type:String,default:""},value:[String,Number]},methods:{updateValue:function(t){this.$emit("input",t.target.value)}}}),j=E,I=(o("c87b"),Object(c["a"])(j,w,$,!1,null,"be3c2a9a",null)),N=I.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.label?o("label",[t._v(t._s(t.label))]):t._e(),o("textarea",t._b({class:[t.hasError?"error":""],domProps:{value:t.value},on:{input:t.updateValue}},"textarea",t.$attrs,!1))])},T=[],A={inheritAttrs:!1,props:{hasError:Boolean,label:{type:String,default:""},value:[String,Number]},methods:{updateValue:function(t){this.$emit("input",t.target.value)}}},K=A,V=(o("0b7d"),Object(c["a"])(K,P,T,!1,null,"22242aa7",null)),D=V.exports,M={props:["id"],components:{BaseButton:S,BaseInput:N,BaseTextarea:D},data:function(){return{state:"default",raiting:0,errors:{title:null,desc:null,ISBN:null},actions:{default:"Редактировать книгу",update:"Сохранить книгу",make:"Добавить книгу",remove:"Удалить книгу"},fields:[{name:"title",label:"Название",type:"input"},{name:"poster",label:"Обложка",type:"input"},{name:"desc",label:"Описание",type:"textarea"},{name:"author",label:"Автор",type:"input"},{name:"publisher",label:"Издательство",type:"input"},{name:"ISBN",label:"Код ISBN",type:"input"},{name:"year",label:"Год издания",type:"input"},{name:"pages",label:"Количество страниц",type:"input"},{name:"raiting",label:"Рейтинг",type:"star"},{name:"review",label:"Отзывы тех, кто прочитал",type:"textarea"},{name:"note",label:"Личные заметки по книге",type:"textarea"}]}},created:function(){var t=this;this.id?(this.state="default",this.$store.dispatch("fetchBook",this.id).then(function(){t.raiting=t.book.raiting})):(this.state="make",this.$store.dispatch("makeBlankBook"))},computed:Object(s["b"])(["book"]),methods:{mouseLeaveStars:function(){"default"!=this.state&&(this.raiting=this.book.raiting)},mouseOverStars:function(t){"default"!=this.state&&(this.raiting=t)},setRaiting:function(){this.book.raiting=this.raiting},whatAction:function(t){if("default"!==this.state||"enter"!==t){if("enter"===t&&"make"===this.state||"make"===t)return this.simpleValidate(this.addBook);if("enter"===t&&"update"===this.state||"update"===t)return this.simpleValidate(this.updateBook);if("default"!==t){if("remove"===t){if(!confirm("Хотите удалить эту книгу?"))return;this.removeBook()}}else this.state="update"}},simpleValidate:function(t){for(var e=!1,o=["title","desc","ISBN"],n=0;n<o.length;n++){var r=o[n];this.book[r]?this.errors[r]="":e=!0}if(this.book.title||(this.errors.title="У книги должно быть название"),this.book.desc||(this.errors.desc="У книги должно быть описание"),this.book.ISBN||(this.errors.ISBN="У книги должнен быть паспорт издания - ISBN"),!e&&"function"===typeof t)return t()},updateBook:function(){var t=this;this.$store.dispatch("updateBook",this.book).then(function(){t.state="default"})},addBook:function(){var t=this;this.$store.dispatch("makeBook",this.book).then(function(){t.$router.push({name:"book-edit",params:{id:t.book.id}})})},removeBook:function(){var t=this;this.$router.replace({path:"/book/".concat(this.book.id)}),this.$store.dispatch("removeBook",this.book).then(function(){t.$router.push("/")})}}},R=M,L=(o("9f41"),Object(c["a"])(R,_,g,!1,null,"5944bb51",null)),J=L.exports,U=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.books.length?o("div",{staticClass:"book-list"},t._l(t.books,function(t){return o("BookCard",{key:t.id,attrs:{book:t}})}),1):o("h3",[t._v("Вы ещё не создали ни одной книги, добавьте свою первую книгу")])])},q=[],z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("router-link",{staticClass:"card-book-link",attrs:{to:{name:"book-edit",params:{id:t.book.id}}}},[o("div",{staticClass:"card card-book"},[o("div",{staticClass:"card-book-poster"},[t.book.poster?o("img",{attrs:{src:t.book.poster}}):o("div",{staticClass:"card-book-no_poster"},[t._v("\n        681 x 681\n      ")])]),o("div",{staticClass:"card-book-body"},[o("div",{staticClass:"card-book-txt card-book-name",domProps:{textContent:t._s(t.book.title)}}),o("div",{staticClass:"card-book-txt card-book-desc",domProps:{textContent:t._s(t.book.desc)}})]),o("div",{staticClass:"card-book-footer"},[o("div",{staticClass:"card-book-txt"},[t._v("Raiting:")]),o("div",{staticClass:"card-book-stars"},t._l(5,function(e){return o("BaseIcon",{key:e,attrs:{name:"star",color:e<=t.book.raiting?"orange":"gray"}})}),1)])])])},F=[],G={props:["book"]},H=G,Q=(o("1263"),Object(c["a"])(H,z,F,!1,null,"72432d9c",null)),W=Q.exports,X={components:{BookCard:W},created:function(){this.$store.dispatch("fetchBooks")},computed:Object(s["b"])(["books"])},Y=X,Z=(o("ecaa"),Object(c["a"])(Y,U,q,!1,null,"05059765",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"not-found"},[o("h1",[t._v("Ой, что-то пошло не так")]),o("h3",[t._v("Страницу которую вы ищите, здесь нет")]),o("router-link",{attrs:{to:{name:"book-list"}}},[t._v("Вернуться на главную")])],1)},ot=[],nt={},rt=nt,at=Object(c["a"])(rt,et,ot,!1,null,"f4db1c2c",null),st=at.exports,it=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Ой, что-то пошло не так")]),t._m(0),t._m(1),o("router-link",{attrs:{to:{name:"book-list"}}},[t._v("Вернуться на главную")])],1)},ut=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",[t._v("\n    Похоже, у Вас возникли проблемы с сетью, пожалуйста,\n    "),o("br"),t._v("нажмите кнопку назад и попробуйте снова\n  ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h4",[t._v("\n    Возможно у Вас не запущен json-server, пожалуйста,\n    "),o("br"),t._v("откройте Терминал и выполните команду "),o("br"),t._v("из корневой директории\n    проекта json-server --watch db.json\n  ")])}],ct={},lt=Object(c["a"])(ct,it,ut,!1,null,null,null),ft=lt.exports;n["a"].use(d["a"]);var dt=new d["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/book/list"},{path:"/book/list",name:"book-list",component:tt,beforeEnter:function(t,e,o){v.dispatch("fetchBooks").then(function(e){t.params.books=e,o()}).catch(function(t){t.response&&404==t.response.status?o({name:"404",params:{resource:"event"}}):o({name:"network-issue"})})}},{path:"/book/make",name:"book-make",component:J},{path:"/book/:id",name:"book-edit",component:J,props:!0,beforeEnter:function(t,e,o){v.dispatch("fetchBook",t.params.id).then(function(e){t.params.book=e,o()}).catch(function(t){t.response&&404==t.response.status?o({name:"404",params:{resource:"event"}}):o({name:"network-issue"})})}},{path:"/404",name:"404",component:st,props:!0},{path:"*",redirect:{name:"404"}},{path:"/network-issue",name:"network-issue",component:ft}]}),pt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._g({staticClass:"icon-wrapper"},t.$listeners),[o("svg",{class:["icon icon-"+t.color+" "+t.cursor],attrs:{width:t.width,height:t.height}},[o("use",t._b({},"use",{"xlink:href":"/feather-sprite.svg#"+t.name},!1))])])},bt=[],mt={name:"Icon",props:{name:String,color:{type:String,default:"gray"},cursor:{type:String,default:"default"},width:{type:[Number,String],default:24},height:{type:[Number,String],default:24}}},ht=mt,kt=(o("a030"),Object(c["a"])(ht,pt,bt,!1,null,"47edf3af",null)),vt=kt.exports;n["a"].component("BaseIcon",vt),n["a"].config.productionTip=!1,new n["a"]({router:dt,store:v,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var n=o("5e27"),r=o.n(n);r.a},"5c59":function(t,e,o){},"5cf8":function(t,e,o){},"5e27":function(t,e,o){},"72f3":function(t,e,o){"use strict";var n=o("5c59"),r=o.n(n);r.a},"96c2":function(t,e,o){},"9f41":function(t,e,o){"use strict";var n=o("fc63"),r=o.n(n);r.a},a030:function(t,e,o){"use strict";var n=o("d8c15"),r=o.n(n);r.a},c87b:function(t,e,o){"use strict";var n=o("5cf8"),r=o.n(n);r.a},d8c1:function(t,e,o){},d8c15:function(t,e,o){},ecaa:function(t,e,o){"use strict";var n=o("d8c1"),r=o.n(n);r.a},fc63:function(t,e,o){}});
//# sourceMappingURL=app.67b81ddb.js.map
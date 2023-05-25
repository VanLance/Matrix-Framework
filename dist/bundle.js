(()=>{"use strict";class t{constructor(t="black",e="0px",n="solid 1px"){this._borderColor=t,this._borderRadius=e,this._borderStyle=n}get borderStyle(){return this._borderStyle}set borderStyle(t){this._borderStyle=t}get borderRadius(){return this._borderRadius}set borderRadius(t){this._borderRadius=t}get borderColor(){return this._borderColor}set borderColor(t){this._borderColor=t}get attributes(){return{borderColor:this.borderColor,borderRadius:this.borderRadius,borderStyle:this.borderStyle}}}class e{constructor(n,o=e._classId,i=new t,r=2,s=2,a=1,c=1,d=document.createElement("div")){this._canvas=n,this._id=o,this._shape=i,this._width=r,this._height=s,this._locationTop=a,this._locationLeft=c,this._content=d,e._classId++}get content(){return this._content}set content(t){this._content=t}get locationLeft(){return this._locationLeft}set locationLeft(t){this._locationLeft=t}get locationTop(){return this._locationTop}set locationTop(t){this._locationTop=t}get height(){return this._height}set height(t){this._height=t}get width(){return this._width}set width(t){this._width=t}get shape(){return this._shape}set shape(t){this._shape=t}get id(){return this._id}set id(t){this._id=t}get canvas(){return this._canvas}set canvas(t){this._canvas=t}}e._classId=1;const n=e;var o=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function s(t){try{c(o.next(t))}catch(t){r(t)}}function a(t){try{c(o.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((o=o.apply(t,e||[])).next())}))};const i=new class{constructor(t){this.parent=t,this._widgets=[],this.parent.innerHTML="",this.parent.id="canvas",Object.assign(this.parent.style,{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridTemplateRows:"repeat(12, 1fr)",height:"100vh",columnGap:"5px",rowGap:"5px",aspectRatio:"1/1",border:"2px hotpink solid"})}get widgets(){return this._widgets}set widgets(t){this._widgets=t}addWidget(t){this.widgets.push(t),this.buildWidget(t)}initializeElement(t){const e=document.createElement("div");return e.id=t.id.toString(),Object.assign(e.style,{margin:"auto",width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"3%",aspectRatio:"1/1"}),e}buildShape(t,e){Object.assign(e.style,t.shape.attributes)}placeShape(t,e){const n={gridColumnStart:t.locationLeft.toString(),gridColumnEnd:`span ${t.width}`,gridRowStart:t.locationTop.toString(),gridRowEnd:`span ${t.height}`};Object.assign(e.style,n)}buildWidget(t){const e=this.initializeElement(t);this.buildShape(t,e),this.placeShape(t,e),e.appendChild(t.content),this.parent.appendChild(e)}}(document.body),r=new n(i);r.locationTop=2,r.locationLeft=1,r.content.innerText="Matrix",i.addWidget(r);const s=new n(i);s.content=document.createElement("h2"),s.content.innerText="TypeScript Rules",s.locationLeft=8,s.locationTop=2,s.width=4,i.addWidget(s);const a=new n(i);a.locationLeft=2,a.locationTop=4,a.content=(t=>{const e=document.createElement("form"),n=document.createElement("label");n.textContent="Username: ";const o=document.createElement("input");o.type="text";const i=document.createElement("label");i.textContent="Password: ";const r=document.createElement("input");r.type="password";const s=document.createElement("button");return s.textContent="Submit",e.append(n,document.createElement("br"),o,document.createElement("br"),i,document.createElement("br"),r,document.createElement("br"),s),e.addEventListener("submit",(e=>{e.preventDefault(),function({username:t,password:e},n){var o,i,r,s;o=this,i=void 0,s=function*(){const o=yield fetch("https://matrix-116-fakebook.onrender.com/api/verifyuser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})});if(o.ok){const e=yield o.json();console.log(e);const i=e[0]["user token"];return console.log(i),n({username:t,token:i}),e}console.error("Invalid User Info")},new((r=void 0)||(r=Promise))((function(t,e){function n(t){try{c(s.next(t))}catch(t){e(t)}}function a(t){try{c(s.throw(t))}catch(t){e(t)}}function c(e){var o;e.done?t(e.value):(o=e.value,o instanceof r?o:new r((function(t){t(o)}))).then(n,a)}c((s=s.apply(o,i||[])).next())}))}({username:o.value,password:r.value},t)})),e})((function(t){return o(this,void 0,void 0,(function*(){const e=new n(i);e.content.innerText="",e.locationLeft=7,e.locationTop=7,e.content.innerText=yield function({username:t,token:e}){return o(this,void 0,void 0,(function*(){const n=yield fetch(`https://matrix-116-fakebook.onrender.com/api/posts/${t}`,{method:"GET",headers:{"Content-Type":"application/json","x-access-token":`Bearer ${e}`}});if(n.ok){const t=yield n.json();return console.log(t),t[Math.floor(Math.random()*t.length)-1].body}return""}))}(t),i.addWidget(e)}))})),i.addWidget(a)})();
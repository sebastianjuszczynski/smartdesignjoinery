(this.webpackJsonpsmartdesignjoinery=this.webpackJsonpsmartdesignjoinery||[]).push([[0],{44:function(e,n,t){},51:function(e,n,t){},61:function(e,n,t){"use strict";t.r(n);var i,a,c,r,s,o=t(1),d=t.n(o),p=t(17),j=t.n(p),b=(t(44),t(11)),m=t(4),l=t(3),g=t(2),x=t.p+"static/media/menu-mobile.18808940.jpg",h=g.a.div(i||(i=Object(l.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    color: white;\n    height: 60px;\n    text-transform: uppercase;\n    z-index: 1;\n    background-color: ",";\n    \n    @media (max-width: 768px) {\n        height: 100px;\n        background-color: #693912;\n        background-image: url(",");\n        background-position: center;\n        background-size: cover;\n    }\n"])),(function(e){return"/home"===e.location?"rgba(0,0,0, 0.5)":"black"}),x),u=g.a.img(a||(a=Object(l.a)(["\n    margin-left: 100px;\n    height: 60px;\n    \n    \n    @media (max-width: 768px) {\n        margin: 0 auto;\n        z-index: 2;\n        height: 80px;\n    }\n"]))),f=t.p+"static/media/logo.143159ca.jpg",O=t(10),w="active",v=Object(g.a)(b.c).attrs((function(){return{activeClassName:w}}))(c||(c=Object(l.a)(["\n    display: flex;\n    list-style: none;\n    padding: 0;\n    letter-spacing: 2px;\n    margin-right: 15px;\n    font-size: 20px;\n    text-decoration: none;\n    color: white;\n    &."," {\n        font-weight: bold;\n    }\n    @media (max-width: 768px) {\n        margin-right: 0;\n        font-size: 25px;\n        padding: 30px 180px;\n        text-align: center;\n    }\n"])),w),y=g.a.ul(r||(r=Object(l.a)(["\n    display: flex;\n    list-style: none;\n    padding: 0;\n    letter-spacing: 2px;\n    margin-right: 100px;\n    font-size: 20px;\n    \n\n    @media (max-width: 768px) {\n        flex-flow: column nowrap;\n        background-image: url(",");\n        background-position: center;\n        background-size: cover;\n        position: fixed;\n        transform: ",";\n        margin: 0;\n        top: 0;\n        right: 0;\n        height: 100vh;\n        width: 100vw;\n        padding-top: 3rem;\n        justify-content: space-evenly;\n        font-size: 32px;\n        transition: transform 0.3s ease-in-out;\n        z-index: -1;\n        align-items: center;\n    }\n"])),x,(function(e){return e.open?"translateX(0)":"translateX(150%)"})),k=t(0),z=function(e){var n=e.open;return Object(k.jsxs)(y,{open:n,children:[Object(k.jsx)(v,{to:"/home",children:"Home"}),Object(k.jsx)(v,{to:"/gallery",children:"Gallery"}),Object(k.jsx)(v,{to:"/information",children:"Information"}),Object(k.jsx)(v,{to:"/contact",children:"Contact"})]})},S=g.a.div(s||(s=Object(l.a)(["\n    width: 32px;\n    height: 32px;\n    position: fixed;\n    right: 20px;\n    top: 34px;\n    display: none;\n    z-index: 1;\n\n    @media (max-width: 768px) {\n        display: flex;\n        justify-content: space-around;\n        flex-flow: column nowrap;\n    }\n\n    div {\n    width: 32px;\n    height: 4px;\n    background-color: #fff;\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n\n    &:nth-child(1) {\n        transform: ",";\n    }\n\n    &:nth-child(2) {\n        transform: ",";\n        opacity: ",";\n    }\n\n    &:nth-child(3) {\n        transform: ",";\n    }\n}\n"])),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),C=function(){var e=Object(o.useState)(!1),n=Object(O.a)(e,2),t=n[0],i=n[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(S,{open:t,onClick:function(){return i(!t)},children:[Object(k.jsx)("div",{}),Object(k.jsx)("div",{}),Object(k.jsx)("div",{}),Object(k.jsx)(z,{open:t})]}),Object(k.jsx)(z,{open:t})]})},F=Object(m.h)((function(e){return Object(k.jsxs)(h,{location:e.location.pathname,children:[Object(k.jsx)(u,{src:f}),Object(k.jsx)(C,{})]})})),q=function(){return Object(k.jsx)("div",{children:"Information"})};function E(e){var n={};return e.username.trim()||(n.username="Username required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email required",e.message?e.message.length<6&&(n.message="Message needs to be 6 characters or more"):n.message="Message is required",n}var W,I,P,V,Y,L,T,A,J,D,M,N,X,B,K,R,_,G,H,U,Z,Q,$,ee,ne,te,ie,ae,ce,re,se,oe,de,pe,je,be,me,le,ge,xe,he,ue,fe=t(18),Oe=t(26),we=function(e){var n=Object(o.useState)({username:"",email:"",message:""}),t=Object(O.a)(n,2),i=t[0],a=t[1],c=Object(o.useState)({}),r=Object(O.a)(c,2),s=r[0],d=r[1];return Object(o.useEffect)((function(){Object.keys(s).length,0}),[s,false,e]),{handleChange:function(e){var n=e.target,t=n.name,c=n.value;a(Object(Oe.a)(Object(Oe.a)({},i),{},Object(fe.a)({},t,c)))},values:i,errors:s,setValues:a,setErrors:d}},ve=g.a.div(W||(W=Object(l.a)(["\n    margin-bottom: 8px;\n    width: 80%;\n    p {\n        font-size: 0.8rem;\n    margin-top: 0.5rem;\n    color: #f00e0e; \n    }\n"]))),ye=g.a.div(I||(I=Object(l.a)(["\n    display: inline-block;\n    font-size: 12.8px;\n    margin-bottom: 6px;\n    color: #000;\n"]))),ke=g.a.input(P||(P=Object(l.a)(["\n    display: block;\n    padding-left: 10px;\n    outline: none;\n    border-radius: 2px;\n    height: 40px;\n    width: 100%;\n    border: 1px solid black;\n    ::placeholder {\n        color: #595959;\n        font-size: 12px; \n    }\n"]))),ze=g.a.textarea(V||(V=Object(l.a)(["\n    display: block;\n    padding-left: 10px;\n    outline: none;\n    border-radius: 2px;\n    height: 80px;\n    width: 100%;\n    border: none;\n    font-size: 0.8rem;\n    border: 1px solid black; \n    ::placeholder {\n        color: #595959;\n        font-size: 12px; \n    }\n"]))),Se=g.a.button(Y||(Y=Object(l.a)(["\n    width: 80%;\n    height: 50px;\n    margin-top: 10px;\n    border-radius: 2px;\n    background: rgb(70, 26, 4);\n    outline: none;\n    border: none;\n    color: #fff;\n    font-size: 20px;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    transition: 0.3s;\n    &:hover {\n        cursor: pointer;\n        background: rgb(114, 66, 43);    \n    }\n"]))),Ce=t(39),Fe=(t(51),function(e){var n=e.submitForm,t=we(n,E),i=t.handleChange,a=t.errors,c=t.values,r=t.setValues,s=t.setErrors,d=(t.setIsSubmitting,Object(o.useRef)());return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("form",{className:"form",noValidate:!0,onSubmit:function(e){e.preventDefault(),s(E(c)),Ce.a.sendForm("yahoo","template_lgc1ezc",e.target,"user_S84rE02uoYvJJVbKOZwK3").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),r({username:"",email:"",message:""}),console.log(e.target)},ref:d,children:[Object(k.jsxs)(ve,{children:[Object(k.jsx)(ye,{children:"Name"}),Object(k.jsx)(ke,{type:"text",name:"username",placeholder:"Enter your name",value:c.username,onChange:i}),a.username&&Object(k.jsx)("p",{children:a.username})]}),Object(k.jsxs)(ve,{children:[Object(k.jsx)(ye,{children:"Email"}),Object(k.jsx)(ke,{type:"email",name:"email",placeholder:"Enter your email",value:c.email,onChange:i}),a.email&&Object(k.jsx)("p",{children:a.email})]}),Object(k.jsxs)(ve,{children:[Object(k.jsx)(ye,{children:"Password"}),Object(k.jsx)(ze,{name:"message",rows:"7",placeholder:"Please type your request...",value:c.password,onChange:i}),a.message&&Object(k.jsx)("p",{children:a.message})]}),Object(k.jsx)(Se,{type:"submit",children:"Send"})]})})}),qe=g.a.div(L||(L=Object(l.a)(["\n    margin: 10px auto;\n    width: 1140px;\n    position: relative;\n    height: 400px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    @media (max-width: 768px) {\n        width: 100%;\n    }\n"]))),Ee=function(){var e=Object(o.useState)(!1),n=Object(O.a)(e,2),t=n[0],i=n[1];return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(qe,{children:t?window.location.reload(!1):Object(k.jsx)(Fe,{submitForm:function(){i(!0)}})})})},We=g.a.h3(T||(T=Object(l.a)(["\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: 200;\n    font-size: 28px;\n    line-height: 1.5;\n    margin-top: 100px;\n    @media (max-width: 768px) {\n        font-size: 20px;\n        margin-top: 30px;\n        margin-bottom: 50px;\n    }\n"]))),Ie=g.a.span(A||(A=Object(l.a)(["\n    font-weight: bold;\n"]))),Pe=function(){return Object(k.jsxs)(We,{children:["Contact ",Object(k.jsx)(Ie,{children:"with us"})," and check",Object(k.jsx)("br",{}),"what we can do ",Object(k.jsx)(Ie,{children:"together!"})]})},Ve=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Pe,{}),Object(k.jsx)(Ee,{})]})},Ye=g.a.h3(J||(J=Object(l.a)(["\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: 200;\n    font-size: 38px;\n    line-height: 1.5;\n    margin: 50px 0;\n    @media (max-width: 768px) {\n        font-size: 30px;\n        margin-top: 30px;\n        margin-bottom: 50px;\n    }\n"]))),Le=g.a.span(D||(D=Object(l.a)(["\n    font-weight: bold;\n"]))),Te=function(){return Object(k.jsxs)(Ye,{children:["Let's ",Object(k.jsx)(Le,{children:"check"})," out",Object(k.jsx)("br",{}),"our ",Object(k.jsx)(Le,{children:"work!"})]})},Ae=t(27),Je=t.n(Ae),De=t.p+"static/media/1.534bd15c.jpg",Me=t.p+"static/media/2.53c57379.jpg",Ne=t.p+"static/media/3.6f15489c.jpg",Xe=t.p+"static/media/4.9ca3b221.jpg",Be=t.p+"static/media/5.fc1e1206.jpg",Ke=t.p+"static/media/6.32621e39.jpg",Re=t.p+"static/media/7.d4832748.jpg",_e=t.p+"static/media/8.09983a22.jpg",Ge=t.p+"static/media/9.277cab72.jpg",He=t.p+"static/media/10.285f954a.jpg",Ue=t.p+"static/media/11.1c6f258a.jpg",Ze=t.p+"static/media/12.f7828bb2.jpg",Qe=t.p+"static/media/13.e3a97166.jpg",$e=t.p+"static/media/14.15ec0c36.jpg",en=t.p+"static/media/15.e1de3295.jpg",nn=t.p+"static/media/16.073dc835.jpg",tn=t.p+"static/media/17.ce225ba1.jpg",an=t.p+"static/media/18.d67db7e6.jpg",cn=t.p+"static/media/19.4bbd7239.jpg",rn=t.p+"static/media/20.935c3a28.jpg",sn=t.p+"static/media/21.72e155e9.jpg",on=t.p+"static/media/22.4cc77fb4.jpg",dn=t.p+"static/media/23.8d250fc6.jpg",pn=t.p+"static/media/24.04654585.jpg",jn=t.p+"static/media/25.67ccb4ec.jpg",bn=t.p+"static/media/26.a86039a4.jpg",mn=t.p+"static/media/27.176d974d.jpg",ln=t.p+"static/media/28.20d9b932.jpg",gn=t.p+"static/media/29.e1cd06bf.jpg",xn=t.p+"static/media/30.12896625.jpg",hn=t.p+"static/media/31.a9d3d0f7.jpg",un=t.p+"static/media/32.853f491f.jpg",fn=t.p+"static/media/33.be3a228c.jpg",On=t.p+"static/media/34.cc554e08.jpg",wn=t.p+"static/media/35.4b839a1c.jpg",vn=t.p+"static/media/36.80b6e0e4.jpg",yn=t.p+"static/media/37.19fd6d8d.jpg",kn=t.p+"static/media/38.323136cc.jpg",zn=t.p+"static/media/39.426a6b7f.jpg",Sn=t.p+"static/media/40.76622b43.jpg",Cn=t.p+"static/media/41.dc11068a.jpg",Fn=t.p+"static/media/42.3d13c6d6.jpg",qn=t.p+"static/media/43.1957d981.jpg",En=t.p+"static/media/44.59f21b6f.jpg",Wn=t.p+"static/media/45.814f7c33.jpg",In=t.p+"static/media/46.01c59c9f.jpg",Pn=t.p+"static/media/47.bcaa3db1.jpg",Vn=t.p+"static/media/48.641dc227.jpg",Yn=t.p+"static/media/49.86687315.jpg",Ln=t.p+"static/media/50.01902aa2.jpg",Tn=t.p+"static/media/51.fe9b51cc.jpg",An=t.p+"static/media/52.53bd3d9c.jpg",Jn=t.p+"static/media/53.e1da53d7.jpg",Dn=t.p+"static/media/54.7f009f82.jpg",Mn=t.p+"static/media/55.c900411b.jpg",Nn=t.p+"static/media/56.a7e5b8a4.jpg",Xn=t.p+"static/media/57.057c34be.jpg",Bn=t.p+"static/media/58.67ad303d.jpg",Kn=t.p+"static/media/59.501f4159.jpg",Rn=t.p+"static/media/60.1d872114.jpg",_n=t.p+"static/media/61.d5e7612c.jpg",Gn=t.p+"static/media/62.e632f4e8.jpg",Hn=t.p+"static/media/63.48de6a89.jpg",Un=t.p+"static/media/64.6e1fb6e7.jpg",Zn=t.p+"static/media/65.1e859caf.jpg",Qn=t.p+"static/media/66.8e149a97.jpg",$n=t.p+"static/media/67.4b6d7afc.jpg",et=t.p+"static/media/68.fff39fd1.jpg",nt=t.p+"static/media/69.43777563.jpg",tt=t.p+"static/media/70.439bc562.jpg",it=t.p+"static/media/71.a0b9757e.jpg",at=t.p+"static/media/72.94d81308.jpg",ct=t.p+"static/media/73.8d51206d.jpg",rt=t.p+"static/media/74.d1df344e.jpg",st=t.p+"static/media/75.7f50754d.jpg",ot=t.p+"static/media/76.5b7ee13c.jpg",dt=t.p+"static/media/77.abcc932f.jpg",pt=t.p+"static/media/78.0bc6098e.jpg",jt=t.p+"static/media/79.baa9cc88.jpg",bt=t.p+"static/media/80.509878dd.jpg",mt=t.p+"static/media/81.1eb2018a.jpg",lt=t.p+"static/media/82.ad1d420c.jpg",gt=t.p+"static/media/83.f90d5060.jpg",xt=t.p+"static/media/84.f98c3df4.jpg",ht=t.p+"static/media/85.b7b66703.jpg",ut=t.p+"static/media/86.c87fd744.jpg",ft=t.p+"static/media/87.b8f503d1.jpg",Ot=t.p+"static/media/88.b6bda62d.jpg",wt=t.p+"static/media/89.bb5d7383.jpg",vt=t.p+"static/media/90.97fbf105.jpg",yt=t.p+"static/media/91.e9fa21d1.jpg",kt=t.p+"static/media/92.ae018341.jpg",zt=t.p+"static/media/93.9ffd4670.jpg",St=t.p+"static/media/94.200f14ce.jpg",Ct=t.p+"static/media/95.07a8d32b.jpg",Ft=t.p+"static/media/96.7ad601db.jpg",qt=t.p+"static/media/97.c0d0059d.jpg",Et=t.p+"static/media/98.a3049643.jpg",Wt=t.p+"static/media/99.6aba8f09.jpg",It=t.p+"static/media/100.a3b02467.jpg",Pt=t.p+"static/media/101.08febf91.jpg",Vt=t.p+"static/media/102.7615780d.jpg",Yt=t.p+"static/media/103.0d16c604.jpg",Lt=t.p+"static/media/104.599ca799.jpg",Tt=t.p+"static/media/105.30dee089.jpg",At=t.p+"static/media/106.7be17184.jpg",Jt=t.p+"static/media/107.2bf591c4.jpg",Dt=t.p+"static/media/108.1bbc4cb4.jpg",Mt=t.p+"static/media/109.f21b95ef.jpg",Nt=t.p+"static/media/110.1ef2a302.jpg",Xt=t.p+"static/media/111.2ed11bfd.jpg",Bt=t.p+"static/media/112.5b3a75eb.jpg",Kt=t.p+"static/media/113.6773ef5e.jpg",Rt=t.p+"static/media/114.1daf6812.jpg",_t=t.p+"static/media/115.8d065979.jpg",Gt=g.a.div(M||(M=Object(l.a)(["\n    margin: 0 150px;    \n    @media (max-width: 768px) {\n        margin: 0 10px;\n    }\n"]))),Ht=function(){var e=[De,Me,Ne,Xe,Be,Ke,Re,_e,Ge,He,Ue,Ze,Qe,$e,en,nn,tn,an,cn,rn,sn,on,dn,pn,jn,bn,mn,ln,gn,xn,hn,un,fn,On,wn,vn,yn,kn,zn,Sn,Cn,Fn,qn,En,Wn,In,Pn,Vn,Yn,Ln,Tn,An,Jn,Dn,Mn,Nn,Xn,Bn,Kn,Rn,_n,Gn,Hn,Un,Zn,Qn,$n,et,nt,tt,it,at,ct,rt,st,ot,dt,pt,jt,bt,mt,lt,gt,xt,ht,ut,ft,Ot,wt,vt,yt,kt,zt,St,Ct,Ft,qt,Et,Wt,It,Pt,Vt,Yt,Lt,Tt,At,Jt,Dt,Mt,Nt,Xt,Bt,Kt,Rt,_t,wn];return Object(k.jsx)(Gt,{children:Object(k.jsx)(Ae.ResponsiveMasonry,{columnsCountBreakPoints:{350:1,750:2,900:3,1100:4},children:Object(k.jsx)(Je.a,{gutter:"10px",children:e.map((function(e,n){return Object(k.jsx)("img",{src:e,style:{width:"100%",height:"380px",display:"block",objectFit:"cover",objectPosition:"center"},alt:""},n)}))})})})},Ut=Object(g.b)(N||(N=Object(l.a)([" {\n    0%, 20%, 50%, 80%, 100% {\n      transform: translateY(0);\n    }\n    40% {\n      transform: translateY(-30px);\n    }\n    60% {\n      transform: translateY(-15px);\n    }\n}\n"]))),Zt=g.a.div(X||(X=Object(l.a)(["\n    position: fixed;\n    width: 40px;\n    right: 20px;\n    bottom: 30px;\n    animation: "," 2s infinite;\n    cursor: pointer;\n    overflow: hidden;\n"])),Ut),Qt=g.a.a(B||(B=Object(l.a)(["\n    color: rgba(108,58,19, 0.8);\n    font-size: 48px;\n"]))),$t=function(){var e=Object(o.useState)(window.scrollY),n=Object(O.a)(e,2),t=n[0],i=n[1];Object(o.useEffect)((function(){var e=function(){return i(window.scrollY)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);return Object(k.jsx)(Zt,{onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:Object(k.jsx)(Qt,{children:t>650&&Object(k.jsx)("i",{className:"icon fas fa-chevron-up"})})})},ei=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Te,{}),Object(k.jsx)(Ht,{}),Object(k.jsx)($t,{})]})},ni=t.p+"static/media/background.3d2347f4.jpg",ti=Object(g.b)(K||(K=Object(l.a)([" {\n    0%, 20%, 50%, 80%, 100% {\n      transform: translateY(0);\n    }\n    40% {\n      transform: translateY(-30px);\n    }\n    60% {\n      transform: translateY(-15px);\n    }\n}\n"]))),ii=g.a.div(R||(R=Object(l.a)(["\n    background-image: url(",");\n    background-size: cover;  \n    background-position: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n"])),ni),ai=g.a.div(_||(_=Object(l.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0,0,0, 0.4);\n    mix-blend-mode: overlay;\n"]))),ci=g.a.div(G||(G=Object(l.a)(["\n    position: absolute;\n    top: 55%;\n    left: 0;\n    color: white;\n    margin-left: 100px;\n\n    @media (max-width: 768px) {\n        margin: 0 auto;\n        width: 100%;\n        text-align: center;\n    }\n"]))),ri=g.a.h2(H||(H=Object(l.a)(["\n    font-size: 3em;\n    padding: 10px;\n    background: rgba(0,0,0, 0.6);\n    margin-bottom: 0;\n\n    @media (max-width: 768px) {\n        font-size: 1.8rem;\n\n    }\n"]))),si=g.a.h3(U||(U=Object(l.a)(["\n   font-size: 2em; \n   padding: 10px;\n   background: rgba(0,0,0, 0.6);\n   margin-top: 10px;\n\n   @media (max-width: 768px) {\n        font-size: 1.4rem;\n\n    }\n"]))),oi=g.a.div(Z||(Z=Object(l.a)(["\n    position: absolute;\n    width: 50px;\n    left: calc(50% - 25px);\n    bottom: 0;\n    animation: "," 2s infinite;\n    overflow: hidden;\n"])),ti),di=g.a.a(Q||(Q=Object(l.a)(["\n    color: white;\n    font-size: 3em;\n"]))),pi=g.a.div($||($=Object(l.a)(["\n    height: calc(100vh - 60px);\n    @media (max-width: 768px) {\n        height: calc(100vh - 100px);\n    }\n"]))),ji=t(37),bi=function(){return Object(k.jsxs)(pi,{children:[Object(k.jsx)(ii,{}),Object(k.jsx)(ai,{}),Object(k.jsxs)(ci,{children:[Object(k.jsx)(ri,{children:"Smart Design Joinery"}),Object(k.jsx)(si,{children:"Vision, Passion, Purpose"})]}),Object(k.jsx)(oi,{class:"arrow bounce",children:Object(k.jsx)(di,{children:Object(k.jsx)(ji.Link,{to:"motto",spy:!0,smooth:!0,children:Object(k.jsx)("i",{class:"fas fa-chevron-down"})})})})]})},mi=g.a.h2(ee||(ee=Object(l.a)(["\n    text-align: center;\n    font-size: 48px;\n    text-transform: uppercase;\n    letter-spacing: 5px;\n    padding: 10px;\n\n    @media (max-width: 768px) {\n        font-size: 30px;\n    }\n"]))),li=g.a.div(ne||(ne=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),gi=function(){return Object(k.jsx)(li,{children:Object(k.jsx)(mi,{children:"Our Service"})})},xi=t.p+"static/media/doors.32621e39.jpg",hi=t.p+"static/media/stairs.3d13c6d6.jpg",ui=t.p+"static/media/wardrobe.641dc227.jpg",fi=Object(g.a)(b.b)(te||(te=Object(l.a)(["\n    text-decoration: none;\n    text-transform: uppercase;\n    font-size: 20px;\n    letter-spacing: 2px;\n    border: 2px solid #6C3A13;\n    padding: 10px 15px;\n    color: #6C3A13;\n    transition: 0.3s;\n    &:hover {\n        border: 2px solid #ffffff;\n        color: #ffffff;\n        background-color: #6C3A13;\n    };\n    @media (max-width: 768px) {\n        font-size: 18px;\n        padding: 5px 12px;\n        \n    }    \n"]))),Oi=g.a.div(ie||(ie=Object(l.a)(["\n    display: flex;\n    width: 1140px;\n    height: 70vh;\n    margin: 0 auto;\n    @media (max-width: 768px) {\n        flex-direction: column;\n        width: 90vw;\n        align-items: center;\n        height: 100%;\n        \n    }\n"]))),wi=g.a.div(ae||(ae=Object(l.a)(["\n    width: 100%;\n    height: 100%;\n    margin: 15px;\n"]))),vi=g.a.img(ce||(ce=Object(l.a)(["\n    background-image: url(",");\n    background-position: center;\n    background-size: cover;\n    height: 50%;\n    width: 100%;\n    margin-bottom: 15px;\n    @media (max-width: 768px) {\n        height: 40vh;\n        margin-bottom: 0;\n    }\n"])),hi),yi=g.a.img(re||(re=Object(l.a)(["\n    background-image: url(",");\n    background-position: center;\n    background-size: cover;\n    height: 50%;\n    width: 100%;\n    margin-top: 15px;\n    @media (max-width: 768px) {\n        height: 40vh;\n    }\n"])),ui),ki=g.a.img(se||(se=Object(l.a)(["\n    background-image: url(",");\n    background-position: center;\n    background-size: cover;\n    height: 50%;\n    width: 100%;\n    margin-bottom: 15px;\n    @media (max-width: 768px) {\n        height: 40vh;\n        margin-top: 50px;\n    }\n"])),xi),zi=g.a.h3(oe||(oe=Object(l.a)(["\n    text-align: center;\n    text-transform: uppercase;\n    letter-spacing: 4px;\n    font-size: 30px;\n    @media (max-width: 768px) {\n        font-size: 20px;\n    }\n"]))),Si=g.a.p(de||(de=Object(l.a)(["\n    text-align: center;\n    @media (max-width: 768px) {\n        font-size: 16px;\n    }\n"]))),Ci=g.a.div(pe||(pe=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    height: 50%;\n    background-color: #F4F5F6;\n    align-items: center;\n    @media (max-width: 768px) {\n        padding: 15px 0;\n    }\n"]))),Fi=function(){var e=Object(o.useState)(window.innerWidth),n=Object(O.a)(e,2),t=n[0],i=n[1];return Object(o.useEffect)((function(){var e=function(){return i(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(k.jsxs)(Oi,{children:[Object(k.jsxs)(wi,{children:[Object(k.jsx)(vi,{}),Object(k.jsxs)(Ci,{children:[Object(k.jsx)(zi,{children:"Stairs"}),Object(k.jsx)(Si,{children:"Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a."}),Object(k.jsx)(fi,{to:"/gallery",children:"See gallery"})]})]}),Object(k.jsxs)(wi,{children:[t<768&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(yi,{}),Object(k.jsxs)(Ci,{children:[Object(k.jsx)(zi,{children:"Wardrobe"}),Object(k.jsx)(Si,{children:"Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a."}),Object(k.jsx)(fi,{to:"/gallery",children:"See gallery"})]})]}),t>768&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(Ci,{children:[Object(k.jsx)(zi,{children:"Wardrobe"}),Object(k.jsx)(Si,{children:"Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a."}),Object(k.jsx)(fi,{to:"/gallery",children:"See gallery"})]}),Object(k.jsx)(yi,{})]})]}),Object(k.jsxs)(wi,{children:[Object(k.jsx)(ki,{}),Object(k.jsxs)(Ci,{children:[Object(k.jsx)(zi,{children:"Doors"}),Object(k.jsx)(Si,{children:"Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a."}),Object(k.jsx)(fi,{to:"/gallery",children:"See gallery"})]})]})]})},qi=t(38),Ei=t.p+"static/media/carpenter.9891abc0.jpg",Wi=g.a.div(je||(je=Object(l.a)(["\n    position: relative;\n    top: 100px;\n    left: 50%;\n    color: white;\n    @media (max-width: 768px) {\n        top: 10px;\n        left: 0;\n        padding: 0 10px;\n        text-align: center;\n    }\n"]))),Ii=g.a.h3(be||(be=Object(l.a)(["\n    font-size: 36px;\n    text-transform: uppercase;\n    @media (max-width: 768px) {\n        font-size: 24px;\n        margin-bottom: 50px;\n    }\n"]))),Pi=g.a.p(me||(me=Object(l.a)(["\n    font-size: 20px;\n    line-height: 1.5;\n"]))),Vi=g.a.div(le||(le=Object(l.a)(["\n    background: rgba(0, 0, 0, 0.6);\n"]))),Yi=function(){return Object(k.jsx)(Vi,{children:Object(k.jsx)(qi.Parallax,{bgImage:Ei,bgImageAlt:"carpenter",strength:150,style:{position:"relative"},bgImageStyle:{zIndex:"-1"},children:Object(k.jsxs)(Wi,{style:{height:400},children:[Object(k.jsx)(Ii,{children:"Who we are? What we are doing?"}),Object(k.jsxs)(Pi,{children:["We\u2019re your Furniture Company. With over 30 years experience in ",Object(k.jsx)("br",{}),"the industry, we know how to produce quality handmade furniture.",Object(k.jsx)("br",{})," We are making the latest traditional and modern furniture designs",Object(k.jsx)("br",{})," for your home.  "]})]})})})},Li=g.a.h2(ge||(ge=Object(l.a)(["\n    margin: 100px auto;\n    text-align: center;\n    text-transform: uppercase;\n    line-height: 1.3;\n    font-size: 40px;\n    font-weight: 400;\n    @media (max-width: 768px) {\n        margin: 50px auto;\n        font-size: 30px;\n    }\n"]))),Ti=g.a.span(xe||(xe=Object(l.a)(["\n    color: #6C3A13;\n    font-weight: bold;\n    font-size: 60px;\n    @media (max-width: 768px) {\n        font-size: 40px;\n    }\n"]))),Ai=g.a.span(he||(he=Object(l.a)(["\n    display: inline-block;\n    font-size: 70px;\n    font-weight: bold;\n    color: #6C3A13;\n    transform: skew(-15deg);\n    @media (max-width: 768px) {\n        font-size: 50px;\n    }\n"]))),Ji=function(){return Object(k.jsxs)(Li,{id:"motto",children:["We are not just ",Object(k.jsx)(Ti,{children:"building"}),"...",Object(k.jsx)("br",{}),"...we ",Object(k.jsx)(Ti,{children:"create "}),Object(k.jsx)(Ai,{children:"!"})]})},Di=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(bi,{}),Object(k.jsx)(Ji,{}),Object(k.jsx)(Yi,{}),Object(k.jsx)(gi,{}),Object(k.jsx)(Fi,{}),Object(k.jsx)(Pe,{}),Object(k.jsx)(Ee,{}),Object(k.jsx)($t,{})]})},Mi=g.a.p(ue||(ue=Object(l.a)(["\n    position: ",";\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: white;\n    background-color: black;\n    padding: 15px;\n    margin: 0;\n    text-align: center;\n"])),(function(e){return"/home"===e.location?"relative":"fixed"})),Ni=Object(m.h)((function(e){return Object(k.jsx)(Mi,{location:e.location.pathname,children:"Smart Design Joinery\xa9. All rights reserved"})}));function Xi(){var e=Object(m.g)().pathname;return Object(o.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var Bi=function(){return Object(k.jsxs)(b.a,{children:[Object(k.jsx)(Xi,{}),Object(k.jsx)(F,{}),Object(k.jsxs)(m.d,{children:[Object(k.jsx)(m.b,{path:"/home",children:Object(k.jsx)(Di,{})}),Object(k.jsx)(m.b,{path:"/gallery",children:Object(k.jsx)(ei,{})}),Object(k.jsx)(m.b,{path:"/information",children:Object(k.jsx)(q,{})}),Object(k.jsx)(m.b,{path:"/contact",children:Object(k.jsx)(Ve,{})}),Object(k.jsx)(m.b,{children:Object(k.jsx)(m.a,{to:"/home"})})]}),Object(k.jsx)(Ni,{})]})},Ki=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,62)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),i(e),a(e),c(e),r(e)}))};j.a.render(Object(k.jsx)(d.a.StrictMode,{children:Object(k.jsx)(Bi,{})}),document.getElementById("root")),Ki()}},[[61,1,2]]]);
//# sourceMappingURL=main.75c380aa.chunk.js.map
import{s as r,j as e,H as d,n as L,r as a,v as F,a as $,c as p,S as N,B as W}from"./index-f9ecd467.js";import{F as i}from"./FormRowVertical-0d5854d2.js";import{I as o,S as E}from"./SpinnerMini-ef8c0331.js";import{u as R,D as f,a as B}from"./index-d0d6a9e0.js";import{E as A}from"./Empty-c1424c6d.js";const H=r.div`
  flex: 2.5;
  border-radius: 1rem;

  @media screen and (max-width: 980px) {
    flex: 1.5;
  }
`;function U({children:n}){return e.jsx(H,{children:n})}const M=r.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;function y({children:n}){return e.jsx(M,{children:n})}const Y=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`,b=r.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-grey-400);

  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;function j({step:n,subtitle:t,title:s}){return e.jsxs("header",{children:[e.jsx(d,{as:"h3",color:"black",children:s}),e.jsxs(Y,{children:[e.jsx(b,{children:t}),e.jsxs(b,{children:["step ",n," of 3"]})]})]})}function _({handleChange:n}){return e.jsxs(e.Fragment,{children:[e.jsx(j,{step:"1",title:"Billing Info",subtitle:"Please enter your billing info"}),e.jsxs(y,{children:[e.jsx(i,{label:"Name",children:e.jsx(o,{type:"text",id:"name",autoComplete:"name",placeholder:"Your name",name:"name",onChange:t=>n(t)})}),e.jsx(i,{label:"Phone Number",children:e.jsx(o,{type:"tel",id:"phone",name:"phoneNumber",autoComplete:"phone",placeholder:"Phone number",onChange:t=>n(t)})}),e.jsx(i,{label:"Address",children:e.jsx(o,{type:"text",id:"address",name:"address",autoComplete:"address",placeholder:"Address",onChange:t=>n(t)})}),e.jsx(i,{label:"Town/City",children:e.jsx(o,{type:"text",id:"town",name:"city",autoComplete:"city",placeholder:"Town or city",onChange:t=>n(t)})})]})]})}function G({handleChange:n}){return e.jsxs(e.Fragment,{children:[e.jsx(j,{step:"2",title:"Rental Info",subtitle:"Please enter your rental info"}),e.jsx("br",{}),e.jsx(d,{as:"h4",color:"black",children:"Pick-Up"}),e.jsx("br",{}),e.jsxs(y,{children:[e.jsx(i,{label:"Locations",children:e.jsx(o,{type:"text",id:"pickupLocation",autoComplete:"city",placeholder:"City name",name:"pickupLocation",onChange:t=>n(t)})}),e.jsx(i,{label:"Date",children:e.jsx(o,{type:"date",id:"pickupDate",autoComplete:"date",placeholder:"Select your date",name:"pickupDate",onChange:t=>n(t)})}),e.jsx(i,{label:"Time",children:e.jsx(o,{type:"time",id:"pickupTime",autoComplete:"time",placeholder:"Select your time",name:"pickupTime",onChange:t=>n(t)})})]}),e.jsx("br",{}),e.jsx(d,{as:"h4",color:"black",children:"Drop-Off"}),e.jsx("br",{}),e.jsxs(y,{children:[e.jsx(i,{label:"Locations",children:e.jsx(o,{type:"text",id:"dropOffLocation",autoComplete:"city",placeholder:"City name",name:"dropOffLocation",onChange:t=>n(t)})}),e.jsx(i,{label:"Date",children:e.jsx(o,{type:"date",id:"dropOffDate",autoComplete:"date",placeholder:"Select your date",name:"dropOffDate",onChange:t=>n(t)})}),e.jsx(i,{label:"Time",children:e.jsx(o,{type:"time",id:"dropOffTime",autoComplete:"time",placeholder:"Select your time",name:"dropOffTime",onChange:t=>n(t)})})]})]})}const w=r.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: #f6f7f9;
  margin: 2rem 0;
  border-radius: 1rem;
  font-size: 1.6rem;

  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`,C=r.input`
  ${n=>n.type==="checkbox"&&L`
      width: 2rem;
      height: 2rem;
      accent-color: #1f2544;
    `}
`,S=r.label`
  font-size: inherit;
  font-weight: 600;
`;function J({handleChange:n}){return e.jsxs(e.Fragment,{children:[e.jsx(j,{step:"3",title:"Confirmation",subtitle:"We are getting to the end. Jus few clicks and your rental is ready!"}),e.jsxs(w,{children:[e.jsx(C,{type:"checkbox",id:"newsletter",name:"newsletter",onChange:t=>n(t)}),e.jsx(S,{htmlFor:"newsletter",children:"I agree with sending an Marketing and newsletter emails. No spam, promissed!"})]}),e.jsxs(w,{children:[e.jsx(C,{type:"checkbox",id:"terms",name:"policies",onChange:t=>n(t)}),e.jsx(S,{htmlFor:"terms",children:"I agree with our terms and conditions and privacy policy."})]})]})}const V=r.p`
  color: var(--color-grey-400);
  line-height: 2.1rem;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 1rem 0;

  @media screen and (max-width: 550px) {
    font-size: 1.1rem;
  }
`,q=r.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 1rem 0;
`,K=r.div`
  background-color: var(--color-blue-800);
  border-radius: 1rem;
  padding: 1rem;
  width: 20rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,Q=r(F.LazyLoadImage)`
  width: 100%;
`,X=a.memo(function({image:n,name:t}){return e.jsxs(e.Fragment,{children:[e.jsxs("header",{children:[e.jsx(d,{as:"h3",color:"black",children:"Rental Summary"}),e.jsx(V,{children:"Prices may change depending on the length of the rental and the price of your rental car."})]}),e.jsxs(q,{children:[e.jsx(K,{children:e.jsx(Q,{src:n,alt:"",effect:"blur"})}),e.jsx(d,{as:"h3",color:"black",children:t})]})]})}),Z=r.span`
  display: inline-block;
  width: 100%;
  height: 0.2rem;
  background-color: #c3d4e966;
`,ee=r.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,te=r.span`
  color: #90a3bf;
  text-transform: capitalize;
  font-size: 1.6rem;
  font-weight: 500;

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`,ne=r.span`
  color: #1a202c;
  text-transform: capitalize;
  font-size: 1.6rem;
  font-weight: 600;
`,k=a.memo(function({price:n,title:t}){return e.jsxs(ee,{children:[e.jsx(te,{children:t}),e.jsxs(ne,{children:["$",n]})]})}),re=r.div`
  background-color: var(--color-bg-grey);
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  margin: 2rem 0;
`,ie=r.input`
  background: none;
  border: none;
  color: var(--color-grey-400);
  font-size: 1.4rem;
  font-weight: 500;

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`,oe=r.button`
  background: none;
  border: none;
  color: #1a202c;
  font-size: 1.6rem;
  font-weight: 600;

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`,ae=a.memo(function({handleDiscount:n}){const[t,s]=a.useState("");return e.jsxs(re,{children:[e.jsx(ie,{placeholder:"Apply promo code",type:"text",onChange:m=>s(m.target.value)}),e.jsx(oe,{onClick:()=>n(t),children:"Apply now"})]})}),se=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ce=r.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-grey-400);

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`,le=r.span`
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-black);

  @media screen and (max-width: 550px) {
    font-size: 2rem;
  }
`,de=a.memo(function({totalPrice:n,discount:t}){return e.jsxs(se,{children:[e.jsxs("div",{children:[e.jsx(d,{as:"h2",children:"Total Rental Price"}),e.jsx(ce,{children:t?`Overall price (${n}.00) and includes rental discount (${t})`:`Overall price (${n}.00)`})]}),e.jsxs(le,{children:["$",t&&n?n-t:n]})]})}),me=r.article`
  flex: 1;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem 2rem;
  height: max-content;

  @media screen and (max-width: 980px) {
    flex: 1.5;
  }
`,pe=({discount:n,name:t,pricePerDay:s,thumbnail:m,handleDiscount:x})=>e.jsxs(me,{children:[e.jsx(X,{name:t,image:m}),e.jsx(Z,{}),e.jsx(k,{title:"subtotal",price:s}),e.jsx(k,{title:"Tax",price:"0"}),!n&&e.jsx(ae,{handleDiscount:x}),e.jsx(de,{totalPrice:s,discount:n})]});function xe(n){for(const t in n)return!(Object.prototype.hasOwnProperty.call(n,t)&&(n[t]===""||n[t]===!1))}const u=r.article`
  margin-bottom: 2rem;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
`;function he(){const{isLoading:n,carData:t}=R(),[s,m]=a.useState(0),x=$(),[g,v]=a.useState({name:"",phoneNumber:"",address:"",city:"",pickupLocation:"",pickupDate:"",pickupTime:"",dropOffLocation:"",dropOffDate:"",dropOffTime:"",newsletter:!1,policies:!1}),[P,z]=a.useState(!1),h=c=>{const{target:l}=c,O=l.name!=="newsletter"&&l.name!=="policies";if(l){const T={...g,[l.name]:O?l.value:l.checked};v(T)}},D=c=>{if(c||p.error("Please enter a code"),c!==""&&c!==f&&p.error("Invalid code"),c!==""&&c===f&&(t!=null&&t.pricePerDay)){const l=B*(t==null?void 0:t.pricePerDay)/100;m(l),p.success("Code applied successfully")}},I=()=>{xe(g)&&(z(!0),setTimeout(()=>{x("/paymentSuccess")},5e3))};return a.useEffect(()=>{p(`You can use this promo code for a discount: ${f}`)},[]),n?e.jsx(N,{}):t?e.jsxs(e.Fragment,{children:[e.jsxs(U,{children:[e.jsx(u,{children:e.jsx(_,{handleChange:h})}),e.jsx(u,{children:e.jsx(G,{handleChange:h})}),e.jsx(u,{children:e.jsx(J,{handleChange:h})}),e.jsx(W,{size:"medium",variation:"primary",onClick:I,children:P?e.jsx(E,{}):"Rent Now"})]}),e.jsx(pe,{discount:s,handleDiscount:D,name:t.name,pricePerDay:t.pricePerDay,thumbnail:t.thumbnail})]}):e.jsx(A,{resource:"Car was not found"})}const fe=r.section`
  height: 100%;
  display: flex;
  padding: 2rem;
  gap: 2rem;

  @media screen and (max-width: 790px) {
    flex-direction: column-reverse;
  }
`;function we(){return e.jsx(e.Fragment,{children:e.jsx(fe,{children:e.jsx(he,{})})})}export{we as default};

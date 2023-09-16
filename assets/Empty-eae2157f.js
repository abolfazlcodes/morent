import{z as i,r as a,s as t,n as f,j as s,A as m,C as u,H as k,L as x,B as h,D as c}from"./index-ce174a0f.js";function y(e){const{bookmarks:r}=i(),[o,n]=a.useState(!1);return a.useEffect(()=>{const d=r.find(l=>l.id===e.id);n(!!d)},[r,e.id]),{isBookmarked:o}}const p=t.span`
  font-size: 2.2rem;
  cursor: pointer;
  color: var(--color-grey-400);

  ${e=>e.bookmarked&&f`
      color: var(--color-red-800);
    `}
`;function z({carData:e}){const{isBookmarked:r}=y(e),{handleBookmark:o}=i(),n=()=>{o(e)};return s.jsx(p,{bookmarked:r,onClick:n,children:r?s.jsx(m,{}):s.jsx(u,{})})}const j=t.header`
  display: flex;
  align-items: start;
  justify-content: space-between;
`,g=t.span`
  color: #90a3bf;
  font-size: 1.3rem;
  text-transform: capitalize;
  font-weight: 500;
`;function E({title:e,subtitle:r,children:o}){return s.jsxs(j,{children:[s.jsxs("div",{children:[s.jsx(k,{as:"h3",color:"black",children:e}),s.jsx(g,{children:r})]}),o]})}const B=t.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,C=t.span`
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
`,w=t.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: #90a3bf;
`;function S({link:e,pricePerDay:r,btnSize:o="small"}){return s.jsxs(B,{children:[s.jsxs("div",{children:[s.jsxs(C,{children:["$",r,".00/"]}),s.jsx(w,{children:"day"})]}),s.jsx(x,{to:e,children:s.jsx(h,{size:o,variation:"primary",children:"Rent now"})})]})}async function v(){const{data:e,error:r}=await c.from("cars").select("*");if(r)throw new Error(r.message);return e}async function A(e){const{data:r,error:o}=await c.from("cars").select("*").eq("id",e).single();if(o)throw new Error(o.message);return r}const b=t.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1%.8;
`;function F({resource:e}){return s.jsxs(b,{children:["No ",e," could be found."]})}export{z as B,E as C,F as E,S as a,A as b,v as g};

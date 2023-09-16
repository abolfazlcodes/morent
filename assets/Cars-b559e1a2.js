import{s as n,j as t,k as m,n as x,S as g,l as v}from"./index-2e3bcb71.js";import{F as j}from"./FormRowVertical-1126e504.js";import{u as C,C as k}from"./useCars-51ca2785.js";import{E as c}from"./Empty-e643eb64.js";import"./supabase-1ea59f02.js";const w=n.div`
  display: block;
  width: 18px;
  height: 18px;
  cursor: pointer;
  position: relative;

  &:hover {
    input {
      &:not(:checked) {
        border: var(--color-grey-300);
      }
    }
  }
`,y=n.input`
  display: block;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 1rem;
`;y.defaultProps={type:"checkbox"};function S({id:e,onClick:a,active:i}){const s=()=>{a(e)};return t.jsx(w,{onClick:s,children:t.jsx(y,{checked:i,id:e})})}const P=n.span`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-grey-400);
`,V=n.div`
  margin-bottom: 2rem;
`;function u({filterField:e,options:a}){const[i,s]=m(),l=i.get(e),o=r=>{const d=l?l.split(","):[];if(d.includes(r)){const f=d.filter(b=>b!==r).join(",");i.set(e,f),s(i)}else{d.push(r);const p=d.join(",");i.set(e,p),s(i)}};return t.jsxs(V,{children:[t.jsx(P,{children:e}),a.map(r=>t.jsx(j,{type:"horizontal",label:r.label,children:t.jsx(S,{id:r.value,onClick:o,active:!!(l!=null&&l.includes(r.value))})},r.value))]})}const O=n.aside`
  background-color: var(--color-white);
  padding: 1rem;
  height: 100dvh;

  @media screen and (max-width: 550px) {
    position: absolute;
    z-index: 10;
    width: 0;
    top: 0;
    left: -30%;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease-in;
  }

  ${e=>e.isOpen&&x`
      @media screen and (max-width: 550px) {
        width: 70%;
        left: 0;
        visibility: visible;
        opacity: 1;
      }
    `}
`;function F({isOpen:e}){return t.jsxs(O,{isOpen:e,children:[t.jsx(u,{filterField:"Type",options:[{value:"Sport",label:"Sport"},{value:"SUV",label:"SUV"},{value:"MPV",label:"MPV"},{value:"Sedan",label:"Sedan"},{value:"Coupe",label:"Coupe"},{value:"Hatchback",label:"Hatchback"}]}),t.jsx(u,{filterField:"Capacity",options:[{value:"2",label:"2 People"},{value:"4",label:"4 People"},{value:"6",label:"6 People"},{value:"8",label:"8 People"}]})]})}function h(e,a){let i=[];return a&&e&&(i=e==null?void 0:e.filter(s=>a.values.some(l=>l.toLowerCase()===s[a.field].toString().toLowerCase()))),i}const z=n.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(31rem, 1fr));
  justify-items: center;
  grid-auto-flow: row;
  column-gap: 1rem;
  row-gap: 3rem;
  padding: 3rem 2rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-ms-scrollbar {
    display: none;
  }
`;function W(){const{isLoading:e,cars:a}=C(),[i]=m(),s=i.get("Type"),l=i.get("Capacity");if(e)return t.jsx(g,{});if(a&&(a==null?void 0:a.length)<1)return t.jsx(c,{resource:"cars"});let o;return s?o=h(a,{field:"category",values:s.split(",")}):l?o=h(a,{field:"capacity",values:l.split(",")}):o=a,o.length===0?t.jsx(c,{resource:"No car found"}):t.jsx(z,{children:o&&(o==null?void 0:o.map(r=>t.jsx(k,{type:"typeB",carData:r},r.id)))})}const E=n.div`
  display: grid;
  grid-template-columns: 25rem 1fr;
  gap: 1rem;
  height: 100dvh;
  position: relative;

  @media screen and (max-width: 990px) {
    grid-template-columns: 20rem 1fr;
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: auto;
  }
`,H=n.div`
  display: none;

  @media screen and (max-width: 550px) {
    ${e=>e.isOpen&&x`
        display: block;
      `}

    position: absolute;
    background-color: #00000028;
    width: 100%;
    top: 0;
    right: 0;
    height: 100%;
    z-index: 10;
  }
`;function D(){const{isOpen:e}=v();return t.jsx(t.Fragment,{children:t.jsxs(E,{children:[t.jsx(H,{isOpen:e}),t.jsx(F,{isOpen:e}),t.jsx(W,{})]})})}export{D as default};

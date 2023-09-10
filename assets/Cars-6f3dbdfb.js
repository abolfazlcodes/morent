import{s as n,j as e,k as x,S as k}from"./index-2e859ada.js";import{F as m}from"./FormRowVertical-6677d1ad.js";import{u as b,C as f}from"./useCars-8d67d3c8.js";import"./supabase-641036b9.js";const g=n.div`
  display: block;
  width: 18px;
  height: 18px;
  cursor: pointer;
  position: relative;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    input {
      &:not(:checked) {
        border: var(--color-grey-300);
      }
    }
  }
`,p=n.input`
  display: block;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 36%/36%;
  box-shadow: inset 0 0 0 1px var(--color-grey-300);
  background: var(--background, transparent);
  transition: background 0.25s linear, box-shadow 0.25s linear;

  @keyframes check {
    100% {
      stroke-dashoffset: 4.5px;
    }
  }

  & + svg {
    width: 21px;
    height: 18px;
    left: 0;
    top: 0;
    color: var(--color-blue-800);

    .tick {
      stroke-dasharray: 20;
      stroke-dashoffset: var(--stroke-dashoffset, 20);
      transition: stroke-dashoffset 0.2s;

      &.mask {
        stroke: var(--color-white);
      }
    }

    & + svg {
      width: 11px;
      height: 11px;
      fill: none;
      stroke: var(--color-blue-800);
      stroke-width: 1.25;
      stroke-linecap: round;
      top: -6px;
      right: -10px;
      stroke-dasharray: 4.5px;
      stroke-dashoffset: 13.5px;
      pointer-events: none;
      animation: var(--animation, none) 0.2s ease 0.175s;
    }
  }

  &:checked {
    --background: var(--color-blue-800);
    --border: var(--color-blue-800);
    & + svg {
      --stroke-dashoffset: 0;
      & + svg {
        --animation: check;
      }
    }
  }
`,c=n.svg`
  display: block;
  position: absolute;
`;p.defaultProps={type:"checkbox"};function v({id:o,onClick:r,active:s}){const l=()=>{r(o)};return e.jsxs(g,{onClick:l,children:[e.jsx(p,{checked:s,id:o}),e.jsxs(c,{viewBox:"0 0 21 18",children:[e.jsx("symbol",{id:"tick-path",viewBox:"0 0 21 18",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69",fill:"none","stroke-width":"2.25","stroke-linecap":"round","stroke-linejoin":"round"})}),e.jsx("defs",{children:e.jsx("mask",{id:"tick",children:e.jsx("use",{className:"tick mask",href:"#tick-path"})})}),e.jsx("use",{className:"tick",href:"#tick-path",stroke:"currentColor"}),e.jsx("path",{fill:"white",mask:"url(#tick)",d:"M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z"})]}),e.jsxs(c,{className:"lines",viewBox:"0 0 11 11",children:[e.jsx("path",{d:"M5.88086 5.89441L9.53504 4.26746"}),e.jsx("path",{d:"M5.5274 8.78838L9.45391 9.55161"}),e.jsx("path",{d:"M3.49371 4.22065L5.55387 0.79198"})]})]})}const j=n.span`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-grey-400);
`,C=n.div`
  margin-bottom: 2rem;
`;function d({filterField:o,options:r}){const[s,l]=x(),a=s.get(o);let i;const h=t=>{if(i=!!(a!=null&&a.includes(t)),i){const u=a==null?void 0:a.replace(`${t}`,"");s.set(o,u),l(s);return}a&&!i?s.set(o,`${a}-${t}`):s.set(o,t),l(s)};return e.jsxs(C,{children:[e.jsx(j,{children:o}),r.map(t=>e.jsx(m,{type:"horizontal",label:t.label,children:e.jsx(v,{id:t.value,onClick:h,active:!!(a!=null&&a.includes(t.value))})},t.value))]})}const y=n.aside`
  background-color: var(--color-white);
  padding: 1rem;
`;function w(){return e.jsxs(y,{children:[e.jsx(d,{filterField:"Type",options:[{value:"Sport",label:"Sport"},{value:"SUV",label:"SUV"},{value:"MPV",label:"MPV"},{value:"Sedan",label:"Sedan"},{value:"Coupe",label:"Coupe"},{value:"Hatchback",label:"Hatchback"}]}),e.jsx(d,{filterField:"Capacity",options:[{value:"2",label:"2 People"},{value:"4",label:"4 People"},{value:"6",label:"6 People"},{value:"8",label:"8 People"}]})]})}function S({resource:o}){return e.jsxs("p",{children:["No ",o," could be found."]})}const P=n.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  justify-items: center;
  grid-auto-flow: row;
  column-gap: 1rem;
  row-gap: 3rem;
  padding: 3rem 2rem;
`;function M(){const{isLoading:o,cars:r}=b();return o?e.jsx(k,{}):r&&(r==null?void 0:r.length)<1?e.jsx(S,{resource:"cars"}):e.jsx(P,{children:r&&(r==null?void 0:r.map(s=>e.jsx(f,{type:"typeB",carData:s},s.id)))})}const V=n.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
  gap: 1rem;
`;function $(){return e.jsx(e.Fragment,{children:e.jsxs(V,{children:[e.jsx(w,{}),e.jsx(M,{})]})})}export{$ as default};

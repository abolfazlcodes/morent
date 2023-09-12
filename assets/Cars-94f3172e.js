import{s as i,j as e,k as m,n as p,S as k,l as b}from"./index-219f0eb1.js";import{F as g}from"./FormRowVertical-7e035c1b.js";import{u as v,C as f}from"./useCars-b24acfc5.js";import{E as y}from"./Empty-6b56ffb4.js";import"./supabase-9f795bfa.js";const w=i.div`
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
`,h=i.input`
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
`,d=i.svg`
  display: block;
  position: absolute;
`;h.defaultProps={type:"checkbox"};function j({id:a,onClick:s,active:o}){const n=()=>{s(a)};return e.jsxs(w,{onClick:n,children:[e.jsx(h,{checked:o,id:a}),e.jsxs(d,{viewBox:"0 0 21 18",children:[e.jsx("symbol",{id:"tick-path",viewBox:"0 0 21 18",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69",fill:"none","stroke-width":"2.25","stroke-linecap":"round","stroke-linejoin":"round"})}),e.jsx("defs",{children:e.jsx("mask",{id:"tick",children:e.jsx("use",{className:"tick mask",href:"#tick-path"})})}),e.jsx("use",{className:"tick",href:"#tick-path",stroke:"currentColor"}),e.jsx("path",{fill:"white",mask:"url(#tick)",d:"M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z"})]}),e.jsxs(d,{className:"lines",viewBox:"0 0 11 11",children:[e.jsx("path",{d:"M5.88086 5.89441L9.53504 4.26746"}),e.jsx("path",{d:"M5.5274 8.78838L9.45391 9.55161"}),e.jsx("path",{d:"M3.49371 4.22065L5.55387 0.79198"})]})]})}const C=i.span`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-grey-400);
`,S=i.div`
  margin-bottom: 2rem;
`;function c({filterField:a,options:s}){const[o,n]=m(),t=o.get(a);let l;const x=r=>{if(l=!!(t!=null&&t.includes(r)),l){const u=t==null?void 0:t.replace(`${r}`,"");o.set(a,u),n(o);return}t&&!l?o.set(a,`${t}-${r}`):o.set(a,r),n(o)};return e.jsxs(S,{children:[e.jsx(C,{children:a}),s.map(r=>e.jsx(g,{type:"horizontal",label:r.label,children:e.jsx(j,{id:r.value,onClick:x,active:!!(t!=null&&t.includes(r.value))})},r.value))]})}const P=i.aside`
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

  ${a=>a.isOpen&&p`
      @media screen and (max-width: 550px) {
        width: 70%;
        left: 0;
        visibility: visible;
        opacity: 1;
      }
    `}
`;function M({isOpen:a}){return e.jsxs(P,{isOpen:a,children:[e.jsx(c,{filterField:"Type",options:[{value:"Sport",label:"Sport"},{value:"SUV",label:"SUV"},{value:"MPV",label:"MPV"},{value:"Sedan",label:"Sedan"},{value:"Coupe",label:"Coupe"},{value:"Hatchback",label:"Hatchback"}]}),e.jsx(c,{filterField:"Capacity",options:[{value:"2",label:"2 People"},{value:"4",label:"4 People"},{value:"6",label:"6 People"},{value:"8",label:"8 People"}]})]})}const O=i.section`
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
`;function V(){const{isLoading:a,cars:s}=v();return a?e.jsx(k,{}):s&&(s==null?void 0:s.length)<1?e.jsx(y,{resource:"cars"}):e.jsx(O,{children:s&&(s==null?void 0:s.map(o=>e.jsx(f,{type:"typeB",carData:o},o.id)))})}const B=i.div`
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
`,$=i.div`
  display: none;

  @media screen and (max-width: 550px) {
    ${a=>a.isOpen&&p`
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
`;function H(){const{isOpen:a}=b();return e.jsx(e.Fragment,{children:e.jsxs(B,{children:[e.jsx($,{isOpen:a}),e.jsx(M,{isOpen:a}),e.jsx(V,{})]})})}export{H as default};

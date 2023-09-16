import{s as e,n as l,j as t}from"./index-ce174a0f.js";const n=e.div`
  display: flex;
  gap: 0.8rem;
  padding: 1.2rem 0;

  ${o=>o.type==="vertical"&&l`
      flex-direction: column;
    `}

  ${o=>o.type==="horizontal"&&l`
      align-items: center;

      & label {
        order: 1;
        font-size: 1.5rem;
      }

      & span {
        order: 2;
      }
    `}
`,p=e.label`
  font-weight: 500;
  color: var(--color-grey-500);
`,c=e.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;n.defaultProps={type:"vertical"};function d({label:o,error:s,children:r,type:i="vertical"}){var a;return t.jsxs(n,{type:i,children:[o&&t.jsx(p,{htmlFor:(a=r==null?void 0:r.props)==null?void 0:a.id,children:o}),r,s&&t.jsx(c,{children:s})]})}export{d as F};

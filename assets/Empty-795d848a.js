import{D as s,s as a,j as n}from"./index-8db93623.js";async function i(){const{data:t,error:e}=await s.from("cars").select("*");if(e)throw new Error(e.message);return t}async function f(t){const{data:e,error:r}=await s.from("cars").select("*").eq("id",t).single();if(r)throw new Error(r.message);return e}const o=a.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1%.8;
`;function u({resource:t}){return n.jsxs(o,{children:["No ",t," could be found."]})}export{u as E,f as a,i as g};

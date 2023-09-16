import{s as r,j as e,m as d,S as c}from"./index-d4e3d225.js";import{u as o,b as m,E as h,C as l,B as p,a as x}from"./Empty-8aca16d9.js";import"./supabase-ba769cbe.js";const g=r.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 32rem;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;

    span {
      display: inline-flex;
      width: 100%;
      height: 10rem;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 1rem;
    }
  }

  @media screen and (max-width: 990px) {
    width: 90%;

    img {
      height: 30rem;
    }

    div {
      span {
        height: 12rem;
      }
    }
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;function u({thumbnail:a}){return e.jsxs(g,{children:[e.jsx("img",{src:a}),e.jsxs("div",{children:[e.jsx("span",{children:"other images"}),e.jsx("span",{children:"other images"}),e.jsx("span",{children:"other images"})]})]})}const f=r.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  font-size: 1.5rem;
  margin-bottom: 1.7rem;

  span:nth-child(odd) {
    color: #90a3bf;
    font-weight: 400;
  }

  span:nth-child(even) {
    color: #596780;
    font-weight: 600;
  }
`,j=r.p`
  font-size: 1.7rem;
  color: #596780;
  line-height: 4rem;
`;function y({capacity:a,category:i,tankCapacity:t,steering:n,description:s}){return e.jsxs(e.Fragment,{children:[e.jsx(j,{children:s}),e.jsxs(f,{children:[e.jsx("span",{children:"Type of Car"}),e.jsx("span",{children:i}),e.jsx("span",{children:"Capacity"}),e.jsxs("span",{children:[a," People"]}),e.jsx("span",{children:"Steering"}),e.jsx("span",{children:n?"Automatic":"Manual"}),e.jsx("span",{children:"Gasoline"}),e.jsxs("span",{children:[t,"L"]})]})]})}function w(){const{carId:a}=d(),{isLoading:i,data:t}=o({queryFn:()=>m(a),queryKey:[`car-${a}`]});return{isLoading:i,carData:t}}const b=r.article`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  @media screen and (max-width: 990px) {
    padding: 1rem;
    gap: 1rem;
    flex-direction: column;
  }
`,C=r.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 2.8rem;
  background: #fff;
  border-radius: 1rem;
  height: 44rem;

  @media screen and (max-width: 990px) {
    width: 90%;
    height: max-content;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;function S(){const{isLoading:a,carData:i}=w();return a?e.jsx(c,{}):i?e.jsxs(b,{children:[e.jsx(u,{thumbnail:i.image}),e.jsxs(C,{children:[e.jsx(l,{title:i.name,subtitle:"rating + 2 Reviewers",children:e.jsx(p,{carData:i})}),e.jsx(y,{capacity:i.capacity,category:i.category,steering:i.automatic,tankCapacity:i.tankCapacity,description:`NISMO has become the embodiment of Nissan's outstanding
              performance, inspired by the most unforgiving proving ground, the
              race track.`}),e.jsx(x,{id:i.id,pricePerDay:i.pricePerDay,btnSize:"medium"})]})]}):e.jsx(h,{resource:"Car was not found"})}const v=r.div`
  padding: 1rem;
  max-width: 80%;
  margin: auto;

  @media screen and (max-width: 1300px) {
    max-width: 95%;
  }

  @media screen and (max-width: 550px) {
    max-width: 100%;
    padding: 0;
  }
`;function F(){return e.jsx(e.Fragment,{children:e.jsx(v,{children:e.jsx(S,{})})})}export{F as default};

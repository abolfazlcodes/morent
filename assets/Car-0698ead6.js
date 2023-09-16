import{s as i,r as c,j as e,w as o,y as m,x as l,S as p}from"./index-ce174a0f.js";import{b as h,E as x,C as g,B as u,a as f}from"./Empty-eae2157f.js";const y=i.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1rem;

  img {
    width: 100%;
    height: 33rem;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem;
  }

  @media screen and (max-width: 990px) {
    width: 90%;

    img {
      height: 30rem;
    }

    div {
      img {
        height: 12rem;
      }
    }
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`,j=i.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;

  img {
    width: 22rem;
    object-fit: cover;
    object-position: center;
    height: 13rem;

    transition: all 0.1s ease-in;
  }

  @media screen and (max-width: 990px) {
    img {
      height: 12rem;
      width: 100%;
    }
  }
`,w=i(o.LazyLoadImage)`
  cursor: pointer;
  border-radius: 1rem;

  &:hover {
    outline: 2px solid var(--color-blue-600);
    outline-offset: 3px;
  }
`,b={outline:"2px solid #3563E9",outlineOffset:"3px"};function v({thumbnail:a,images:t}){const[r,s]=c.useState(a);function d(n){s(n)}return e.jsxs(y,{children:[e.jsx(o.LazyLoadImage,{src:r,effect:"blur"}),e.jsx(j,{children:t==null?void 0:t.map(n=>e.jsx(w,{src:n,onClick:()=>d(n),style:n===r?b:{},effect:"blur"}))})]})}const C=i.div`
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
`,S=i.p`
  font-size: 1.7rem;
  color: #596780;
  line-height: 4rem;
`;function I({capacity:a,category:t,tankCapacity:r,steering:s,description:d}){return e.jsxs(e.Fragment,{children:[e.jsx(S,{children:d}),e.jsxs(C,{children:[e.jsx("span",{children:"Type of Car"}),e.jsx("span",{children:t}),e.jsx("span",{children:"Capacity"}),e.jsxs("span",{children:[a," People"]}),e.jsx("span",{children:"Steering"}),e.jsx("span",{children:s?"Automatic":"Manual"}),e.jsx("span",{children:"Gasoline"}),e.jsxs("span",{children:[r,"L"]})]})]})}function D(){const{carId:a}=m(),{isLoading:t,data:r}=l({queryFn:()=>h(a),queryKey:[`car-${a}`]});return{isLoading:t,carData:r}}const k=i.article`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  @media screen and (max-width: 990px) {
    padding: 1rem;
    gap: 1rem;
    flex-direction: column;
  }
`,L=i.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 4.8rem;
  background: #fff;
  border-radius: 1rem;
  height: 47rem;

  @media screen and (max-width: 990px) {
    width: 90%;
    height: max-content;
    gap: 2.8rem;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;function P(){const{isLoading:a,carData:t}=D();return a?e.jsx(p,{}):t?e.jsxs(k,{children:[e.jsx(v,{thumbnail:t.images.at(0),images:t.images}),e.jsxs(L,{children:[e.jsx(g,{title:t.name,subtitle:"rating + 2 Reviewers",children:e.jsx(u,{carData:t})}),e.jsx(I,{capacity:t.capacity,category:t.category,steering:t.automatic,tankCapacity:t.tankCapacity,description:`NISMO has become the embodiment of Nissan's outstanding
              performance, inspired by the most unforgiving proving ground, the
              race track.`}),e.jsx(f,{link:`/payment/${t.id}`,pricePerDay:t.pricePerDay,btnSize:"medium"})]})]}):e.jsx(x,{resource:"Car was not found"})}const E=i.div`
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
`;function q(){return e.jsx(e.Fragment,{children:e.jsx(E,{children:e.jsx(P,{})})})}export{q as default};

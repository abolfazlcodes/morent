import{s as i,r as u,j as e,v as m,H as j,S as d}from"./index-8db93623.js";import{u as w,a as y,B as v,b as S,C as h}from"./useCars-05b5d4ba.js";import{r as c,u as b}from"./index-413c9d13.js";import{E as l}from"./Empty-795d848a.js";import{H as p,S as x,a as g}from"./SwiperComponent-1a6a1cef.js";import"./LinkButton-502bb140.js";const C=i.div`
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
      height: 34rem;
    }

    div {
      padding: 0 1rem;

      img {
        height: 12rem;
        width: 22rem;
      }
    }
  }

  @media screen and (max-width: 550px) {
    width: 100%;

    div {
      flex-wrap: wrap;

      img {
        max-width: 100%;
      }
    }
  }
`,z=i.div`
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
`,R=i(m.LazyLoadImage)`
  cursor: pointer;
  border-radius: 1rem;

  &:hover {
    outline: 2px solid var(--color-blue-600);
    outline-offset: 3px;
  }
`,k={outline:"2px solid #3563E9",outlineOffset:"3px"};function D({thumbnail:n,images:r}){const[s,t]=u.useState(n);function a(o){t(o)}return e.jsxs(C,{children:[e.jsx(m.LazyLoadImage,{src:s,effect:"blur"}),e.jsx(z,{children:r==null?void 0:r.map(o=>e.jsx(R,{src:o,onClick:()=>a(o),style:o===s?k:{},effect:"blur"},o))})]})}const I=i.div`
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
`,H=i.p`
  font-size: 1.7rem;
  color: #596780;
  line-height: 4rem;
`;function L({capacity:n,category:r,tankCapacity:s,steering:t,description:a}){return e.jsxs(e.Fragment,{children:[e.jsx(H,{children:a}),e.jsxs(I,{children:[e.jsx("span",{children:"Type of Car"}),e.jsx("span",{children:r}),e.jsx("span",{children:"Capacity"}),e.jsxs("span",{children:[n," People"]}),e.jsx("span",{children:"Steering"}),e.jsx("span",{children:t?"Automatic":"Manual"}),e.jsx("span",{children:"Gasoline"}),e.jsxs("span",{children:[s,"L"]})]})]})}const E="/assets/user 1-83adfd53.png",N="/assets/user 2-f7d7feba.png",P=(n,r="en-US")=>new Date(n).toLocaleDateString(r,{day:"numeric",month:"short",year:"numeric"}),F=i.article`
  margin: 2rem 0;
`,W=i.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,A=i.div`
  display: flex;
  gap: 2rem;
`,B=i.h5`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-black);
  text-transform: capitalize;

  @media screen and (max-width: 550px) {
    font-size: 1.6rem;
  }
`,T=i.span`
  font-size: 1.4rem;
  margin-top: 1rem;
  color: var(--color-grey-400);
  font-weight: 500;

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`,U=i.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,M=i.time`
  color: var(--color-grey-400);
  font-size: 1.4rem;
  font-weight: 500;

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`,O=i.p`
  color: #596780;
  font-size: 1.4rem;
  width: 94%;
  margin-left: auto;
  padding: 1.5rem 0;
  line-height: 2.8rem;

  @media screen and (max-width: 975px) {
    width: 88%;
  }

  @media screen and (max-width: 550px) {
    max-width: 82%;
    font-size: 1.2rem;
    color: var(--color-grey-400);
  }
`;function $({review:n}){const{id:r,comment:s,date:t,userName:a,userRole:o}=n,f=r%2===0?N:E;return e.jsxs(F,{children:[e.jsxs(W,{children:[e.jsxs(A,{children:[e.jsx(m.LazyLoadImage,{src:f,alt:a}),e.jsxs("div",{children:[e.jsx(B,{children:a}),e.jsx(T,{children:o})]})]}),e.jsx(U,{children:e.jsx(M,{children:P(t)})})]}),e.jsx(O,{children:s})]})}const G=i.button`
  color: #3563e9;
  font-size: 1.6rem;
  text-transform: capitalize;
  font-weight: 600;
  background: none;
  border: none;
`;function q({children:n,onClick:r}){return e.jsx(G,{onClick:r,children:n})}const J=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;function K({onClick:n}){return e.jsx(J,{children:e.jsx(q,{onClick:()=>n(5),children:"Show more"})})}const Q=i.header`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
`,V=i.span`
  display: inline-flex;
  background-color: var(--color-blue-800);
  width: 4.4rem;
  height: 2.8rem;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-weight: 700;
  font-size: 1.4rem;
  border-radius: 0.5rem;
`;function X({totalReviews:n}){return e.jsxs(Q,{children:[e.jsx(j,{as:"h4",color:"black",children:"Reviews"}),e.jsx(V,{children:n})]})}const Y=i.section`
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 1rem;
  width: 98%;
  margin: 2rem auto;
`;function Z(){const[n,r]=u.useState(2),s=t=>{r(t)};return e.jsxs(Y,{children:[e.jsx(X,{totalReviews:c.length}),c.slice(0,n).map(t=>e.jsx($,{review:t},t.id)),c.length!==n&&e.jsx(K,{onClick:s})]})}const _=i.article`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  @media screen and (max-width: 990px) {
    padding: 1rem;
    gap: 1rem;
    flex-direction: column;
  }
`,ee=i.div`
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
`;function re(){const{isLoading:n,carData:r}=b(),{isLoading:s,cars:t}=w();return n?e.jsx(d,{}):r?e.jsxs(e.Fragment,{children:[e.jsxs(_,{children:[e.jsx(D,{thumbnail:r.images.at(0),images:r.images}),e.jsxs(ee,{children:[e.jsx(y,{title:r.name,subtitle:"rating + 2 Reviewers",children:e.jsx(v,{carData:r})}),e.jsx(L,{capacity:r.capacity,category:r.category,steering:r.automatic,tankCapacity:r.tankCapacity,description:`NISMO has become the embodiment of Nissan's outstanding
          performance, inspired by the most unforgiving proving ground, the
          race track.`}),e.jsx(S,{link:`/payment/${r.id}`,pricePerDay:r.pricePerDay,btnSize:"medium"})]})]}),e.jsx(Z,{}),e.jsx(p,{title:"Recent Cars",titleColor:"grey",titleType:"h4",link:"/cars"}),e.jsxs(x,{children:[s&&e.jsx(d,{}),t&&(t==null?void 0:t.length)<1&&e.jsx(l,{resource:"cars"}),t==null?void 0:t.slice(0,5).map(a=>e.jsx(g,{children:e.jsx(h,{carData:a})},a.id))]}),e.jsx(p,{title:"Recommended Cars",titleColor:"grey",titleType:"h4",link:"/cars"}),e.jsxs(x,{children:[s&&e.jsx(d,{}),t&&(t==null?void 0:t.length)<1&&e.jsx(l,{resource:"cars"}),t==null?void 0:t.slice(5,10).map(a=>e.jsx(g,{children:e.jsx(h,{carData:a})},a.id))]})]}):e.jsx(l,{resource:"Car was not found"})}const te=i.div`
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
`;function ce(){return e.jsx(e.Fragment,{children:e.jsx(te,{children:e.jsx(re,{})})})}export{ce as default};

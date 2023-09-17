import{s as i,r as g,j as e,w as m,x as y,y as w,H as v,S as d}from"./index-1f0434a0.js";import{g as j,u as S,E as c,a as b,B as C,b as R,C as h}from"./Empty-7f62d1c0.js";import{H as p,S as x,a as u}from"./SwiperComponent-674927a5.js";import"./LinkButton-46a20992.js";const k=i.div`
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
`,I=i.div`
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
`,D=i(m.LazyLoadImage)`
  cursor: pointer;
  border-radius: 1rem;

  &:hover {
    outline: 2px solid var(--color-blue-600);
    outline-offset: 3px;
  }
`,z={outline:"2px solid #3563E9",outlineOffset:"3px"};function M({thumbnail:a,images:r}){const[n,t]=g.useState(a);function s(o){t(o)}return e.jsxs(k,{children:[e.jsx(m.LazyLoadImage,{src:n,effect:"blur"}),e.jsx(I,{children:r==null?void 0:r.map(o=>e.jsx(D,{src:o,onClick:()=>s(o),style:o===n?z:{},effect:"blur"},o))})]})}const E=i.div`
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
`,N=i.p`
  font-size: 1.7rem;
  color: #596780;
  line-height: 4rem;
`;function A({capacity:a,category:r,tankCapacity:n,steering:t,description:s}){return e.jsxs(e.Fragment,{children:[e.jsx(N,{children:s}),e.jsxs(E,{children:[e.jsx("span",{children:"Type of Car"}),e.jsx("span",{children:r}),e.jsx("span",{children:"Capacity"}),e.jsxs("span",{children:[a," People"]}),e.jsx("span",{children:"Steering"}),e.jsx("span",{children:t?"Automatic":"Manual"}),e.jsx("span",{children:"Gasoline"}),e.jsxs("span",{children:[n,"L"]})]})]})}function L(){const{carId:a}=y(),{isLoading:r,data:n}=w({queryFn:()=>j(a),queryKey:[`car-${a}`]});return{isLoading:r,carData:n}}const T="/assets/user 1-83adfd53.png",H="/assets/user 2-f7d7feba.png",O=(a,r="en-US")=>new Date(a).toLocaleDateString(r,{day:"numeric",month:"short",year:"numeric"}),W=i.article`
  margin: 2rem 0;
`,B=i.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,P=i.div`
  display: flex;
  gap: 2rem;
`,F=i.h5`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-black);
  text-transform: capitalize;

  @media screen and (max-width: 550px) {
    font-size: 1.6rem;
  }
`,G=i.span`
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
`,$=i.time`
  color: var(--color-grey-400);
  font-size: 1.4rem;
  font-weight: 500;

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`,q=i.p`
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
`;function K({review:a}){const{id:r,comment:n,date:t,userName:s,userRole:o}=a,f=r%2===0?H:T;return e.jsxs(W,{children:[e.jsxs(B,{children:[e.jsxs(P,{children:[e.jsx(m.LazyLoadImage,{src:f,alt:s}),e.jsxs("div",{children:[e.jsx(F,{children:s}),e.jsx(G,{children:o})]})]}),e.jsx(U,{children:e.jsx($,{children:O(t)})})]}),e.jsx(q,{children:n})]})}const Q=i.button`
  color: #3563e9;
  font-size: 1.6rem;
  text-transform: capitalize;
  font-weight: 600;
  background: none;
  border: none;
`;function J({children:a,onClick:r}){return e.jsx(Q,{onClick:r,children:a})}const V=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;function X({onClick:a}){return e.jsx(V,{children:e.jsx(J,{onClick:()=>a(5),children:"Show more"})})}const Y=i.header`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
`,Z=i.span`
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
`;function _({totalReviews:a}){return e.jsxs(Y,{children:[e.jsx(v,{as:"h4",color:"black",children:"Reviews"}),e.jsx(Z,{children:a})]})}const l=[{id:1,userImage:"../assets/user 1.png",userName:"Alex Stanton",userRole:"CEO at Bukalapak",date:"Sun Sep 17 2023 08:19:35 GMT+0330",comment:"We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable acilities. In addition, the service provided by the officers is also very friendly and very polite."},{id:2,userImage:"../assets/user 2.png",userName:"Skylar Dias",userRole:"CEO at Amazon",date:"Sun Sep 16 2023 08:19:35 GMT+0330",comment:"We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite."},{id:3,userImage:"../assets/user 1.png",userName:"Alex Stanton",userRole:"CEO at Bukalapak",date:"Sun Sep 17 2023 08:19:35 GMT+0330",comment:"We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable acilities. In addition, the service provided by the officers is also very friendly and very polite."},{id:4,userImage:"../assets/user 2.png",userName:"Skylar Dias",userRole:"CEO at Amazon",date:"Sun Sep 16 2023 08:19:35 GMT+0330",comment:"Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite."},{id:5,userImage:"../assets/user 1.png",userName:"Alex Stanton",userRole:"CEO at Bukalapak",date:"Sun Sep 17 2023 08:19:35 GMT+0330",comment:"Morent has a low price and also a large variety of cars with good and comfortable acilities. In addition, the service provided by the officers is also very friendly and very polite."}],ee=i.section`
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 1rem;
  width: 98%;
  margin: 2rem auto;
`;function re(){const[a,r]=g.useState(2),n=t=>{r(t)};return e.jsxs(ee,{children:[e.jsx(_,{totalReviews:l.length}),l.slice(0,a).map(t=>e.jsx(K,{review:t},t.id)),l.length!==a&&e.jsx(X,{onClick:n})]})}const te=i.article`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  @media screen and (max-width: 990px) {
    padding: 1rem;
    gap: 1rem;
    flex-direction: column;
  }
`,ae=i.div`
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
`;function ie(){const{isLoading:a,carData:r}=L(),{isLoading:n,cars:t}=S();return a?e.jsx(d,{}):r?e.jsxs(e.Fragment,{children:[e.jsxs(te,{children:[e.jsx(M,{thumbnail:r.images.at(0),images:r.images}),e.jsxs(ae,{children:[e.jsx(b,{title:r.name,subtitle:"rating + 2 Reviewers",children:e.jsx(C,{carData:r})}),e.jsx(A,{capacity:r.capacity,category:r.category,steering:r.automatic,tankCapacity:r.tankCapacity,description:`NISMO has become the embodiment of Nissan's outstanding
          performance, inspired by the most unforgiving proving ground, the
          race track.`}),e.jsx(R,{link:`/payment/${r.id}`,pricePerDay:r.pricePerDay,btnSize:"medium"})]})]}),e.jsx(re,{}),e.jsx(p,{title:"Recent Cars",titleColor:"grey",titleType:"h4",link:"/cars"}),e.jsxs(x,{children:[n&&e.jsx(d,{}),t&&(t==null?void 0:t.length)<1&&e.jsx(c,{resource:"cars"}),t==null?void 0:t.slice(0,7).map(s=>e.jsx(u,{children:e.jsx(h,{carData:s})},s.id))]}),e.jsx(p,{title:"Recommended Cars",titleColor:"grey",titleType:"h4",link:"/cars"}),e.jsxs(x,{children:[n&&e.jsx(d,{}),t&&(t==null?void 0:t.length)<1&&e.jsx(c,{resource:"cars"}),t==null?void 0:t.slice(6,12).map(s=>e.jsx(u,{children:e.jsx(h,{carData:s})},s.id))]})]}):e.jsx(c,{resource:"Car was not found"})}const ne=i.div`
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
`;function le(){return e.jsx(e.Fragment,{children:e.jsx(ne,{children:e.jsx(ie,{})})})}export{le as default};

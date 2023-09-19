import{s as i,n,j as e,L as c,B as p,S as s,R as g}from"./index-f9ecd467.js";import{H as d,S as f,a as y}from"./SwiperComponent-5b7c8387.js";import{u as j,C as o}from"./useCars-01743001.js";import{E as l}from"./Empty-c1424c6d.js";import"./LinkButton-90706ca1.js";const x=i.article`
  position: relative;
  width: 50%;
  height: 36rem;
  padding: 1.5rem;
  margin: 2rem 2.5rem;
  border-radius: 1rem;

  ${r=>r.type==="adTypeA"&&n`
      background-image: repeating-radial-gradient(
        circle at bottom left,
        #54a6ff,
        #54a6ff 30px,
        #90c6ff 20px,
        #90c6ff 40px
      );
    `}

  ${r=>r.type==="adTypeB"&&n`
      background-color: #3563e9;

      @media screen and (max-width: 975px) {
        display: none;
      }
    `}

  @media screen and (max-width: 975px) {
    width: 100%;
    height: max-content;
  }

  @media screen and (min-width: 1100) {
    max-width: 80rem;
  }
`,u=i.div`
  display: flex;
  flex-direction: column;
  color: white;
  height: 100%;
  width: 45%;
  gap: 2rem;

  @media screen and (max-width: 975px) {
    width: 100%;
  }
`,w=i.img`
  position: absolute;
  bottom: 0;
  right: 5%;
  width: 45rem;

  @media screen and (max-width: 1330px) {
    width: 50%;
  }

  @media screen and (max-width: 975px) {
    width: 40%;
  }

  @media screen and (max-width: 550px) {
    display: none;
  }
`,C=i.p`
  font-size: 1.5rem;

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`;x.defaultProps={type:"adTypeA"};const m=({type:r,image:a,description:t,title:h})=>e.jsxs(x,{type:r,children:[e.jsxs(u,{children:[e.jsx("h2",{style:{fontSize:"3.2rem",fontWeight:"500"},children:h}),e.jsx(C,{children:t}),e.jsx(c,{to:"/cars",children:e.jsx(p,{size:"medium",variation:r==="adTypeA"?"primary":"secondary",children:"Rent Car"})})]}),e.jsx(w,{src:a,alt:"sample car"})]}),S="/assets/ad bg 1-a02b24d4.png",b="/assets/ad bg 2-4f8e69a7.png";function v(){return e.jsxs(e.Fragment,{children:[e.jsx(m,{type:"adTypeA",image:S,title:"The Best PlatForm for Car Rental",description:`Ease of doing a car rental safely and reliably. Of course at a low
          price`}),e.jsx(m,{type:"adTypeB",image:b,title:"Easy way to rent a car at a low price",description:`Providing cheap car rental services and safe and comfortable
                facilities.`})]})}const T=i.div`
  margin: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;
  margin-left: auto;

  @media screen and (max-width: 730px) {
    width: 100%;
  }
`,A=i.span`
  color: var(--color-grey-400);
  font-size: 1.4rem;
`;function z({numOfCars:r}){return e.jsxs(T,{children:[e.jsx(c,{to:"/cars",children:e.jsx(p,{size:"large",variation:"primary",children:"Show more car"})}),e.jsxs(A,{children:[r," Cars"]})]})}const B=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  justify-items: center;
  grid-auto-flow: row;
  column-gap: 1rem;
  row-gap: 3rem;
`;function k(){const{isLoading:r,cars:a}=j();return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"popular cars",titleColor:"grey",titleType:"h4",link:"/cars"}),e.jsxs(f,{children:[r&&e.jsx(s,{}),a&&(a==null?void 0:a.length)<1&&e.jsx(l,{resource:"cars"}),a==null?void 0:a.slice(6,12).map(t=>e.jsx(y,{children:e.jsx(o,{carData:t})},t.id))]}),e.jsx("br",{}),e.jsx(d,{title:"recommended cars",titleColor:"grey",titleType:"h4",link:"/cars"}),r&&e.jsx(s,{}),!r&&a&&e.jsxs(e.Fragment,{children:[a&&(a==null?void 0:a.length)<1&&e.jsx(l,{resource:"cars"}),e.jsx(B,{children:a==null?void 0:a.slice(0,8).map(t=>e.jsx(o,{carData:t,type:"typeB"},t.id))}),e.jsx(z,{numOfCars:a==null?void 0:a.length})]})]})}function H(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{type:"vertical",children:e.jsx(v,{})}),e.jsx(k,{})]})}export{H as default};

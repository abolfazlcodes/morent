import{u as L,a as v,l as S,c,s as l,j as e,e as k,n as C,G as W,r as F,H as x,B as G,d as E}from"./index-8db93623.js";import{u as b,a as P,F as $}from"./Form-2f8477f7.js";import{I as g,S as p}from"./SpinnerMini-41a71645.js";import{F as u}from"./FormRowVertical-b0b5457c.js";import{L as A}from"./LinkButton-502bb140.js";function B(){const o=L(),n=v(),{isLoading:s,mutate:i}=b({mutationFn:r=>S(r),onSuccess:r=>{c.success(`Login successful. Welcome back ${r.user.email}`),o.setQueryData(["user"],r.user),n("/",{replace:!0})},onError:r=>{console.log(r),c.error("Provided email or password are incorrect")}});return{isLoading:s,login:i}}const I=l.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;function M({children:o}){return e.jsx(I,{children:o})}function q(){const{isLoading:o,mutate:n}=b({mutationFn:k,onSuccess:()=>{c.success("Login successful. Welcome back ")},onError:s=>{console.log(s),c.error("Something went wrong! Please try again")}});return{isLoading:o,loginWithGithub:n}}const z=l.button`
  border: none;
  display: inline-flex;
  height: 4rem;
  width: 7rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 2.2rem;
  box-shadow: var(--shadow-md);
  border-radius: 1rem;
  background-color: var(--color-white);

  ${o=>o.color&&C`
      color: ${o.color};
    `}

  &:disabled {
    background-color: var(--color-border);
    cursor: not-allowed;
  }
`;function H({children:o,color:n,onclick:s}){return e.jsx(z,{onClick:s,color:n,children:o})}function N(o){return W({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]})(o)}function Q(){var d,m;const{formState:{errors:o},handleSubmit:n,reset:s,register:i,setFocus:r}=P(),{isLoading:a,login:j}=B(),{isLoading:t,loginWithGithub:f}=q(),y=w=>{j(w),s()};return F.useEffect(()=>{r("email")},[r]),e.jsxs($,{type:"regular",onSubmit:n(y),children:[e.jsx(u,{label:"Email address",error:(d=o.email)==null?void 0:d.message,children:e.jsx(g,{type:"email",id:"email",autoComplete:"username",placeholder:"john@doe.com",...i("email",{required:"Please enter your email",pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,message:"Incorrect email format. Please enter a valid email address"}}),disabled:a||t})}),e.jsx(u,{label:"Password",error:(m=o.password)==null?void 0:m.message,children:e.jsx(g,{type:"password",id:"password",autoComplete:"current-password",placeholder:"Your password",...i("password",{required:"Please enter your password"}),disabled:a||t})}),e.jsx(x,{as:"h6",color:"grey",children:"Login with"}),e.jsxs(M,{children:[t&&e.jsx(p,{}),!t&&e.jsx(H,{color:"#1A202C",onclick:f,children:e.jsx(N,{})})]}),e.jsx(u,{children:e.jsx(G,{size:"large",variation:"primary",disabled:a,children:!a||!t?"Login":e.jsx(p,{})})})]})}const R=l.main`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`,h=l.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;function K(){return e.jsxs(R,{children:[e.jsxs(h,{children:[e.jsx(E,{}),e.jsx(x,{as:"h4",color:"black",children:"Welcome back! Log in to your account"})]}),e.jsx(Q,{}),e.jsx(h,{children:e.jsx(A,{to:"/signup",children:"New to Morent? Create your account"})})]})}export{K as default};

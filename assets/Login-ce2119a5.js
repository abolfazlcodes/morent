import{u as h,b as f,c as u,r as y,j as e,B as w,s as p,d as b,H as L}from"./index-2e3bcb71.js";import{u as v,l as F,a as S,F as C,I as d,S as k}from"./SpinnerMini-cd925f92.js";import{F as i}from"./FormRowVertical-1126e504.js";import{L as E}from"./LinkButton-bb3202f8.js";import"./supabase-1ea59f02.js";function P(){const s=h(),t=f(),{isLoading:n,mutate:o}=v({mutationFn:r=>F(r),onSuccess:r=>{u.success(`Login successful. Welcome back ${r.user.email}`),s.setQueryData(["user"],r.user),t("/",{replace:!0})},onError:r=>{console.log(r),u.error("Provided email or password are incorrect")}});return{isLoading:n,login:o}}function q(){var l,c;const{formState:{errors:s},handleSubmit:t,reset:n,register:o,setFocus:r}=S(),{isLoading:a,login:g}=P(),x=j=>{g(j),n()};return y.useEffect(()=>{r("email")},[r]),e.jsxs(C,{type:"regular",onSubmit:t(x),children:[e.jsx(i,{label:"Email address",error:(l=s.email)==null?void 0:l.message,children:e.jsx(d,{type:"email",id:"email",autoComplete:"username",placeholder:"john@doe.com",...o("email",{required:"Please enter your email",pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,message:"Incorrect email format. Please enter a valid email address"}}),disabled:a})}),e.jsx(i,{label:"Password",error:(c=s.password)==null?void 0:c.message,children:e.jsx(d,{type:"password",id:"password",autoComplete:"current-password",placeholder:"Your password",...o("password",{required:"Please enter your password"}),disabled:a})}),e.jsx(i,{children:e.jsx(w,{size:"large",variation:"primary",disabled:a,children:a?e.jsx(k,{}):"Login"})})]})}const B=p.main`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`,m=p.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;function N(){return e.jsxs(B,{children:[e.jsxs(m,{children:[e.jsx(b,{}),e.jsx(L,{as:"h4",color:"black",children:"Welcome back! Log in to your account"})]}),e.jsx(q,{}),e.jsx(m,{children:e.jsx(E,{to:"/signup",children:"New to Morent? Create your account"})})]})}export{N as default};

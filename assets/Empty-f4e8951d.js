import{e as $,f as E,m as J,o as T,q as P,t as X,v as Y,w as _,x as U,y as ee,h as R,r as x,u as te,z as se,j as r,A as G,s as u,n as v,C as re,D as ie,H as ne,L as ae,B as ce}from"./index-443b1b67.js";import{s as le,u as oe,a as ue}from"./supabase-ebb030f2.js";class he extends ${constructor(e,s){super(),this.client=e,this.options=s,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(s)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),M(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return I(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return I(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,s){const i=this.options,c=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),E(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const n=this.hasListeners();n&&L(this.currentQuery,c,this.options,i)&&this.executeFetch(),this.updateResult(s),n&&(this.currentQuery!==c||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const a=this.computeRefetchInterval();n&&(this.currentQuery!==c||this.options.enabled!==i.enabled||a!==this.currentRefetchInterval)&&this.updateRefetchInterval(a)}getOptimisticResult(e){const s=this.client.getQueryCache().build(this.client,e),i=this.createResult(s,e);return fe(this,i,e)&&(this.currentResult=i,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),i}getCurrentResult(){return this.currentResult}trackResult(e){const s={};return Object.keys(e).forEach(i=>{Object.defineProperty(s,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),e[i])})}),s}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...s}={}){return this.fetch({...s,meta:{refetchPage:e}})}fetchOptimistic(e){const s=this.client.defaultQueryOptions(e),i=this.client.getQueryCache().build(this.client,s);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,s))}fetch(e){var s;return this.executeFetch({...e,cancelRefetch:(s=e.cancelRefetch)!=null?s:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let s=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(s=s.catch(J)),s}updateStaleTimeout(){if(this.clearStaleTimeout(),T||this.currentResult.isStale||!P(this.options.staleTime))return;const s=X(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},s)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(T||this.options.enabled===!1||!P(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||Y.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,s){const i=this.currentQuery,c=this.options,n=this.currentResult,a=this.currentResultState,l=this.currentResultOptions,d=e!==i,f=d?e.state:this.currentQueryInitialState,h=d?this.currentResult:this.previousQueryResult,{state:o}=e;let{dataUpdatedAt:b,error:B,errorUpdatedAt:F,fetchStatus:g,status:m}=o,O=!1,A=!1,y;if(s._optimisticResults){const p=this.hasListeners(),Q=!p&&M(e,s),W=p&&L(e,i,s,c);(Q||W)&&(g=_(e.options.networkMode)?"fetching":"paused",b||(m="loading")),s._optimisticResults==="isRestoring"&&(g="idle")}if(s.keepPreviousData&&!o.dataUpdatedAt&&h!=null&&h.isSuccess&&m!=="error")y=h.data,b=h.dataUpdatedAt,m=h.status,O=!0;else if(s.select&&typeof o.data<"u")if(n&&o.data===(a==null?void 0:a.data)&&s.select===this.selectFn)y=this.selectResult;else try{this.selectFn=s.select,y=s.select(o.data),y=U(n==null?void 0:n.data,y,s),this.selectResult=y,this.selectError=null}catch(p){this.selectError=p}else y=o.data;if(typeof s.placeholderData<"u"&&typeof y>"u"&&m==="loading"){let p;if(n!=null&&n.isPlaceholderData&&s.placeholderData===(l==null?void 0:l.placeholderData))p=n.data;else if(p=typeof s.placeholderData=="function"?s.placeholderData():s.placeholderData,s.select&&typeof p<"u")try{p=s.select(p),this.selectError=null}catch(Q){this.selectError=Q}typeof p<"u"&&(m="success",y=U(n==null?void 0:n.data,p,s),A=!0)}this.selectError&&(B=this.selectError,y=this.selectResult,F=Date.now(),m="error");const j=g==="fetching",w=m==="loading",S=m==="error";return{status:m,fetchStatus:g,isLoading:w,isSuccess:m==="success",isError:S,isInitialLoading:w&&j,data:y,dataUpdatedAt:b,error:B,errorUpdatedAt:F,failureCount:o.fetchFailureCount,failureReason:o.fetchFailureReason,errorUpdateCount:o.errorUpdateCount,isFetched:o.dataUpdateCount>0||o.errorUpdateCount>0,isFetchedAfterMount:o.dataUpdateCount>f.dataUpdateCount||o.errorUpdateCount>f.errorUpdateCount,isFetching:j,isRefetching:j&&!w,isLoadingError:S&&o.dataUpdatedAt===0,isPaused:g==="paused",isPlaceholderData:A,isPreviousData:O,isRefetchError:S&&o.dataUpdatedAt!==0,isStale:k(e,s),refetch:this.refetch,remove:this.remove}}updateResult(e){const s=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,E(i,s))return;this.currentResult=i;const c={cache:!0},n=()=>{if(!s)return!0;const{notifyOnChangeProps:a}=this.options,l=typeof a=="function"?a():a;if(l==="all"||!l&&!this.trackedProps.size)return!0;const d=new Set(l??this.trackedProps);return this.options.useErrorBoundary&&d.add("error"),Object.keys(this.currentResult).some(f=>{const h=f;return this.currentResult[h]!==s[h]&&d.has(h)})};(e==null?void 0:e.listeners)!==!1&&n()&&(c.listeners=!0),this.notify({...c,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const s=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(s==null||s.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const s={};e.type==="success"?s.onSuccess=!e.manual:e.type==="error"&&!ee(e.error)&&(s.onError=!0),this.updateResult(s),this.hasListeners()&&this.updateTimers()}notify(e){R.batch(()=>{if(e.onSuccess){var s,i,c,n;(s=(i=this.options).onSuccess)==null||s.call(i,this.currentResult.data),(c=(n=this.options).onSettled)==null||c.call(n,this.currentResult.data,null)}else if(e.onError){var a,l,d,f;(a=(l=this.options).onError)==null||a.call(l,this.currentResult.error),(d=(f=this.options).onSettled)==null||d.call(f,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(({listener:h})=>{h(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function de(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function M(t,e){return de(t,e)||t.state.dataUpdatedAt>0&&I(t,e,e.refetchOnMount)}function I(t,e,s){if(e.enabled!==!1){const i=typeof s=="function"?s(t):s;return i==="always"||i!==!1&&k(t,e)}return!1}function L(t,e,s,i){return s.enabled!==!1&&(t!==e||i.enabled===!1)&&(!s.suspense||t.state.status!=="error")&&k(t,s)}function k(t,e){return t.isStaleByTime(e.staleTime)}function fe(t,e,s){return s.keepPreviousData?!1:s.placeholderData!==void 0?e.isPlaceholderData:!E(t.getCurrentResult(),e)}const N=x.createContext(!1),pe=()=>x.useContext(N);N.Provider;function ye(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}const me=x.createContext(ye()),xe=()=>x.useContext(me),Ce=(t,e)=>{(t.suspense||t.useErrorBoundary)&&(e.isReset()||(t.retryOnMount=!1))},ve=t=>{x.useEffect(()=>{t.clearReset()},[t])},ge=({result:t,errorResetBoundary:e,useErrorBoundary:s,query:i})=>t.isError&&!e.isReset()&&!t.isFetching&&le(s,[t.error,i]),Re=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},be=(t,e)=>t.isLoading&&t.isFetching&&!e,je=(t,e,s)=>(t==null?void 0:t.suspense)&&be(e,s),we=(t,e,s)=>e.fetchOptimistic(t).then(({data:i})=>{t.onSuccess==null||t.onSuccess(i),t.onSettled==null||t.onSettled(i,null)}).catch(i=>{s.clearReset(),t.onError==null||t.onError(i),t.onSettled==null||t.onSettled(void 0,i)});function Se(t,e){const s=te({context:t.context}),i=pe(),c=xe(),n=s.defaultQueryOptions(t);n._optimisticResults=i?"isRestoring":"optimistic",n.onError&&(n.onError=R.batchCalls(n.onError)),n.onSuccess&&(n.onSuccess=R.batchCalls(n.onSuccess)),n.onSettled&&(n.onSettled=R.batchCalls(n.onSettled)),Re(n),Ce(n,c),ve(c);const[a]=x.useState(()=>new e(s,n)),l=a.getOptimisticResult(n);if(oe(x.useCallback(d=>{const f=i?()=>{}:a.subscribe(R.batchCalls(d));return a.updateResult(),f},[a,i]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),x.useEffect(()=>{a.setOptions(n,{listeners:!1})},[n,a]),je(n,l,i))throw we(n,a,c);if(ge({result:l,errorResetBoundary:c,useErrorBoundary:n.useErrorBoundary,query:a.getCurrentQuery()}))throw l.error;return n.notifyOnChangeProps?l:a.trackResult(l)}function Qe(t,e,s){const i=se(t,e,s);return Se(i,he)}const D=t=>r.jsx("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:r.jsx("path",{d:"M22.34 9.33L20.34 8.33C19.97 8.15 19.51 8.29 19.33 8.66C19.14 9.04 19.29 9.49 19.66 9.67L21.25 10.46V15.25L17.5 15.26V5C17.5 3 16.16 2 14.5 2H6.5C4.84 2 3.5 3 3.5 5V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19C19.41 22.75 19.75 22.41 19.75 22C19.75 21.59 19.41 21.25 19 21.25H17.5V16.76L22 16.75C22.42 16.75 22.75 16.41 22.75 16V10C22.75 9.72 22.59 9.46 22.34 9.33ZM6 6.89C6 5.5 6.85 5 7.89 5H13.12C14.15 5 15 5.5 15 6.89V8.12C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89ZM6.5 12.25H9.5C9.91 12.25 10.25 12.59 10.25 13C10.25 13.41 9.91 13.75 9.5 13.75H6.5C6.09 13.75 5.75 13.41 5.75 13C5.75 12.59 6.09 12.25 6.5 12.25Z",fill:"#90A3BF"})}),H=t=>r.jsxs("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[r.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.53 2 12 2Z",fill:"#90A3BF"}),r.jsx("rect",{x:4,y:4,width:16,height:16,rx:8,fill:"white"}),r.jsx("path",{d:"M12 6C8.688 6 6 8.688 6 12C6 15.312 8.688 18 12 18C15.312 18 18 15.312 18 12C18 8.688 15.318 6 12 6Z",fill:"#90A3BF"}),r.jsx("rect",{x:8,y:8,width:8,height:8,rx:4,fill:"white"}),r.jsx("rect",{x:11,y:17,width:2,height:4,fill:"#90A3BF"}),r.jsx("rect",{x:17,y:11,width:4,height:2,fill:"#90A3BF"}),r.jsx("rect",{x:3,y:11,width:4,height:2,fill:"#90A3BF"})]}),V=t=>r.jsxs("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[r.jsx("path",{d:"M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z",fill:"#90A3BF"}),r.jsx("path",{d:"M14.08 14.15C11.29 12.29 6.73996 12.29 3.92996 14.15C2.65996 15 1.95996 16.15 1.95996 17.38C1.95996 18.61 2.65996 19.75 3.91996 20.59C5.31996 21.53 7.15996 22 8.99996 22C10.84 22 12.68 21.53 14.08 20.59C15.34 19.74 16.04 18.6 16.04 17.36C16.03 16.13 15.34 14.99 14.08 14.15Z",fill:"#90A3BF"}),r.jsx("path",{d:"M19.9901 7.34001C20.1501 9.28001 18.7701 10.98 16.8601 11.21C16.8501 11.21 16.8501 11.21 16.8401 11.21H16.8101C16.7501 11.21 16.6901 11.21 16.6401 11.23C15.6701 11.28 14.7801 10.97 14.1101 10.4C15.1401 9.48001 15.7301 8.10001 15.6101 6.60001C15.5401 5.79001 15.2601 5.05001 14.8401 4.42001C15.2201 4.23001 15.6601 4.11001 16.1101 4.07001C18.0701 3.90001 19.8201 5.36001 19.9901 7.34001Z",fill:"#90A3BF"}),r.jsx("path",{d:"M21.99 16.59C21.91 17.56 21.29 18.4 20.25 18.97C19.25 19.52 17.99 19.78 16.74 19.75C17.46 19.1 17.88 18.29 17.96 17.43C18.06 16.19 17.47 15 16.29 14.05C15.62 13.52 14.84 13.1 13.99 12.79C16.2 12.15 18.98 12.58 20.69 13.96C21.61 14.7 22.08 15.63 21.99 16.59Z",fill:"#90A3BF"})]});function Ee(t){const{bookmarks:e}=G(),[s,i]=x.useState(!1);return x.useEffect(()=>{const c=e.find(n=>n.id===t.id);i(!!c)},[e,t.id]),{isBookmarked:s}}const Ie=u.span`
  font-size: 2.2rem;
  cursor: pointer;
  color: var(--color-grey-400);

  ${t=>t.bookmarked&&v`
      color: var(--color-red-800);
    `}
`;function ke({carData:t}){const{isBookmarked:e}=Ee(t),{handleBookmark:s}=G(),i=()=>{s(t)};return r.jsx(Ie,{bookmarked:e,onClick:i,children:e?r.jsx(re,{}):r.jsx(ie,{})})}const Be=u.article`
  width: 32rem;
  height: 36rem;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;

  ${t=>t.type==="typeA"&&v`
      grid-template-rows: 1fr 2fr 1fr 1fr;
    `}

  ${t=>t.type==="typeB"&&v`
      grid-template-rows: 1fr 3fr 1fr;
    `}
  
  @media screen and (max-width: 650px) {
    width: 27rem;
  }
`,Fe=u.header`
  display: flex;
  align-items: start;
  justify-content: space-between;
`,Oe=u.span`
  color: #90a3bf;
  font-size: 1.3rem;
  text-transform: capitalize;
  font-weight: 500;
`,z=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,Z=u.img`
  ${t=>t.type==="typeA"&&v`
      width: 90%;
    `}

  ${t=>t.type==="typeB"&&v`
      width: 100%;
    `}
`,K=u.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;

  ${t=>t.type==="typeB"&&v`
      @media screen and (max-width: 550px) {
        flex-direction: column;
        align-items: start;
        width: 35%;
        height: 70%;
      }

      @media screen and (max-width: 380px) {
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: initial;
      }
    `}
`,C=u.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #90a3bf;
`,Ae=u.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Te=u.span`
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
`,Pe=u.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: #90a3bf;
`,Ue=u.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  @media screen and (max-width: 550px) {
    flex-direction: row;
  }

  @media screen and (max-width: 380px) {
    flex-direction: column;
  }
`,q=u.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70%;
  z-index: 5;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
`,ze=({type:t="typeA",carData:e})=>{const{id:s,automatic:i,capacity:c,category:n,image:a,name:l,pricePerDay:d,tankCapacity:f}=e,h=()=>t==="typeA"?r.jsxs(r.Fragment,{children:[r.jsxs(z,{children:[r.jsx(q,{}),r.jsx(Z,{type:t,src:a,alt:l})]}),r.jsxs(K,{type:t,children:[r.jsxs(C,{children:[r.jsx(D,{}),r.jsxs("span",{children:[f," L"]})]}),r.jsxs(C,{children:[r.jsx(H,{}),r.jsx("span",{children:i?"automatic":"manual"})]}),r.jsxs(C,{children:[r.jsx(V,{}),r.jsxs("span",{children:[c," people"]})]})]})]}):r.jsxs(Ue,{children:[r.jsxs(z,{children:[r.jsx(q,{}),r.jsx(Z,{type:t,src:a,alt:l})]}),r.jsxs(K,{type:t,children:[r.jsxs(C,{children:[r.jsx(D,{}),r.jsxs("span",{children:[f," L"]})]}),r.jsxs(C,{children:[r.jsx(H,{}),r.jsx("span",{children:i?"automatic":"manual"})]}),r.jsxs(C,{children:[r.jsx(V,{}),r.jsxs("span",{children:[c," people"]})]})]})]});return r.jsxs(Be,{type:t,children:[r.jsxs(Fe,{children:[r.jsxs("div",{children:[r.jsx(ne,{as:"h3",color:"black",children:l}),r.jsx(Oe,{children:n})]}),r.jsx(ke,{carData:e})]}),h(),r.jsxs(Ae,{children:[r.jsxs("div",{children:[r.jsxs(Te,{children:["$",d,".00/"]}),r.jsx(Pe,{children:"day"})]}),r.jsx(ae,{to:`/cars/${s}`,children:r.jsx(ce,{size:"small",variation:"primary",children:"Rent now"})})]})]})};async function Me(){const{data:t,error:e}=await ue.from("cars").select("*");if(e)throw new Error(e.message);return t}function Ze(){const{isLoading:t,data:e}=Qe({queryFn:Me,queryKey:["cars"]});return{isLoading:t,cars:e}}const Le=u.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1%.8;
`;function Ke({resource:t}){return r.jsxs(Le,{children:["No ",t," could be found."]})}export{ze as C,Ke as E,Ze as u};

import{a as d,r as o,j as e,B as m}from"./index-D-KWAwIv.js";import{C as I,s as n,T as h,P as x}from"./login-form.module-z98Ptf8z.js";const g="https://tuqfprlolqdwozasturb.supabase.co",b="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1cWZwcmxvbHFkd296YXN0dXJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MDI3MzAsImV4cCI6MjA0NzA3ODczMH0.inEWpMbOf50doEUSLz2mBus1FJirlGvDtrBCJdY3rOU",j=d(g,b);function C(){const[t,i]=o.useState(""),[a,r]=o.useState("");async function l(){console.log("sending to supabase",t,a);const{data:s,error:u}=await j.auth.signInWithPassword({email:t,password:a,options:{emailRedirectTo:"https://example.com/welcome"}});console.log("data",s),console.log("error",u)}const c=s=>{s.preventDefault(),console.log(t,a),l()},p={mx:"auto",p:"md",mt:"md"};return e.jsxs(I,{size:"xs",className:n.container,...p,children:[e.jsx("h1",{children:"Login"}),e.jsxs("form",{onSubmit:c,children:[e.jsx(h,{type:"text",placeholder:"Email",value:t,onChange:s=>i(s.target.value)}),e.jsx(x,{type:"password",placeholder:"Password",value:a,onChange:s=>r(s.target.value)}),e.jsx("div",{className:n.loginbutton,children:e.jsx(m,{type:"submit",children:"Login"})})]})]})}export{C as default};
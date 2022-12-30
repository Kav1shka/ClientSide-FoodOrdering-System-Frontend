import{a as d}from"./axios.91ceb67f.js";import{_ as m,o as n,c as r,a as s,t as p,b as h,w as u,d as i,v as c}from"./index.a7bc1c37.js";const _={mounted(){console.log("component mounted")},data(){return{email:"",password:"",response:"",errors:"",success:""}},methods:{submitForm(){d.post("http://localhost:5000/api/users/login",{email:this.email,password:this.password}).then(e=>{console.log(e),e.data.success,this.response=e,localStorage.setItem("accessToken",e.data.token),router.push({name:"Dashboard"})}).catch(e=>{console.log(e),e.response.data.errors&&(this.errors=e.response.data.errors)}),this.email="",this.password=""},goToSignup(){this.$router.push({name:"SignUp"})}}},w={className:"hero min-h-screen",style:{"background-image":"url('https://wallpaperaccess.com/full/462927.jpg')"}},b=s("div",{className:"hero-overlay bg-opacity-60"},null,-1),g={className:"hero-content flex-col lg:flex-row-reverse"},f={className:"text-center lg:text-left"},v=s("h1",{className:"text-5xl text-white font-bold"},"Login now!",-1),x=s("p",{className:"py-6 text-white"},"food app details can add here!",-1),N=s("hr",null,null,-1),k=s("p",{className:"text-white"},"Don't have an account?",-1),y={key:0,class:"alert alert-error shadow-lg"},S=s("hr",null,null,-1),B=s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"stroke-current flex-shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),D={className:"card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"},T={className:"card-body"},U={className:"form-control"},V=s("label",{className:"label"},[s("span",{className:"label-text"},"Email")],-1),E={className:"form-control"},F=s("label",{className:"label"},[s("span",{className:"label-text"},"Password")],-1),I=s("div",{className:"form-control mt-6"},[s("button",{className:"btn btn-primary",type:"submit"},"SignIn")],-1);function M(e,t,j,C,o,l){return n(),r("div",w,[b,s("div",g,[s("div",f,[v,x,N,k,s("button",{className:"btn btn-primary",onClick:t[0]||(t[0]=a=>l.goToSignup())},"Sign Up"),o.errors?(n(),r("div",y,[s("div",null,[S,B,s("span",null,p(o.errors),1)])])):h("",!0)]),s("form",{onSubmit:t[3]||(t[3]=u((...a)=>l.submitForm&&l.submitForm(...a),["prevent"]))},[s("div",D,[s("div",T,[s("div",U,[V,i(s("input",{type:"email",placeholder:"Email",className:"input input-bordered","onUpdate:modelValue":t[1]||(t[1]=a=>o.email=a)},null,512),[[c,o.email]])]),s("div",E,[F,i(s("input",{type:"password",placeholder:"password",className:"input input-bordered","onUpdate:modelValue":t[2]||(t[2]=a=>o.password=a)},null,512),[[c,o.password]])]),I])])],32)])])}const P=m(_,[["render",M]]);export{P as default};
import{r as x,j as y,c as b}from"./client.CYxVQoYY.js";import"./_commonjsHelpers.1J56E-h6.js";const v=["reply","customercare","support","informer","personalized","notification","subscribe","admin","info","help","marketing","sales","service","contact","billing","webmaster","abuse","hello","team","feedback","enquiries","login","register","signup","update","verify","complaints","media","jobs","careers","resume","hr","intern","talent","blog","press","partner","legal","terms","privacy","security","email","update","beta","alert","payment","invoice","notify"];function w(){return x.useEffect(()=>{console.log("content view loaded"),document.onreadystatechange=function(){document.readyState=="complete"&&_()}},[]),y.jsx("div",{className:"content view"})}async function _(){S(),chrome.runtime.onMessage.addListener(async({action:e,payload:o})=>{if(e==="fetched")console.log("fetched",o),$(o==null?void 0:o.customersInThreadRowPage);else if(e==="customerInfoFetched"){console.log("customer info fetched",o);const s=document.createElement("div");s.classList.add("stripeSidebarContainer"),s.innerHTML=q(o);const n=document.querySelectorAll('[role="navigation"]')[0].parentNode,i=n.childNodes[2];document.querySelector(".stripeSidebarContainer")||n.insertBefore(s,i)}else if(e==="urlChanged"){console.log("url changed",o);const s=document.querySelector(".stripeSidebarContainer");if(s&&s.remove(),await new Promise(n=>setTimeout(n,1e3)),document.querySelector("[data-message-id]")){console.log("message thread page");const n=document.querySelector("[data-message-id] [email].gD").getAttribute("email"),{userCustomersList:i=[]}=await chrome.storage.local.get("userCustomersList");let l=i==null?void 0:i.find(d=>d.email===n);if(!l){const d=document.querySelector("[data-message-id] [email].g2").getAttribute("email");l=i==null?void 0:i.find(t=>t.email===d)}console.log({from:n,userCustomersList:i,matchedCustomer:l}),l&&chrome.runtime.sendMessage({action:"fetchCustomerInfo",payload:{message:"fetch customer info !",matchedCustomer:l}})}else{console.log("thread row page");let i=[...document.querySelectorAll('[role="main"] tbody:nth-child(2) tr')].map(l=>l.querySelector("[email]").getAttribute("email")).filter(l=>!v.some(d=>l.includes(d)));i=[...new Set(i)],console.log("thread row emails collected on page load"),chrome.runtime.sendMessage({action:"fetch",payload:{message:"fetch api !",emails:i}}).catch(()=>{})}}})}function S(){var s;let e=((s=document.querySelector('[aria-label="Show more messages"]'))==null?void 0:s.textContent)||"";console.log({initialTextContent:e});function o(){var i;const n=((i=document.querySelector('[aria-label="Show more messages"]'))==null?void 0:i.textContent)||"";if(n!==e&&(e=n,!document.querySelector("[data-message-id]"))){const l=[...document.querySelectorAll('[role="main"] tbody:nth-child(2) tr')].map(t=>t.querySelector("[email]").getAttribute("email"));let d=l.filter(t=>!v.some(a=>t.includes(a)));d=[...new Set(d)],console.log(l,d),chrome.runtime.sendMessage({action:"fetch",payload:{message:"fetch api !",emails:d}}).catch(()=>{})}}setInterval(o,1e3)}function $(e){e.map(o=>{const s=document.querySelector(`[role='main'] tbody:nth-child(2) tr [email='${o.email}']`);if(s){const n=s.closest("tr");if(n){const i=document.createElement("img");i.classList.add("stripeIcon"),i.src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png",i.style.cssText="width:50px;height:20px;margin-right:10px;",n.querySelector(".stripeIcon")||n.children[4].prepend(i)}}})}function q(e){var o,s,n,i,l,d;return`
    <div class="stripe_ext_sidebar_container" 
      style="width:300px;font-size: .9rem;background-color: rgb(255 255 255); padding: 15px; border-radius: 16px; margin-left: 10px;display:flex;flex-direction: column;gap:1.5rem;">
      <div class="stripe_ext_sidebar_header" style="display: flex;align-items: center;">
        <img style="height: 24px;margin-right: 10px;" 
          src="https://images.ctfassets.net/fzn2n1nzq965/HTTOloNPhisV9P4hlMPNA/cacf1bb88b9fc492dfad34378d844280/Stripe_icon_-_square.svg?q=80&w=1082" style="width: 50px; height: 20px; margin-right: 10px;">
        <div style="font-size:1rem">Stripe Customers</div>
      </div>
      <div class="stripe_ext_customer_acc_info" style="display:flex;flex-direction: column;align-items: center;justify-content: center;gap:.5rem;">
        <p style="font-weight:bold;margin:0"> ${(o=e==null?void 0:e.customerAccInfo)==null?void 0:o.customerName}</p>
        <p style="margin:0">${(s=e==null?void 0:e.customerAccInfo)==null?void 0:s.email}</p>
      </div>
      <div class="stripe_ext_customer_MRR_and_total_paid" style="display: flex;flex-direction:row;justify-content: space-between">
        <div style="display: flex;flex-direction: column;align-items: center;">
          <div style="font-size:1.2rem;font-weight:bold"> $${e==null?void 0:e.totalSpent}</div>
          MRR
        </div>
        <div style="display: flex;flex-direction: column;align-items: center;">
          <div style="font-size:1.2rem;font-weight:bold"> $${e==null?void 0:e.totalSpent}</div>
          Total
        </div>
      </div>
      <div class="stripe_ext_customer_subscription" style="">
        <div style="font-size:1.2rem;font-weight:bold;padding-bottom:.5rem">Active Subscriptions</div>
        <div style="display:flex;flex-direction:column;gap:.5rem">
          ${(n=e==null?void 0:e.subscriptionInfo)==null?void 0:n.map(t=>{var a,p;return`
            <div key="${t.id}" style="gap: 0.5rem;display: flex;flex-direction: column;">
              ${(p=(a=t==null?void 0:t.items)==null?void 0:a.data)==null?void 0:p.map(r=>{var f,g;return`
                <div key="${r.plan.id}" style="display:flex;flex-direction:row;justify-content:space-between;align-items: center;">
                    <div>${r.quantity} x Plan Name</div>
                    <div> $${((f=r.plan)==null?void 0:f.amount)/100}/ ${(g=r.plan)==null?void 0:g.interval}</div> 
              
                </div>
              `}).join("")}
            </div>
          `}).join("")}
        </div>
      </div>
      <div class="stripe_ext_customer_invoices" style="">
        <div style="font-size:1.2rem;font-weight:bold;padding-bottom:.5rem">Invoices</div>
        <div style="display:flex;flex-direction:column;gap:1rem">
          ${(i=e==null?void 0:e.invoiceInfo)==null?void 0:i.map(t=>{var a;return`
            <div key="${t.total}" style="display:flex;justify-content:space-between;align-items: center;">
              <div style="display:flex;flex-direction:column;gap:.2rem">
                <div>$${(t==null?void 0:t.amount_paid)/100}</div>
                <div> ✔ ${t.status}</div>
              </div>
              <div>${C((a=t==null?void 0:t.status_transitions)==null?void 0:a.paid_at)}</div>
       
            </div>
          `}).join("")}
        </div>
      </div>


      <div class="stripe_ext_customer_cards" style="">
        <div style="font-size:1.2rem;font-weight:bold;padding-bottom:.5rem">Cards</div>
        <div style="display:flex;flex-direction:column;gap:1.5rem">
          ${(d=(l=e==null?void 0:e.cards)==null?void 0:l.data)==null?void 0:d.map(t=>`
            <div key="${t.id}" style="display:flex;justify-content:space-between;align-items: center;">
              <div style="display:flex;flex-direction:row">
                <div>${t==null?void 0:t.brand}</div>
                <div> **** **** **** ${t==null?void 0:t.last4}</div>
              </div>
              <div>${t==null?void 0:t.exp_month}/${t==null?void 0:t.exp_year}</div>
      
            </div>
          `).join("")}
        </div>
      </div>


    </div>
  `}function C(e){const o=new Date(e*1e3),s=o.getFullYear(),n=o.getMonth()+1,i=o.getDate();return`${n}/${i}/${s}`}const E="",c=document.createElement("div");c.id="chrome-extension-boilerplate-react-vite-content-view-root";document.body.append(c);const m=document.createElement("div");m.id="shadow-root";const h=c.attachShadow({mode:"open"});h.appendChild(m);const u=document.createElement("style");u.innerHTML=E;h.appendChild(u);b(m).render(y.jsx(w,{}));

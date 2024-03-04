import{r as S,j as u,c as w}from"./client.CYxVQoYY.js";import"./_commonjsHelpers.1J56E-h6.js";const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAzCAMAAADFEyrOAAAAQlBMVEVHcExncuVncuVncuVncuVncuVncuVncuVncuVncuVncuVncuVncuVncuVncuVncuVncuVncuVncuVncuVncuVncuWUhjOTAAAAFXRSTlMAYw5RMvv04YLv0yFYm8Vyq7kXPo7iLbCVAAABf0lEQVQ4y4WV2ZaEIAxE2cMim8r//+qg060GoalHvScEqgKEIC3ArSZjrWJJMivrvY5crK//jHtryiVpbIobewI0yPKSCfGCttwBDilxNVkGMh+EmjJBtjHxQdZQZkgsM2S1U2RRU8Q3H0GCBSOfCFpHWUNhZ05wnUB+EbTjFA2Hj9OOe/g/XXTycTEL3GFwMRwIamSnCKn7PWxEG4J0L3SrcVDFN5Lbkyi+zRt9JUVazxHlegZIq8WDGdho/HbHNo382d21VB6ZGK5CblSnwMWwOMo33F0L34dkfkyb0LY3S5KikV5Sp9SzzNm4L20ps7V2KN1OVWyRGoaAl/OENUiNFB6KTOguWoQhZwPRBfx91XSQXJEatRAFu3rRHC2UTuS8kPZFOEbrHDXt6i9yYnUOJTQHo/gTKaVjgXUY6WgnE0QeQz2pcgzVbySvMyScAf+FJDe5lqsT3xjR3KMA2UsE9QGUrPrfqYJE3futcRuv8mo3iW/rj1freNXaJP4BKWparVxhjooAAAAASUVORK5CYII=",h=["reply","customercare","support","informer","personalized","notification","subscribe","admin","info","help","marketing","sales","service","contact","billing","webmaster","abuse","hello","team","feedback","enquiries","login","register","signup","update","verify","complaints","media","jobs","careers","resume","hr","intern","talent","blog","press","partner","legal","terms","privacy","security","email","update","beta","alert","payment","invoice","notify"];function V(){return S.useEffect(()=>{console.log("content view loaded"),document.onreadystatechange=function(){document.readyState=="complete"&&E()}},[]),u.jsx("div",{className:"content view"})}async function E(){$(),chrome.runtime.onMessage.addListener(async({action:e,payload:o})=>{if(e==="fetched")console.log("fetched",o),_(o==null?void 0:o.customersInThreadRowPage);else if(e==="customerInfoFetched"){console.log("customer info fetched",o);const s=document.createElement("div");s.classList.add("stripeSidebarContainer"),s.innerHTML=T(o);const i=document.querySelectorAll('[role="navigation"]')[0].parentNode,n=i.childNodes[2];document.querySelector(".stripeSidebarContainer")||i.insertBefore(s,n)}else if(e==="urlChanged"){console.log("url changed",o);const s=document.querySelector(".stripeSidebarContainer");if(s&&s.remove(),await new Promise(i=>setTimeout(i,1e3)),document.querySelector("[data-message-id]")){console.log("message thread page");const i=document.querySelector("[data-message-id] [email].gD").getAttribute("email"),{userCustomersList:n=[]}=await chrome.storage.local.get("userCustomersList");let d=n==null?void 0:n.find(l=>l.email===i);if(!d){const l=document.querySelector("[data-message-id] [email].g2").getAttribute("email");d=n==null?void 0:n.find(a=>a.email===l)}console.log({from:i,userCustomersList:n,matchedCustomer:d}),d&&chrome.runtime.sendMessage({action:"fetchCustomerInfo",payload:{message:"fetch customer info !",matchedCustomer:d}})}else{console.log("thread row page");let n=[...document.querySelectorAll('[role="main"] tbody:nth-child(2) tr')].map(d=>d.querySelector("[email]").getAttribute("email")).filter(d=>!h.some(l=>d.includes(l)));n=[...new Set(n)],console.log("thread row emails collected on page load"),chrome.runtime.sendMessage({action:"fetch",payload:{message:"fetch api !",emails:n}}).catch(()=>{})}}})}function $(){var s;let e=((s=document.querySelector('[aria-label="Show more messages"]'))==null?void 0:s.textContent)||"";console.log({initialTextContent:e});function o(){var n;const i=((n=document.querySelector('[aria-label="Show more messages"]'))==null?void 0:n.textContent)||"";if(i!==e&&(e=i,!document.querySelector("[data-message-id]"))){const d=[...document.querySelectorAll('[role="main"] tbody:nth-child(2) tr')].map(a=>a.querySelector("[email]").getAttribute("email"));let l=d.filter(a=>!h.some(m=>a.includes(m)));l=[...new Set(l)],console.log(d,l),chrome.runtime.sendMessage({action:"fetch",payload:{message:"fetch api !",emails:l}}).catch(()=>{})}}setInterval(o,1e3)}function _(e){e.map(o=>{const s=document.querySelector(`[role='main'] tbody:nth-child(2) tr [email='${o.email}']`);if(s){const i=s.closest("tr");if(i){const n=document.createElement("img");n.classList.add("stripeIcon"),n.src=A,n.style.cssText="width:12px;margin-right:10px;",i.querySelector(".stripeIcon")||i.children[4].prepend(n)}}})}function T(e){var o,s,i,n,d,l,a,m;return console.log("hello",e,e==null?void 0:e.oneTimePurchases),alert(`one time purchase no: ${(o=e==null?void 0:e.getOneTimePurchasesChangesResponse)==null?void 0:o.length}`),`
    <div class="stripe_ext_sidebar_container" 
      style="width:300px;font-size: .9rem;background-color: rgb(255 255 255); padding: 15px; border-radius: 16px; margin-left: 10px;display:flex;flex-direction: column;gap:1.5rem;">
      <div class="stripe_ext_sidebar_header" style="display: flex;align-items: center;">
        <img style="height: 24px;margin-right: 10px;" 
          src="https://images.ctfassets.net/fzn2n1nzq965/HTTOloNPhisV9P4hlMPNA/cacf1bb88b9fc492dfad34378d844280/Stripe_icon_-_square.svg?q=80&w=1082" style="width: 50px; height: 20px; margin-right: 10px;">
        <div style="font-size:1rem">Stripe Customers</div>
      </div>
      <div class="stripe_ext_customer_acc_info" style="display:flex;flex-direction: column;align-items: center;justify-content: center;gap:.5rem;">
        <p style="font-weight:bold;margin:0"> ${(s=e==null?void 0:e.customerAccInfo)==null?void 0:s.customerName}</p>
        <p style="margin:0">${(i=e==null?void 0:e.customerAccInfo)==null?void 0:i.email}</p>
      </div>
      <div class="stripe_ext_customer_MRR_and_total_paid" style="display: flex;flex-direction:row;justify-content: space-between">
        <div style="display: flex;flex-direction: column;align-items: center;">
          <div style="font-size:1.2rem;font-weight:bold"> $${e==null?void 0:e.totalSpent}</div>
          MRR
        </div>
        <div style="display: flex;flex-direction: column;align-items: center;">
          <div style="font-size:1.2rem;font-weight:bold"> $${e==null?void 0:e.totalSpent}</div>
          Total Spend
        </div>
      </div>
      <div class="stripe_ext_customer_subscription" style="">
        <div style="font-size:1.2rem;font-weight:bold;padding-bottom:.5rem">Active Subscriptions</div>
        <div style="display:flex;flex-direction:column;gap:.5rem">
          ${(n=e==null?void 0:e.subscriptionInfo)==null?void 0:n.map(t=>{var r,c;return`
            <div key="${t.id}" style="gap: 0.5rem;display: flex;flex-direction: column;">
              ${(c=(r=t==null?void 0:t.items)==null?void 0:r.data)==null?void 0:c.map(p=>{var y,v;return`
                <div key="${p.plan.id}" style="display:flex;flex-direction:row;justify-content:space-between;align-items: center;">
                    <div>${p.quantity} x Plan Name</div>
                    <div> $${((y=p.plan)==null?void 0:y.amount)/100}/ ${(v=p.plan)==null?void 0:v.interval}</div> 
              
                </div>
              `}).join("")}
            </div>
          `}).join("")}
        </div>
      </div>
      <div class="stripe_ext_customer_oneTimePurchase" style="">
        <div style="font-size:1.2rem;font-weight:bold;padding-bottom:.5rem">One Time Purchases</div>
        <div style="display:flex;flex-direction:column;gap:.5rem">
          ${(d=e==null?void 0:e.oneTimePurchases)==null?void 0:d.map(t=>{var r;return`
            <div key="${t.invoiceId}" style="gap: 0.5rem;display: flex;flex-direction: column;">
              ${(r=t==null?void 0:t.items)==null?void 0:r.map(c=>`
                <div style="display:flex;flex-direction:row;justify-content:space-between;align-items: center;">
                    <div>${c.description} </div>
                    <div> $${c.amount}</div> 
              
                </div>
              `).join("")}
            </div>
          `}).join("")}
        </div>
       </div>
      <div class="stripe_ext_customer_invoices" style="">
        <div style="font-size:1.2rem;font-weight:bold;padding-bottom:.5rem">Invoices</div>
        <div style="display:flex;flex-direction:column;gap:1rem">
          ${(l=e==null?void 0:e.invoiceInfo)==null?void 0:l.map(t=>{var r;return`
            <div key="${t.total}" style="display:flex;justify-content:space-between;align-items: center;">
              <div style="display:flex;flex-direction:column;gap:.2rem">
                <div>$${(t==null?void 0:t.amount_paid)/100}</div>
                <div> ✔ ${t.status}</div>
              </div>
              <div>${j((r=t==null?void 0:t.status_transitions)==null?void 0:r.paid_at)}</div>
       
            </div>
          `}).join("")}
        </div>
      </div>


      <div class="stripe_ext_customer_cards" style="">
        <div style="font-size:1.2rem;font-weight:bold;padding-bottom:.5rem">Cards</div>
        <div style="display:flex;flex-direction:column;gap:1.5rem">
          ${(m=(a=e==null?void 0:e.cards)==null?void 0:a.data)==null?void 0:m.map(t=>`
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
  `}function j(e){const o=new Date(e*1e3),s=o.getFullYear(),i=o.getMonth()+1,n=o.getDate();return`${i}/${n}/${s}`}const C="",f=document.createElement("div");f.id="chrome-extension-boilerplate-react-vite-content-view-root";document.body.append(f);const g=document.createElement("div");g.id="shadow-root";const x=f.attachShadow({mode:"open"});x.appendChild(g);const b=document.createElement("style");b.innerHTML=C;x.appendChild(b);w(g).render(u.jsx(V,{}));

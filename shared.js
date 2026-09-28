const P={chat:'<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',instagram:'<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z"/><path d="M17.5 6.5h.01"/>',tiktok:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.500 3c-1.800 0-3 .5-4.500 2-1.500-1.500-2.700-2-4.500-2A5.500 5.500 0 0 0 2 8.500c0 2.300 1.500 4 3 5.500l7 7Z"/>',link:'<path d="M10 13a5 5 0 0 0 7.500.5l3-3a5 5 0 0 0-7-7l-1.700 1.700"/><path d="M14 11a5 5 0 0 0-7.500-.5l-3 3a5 5 0 0 0 7 7l1.700-1.700"/>',eye:'<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.900M16 3.100a4 4 0 0 1 0 7.800"/>',cart:'<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2 2h2l2.700 12.400a2 2 0 0 0 2 1.600h9.800a2 2 0 0 0 2-1.600L22 7H5"/>',chart:'<path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3"/>',arrow:'<path d="M7 7h10v10M7 17 17 7"/>',chev:'<path d="m9 18 6-6-6-6"/>',crown:'<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zM5 20h14"/>',spark:'<path d="M12 3l1.900 5.800L20 10l-6.100 1.200L12 17l-1.900-5.800L4 10l6.100-1.200z"/>'};
const ic=n=>`<svg viewBox="0 0 24 24">${P[n]||''}</svg>`;
const COL={purple:'#a78bfa',green:'#34d399',blue:'#60a5fa',pink:'#f472b6',orange:'#fb923c'};
const ph=(t)=>'data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#2a2545"/><text x="50" y="65" font-size="48" font-family="sans-serif" font-weight="700" fill="#a78bfa" text-anchor="middle">${(t||'?')[0].toUpperCase()}</text></svg>`);
const DEF={name:'Eypiss',bio:'Cuma Manusia Biasa.',avatar:'',bg:'',statusText:'gatauu, pengen beli trukk',badge:'PRO+',
stats:{views:'28.5K',followers:'4.8K',likes:'66.5K',sales:'83+',rank:'840'},
socials:[{type:'chat',url:'#'},{type:'instagram',url:'#'},{type:'tiktok',url:'#'}],
links:[{title:'Discord Server',desc:'Join EYPISS STUDIO Discord server',url:'#',icon:'chat',color:'purple'},{title:'Donation Link',desc:'Support & Donation Link',url:'#',icon:'heart',color:'green'}],
commentsLabel:'Lihat Public Comments',commentsUrl:'#',footer:'Personal profile template · Version 1',password:'admin123'};
const KEY='profil_cfg_v1';let cfg=load(),authed=false,tab='profil';
function load(){try{const s=localStorage.getItem(KEY);if(s)return{...DEF,...JSON.parse(s)}}catch(e){}return JSON.parse(JSON.stringify(DEF))}
function save(){try{localStorage.setItem(KEY,JSON.stringify(cfg))}catch(e){toast('Gagal simpan (penyimpanan penuh?)')}}
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const safe=u=>/^(https?:|mailto:|#)/i.test(u||'')?u:'#';
function toast(m,err){const t=document.getElementById('toast');t.style.background=err?'#f87171':'#22c55e';t.textContent=m;t.classList.add('on');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('on'),1600)}
function card(){const c=cfg,av=c.avatar||ph(c.name);
return `<div class="card"><img class="av" src="${esc(av)}" alt="">
<h1>${esc(c.name)}</h1><p class="bio">${esc(c.bio)}</p>
<div class="ico">${c.socials.slice(0,2).map(s=>ic(s.type)).join('')}</div>
<div class="box st"><img src="${esc(av)}" alt=""><div><b>${esc(c.name)}</b>${c.badge?`<span class="pro">${esc(c.badge)}</span>`:''}<span class="crown">${ic('crown')}</span><small>${esc(c.statusText)}</small></div></div>
<div class="stats"><span>${ic('eye')}${esc(c.stats.views)}</span><span>${ic('users')}${esc(c.stats.followers)}</span><span>${ic('heart')}${esc(c.stats.likes)}</span><span>${ic('cart')}${esc(c.stats.sales)}</span><span>${ic('chart')}${esc(c.stats.rank)}</span></div>
<div class="soc">${c.socials.map(s=>`<a class="box" href="${esc(safe(s.url))}" target="_blank" rel="noopener" aria-label="${esc(s.type)}">${ic(s.type)}</a>`).join('')}</div>
${c.links.map(l=>`<a class="box lk" style="--c:${COL[l.color]||COL.purple}" href="${esc(safe(l.url))}" target="_blank" rel="noopener"><i>${ic(l.icon)}</i><div><b>${esc(l.title)}</b><small>${esc(l.desc)}</small></div>${ic('chev')}</a>`).join('')}
<a class="cm" href="${esc(safe(c.commentsUrl))}" target="_blank" rel="noopener">${ic('chat')}${esc(c.commentsLabel)}${ic('arrow')}</a>
<div class="ft">${ic('spark')}<span>${esc(c.footer)}</span><a href="/admin">· Admin</a></div></div>`}
function bg(){document.body.style.backgroundImage=cfg.bg?`url("${cfg.bg}")`:'radial-gradient(circle at 20% 20%,#2a1b57 0,#07060c 55%)'}
const $=(s,r=document)=>r.querySelector(s);

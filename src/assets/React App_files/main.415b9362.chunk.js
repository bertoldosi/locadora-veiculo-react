(this["webpackJsonpomni-react-app"]=this["webpackJsonpomni-react-app"]||[]).push([[0],{38:function(e,a,t){e.exports=t.p+"static/media/credit-card.6debb8c6.svg"},39:function(e,a,t){e.exports=t.p+"static/media/symbol-defs.34625792.svg"},40:function(e,a,t){e.exports=t.p+"static/media/cartao_app_generico.4314935f.svg"},43:function(e,a,t){e.exports=t(90)},83:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(14),r=t.n(l),o=t(16),i=t(1),s=t(11),u=t(2),m=t(4),d=t.n(m),p=t(3),f=t(8),E=t(9),v=t(35),b=t.n(v),h=t(36),g=t.n(h),y=t(37),k=t.n(y).a.create({baseURL:"https://bkcr8eaeg4.execute-api.us-east-1.amazonaws.com/prod/",ContentType:"application/json",headers:{"x-api-key":"qZMiSefSVz7bBcnfTzuX84Wnl3Qb1vDz3weBhmRa"}}),N=function(e){return null!==e&&""!==e&&void 0!==e};var j=function(){var e=Object(i.c)((function(e){return e}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"uk-navbar uk-navbar-container data-uk-margin"},c.a.createElement("div",{className:"uk-navbar-left"},c.a.createElement("span",{className:"uk-navbar-toggle","data-uk-navbar-toggle-icon":!0,"uk-toggle":"target: #offcanvas-slide"}))),c.a.createElement("div",{id:"offcanvas-slide","data-uk-offcanvas":"overlay: true"},c.a.createElement("div",{className:"uk-offcanvas-bar"},c.a.createElement("button",{className:"uk-offcanvas-close",type:"button","data-uk-close":!0}),c.a.createElement("ul",{className:"uk-nav uk-nav-default"},c.a.createElement("li",null,c.a.createElement("a",{href:"/?cpf=".concat(e.body.cpfCnpj,"&idvarejista=").concat(e.body.idvarejista,"&xapikey=").concat(e.body.xapikey,"&token=").concat(e.body.token)},"Home"),N(e.cliente)&&Object.values(e.cliente).length>=1&&!e.cliente.bloqueado&&c.a.createElement("a",{href:"/cartao-virtual"},"Cart\xe3o Virtual"),N(e.cliente)&&Object.values(e.cliente).length>=1&&!e.cliente.bloqueado&&c.a.createElement("a",{href:"/saldo"},"Saldo"),N(e.cliente)&&Object.values(e.cliente).length>=1&&!e.cliente.bloqueado&&c.a.createElement("a",{href:"/faturas"},"Faturas"),N(e.cliente)&&Object.values(e.cliente).length>=1&&!e.cliente.bloqueado&&c.a.createElement("a",{href:"/meu-cadastro"},"Meu cadastro"),c.a.createElement("a",{href:"/ajuda"},"Ajuda"))))))},O=t(38),C=t.n(O),x=function(e){return{type:"LOADER",payload:e}},S=function(e){return{type:"BODY",payload:e}},R=function(e){return{type:"CLIENTE",payload:e}},L=function(e){return{type:"FATURA",payload:e}};var F=c.a.memo((function(){var e=Object(i.b)(),a=Object(n.useState)({}),t=Object(E.a)(a,2),l=t[0],r=t[1],o=Object(n.useState)({}),s=Object(E.a)(o,2),u=s[0],m=s[1],v=Object(n.useState)(""),h=Object(E.a)(v,2),y=h[0],O=h[1],F=Object(n.useState)(""),A=Object(E.a)(F,2),V=A[0],w=A[1];function T(e,a){return q.apply(this,arguments)}function q(){return(q=Object(f.a)(d.a.mark((function a(t,n){var c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=!0,a.next=3,k.post("consultafatura",Object(p.a)({},t,{periodo:n})).then((function(a){200===a.status&&(r(a.data),e(L(Object(p.a)({},a.data))))})).catch((function(e){c=!1,console.log(e)}));case 3:return a.abrupt("return",c);case 4:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(n.useEffect)((function(){function a(){return(a=Object(f.a)(d.a.mark((function a(){var t,n,c,l,r,o,i,s;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e(x({loading:!0})),a.prev=1,t=!1,a.next=5,g.a.parse(window.location.search);case 5:return n=a.sent,c=n.cpf,l=n.idvarejista,r=n.xapikey,o=n.token,i={cpfCnpj:c,idvarejista:l,xapikey:r,token:o},a.next=10,k.post("consultacliente",i).then((function(a){console.log(a.data),200===a.status&&(m(a.data),e(R(Object(p.a)({},a.data))))})).catch((function(e){404===e.response.status?(w(e.response.data.linkGoogleForm),t=!0):401===e.response.status&&(t=!0),console.log(e)}));case 10:if(t){a.next=15;break}return s=b()().format("YYYYMM"),a.next=14,T(i,s);case 14:O(s);case 15:e(S({cpfCnpj:c,idvarejista:l,token:o,xapikey:r})),a.next=21;break;case 18:a.prev=18,a.t0=a.catch(1),console.log(a.t0);case 21:return a.prev=21,e(x({loading:!1})),a.finish(21);case 24:case"end":return a.stop()}}),a,null,[[1,18,21,24]])})))).apply(this,arguments)}e({type:"CLEAR"}),function(){a.apply(this,arguments)}()}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"home"},c.a.createElement(j,null),c.a.createElement("div",{className:"card-user","data-uk-grid":!0},c.a.createElement("div",null,c.a.createElement("div",{className:"uk-card uk-card-default uk-card-body"},c.a.createElement("img",{className:"credit-card",src:C.a,alt:"card"}),N(u)&&N(u.conta)&&Object.values(u).length>=1&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"nome-cliente"},u.conta.nomeCliente),c.a.createElement("hr",null),N(u.cartao)&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"numero-cartao"},"".concat(u.cartao.nrCartao.trim().substring(0,4),"XXXXXXXX").concat(u.cartao.nrCartao.trim().slice(-4))),N(u.cartao.dtValidade)&&c.a.createElement("p",null,"Validade:"," ",u.cartao.dtValidade)),N(u.conta.melhorDiaCompra)&&c.a.createElement("p",null,"Melhor dia para compra:"," ",u.conta.melhorDiaCompra)),N(V)&&(!N(u)||0===Object.values(u).length||!N(u.cartao)||0===Object.values(u.cartao).length)&&!u.bloqueado&&c.a.createElement("p",null,"Voc\xea ainda n\xe3o possui um cart\xe3o? ",c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:V},"Clique aqui"),", preencha o formul\xe1rio para nos enviar uma proposta e ","garanta o cart\xe3o do seu supermercado favorito sem sair de casa!"),!N(V)&&(!N(u)||0===Object.values(u).length||!N(u.cartao)||0===Object.values(u.cartao).length)&&!u.bloqueado&&c.a.createElement("p",null,"Voc\xea ainda n\xe3o possui um cart\xe3o? Procure nosso balc\xe3o na loja mais pr\xf3xima, levando seu RG e CPF e garanta o seu (cr\xe9dito sujeito \xe0 an\xe1lise)."),u.bloqueado&&c.a.createElement("p",null,"Seu cart\xe3o est\xe1 bloqueado por inatividade. Contate a nossa Central de Relacionamento Uze Cart\xf5es, no telefone 3004 0800 (capitais e regi\xf5es metropolitanas) ou 0800 703 9391 (demais localidades) e verifique a possibilidade de desbloqueio mediante an\xe1lise.")))),!u.bloqueado&&c.a.createElement("div",{className:"card-fatura","data-uk-grid":!0},c.a.createElement("div",null,c.a.createElement("div",{className:"uk-card uk-card-default uk-card-body"},N(l)&&Object.values(l).length>=1?c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"title"},"Fatura"),c.a.createElement("p",{className:"vencimento"},"Vencimento:"," ",l.dataVencimento),c.a.createElement("p",{className:"fatura-atual"},N(l.saldoAPagar)?l.saldoAPagar.toLocaleString("pt-br",{style:"currency",currency:"BRL"}):"R$ 0,00"),c.a.createElement("a",{href:"/detalha-fatura/?periodo=".concat(y)},"ver fatura")):c.a.createElement("p",null,"Nenhuma fatura encontrada")))),!u.bloqueado&&c.a.createElement("div",{className:"card-extrato","data-uk-grid":!0},c.a.createElement("div",null,c.a.createElement("div",{className:"uk-card uk-card-default uk-card-body"},c.a.createElement("p",{className:"title"},"\xdaltimos lan\xe7amentos"),N(l)&&Object.values(l).length>=1&&l.lancamentos.length>=1?l.lancamentos.map((function(e,a){return c.a.createElement("div",{key:a.toString(),className:"item-fatura ".concat("C"===e.plano&&"item-fatura--credito")},c.a.createElement("p",{className:"estabelecimento"},e.descricao),c.a.createElement("p",{className:"valor-detalhe"},"C"===e.plano&&" -",e.valorConvertido.toLocaleString("pt-br",{style:"currency",currency:"BRL"})),c.a.createElement("p",{className:"detalhes"},e.dataTransacao.substring(0,10)),c.a.createElement("hr",null))})):c.a.createElement("p",null,"Nenhum lan\xe7amento encontrado"))))))}));var A=c.a.memo((function(){var e=Object(i.c)((function(e){return e}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"home"},c.a.createElement(j,null),c.a.createElement("div",{className:"card-fatura","data-uk-grid":!0},c.a.createElement("div",null,c.a.createElement("div",{className:"uk-card uk-card-default uk-card-body"},c.a.createElement("p",{className:"title"},"Fatura atual"),N(e.fatura)&&Object.values(e.fatura).length>=1?c.a.createElement(s.b,{to:"/detalha-fatura/?periodo=".concat(e.fatura.periodo.toString()),style:{color:"#666666"}},c.a.createElement("p",{className:"vencimento"},"Vencimento:"," ",e.fatura.dataVencimento),c.a.createElement("p",{className:"fatura-atual"},e.fatura.saldoAPagar.toLocaleString("pt-br",{style:"currency",currency:"BRL"}))):c.a.createElement("p",null,"Nenhuma fatura encontrada")))),c.a.createElement("div",{className:"card-extrato","data-uk-grid":!0},c.a.createElement("div",null,c.a.createElement("div",{className:"uk-card uk-card-default uk-card-body"},c.a.createElement("p",{className:"title"},"\xdaltimos lan\xe7amentos"),N(e.fatura)&&Object.values(e.fatura).length>=1&&Object.values(e.fatura.lancamentos).length>=1?e.fatura.lancamentos.map((function(e,a){return c.a.createElement("div",{key:a.toString(),className:"item-fatura ".concat("C"===e.plano&&"item-fatura--credito")},c.a.createElement("p",{className:"estabelecimento"},e.descricao),c.a.createElement("p",{className:"valor-detalhe"},"C"===e.plano&&" -",e.valorConvertido.toLocaleString("pt-br",{style:"currency",currency:"BRL"})),c.a.createElement("p",{className:"detalhes"},e.dataTransacao.substring(0,10)),c.a.createElement("hr",null))})):c.a.createElement("p",null,"Nenhum lan\xe7amento encontrado"))))))})),V=function(e){return{type:"LOADER",payload:e}},w=function(e){return{type:"FATURAS",payload:e}};var T=c.a.memo((function(){var e=Object(i.c)((function(e){return e})),a=Object(i.b)();return Object(n.useEffect)((function(){function t(){return(t=Object(f.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(V({loading:!0})),t.next=3,k.post("consultaperiodo",{cpfCnpj:e.body.cpfCnpj,idvarejista:e.body.idvarejista,token:e.body.token,xapikey:e.body.xapikey}).then((function(e){console.log(e.data),200===e.status&&a(w(Object(p.a)({},e.data)))})).catch((function(e){console.log(e)})).finally((function(){a(V({loading:!1}))}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}0===Object.values(e.faturas).length&&function(){t.apply(this,arguments)}()}),[]),c.a.createElement("div",{className:"home"},c.a.createElement(j,null),c.a.createElement("div",{className:"card-extrato","data-uk-grid":!0},c.a.createElement("div",null,c.a.createElement("div",{className:"uk-card uk-card-default uk-card-body"},c.a.createElement("p",{className:"title"},"Faturas"),Object.values(e.faturas).length>=1&&e.faturas.periodos.length>=1?e.faturas.periodos.map((function(e,a){return c.a.createElement(s.b,{to:"/detalha-fatura/?periodo=".concat(e.periodo),key:a.toString()},c.a.createElement("div",{className:"item-fatura"},c.a.createElement("p",{className:"estabelecimento"},"".concat(e.periodo.toString().slice(4),"/").concat(e.periodo.toString().slice(0,4))),c.a.createElement("p",{className:"detalhes"},"Consultar"),c.a.createElement("hr",null)))})):c.a.createElement("p",null,"Nenhuma fatura encontrada")))))})),q=function(e){return{type:"LOADER",payload:e}};var D=c.a.memo((function(){var e=Object(i.c)((function(e){return e})),a=Object(i.b)(),t=Object(n.useState)({}),l=Object(E.a)(t,2),r=l[0],o=l[1];return Object(n.useEffect)((function(){function t(){return(t=Object(f.a)(d.a.mark((function t(){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(q({loading:!0})),n=window.location.search.split("?")[1].split("&"),c=-1!==n[0].indexOf("periodo")&&n[0].split("=")[1],t.next=5,k.post("consultafatura",{cpfCnpj:e.body.cpfCnpj,idvarejista:e.body.idvarejista,token:e.body.token,xapikey:e.body.xapikey,periodo:c}).then((function(e){console.log(e.data),200===e.status&&o(e.data)})).catch((function(e){console.log(e)})).finally((function(){return a(q({loading:!1}))}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"home"},c.a.createElement(j,null),c.a.createElement("div",{className:"card-fatura","data-uk-grid":!0},c.a.createElement("div",null,c.a.createElement("div",{className:"uk-card uk-card-default uk-card-body"},c.a.createElement("p",{className:"title uk-margin-small-bottom"},"Detalhes da fatura"),N(r)&&Object.values(r).length>=1?c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"fechamento"},"Fechamento:"," ",r.dataFechamento),c.a.createElement("p",{className:"vencimento"},"Vencimento:"," ",r.dataVencimento),c.a.createElement("div",{className:"detalhes detalhes--saldoAnterior"},c.a.createElement("p",null,"Saldo anterior"),c.a.createElement("p",{className:"saldoAnterior"},N(r.saldoAnterior)?r.saldoAnterior.toLocaleString("pt-br",{style:"currency",currency:"BRL"}):"R$ 0,00")),c.a.createElement("hr",null),c.a.createElement("div",{className:"detalhes"},c.a.createElement("p",null,"(-)Pagamentos"),c.a.createElement("p",{className:"pagamentos"},N(r.totalCreditos)?r.totalCreditos.toLocaleString("pt-br",{style:"currency",currency:"BRL"}):"R$ 0,00")),c.a.createElement("hr",null),c.a.createElement("div",{className:"detalhes"},c.a.createElement("p",null,"(+)Despesas"),c.a.createElement("p",{className:"despesas"},(N(r.totalDebitos)?parseFloat(r.totalDebitos):0).toLocaleString("pt-br",{style:"currency",currency:"BRL"}))),c.a.createElement("hr",null),c.a.createElement("div",{className:"detalhes detalhes--saldoFatura"},c.a.createElement("p",{style:{fontSize:"1rem"}},"Total da fatura"),c.a.createElement("p",{className:"saldoFatura",style:{fontSize:"1rem"}},N(r.saldoFatura)?r.saldoFatura.toLocaleString("pt-br",{style:"currency",currency:"BRL"}):"R$ 0,00")),c.a.createElement("br",null),c.a.createElement("p",{className:"statusFatura"},r.statusFatura)):c.a.createElement("p",null,"Nenhuma fatura encontrada")))),N(r)&&Object.values(r).length>=1&&N(r.linhaDigitalvel)&&c.a.createElement("div",{className:"card-linha-digitavel","data-uk-grid":!0},c.a.createElement("div",null,c.a.createElement("div",{className:"uk-card uk-card-default uk-card-body"},c.a.createElement("p",{className:"title"},"Linha digit\xe1vel"),c.a.createElement("p",{className:"linha-digitavel"},r.linhaDigitalvel),c.a.createElement("button",{type:"button",className:"uk-button uk-button-default uk-width-1-1 uk-margin-small-top button-copy",onClick:function(){return function(){var e=document.createElement("textarea");e.innerText=r.linhaDigitalvel,document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove();var a=document.querySelector(".button-copy");a.style.backgroundColor="#34cc34",a.style.color="#ffffff",a.innerText="Linha digit\xe1vel copiada!",setTimeout((function(){a.style.backgroundColor="#ebebeb",a.style.color="#666666",a.innerText="Copiar linha digit\xe1vel"}),3e3)}()}},"Copiar linha digit\xe1vel")))),c.a.createElement("div",{className:"card-extrato","data-uk-grid":!0},c.a.createElement("div",null,c.a.createElement("div",{className:"uk-card uk-card-default uk-card-body"},c.a.createElement("p",{className:"title title--menor"},"Lan\xe7amentos da fatura"),N(r)&&Object.values(r).length>=1&&r.lancamentos.length>=1?c.a.createElement(c.a.Fragment,null,r.lancamentos.map((function(e,a){return c.a.createElement("div",{key:a.toString(),className:"item-fatura ".concat("C"===e.plano&&"item-fatura--credito")},c.a.createElement("p",{className:"estabelecimento"},e.descricao),c.a.createElement("p",{className:"valor-detalhe"},"C"===e.plano&&" -",e.valorConvertido.toLocaleString("pt-br",{style:"currency",currency:"BRL"})),c.a.createElement("p",{className:"detalhes"},e.dataTransacao.substring(0,10)),c.a.createElement("hr",null))}))):c.a.createElement("p",null,"Nenhum lan\xe7amento encontrado"))))))}));var B=c.a.memo((function(){var e=Object(i.c)((function(e){return e}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"home"},c.a.createElement(j,null),c.a.createElement("div",{className:"card-meu-cadastro","data-uk-grid":!0},c.a.createElement("div",null,c.a.createElement("div",{className:"uk-card uk-card-default uk-card-body"},c.a.createElement("p",{className:"title"},"Meu cadastro"),N(e.cliente)&&Object.values(e.cliente).length>=1?c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"nome-cliente"},e.cliente.conta.nomeCliente),c.a.createElement("p",{className:"telefone-cliente"},"Telefone"),c.a.createElement("p",null,"(".concat(e.cliente.dddRes,") ").concat(e.cliente.telefoneRes)),c.a.createElement("p",{className:"endereco-cliente"},"Endere\xe7o:"),c.a.createElement("p",null,"".concat(e.cliente.logradouroRes,", ").concat(e.cliente.nrRes," - ").concat(e.cliente.bairroRes)),c.a.createElement("p",{className:"cidade-cliente"},"".concat(e.cliente.cidadeRes," - ").concat(e.cliente.estadoRes))):c.a.createElement("p",{style:{textAlign:"center"}},"Nenhum cliente encontrado"))))))}));var z=c.a.memo((function(){var e=Object(i.c)((function(e){return e}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"home"},c.a.createElement(j,null),c.a.createElement("div",{className:"card-saldo","data-uk-grid":!0},c.a.createElement("div",null,c.a.createElement("div",{className:"uk-card uk-card-default uk-card-body"},c.a.createElement("p",{className:"title"},"Saldo dispon\xedvel"),N(e.cliente)&&Object.values(e.cliente).length>=1?c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"saldo-disponivel"},N(e.cliente.conta.saldoDisponivel)?e.cliente.conta.saldoDisponivel.toLocaleString("pt-br",{style:"currency",currency:"BRL"}):"R$ 0,00"),c.a.createElement("p",{className:"limite"},"Limite: ".concat(e.cliente.conta.limiteCredito.toLocaleString("pt-br",{style:"currency",currency:"BRL"})))):c.a.createElement("p",null,"Nenhum cart\xe3o encontrado"))))))}));var I=c.a.memo((function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"home"},c.a.createElement(j,null),c.a.createElement("div",{className:"card-ajuda","data-uk-grid":!0},c.a.createElement("div",null,c.a.createElement("div",{className:"uk-card uk-card-default uk-card-body"},c.a.createElement("p",{className:"ajuda-title"},"Central de Relacionamento Uze Cart\xf5es"),c.a.createElement("p",null,"Solicita\xe7\xf5es e informa\xe7\xf5es sobre seu cart\xe3o:"),c.a.createElement("p",null,c.a.createElement("b",null,"3004 0800")," (capitais e regi\xf5es metropolitanas)"),c.a.createElement("p",null,c.a.createElement("b",null,"0800 703 9391")," (demais localidades)"),c.a.createElement("p",null,"Hor\xe1rio de atendimento: segunda \xe0 sexta das 8h \xe0s 20h e aos s\xe1bados das 8h \xe0s 18h, exceto feriados nacionais."),c.a.createElement("p",{className:"ajuda-contato"},"faleconosco@uzecartoes.com.br"))))))})),X=t(39),P=t.n(X);function U(e){var a=e.icon,t=e.className,n=e.width,l=e.height,r=e.fill;return c.a.createElement("svg",{"aria-hidden":"true",className:t,width:n,height:l,fill:r},c.a.createElement("use",{xlinkHref:"".concat(P.a,"#icon-").concat(a)}))}U.defaultProps={className:"",width:"100%",height:"100%",fill:"#000000"};var M=c.a.memo(U),Y=t(40),$=t.n(Y),J=function(e){return{type:"LOADER",payload:e}},_=function(e){return{type:"CLIENTE",payload:e}};var H=c.a.memo((function(){var e=Object(i.c)((function(e){return e})),a=Object(i.b)();function t(e){return e.replace(/(\d{4})/g,"$1.").replace(/[.]/g," ")}return Object(n.useEffect)((function(){function t(){return(t=Object(f.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(J({loading:!0})),t.next=3,k.post("consultacartaovirtual",{cpfCnpj:e.body.cpfCnpj,idvarejista:e.body.idvarejista,token:e.body.token,xapikey:e.body.xapikey,accountId:""}).then((function(t){200===t.status&&a(_(Object(p.a)({},e.cliente,{cartaoVirtual:t.data})))})).catch((function(t){404===t.request.status&&a(_(Object(p.a)({},e.cliente,{cartaoVirtual:{CardName:e.cliente.conta.nomeCliente,CardNumber:e.cliente.cartao.nrCartao}})))})).finally((function(){a(J({loading:!1}))}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}N(e.cliente.cartaoVirtual)&&0!==Object.values(e.cliente.cartaoVirtual).length||function(){t.apply(this,arguments)}()}),[]),c.a.createElement("div",{className:"home"},c.a.createElement(j,null),c.a.createElement("div",{className:"card-cartao-virtual","data-uk-grid":!0},c.a.createElement("h3",null,"CART\xc3O VIRTUAL"),c.a.createElement("div",null,c.a.createElement("div",{className:"uk-card uk-card-default uk-card-body",style:{padding:"0"}},c.a.createElement("img",{className:"credit-card-virtal",src:$.a,alt:"card"}))),c.a.createElement("div",null,c.a.createElement("div",{className:"uk-card uk-card-default uk-card-body"},N(e.cliente.cartaoVirtual)&&Object.values(e.cliente.cartaoVirtual).length>=1?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null),c.a.createElement("p",{className:""},c.a.createElement("b",null,"Nome do Titular")),c.a.createElement("p",null,N(e.cliente.cartaoVirtual)&&N(e.cliente.cartaoVirtual.CardName)?e.cliente.cartaoVirtual.CardName:e.cliente.conta.nomeCliente),c.a.createElement("p",{className:"uk-margin-top"},c.a.createElement("b",null,"N\xfamero do cart\xe3o")),c.a.createElement("p",{id:"number-credit-card",className:"uk-flex uk-flex-between uk-padding-remove"},N(e.cliente.cartaoVirtual)&&N(e.cliente.cartaoVirtual.CardNumber)?t(e.cliente.cartaoVirtual.CardNumber):t(e.cliente.cartao.nrCartao),c.a.createElement("button",{type:"button",className:"button-copy-n-card uk-padding-remove",onClick:function(){return function(){var e=document.getElementById("number-credit-card").textContent,a=document.createElement("textarea");a.innerText=e,document.body.appendChild(a),a.select(),document.execCommand("copy"),a.remove();var t=document.querySelector(".icon-copy-n-card");t.style.fill="#cdcdcd",setTimeout((function(){t.style.fill="#717171"}),2e3)}()}},c.a.createElement(M,{className:"icon-copy-n-card",icon:"file_copy",fill:"#717171",width:"25",height:"25"})))):c.a.createElement("p",null,"Voc\xea n\xe3o possui cart\xe3o virtual. Para obt\xea-lo, desbloqueie o seu cart\xe3o definitivo.")))))}));function G(){return c.a.createElement(s.a,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",exact:!0},c.a.createElement(F,null)),c.a.createElement(u.a,{path:"/saldo",exact:!0},c.a.createElement(z,null)),c.a.createElement(u.a,{path:"/fatura",exact:!0},c.a.createElement(A,null)),c.a.createElement(u.a,{path:"/faturas",exact:!0},c.a.createElement(T,null)),c.a.createElement(u.a,{path:"/detalha-fatura",exact:!0},c.a.createElement(D,null)),c.a.createElement(u.a,{path:"/meu-cadastro",exact:!0},c.a.createElement(B,null)),c.a.createElement(u.a,{path:"/ajuda",exact:!0},c.a.createElement(I,null)),c.a.createElement(u.a,{path:"/cartao-virtual",exact:!0},c.a.createElement(H,null))))}t(83);var Q=function(){var e=Object(i.c)((function(e){return e.loading}));return c.a.createElement("div",{className:"App"},c.a.createElement(G,null),e&&c.a.createElement("div",{className:"spinner"},c.a.createElement("span",{className:"uk-margin-small-right","uk-spinner":"ratio: 2"})))},W="LOADER",Z="BODY",K="CLIENTE",ee="FATURA",ae="FATURAS",te="CLEAR",ne={loading:!1,body:{cpfCnpj:"",idvarejista:"",token:"",xapikey:""},cliente:{},fatura:{},faturas:{}};t(84),t(85),t(86),t(89);var ce=t(41),le=t(42),re=new(function(){function e(){Object(ce.a)(this,e),this.state="",this.form=""}return Object(le.a)(e,[{key:"loadState",value:function(){try{var e=localStorage.getItem("omni:state");return null===e?this.initializeState():JSON.parse(e)}catch(a){return this.initializeState()}}},{key:"saveState",value:function(e){this.state=e;try{var a=JSON.stringify(this.state);localStorage.setItem("omni:state",a)}catch(t){console.log(t)}}},{key:"initializeState",value:function(e){return this.form=e,ne}}]),e}()),oe=Object(o.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case Z:return Object(p.a)({},e,{body:Object(p.a)({},a.payload)});case W:return Object(p.a)({},e,{},a.payload);case K:return Object(p.a)({},e,{cliente:Object(p.a)({},a.payload)});case ee:return Object(p.a)({},e,{fatura:Object(p.a)({},a.payload)});case ae:return Object(p.a)({},e,{faturas:Object(p.a)({},a.payload)});case te:return Object(p.a)({},e,{faturas:{},cliente:{},fatura:{}});default:return Object(p.a)({},e)}}),re.loadState());oe.subscribe((function(){re.saveState(oe.getState())})),r.a.render(c.a.createElement(i.a,{store:oe},c.a.createElement(Q,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.415b9362.chunk.js.map
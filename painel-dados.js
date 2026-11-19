/* =====================================================================
   DADOS DO PAINEL @opablobernar
   Este é o ÚNICO arquivo que os agentes editam para mudar o painel.
   - PERFIL: números do topo
   - REELS: vídeos (texto para gravar, tela, falar no final, legenda)
   - STORIES: por data -> [quando, o que postar, texto a escrever, figurinha]
   - BROLL: por data -> imagens para filmar e usar depois (não postar)
   - EXTRAS: tarefas avulsas com data
   - START/END: período do plano (AAAA-MM-DD)
   Regras: manter JavaScript válido; textos com crase `...`; não usar crase dentro do texto.
   Ids de vídeo (n) nunca mudam depois de publicados: o progresso marcado depende deles.
   ===================================================================== */
const PERFIL={seguidores:23,seguidoresData:"19/11 (12 em 17/11)",destaqueNum:454,destaqueTxt:"views nos últimos 30 dias"};

/* ---------- VÍDEOS: texto completo para o teleprompter ---------- */
const REELS=[
 {n:1,pilar:"ISO",gravar:"2026-11-17",postar:"2026-11-18",onde:"Casa ou carro parado",
  tela:"Seu certificado ISO 9001 tem data pra vencer.",
  texto:`Seu certificado ISO 9001 tem data pra vencer. E muita empresa ainda não olhou isso.

A versão 2026 da norma saiu em setembro. Quem é certificado na versão 2015 tem até 30 de setembro de 2029 pra fazer a transição.

Parece longe, né? Mas a transição costuma entrar numa auditoria de manutenção ou de recertificação. Então ela vai cair numa das suas próximas auditorias, e vale conversar com a certificadora agora.

E se a sua empresa ainda vai se certificar: a partir de março de 2028, só dá pra certificar na versão nova.

O primeiro passo não é reescrever tudo. É fazer uma análise de lacunas: comparar o que você já tem com o que mudou.`,
  final:"Manda esse vídeo pra quem cuida da qualidade aí na sua empresa.",
  legenda:`Certificado ISO 9001:2015 tem prazo: 30/09/2029.
A versão 2026 saiu em 16/09/2026, e a transição acontece numa auditoria de manutenção ou recertificação dentro desse período.
Empresa que ainda vai se certificar: a partir de 31/03/2028, só na versão 2026.
Não precisa reescrever o sistema. Comece com uma análise de lacunas.
Fonte: ISO/TC 176/SC 2. Confirme os prazos com a sua certificadora.`},

 {n:2,pilar:"IA · agentes",gravar:"2026-11-17",postar:"2026-11-19",onde:"Fala: carro parado. Tela: amanhã no trabalho",
  tela:"Trabalho de semanas, feito em dias por uma equipe de IA.",
  texto:`Trabalho de semanas, feito em dias por uma equipe de IA.

Eu não uso um chat só. Eu organizo a IA como uma equipe.

Cada agente tem uma função: um pesquisa, outro escreve, outro só revisa.

Quem escreve nunca revisa o próprio trabalho. Sozinha, a IA erra sem perceber. Com um revisor, o erro aparece antes de chegar a mim.

Eu dou a direção, a equipe entrega, e a decisão é minha.`,
  final:"Comenta AGENTE que eu te mando o passo a passo.",
  legenda:`Trabalho de semanas, feito em dias por uma equipe de IA.
O segredo não é a ferramenta: é dar uma função a cada agente e ter alguém revisando.
Quem escreve nunca revisa. A decisão final é sempre da pessoa.
Comenta AGENTE pra receber o passo a passo.`,
  nota:"Usar o vídeo de 7 s do mapa de documentos como B-roll durante o 3º e 4º parágrafos. Tela sem nome de cliente nem documento de cliente. Sem números exatos nem nome de empresa. 'Semanas em dias' só de forma abrangente. Detalhes (revisão de auditor, a confirmar, prática implantada) ficam para a série."},

 {n:3,pilar:"Carreira",gravar:"2026-11-17",postar:"2026-11-20",onde:"Casa",
  tela:"Comecei como menor aprendiz. Hoje sou gestor de projetos.",
  texto:`Comecei como menor aprendiz. Hoje sou gestor de projetos.

Em 2014 eu era menor aprendiz numa empresa de máquinas. Fazia compra, cotação, controle de estoque.

Depois virei assistente administrativo. Nota fiscal, boleto, negociação, atendimento.

A virada foi quando eu comecei a estudar dados. Python, Power BI, SQL. Comecei a resolver o problema que ninguém queria resolver: o relatório que levava dias, a planilha que ninguém entendia.

Isso me levou pra analista, depois pra cuidar do sistema de gestão de qualidade e segurança da informação. E hoje eu sou gestor de projetos em projetos de infraestrutura.

No caminho fiz faculdade, pós em Big Data e MBA em gestão de projetos.

Hoje eu uso IA e dados no trabalho todo dia. E é isso que eu vou te mostrar aqui.`,
  final:"Me segue: toda semana eu mostro como uso IA e dados no trabalho.",
  legenda:`2014: menor aprendiz.
Depois: assistente administrativo, analista, sistema de gestão.
Hoje: gestor de projetos de infraestrutura, usando IA e dados todo dia.
Me segue: toda semana eu mostro como, sem enrolação.`,
  nota:"Depois de postar, fixe este vídeo no topo do perfil."},

 {n:4,pilar:"Rotina",gravar:"2026-11-21",postar:"2026-11-21",onde:"Montagem dos clips de quarta a sexta (sem fala)",
  tela:"Gestor de projetos de dia. Academia e corrida de noite.",
  texto:`(Vídeo sem fala, 10 a 15 segundos, com música baixa.)

Sequência de clips de 1 a 2 segundos cada:
café com ovos → carro → tela do computador → marmita → academia → corrida → relógio com os km.

Texto fixo na tela durante o vídeo todo:
Gestor de projetos de dia. Academia e corrida de noite.`,
  final:"(Sem fala. O pedido vai na legenda: “Me segue pra ver a rotina real.”)",
  legenda:`7h café. Dia de projeto. 17h30 academia. Depois, corrida.
Quinta e sábado, natação. Domingo, marmita da semana.
Não é motivação, é agenda.
Me segue pra ver a rotina real.`},

 {n:5,pilar:"IA · automação",gravar:"2026-11-22",postar:"2026-11-23",onde:"Voz off (sem aparecer): narração gravada por cima do vídeo de tela de 19/11 (sem áudio). Cortes: mapa 0-14 s + pastas 22-43 s",
  tela:"1 arquivo = 1 agente de IA. Assim monto minha equipe.",
  texto:`[0-3 s | imagem: mapa | tela: o texto do gancho]
1 arquivo = 1 agente de IA. Assim eu monto a minha equipe.

[3-14 s | imagem: mapa dos documentos | tela: "Cada ponto = um documento"]
Isto é o mapa dos documentos de um sistema de gestão. Cada ponto é um documento, cada linha é uma ligação entre eles. Quem mantém tudo conectado não é uma IA só. É uma equipe.

[14-24 s | imagem: pastas do VS Code | tela: "1 arquivo = 1 agente"]
Por trás, cada agente é um arquivo com a sua função escrita, todos na pasta de agentes. Um gerente recebe o pedido e distribui. Os especialistas cuidam cada um de uma norma. Outro levanta a legislação para você conferir.

[24-35 s | imagem: pastas, rolando | tela: "Quem escreve não revisa"]
Um redator produz os documentos. E um auditor só revisa, sem poder editar nada. Separar assim evita o erro que ninguém vê.`,
  final:"Comenta AGENTE que eu te mando o passo a passo.",
  legenda:`1 arquivo = 1 agente de IA. Assim eu monto a minha equipe.
Gerente, especialista por norma, levantamento de legislação, redator e auditor.
Quem escreve não revisa.
Comenta AGENTE pra receber o passo a passo.`,
  nota:`VISUAL = vídeo de tela gravado em 19/11 (49 s, sem áudio, tremido), em midia/processado. Corte: 0-14 s mapa + corte natural em 21,7 s + 22-43 s pastas (uns 35 s; se preferir 28 s, termine em 36 s e corte a última frase). Narração em voz off por cima, ~35 s. Ângulo diferente do #2 (resultado) e do #7 (auditor com exemplo): aqui é só como montar a equipe. Sem números internos, sem PPP/cliente, sem dizer onde foi usado. BORRAR/CORTAR (social-media): logo Russell Bedford no mousepad (0,5 s); título da aba, cabeçalho, rodapé com nome da empresa e data da lista; barra de endereço (caminho de pastas); favoritos (FileServer, Compartilhamento, PORTAL, ESPEC); contagens da lateral do painel (números internos); no VS Code os nomes SGI_RUSSELL, SGI_NOVA, iso-sgi-medicao, 01_SGI-GERAL_MEDIÇÃO e o nome da pasta raiz no Explorer (deixar visíveis só agents, commands, skills e iso-9001/14001/45001); Obsidian, relógio e data da barra de tarefas (monitor da esquerda). Capa: quadro de 0,5 s sem o logo, ou o mapa borrado. Confira um scroll-through do vídeo inteiro antes de postar (só 6 quadros foram vistos).
BORRAR ANTES DE POSTAR:
1) Logo Russell Bedford no mousepad (~0,5 s).
2) Título da aba, cabeçalho e rodapé com nome da empresa e data (~9 s).
3) Barra de endereço com caminho de pastas.
4) Favoritos (FileServer, Compartilhamento, PORTAL, ESPEC).
5) Contagens da lateral (números internos).
6) VS Code: nomes de pasta iso-sgi-medicao, SGI_NOVA, SGI_RUSSELL, 01_SGI-GERAL_MEDIÇÃO.
7) Monitor da esquerda: Obsidian e relógio com data (se aparecer no corte).
Capa: quadro de 0,5 s sem o logo, ou o mapa já borrado. Conferir o vídeo final quadro a quadro antes de postar. Usar o texto de tela entre aspas em cada cena.`},

 {n:6,pilar:"Gestão de projetos",gravar:"2026-11-20",postar:"2026-11-24",onde:"Casa",
  tela:"5 erros de quem gerencia projeto. O 3º é o que eu mais vejo.",
  texto:`Cinco erros de quem gerencia projeto. Presta atenção no terceiro.

Um: começar sem escopo escrito. Se não está no papel, cada um entende uma coisa.

Dois: reunião sem dono e sem prazo pra cada tarefa. Termina, todo mundo concorda e ninguém faz.

Três: só olhar o prazo final. Projeto não atrasa no último dia. Atrasa um pouquinho toda semana.

Quatro: guardar problema pra contar depois. Risco avisado cedo é risco barato.

Cinco: medir tudo e não decidir nada. Indicador que não muda decisão é enfeite.

O que eu mais vejo é o número três. Lembra qual era?`,
  final:"Comenta qual desses você mais vê no seu trabalho.",
  legenda:`5 erros de gestão de projetos.
O 3º é o que eu mais vejo, e quase ninguém percebe.
Comenta qual desses você mais vê no seu trabalho.`,
  nota:"Se puder, conte um caso seu no erro 3, sem citar cliente."},

 {n:7,pilar:"IA + ISO",gravar:"2026-11-22",postar:"2026-11-25",onde:"Casa + tela",
  tela:"Uma IA revisou meu procedimento de ISO. Olha o parecer (EXEMPLO).",
  texto:`Uma IA revisou meu procedimento de ISO. Olha o parecer.

Eu criei um plugin que trabalha como uma equipe: um agente escreve, outro é especialista na norma, e o auditor revisa sem poder editar nada, no estilo da ISO 19011.

Exemplo inventado só pra este vídeo: o auditor aponta que o procedimento descreve o controle de documentos, mas não diz quem aprova a emissão. Ele não corrige. Só registra o achado e devolve pro redator.

Quando falta informação, a IA escreve a confirmar pela empresa, em vez de inventar.

E documento pronto não é prática implantada: escrever o procedimento é uma coisa, a empresa fazer de verdade é outra.

Ele não substitui gente. A IA acha, o humano decide o que é problema.`,
  final:"Comenta ISO que eu te mostro como ele funciona por dentro.",
  legenda:`Uma equipe de agentes de IA revisando documento ISO: um escreve, um é especialista na norma, um audita sem editar.
O auditor só dá o parecer e devolve pro redator. Quando falta dado, a IA marca a confirmar.
O exemplo do vídeo é ilustrativo.
A IA encontra, o humano decide.
Comenta ISO pra ver por dentro.`,
  nota:"Exemplo de parecer é ilustrativo e genérico (dito na fala); sem dado de cliente nem número de pareceres. Tela: mostrar um parecer de exemplo montado só pro vídeo."},

 {n:8,pilar:"Bastidor",gravar:"2026-11-20",postar:"2026-11-26",onde:"Casa",
  tela:"Criei um software depois do expediente. Ele já tem cliente pagando.",
  texto:`Criei um software depois do expediente. E ele já tem cliente pagando.

É um sistema de auditoria de iluminação pública, baseado na norma de iluminação viária, a ABNT NBR 5101 de 2024.

Foram três meses de código, à noite e no fim de semana, e mais seis meses de teste.

O primeiro cliente fechou com mensalidade fixa.

O que eu aprendi: ninguém compra software. Compra o problema resolvido. E eu conhecia esse problema porque já tinha vivido ele de perto.`,
  final:"Quer a história completa? Comenta HISTÓRIA.",
  legenda:`3 meses de código depois do expediente. 6 meses de teste. 1 cliente pagando.
Ninguém compra software, compra o problema resolvido.
Comenta HISTÓRIA que eu conto o resto.`,
  nota:"Liberado (Pablo confirmou em 17/11). Não fale o nome do cliente nem o valor do contrato."},

 {n:9,pilar:"Reflexão",gravar:"2026-11-25",postar:"2026-11-27",onde:"Logo depois da corrida, ainda na rua",
  tela:"Correr me ensinou mais sobre prazo do que o MBA.",
  texto:`Correr me ensinou mais sobre prazo do que o MBA.

Quem começa a corrida no sprint quebra no meio. Projeto é igual: a equipe que começa no gás total é a que atrasa no fim.

Na corrida eu aprendi a olhar o ritmo, não a linha de chegada. Quanto eu fiz hoje, quanto falta, se dá pra manter.

No projeto a pergunta é a mesma, toda semana: nesse ritmo, a gente chega?

Constância ganha de intensidade. Na rua e no cronograma.`,
  final:"Manda pra alguém que começou o projeto no sprint.",
  legenda:`Ritmo > pressa.
Na corrida e no cronograma.
Manda pra quem começou o projeto no sprint.`},

 {n:10,pilar:"Rotina + gestão",gravar:"2026-11-22",postar:"2026-11-29",onde:"Cozinha, fazendo as marmitas",
  tela:"Planejo marmita igual planejo projeto.",
  texto:`Eu planejo marmita igual planejo projeto.

Escopo: o que entra no cardápio da semana. Proteína, carboidrato, salada. Sem inventar no meio do caminho.

Prazo: domingo. Se não fizer no domingo, a semana desanda.

Recurso: uma ida ao mercado, com lista. Sem lista, o orçamento estoura.

Entrega: cinco almoços prontos na geladeira.

E no domingo seguinte eu reviso o que não funcionou. Isso tem nome: lição aprendida.`,
  final:"Salva pra montar a sua no próximo domingo.",
  legenda:`Escopo, prazo, recurso, entrega e lição aprendida.
Gestão de projetos também serve pra marmita.
Salva pra montar a sua no próximo domingo.`}
];

/* ---------- STORIES: o que postar em cada dia ---------- */
const STORIES={
 "2026-11-17":[["Agora","Compartilhar o post de hoje (ISO 9001)","Saiu meu primeiro vídeo. Sua empresa é certificada ISO?","Enquete: Sim / Não"],["Depois da corrida","Print do relógio com km e tempo","Treino feito.",""]],
 "2026-11-18":[["Manhã","Foto do café com ovos","Bom dia. Hoje sai vídeo sobre a ISO 9001 nova.",""],["12h20","Compartilhar o vídeo de hoje nos stories","Saiu vídeo novo. Seu certificado tem prazo.","Enquete: “Sua empresa é certificada ISO?” Sim / Não"],["Noite","Clip de 5 s da academia ou da corrida","Você treina de manhã ou de noite?","Enquete: Manhã / Noite"]],
 "2026-11-19":[["Manhã","Foto do café","Bom dia. Hoje vou mostrar um agente de IA que trabalha comigo.",""],["12h20","Compartilhar o vídeo de hoje","Esse agente vigia os documentos da ISO pra mim.","Caixinha: “Que tarefa você queria que uma IA fizesse por você?”"],["Noite","Clip de 5 s da natação","Quinta é dia de natação.",""],["Noite","5 s do mapa do vídeo gravado hoje, com cabeçalho, rodapé, barra de endereço, favoritos e logo borrados (sem tela final, sem marcar a empresa)","Isso é o mapa dos documentos que a minha equipe de agentes mantém conectado. Qual norma você quer ver virar agente?","Caixinha de perguntas em cima do mapa. Usar as respostas como pauta de stories e termômetro do interesse"]]],
 "2026-11-20":[["Manhã","Foto do dia de folga","Feriado. Hoje conto de onde eu vim.",""],["12h20","Compartilhar o vídeo de hoje","De menor aprendiz a gestor de projetos.","Caixinha: “Qual foi o seu primeiro emprego?”"],["Noite","Clip da academia","Semana quase fechada.",""]],
 "2026-11-21":[["Meio-dia","Clip de 5 s da natação","Sábado começa na piscina.",""],["Tarde","Compartilhar o vídeo de hoje","A rotina real, sem filtro.",""],["Fim da tarde","Selfie ou foto do sábado","O que você faz pra desligar no fim de semana?","Caixinha de perguntas"]],
 "2026-11-22":[["Manhã","Clip de 5 s do cardio","Domingo: cardio e marmitas.",""],["Tarde","Foto das marmitas prontas","5 almoços prontos.","Enquete: “Você faz marmita?” Sim / Não"],["Noite","Foto do celular montado pra gravar","Gravando os vídeos da semana que vem.",""]],
 "2026-11-23":[["Manhã","Foto do café","Segunda. Qual é a primeira tarefa da sua semana?","Caixinha de perguntas"],["12h20","Compartilhar o vídeo de hoje","Montar uma equipe de IA é dar função a cada agente. O vídeo de hoje mostra como.","Enquete: “Você usa IA como equipe ou só um chat?” Equipe / Só um chat"],["Tarde","Foto ou arte simples com a data 25 e 26/11 (sem logo de cliente)","Dia 25 e 26 tem o CONIPC, em Canoas: congresso de inovação em PPPs e Concessões, com mais de 70 palestrantes e painéis sobre novo marco legal e gestão contratual. Estarei lá. Vai estar? Me chama.","Caixinha: “Vai estar no CONIPC?”. Marcar @ibpppmunicipais (organizador)"],["Noite","Clip da academia","Treino feito. E você, já automatizou algo hoje?",""]],
 "2026-11-24":[["Manhã","Foto da mesa de trabalho, sem tela legível","Bom dia. Hoje o vídeo é sobre 5 erros de gestão de projetos.",""],["12h20","Compartilhar o vídeo de hoje","5 erros de gestão de projetos.","Enquete: “Qual desses erros você mais vê?” 1 / 3 / 5"],["Tarde","Foto da mochila ou do crachá pronto, sem nome de outros","Amanhã começa o CONIPC. Abertura às 9h, tarde com painel de gestão contratual e, às 17h, lançamento do IBPM Atlas. Estarei lá nos dois dias.","Contagem regressiva (“CONIPC amanhã”) + Caixinha: “Vai estar lá?”. Responder no direct quem disser que vai. Marcar @ibpppmunicipais"],["Noite","Print da corrida","Ritmo, não pressa.",""]],
 "2026-11-25":[["Manhã (ao vivo)","Vídeo curto da chegada ao Park Shopping Canoas (fachada ou entrada, sem rosto de terceiros)","Cheguei no CONIPC. Quem está por aqui, me chama no direct.","Localização: Canoas. Marcar @ibpppmunicipais (organizador)"],["12h20","Compartilhar o vídeo de hoje","A IA encontra. O humano decide.","Enquete: “Você confiaria na IA pra revisar documento?” Sim / Ainda não"],["Tarde (ao vivo)","Vídeo curto do painel ou do palco, de longe, sem rosto de terceiros e sem slide de cliente","Painel de hoje no CONIPC: o futuro das cidades na prática.","Marcar @ibpppmunicipais e usar #CONIPC2026"],["Noite","Compartilhar de novo o vídeo do agente (19/11)","Pra quem chegou agora: o agente que vigia a ISO pra mim.",""]],
 "2026-11-26":[["Manhã","Selfie no carro parado","Hoje eu conto do software que criei depois do expediente.",""],["12h20","Compartilhar o vídeo de hoje","Criei um software depois do CLT.","Caixinha: “Você tem um projeto paralelo?”"],["Tarde","Foto do seu crachá ou do corredor do evento, sem rosto de terceiros","CONIPC fechado. O que levei: [1 ideia que ficou]. Em breve conto num Reels.","Marcar @ibpppmunicipais. Enquete: “Quer um Reels do que vi no CONIPC?” Quero / Depois"],["Noite","Clip da natação","Quinta, natação.",""]],
 "2026-11-27":[["Manhã","Foto do tênis de corrida","Sexta. Tênis pronto pra correr hoje.",""],["12h20","Compartilhar o vídeo de hoje","Correr me ensinou sobre prazo.","Slider: “Quantos km você corre por semana?”"],["Noite","Print da corrida","Semana fechada: 5 vídeos postados.",""]],
 "2026-11-28":[["Meio-dia","Clip da natação","Sábado começa na piscina.",""],["Tarde","Compartilhar o vídeo com mais views da semana","Caso você tenha perdido.",""],["Fim da tarde","Selfie","Sobre o que você quer vídeo semana que vem?","Caixinha de perguntas"]],
 "2026-11-29":[["Manhã","Clip do cardio","Domingo: cardio e marmitas.",""],["12h20","Compartilhar o vídeo de hoje","Marmita é projeto.","Enquete: “Você planeja a semana no domingo?” Sim / Não"],["Noite","Bastidor da gravação","Gravando a próxima semana.",""]],
 "2026-11-30":[["Manhã","Foto do café","Segunda. Recomeço.",""],["Meio-dia","Compartilhar o vídeo fixado (sua história)","Se você chegou agora, começa por aqui.","Caixinha: “Qual vídeo você quer que eu aprofunde?”"],["Noite","Clip da academia","Duas semanas de vídeos. Obrigado por estar aqui.",""]]
};

/* ---------- O que filmar para usar depois (não postar) ---------- */
const BROLL={
 "2026-11-18":["Tela do agente de ISO rodando, 10 s (apoio do vídeo #2)","Clips de 2 s para o #4: café, carro, tela, marmita, academia, corrida"],
 "2026-11-19":["Clips de 2 s para o #4 (os que faltarem)"],
 "2026-11-20":["Clips de 2 s para o #4 em casa/feriado (sem tela de trabalho)"],
 "2026-11-25":["CONIPC 1 · Chegada: fachada e entrada, 5 s","CONIPC 2 · Ambiente: corredor e estandes, 5 s, sem rosto de terceiros","CONIPC 3 · Painel de longe, 10 s, sem slide de cliente","CONIPC 4 · Você falando 15 s com um aprendizado do dia","CONIPC 5 · Conversa ou networking, de costas ou só mãos/crachá","CONIPC 6 · Encerramento: sua frase final do dia, 5 s"],
 "2026-11-26":["CONIPC 1 · Chegada do dia 2, 5 s","CONIPC 2 · Painel PPP 5.0 ou outro, de longe, 10 s","CONIPC 3 · Você falando 15 s com o aprendizado do dia 2","CONIPC 4 · Conversa ou networking, sem rosto de terceiros","CONIPC 5 · Encerramento: o que você leva do congresso, 10 s"],
 "2026-11-22":["Filmar o preparo das marmitas (é a imagem do #10)","Tela de uma automação real, antes e depois (apoio do #5)"]
};
const EXTRAS=[
 {d:"2026-11-17",id:"t-ler",txt:"Copiar os textos do #1, #2 e #3 pro teleprompter"},
 {d:"2026-11-18",id:"t-insights-01",txt:"Print do Insights do post 01 (tempo médio + % que pulou) e mandar pro Claude"},
 {d:"2026-11-18",id:"t-russell",txt:"Confirmar a política de redes sociais da Russell (vídeos de trabalho)"},
 {d:"2026-11-20",id:"t-feriado",txt:"Feriado: gravar #6 (e #8 se liberado) em casa"},
 {d:"2026-11-20",id:"t-fixar-r3",txt:"Fixar o vídeo #3 no topo do perfil"},
 {d:"2026-11-21",id:"t-montar-r4",txt:"Montar o #4 com os clips da semana (edição do Instagram)"},
 {d:"2026-11-19",id:"t-preencher",txt:"Mandar pro Claude os dados do #5 e do #7 (colchetes) e a lista dos 9 agentes"},
 {d:"2026-11-19",id:"t-mapa-r2",txt:"Mapa de 7 s: pode usar como imagem de apoio no #2 e nos stories. Conferir só que não tenha nome de cliente nem de PPP específica (borrar se tiver). Pode dizer que os agentes foram usados no SGI da Russell. No #2, “mais nove agentes” só como contagem"},
 {d:"2026-11-22",id:"t-editar-r5",txt:"Editar o #5 a partir do vídeo gravado em 19/11 (midia/processado): cortar 0-14 s + 22-36 s, borrar itens da lista (ver nota do #5), gravar narração"},
 {d:"2026-11-22",id:"t-regravar-mapa",txt:"Regravar o mapa só com a tela cheia e firme (tripé ou gravação de tela) se quiser mais qualidade"},
 {d:"2026-11-22",id:"t-conipc-arroba",txt:"CONIPC: usar @ibpppmunicipais (IBPM, organizador) nos stories de 23 a 26/11 e #CONIPC2026; trocar só se o evento divulgar outra hashtag oficial"},
 {d:"2026-11-28",id:"t-conipc-montar",txt:"Montar o Reels pós-CONIPC com os takes de 25 e 26/11: gancho (“O que eu levei de 2 dias de congresso de PPPs”) + 3 aprendizados em tela, 20 a 30 s"},
 {d:"2026-11-30",id:"t-conipc-reels",txt:"Postar o Reels pós-CONIPC às 12h20 (dia sem vídeo novo no plano). Marcar @ibpppmunicipais na legenda e usar #CONIPC2026. Legenda com os 3 aprendizados e pergunta “qual você quer que eu aprofunde?”"},
 {d:"2026-11-30",id:"t-revisao",txt:"Mandar pro Claude os prints de Insights dos vídeos das duas semanas"}
];
const GANCHOS=[
 ["Contrário","Excel não é o problema da sua empresa. É o que vem antes."],["Contrário","IA não vai roubar seu emprego. Quem usa IA, talvez."],
 ["Número","Tenho 10 agentes de IA trabalhando comigo. Esse é o que mais me salva."],["Número","1 planilha, 3 fórmulas, zero relatório manual."],
 ["Confissão","Preciso confessar uma coisa que aconteceu no trabalho essa semana."],["Confissão","Criei um software à noite, depois do CLT. Olha o que aconteceu."],
 ["Dor","Se você ainda copia dado de PDF pra planilha, assiste isso."],["Dor","Seu chefe pede o mesmo relatório toda segunda? Automatiza assim."],
 ["Curiosidade","Pedi pra IA fazer meu trabalho de uma semana. Deu nisso."],["Curiosidade","Ninguém te conta isso sobre virar gestor."],
 ["Antes e depois","Esse era meu relatório. Esse é o de hoje."],["Identificação","Posso te desanimar? Certificado não te promove."]
];
const FINAIS=[["Pra ganhar seguidor","Me segue que amanhã eu mostro a parte 2."],["Pra salvarem","Salva pra usar na próxima segunda."],["Pra compartilharem","Manda pra aquele colega que ainda faz isso na mão."],["Pra comentarem","Comenta AGENTE que eu te mostro os outros."],["Pra chamarem no direct","Me chama no direct com a palavra PLANILHA."]];
const REGRAS=["Texto da tela aparece no 1º segundo","Celular na mão, fora do escritório","Teleprompter perto da lente, pra não parecer leitura","Blusa escura, lugar claro, vertical 9:16","Termina com uma frase só (a do quadro “Falar no final”)","Legenda: copiar do painel, sem hashtag","Nenhum nome de cliente, contrato ou documento real na tela","Stories: no máximo 4 por dia, um com figurinha","Responder todos os comentários na 1ª hora"];

/* ---------- NOTÍCIAS: varredura diária (só os últimos 7 dias, mais recentes primeiro) ----------
   Campos de cada item: data (AAAA-MM-DD), titulo, fonte, link (URL real), resumo (1 linha), angulo (ideia de story/pauta).
   A rotina diária reescreve este array inteiro e atualiza NOTICIAS_ATUALIZADO. */
const NOTICIAS_ATUALIZADO="2026-11-19";
const NOTICIAS=[
 {data:"2026-11-18",titulo:"Google lança o Gemini 4 Neon, modelo voltado a código, trabalho de conhecimento e ciência",fonte:"Unite.AI",link:"https://www.unite.ai/google-launches-gemini-4-neon-for-coding-knowledge-work-and-science/",resumo:"Google anunciou a disponibilidade geral do Gemini 4 Neon em 18/11; detalhes de preço variam entre as fontes, então vale conferir no anúncio oficial.",angulo:"Story: testar o modelo novo numa tarefa de PMO (resumir uma ata e montar plano de ação com responsáveis e prazos) e mostrar o antes e o depois, sem documento real."},
 {data:"2026-11-17",titulo:"O recado dos leilões vazios no saneamento brasileiro",fonte:"Agência iNFRA",link:"https://agenciainfra.com/blog/artigo-o-recado-dos-leiloes-vazios-no-saneamento-brasileiro/",resumo:"Artigo de opinião lista leilões de 2026 sem proposta ou com um único interessado (Saneago, em Goiás, e esgotamento sanitário da Paraíba).",angulo:"Reels/story: por que leilão vazio é sintoma de projeto mal estruturado; 3 perguntas de prontidão que um PMO faria antes de levar um projeto a mercado (sem caso real)."},
 {data:"2026-11-17",titulo:"Ignite 2026: Microsoft aposta em Agent 365 para governar agentes de IA no trabalho",fonte:"RCPmag",link:"https://rcpmag.com/articles/2026/11/17/microsoft-ignite-2026-nadella-makes-the-case.aspx",resumo:"Na abertura do Ignite, Nadella citou 50 milhões de agentes gerenciados no Agent 365 e apresentou Copilot Workspaces e Autopilot.",angulo:"Story: agente de IA também precisa de governança (dono, escopo, registro); comparar com o controle de qualidade de um processo ISO."},
 {data:"2026-11-17",titulo:"Consórcio Lagoa Santa IP vence leilão da PPP de iluminação pública e soluções digitais de Lagoa Santa (MG)",fonte:"B3",link:"https://www.b3.com.br/pt_br/noticias/leilao-na-b3-define-consorcio-para-modernizacao-da-iluminacao-publica-e-solucoes-digitais-de-lagoa-santa-mg.htm",resumo:"Leilão na B3 definiu o consórcio formado por BMPI Infra e Construtora Remo; Agência iNFRA informa deságio de 2,01% sobre contraprestação mensal de R$ 885,5 mil.",angulo:"Story: o que acontece depois do leilão de uma PPP de iluminação (contrato, metas de desempenho, quem acompanha) em 3 telas."},
 {data:"2026-11-13",titulo:"TCU cria o Imis, indicador de maturidade institucional dos municípios em saneamento",fonte:"Agência iNFRA",link:"https://agenciainfra.com/blog/?p=50294",resumo:"O Tribunal de Contas da União criou o Imis para medir a capacidade dos municípios de implementar as diretrizes do Marco Legal do Saneamento.",angulo:"Story: controle externo olhando a maturidade do município antes da concessão; mostrar 3 itens que um PMO checaria na prontidão de um projeto (sem citar caso real)."}
];

const START="2026-11-17", END="2026-11-30";

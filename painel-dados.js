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
const PERFIL={seguidores:12,seguidoresData:"17/11",destaqueNum:209,destaqueTxt:"views no post 02 (18/11)"};

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
  tela:"Criei um agente de IA que vigia os documentos da ISO pra mim.",
  texto:`Criei um agente de IA que vigia os documentos da ISO pra mim.

Quem trabalha com sistema de gestão sabe: um procedimento cita outro, que cita um formulário, que cita uma política. Aí alguém atualiza um documento e ninguém lembra de atualizar o resto. Pronto: vínculo quebrado. E quem acha é o auditor.

Então eu pedi pra IA organizar os vínculos entre os documentos de um sistema de gestão. Ela sabe quem cita quem, em qual revisão, e me avisa sempre que alguma coisa é atualizada.

Hoje eu não confiro vínculo na mão. O agente me avisa antes do auditor.

E esse é só um. Eu tenho mais nove agentes trabalhando comigo.`,
  final:"Comenta AGENTE que eu te mostro os outros.",
  legenda:`Um agente de IA que mapeia os vínculos entre os documentos do SGI e me avisa quando algo muda.
Resultado: menos vínculo quebrado, menos surpresa na auditoria.
Tenho mais 9 agentes. Comenta AGENTE e me diz qual problema você quer ver resolvido.`,
  nota:"Grave a tela com documentos de exemplo, nunca da Russell ou de cliente."},

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

 {n:5,pilar:"IA · automação",gravar:"2026-11-22",postar:"2026-11-23",onde:"Tela dividida + fala curta",
  tela:"Antes: [X horas]. Depois: [Y minutos].",
  texto:`Antes: [X horas]. Depois: [Y minutos]. Mesma tarefa.

Essa aqui é [a tarefa] do jeito que eu fazia: [o passo manual, em uma frase].

E essa é a mesma coisa com automação: [o que a automação faz sozinha].

Por semana, isso me devolve [Z horas] pra pensar no projeto, e não pra copiar dado de um lugar pro outro.`,
  final:"Salva e escolhe uma tarefa sua pra automatizar na segunda.",
  legenda:`Antes: [X horas]. Depois: [Y minutos].
[A tarefa], agora automatizada.
Salva e escolhe uma tarefa sua pra automatizar na segunda.`,
  nota:"Preencha os colchetes com números reais. Me diga qual dos seus agentes ou automações usar e eu fecho o texto. Tela só com planilha de exemplo."},

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
  tela:"Pedi pra IA revisar um documento da ISO. Olha o que ela achou.",
  texto:`Pedi pra IA revisar um documento da ISO. Olha o que ela achou.

Eu criei um plugin que trabalha como uma equipe: um agente escreve, outro é especialista na norma, e um terceiro faz o papel de auditor, sem poder editar nada.

Passei um procedimento de exemplo pra essa equipe revisar, e ela apontou [o que ele apontou de verdade].

Coisa que passaria batido numa leitura rápida.

Mas ele não substitui gente. Quem decide se é não conformidade sou eu. A IA acha, o humano decide o que é problema.`,
  final:"Comenta ISO que eu te mostro como ele funciona por dentro.",
  legenda:`Uma equipe de agentes de IA revisando documento ISO: um escreve, um é especialista na norma, um audita.
A IA encontra. O humano decide.
Comenta ISO pra ver por dentro.`,
  nota:"Troque o colchete pelo achado real. Só documento de teste."},

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
 "2026-11-19":[["Manhã","Foto do café","Bom dia. Hoje vou mostrar um agente de IA que trabalha comigo.",""],["12h20","Compartilhar o vídeo de hoje","Esse agente vigia os documentos da ISO pra mim.","Caixinha: “Que tarefa você queria que uma IA fizesse por você?”"],["Noite","Clip de 5 s da natação","Quinta é dia de natação.",""]],
 "2026-11-20":[["Manhã","Foto do dia de folga","Feriado. Hoje conto de onde eu vim.",""],["12h20","Compartilhar o vídeo de hoje","De menor aprendiz a gestor de projetos.","Caixinha: “Qual foi o seu primeiro emprego?”"],["Noite","Clip da academia","Semana quase fechada.",""]],
 "2026-11-21":[["Meio-dia","Clip de 5 s da natação","Sábado começa na piscina.",""],["Tarde","Compartilhar o vídeo de hoje","A rotina real, sem filtro.",""],["Fim da tarde","Selfie ou foto do sábado","O que você faz pra desligar no fim de semana?","Caixinha de perguntas"]],
 "2026-11-22":[["Manhã","Clip de 5 s do cardio","Domingo: cardio e marmitas.",""],["Tarde","Foto das marmitas prontas","5 almoços prontos.","Enquete: “Você faz marmita?” Sim / Não"],["Noite","Foto do celular montado pra gravar","Gravando os vídeos da semana que vem.",""]],
 "2026-11-23":[["Manhã","Foto do café","Segunda. Qual é a primeira tarefa da sua semana?","Caixinha de perguntas"],["12h20","Compartilhar o vídeo de hoje","Antes e depois de automatizar.","Enquete: “Você ainda faz isso na mão?” Faço / Já automatizei"],["Noite","Clip da academia","Treino feito. E você, já automatizou algo hoje?",""]],
 "2026-11-24":[["Manhã","Foto da mesa de trabalho, sem tela legível","Bom dia. Hoje o vídeo é sobre 5 erros de gestão de projetos.",""],["12h20","Compartilhar o vídeo de hoje","5 erros de gestão de projetos.","Enquete: “Qual desses erros você mais vê?” 1 / 3 / 5"],["Noite","Print da corrida","Ritmo, não pressa.",""]],
 "2026-11-25":[["Manhã","Foto do café","Hoje: IA revisando documento ISO.",""],["12h20","Compartilhar o vídeo de hoje","A IA encontra. O humano decide.","Enquete: “Você confiaria na IA pra revisar documento?” Sim / Ainda não"],["Noite","Compartilhar de novo o vídeo do agente (19/11)","Pra quem chegou agora: o agente que vigia a ISO pra mim.",""]],
 "2026-11-26":[["Manhã","Selfie no carro parado","Hoje eu conto do software que criei depois do expediente.",""],["12h20","Compartilhar o vídeo de hoje","Criei um software depois do CLT.","Caixinha: “Você tem um projeto paralelo?”"],["Noite","Clip da natação","Quinta, natação.",""]],
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

const START="2026-11-17", END="2026-11-30";

export interface OfficeInfo {
  name: string;
  shortName: string;
  lawyer: string;
  role: string;
  tagline: string;
  slogan: string;
  phone: string;
  whatsapp: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  whatsappUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  facebookUrl: string;
  address: string;
  addressShort: string;
  city: string;
  state: string;
  mapsDirectionsUrl: string;
  mapsEmbedUrl: string;
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export const OFFICE_INFO: OfficeInfo = {
  name: "Marcelo Teles Advocacia",
  shortName: "Marcelo Teles Advocacia",
  lawyer: "Dr. Marcelo Teles",
  role: "Advogado e Consultor Jurídico",
  tagline: "Defesa estratégica, técnica e resolutiva dos seus direitos civis, trabalhistas, previdenciários e do consumidor.",
  slogan: "Ampla experiência e atuação em processos estratégicos, focado em resultados, comodidade e segurança.",
  phone: "(17) 99116-0905",
  whatsapp: "5517991160905",
  whatsappNumber: "5517991160905",
  whatsappFormatted: "(17) 99116-0905",
  whatsappUrl:
    "https://wa.me/5517991160905?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.",
  instagramUrl: "https://www.instagram.com/marcelotelesadvocacia/",
  instagramHandle: "@marcelotelesadvocacia",
  facebookUrl: "https://www.facebook.com/MarceloOliveiraTeles/",
  address: "Av. 23, 621 - Centro, Guaíra - SP, 14790-000",
  addressShort: "Centro, Guaíra - SP",
  city: "Guaíra",
  state: "SP",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Av.+23,+621+-+Centro,+Gua%C3%ADra+-+SP,+14790-000",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Av.+23,+621+-+centro,+Gua%C3%ADra+-+SP,+14790-000&t=&z=16&ie=UTF8&iwloc=&output=embed",
  schedule: {
    weekdays: "Segunda a Sexta: 08:00–11:00 e 13:00–17:00",
    saturday: "Fechado",
    sunday: "Fechado",
  },
};

export interface LawyerProfile {
  name: string;
  role: string;
  graduation: string;
  experience: string;
  bio: string[];
  careerHighlights: string[];
  personalNotes: string[];
  differentials: string[];
}

export const LAWYER_PROFILE: LawyerProfile = {
  name: "Dr. Marcelo Teles",
  role: "Advogado Titular | Marcelo Teles Advocacia",
  graduation: "Bacharel em Direito | Especialista em Processos Estratégicos Cíveis, Trabalhistas, Previdenciários e Consumeristas",
  experience: "Atuação jurídica consolidada e focada em resultados",
  bio: [
    "Dr. Marcelo Teles está à frente da Marcelo Teles Advocacia, escritório estruturado para prestar assessoria jurídica de alta precisão técnica e representação combativa em âmbito consultivo e contencioso.",
    "Com sólida vivência na condução de demandas nas áreas Cível, Trabalhista, Previdenciária e do Consumidor, atua fortemente em processos estratégicos com foco em resultados eficientes para pessoas físicas e jurídicas.",
    "Priorizando a comodidade, sigilo e segurança jurídica de seus clientes, o escritório realiza atendimentos presenciais em sua sede no centro de Guaíra/SP, bem como atendimentos online (videoconferência e WhatsApp) para todo o território nacional, sempre com ética e comprometimento inabaláveis.",
  ],
  careerHighlights: [
    "Atuação consolidada em demandas Cíveis, Trabalhistas, Previdenciárias e de Direito do Consumidor.",
    "Estrutura com atendimento presencial no centro de Guaíra/SP e consultoria digital para todo o Brasil.",
    "Foco em processos estratégicos, conciliações assertivas e defesa firme no contencioso.",
    "Conformidade integral com o Provimento nº 205/2021 do CFOAB e Código de Ética e Disciplina.",
  ],
  personalNotes: [
    "Compromisso permanente com a clareza da orientação jurídica e a dignidade de cada cliente.",
    "Atendimento próximo e humanizado, desmistificando trâmites forenses complexos com transparência.",
    "Emprego de estratégias processuais atualizadas para acelerar a obtenção de soluções justas e eficazes.",
  ],
  differentials: [
    "Atendimento Direto com o Advogado: suporte ágil, ético e sem intermediários pelo WhatsApp oficial.",
    "Estratégia Processual Sob Medida: diagnóstico detalhado das especificidades de cada demanda.",
    "Flexibilidade Presencial e Online: comodidade de consulta na sede de Guaíra/SP ou via videoconferência segura.",
    "Ética e Probidade OAB: rigoroso cumprimento das prerrogativas e deveres éticos da advocacia.",
  ],
};

export interface PracticeArea {
  id: string;
  code?: string;
  title: string;
  subtitle?: string;
  description?: string;
  highlights?: string[];
  shortDesc: string;
  iconName: string;
  featured: boolean;
  highlightText: string;
  coverageList: string[];
  casesSummary: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "civil",
    code: "01",
    title: "Direito Cível & Família",
    subtitle: "Segurança patrimonial, resoluções de família, inventários e reparações civis",
    description:
      "Atuação abrangente e estratégica em relações privadas, abrangendo desde ações de família (divórcio, alimentos, partilha de bens e guarda) até procedimentos de inventário judicial e extrajudicial, responsabilidade civil por danos morais/materiais, cobranças, contratos e disputas possessórias imobiliárias.",
    highlights: [
      "Ações de Família: Divórcios consensuais e litigiosos, fixação, revisão e execução de pensão alimentícia (art. 528 CPC).",
      "Inventários e Partilhas: Procedimentos rápidos judiciais e extrajudiciais em cartório, apuração de bens e cálculo do ITCMD.",
      "Responsabilidade Civil: Ações de indenização por danos materiais, danos morais e reparação de prejuízos econômicos.",
      "Cobrança e Execução de Títulos: Recuperação de créditos inadimplidos, penhoras de bens e medidas coercitivas no Sisbajud.",
      "Direito Imobiliário e Posse: Ações de despejo, reintegração e manutenção de posse, usucapião e locações.",
      "Contratos e Obrigações: Elaboração, revisão técnica e rescisão judicial por descumprimento de cláusulas contratuais.",
    ],
    iconName: "Scale",
    featured: true,
    highlightText: "Segurança patrimonial, família, inventários e reparações civis",
    shortDesc:
      "Atuação abrangente e estratégica em ações de família (divórcio, pensão e partilha), inventários rápidos em cartório, reparações civis por danos morais e cobranças judiciais.",
    coverageList: [
      "Ações de Família: Divórcio consensual e litigioso, partilha de bens e pensão alimentícia",
      "Inventários Judiciais e Extrajudiciais em Cartório com Apuração Ágil de ITCMD",
      "Ações Indenizatórias por Danos Morais, Danos Materiais e Reparação Civil",
      "Execuções de Títulos e Cobranças de Créditos Inadimplidos via Sisbajud",
      "Direito Imobiliário: Ações Possessórias, Reintegração, Usucapião e Despejo",
      "Elaboração, Revisão e Rescisão Judicial de Contratos Civis e Comerciais",
    ],
    casesSummary:
      "Atuação técnica com foco em mediações seguras e condução contenciosa assertiva para preservação do patrimônio e da dignidade familiar.",
  },
  {
    id: "trabalhista",
    code: "02",
    title: "Direito do Trabalho",
    subtitle: "Defesa dos direitos do trabalhador e consultoria preventiva empresarial",
    description:
      "Proteção combativa dos direitos trabalhistas assegurados pela CLT e legislação correlata. Condução técnica de cálculos rescisórios, recuperação de sobrejornadas e adicionais, reversão de justa causa indevida, rescisão indireta por faltas do empregador e indenizações por acidentes de trabalho ou doenças ocupacionais.",
    highlights: [
      "Cálculo e Cobrança de Verbas Rescisórias: Revisão de acertos rescisórios, aviso prévio proporcional e multas dos arts. 467 e 477 da CLT.",
      "Horas Extras e Intervalos: Recuperação de horas trabalhadas além da jornada legal, banco de horas irregular e intervalos suprimidos.",
      "Reconhecimento de Vínculo ('Pejotização'): Aplicação da primazia da realidade para converter contratos PJ/MEI fraudulentos em CLT.",
      "Rescisão Indireta do Contrato: Rompimento do contrato por culpa do empregador (atraso de salário, falta de FGTS e rigor excessivo).",
      "Acidentes de Trabalho e LER/DORT: Ações de reparação civil por danos morais, materiais, pensão mensal e garantia de estabilidade.",
      "Insalubridade e Periculosidade: Adicionais legais de 10% a 40% (insalubre) ou 30% (perigoso) por exposição a riscos e agentes nocivos.",
    ],
    iconName: "Briefcase",
    featured: true,
    highlightText: "Defesa dos direitos trabalhistas e assessoria consultiva",
    shortDesc:
      "Cálculos rescisórios rigorosos, recuperação de horas extras não pagas, reversão de demissões abusivas e reconhecimento de vínculo disfarçado em contratos PJ/MEI.",
    coverageList: [
      "Cálculo e Cobrança de Verbas Rescisórias e Multas dos Arts. 467 e 477 da CLT",
      "Horas Extras Habitualmentes Impagas, Intervalos Suprimidos e Banco de Horas",
      "Reconhecimento de Vínculo Empregatício (Fraude de 'PJ' / Pejotização Ilegal)",
      "Ação de Rescisão Indireta por Atraso Salarial ou Ausência de Depósitos de FGTS",
      "Acidentes de Trabalho, Doenças Ocupacionais (Burnout/LER) e Estabilidade Legal",
      "Cobrança de Adicionais de Insalubridade e Periculosidade por Risco Funcional",
    ],
    casesSummary:
      "Exame minucioso de holerites, pontos e contratos para ajuizamento de ações trabalhistas fundamentadas e seguras.",
  },
  {
    id: "previdenciario",
    code: "03",
    title: "Direito Previdenciário (INSS)",
    subtitle: "Concessão, restabelecimento de benefícios e planejamento de aposentadoria",
    description:
      "Assessoria especializada para obtenção e desbloqueio de benefícios previdenciários e assistenciais perante o INSS e a Justiça Federal. Reversão de perícias indeferidas, auxílio por incapacidade temporária (auxílio-doença), aposentadoria por invalidez, BPC/LOAS para idosos e PCDs e aposentadorias pelas regras de transição.",
    highlights: [
      "Benefícios por Incapacidade: Reversão de altas indevidas do INSS para auxílio-doença (B31/B91) e aposentadoria por incapacidade permanente.",
      "BPC/LOAS (Idoso e PCD): Obtenção de benefício assistencial de 1 salário mínimo sem necessidade de tempo mínimo de contribuição.",
      "Planejamento e Concessão de Aposentadorias: Aplicação da regra de transição mais vantajosa (idade, pontos, pedágios de 50% e 100%).",
      "Aposentadoria Especial e Rural: Reconhecimento de tempo de serviço insalubre/perigoso (PPP/LTCAT) e atividade rural familiar.",
      "Pensão por Morte e Auxílio-Reclusão: Amparo jurídico ágil para dependentes em requerimentos de concessão de pensão previdenciária.",
      "Acerto e Correção de CNIS: Retificação de vínculos trabalhistas omitidos, indicadores de pendência e salários de contribuição no INSS.",
    ],
    iconName: "Award",
    featured: true,
    highlightText: "Benefícios negados, aposentadorias e BPC/LOAS",
    shortDesc:
      "Reversão judicial de negativas do INSS, auxílio por incapacidade temporária, concessão de BPC/LOAS para idosos/PCDs e planejamento das melhores regras de aposentadoria.",
    coverageList: [
      "Reversão Judicial de Altas Médicas e Auxílio por Incapacidade Negado",
      "Concessão de BPC/LOAS para Idosos (65+ anos) e Pessoas com Deficiência",
      "Planejamento Previdenciário Estratégico com Regras de Transição da Reforma",
      "Reconhecimento de Tempo Rural Familiar e Atividades Especiais (Insalubres)",
      "Concessão e Revisão de Pensão por Morte para Dependentes do Segurado",
      "Acerto e Regularização de Vínculos Trabalhistas Omitidos no Extrato CNIS",
    ],
    casesSummary:
      "Atuação célere perante o INSS e a Justiça Federal para assegurar a manutenção da renda e a dignidade do segurado.",
  },
  {
    id: "consumidor",
    code: "04",
    title: "Direito do Consumidor",
    subtitle: "Combate a abusividades, negativações indevidas e reparação integral",
    description:
      "Defesa incisiva nas relações de consumo com base no Código de Defesa do Consumidor (Lei 8.078/90). Medidas judiciais urgentes para exclusão de cadastros no SPC/Serasa com indenização por dano moral, ações contra fraudes financeiras e golpes bancários, planos de saúde e litígios contra companhias aéreas.",
    highlights: [
      "Negativação Indevida no SPC/Serasa: Pedido de liminar imediata para baixa da restrição e indenização por dano moral presumido (in re ipsa).",
      "Fraudes Bancárias e Golpes Virtuais: Ações de reparação e ressarcimento por falha de segurança bancária em Pix e empréstimos fraudulentos.",
      "Atrasos e Cancelamentos de Voos: Compensação indenizatória por descumprimento de transporte aéreo, overbooking e extravio definitivo de bagagem.",
      "Planos de Saúde e Tratamentos: Liminares de urgência para cobertura obrigatória de exames, medicamentos de alto custo e cirurgias.",
      "Cobranças Indevidas e Devolução em Dobro: Repetição de indébito (art. 42 CDC) para tarifas e débitos descontados irregularmente.",
      "Vício e Defeito de Produtos: Ações para substituição do bem, cancelamento de compra com estorno de valores e perdas e danos.",
    ],
    iconName: "Calculator",
    featured: true,
    highlightText: "Liminares no SPC/Serasa, fraudes bancárias e planos de saúde",
    shortDesc:
      "Exclusão liminar de CPF negativado indevidamente com dano moral in re ipsa, ações contra fraudes financeiras/Pix, e processos contra negativas de planos de saúde.",
    coverageList: [
      "Liminar de Baixa Imediata de Inscrição Indevida no SPC/Serasa e Dano Moral",
      "Fraudes Financeiras, Golpes no Pix e Empréstimos Bancários Não Contratados",
      "Ações Contra Companhias Aéreas: Atrasos, Cancelamentos e Extravio de Malas",
      "Liminares Contra Planos de Saúde para Cobertura Urgente de Tratamentos e Cirurgias",
      "Repetição de Indébito: Devolução em Dobro de Cobranças e Tarifas Abusivas",
      "Vícios e Defeitos em Produtos: Troca Obrigatória, Restituição e Perdas e Danos",
    ],
    casesSummary:
      "Medidas judiciais enérgicas e reparação integral de prejuízos econômicos e morais causados por abusos de fornecedores.",
  },
];

export interface Article {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  oabDisclaimer: string;
}

export const EDUCATIONAL_TOPICS: Article[] = [
  {
    id: "direito-civil-familia",
    number: "01",
    title: "Família e Sucessões: Alimentos, Partilha de Bens e Inventário Descomplicado",
    category: "Direito Cível",
    readTime: "4 min de leitura",
    summary:
      "Orientações jurídicas essenciais sobre o cálculo de pensão alimentícia, divisão patrimonial na união estável e prazos legais de abertura de inventário.",
    content: [
      "A pensão alimentícia não é fixada obrigatoriamente no percentual de 30% do salário. A lei brasileira estabelece o trinômio 'necessidade de quem recebe, possibilidade de quem paga e proporcionalidade', analisando as despesas reais de moradia, educação, saúde e alimentação.",
      "Na dissolução de união estável ou divórcio sob o regime de comunhão parcial de bens, comunicam-se todos os bens adquiridos de forma onerosa durante o relacionamento, independentemente de em nome de qual cônjuge estejam registrados, ressalvando-se doações e heranças exclusivas.",
      "Quanto ao inventário, a lei prevê a abertura em até 60 dias da data do falecimento para evitar multas sobre o imposto estadual (ITCMD). Quando há consenso e todos os herdeiros são capazes, o procedimento pode ser realizado com rapidez diretamente em cartório de notas.",
    ],
    oabDisclaimer:
      "Conteúdo puramente didático e educativo em estrito cumprimento ao Provimento 205/2021 do CFOAB. Consulte sempre um advogado para o exame do seu caso concreto.",
  },
  {
    id: "direito-trabalho-rescisao",
    number: "02",
    title: "Verbas Rescisórias e Rescisão Indireta: Saiba Quando Há Falta Grave Patronal",
    category: "Direito do Trabalho",
    readTime: "4 min de leitura",
    summary:
      "Entenda os prazos do acerto rescisório, as hipóteses de rescisão indireta da CLT e a segurança do trabalhador no ajuizamento de ações trabalhistas.",
    content: [
      "Ao encerrar o contrato de trabalho, o empregador tem o prazo legal unificado de até 10 dias corridos para efetuar o pagamento integral das verbas rescisórias, sob pena de incidência da multa prevista no artigo 477 da CLT, correspondente a um salário do empregado.",
      "A rescisão indireta é a faculdade legal de o trabalhador 'demitir o empregador' quando a empresa comete faltas graves continuadas, tais como atrasos reiterados de salários, ausência de depósitos de FGTS, rigor excessivo no tratamento ou exigência de tarefas perigosas sem equipamentos de proteção.",
      "Para a comprovação de horas extras e assédio moral na Justiça do Trabalho, prints e mensagens de aplicativos, e-mails corporativos, fotografias de escalas e gravações de conversas das quais o próprio trabalhador faça parte constituem provas plenamente lícitas e válidas.",
    ],
    oabDisclaimer:
      "Artigo informativo destinado à orientação social, em conformidade com o Provimento nº 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "direito-previdenciario-inss",
    number: "03",
    title: "Benefício Negado pelo INSS: Como Restabelecer o Auxílio e Reverter a Alta Médica",
    category: "Direito Previdenciário",
    readTime: "4 min de leitura",
    summary:
      "Como proceder diante do 'limbo previdenciário', perícias médicas negadas no INSS e os requisitos para concessão do BPC/LOAS para idosos e PCDs.",
    content: [
      "Muitos segurados enfrentam o dramático 'limbo previdenciário': o INSS cessa o auxílio por incapacidade temporária em 'alta programada', enquanto o médico da empresa atesta que o trabalhador continua inapto. Nessa hipótese, a jurisprudência protege o segurado e admite ação judicial de restabelecimento imediato.",
      "O laudo médico particular e os exames atualizados possuem valor probatório relevante. Em âmbito judicial, o segurado é submetido a uma perícia médica neutra nomeada pelo magistrado federal, permitindo uma análise técnica aprofundada da real capacidade laboral.",
      "Já o Benefício de Prestação Continuada (BPC/LOAS) independe de contribuições prévias ao INSS, garantindo um salário mínimo mensal para idosos a partir de 65 anos ou pessoas com deficiência de qualquer idade em situação de vulnerabilidade socioeconômica.",
    ],
    oabDisclaimer:
      "Publicação de orientação ao cidadão com respaldo no Provimento 205/2021 da OAB. Não substitui consulta jurídica individualizada.",
  },
  {
    id: "direito-consumidor-negativacao",
    number: "04",
    title: "Negativação Indevida no SPC/Serasa e Golpes Bancários: Reparação Integral",
    category: "Direito do Consumidor",
    readTime: "3 min de leitura",
    summary:
      "Direito à baixa imediata do nome nos órgãos de restrição de crédito e responsabilização objetiva das instituições financeiras por fraudes.",
    content: [
      "A inscrição indevida do nome do consumidor nos cadastros de inadimplentes (SPC e Serasa) gera o chamado dano moral 'in re ipsa', ou seja, o prejuízo moral é presumido pela simples inclusão irregular, dispensando a comprovação de dor psicológica profunda.",
      "O advogado pode requerer tutela de urgência (liminar) ao juiz para que determine a exclusão do apontamento negativo em até 48 a 72 horas, sob cominação de multa diária contra a empresa credora.",
      "Em casos de fraudes no Pix, abertura de contas falsas ou contratação de empréstimos sem consentimento, o Superior Tribunal de Justiça (Súmula 479) reconhece a responsabilidade objetiva das instituições bancárias por fortuito interno, ensejando restituição dos valores e indenização.",
    ],
    oabDisclaimer:
      "Informativo elaborado para fins de esclarecimento de direitos, consoante as diretrizes éticas do Provimento nº 205/2021 do CFOAB.",
  },
];

export interface Review {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  source: string;
}

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Thayna Dias",
    rating: 5,
    timeAgo: "Google Verificado",
    comment:
      "Excelente escritório! Fui atendida com muita atenção e profissionalismo desde o primeiro contato. A equipe é extremamente competente, comprometida e transmite total segurança durante todo o processo. Recomendo a todos que buscam um escritório sério e eficiente.",
    source: "Google Reviews",
  },
  {
    id: "rev-2",
    author: "Wenes Vagner",
    rating: 5,
    timeAgo: "Google Verificado",
    comment:
      "Excelente profissional, agilidade, compromisso em resolver o problema e total transparência. O melhor que já trabalhei até hoje.",
    source: "Google Reviews",
  },
  {
    id: "rev-3",
    author: "Stefane Pasquim",
    rating: 5,
    timeAgo: "Google Verificado",
    comment:
      "Excelente profissional, seu conhecimento jurídico e sua competência profissional foram fundamentais para o êxito do processo.",
    source: "Google Reviews",
  },
  {
    id: "rev-4",
    author: "Ana Livia Mouraria Firmino",
    rating: 5,
    timeAgo: "Google Verificado",
    comment:
      "Agradeço imensamente o seu trabalho e a sua dedicação em meu caso, que foi resolvido de forma rápida e eficiente.",
    source: "Google Reviews",
  },
  {
    id: "rev-5",
    author: "Pousada Divisa Plaza",
    rating: 5,
    timeAgo: "Google Verificado",
    comment:
      "Ótimo profissional. Educado, atencioso. Tirou todas as dúvidas que eu tinha. Recomendo.",
    source: "Google Reviews",
  },
  {
    id: "rev-6",
    author: "Gabriely Lauane",
    rating: 5,
    timeAgo: "Google Verificado",
    comment: "Excelente advogado, eficaz e ágil. Super indico!",
    source: "Google Reviews",
  },
  {
    id: "rev-7",
    author: "Franciele Simão",
    rating: 5,
    timeAgo: "Google Verificado",
    comment:
      "Profissionais atenciosos, competentes e transparentes. Recomendo de olhos fechados!",
    source: "Google Reviews",
  },
  {
    id: "rev-8",
    author: "Johnatan Luiz",
    rating: 5,
    timeAgo: "Google Verificado",
    comment: "Excelente profissional, muito obrigado pelo atendimento.",
    source: "Google Reviews",
  },
  {
    id: "rev-9",
    author: "Fernando Cordeiro",
    rating: 5,
    timeAgo: "Google Verificado",
    comment: "Excelente advogado! Rápido e eficiente, ótimo atendimento.",
    source: "Google Reviews",
  },
  {
    id: "rev-10",
    author: "Diego Feijó",
    rating: 5,
    timeAgo: "Google Verificado",
    comment:
      "Atendentes super atenciosos, profissionais de extrema qualidade, super indico.",
    source: "Google Reviews",
  },
  {
    id: "rev-11",
    author: "Hugo Teles",
    rating: 5,
    timeAgo: "Google Verificado",
    comment:
      "Escritório de advocacia excelente, sempre trabalhando com honestidade!!",
    source: "Google Reviews",
  },
  {
    id: "rev-12",
    author: "Nando Ribeiro",
    rating: 5,
    timeAgo: "Google Verificado",
    comment: "Excelente advogado. Eficaz e muito ágil…",
    source: "Google Reviews",
  },
  {
    id: "rev-13",
    author: "CH Designer",
    rating: 5,
    timeAgo: "Google Verificado",
    comment: "O melhor escritório de advocacia sem sombra de dúvidas.",
    source: "Google Reviews",
  },
  {
    id: "rev-14",
    author: "Piki Bom",
    rating: 5,
    timeAgo: "Google Verificado",
    comment: "Muito bem atendido, profissional excelente.",
    source: "Google Reviews",
  },
  {
    id: "rev-15",
    author: "Adriano Jose Vieira",
    rating: 5,
    timeAgo: "Google Verificado",
    comment: "Excelente advogado, eu recomendo.",
    source: "Google Reviews",
  },
  {
    id: "rev-16",
    author: "Heloisa Melquides",
    rating: 5,
    timeAgo: "Google Verificado",
    comment: "Excelente profissional, tá de parabéns 👏👏",
    source: "Google Reviews",
  },
  {
    id: "rev-17",
    author: "Abner Pablo",
    rating: 5,
    timeAgo: "Google Verificado",
    comment: "Ótimo advogado, muito atencioso.",
    source: "Google Reviews",
  },
  {
    id: "rev-18",
    author: "Tânia Alvares",
    rating: 5,
    timeAgo: "Google Verificado",
    comment:
      "Profissional extremamente competente, atencioso e dedicado.",
    source: "Google Reviews",
  },
  {
    id: "rev-19",
    author: "Marisa Bueno Ipolito",
    rating: 5,
    timeAgo: "Google Verificado",
    comment: "Profissionais excelentes!",
    source: "Google Reviews",
  },
  {
    id: "rev-20",
    author: "Milena Oliveira",
    rating: 5,
    timeAgo: "Google Verificado",
    comment: "Excelente profissional.",
    source: "Google Reviews",
  },
  {
    id: "rev-21",
    author: "Aline Tavares",
    rating: 5,
    timeAgo: "Google Verificado",
    comment: "Excelente profissional.",
    source: "Google Reviews",
  },
];

export interface Step {
  number: string;
  subtitle: string;
  title: string;
  description: string;
}

export const WORK_STEPS: Step[] = [
  {
    number: "01",
    subtitle: "Atendimento Inicial",
    title: "Contato Ágil no WhatsApp ou Presencial",
    description:
      "Recepção imediata da sua mensagem ou agendamento presencial no centro de Guaíra/SP com sigilo e acolhimento ético.",
  },
  {
    number: "02",
    subtitle: "Diagnóstico Jurídico",
    title: "Análise Técnica de Documentos e Fatos",
    description:
      "Exame aprofundado de contratos, rescisões, holerites, extratos ou negativas do INSS para identificação das soluções jurídicas viáveis.",
  },
  {
    number: "03",
    subtitle: "Plano de Ação",
    title: "Definição da Estratégia Resolutiva",
    description:
      "Apresentação transparente do caminho mais célere e seguro, seja por mediação preventiva ou ingresso firme no contencioso.",
  },
  {
    number: "04",
    subtitle: "Acompanhamento Contínuo",
    title: "Condução Combativa e Informação Clara",
    description:
      "Atualizações contínuas sobre o andamento processual, prestando esclarecimentos constantes até a entrega do resultado.",
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

export const FAQ_DATA: FaqCategory[] = [
  {
    id: "civil",
    label: "Cível & Família",
    items: [
      {
        id: "faq-civ-1",
        question: "Fui casado em comunhão parcial de bens. Tudo o que compramos tem que dividir meio a meio?",
        answer:
          "Sim. Todos os bens materiais, veículos, imóveis e valores em conta adquiridos de forma onerosa durante o casamento pertencem a ambos na proporção de 50%, independentemente de quem realizou o pagamento ou de em nome de qual cônjuge o bem esteja registrado. Ficam excluídos da partilha apenas os bens recebidos por herança ou doação exclusiva.",
      },
      {
        id: "faq-civ-2",
        question: "A pensão alimentícia é obrigatoriamente calculada em 30% do salário?",
        answer:
          "Não. A legislação brasileira não prevê nenhuma porcentagem automática de 30%. O valor é estipulado pelo magistrado com base no equilíbrio entre as necessidades concretas da criança (escola, saúde, alimentação, moradia e lazer) e a capacidade financeira líquida do alimentante, podendo ser fixado em outros percentuais ou em salários mínimos.",
      },
      {
        id: "faq-civ-3",
        question: "O inventário pode ser feito em cartório? Qual é o prazo legal para abrir?",
        answer:
          "O inventário extrajudicial em cartório de notas é uma alternativa ágil quando todos os herdeiros são maiores, capazes, estão de acordo com a partilha e não há testamento conflitante. O prazo legal para abertura do inventário é de até 60 dias após o falecimento, evitando a cobrança de multa estadual sobre o imposto de transmissão (ITCMD).",
      },
      {
        id: "faq-civ-4",
        question: "O banco ou credor pode penhorar a casa onde resido com minha família por dívidas comuns?",
        answer:
          "Em regra, não. O imóvel próprio utilizado como moradia permanente da família é resguardado pela Lei nº 8.009/90 como 'Bem de Família', sendo legalmente impenhorável por dívidas comuns civis e bancárias, com exceção de dívidas do próprio imóvel (como IPTU e condomínio) ou de pensão alimentícia.",
      },
    ],
  },
  {
    id: "trabalhista",
    label: "Direito do Trabalho",
    items: [
      {
        id: "faq-trab-1",
        question: "Fui demitido sem justa causa. Quais verbas tenho direito a receber e em qual prazo?",
        answer:
          "Você tem direito a receber o saldo de salário, aviso prévio proporcional ao tempo trabalhado, 13º salário proporcional, férias vencidas e proporcionais com o terço constitucional, saque do FGTS com a multa rescisória de 40% e entrega das guias do Seguro-Desemprego. A empresa tem até 10 dias corridos após o término do contrato para pagar as verbas rescisórias.",
      },
      {
        id: "faq-trab-2",
        question: "Trabalhei como 'PJ' ou sem registro na carteira, mas tinha horário e chefe. Tenho direitos?",
        answer:
          "Sim. Pelo princípio da primazia da realidade, se havia subordinação a superiores, habitualidade, salário fixo e pessoalidade, a Justiça do Trabalho declara nulo o contrato civil ou PJ e reconhece o vínculo formal de emprego sob a CLT, condenando a empresa a pagar retroativamente FGTS, férias, 13º salário e demais benefícios.",
      },
      {
        id: "faq-trab-3",
        question: "A empresa não está depositando meu FGTS ou atrasa constantemente o salário. O que posso fazer?",
        answer:
          "A falta habitual de recolhimento de FGTS e o atraso contínuo de salários configuram faltas graves patronais, autorizando o trabalhador a ajuizar uma Ação de Rescisão Indireta (art. 483 da CLT). Havendo procedência, o contrato é extinto com liberação de todas as indenizações como se fosse uma demissão sem justa causa.",
      },
      {
        id: "faq-trab-4",
        question: "Até quanto tempo após a saída do emprego posso entrar com uma ação trabalhista?",
        answer:
          "O prazo prescricional é de até 2 anos contados a partir da data de término do contrato de trabalho. Dentro dessa ação, é possível cobrar os direitos e verbas referentes aos últimos 5 anos trabalhados, contados retroativamente a partir do ajuizamento da ação.",
      },
    ],
  },
  {
    id: "previdenciario",
    label: "Previdenciário (INSS)",
    items: [
      {
        id: "faq-prev-1",
        question: "O INSS negou ou cortou meu auxílio-doença, mas continuo doente e sem condições de trabalhar. Como agir?",
        answer:
          "Quando o INSS concede a 'alta programada' ou indefere o benefício por incapacidade temporária de forma equivocada, é possível ingressar com ação perante a Justiça Federal. O juiz designará um médico perito especialista judicial independente para avaliar a real incapacidade, viabilizando o restabelecimento do benefício com pagamento dos valores atrasados.",
      },
      {
        id: "faq-prev-2",
        question: "Quem tem direito ao benefício BPC/LOAS e qual é o valor pago?",
        answer:
          "O Benefício de Prestação Continuada (BPC/LOAS) paga um salário mínimo mensal para idosos com 65 anos ou mais e para pessoas com deficiência de qualquer idade que comprovem impedimento de longo prazo e situação de vulnerabilidade socioeconômica na família. Esse benefício assistencial não exige que o beneficiário tenha contribuído anteriormente para o INSS.",
      },
      {
        id: "faq-prev-3",
        question: "Vale a pena fazer um planejamento de aposentadoria antes de dar entrada no pedido?",
        answer:
          "Sim, é fundamental. Com a Reforma da Previdência (EC 103/2019), foram criadas diversas regras de transição (pedágios de 50% e 100%, transição por pontos e idade mínima progressiva). Um cálculo técnico prévio identifica a regra mais favorável financeiramente, evitando perdas definitivas no valor do benefício mensal.",
      },
      {
        id: "faq-prev-4",
        question: "O tempo de trabalho na zona rural ou em atividade insalubre pode antecipar a aposentadoria?",
        answer:
          "Sim. O período de trabalho rural em regime de economia familiar pode ser averbado no INSS para aumentar o tempo de contribuição. Do mesmo modo, períodos em atividades insalubres ou perigosas (comprovadas por PPP e LTCAT) podem ser convertidos com acréscimo de tempo, acelerando a concessão da aposentadoria urbana.",
      },
    ],
  },
  {
    id: "consumidor",
    label: "Consumidor",
    items: [
      {
        id: "faq-con-1",
        question: "Meu nome foi negativado indevidamente no SPC/Serasa por conta ou serviço que não reconheço. O que fazer?",
        answer:
          "A inclusão ou manutenção indevida do CPF nos cadastros restritivos enseja pedido de liminar urgente para baixa imediata do apontamento, sob pena de multa diária, além de indenização por danos morais, cujo prejuízo é presumido pela jurisprudência pacífica do STJ (dano moral in re ipsa).",
      },
      {
        id: "faq-con-2",
        question: "Fui vítima de golpe do Pix ou empréstimo fraudulento em meu nome. O banco deve me indenizar?",
        answer:
          "Sim. O Superior Tribunal de Justiça consolidou na Súmula 479 que as instituições financeiras respondem objetivamente pelos danos gerados por fraudes e delitos praticados por terceiros no âmbito das operações bancárias (fortuito interno), devendo anular a dívida e restituir os valores indevidamente descontados.",
      },
      {
        id: "faq-con-3",
        question: "Tive voo cancelado ou bagagem extraviada em viagem. Quais são meus direitos perante a companhia aérea?",
        answer:
          "O passageiro tem direito a reacomodação imediata ou reembolso integral, além de assistência material proporcional ao tempo de espera (comunicação, alimentação e hospedagem). Em caso de atrasos substanciais, cancelamentos imotivados ou perda definitiva de bagagem, cabe ação de indenização por danos morais e materiais.",
      },
      {
        id: "faq-con-4",
        question: "O plano de saúde negou cobertura de cirurgia, exame ou medicamento de alto custo. A recusa é válida?",
        answer:
          "Havendo indicação médica assistencial expressa, a recusa de cobertura baseada no rol de procedimentos da ANS ou em cláusulas limitativas genéricas costuma ser declarada abusiva pelos tribunais. É cabível o ajuizamento de ação com pedido de tutela de urgência (liminar) para autorização imediata do procedimento.",
      },
    ],
  },
];

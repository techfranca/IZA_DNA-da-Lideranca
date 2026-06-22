import { Accordion } from "./components/Accordion";

const CHECKOUT_URL = "#"; // TODO: substituir pelo link de checkout Hotmart

/* ── tiny reusable pieces ── */
const CheckIcon = () => (
  <svg
    className="h-5 w-5 shrink-0 text-gold"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
      clipRule="evenodd"
    />
  </svg>
);

const CTAButton = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <a
    href="#oferta"
    className={`btn-cta inline-block rounded-xl px-8 py-4 text-sm sm:text-base font-bold text-white tracking-wide shadow-lg whitespace-nowrap ${className}`}
  >
    {children}
  </a>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gold">
    {children}
  </p>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="mt-3 text-center text-3xl font-bold text-white md:text-4xl"
    style={{ fontFamily: "var(--font-playfair), serif" }}
  >
    {children}
  </h2>
);

const Divider = () => (
  <div className="relative w-full">
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex items-center gap-6 py-2">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <svg
          className="h-4 w-4 shrink-0 text-gold/30"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
        </svg>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-dark overflow-hidden">
      {/* ═══════ 1. HERO ═══════ */}
      <section className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-mid to-dark-light" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,154,17,0.12),transparent)]" />

        <div className="relative mx-auto max-w-5xl px-6 pt-10 pb-12 text-center md:pt-14 md:pb-16">
          <h1
            className="text-4xl font-extrabold leading-[1.15] tracking-tight text-white md:text-6xl md:leading-[1.1]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Descubra as 3 habilidades que todo líder de sucesso desenvolveu para{" "}
            <span className="gradient-text">
              engajar o time e entregar resultados
            </span>
          </h1>

          <img
            src="/hero-dna.png"
            alt="DNA da Liderança"
            className="mx-auto mt-10 w-full max-w-[200px] md:max-w-sm rounded-2xl border border-gold/15 shadow-2xl shadow-gold/10"
          />

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Tenha acesso ao método completo que já{" "}
            <span className="text-gold font-semibold underline">
              transformou mais de 500 líderes em todo o Brasil.
            </span>
          </p>

          <div className="mt-10">
            <CTAButton>QUERO SER UM LÍDER DE VERDADE &rarr;</CTAButton>
          </div>
        </div>
      </section>

      {/* ═══════ 2. DORES ═══════ */}
      <section className="relative w-full bg-dark-alt">
        <div className="relative mx-auto max-w-4xl px-6 py-10 md:py-12">
          <SectionTitle>
            A empresa te promoveu a líder,{" "}
            <span className="text-gold">
              mas não te preparou pra liderar
            </span>
          </SectionTitle>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: "😰",
                text: "Você se sente um impostor e tem medo de ser demitido por não conseguir mostrar resultados",
              },
              {
                icon: "👥",
                text: "Seu time não te respeita e você não sabe como mudar isso sem ser autoritário",
              },
              {
                icon: "🔥",
                text: "Vive apagando incêndio o dia inteiro em vez de liderar de verdade",
              },
              {
                icon: "🎯",
                text: "Sabe que é competente tecnicamente, mas falta método pra gerir pessoas e gerar resultados",
              },
            ].map((dor, i) => (
              <div
                key={i}
                className="glass-card flex items-start gap-4 rounded-xl px-6 py-5"
              >
                <span className="text-2xl">{dor.icon}</span>
                <p className="text-base text-white/90">{dor.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CTAButton>QUERO MUDAR ISSO AGORA &rarr;</CTAButton>
          </div>
        </div>
      </section>

      {/* ═══════ 3. O MÉTODO — D.N.A. ═══════ */}
      <section className="relative w-full bg-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,154,17,0.08),transparent)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-10 md:py-12">

          <SectionTitle>
            Conheça o método que{" "}
            <span className="gradient-text">cobre tudo que um líder precisa</span>{" "}
            desenvolver para ter sucesso
          </SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-white/80">
            <span className="text-white font-semibold underline">
              3 módulos cobrindo as competências essenciais de liderança,
              exercícios práticos e ferramentas aplicáveis
            </span>{" "}
            — criado por quem já transformou mais de 500 líderes em pequenas e
            grandes empresas.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* DIRECIONAR */}
            <div className="group relative rounded-2xl border border-gold/30 bg-gradient-to-b from-white/[0.04] to-transparent p-8 shadow-[0_0_15px_rgba(201,154,17,0.12)] transition-all hover:border-gold/50 hover:shadow-[0_0_30px_rgba(201,154,17,0.2)]">
              <span className="absolute top-4 right-5 text-6xl font-extrabold text-white/[0.04]">D</span>
              <div className="mx-auto w-24 h-24">
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Bússola/direção */}
                  <circle cx="60" cy="60" r="50" stroke="#c99a11" strokeWidth="2" opacity="0.3"/>
                  <circle cx="60" cy="60" r="38" stroke="#c99a11" strokeWidth="1.5" opacity="0.15"/>
                  {/* Ponteiro norte */}
                  <path d="M60 18L68 55H52L60 18Z" fill="#c99a11" opacity="0.9"/>
                  {/* Ponteiro sul */}
                  <path d="M60 102L52 65H68L60 102Z" fill="#c99a11" opacity="0.3"/>
                  {/* Centro */}
                  <circle cx="60" cy="60" r="6" fill="#c99a11"/>
                  <circle cx="60" cy="60" r="3" fill="#0a0c12"/>
                  {/* Marcadores cardinais */}
                  <line x1="60" y1="12" x2="60" y2="18" stroke="#c99a11" strokeWidth="2" opacity="0.5"/>
                  <line x1="60" y1="102" x2="60" y2="108" stroke="#c99a11" strokeWidth="2" opacity="0.5"/>
                  <line x1="12" y1="60" x2="18" y2="60" stroke="#c99a11" strokeWidth="2" opacity="0.5"/>
                  <line x1="102" y1="60" x2="108" y2="60" stroke="#c99a11" strokeWidth="2" opacity="0.5"/>
                </svg>
              </div>
              <h3 className="mt-4 text-center text-xl font-bold text-white">Direcionar</h3>
              <p className="mt-2 text-center text-sm text-gold">Como gerar clareza, alinhamento e resultados através da equipe</p>
              <ul className="mt-4 space-y-2">
                {["A diferença entre ser técnico e ser líder","Os 4 alinhamentos que todo líder precisa fazer","Como delegar sem abandonar e sem microgerenciar"].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white">
                    <span className="mt-1 text-gold text-xs">&#9670;</span>{point}
                  </li>
                ))}
              </ul>
            </div>

            {/* NUTRIR CONEXÕES */}
            <div className="group relative rounded-2xl border border-gold/30 bg-gradient-to-b from-white/[0.04] to-transparent p-8 shadow-[0_0_15px_rgba(201,154,17,0.12)] transition-all hover:border-gold/50 hover:shadow-[0_0_30px_rgba(201,154,17,0.2)]">
              <span className="absolute top-4 right-5 text-6xl font-extrabold text-white/[0.04]">N</span>
              <div className="mx-auto w-24 h-24">
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Pessoa central */}
                  <circle cx="60" cy="35" r="10" fill="#c99a11" opacity="0.9"/>
                  <path d="M45 58C45 50 52 45 60 45C68 45 75 50 75 58V62H45V58Z" fill="#c99a11" opacity="0.7"/>
                  {/* Pessoa esquerda */}
                  <circle cx="28" cy="55" r="8" fill="#c99a11" opacity="0.4"/>
                  <path d="M16 73C16 67 21 63 28 63C35 63 40 67 40 73V76H16V73Z" fill="#c99a11" opacity="0.3"/>
                  {/* Pessoa direita */}
                  <circle cx="92" cy="55" r="8" fill="#c99a11" opacity="0.4"/>
                  <path d="M80 73C80 67 85 63 92 63C99 63 104 67 104 73V76H80V73Z" fill="#c99a11" opacity="0.3"/>
                  {/* Linhas de conexão */}
                  <line x1="45" y1="50" x2="36" y2="55" stroke="#c99a11" strokeWidth="1.5" opacity="0.4" strokeDasharray="3 3"/>
                  <line x1="75" y1="50" x2="84" y2="55" stroke="#c99a11" strokeWidth="1.5" opacity="0.4" strokeDasharray="3 3"/>
                  {/* Pulso de conexão */}
                  <circle cx="60" cy="50" r="28" stroke="#c99a11" strokeWidth="1" opacity="0.15"/>
                  <circle cx="60" cy="50" r="40" stroke="#c99a11" strokeWidth="0.8" opacity="0.08"/>
                  {/* Coração pequeno no centro */}
                  <path d="M56 85C56 85 53 82 53 80C53 78.5 54.5 77 56 77C57 77 58 77.5 58.5 78.5C59 77.5 60 77 61 77C62.5 77 64 78.5 64 80C64 82 61 85 58.5 87.5C56 85 56 85 56 85Z" fill="#c99a11" opacity="0.5"/>
                </svg>
              </div>
              <h3 className="mt-4 text-center text-xl font-bold text-white">Nutrir Conexões</h3>
              <p className="mt-2 text-center text-sm text-gold">Como construir confiança, engajamento e influência</p>
              <ul className="mt-4 space-y-2">
                {["Por que algumas equipes entregam mais que outras","Comunicação assertiva e escuta ativa (Regra 70/30)","Como dar feedback sem desmotivar"].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white">
                    <span className="mt-1 text-gold text-xs">&#9670;</span>{point}
                  </li>
                ))}
              </ul>
            </div>

            {/* AUTOLIDERANÇA */}
            <div className="group relative rounded-2xl border border-gold/30 bg-gradient-to-b from-white/[0.04] to-transparent p-8 shadow-[0_0_15px_rgba(201,154,17,0.12)] transition-all hover:border-gold/50 hover:shadow-[0_0_30px_rgba(201,154,17,0.2)]">
              <span className="absolute top-4 right-5 text-6xl font-extrabold text-white/[0.04]">A</span>
              <div className="mx-auto w-24 h-24">
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Silhueta da pessoa */}
                  <circle cx="60" cy="40" r="14" fill="#c99a11" opacity="0.8"/>
                  <path d="M38 75C38 62 48 54 60 54C72 54 82 62 82 75V80H38V75Z" fill="#c99a11" opacity="0.5"/>
                  {/* Aura / brilho interno */}
                  <circle cx="60" cy="55" r="32" stroke="#c99a11" strokeWidth="1.5" opacity="0.2"/>
                  <circle cx="60" cy="55" r="42" stroke="#c99a11" strokeWidth="1" opacity="0.1"/>
                  {/* Estrela acima da cabeça */}
                  <path d="M60 8L62.5 18L72 16L65 23L72 30L62.5 28L60 38L57.5 28L48 30L55 23L48 16L57.5 18L60 8Z" fill="#c99a11" opacity="0.6"/>
                  {/* Raios de luz */}
                  <line x1="60" y1="90" x2="60" y2="100" stroke="#c99a11" strokeWidth="1.5" opacity="0.3"/>
                  <line x1="35" y1="85" x2="28" y2="92" stroke="#c99a11" strokeWidth="1.5" opacity="0.2"/>
                  <line x1="85" y1="85" x2="92" y2="92" stroke="#c99a11" strokeWidth="1.5" opacity="0.2"/>
                  <line x1="25" y1="60" x2="15" y2="60" stroke="#c99a11" strokeWidth="1.5" opacity="0.15"/>
                  <line x1="95" y1="60" x2="105" y2="60" stroke="#c99a11" strokeWidth="1.5" opacity="0.15"/>
                </svg>
              </div>
              <h3 className="mt-4 text-center text-xl font-bold text-white">Autoliderança</h3>
              <p className="mt-2 text-center text-sm text-gold">Como liderar a si mesmo para liderar melhor os outros</p>
              <ul className="mt-4 space-y-2">
                {["O impacto do seu comportamento na equipe","Inteligência emocional na prática","Mapa de Pontos Fortes e Gaps + Plano de Evolução"].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white">
                    <span className="mt-1 text-gold text-xs">&#9670;</span>{point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════ 4. AUTORIDADE ═══════ */}
      <section className="relative w-full bg-dark-alt">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(201,154,17,0.06),transparent)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-10 md:py-12">

          <SectionTitle>
            Criado por quem{" "}
            <span className="text-gold">entende de liderança</span>
            <br />na prática
          </SectionTitle>
          <p className="mt-3 text-center text-sm text-white/50">
            Conheça quem está por trás do método:
          </p>

          <div className="mt-10 flex flex-col items-center gap-12 md:flex-row md:items-start">
            <div className="relative shrink-0">
              <div className="glow-ring h-72 w-72 overflow-hidden rounded-2xl border border-gold/20">
                <img
                  src="/izabela.png"
                  alt="Izabela Holanda"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="flex-1">
              <h3
                className="text-2xl font-bold text-white md:text-3xl"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Me. Izabela Holanda
              </h3>
              <p className="mt-1 text-sm font-medium text-gold">
                Especialista em Liderança e Psicologia Positiva
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Psicóloga e Mestra em Psicologia pela UFC",
                  "Mais de 10 anos desenvolvendo líderes em pequenas e grandes empresas",
                  "Fundadora da IH Consultoria e Desenvolvimento Humano",
                  "Mentora de executivos e gestores",
                  "Congressista internacional em Psicologia Positiva (Portugal)",
                  "Co-autora de 3 livros publicados no Brasil e em Portugal",
                  "+500 líderes transformados",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <p className="text-base text-white/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <CTAButton>QUERO APRENDER COM ELA &rarr;</CTAButton>
          </div>
        </div>
      </section>

      {/* ═══════ 5. O QUE VOCÊ VAI RECEBER ═══════ */}
      <section className="relative w-full bg-dark">
        <div className="relative mx-auto max-w-3xl px-6 py-10 md:py-12">

          <SectionTitle>
            O que você vai aprender{" "}
            <span className="text-gold">dentro do DNA</span>
          </SectionTitle>

          <div className="mt-12 space-y-4">
            {[
              {
                num: "01",
                letter: "D",
                title: "Direcionar",
                desc: "Aprenda a dar clareza pro seu time, alinhar expectativas e gerar resultados sem precisar fazer tudo sozinho. Chega de centralizar e apagar incêndio.",
              },
              {
                num: "02",
                letter: "N",
                title: "Nutrir Conexões",
                desc: "Descubra como construir confiança genuína, se comunicar com assertividade e dar feedbacks que motivam em vez de desmotivar. Seu time vai querer te seguir.",
              },
              {
                num: "03",
                letter: "A",
                title: "Autoliderança",
                desc: "Conheça seus pontos fortes e gaps como líder, desenvolva inteligência emocional e crie um plano concreto de evolução para os próximos 30 dias.",
              },
            ].map((mod) => (
              <div
                key={mod.num}
                className="relative flex items-start gap-5 rounded-2xl border border-gold/10 bg-white/[0.03] px-6 py-6 transition-all hover:border-gold/25"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-lg font-bold text-gold">
                  {mod.letter}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{mod.title}</h3>
                  <p className="mt-2 text-white/75 leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-white/50">
            3 módulos &bull; 9 aulas gravadas de 20-30 min &bull; Exercícios práticos &bull; Ferramentas aplicáveis
          </p>

          <div className="mt-10 text-center">
            <CTAButton>QUERO TER ACESSO AO CONTEÚDO &rarr;</CTAButton>
          </div>
        </div>
      </section>

      {/* ═══════ 6. DEPOIMENTOS ═══════ */}
      <section className="relative w-full bg-dark">
        <div className="relative mx-auto max-w-5xl px-6 py-10 md:py-12">

          <SectionTitle>
            O que dizem os líderes que{" "}
            <span className="text-gold">já passaram pela Izabela</span>
          </SectionTitle>
          <p className="mt-4 text-center text-sm text-white/50">
            Prints reais de profissionais que foram desenvolvidos por ela
          </p>

          <div className="mt-12 columns-2 gap-4 md:columns-3">
            {Array.from({ length: 17 }, (_, i) => (
              <img
                key={i}
                src={`/depoimentos/dep-${i + 1}.png`}
                alt={`Depoimento ${i + 1}`}
                className="mb-4 w-full rounded-xl border border-white/10 shadow-lg"
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <CTAButton>QUERO O MESMO RESULTADO &rarr;</CTAButton>
          </div>
        </div>
      </section>

      {/* ═══════ 6. PARA QUEM É ═══════ */}
      <section className="relative w-full bg-dark-alt">
        <div className="relative mx-auto max-w-3xl px-6 py-10 md:py-12">

          <SectionTitle>
            Para quem é <span className="text-gold">este curso</span>
          </SectionTitle>

          <div className="mt-12 space-y-4">
            {[
              "Líderes, coordenadores e supervisores que foram promovidos sem preparo técnico em gestão de pessoas",
              "Profissionais que sabem que são bons tecnicamente, mas precisam de método pra liderar",
              "Quem já tentou liderar no improviso e sente que está perdendo o controle",
              "Quem quer conquistar o respeito do time e da diretoria pela competência, não pelo cargo",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-6 py-4"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green/15">
                  <svg
                    className="h-4 w-4 text-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="text-base text-white/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 7. OFERTA ═══════ */}
      <section className="relative w-full bg-dark py-10 sm:py-14" id="oferta">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <div className="relative rounded-2xl border-2 border-gold/30 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6 sm:p-8 glow-gold">

            {/* Badge */}
            <div className="absolute -top-3 -right-3">
              <div className="bg-gold text-[#0a0c12] px-4 py-1 rounded-full font-bold text-xs shadow-lg">
                OFERTA DE LANÇAMENTO
              </div>
            </div>

            {/* Alerta de escassez */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-2.5 text-center mb-4">
              <p className="text-xs font-bold text-red-400">
                Oferta especial válida somente até 30/07/2026
              </p>
            </div>

            <div className="text-center space-y-6">
              <h2
                className="text-xl sm:text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Garanta seu acesso agora
              </h2>

              {/* O que você recebe */}
              <div className="text-left space-y-2.5">
                <p className="text-xs text-gold font-semibold uppercase tracking-wider text-center mb-3">
                  O que você recebe
                </p>

                {[
                  {
                    title: "Curso completo DNA da Liderança",
                    desc: "3 módulos · 9 aulas gravadas",
                    price: "R$ 97",
                  },
                  {
                    title: "Exercícios práticos por módulo",
                    desc: "aplicação imediata no seu dia a dia",
                    price: "R$ 50",
                  },
                  {
                    title: "Ferramentas exclusivas",
                    desc: "Balança da Liderança + Plano de Evolução",
                    price: "R$ 50",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <svg className="h-5 w-5 text-green shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd"/>
                    </svg>
                    <p className="text-sm text-zinc-300">
                      <strong className="text-white">{item.title}</strong> — {item.desc}
                      <span className="text-red-400 ml-1 line-through text-xs font-bold">{item.price}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Preço */}
              <div className="pt-4 border-t border-zinc-800/60">
                <p className="text-base text-zinc-400 mb-2">
                  De <span className="line-through text-red-400 text-2xl font-bold">R$ 197</span>
                </p>
                <p className="text-xs text-zinc-500 mb-1 uppercase tracking-wider">por apenas</p>
                <p
                  className="text-5xl sm:text-6xl font-bold text-green"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  R$ 47
                </p>
                <p className="text-xs text-zinc-500 mt-2">Pagamento único — acesso imediato</p>
              </div>

              {/* Botão */}
              <a
                href={CHECKOUT_URL}
                className="btn-cta inline-flex items-center justify-center font-bold tracking-wide rounded-lg text-white shadow-lg shadow-green/20 px-8 py-5 text-base sm:text-lg w-full"
              >
                GARANTIR OFERTA
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                </svg>
              </a>

              {/* Garantia */}
              <div className="flex items-center gap-3 bg-[#0a0c12]/60 border border-zinc-800/60 rounded-xl p-4 text-left">
                <svg className="h-8 w-8 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.661 2.237a.531.531 0 0 1 .678 0 11.947 11.947 0 0 0 7.078 2.749.5.5 0 0 1 .479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 0 1-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 0 1 .48-.425 11.947 11.947 0 0 0 7.077-2.75Zm4.196 5.954a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd"/>
                </svg>
                <div>
                  <p className="text-sm font-semibold text-white">Garantia de 7 dias</p>
                  <p className="text-xs text-zinc-400">Se não for o que esperava, devolvemos 100% — sem perguntas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 8. FAQ ═══════ */}
      <section className="relative w-full bg-dark-alt">
        <div className="relative mx-auto max-w-3xl px-6 py-10 md:py-12">

          <SectionTitle>
            Perguntas <span className="text-gold">frequentes</span>
          </SectionTitle>

          <div className="mt-12 space-y-3">
            {[
              {
                q: "Pra quem é esse curso?",
                a: "Para líderes, coordenadores e supervisores que foram promovidos sem preparo técnico em gestão de pessoas. Se você sente que precisa de um método pra liderar com segurança, esse curso é pra você.",
              },
              {
                q: "Preciso ter experiência como líder?",
                a: "Não. O curso foi pensado justamente pra quem está começando ou foi jogado de paraquedas num cargo de liderança.",
              },
              {
                q: "Qual o formato das aulas?",
                a: "São 9 aulas gravadas de 20 a 30 minutos, divididas em 3 módulos, com exercício prático ao final de cada módulo. Você assiste no seu ritmo.",
              },
              {
                q: "Por quanto tempo tenho acesso?",
                a: "Você terá acesso por 1 ano a partir da data da compra.",
              },
              {
                q: "Como funciona a garantia?",
                a: "Você tem 7 dias para assistir. Se não gostar, basta solicitar o reembolso pela própria plataforma Hotmart. Devolvemos 100% do valor, sem perguntas.",
              },
              {
                q: "Como acesso o curso depois da compra?",
                a: "Após a confirmação do pagamento, você recebe um e-mail com o login e senha para acessar a área de membros na Hotmart.",
              },
            ].map((faq, i) => (
              <Accordion key={i} title={faq.q}>
                <p>{faq.a}</p>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 9. CTA FINAL ═══════ */}
      <section className="relative w-full bg-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,154,17,0.1),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-6 py-10 text-center md:py-12">
          <h2
            className="text-3xl font-bold text-white md:text-4xl"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Sem método, você é só mais um chefe.
            <br />
            <span className="gradient-text">
              Com o DNA, você vira o líder que todo time precisa.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Por menos de{" "}
            <span className="text-gold font-semibold">R$ 1 por dia</span>, você
            tem acesso ao método que vai transformar a forma como você lidera.
          </p>

          <div className="mt-10">
            <CTAButton>QUERO COMEÇAR AGORA &rarr;</CTAButton>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60">
            <span>Garantia 7 dias</span>
            <span className="text-gold/30">&bull;</span>
            <span>Acesso imediato</span>
            <span className="text-gold/30">&bull;</span>
            <span>Compra segura Hotmart</span>
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="w-full border-t border-white/5 bg-dark">
        <div className="mx-auto max-w-4xl px-6 py-10 text-center text-sm text-white/40">
          <p>
            &copy; {new Date().getFullYear()} IH Consultoria e Desenvolvimento
            Humano. Todos os direitos reservados.
          </p>
          <p className="mt-3 text-xs text-white/25">
            Este produto é comercializado com apoio da Hotmart. A plataforma não
            faz controle editorial prévio dos produtos. A compra deste produto
            não garante necessariamente qualquer resultado. Este site não é
            afiliado ao Facebook, Google ou qualquer entidade do Meta Platforms,
            Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}

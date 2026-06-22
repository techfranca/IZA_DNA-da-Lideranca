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
    className={`btn-cta inline-block rounded-xl px-10 py-5 text-lg font-bold text-white tracking-wide shadow-lg ${className}`}
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
              conquistar respeito, engajar o time e entregar resultados
            </span>
          </h1>

          <img
            src="/hero-dna.png"
            alt="DNA da Liderança"
            className="mx-auto mt-10 w-full max-w-[200px] md:max-w-sm rounded-2xl border border-gold/15 shadow-2xl shadow-gold/10"
          />

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Tenha acesso ao método completo que já transformou mais de{" "}
            <span className="text-gold font-semibold">500 líderes</span> em
            todo o Brasil. Criado pela psicóloga e Mestra pela UFC, com mais de
            10 anos de experiência desenvolvendo
            líderes em pequenas e grandes empresas.
          </p>

          <div className="mt-10">
            <CTAButton>QUERO ME TORNAR UM LÍDER DE VERDADE &rarr;</CTAButton>
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
            Conheça o método que cobre tudo que um líder precisa{" "}
            <span className="gradient-text">desenvolver para ter sucesso</span>
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
            {[
              {
                letter: "D",
                title: "Direcionar",
                subtitle:
                  "Como gerar clareza, alinhamento e resultados através da equipe",
                points: [
                  "A diferença entre ser técnico e ser líder",
                  "Os 4 alinhamentos que todo líder precisa fazer",
                  "Como delegar sem abandonar e sem microgerenciar",
                ],
                icon: (
                  <svg
                    className="h-8 w-8 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>
                ),
              },
              {
                letter: "N",
                title: "Nutrir Conexões",
                subtitle:
                  "Como construir confiança, engajamento e influência",
                points: [
                  "Por que algumas equipes entregam mais que outras",
                  "Comunicação assertiva e escuta ativa (Regra 70/30)",
                  "Como dar feedback sem desmotivar",
                ],
                icon: (
                  <svg
                    className="h-8 w-8 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                ),
              },
              {
                letter: "A",
                title: "Autoliderança",
                subtitle:
                  "Como liderar a si mesmo para liderar melhor os outros",
                points: [
                  "O impacto do seu comportamento na equipe",
                  "Inteligência emocional na prática",
                  "Mapa de Pontos Fortes e Gaps + Plano de Evolução",
                ],
                icon: (
                  <svg
                    className="h-8 w-8 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                ),
              },
            ].map((p) => (
              <div
                key={p.letter}
                className="group relative rounded-2xl border border-gold/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 transition-all hover:border-gold/30 hover:shadow-[0_0_40px_rgba(201,154,17,0.08)]"
              >
                <span className="absolute top-4 right-5 text-6xl font-extrabold text-white/[0.04]">
                  {p.letter}
                </span>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 transition-colors group-hover:bg-gold/20">
                  {p.icon}
                </div>
                <h3 className="mt-6 text-center text-xl font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-center text-sm text-gold/80">
                  {p.subtitle}
                </p>
                <ul className="mt-4 space-y-2">
                  {p.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-white/70"
                    >
                      <span className="mt-1 text-gold text-xs">&#9670;</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p
            className="mx-auto mt-14 max-w-xl text-center text-xl font-medium text-white"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            &ldquo;Liderança não é um cargo.{" "}
            <span className="gradient-text">Liderança é uma habilidade.</span>
            &rdquo;
          </p>
        </div>
      </section>

      {/* ═══════ 4. AUTORIDADE ═══════ */}
      <section className="relative w-full bg-dark-alt">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(201,154,17,0.06),transparent)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-10 md:py-12">

          <SectionTitle>
            Criado por quem{" "}
            <span className="text-gold">entende de liderança na prática</span>
          </SectionTitle>

          <div className="mt-12 flex flex-col items-center gap-12 md:flex-row md:items-start">
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
                Izabela <span className="text-gold">Holanda</span>
              </h3>

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

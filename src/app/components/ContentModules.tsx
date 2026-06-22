"use client";

import { useState } from "react";

const aulas = [
  { num: "01", title: "Você foi promovido. E agora?", desc: "O erro mais comum dos novos líderes · A diferença entre ser técnico e ser líder · O verdadeiro papel da liderança" },
  { num: "02", title: "Os 4 alinhamentos que todo líder precisa fazer", desc: "O que precisa ser feito · Quem fará · Até quando · Como saberemos que deu certo" },
  { num: "03", title: "Delegar não é abandonar", desc: "Por que os líderes centralizam · Os prejuízos de fazer tudo sozinho · Como acompanhar sem microgerenciar" },
  { num: "04", title: "O poder das conexões na liderança", desc: "Por que algumas equipes entregam mais · Confiança como base · Os erros que afastam os liderados" },
  { num: "05", title: "Comunicação que aproxima", desc: "Comunicação assertiva · Escuta ativa · Regra 70/30 · Como garantir entendimento" },
  { num: "06", title: "Feedback e reconhecimento", desc: "O que é e o que não é feedback · Como corrigir sem desmotivar · Modelo: Situação → Comportamento → Impacto → Próximo passo" },
  { num: "07", title: "O líder que você é hoje", desc: "O impacto do seu comportamento · Como seus pontos fortes influenciam a equipe · A importância do autoconhecimento" },
  { num: "08", title: "Inteligência emocional na prática", desc: "Como reconhecer emoções · Como evitar reações impulsivas · Como agir sob pressão em situações reais" },
  { num: "09", title: "Mapa dos Pontos Fortes e Gaps", desc: "Ferramenta Balança da Liderança · Identificação de forças e gaps · Plano de Evolução com ações para os próximos 30 dias" },
];

export function ContentModules() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? aulas : aulas.slice(0, 4);

  return (
    <>
      <div className="mt-10 space-y-3">
        {visible.map((aula) => (
          <div
            key={aula.num}
            className="rounded-xl border border-zinc-800/60 bg-white/[0.02] p-5"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-sm font-bold text-gold">
                {aula.num}
              </span>
              <div>
                <h3 className="text-base font-bold text-white">{aula.title}</h3>
                <p className="mt-1.5 text-sm text-white/60">{aula.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-gold/30 bg-gold/5 px-6 py-3 text-sm font-semibold text-gold transition-all hover:bg-gold/10"
          >
            VER TODO O CONTEÚDO
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>
      )}

      <p className="mt-8 text-center text-sm text-white/40">
        + Exercícios práticos ao final de cada módulo e ferramentas exclusivas aplicáveis no dia a dia
      </p>
    </>
  );
}

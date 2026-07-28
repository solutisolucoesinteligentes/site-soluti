"use client";

import Image from "next/image";
import { useState } from "react";

const whatsappUrl =
  "https://wa.me/5548991104708?text=Ol%C3%A1%21%20Conheci%20a%20SoluTi%20pelo%20site%20e%20gostaria%20de%20solicitar%20atendimento.";

const services = [
  {
    number: "01",
    tag: "Performance",
    title: "Assistência técnica e upgrades",
    description:
      "Manutenção preventiva e corretiva em computadores e notebooks, com diagnóstico cuidadoso, troca de SSD, memória RAM e outros componentes.",
    items: ["Computadores e notebooks", "SSD e memória RAM", "Otimização de desempenho"],
  },
  {
    number: "02",
    tag: "Sistemas",
    title: "Formatação e softwares",
    description:
      "Instalação e configuração de Windows, drivers, programas profissionais, certificados digitais e ferramentas essenciais para o seu dia a dia.",
    items: ["Windows e drivers", "Programas e aplicativos", "Certificados digitais"],
  },
  {
    number: "03",
    tag: "Proteção",
    title: "Dados e segurança digital",
    description:
      "Backup, tentativa de recuperação de arquivos, remoção de vírus e malwares, configuração de antivírus e atualização de sistemas.",
    items: ["Backup de arquivos", "Recuperação de dados", "Vírus e malwares"],
  },
  {
    number: "04",
    tag: "Impressoras",
    title: "Instalação e suporte para impressoras",
    description:
      "Instalação, configuração e solução de problemas em impressoras jato de tinta, laser e térmicas, incluindo drivers e compartilhamento.",
    items: ["Instalação e drivers", "Jato de tinta, laser e térmicas", "Configuração e compartilhamento"],
  },
  {
    number: "05",
    tag: "Agilidade",
    title: "Suporte remoto e presencial",
    description:
      "Soluções rápidas e seguras à distância ou atendimento diretamente no local quando o problema exige uma visita técnica.",
    items: ["Acesso remoto seguro", "Atendimento no local", "Araranguá e região"],
  },
  {
    number: "06",
    tag: "Sob medida",
    title: "Montagem e consultoria",
    description:
      "Computadores personalizados para trabalho, estudos e jogos, além de orientação para escolher equipamentos e melhorar seus recursos tecnológicos.",
    items: ["PCs personalizados", "Escolha de equipamentos", "Soluções para empresas"],
  },
];

const steps = [
  {
    number: "01",
    title: "Conte o que está acontecendo",
    text: "Fale com a SoluTi pelo WhatsApp e descreva o problema ou a necessidade.",
  },
  {
    number: "02",
    title: "Receba a melhor orientação",
    text: "Avaliamos se o atendimento pode ser remoto ou se é necessário um diagnóstico presencial.",
  },
  {
    number: "03",
    title: "Volte a trabalhar sem complicação",
    text: "Executamos a solução adequada com clareza, cuidado e foco na confiabilidade do equipamento.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="SoluTi Tech Store — início">
            <Image
              src="/logo-soluti-transparent.png"
              width={1983}
              height={793}
              alt="SoluTi Tech Store"
              priority
            />
          </a>

          <button
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Menu principal">
            <a href="#inicio" onClick={closeMenu}>Início</a>
            <a href="#servicos" onClick={closeMenu}>Serviços</a>
            <a href="#como-funciona" onClick={closeMenu}>Como funciona</a>
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
            <a
              className="nav-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Solicitar atendimento
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />

        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="signal-dot" />
              Assistência técnica em Araranguá e região
            </div>

            <h1>
              Tecnologia que resolve.
              <span>Desempenho que permanece.</span>
            </h1>

            <p className="hero-text">
              Manutenção, upgrades, impressoras e suporte especializado para manter seus
              equipamentos rápidos, seguros e prontos para acompanhar a sua rotina.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Falar com um técnico <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="#servicos">
                Conhecer soluções <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="hero-trust" aria-label="Diferenciais da SoluTi">
              <div>
                <span className="trust-mark">01</span>
                <p><strong>Diagnóstico claro</strong><small>Solução adequada para cada caso</small></p>
              </div>
              <div>
                <span className="trust-mark">02</span>
                <p><strong>Atendimento flexível</strong><small>Remoto, presencial ou no local</small></p>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Soluções em tecnologia da SoluTi">
            <div className="compact-visual-top">
              <span className="compact-status"><i /> Suporte ativo</span>
              <span className="compact-code">SOLUTI_048</span>
            </div>

            <div className="compact-visual-main">
              <div className="compact-symbol" aria-hidden="true"><span>S</span></div>
              <div>
                <small>ASSISTÊNCIA TÉCNICA</small>
                <h2>Simples, rápido e sob medida.</h2>
              </div>
            </div>

            <div className="compact-solutions" aria-label="Principais soluções">
              <span>Computadores</span>
              <span>Notebooks</span>
              <span>Impressoras</span>
            </div>
          </div>
        </div>

        <div className="container hero-strip">
          <span>MANUTENÇÃO</span><i />
          <span>UPGRADES</span><i />
          <span>IMPRESSORAS</span><i />
          <span>SEGURANÇA</span><i />
          <span>SUPORTE</span>
        </div>
      </section>

      <section className="services section" id="servicos">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">// SOLUÇÕES</span>
              <h2>Suporte completo para a sua tecnologia.</h2>
            </div>
            <p>
              Da manutenção do computador à instalação de sistemas e impressoras, a SoluTi reúne as
              soluções essenciais para pessoas e empresas trabalharem com mais segurança e produtividade.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-topline">
                  <span className="service-number">{service.number}</span>
                  <span className="service-tag">{service.tag}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Solicitar atendimento <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process section" id="como-funciona">
        <div className="container process-layout">
          <div className="process-intro">
            <span className="section-label">// COMO FUNCIONA</span>
            <h2>Do problema à solução, sem complicação.</h2>
            <p>
              Você não precisa entender de tecnologia para receber um atendimento
              claro. A SoluTi identifica a necessidade e orienta o melhor caminho.
            </p>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
              Iniciar atendimento agora <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="process-steps">
            {steps.map((step) => (
              <article className="process-step" key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="container about-layout">
          <div className="about-panel" aria-hidden="true">
            <div className="about-grid" />
            <span className="about-code code-one">SYSTEM_READY</span>
            <span className="about-code code-two">SOLUTI_048</span>
            <div className="about-rings"><span /><span /><span /><strong>S</strong></div>
            <div className="about-status"><span /> ATENDIMENTO ATIVO</div>
          </div>

          <div className="about-copy">
            <span className="section-label">// SOBRE A SOLUTI</span>
            <h2>Tecnologia próxima, clara e feita para funcionar.</h2>
            <p>
              A SoluTi Tech Store oferece assistência técnica e soluções de tecnologia
              para clientes residenciais e empresas em Araranguá e cidades vizinhas.
            </p>
            <p>
              Cada atendimento começa entendendo a real necessidade do cliente. O objetivo
              é recuperar o desempenho, proteger os dados e indicar soluções que façam sentido
              para o uso e o orçamento de cada pessoa.
            </p>

            <div className="about-points">
              <div><strong>Atendimento remoto</strong><span>Agilidade para problemas que podem ser resolvidos à distância.</span></div>
              <div><strong>Atendimento presencial</strong><span>Suporte técnico em Araranguá e cidades vizinhas.</span></div>
              <div><strong>Soluções personalizadas</strong><span>Recomendações compatíveis com sua necessidade e equipamento.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="coverage section">
        <div className="container coverage-card">
          <div>
            <span className="section-label">// ÁREA DE ATENDIMENTO</span>
            <h2>Araranguá e cidades vizinhas.</h2>
            <p>
              Atendimento presencial em Araranguá e região. Para cidades vizinhas,
              consulte a disponibilidade e a taxa de deslocamento pelo WhatsApp.
            </p>
          </div>
          <div className="coverage-action">
            <span className="location-pulse" aria-hidden="true">◎</span>
            <p><small>BASE DE ATENDIMENTO</small><strong>Araranguá / SC</strong></p>
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Consultar atendimento <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="faq section">
        <div className="container faq-layout">
          <div>
            <span className="section-label">// DÚVIDAS FREQUENTES</span>
            <h2>Antes de chamar o suporte.</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>O atendimento pode ser feito remotamente?<span>+</span></summary>
              <p>Sim. Instalação de programas, configurações e diversos problemas de sistema podem ser resolvidos por acesso remoto seguro.</p>
            </details>
            <details>
              <summary>Vocês atendem fora de Araranguá?<span>+</span></summary>
              <p>Sim. A SoluTi atende cidades vizinhas, conforme disponibilidade e com taxa de deslocamento informada antes da visita.</p>
            </details>
            <details>
              <summary>É possível melhorar um computador lento?<span>+</span></summary>
              <p>Na maioria dos casos, sim. Após avaliar o equipamento, podemos indicar otimização, formatação ou upgrades de SSD e memória RAM.</p>
            </details>
            <details>
              <summary>A recuperação de dados é garantida?<span>+</span></summary>
              <p>A possibilidade depende do estado do dispositivo e dos arquivos. O caso precisa ser avaliado antes de confirmar a viabilidade da recuperação.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-grid" aria-hidden="true" />
        <div className="container cta-inner">
          <span className="section-label">// PRECISA DE AJUDA?</span>
          <h2>Seu problema de tecnologia pode começar a ser resolvido agora.</h2>
          <p>Fale com a SoluTi pelo WhatsApp e conte o que está acontecendo.</p>
          <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
            Chamar no WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#inicio" aria-label="Voltar ao início">
            <Image src="/logo-soluti-transparent.png" width={1983} height={793} alt="SoluTi Tech Store" />
          </a>
          <p>Assistência técnica e soluções em tecnologia para Araranguá e região.</p>
          <div className="footer-links">
            <a href="#servicos">Serviços</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#sobre">Sobre</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 SoluTi Tech Store.</span>
          <span>Araranguá / SC</span>
        </div>
      </footer>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a SoluTi pelo WhatsApp">
        <span aria-hidden="true">✦</span>
        <strong>WhatsApp</strong>
      </a>
    </main>
  );
}

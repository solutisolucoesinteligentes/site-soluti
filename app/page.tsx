"use client";

import Image from "next/image";
import { useState } from "react";

const whatsappUrl =
  "https://wa.me/5548991104708?text=Ol%C3%A1%21%20Conheci%20a%20SoluTi%20pelo%20site%20e%20gostaria%20de%20solicitar%20atendimento.";
const siteProjectUrl =
  "https://wa.me/5548991104708?text=Ol%C3%A1%21%20Quero%20criar%20um%20site%20profissional%20para%20o%20meu%20neg%C3%B3cio.";
const webSalesUrl =
  "https://wa.me/5548991104708?text=Ol%C3%A1%21%20Quero%20conhecer%20a%20solu%C3%A7%C3%A3o%20de%20cat%C3%A1logo%20e%20pedidos%20pelo%20WhatsApp.";

const services: Array<{
  number: string;
  tag: string;
  title: string;
  description: string;
  items: string[];
  featured?: boolean;
  url?: string;
}> = [
  {
    number: "01",
    tag: "Presença digital",
    title: "Sites e páginas profissionais",
    description:
      "Uma presença digital clara, rápida e com baixo custo de entrada para MEIs, autônomos e pequenos negócios apresentarem seus serviços e serem encontrados.",
    items: ["Página adaptada ao celular", "Botão direto para o WhatsApp", "Domínio e publicação orientados"],
    featured: true,
    url: siteProjectUrl,
  },
  {
    number: "02",
    tag: "Vendas online",
    title: "Aplicativos web de vendas",
    description:
      "Soluções simples para exibir produtos, organizar um catálogo e receber pedidos pelo WhatsApp sem começar por uma loja virtual complexa.",
    items: ["Catálogo digital", "Carrinho e pedido via WhatsApp", "Solução sob medida para o negócio"],
    featured: true,
    url: webSalesUrl,
  },
  {
    number: "03",
    tag: "Equipamentos",
    title: "Computadores e notebooks",
    description:
      "Manutenção, formatação e melhorias para seus equipamentos voltarem a funcionar com segurança e bom desempenho.",
    items: ["Manutenção e formatação", "SSD e memória RAM", "Programas e certificados"],
  },
  {
    number: "04",
    tag: "Suporte",
    title: "Atendimento remoto ou presencial",
    description:
      "Ajuda técnica à distância ou no local para resolver problemas do dia a dia com rapidez e orientação clara.",
    items: ["Acesso remoto seguro", "Atendimento no local", "Araranguá e região"],
  },
  {
    number: "05",
    tag: "Estrutura",
    title: "Impressoras, dados e consultoria",
    description:
      "Instalação de impressoras, proteção de arquivos e orientação para escolher equipamentos e soluções adequadas ao negócio.",
    items: ["Impressoras", "Backup e segurança", "Consultoria em tecnologia"],
  },
];

const steps = [
  {
    number: "01",
    title: "Conte o que o seu negócio precisa",
    text: "Fale com a SoluTi pelo WhatsApp e explique seu objetivo, seus produtos ou a necessidade técnica.",
  },
  {
    number: "02",
    title: "Receba uma proposta adequada",
    text: "Avaliamos a solução mais simples e viável, sempre considerando a rotina e o orçamento do seu negócio.",
  },
  {
    number: "03",
    title: "Coloque a solução para funcionar",
    text: "Criamos, configuramos e entregamos tudo com orientação clara para você divulgar, vender ou trabalhar melhor.",
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
              Tecnologia para MEIs e pequenos negócios
            </div>

            <h1>
              Tecnologia que resolve.
              <span>Seu negócio mais digital.</span>
            </h1>

            <p className="hero-text">
              Sites profissionais, catálogos com pedidos pelo WhatsApp, aplicativos web de vendas
              e suporte técnico para pequenos negócios crescerem com simplicidade e baixo custo de entrada.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Falar sobre meu projeto <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="#servicos">
                Conhecer soluções <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="hero-trust" aria-label="Diferenciais da SoluTi">
              <div>
                <span className="trust-mark">01</span>
                <p><strong>Comece sem complicação</strong><small>Soluções proporcionais ao seu negócio</small></p>
              </div>
              <div>
                <span className="trust-mark">02</span>
                <p><strong>Venda pelo WhatsApp</strong><small>Um caminho simples para receber pedidos</small></p>
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
                <small>SOLUÇÕES DIGITAIS + SUPORTE</small>
                <h2>Presença, vendas e tecnologia sob medida.</h2>
              </div>
            </div>

            <div className="compact-solutions" aria-label="Principais soluções">
              <span>Sites</span>
              <span>Catálogos</span>
              <span>Pedidos via WhatsApp</span>
            </div>
          </div>
        </div>

        <div className="container hero-strip">
          <span>SITES</span><i />
          <span>CATÁLOGOS</span><i />
          <span>VENDAS WEB</span><i />
          <span>WHATSAPP</span><i />
          <span>SUPORTE</span>
        </div>
      </section>

      <section className="services section" id="servicos">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">// SOLUÇÕES</span>
              <h2>Do suporte técnico à presença digital.</h2>
            </div>
            <p>
              A SoluTi ajuda MEIs, autônomos e pequenas empresas a aparecer na internet, receber pedidos
              e manter sua tecnologia funcionando — com soluções diretas e adequadas ao orçamento.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className={`service-card ${service.featured ? "service-card-featured" : ""}`} key={service.number}>
                <div className="service-topline">
                  <span className="service-number">{service.number}</span>
                  <span className="service-tag">{service.tag}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a href={service.url ?? whatsappUrl} target="_blank" rel="noreferrer">
                  {service.featured ? "Levar meu negócio para o digital" : "Solicitar atendimento"} <span aria-hidden="true">↗</span>
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
            <h2>Da ideia à solução, sem complicação.</h2>
            <p>
              Você não precisa entender de tecnologia para começar. A SoluTi ouve sua
              necessidade e transforma isso em um caminho simples, claro e acessível.
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
              A SoluTi Tech Store oferece presença digital, soluções web de vendas e assistência
              técnica para MEIs, autônomos, pequenos negócios e clientes residenciais.
            </p>
            <p>
              Cada atendimento começa entendendo a real necessidade do cliente. O objetivo
              é entregar algo realmente útil — seja um site, um catálogo ou suporte técnico —
              que faça sentido para a rotina e o orçamento de cada cliente.
            </p>

            <div className="about-points">
              <div><strong>Baixo custo de entrada</strong><span>Comece com o essencial e evolua conforme o negócio crescer.</span></div>
              <div><strong>Foco em pequenos negócios</strong><span>Soluções digitais pensadas para uma operação enxuta.</span></div>
              <div><strong>Soluções personalizadas</strong><span>Tecnologia compatível com sua necessidade e orçamento.</span></div>
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
            <h2>Dúvidas rápidas.</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>Quanto custa criar um site?<span>+</span></summary>
              <p>Depende do conteúdo e das funções. A SoluTi oferece opções com baixo custo de entrada e apresenta uma proposta clara antes de começar.</p>
            </details>
            <details>
              <summary>Posso receber pedidos pelo WhatsApp?<span>+</span></summary>
              <p>Sim. O cliente escolhe os produtos no catálogo e envia o pedido organizado diretamente para o WhatsApp da empresa.</p>
            </details>
            <details>
              <summary>O site funciona bem no celular?<span>+</span></summary>
              <p>Sim. As páginas são preparadas para celular, computador e tablet, priorizando leitura fácil e contato rápido.</p>
            </details>
            <details>
              <summary>Vocês também continuam com assistência técnica?<span>+</span></summary>
              <p>Sim. A SoluTi continua atendendo computadores, notebooks, impressoras e suporte remoto ou presencial em Araranguá e região.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-grid" aria-hidden="true" />
        <div className="container cta-inner">
          <span className="section-label">// VAMOS CONVERSAR?</span>
          <h2>Seu negócio pode dar o próximo passo no digital.</h2>
          <p>Conte sua ideia pelo WhatsApp. A SoluTi ajuda a encontrar uma forma simples de começar.</p>
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
          <p>Sites, vendas web e assistência técnica para pequenos negócios em Araranguá e região.</p>
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

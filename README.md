# WHO Global Health Dashboard — Nuxt 4 Demo

![CI](https://github.com/gustavoernandes86/who-nuxt-demo/actions/workflows/ci.yml/badge.svg)

A production-ready demo application built with **Nuxt 4 (Vue 3 + SSR)**, showcasing secure server-side API integration with the **WHO Global Health Observatory**, caching strategies, and automated CI/CD deployment.

---

## 🔍 Overview

This project demonstrates how to take a green-field concept and deliver a fully functional, production-ready web application using modern Vue/Nuxt best practices.

Key highlights:
- Server-Side Rendering (SSR)
- Secure server-side API routes
- Integration with a real, public third-party API (WHO)
- Caching and error handling
- Automated CI/CD pipeline
- One-click deployment to Vercel

---

## 🧱 Tech Stack

- **Framework**: Nuxt 4 (Vue 3)
- **Language**: TypeScript
- **Rendering**: SSR (Server-Side Rendering)
- **Server Runtime**: Nitro
- **Package Manager**: pnpm
- **CI/CD**: GitHub Actions
- **Hosting**: Vercel

---

## 🏗 Architecture Overview

UI (SSR Page)
↓
Nuxt Server API (/api/health)
↓
WHO Global Health Observatory API
↓
Cache + Normalization + Error Handling
↓
HTML rendered on the server

yaml
Copiar código

### Why this matters
- External APIs are never called directly from the client
- Server routes act as a secure and controlled proxy
- Cached responses improve performance and reliability

---

## 🌍 WHO API Integration

This demo integrates with the **World Health Organization – Global Health Observatory API**:

- Base URL: `https://ghoapi.azureedge.net/api`
- Endpoint used: `/Indicator`
- Authentication: Not required (public API)

The server normalizes the response before exposing it to the frontend.

---

## 🚀 Getting Started (Local Setup)

### Prerequisites
- Node.js **v20+**
- pnpm

### Install pnpm (if needed)
```bash
npm install -g pnpm
Clone and run
bash
Copiar código
git clone https://github.com/gustavoernandes86/who-nuxt-demo.git
cd who-nuxt-demo
pnpm install
pnpm dev
Open:
http://localhost:3000

⏱ Setup time: under 10 minutes

🔌 API Endpoint Example
GET /api/health
Example response:

json
Copiar código
{
  "source": "WHO Global Health Observatory",
  "total": 3000,
  "data": [
    {
      "code": "WHOSIS_000001",
      "name": "Life expectancy at birth (years)"
    }
  ]
}
🔄 CI/CD Pipeline
Every push to the main branch triggers:

Dependency installation (pnpm)

Type checking

Production build

Deployment is handled automatically by Vercel.

🌐 Live Demo
🔗 Production URL:
https://who-nuxt-demo.vercel.app
(replace with your actual URL)

📌 Notes
This repository is a reference implementation.

Designed to demonstrate architecture, workflows, and best practices.

Suitable as a foundation for real-world SaaS or internal tools.

📄 License
MIT

yaml
Copiar código

---

## Commit final do README

```bash
git add README.md
git commit -m "docs: add production-ready README with setup and architecture"
git push

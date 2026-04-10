# ClipFlow — Agendador de Shorts e Reels

Ferramenta desktop para agendar posts no Instagram Reels e YouTube Shorts via Ayrshare.

## Como gerar o .exe

### Pré-requisitos
- Node.js instalado (https://nodejs.org) — versão 18 ou superior
- Git (opcional)

### Passo a passo

1. Abra o terminal (cmd ou PowerShell) na pasta do projeto:
```
cd clipflow
```

2. Instale as dependências:
```
npm install
```

3. Gere o instalador .exe:
```
npm run build
```

O arquivo `.exe` será gerado na pasta `dist/`.

Haverá dois arquivos:
- `ClipFlow Setup 1.0.0.exe` — instalador completo
- `ClipFlow 1.0.0.exe` — versão portátil (sem instalação)

### Testar antes de gerar o .exe
```
npm start
```

## Como usar a ferramenta

1. Vá em "Configurar API"
2. Crie conta em https://ayrshare.com
3. Copie sua API Key do painel do Ayrshare
4. Conecte Instagram e YouTube em "Social Accounts" no Ayrshare
5. Cole a chave na ferramenta e clique Salvar
6. Vá em "Agendar post" e comece a usar!

## Estrutura do projeto
```
clipflow/
├── main.js          # Processo principal do Electron
├── package.json     # Configuração e dependências
├── src/
│   ├── index.html   # Interface da ferramenta
│   └── preload.js   # Bridge segura Node ↔ Interface
└── assets/
    └── icon.ico     # Ícone do app (adicione o seu)
```

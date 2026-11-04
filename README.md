# Plataforma CCT — app instalável

Esta pasta é o app de celular da Plataforma CCT. Ele é gratuito: a hospedagem é no GitHub Pages e os dados ficam no Google Planilhas.

## Publicar
1. Crie um repositório público no GitHub (ex.: `cct`) e envie todos os arquivos desta pasta.
2. Edite `config.js` e cole a URL do App da Web do Apps Script (termina em `/exec`).
3. Em **Settings › Pages**, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)`.
4. Em 1 ou 2 minutos o app fica em `https://SEU-USUARIO.github.io/cct/`.

## Instalar no celular
- **Android (Chrome):** abra o endereço › menu ⋮ › *Instalar app*.
- **iPhone (Safari):** abra o endereço › Compartilhar › *Adicionar à Tela de Início*.

## Acesso
- Qualquer pessoa com o endereço consulta ranking por série, Ranking Geral, mapa, atiradores e copas.
- Administradores tocam em *Área do administrador* e entram com e-mail e PIN.
- O responsável pela planilha cria o próprio PIN no menu da planilha **CCT › Definir administrador**.

## Logomarca
Troque `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` (com margem de segurança) e `apple-touch-icon.png` (180×180) pelas versões com a logo da CCT. Dentro do app, a logo é carregada em Ajustes.

## Atualizar
Ao substituir `index.html`, aumente a versão em `sw.js` (`cct-v1` → `cct-v2`) para os celulares baixarem a nova versão.

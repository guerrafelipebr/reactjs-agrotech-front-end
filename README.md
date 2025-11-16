# AgroTech - Portal de Agricultura Sustentável

Uma aplicação web moderna desenvolvida com **React** para ajudar produtores agrícolas a melhorar sua produtividade utilizando tecnologia e práticas sustentáveis.

## 🌱 Sobre o Projeto

AgroTech é uma plataforma completa que oferece:

- **Landing Page**: Informações sobre o portal e seus serviços
- **Serviços**: Consultoria em práticas ecológicas, hortas agroecológicas, diagnóstico de sustentabilidade e gestão rural
- **Sobre**: Informações sobre a plataforma e o ODS 2 (Fome Zero e Agricultura Sustentável)
- **Contato**: Formulário de contato direto com a equipe
- **Autenticação**: Login e cadastro de agricultores
- **Dashboard**: Sistema completo para gerenciar propriedades, plantios e produtores

## ✨ Características

- ✅ Interface responsiva (Mobile, Tablet, Desktop)
- ✅ Internacionalização (Português e Inglês)
- ✅ Componentes reutilizáveis bem estruturados
- ✅ Design moderno com Bootstrap 5
- ✅ Navegação intuitiva e acessível
- ✅ Formulários com validação
- ✅ Dashboard completo com gerenciamento de dados

## 🛠️ Tecnologias Utilizadas

- **React** 19.2.0 - Biblioteca para construir interfaces de usuário
- **React Router DOM** - Roteamento entre páginas
- **Bootstrap 5** - Framework CSS responsivo
- **React Bootstrap** - Componentes Bootstrap para React
- **i18next** - Internacionalização (i18n)
- **React i18next** - Integração de i18n com React

## 📦 Instalação

1. Clone ou acesse o repositório:
```bash
cd agrotech-react
```

2. Instale as dependências:
```bash
npm install --legacy-peer-deps
```

## 🚀 Como Executar

### Desenvolvimento

```bash
npm start
```

Abre [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
npm run build
```

Cria uma pasta `build` otimizada para produção.

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── Header.js        # Barra de navegação
│   ├── Header.css
│   ├── Footer.js        # Rodapé
│   └── Footer.css
├── pages/               # Páginas principais
│   ├── Home.js          # Página inicial
│   ├── Services.js      # Serviços oferecidos
│   ├── About.js         # Sobre o portal
│   ├── Contact.js       # Contato
│   ├── Login.js         # Login do agricultor
│   ├── Register.js      # Cadastro do agricultor
│   ├── Dashboard.js     # Painel de controle
│   └── [].css           # Estilos de cada página
├── i18n/                # Internacionalização
│   ├── config.js        # Configuração do i18n
│   └── locales/
│       ├── pt-BR.json   # Traduções português
│       └── en.json      # Traduções inglês
├── App.js               # Componente principal
├── App.css
├── index.js             # Ponto de entrada
└── index.css
```

## 🔐 Credenciais Demo

Para testar a funcionalidade de login, use:

- **Email**: demo@agrotech.com.br
- **Senha**: 123456

## 🌍 Idiomas Suportados

- 🇧🇷 Português Brasileiro (padrão)
- 🇺🇸 Inglês

Alterne entre idiomas usando os botões "PT" e "EN" no header.

## 📱 Páginas Disponíveis

### Home (`/`)
Landing page com informações sobre o portal e destaques dos serviços.

### Serviços (`/services`)
Descrição detalhada dos serviços oferecidos:
- Consultoria em Práticas Ecológicas
- Hortas Agroecológicas
- Diagnóstico de Sustentabilidade
- Gestão Rural

### Sobre (`/about`)
Informações sobre a missão, visão e valores da AgroTech, além de detalles sobre o ODS 2.

### Contato (`/contact`)
Formulário para entrar em contato com a equipe, com validação de campos.

### Login (`/login`)
Autenticação de usuários cadastrados.

### Cadastro (`/register`)
Criação de novas contas de agricultores com validação de dados.

### Dashboard (`/dashboard`)
Sistema completo para:
- **Propriedades**: Adicionar, editar e gerenciar propriedades rurais
- **Plantios**: Registrar culturas com datas de plantio e colheita esperada
- **Produtores**: Gerenciar produtores e associá-los a propriedades

## 🎨 Design e Estilo

O projeto utiliza:
- **Cor Primária**: Verde (#1e7e34) - símbolo de agricultura sustentável
- **Bootstrap 5**: Para componentes responsivos
- **Customizações CSS**: Estilos específicos para melhor experiência

## 🔄 Fluxo da Aplicação

1. Usuário chega na Home
2. Navega por Serviços, Sobre ou Contato
3. Faz cadastro em `/register`
4. Realiza login em `/login`
5. Acessa o Dashboard para gerenciar suas operações
6. Pode alternar entre idiomas a qualquer momento

## 📝 Notas Importantes

- Este é um projeto de demonstração com funcionalidades simuladas
- O login não persiste dados (necessário integrar com backend)
- A adição de propriedades, plantios e produtores funciona apenas na sessão atual
- Para produção, integre com um servidor backend (Node.js, Python, etc.)

## 🚀 Próximas Melhorias Sugeridas

1. Integração com API backend
2. Autenticação real com JWT
3. Persistência de dados em banco de dados
4. Gráficos e estatísticas de produção
5. Relatórios de sustentabilidade
6. Notificações e alertas
7. Integração com mapas para localização de propriedades
8. Sistema de recomendações baseado em IA

## 📄 Licença

Este projeto é fornecido como está para fins educacionais e comerciais.

## 👥 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato através da página de Contato na aplicação.

---

**AgroTech** - Tecnologia para Agricultura Sustentável 🌱🌍

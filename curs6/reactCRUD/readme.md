# reactCRUD - Frontend React TypeScript

Aplicatie CRUD pentru produse Fashion, cu aceleasi functionalitati ca in varianta Angular si Vue, dar implementata in React + TypeScript.

## Backend folosit

- Backend-ul ramane in angularCRUD/backend.
- Endpoint API folosit de frontend: http://localhost:3000/clothes
- In acest folder exista doar frontend-ul React.

## Functionalitati frontend

- Home page cu acelasi layout si buton catre produse.
- Lista produse cu incarcare API, paginare, rating, vizualizare, editare si stergere.
- Formular produs in 3 moduri:
  - Create: /products/new
  - View: /products/:id
  - Edit: /products/:id/edit
- Preview imagine in formular.
- Mesaje de eroare pentru request-uri esuate.

## Tehnologii

- React + Vite
- TypeScript
- Bootstrap 5
- Axios
- React Router

## Comenzi si pasi folositi

### 1) Creare frontend React

```bash
cd curs6/reactCRUD
npm create vite@latest frontend
sau
npm create vite@latest frontend -- --template react
```

### 2) Schimbare port
```bash
server: {
    port: 5180,
  },
```


### 3) Instalare dependinte frontend

```bash
cd curs6/reactCRUD/frontend
npm install
npm install bootstrap axios react-router-dom
npm install -D typescript

mkdir -p src/components src/pages src/services src/utils
touch src/App.tsx src/main.tsx src/App.css src/index.css src/vite-env.d.ts
touch src/components/Header.tsx src/components/Footer.tsx src/components/Rating.tsx
touch src/pages/HomePage.tsx src/pages/ProductsListPage.tsx src/pages/ProductFormPage.tsx
touch src/services/productsApi.ts src/utils/images.ts
touch tsconfig.json tsconfig.app.json

```

### 4) Copiere assets din angularCRUD/frontend

```bash
cd curs6/reactCRUD
mkdir -p frontend/public
cp -R ../../angularCRUD/frontend/src/assets frontend/public/assets
```

### 5) Rulare backend (din angularCRUD)

```bash
cd angularCRUD/backend
npm install
node server.js
```

Server backend: http://localhost:3000

### 6) Rulare frontend

```bash
cd curs6/reactCRUD/frontend
npm run dev
```

Frontend: http://localhost:5180

### 7) Verificare TypeScript si build

```bash
cd curs6/reactCRUD/frontend
npm run typecheck
npm run build
```

## Rute frontend

- / -> Home
- /products -> lista produse
- /products/new -> creare produs
- /products/:id -> vizualizare produs
- /products/:id/edit -> editare produs

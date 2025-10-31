# Deployment Instructions

## Git Repository Setup ✅

El repositorio local Git ha sido inicializado y el primer commit ya está hecho:

```bash
✅ Git initialized
✅ Branch: main
✅ Initial commit: "Initial commit: Sector Analysts RIA acquisition pitch deck"
✅ 55 files committed
```

### Para crear el repositorio en GitHub:

**Opción 1: Vía GitHub Web Interface (Recomendado)**

1. Ve a https://github.com/new
2. Crea un nuevo repositorio llamado `Sector-Analysts-Pitch`
3. Marca como **Private**
4. NO inicialices con README (ya tenemos uno)
5. Copia la URL del repositorio (ejemplo: `https://github.com/tuusuario/Sector-Analysts-Pitch.git`)
6. Luego ejecuta en el proyecto:

```bash
cd /root/Sector-Analysts-Pitch
git remote add origin https://github.com/tuusuario/Sector-Analysts-Pitch.git
git push -u origin main
```

**Opción 2: Vía GitHub CLI (si está instalado)**

```bash
cd /root/Sector-Analysts-Pitch
gh repo create Sector-Analysts-Pitch --private --source=. --remote=origin --push
```

---

## Vercel Deployment 🚀

### Paso 1: Login en Vercel

```bash
cd /root/Sector-Analysts-Pitch
vercel login
```

Esto abrirá una ventana del navegador. Visita la URL que aparezca (similar a: `https://vercel.com/oauth/device?user_code=XXXX-XXXX`) y autoriza la aplicación.

### Paso 2: Deploy a Production

Una vez autenticado, ejecuta:

```bash
vercel --prod
```

Vercel te hará algunas preguntas:
- **Set up and deploy?** → Yes
- **Which scope?** → Selecciona tu cuenta
- **Link to existing project?** → No
- **What's your project's name?** → sector-analysts-pitch (o el nombre que prefieras)
- **In which directory is your code located?** → ./ (presiona Enter)
- **Want to override the settings?** → No

### Paso 3: Configuración automática

Vercel detectará automáticamente:
- ✅ Framework: Vite
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `dist`
- ✅ Install Command: `npm install`

El archivo `vercel.json` ya está configurado para optimizar el despliegue.

### Paso 4: Accede a tu aplicación

Una vez completado el deploy, Vercel te dará:
- **Production URL**: `https://sector-analysts-pitch.vercel.app` (o similar)
- **Inspection URL**: URL única para esta versión específica

---

## Despliegue Alternativo: Netlify

Si prefieres Netlify:

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist --site=sector-analysts-pitch
```

---

## Despliegue Alternativo: Manual

1. Build el proyecto:
```bash
npm run build
```

2. El output estará en `/root/Sector-Analysts-Pitch/dist/`

3. Sube el contenido de `dist/` a cualquier hosting estático:
   - AWS S3 + CloudFront
   - Azure Static Web Apps
   - Google Cloud Storage
   - GitHub Pages
   - Cloudflare Pages

---

## Variables de Entorno (si las necesitas en el futuro)

Si necesitas agregar variables de entorno en Vercel:

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Environment Variables
3. Agrega las variables necesarias
4. Redeploy el proyecto

---

## Comandos Útiles

```bash
# Ver status del git
git status

# Ver remotes configurados
git remote -v

# Ver historial de commits
git log --oneline

# Ver información de Vercel
vercel --version

# Ver proyectos en Vercel
vercel ls

# Ver información del proyecto actual
vercel inspect
```

---

## Resumen del Proyecto

- **Proyecto**: Sector Analysts RIA Acquisition Pitch
- **Framework**: React 19 + TypeScript + Vite
- **Slides**: 7 slides profesionales
- **Build Output**: `dist/` (393.43 KB JS, 31.52 KB CSS)
- **Status**: ✅ Build successful
- **Git**: ✅ Initialized and committed
- **Vercel Config**: ✅ vercel.json created

---

## Troubleshooting

**Error: "The specified token is not valid"**
- Solución: Ejecuta `vercel logout` y luego `vercel login` nuevamente

**Error: Git push rejected**
- Solución: Asegúrate de que el repositorio en GitHub existe y está vacío

**Error: Build failed**
- Solución: Verifica que todas las dependencias estén instaladas: `npm install`

**Error: 404 en rutas**
- Solución: El archivo `vercel.json` ya incluye las rewrites necesarias para SPA

---

## Next Steps

1. ✅ Completa el login en Vercel
2. ✅ Deploy con `vercel --prod`
3. ✅ Comparte la URL de producción
4. 📧 Configura un dominio custom (opcional)
5. 🔒 Agrega password protection en Vercel (opcional)

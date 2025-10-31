# Vercel Deployment - Quick Start Guide

## 🚀 Deploy en 3 Pasos

### Paso 1: Login en Vercel (una sola vez)

```bash
cd /root/Sector-Analysts-Pitch
vercel login
```

**Opción A - Email:**
- Te pedirá tu email
- Revisa tu inbox y haz click en el link de verificación
- Una vez verificado, vuelve a la terminal

**Opción B - GitHub:**
- Si prefieres, puedes usar: `vercel login --github`
- Te redirigirá a GitHub para autorizar

### Paso 2: Deploy a Producción

```bash
vercel --prod
```

Vercel te hará algunas preguntas (solo la primera vez):

```
? Set up and deploy "~/Sector-Analysts-Pitch"? [Y/n] Y
? Which scope do you want to deploy to? → [Tu cuenta]
? Link to existing project? [y/N] N
? What's your project's name? → sector-analysts-pitch
? In which directory is your code located? → ./
? Want to modify these settings? [y/N] N
```

### Paso 3: ¡Listo! 🎉

Tu pitch deck estará disponible en:
```
https://sector-analysts-pitch.vercel.app
```

O en una URL personalizada que Vercel te asigne.

---

## 🔧 Opciones Avanzadas

### Deploy con nombre específico

```bash
vercel --prod --name sector-analysts-pitch
```

### Deploy desde GitHub (Recomendado para producción)

1. Ve a https://vercel.com
2. Click "New Project"
3. Importa desde GitHub: `Sabrealfred/Sector-Analysts-Pitch`
4. Vercel detectará automáticamente la configuración
5. Click "Deploy"

**Ventajas:**
- ✅ Auto-deploy en cada push a main
- ✅ Preview deployments para cada PR
- ✅ Rollback fácil a versiones anteriores
- ✅ Analytics y monitoring incluidos

---

## 📊 Configuración Automática

El archivo `vercel.json` ya está configurado con:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Esto asegura:
- ✅ Build correcto de Vite
- ✅ Routing de SPA funcional
- ✅ Todas las rutas sirven index.html

---

## 🛠️ Comandos Útiles

```bash
# Ver lista de deployments
vercel ls

# Ver logs del último deployment
vercel logs

# Ver información del proyecto
vercel inspect

# Eliminar un deployment específico
vercel rm [deployment-url]

# Revert a un deployment anterior
vercel rollback [deployment-url]
```

---

## 🔐 Protección con Password (Opcional)

Para agregar protección con password:

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Deployment Protection
3. Enable "Password Protection"
4. Configura tu password

---

## 🌐 Dominio Custom (Opcional)

Para usar tu propio dominio:

1. Ve a Settings → Domains
2. Agrega tu dominio
3. Configura los DNS records en tu registrar
4. Vercel genera certificado SSL automáticamente

---

## ⚡ Performance Optimizations

Ya incluidas en el build:
- ✅ Code splitting automático
- ✅ Asset optimization
- ✅ Gzip compression
- ✅ Edge caching
- ✅ Image optimization (si agregas imágenes)

---

## 🆘 Troubleshooting

**Error: "No token found"**
```bash
vercel logout
vercel login
```

**Error: "Build failed"**
```bash
npm run build  # Prueba localmente primero
```

**Error: "404 on routes"**
- Ya está solucionado con `vercel.json` rewrites

**Deployment lento**
- Primera vez puede tomar 2-3 min
- Deployments subsecuentes son más rápidos

---

## 📞 Soporte

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Status Page: https://vercel-status.com

---

## 🎯 URL Final

Una vez deployed, comparte tu pitch en:
```
https://sector-analysts-pitch.vercel.app
```

O configura un dominio custom como:
```
https://pitch.sectoranalysts.com
```

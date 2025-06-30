# 🚀 Instrucciones de Despliegue en GitHub Pages

## 🆕 Despliegue Automático desde Rama Develop

Tu proyecto Angular ahora tiene **DESPLIEGUE AUTOMÁTICO** configurado desde la rama `develop` usando GitHub Actions.

### ✅ Lo que ya tienes configurado:

- ✅ **GitHub Actions Workflow** - Despliegue automático desde `develop`
- ✅ **Compilación automática** - Angular build con configuración de producción
- ✅ **Base href** configurado como `/Portafolio/`
- ✅ **`.nojekyll`** - Se crea automáticamente para evitar procesamiento Jekyll
- ✅ **Routing SPA** - Configurado para Angular router

## 📋 Pasos para Configurar GitHub Pages (Una sola vez)

### 1. **Configurar GitHub Pages en GitHub**
1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. Scroll down hasta **Pages** en el menú lateral
4. En **Source**, selecciona **GitHub Actions**
5. ¡Listo! No necesitas seleccionar rama ni carpeta

### 2. **Hacer tu primer despliegue**
```bash
# Asegúrate de estar en la rama develop
git checkout develop

# Haz cualquier cambio o simplemente commitea el workflow
git add .
git commit -m "🚀 Configurar despliegue automático con GitHub Actions"
git push origin develop
```

### 3. **URL de tu sitio**
Tu portafolio estará disponible en:
```
https://tu-usuario.github.io/Portafolio/
```

## 🔄 Flujo de Trabajo Automatizado

### Para actualizar tu portafolio:
```bash
# 1. Trabaja en la rama develop
git checkout develop

# 2. Haz tus cambios de código

# 3. Commitea y pushea
git add .
git commit -m "✨ Nuevas características"
git push origin develop

# 4. ¡El despliegue es AUTOMÁTICO! 🎉
```

### Lo que sucede automáticamente:
1. **Trigger**: Push a la rama `develop`
2. **Build**: GitHub Actions compila tu Angular app
3. **Deploy**: Se despliega automáticamente a GitHub Pages
4. **Disponible**: Tu sitio se actualiza en 2-3 minutos

## 📊 Monitorear Despliegues

### Ver el estado del despliegue:
1. Ve a la pestaña **Actions** en tu repositorio de GitHub
2. Verás el workflow "Deploy Angular to GitHub Pages"
3. Cada push a `develop` creará un nuevo deployment
4. Verde ✅ = Despliegue exitoso
5. Rojo ❌ = Error en el despliegue

## 🎯 Arquitectura del Nuevo Sistema

```
develop branch         (Tu rama de desarrollo)
     ↓
GitHub Actions         (Automático en cada push)
     ↓
npm ci                 (Instalar dependencias)
     ↓
ng build --prod        (Compilar Angular)
     ↓
GitHub Pages           (Tu sitio público)
     ↓
https://tu-usuario.github.io/Portafolio/
```

## 🔧 Comandos Útiles

### Desarrollo local:
```bash
# Servidor de desarrollo
npm start

# Build local para testing
npm run build

# Ver los archivos compilados
ls dist/Portafolio/browser/
```

### Gestión de ramas:
```bash
# Cambiar a develop
git checkout develop

# Ver estado del repositorio
git status

# Ver logs de commits
git log --oneline
```

## ⚠️ Troubleshooting

### **El despliegue falla**
1. Ve a la pestaña "Actions" en GitHub
2. Click en el deployment fallido
3. Revisa los logs para ver el error específico

### **Los cambios no aparecen**
1. Verifica que el workflow se haya ejecutado correctamente
2. Los cambios pueden tardar 2-3 minutos en aparecer
3. Limpia el cache del navegador (Ctrl+F5)

### **Error 404 en rutas**
- ✅ **Solucionado automáticamente**: El workflow configura el routing correcto

### **CSS/JS no se cargan**
- ✅ **Solucionado automáticamente**: Base href y .nojekyll configurados

## 📞 Ventajas del Nuevo Sistema

- 🚀 **Automático**: No más builds manuales
- 🔄 **Continuo**: Cada push actualiza el sitio
- 🛡️ **Seguro**: GitHub Actions maneja todo el proceso
- 📈 **Escalable**: Funciona para proyectos de cualquier tamaño
- 🕒 **Historial**: Todos los deployments quedan registrados

## 🆚 Diferencias con el Sistema Anterior

| Anterior (Manual) | Nuevo (Automático) |
|------------------|-------------------|
| Build manual con `ng build` | Build automático con GitHub Actions |
| Copiar archivos a `docs/` | Upload automático |
| Push manual a main | Push a develop = deploy automático |
| Configuración branch + docs folder | Configuración GitHub Actions |

¡Tu portafolio Angular ahora tiene despliegue continuo! 🎉

## 🔗 Recursos Adicionales

- [GitHub Actions Documentation](https://docs.github.com/es/actions)
- [GitHub Pages Documentation](https://docs.github.com/es/pages)
- [Angular Deployment Guide](https://angular.io/guide/deployment) 
# 🚀 Instrucciones de Despliegue en GitHub Pages

## ✅ Archivos Preparados

Tu proyecto Angular ya está **COMPLETAMENTE PREPARADO** para GitHub Pages:

- ✅ **`docs/`** - Carpeta con archivos estáticos compilados
- ✅ **`docs/.nojekyll`** - Evita el procesamiento Jekyll
- ✅ **`docs/404.html`** - Maneja el routing de SPA
- ✅ **`docs/index.html`** - Con scripts de routing configurados
- ✅ **Base href** configurado como `/Portafolio/`

## 📋 Pasos para Configurar GitHub Pages

### 1. **Subir cambios a GitHub**
```bash
git add .
git commit -m "✨ Preparar para GitHub Pages deployment"
git push origin main
```

### 2. **Configurar GitHub Pages**
1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. Scroll down hasta **Pages** en el menú lateral
4. En **Source**, selecciona **Deploy from a branch**
5. En **Branch**, selecciona **main**
6. En **Folder**, selecciona **/ docs**
7. Click **Save**

### 3. **URL de tu sitio**
Tu portafolio estará disponible en:
```
https://tu-usuario.github.io/Portafolio/
```

## 🔧 Comandos para Futuras Actualizaciones

Cuando hagas cambios a tu código:

```bash
# 1. Compilar para producción
ng build --configuration production --base-href "/Portafolio/"

# 2. Limpiar carpeta docs
rm -rf docs

# 3. Crear nueva carpeta docs
mkdir docs

# 4. Copiar archivos compilados
cp -r dist/Portafolio/browser/* docs/

# 5. Crear .nojekyll (si no existe)
touch docs/.nojekyll

# 6. Subir cambios
git add .
git commit -m "🔄 Actualizar deployment"
git push origin main
```

## ⚠️ Problemas Comunes y Soluciones

### **CSS/JS no se cargan**
- ✅ **Solucionado**: Base href configurado correctamente
- ✅ **Solucionado**: Archivo .nojekyll creado

### **Rutas 404 en navegación**
- ✅ **Solucionado**: Archivo 404.html configurado
- ✅ **Solucionado**: Script de routing en index.html

### **Imágenes no se muestran**
- ✅ **Verificado**: Assets copiados a docs/assets/

## 🎯 Tu Proyecto Angular → GitHub Pages

```
src/          (Código fuente Angular)
    ↓
ng build      (Compilación)
    ↓
dist/         (Archivos compilados)
    ↓
docs/         (GitHub Pages ready)
    ↓
GitHub Pages  (Tu sitio público)
```

## 📞 Soporte

Si tienes problemas:
1. Verifica que GitHub Pages esté configurado en **main branch / docs folder**
2. Los cambios pueden tardar 2-3 minutos en aparecer
3. Revisa el historial de deployments en la pestaña "Actions" de GitHub

¡Tu portafolio Angular está listo para GitHub Pages! 🎉 
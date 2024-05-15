# Stage 1: Construir y generar la página web estática
FROM node:latest as build-stage

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de definición de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación para producción, si es necesario
RUN npm run build

# Stage 2: Servir la página web estática
FROM nginx:alpine as production-stage

# Copiar el archivo de configuración de Nginx
COPY --from=build-stage /app/default.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos estáticos del build-stage al directorio de servidor
COPY --from=build-stage /app/build /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]

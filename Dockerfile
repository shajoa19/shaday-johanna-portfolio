# Etapa 1: Construir la web (El Arquitecto)
FROM node:22-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Etapa 2: Servirla al mundo (El Mesero)
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/
COPY --from=build /app/dist/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

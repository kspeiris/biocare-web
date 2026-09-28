FROM node:20-alpine AS build

WORKDIR /app

RUN npm install -g npm@10.9.3

COPY package.json package-lock.json ./

RUN npm install --no-audit --no-fund

COPY . .

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

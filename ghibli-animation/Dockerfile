# Usar a imagem node:16.14-alpine como base
FROM node:16.14-alpine AS security_provider

# Mudar para o diretório de trabalho /app-frontend
WORKDIR /app-frontend

# Copiar os package.json e package-lock.json para o container
COPY package*.json ./

# Instalar as dependências Node
RUN npm install --ignore-scripts

# Copiar o restante dos arquivos da aplicação para o container
COPY . .

# Sinalize que aplicação expõe a porta 3000
EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Configurar os comandos para iniciar a aplicação de acordo com as boas práticas
# Dica: Leia a seção Docker e Docker-compose no README para mais informações
ENTRYPOINT ["npm", "run"]
CMD [ "dev" ]
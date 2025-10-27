#imagem Nginx
FROM nginx:alpine

#Remove o conteúdo padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

#Copia arquivos 
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

#A porta padrão do Nginx é 80, apenas expor a porta para documentação
EXPOSE 80
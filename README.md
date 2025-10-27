1. Quando abrir a pasta no seu vs code ou no terminal do seu pc, rode/execute:

   docker load -i calculadora-web.tar

2. Veja se funcionou com:
   
   docker images

3. Rode o container com:
   
   docker run -d -p 8080:80 calculadora-web:latest

4. Por fim, pode abrir o navegador e colocar:
   
   http://localhost:8080




<img src="https://camo.githubusercontent.com/712ef434c5d04bbcf01454b418995435957670db/68747470733a2f2f73332e75732d656173742d322e616d617a6f6e6177732e636f6d2f676f6261726265722d696d672f6c6f676f2e737667" alt="capa" style="zoom:500%;" />

<h1>GoBarber</h1><p>Aplicativo de agendamento em salão de beleza. Proposto pela RocketSeat para o curso GoStack. Curso focado em oferecer ao aulno conhecer todo o ecossistema das tecnologias NodeJS, ReactJS e React Native. </p>



<div style="text-align:right;color:#666;widht:100%;border:1px solid red;"><i style="text-align:right;">"Não tente. Faça ou não faça. Não existe tentativa."</i><small>, Me. Yoda</small></div>

<h2 >Aplicação em construção</h2>

Esse código representa a minha solução com base nas aulas do BootCamp GoStack 9.0.

[Tecnologias](#Tecnologias)						

[Como instalar e usar a aplicação](#Comousa?)	






## Tecnologias

Tecnologias utilizadas até o momento: 

1. BackEnd

   - [NodeJs](https://nodejs.org/en/)
   - [Express](https://expressjs.com/pt-br/)
   - [Mongoose](https://mongoosejs.com/)
   - [NodeMailer](https://nodemailer.com/about/)
   - [Sequelize](https://sequelize.org/)
   - [Redis](https://redis.io/)
   - [Bee-Queue](https://bee-queue.com/)
   - [JWT](https://jwt.io/)
   - Yup, Youch, multer, bcrypt,...

   ## Como usar ?

   1. Faça um clone desse repositório;

   2. Entra na pasta do BackEnd :

      ```shell
      cd backend
      ```

   3.  Para instalar as dependências, rode yarn:

      ```
      yarn install
      ```

   4. Preencha o arquivo .env com suas variáveis de ambiente;

   ### [Docker](https://www.docker.com/)

   

   Infelizmente ainda não implementei o DockerFile, então as instalações dos bancos serão manuais:

   1. Para instalar o banco de dados Postgres (caso necessário troque as informações, como : password e user). 

      ```shell
      sudo docker run --name postgres-container -e POSTGRES_PASSWORD=123 -e POSTGRES_USER=root -p 5432:5432 -d postgres
      ```

      

   2. Para instalar o banco de dados MongoDB:

      ```shell
      sudo docker run --name mongo-container -p 27017:27017 -d mongo
      ```

   3. Para instalação do banco de dados Redis:

      ```shell
      sudo docker run --name redisbarber -p 6379:6379 -d -t redis:alpine
      ```

      

   

> Readme.md escrito usando [Typora](https://typora.io/)

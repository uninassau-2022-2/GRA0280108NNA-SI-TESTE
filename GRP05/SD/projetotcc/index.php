<?php
  include("conexao.php");
  $acao = "cadastrar";
?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <title>Cowork</title>
</head>

<body>

  <div class="container">

    <div class="hamburguer">
      <div class="line" id="line1"></div>
      <div class="line" id="line2"></div>
      <div class="line" id="line3"></div>
      <span>fechar</span>
    </div>

    <header>
      <div class="img-wrapper">
        <img src="img/bg.jpeg" alt="">
      </div>
      <div class="banner">
        <h1>Coworking em Recife.</h1>
        <p>Trabalhe perto de profissionais que pensam como você em nossos espaços de coworking vibrantes.
          É só chegar e ocupar uma mesa rotativa ou reservar seu próprio espaço em um de nossos espaços de
          trabalho.
        </p>
        <button>Saiba mais</button>
      </div>
    </header>

    <aside class="sidebar">
      <nav>
        <ul class="menu">
          <li class="menu-item"><a href="index.php" class="menu-link">Home</a></li>
          <li class="menu-item"><a href="cadastro.php" rel="next" target="_self" class="menu-link">Cadastro</a></li>
          <li class="menu-item"><a href="reserva.php" class="menu-link">Reservar</a></li>
          <li class="menu-item"><a href="#historico" class="menu-link">Histórico</a></li>
          <li class="menu-item"><a href="#financeniro" class="menu-link">Financeiro</a></li>
        </ul>
      </nav>
      <div class="social-media">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
      </div>
    </aside>
  </div>
</body>
<script src="script.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

</html>
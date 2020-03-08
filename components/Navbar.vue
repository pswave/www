<template>
    <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="">
      <img src="../assets/pswave.png" width="150" height="50">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-center">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Products    
      </a>
        <a class="navbar-item">
          Sector
        </a>
          <a class="navbar-item">
          Contact
        </a>
    </div>

  </div>
</nav>
        </div>
</template>

<style scoped>
@font-face {
    font-family: 'BreakFill';
    src: url("/assets/break/breakRegular.ttf") format("truetype");
}
.navbar-item {
    font-family: 'BreakFill';
    outline: 0;
}
.navbar-center {
    margin: auto;
    display: flex;
}
.navbar {
    height: 6rem;
}


</style>
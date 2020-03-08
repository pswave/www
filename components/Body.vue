<template>
    <div class="container">
        <section class="pd-30">
        <div class="columns">
            <div class="column">
                <p class="has-text-centered">Best app for increasing traffic.</p>
                <br>
                <p class="has-text-centered">Quisque nisi magna, pretium a faucibus non, blandit quis nisl. Ut vehicula massa eget nulla egestas tempus. In posuere blandit ullamcorper.</p>
                <br>
              <div class="buttons">
                    <button class="button custom-button is-primary">Primary</button>
                    <button class="button custom-button is-link">Primary</button>
             </div>
            </div>
            <div class="column">
               <img src="../assets/pswave.png">
            </div>
        </div>
        </section>
         <br>
         <h3 class="centered">Benefits</h3>
        <section>
            <h1 class="title title-centered">Why select pswave</h1>
        </section>
    </div>
</template>

<style scoped>
@font-face {
    font-family: 'BreakFill';
    src: url("/assets/break/breakRegular.ttf") format("truetype");
}
p {
    font-family: 'BreakFill';
}
.pd-30 {
    padding: 30px;
}
.custom-button {
    height: 56px;
    width: 152px;
    border-radius: 50px;
    outline: 0 !important;
}
.custom-button:hover {
    animation: beat .8s linear infinite;
  
}
.centered {
        height: 6rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

}
.title-centered {
        letter-spacing: 1px;
    display: flex;
    justify-content: center;
}
@media (max-width:768px) {
    .buttons {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}

@keyframes beat {
    0% {
        transform: scale(1);
    }
    50%{
        transform: scale(.9)
    }

}
</style>
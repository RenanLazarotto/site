<script>
  import "../../../node_modules/normalize.css/normalize.css";
  import "../../app.css";

  import Footer from "$lib/components/footer.svelte";

  export let hideFooter = false;
</script>

<div class="container">
  <slot name="header" />
  <main>
    <slot name="main" />
  </main>
  {#if !hideFooter}
    <Footer />
  {/if}
</div>

<style>
  div.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }

  div main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
  }
</style>

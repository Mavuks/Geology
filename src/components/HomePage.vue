<template>
  <div class="hello">
    <h2>Lihtne veebirakendus kasutades vue.js</h2>
    <h4> Töös kasutan geoloogia infosüsteemi SARV avalikku APT-t.
       APIst võtan Taxon  nimelise tabeli ja tegin minimaalse otsingu ja filtreerimis süsteemi.
       Lisaks tegin detaili vaate. </h4>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

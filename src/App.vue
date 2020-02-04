<template>
  <div id="app">
    <port-header/>
    <router-view/>
     <port-footer/>
  </div>
</template>
<script>
import header from './views/Header.vue'
import footer from './views/Footer.vue'

export default {
  name:'App',
  components:{
      'port-header':header,
      'port-footer':footer,
    },
}
    $(document).ready(function(){
        var nav_offset_top = $('header').height() + 50;
        function navbarFixed(){
          if ( $('.header_area').length ){ 
              $(window).scroll(function() {
                  var scroll = $(window).scrollTop()   
                  if (scroll >= nav_offset_top ) {
                      $(".header_area").addClass("navbar_fixed")
                  } else {
                      $(".header_area").removeClass("navbar_fixed")
                  }
              })
          }
      }
      navbarFixed()
    })
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

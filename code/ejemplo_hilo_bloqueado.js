/**
 * El ejemplo super absurdo que puse
 * para demostrar cómo se bloquea el hilo
 * con el bucle y el setTimeout no se trata
 * hasta mucho después de los 0ms
 *
 * 
 */
var f = function() {
  var start = Date.now();
  setTimeout( 
    function() {
      console.log(Date.now() - start);
    }, 
    0
  );
  for(var i = 0; i < 5000000000; i++) {}
}

f();
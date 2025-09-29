 function valores() {
      let n1 = parseFloat(document.getElementById("num1").value);
      let n2 = parseFloat(document.getElementById("num2").value);
      
      return [n1, n2];
    }

function calcularpago() {
  let [n1, n2] = valores();
  let total=document.getElementById("subtotal").value = (n1 * n2);
  document.getElementById("hextras").value = (n1 - 40 );
  document.getElementById("ispt").value = (total * 0.10 );
  document.getElementById("monto").value = (total - (total * 0.10));


   }
function limpiar() { 

  document.getElementById("idEmpleado").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("hextras").value = "";
  document.getElementById("ispt").value = "";
  document.getElementById("monto").value = "";  }


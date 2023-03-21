function sumarMatrices() {
  // Obtener los valores de las dos matrices
  var a11 = parseFloat(document.getElementById("a11").value);
  var a12 = parseFloat(document.getElementById("a12").value);
  var a13 = parseFloat(document.getElementById("a13").value);
  var a21 = parseFloat(document.getElementById("a21").value);
  var a22 = parseFloat(document.getElementById("a22").value);
  var a23 = parseFloat(document.getElementById("a23").value);
  var a31 = parseFloat(document.getElementById("a31").value);
  var a32 = parseFloat(document.getElementById("a32").value);
  var a33 = parseFloat(document.getElementById("a33").value);

  var b11 = parseFloat(document.getElementById("b11").value);
  var b12 = parseFloat(document.getElementById("b12").value);
  var b13 = parseFloat(document.getElementById("b13").value);
  var b21 = parseFloat(document.getElementById("b21").value);
  var b22 = parseFloat(document.getElementById("b22").value);
  var b23 = parseFloat(document.getElementById("b23").value);
  var b31 = parseFloat(document.getElementById("b31").value);
  var b32 = parseFloat(document.getElementById("b32").value);
  var b33 = parseFloat(document.getElementById("b33").value);

  // Sumar las matrices
  var c11 = a11 + b11;
  var c12 = a12 + b12;
  var c13 = a13 + b13;
  var c21 = a21 + b21;
  var c22 = a22 + b22;
  var c23 = a23 + b23;
  var c31 = a31 + b31;
  var c32 = a32 + b32;
  var c33 = a33 + b33;

  // Mostrar el resultado en la tabla de salida
  document.getElementById("c11").innerHTML = c11;
  document.getElementById("c12").innerHTML = c12;
  document.getElementById("c13").innerHTML = c13;
  document.getElementById("c21").innerHTML = c21;
  document.getElementById("c22").innerHTML = c22;
  document.getElementById("c23").innerHTML = c23;
  document.getElementById("c31").innerHTML = c31;
  document.getElementById("c32").innerHTML = c32;
  document.getElementById("c33").innerHTML = c33;
}

let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
if (chute == numeroSecreto) {
  alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
  if (chute > numeroSecreto) {
    alert(`O número secreto é menor que ${chute}`);
  } else {
    alert(`O número secreto é maior que ${chute}`);
  }
  tentativas = tentativas + 1;
}
// código omitido

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
  alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
  if (chute > numeroSecreto) {
    alert(`O número secreto é menor que ${chute}`);
  } else {
    alert(`O número secreto é maior que ${chute}`);
  }
  tentativas = tentativas + 1;
}

// código omitido
// código omitido

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
  alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
  if (chute > numeroSecreto) {
    alert(`O número secreto é menor que ${chute}`);
  } else {
    alert(`O número secreto é maior que ${chute}`);
  }
  // tentativas = tentativas + 1;
  tentativas++;
}

// código omitido
// código omitido

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
  alert(
    `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`
  );
}

// código omitido

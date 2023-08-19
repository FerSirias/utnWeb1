  const display = document.querySelector('.display');
  const numberButtons = document.querySelectorAll('.number');
  const operatorButtons = document.querySelectorAll('.operator');
  const equalsButton = document.querySelector('.equals');
  const clearButton = document.querySelector('.clear');
  
  ///Esta variable toma un tipado String, debido a que los demás botones capturan datos String. Además su valor inicial el 0
  let currentDisplayValue = '0';
  
  //Esta función hace que los valores de los botones que se seleccionan se puedan mostrar en pantalla
  function updateDisplay() {
    display.innerText = currentDisplayValue;
  }
  
  //Para esta funcion la "e" tiene como propósito indicar el evento generado al hacer click en el botón, también se está enviando un parámetro
  function handleNumberClick(e) {
      const number = e.target.innerText;
      // Aquí se está validando que para los decimales solo se acepta un solo "."
      if (number === '.' && currentDisplayValue.includes('.')) {
        return;
      }
      if (currentDisplayValue === '0') {
        currentDisplayValue = number;
      } else {
        currentDisplayValue += number;
      }
      updateDisplay();
  }
  
  //Para esta funcion la "e" tiene como propósito indicar el evento generado al hacer click en el botón, también se está enviando un parámetro
  function handleOperatorClick(e) {
    const operator = e.target.innerText;
    currentDisplayValue += operator;
    updateDisplay();
  }
  
  //Se crea una funcion para el manejo de la acción "click" del boton "="
  function handleEqualsClick() {
      //Creo una variable constante llamada "regex" la cual va a buscar los valores regulares
    const regex = /(\d+)([+\-*\/])?(\d+)?/;
    const match = currentDisplayValue.match(regex);
  
    if (match) {
      const [_, num1, operator, num2] = match;
      let result;
  
      //operaciones básicas
      switch (operator) {
        case '+':
          result = parseFloat(num1) + parseFloat(num2);
          break;
        case '-':
          result = parseFloat(num1) - parseFloat(num2);
          break;
        case '*':
          result = parseFloat(num1) * parseFloat(num2);
          break;
        case '/':
          result = parseFloat(num1) / parseFloat(num2);
          break;
        default:
          // Siempre se va a representar el mismo número si no hay una operación seleccionada
          result = currentDisplayValue;
      }
  
      currentDisplayValue = result.toString();
      updateDisplay();
    }
  }
  
  //Con esta función a la hora de que la persona aprete el botón "AC" se borra el valor
  function handleClearClick() {
    currentDisplayValue = '0';
    updateDisplay();
  }
  
  //En el instante que se precione cualquier boton, tiene un evento llamado click, que este lo que va hacer es enviar los parámetros y estos son validados.
  //Nota: Ya una vez validado el valor este se procederá a presentar en pantalla. Gracias al forEach se se puede leer cada uno de los botones seleccionados.
  numberButtons.forEach(button => button.setAttribute('onclick', `handleNumberClick(event)`));
  operatorButtons.forEach(button => button.setAttribute('onclick', `handleOperatorClick(event)`));
  equalsButton.setAttribute('onclick', `handleEqualsClick()`);
  clearButton.setAttribute('onclick', `handleClearClick()`);
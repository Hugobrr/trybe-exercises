const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};





sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

sendMarsTemperature(() => )
    // crie a função sendMarsTemperature abaixo
    // const times = messageDelay();
    // const temperature = getMarsTemperature();
    // setTimeout(() => console.log(`Mars temperature is:  degree Celsius`), 40000);
    setTimeout(() => console.log(getMarsTemperature()), 2000);
//})


// Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra.
// O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio.
// Crie a função sendMarsTemperature , que imprime a temperatura em Marte.
const ethereumButton = document.getElementById("enableEthereumButton");
const showAccount = document.getElementById("showAccount");

ethereumButton.addEventListener('click', () => {
    getAccount();
   
  });

  async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    const disconect = "Desconectar Metamask";
    showAccount.innerHTML =  account;
    ethereumButton.innerHTML = disconect;
    
  }

import GoldCard from '../models/GoldCard.js';

export function handleGoldCardActions(outputElement) {
  const goldCard = new GoldCard();

  function updateOutput(message) {
    outputElement.textContent += `${message}\n`;
  }

  if (goldCard) {
    goldCard.applyTransaction(1000);
    updateOutput(`Gold Card Transaction: Balance: ${goldCard.balance}, Points: ${goldCard.points}`);

    goldCard.applyPayment(200);
    updateOutput(`Gold Card Payment: Balance after payment: ${goldCard.balance}`);

    goldCard.applyInterest();
    updateOutput(`Gold Card Interest: Balance after interest: ${goldCard.balance}`);

    goldCard.applyPenalty();
    updateOutput(`Gold Card Penalty: Balance after penalty: ${goldCard.balance}`);
  } else {
    console.error("Error al crear la instancia de GoldCard.");
  }
}

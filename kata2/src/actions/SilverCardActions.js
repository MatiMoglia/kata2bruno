import SilverCard from '../models/SilverCard.js';

export function handleSilverCardActions(outputElement) {
  const silverCard = new SilverCard();

  function updateOutput(message) {
    outputElement.textContent += `${message}\n`;
  }

  if (silverCard) {
    silverCard.applyTransaction(500);
    updateOutput(`Silver Card Transaction: Balance: ${silverCard.balance}, Points: ${silverCard.points}`);

    silverCard.applyPayment(50);
    updateOutput(`Silver Card Payment: Balance after payment: ${silverCard.balance}`);

    silverCard.applyInterest();
    updateOutput(`Silver Card Interest: Balance after interest: ${silverCard.balance}`);

    silverCard.applyPenalty();
    updateOutput(`Silver Card Penalty: Balance after penalty: ${silverCard.balance}`);
  } else {
    console.error("Error al crear la instancia de SilverCard.");
  }
}

async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Délai de 1 seconde
    console.log(value); // Enregistrement de la valeur
  }
}

// Exemple d'utilisation
iterateWithAsyncAwait(["Serine", "Lyza", "Amine", "Hayet", "Ramzi"]);

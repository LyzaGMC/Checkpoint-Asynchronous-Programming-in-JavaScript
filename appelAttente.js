async function awaitCall() {
    try {
        // Simulation d'un appel API qui réussit toujours
        const data = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({ message: 'Données récupérées avec succès' });
            }, 2000); // Délai de 2 secondes
        });

        console.log(data); // Enregistrement des données
    } catch (error) {
        console.error('Erreur lors de l\'obtention des données:', error.message); // Gestion d'une erreur potentielle
    }
}

// Exemple d'utilisation
awaitCall();


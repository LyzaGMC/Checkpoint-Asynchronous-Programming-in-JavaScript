async function awaitCall() {
    try {
        // Simulation d'un appel API qui peut échouer
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simuler une erreur aléatoire
                const isError = Math.random() < 0.5;
                if (isError) {
                    reject(new Error('Échec de l\'appel API'));
                } else {
                    resolve({ message: 'Données récupérées avec succès' });
                }
            }, 2000); // Délai de 2 secondes
        });

        console.log(data); // Enregistrement des données
    } catch (error) {
        console.error('Erreur lors de l\'obtention des données:', error.message); // Message d'erreur convivial
    }
}

// Exemple d'utilisation
awaitCall();

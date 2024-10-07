async function parallelCalls(urls) {
    try {
        const fetchPromises = urls.map(url => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(`Données récupérées de ${url}`); // Simule la récupération des données
                }, 1000);
            });
        });

        const responses = await Promise.all(fetchPromises); // Attente des réponses
        console.log('Réponses:', responses); // Enregistrement des réponses
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
}

// Exemple d'utilisation
parallelCalls(['https://api.example.com/data1', 'https://api.example.com/data2']);


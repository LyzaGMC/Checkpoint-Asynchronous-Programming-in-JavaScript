async function concurrentRequests() {
    try {
        const apiCall1 = new Promise((resolve) => setTimeout(() => resolve('Résultat 1'), 1500));
        const apiCall2 = new Promise((resolve) => setTimeout(() => resolve('Résultat 2'), 2000));

        const results = await Promise.all([apiCall1, apiCall2]); // Attente des deux requêtes
        console.log('Résultats combinés:', results); // Enregistrement des résultats combinés
    } catch (error) {
        console.error('Erreur lors des requêtes concurrentes:', error);
    }
}

// Exemple d'utilisation
concurrentRequests();

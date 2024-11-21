import {simulateDownload} from "./utils/simulateDownload.ts";

export const exercise3 = async () => {
    console.log("Début des téléchargements...");

    const downloads = [
        simulateDownload("Téléchargement 1", 6),
        simulateDownload("Téléchargement 2", 3),
        simulateDownload("Téléchargement 3", 4),
    ];

    const firstCompleted = await Promise.race(downloads);
    console.log(`${firstCompleted} est la première tâche terminée.`);

    await Promise.all(downloads);
    console.log("Tous les téléchargements sont terminés !");
}

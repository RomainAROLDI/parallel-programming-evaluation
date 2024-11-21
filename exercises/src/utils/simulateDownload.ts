export const simulateDownload = (taskName: string, duration: number): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${taskName} terminé en ${duration} secondes.`);
            resolve(taskName);
        }, duration * 1000);
    });
}
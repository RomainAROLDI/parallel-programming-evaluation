export const createPromise = (taskName: string, duration: number = .5, shouldFail: boolean = false) => {
    return async () => {
        console.log(`${taskName} démarre`);

        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                if (shouldFail) {
                    console.log(`${taskName} a échoué avec l'erreur : [Erreur simulée]`);
                    reject(new Error(`[Erreur simulée]`));
                    return;
                }

                console.log(`${taskName} termine`);
                resolve();
            }, duration * 1000);
        });
    };
};
import {createPromise} from "./utils/createPromise.ts";

export const exercise4 = async () => {
    console.log("Début du workflow...");

    const taskA = createPromise("A", 2);
    const taskB = createPromise("B", 3);
    const taskC = createPromise("C", 1);
    const taskD = createPromise("D", 4, true);
    const taskE = createPromise("E", 3);
    const taskF = createPromise("F", 2);

    let hasError = false;

    try {
        await taskA();

        await Promise.all([taskB(), taskC()]);

        await taskF();

        try {
            await taskD();
            await taskE();
        } catch (error) {
            console.log("E ne peut pas démarrer en raison de l'échec de D.");
            hasError = true;
        }
    } catch (error) {
        console.log(error);
    }

    console.log(`Exécution du workflow terminée${hasError ? " avec des erreurs." : "."}`);
};

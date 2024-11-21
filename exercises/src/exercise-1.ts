import {createPromise} from "./utils/createPromise.ts";

export const exercise1 = async () => {
    const taskA = createPromise("taskA");
    const taskB = createPromise("taskB");
    const taskC = createPromise("taskC");
    const taskD = createPromise("taskD");

    await taskA();
    await Promise.all([taskB(), taskC()]);
    await taskD();
}
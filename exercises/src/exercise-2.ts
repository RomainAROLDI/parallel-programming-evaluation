import {sumRange} from "./utils/sumRange.ts";

export const exercise2 = async () => {
    const [sum1, sum2, sum3] = await Promise.all([
        sumRange(1, 100),
        sumRange(101, 200),
        sumRange(201, 300),
    ]);

    console.log(`Tâche 1 : somme de 1-100 = ${sum1}`);
    console.log(`Tâche 2 : somme de 101-200 = ${sum2}`);
    console.log(`Tâche 3 : somme de 201-300 = ${sum3}`);

    console.log(`Somme totale : ${sum1 + sum2 + sum3}`);
}
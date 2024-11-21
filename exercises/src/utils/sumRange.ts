export const sumRange = (start: number, end: number): Promise<number> => {
    return new Promise((resolve) => {
        let sum = 0;
        for (let i = start; i <= end; i++) {
            sum += i;
        }
        resolve(sum);
    });
}
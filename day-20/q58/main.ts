function calculateAverage(...scores: number[]): number {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

console.log(calculateAverage(80, 95, 67, 86,))
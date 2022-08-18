const quickperm = (a: number[]) => {
  const N = a.length;
  const p: number[] = [];
  for (let i = 0; i < N + 1; i++) {
    p[i] = i;
  }
  //   const result: number[][] = [];
  //   result.push([...a]);
  let count = 0;

  for (let i = 1; i < N; ) {
    p[i]--;
    const j = i % 2 === 1 ? p[i] : 0;
    [a[j], a[i]] = [a[i], a[j]];
    // result.push([...a]);
    count++;

    for (i = 1; p[i] === 0; i++) {
      p[i] = i;
    }
  }
  // return result;
  return count;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ret = quickperm(nums);
console.log(`count: ${ret}`);

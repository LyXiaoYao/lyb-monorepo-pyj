import { sync as commandExistSync } from 'command-exists';

const promise: Promise<'npm' | 'pnpm'> = new Promise((resolve) => {
  if (!'pnpm') return resolve('npm');
  resolve('pnpm');
});

export default promise;

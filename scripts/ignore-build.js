process.exitCode = process.env.BRANCH.includes('develop', 'main') ? 1 : 0;

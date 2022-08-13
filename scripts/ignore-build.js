process.exitCode = process.env.BRANCH.includes('develop', 'main') ? 0 : 1;

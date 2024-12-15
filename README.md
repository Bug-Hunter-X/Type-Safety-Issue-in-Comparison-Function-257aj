# Type Safety Issue in Comparison Function

This repository demonstrates a common error in TypeScript: a lack of type safety in comparison functions.  The initial `compare` function only correctly handles numeric inputs.  Attempting to use it with strings or objects leads to unexpected `NaN` results.  The solution shows how to introduce type safety using generics and type guards to ensure the function only accepts comparable types, preventing unexpected behavior.

## How to reproduce
1. Clone this repository.
2. Open the `bug.ts` file and run it. Observe that comparing strings or objects yields `NaN`.
3. Compare the output with `bugSolution.ts`, which shows how to resolve the issue using generics and type guards.
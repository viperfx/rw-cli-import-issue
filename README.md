# Redwood Exec Import Issue

There are two main issues i've come across with the CLI exec feature and how it's currently doing importing.
- Yarn workspace and shared packages cannot be used - there is an issue picking it
- Imports (relative and aliased) must be used with a lot of care. The exec feature needs to use ../api/src/.... where most of the codebase has an alias to use src/... which pick it up from api/src

## Reproducing the issue
- clone this repo
- install deps
- run `yarn rw prisma migrate dev`
- run either `yarn rw exec aliasImport` or `yarn rw exec relativeImport`
- Both produce a import error.

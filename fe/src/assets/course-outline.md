## Introduction (15 mins)

- The Presentation is The Project
- What is state management and why it's useful
- Brief history of Redux and NgRx
- Key benefits of NgRx

## Core Concepts Overview (30 mins)

- Immutability
  - Definition and benefits
  - Strategies in JavaScript
- Store
  - Single source of truth
  - Manages state as observable
  - Dispatches actions
  - Registers reducers
- Actions
  - Events describing state changes
  - Payload carries metadata
  - Unique types for traceability
- Reducers
  - Pure functions defining transitions
  - Spread syntax for immutable update
  - Handle actions by type
  - Initial state
- Selectors
  - Derive/transform data from state
  - Efficient recomputation
  - Parameterization and composition

## Core Concepts 1 - Hands-On #1 - Convert to NgRx Store (45 mins)

- Create store and slide deck state
- Register root reducer
- Populate initial state

## Core Concepts 2 - Hands-On #2 - Add NgRx Actions (45 mins)

- Define slide deck actions (action party)
- Dispatch for navigation and triggering reducers etc.
- Handle in reducers

## Core Concepts 3 - Hands-On #3 - Reducers (30 mins)

- Handling state changes for our actions

## Core Concepts 4 - Hands-On #4 - Selectors (45 mins)

- Create/use selectors to power view
- Change your ways: view async pipe
- Memoize selectors

## Core Concepts 5 - Hands-On #5 - Effects (45 mins)

- Create effect to load slides
- Migrate data load to effect
- Refactor deck component to only use state and async pipe

## Advanced Concepts (10 mins)

- Router Store, Meta Reducers, Entity

## Best Practices (20 mins)

- NgRx best practices

## Conclusion (15 mins)

- Play with it! Start small and simple
- Recap core concepts
- Feature assignments
- Q&A

# Feature Assignments

- Loading indicator
- Slides nav
- Fix router bug after our re-factor
- Move quiz data to state and refactor deck comp
- Add undo/redo functionality
- Secured routes
- Settings page with additional state slice

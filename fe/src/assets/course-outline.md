## Introduction (20 mins)

- What is state management and why it's useful
- Brief history of Redux and NgRx
- Key benefits of NgRx

## Core Concepts Overview (40 mins)

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

## Core Concepts 1 - Store - Hands-On #1 - Convert to NgRx Store (45 mins)

- Create store and slide deck state
- Register root reducer
- Populate initial state

## Core Concepts 2 - Actions Hands-On #2 - Add NgRx Actions (45 mins)

- Define slide deck actions (action party)
- Dispatch for navigation and triggering reducers etc.
- Handle in reducers

## Core Concepts 3 - Actions Hands-On #3 - Reducers (45 mins)

- Handling our actions

## Core Concepts 4 - Hands-On #4 - Implement Selectors (30 mins)

- Create/use selectors to power view
- Change your ways: view async pipe
- Memoize selectors

## Core Concepts 5 - Effects - Hands-On #5 - Migrate Data Loading (45 mins)

- Create effect to load slides
- Migrate data load to effect

## Advanced Concepts (20 mins)

- Entity, router store, meta reducers

## Best Practices (20 mins)

- NgRx best practices

## Conclusion (30 mins)

- Recap core concepts
- Feature assignments
- Q&A
- Additional resources

---

---

# Feature Assignments

- Loading indicator
- Slides nav
- Add undo/redo functionality
- Secured routes
- Settings page with additional state slice

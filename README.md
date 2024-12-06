# Timeline Visualization Component

A React timeline component that visualizes events. The component arranges events in a compact space-efficient way, with events sharing the same horizontal lane when possible.

## Project Structure
```
src/
├── components/       # React components
├── config/           # Configuration files
├── services/         # Business logic & data processing
├── tests/
│   ├── components/   # Component tests
│   └── mocks/        # Test mocks and fixtures
├── types/            # TypeScript type definitions
└── utils/            # Helper utilities
```

## Features
- Space-efficient event layout algorithm
- Zoom functionality (Ctrl + mousewheel)
- TypeScript support
- Test coverage
- Clean component architecture

## Setup
```bash
npm install
npm start
```

## Testing
```bash
npm test
```

## Implementation FAQ

### How long did you spend on the assignment?
Approximately 8 hours, focused on:
- Core timeline implementation: 5 hours
- Testing & refinements: 2 hours
- Documentation: 1 hour

### What do you like about your implementation?
- Used vertical lanes for event organization to maximize space efficiency
- Implemented zoom functionality for better timeline navigation
- Used TypeScript for type safety and better developer experience
- Clean architecture with clear separation of concerns (components, services, utils)
- Reusable components that follow SOLID principles


### What would you change if you were going to do it again?
- Implement virtual scrolling from the beginning for better performance
- Start with a state management solution (e.g., Context API) for better scalability
- Use CSS-in-JS solution for better component encapsulation and avoiding the use of `toPx` util
- More granular commit history focusing on atomic changes
- Add drag-and-drop functionality as a core feature

### How did you make your design decisions?
The design was inspired by Google Calendar's event layout

### How would you test this if you had more time?
- E2E tests with Cypress focusing on user interactions
- Performance testing for large datasets
- Visual regression tests for UI consistency
- Load testing with 1000+ events
- Cross-browser compatibility tests
- Mobile device testing for touch interactions
- Added more granular test coverage and for more components

## Future Improvements
1. Performance optimizations:
    - Virtual scrolling for large datasets
    - Memoization of complex calculations

2. Features:
    - Drag-and-drop event editing
    - Change the name of events inline.

3. Testing:
    - E2E tests with Cypress
    - Performance testing
    - Visual regression tests
    - Better test coverage for edge cases

### Technical Decisions
- Used date-fns for reliable date manipulation
- Implemented custom layout algorithm instead of using libraries
- Chose React Testing Library for behavior-driven tests
- Used services pattern for business logic separation




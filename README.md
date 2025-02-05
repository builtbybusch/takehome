# Nursing Workforce Management Dashboard

A modern, responsive dashboard for nurse managers to efficiently manage their workforce and monitor patient care.

## Features

- **Unit Overview**: Quick stats showing patient count, staff on duty, and key metrics
- **Updates Section**: 
  - Patient admission/discharge updates
  - Staff notifications
  - Night shift reports
- **Priority Tasks**: 
  - Checklist of daily priorities
  - Priority levels and action items
  - Quick access to related details
- **Daily Schedule**: 
  - Timeline view of daily events
  - Visual indicators for current events
  - Meeting and huddle tracking

## Design Choices

1. **Accessibility**:
   - High contrast colors for better readability
   - Clear hierarchy with semantic HTML
   - Keyboard navigation support
   - Screen reader friendly content structure

2. **Responsive Design**:
   - Mobile-first approach
   - Flexible grid layout
   - Collapsible sections for smaller screens
   - Optimized spacing for different devices

3. **User Experience**:
   - Clean, uncluttered interface
   - Visual hierarchy for important information
   - Quick action buttons for common tasks
   - Status indicators and badges for priority items

4. **Performance**:
   - Component-based architecture
   - Efficient state management
   - Optimized rendering with React
   - Minimal dependencies

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── page.tsx           # Main dashboard page
│   └── globals.css        # Global styles
├── components/
│   └── ui/               # Reusable UI components
├── lib/
│   └── data.ts           # Mock data and types
└── public/
    └── assets/           # Static assets
```

## Data Structure

The dashboard uses TypeScript interfaces for type safety:

- `Patient`: Patient information and status
- `StaffUpdate`: Staff-related notifications
- `Priority`: Task priorities and completion status
- `Schedule`: Daily schedule events

## Future Enhancements

1. Real-time updates with WebSocket integration
2. Advanced filtering and search capabilities
3. Customizable dashboard layouts
4. Integration with hospital EMR systems
5. Advanced analytics and reporting features
export type Patient = {
  id: string;
  name: string;
  status: 'Admitted' | 'Discharged';
  date: string;
  roomNumber: string;
};

export type StaffUpdate = {
  id: string;
  type: 'timecard' | 'pto' | 'other';
  name: string;
  description: string;
  actionRequired?: boolean;
};

export type Priority = {
  id: string;
  title: string;
  description: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  completed: boolean;
  actionLink?: string;
};

export type Schedule = {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  type: 'meeting' | 'huddle' | 'review';
};

export const mockPatients: Patient[] = [
  {
    id: '123-01',
    name: 'John Doe',
    status: 'Discharged',
    date: '2024-01-30',
    roomNumber: '301A',
  },
  {
    id: '129-01',
    name: 'Margaret Atwood',
    status: 'Discharged',
    date: '2024-01-31',
    roomNumber: '302B',
  },
  {
    id: '135-01',  // Fixed: Changed from '123-01' to '135-01' to ensure uniqueness
    name: 'Cormac McCarthy',
    status: 'Admitted',
    date: '2024-02-02',
    roomNumber: '303A',
  },
];

export const mockStaffUpdates: StaffUpdate[] = [
  {
    id: '1',
    type: 'timecard',
    name: 'Team Members',
    description: 'need timecards reconciled',
    actionRequired: true,
  },
  {
    id: '2',
    type: 'pto',
    name: 'Han Kang',
    description: 'has a PTO request',
    actionRequired: true,
  },
];

export const mockPriorities: Priority[] = [
  {
    id: '1',
    title: 'Leader rounds',
    description: '3 patient follow ups needed',
    priority: 'HIGH',
    completed: false,
    actionLink: '/patients',
  },
  {
    id: '2',
    title: 'Unit safety',
    description: '2 incidents reported',
    priority: 'HIGH',
    completed: false,
    actionLink: '/incidents',
  },
  {
    id: '3',
    title: 'Daily huddle',
    description: '8 agenda items',
    priority: 'MEDIUM',
    completed: false,
    actionLink: '/agenda',
  },
  {
    id: '4',
    title: 'Reconcile timecards',
    description: '4 changes to review since yesterday',
    priority: 'MEDIUM',
    completed: false,
    actionLink: '/timecards',
  },
  {
    id: '5',
    title: 'Check-in with Amy',
    description: 'Monthly 1:1',
    priority: 'LOW',
    completed: false,
  },
];

export const mockSchedule: Schedule[] = [
  {
    id: '1',
    title: 'Daily Huddle',
    startTime: '09:30',
    endTime: '09:45',
    type: 'huddle',
  },
  {
    id: '2',
    title: 'Quality & Safety Sync',
    startTime: '10:00',
    endTime: '10:30',
    type: 'meeting',
  },
  {
    id: '3',
    title: 'Director 1:1 Monthly',
    startTime: '12:00',
    endTime: '13:00',
    type: 'meeting',
  },
  {
    id: '4',
    title: 'Staffing Review',
    startTime: '15:30',
    endTime: '16:00',
    type: 'review',
  },
];

export const unitStats = {
  patients: 32,
  onDutyStaff: 12,
  pcts: 2,
  monthlyFocus: 'Fall prevention',
  fallsMetric: {
    current: 1,
    total: 100,
  },
};
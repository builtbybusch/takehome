'use client';

import { UnitHeader } from '@/components/ui/unit-header';
import { UpdatesSection } from '@/components/ui/updates-section';
import { PrioritiesSection } from '@/components/ui/priorities-section';
import { ScheduleSection } from '@/components/ui/schedule-section';
import {
  mockPatients,
  mockStaffUpdates,
  mockPriorities,
  mockSchedule,
  unitStats,
} from '@/lib/data';
import { Bell, Search, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="text-orange-500 font-bold text-2xl">A</div>
              <nav className="hidden md:flex items-center gap-6">
                <Button variant="ghost" className="font-medium">
                  Dashboard
                </Button>
                <Button variant="ghost">Patients</Button>
                <Button variant="ghost">Staff</Button>
                <Button variant="ghost">Calendar</Button>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:block w-72">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search patients, tasks, staff..."
                    className="pl-9 bg-gray-50"
                  />
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <UserCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Alert Banner */}
      <div className="bg-orange-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between text-sm text-orange-800">
            <div className="flex items-center gap-2">
              <span className="font-medium">Flu season mask policy</span>
              <span className="hidden sm:inline">
                All staff must wear masks from October 1, 2024 through March 31, 2025
              </span>
            </div>
            <Button variant="ghost" size="sm">
              ✕
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <UnitHeader unitName="Neuro unit" stats={unitStats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-6">
            <UpdatesSection patients={mockPatients} staffUpdates={mockStaffUpdates} />
          </div>
          <div className="space-y-6">
            <PrioritiesSection priorities={mockPriorities} />
          </div>
          <div className="space-y-6">
            <ScheduleSection schedule={mockSchedule} />
          </div>
        </div>
      </main>
    </div>
  );
}
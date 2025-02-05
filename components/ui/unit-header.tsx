'use client';

import { ChevronDown, Users, UserRound, Activity } from 'lucide-react';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';

interface UnitHeaderProps {
  unitName: string;
  stats: {
    patients: number;
    onDutyStaff: number;
    pcts: number;
    monthlyFocus: string;
    fallsMetric: {
      current: number;
      total: number;
    };
  };
}

export function UnitHeader({ unitName, stats }: UnitHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold text-gray-900">{unitName}</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Neuro unit</DropdownMenuItem>
              <DropdownMenuItem>Cardiac unit</DropdownMenuItem>
              <DropdownMenuItem>ICU</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-orange-50 p-4 rounded-lg flex items-center gap-3">
          <Users className="h-5 w-5 text-orange-600" />
          <div>
            <div className="text-2xl font-semibold text-gray-900">{stats.patients}</div>
            <div className="text-sm text-gray-600">patients</div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-3">
          <UserRound className="h-5 w-5 text-blue-600" />
          <div>
            <div className="text-2xl font-semibold text-gray-900">{stats.onDutyStaff}</div>
            <div className="text-sm text-gray-600">on duty staff</div>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3">
          <UserRound className="h-5 w-5 text-green-600" />
          <div>
            <div className="text-2xl font-semibold text-gray-900">{stats.pcts}</div>
            <div className="text-sm text-gray-600">PCTs</div>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg flex items-center gap-3">
          <Activity className="h-5 w-5 text-purple-600" />
          <div>
            <div className="text-sm font-medium text-gray-900">Monthly focus</div>
            <div className="text-sm text-gray-600">{stats.monthlyFocus}</div>
            <div className="text-xs text-gray-500">
              {stats.fallsMetric.current}/{stats.fallsMetric.total} falls
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
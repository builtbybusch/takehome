'use client';

import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Patient, StaffUpdate } from '@/lib/data';
import { Badge } from './badge';
import { Button } from './button';
import { CalendarDays } from 'lucide-react';

interface UpdatesSectionProps {
  patients: Patient[];
  staffUpdates: StaffUpdate[];
}

export function UpdatesSection({ patients, staffUpdates }: UpdatesSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Catch up</span>
          <Badge variant="secondary">NEW</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3">Patient updates</h3>
            <div className="space-y-3">
              {patients.map((patient) => (
                <div key={patient.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{patient.name}</div>
                    <div className="text-sm text-gray-500">
                      {patient.status} {new Date(patient.date).toLocaleDateString()}
                    </div>
                  </div>
                  <Badge variant={patient.status === 'Admitted' ? 'default' : 'secondary'}>
                    {patient.roomNumber}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3">Staff updates</h3>
            <div className="space-y-3">
              {staffUpdates.map((update) => (
                <div key={update.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{update.name}</div>
                    <div className="text-sm text-gray-500">{update.description}</div>
                  </div>
                  {update.actionRequired && (
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3">Night leader update 02/02/2025</h3>
            <div className="space-y-3 text-sm">
              <p>Kellie completed 4/6 priority tasks and rounded on 5 patients</p>
              <div>
                <div className="font-medium mb-1">Incomplete tasks</div>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Reconcile timecards</li>
                  <li>Complete payroll</li>
                </ul>
              </div>
              <p className="text-gray-600">
                Kellie reported that pain management was inadequate for Mary Shelley (127-01) and
                created a follow-up for you to address this with the team in today's huddle.
              </p>
            </div>
          </div>

          <Button variant="outline" className="w-full" size="sm">
            <CalendarDays className="mr-2 h-4 w-4" />
            Full night shift details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
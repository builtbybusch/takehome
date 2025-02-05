'use client';

import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Priority } from '@/lib/data';
import { Badge } from './badge';
import { Button } from './button';
import { Checkbox } from './checkbox';
import { ChevronRight, Zap } from 'lucide-react';

interface PrioritiesSectionProps {
  priorities: Priority[];
}

export function PrioritiesSection({ priorities }: PrioritiesSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5" />
          <span>Priorities</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {priorities.map((priority) => (
            <div
              key={priority.id}
              className="flex items-start justify-between gap-4 pb-4 border-b last:border-0 last:pb-0"
            >
              <div className="flex items-start gap-3">
                <Checkbox id={`priority-${priority.id}`} />
                <div>
                  <label
                    htmlFor={`priority-${priority.id}`}
                    className="text-sm font-medium cursor-pointer"
                  >
                    {priority.title}{' '}
                    {priority.priority === 'HIGH' && (
                      <Badge variant="destructive" className="ml-2">
                        HIGH
                      </Badge>
                    )}
                  </label>
                  <p className="text-sm text-gray-500">{priority.description}</p>
                </div>
              </div>
              {priority.actionLink && (
                <Button variant="ghost" size="sm" className="shrink-0">
                  <span className="sr-only">View details for {priority.title}</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
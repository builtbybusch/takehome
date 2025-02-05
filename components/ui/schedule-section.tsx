import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Schedule } from '@/lib/data';
import { cn } from '@/lib/utils';

interface ScheduleSectionProps {
  schedule: Schedule[];
}

export function ScheduleSection({ schedule }: ScheduleSectionProps) {
  const timeSlots = Array.from({ length: 13 }, (_, i) => i + 8); // 8:00 to 20:00

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Schedule</CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <div className="space-y-6">
          {timeSlots.map((hour) => {
            const events = schedule.filter((event) => {
              const eventStart = parseInt(event.startTime.split(':')[0]);
              return eventStart === hour;
            });

            return (
              <div key={hour} className="relative flex items-center gap-4">
                {/* Time marker */}
                <div className="w-16 text-sm text-muted-foreground font-medium">
                  {hour.toString().padStart(2, '0')}:00
                </div>

                {/* Timeline line */}
                <div className="absolute left-16 top-1/2 w-px h-full -translate-y-1/2 bg-border" />

                {/* Events */}
                <div className="flex-1 pl-4">
                  {events.map((event) => {
                    const duration = getDurationInMinutes(event.startTime, event.endTime);
                    
                    return (
                      <div
                        key={event.id}
                        className={cn(
                          "rounded-md p-2 text-sm mb-2 last:mb-0",
                          event.type === 'huddle' && "bg-blue-50 text-blue-700 border border-blue-200",
                          event.type === 'meeting' && "bg-purple-50 text-purple-700 border border-purple-200",
                          event.type === 'review' && "bg-orange-50 text-orange-700 border border-orange-200"
                        )}
                      >
                        <div className="font-medium">{event.title}</div>
                        <div className="text-xs opacity-80">
                          {event.startTime} - {event.endTime}
                          {duration && ` (${duration} min)`}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

function getDurationInMinutes(startTime: string, endTime: string): number {
  const [startHour, startMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);
  
  const startInMinutes = startHour * 60 + startMinute;
  const endInMinutes = endHour * 60 + endMinute;
  
  return endInMinutes - startInMinutes;
}
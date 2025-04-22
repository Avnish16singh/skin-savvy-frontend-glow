
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, FileText, Calendar, MoreHorizontal } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';

interface UserCardProps {
  user: {
    id: string;
    name: string;
    email?: string;
    age?: number;
    lastVisit?: string;
    condition?: string;
    imageUrl?: string;
  };
  role: 'doctor' | 'patient';
}

const UserCard: React.FC<UserCardProps> = ({ user, role }) => {
  const navigate = useNavigate();
  const initials = user.name
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 30) return `${diffDays} days ago`;
    
    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths === 1) return '1 month ago';
    return `${diffMonths} months ago`;
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.imageUrl} />
              <AvatarFallback className="bg-primary/10 text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-medium truncate">{user.name}</h3>
              <p className="text-sm text-muted-foreground flex flex-wrap gap-x-2 gap-y-1">
                {user.age && <span>{user.age} years</span>}
                {role === 'patient' && user.lastVisit && (
                  <span className="flex items-center text-xs">
                    <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
                      Last visit: {getTimeAgo(user.lastVisit)}
                    </span>
                  </span>
                )}
              </p>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => navigate(`/patients/${user.id}`)}>
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem>View Reports</DropdownMenuItem>
                {role === 'doctor' && (
                  <>
                    <DropdownMenuItem>Add Note</DropdownMenuItem>
                    <DropdownMenuItem>Schedule Appointment</DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {user.condition && (
            <div className="mt-3">
              <p className="text-sm">
                <span className="font-medium">Condition:</span> {user.condition}
              </p>
            </div>
          )}
        </div>
        
        {role === 'patient' && (
          <div className="px-4 py-3 bg-muted/50 border-t grid grid-cols-3 gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="w-full h-8">
                  <FileText className="h-4 w-4 mr-1" />
                  <span className="text-xs">Reports</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{user.name}'s Reports</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  {/* Reports would be listed here */}
                  <p className="text-center text-sm text-muted-foreground py-8">
                    Loading reports...
                  </p>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button variant="ghost" size="sm" className="w-full h-8">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span className="text-xs">Notes</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="w-full h-8">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="text-xs">Schedule</span>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UserCard;

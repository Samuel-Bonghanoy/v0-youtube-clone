import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface VideoCardProps {
  id: number;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  thumbnail: string;
  avatar: string;
}

export function VideoCard({
  id,
  title,
  channel,
  views,
  timestamp,
  thumbnail,
  avatar,
}: VideoCardProps) {
  return (
    <Link href={`/watch/${id}`}>
      <Card className='rounded-none border-none shadow-none hover:bg-accent/50 transition-colors'>
        <CardContent className='p-0'>
          <Image
            src={thumbnail}
            alt={title}
            width={320}
            height={180}
            className='w-full object-cover aspect-video rounded-xl'
          />
          <div className='flex space-x-3 pt-3'>
            <Avatar className='h-9 w-9'>
              <AvatarImage src={avatar} alt={channel} />
              <AvatarFallback>{channel[0]}</AvatarFallback>
            </Avatar>
            <div className='space-y-1'>
              <h3 className='font-medium leading-none'>{title}</h3>
              <p className='text-xs text-muted-foreground'>{channel}</p>
              <p className='text-xs text-muted-foreground'>
                {views} • {timestamp}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

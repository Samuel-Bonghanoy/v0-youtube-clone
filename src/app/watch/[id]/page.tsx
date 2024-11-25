'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { VideoCard } from '@/components/video-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Bell,
  ChevronDown,
  Forward,
  MessageSquare,
  MoreHorizontal,
  Share2,
  ThumbsDown,
  ThumbsUp,
} from 'lucide-react';

// This would normally come from an API
const videos = [
  {
    id: 1,
    title: 'jazz lofi radio 🎷 beats to chill/study to',
    channel: 'Lofi Girl',
    views: '2.9K watching',
    timestamp: 'LIVE',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04',
    avatar: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa',
    description:
      'Welcome to our 24/7 lofi hip hop radio! This playlist features the best jazz and lofi beats perfect for studying, working, or just chilling. Enjoy the vibes! 🎵✨',
    likes: '3.6K',
    subscribers: '262K',
    comments: [
      {
        author: 'Jazz Lover',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61',
        content: 'This is exactly what I needed for my study session!',
        likes: '42',
        timestamp: '2 hours ago',
      },
      {
        author: 'Music Producer',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
        content: 'The mix of jazz and lofi is perfect. Great work!',
        likes: '28',
        timestamp: '5 hours ago',
      },
    ],
  },
  // ... more videos
];

const relatedVideos = [
  {
    id: 2,
    title: 'Mix - yoasobi acoustic session',
    channel: 'Yoasobi',
    views: 'Recommended for you',
    timestamp: 'Updated today',
    thumbnail: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae',
    avatar: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745',
  },
  {
    id: 3,
    title: 'Classical Piano Masterpieces',
    channel: 'Classical Music',
    views: '890K views',
    timestamp: '5 days ago',
    thumbnail: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0',
    avatar: 'https://images.unsplash.com/photo-1466428996289-fb355538da1b',
  },
  {
    id: 4,
    title: 'Jazz Cafe Music',
    channel: 'Cafe Music BGM',
    views: '1.2M views',
    timestamp: '2 weeks ago',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    avatar: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f',
  },
];

export default function WatchPage() {
  const params = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const video = videos.find((v) => v.id.toString() === params.id);

  if (!video) return null;

  return (
    <div className='min-h-screen bg-background'>
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className='flex'>
        <Sidebar className='hidden lg:block' isOpen={isSidebarOpen} />
        <main className='flex-1 gap-6 p-6 lg:flex'>
          <div className='flex-1'>
            <div className='aspect-video w-full bg-black'>
              {/* Video player would go here */}
            </div>
            <div className='mt-4 space-y-4'>
              <h1 className='text-xl font-semibold'>{video.title}</h1>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <Avatar className='h-10 w-10'>
                    <AvatarImage src={video.avatar} />
                    <AvatarFallback>{video.channel[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className='font-semibold'>{video.channel}</h2>
                    <p className='text-sm text-muted-foreground'>
                      {video.subscribers} subscribers
                    </p>
                  </div>
                  <Button className='ml-2' variant='secondary'>
                    Subscribe
                    <Bell className='ml-2 h-4 w-4' />
                  </Button>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='flex items-center rounded-full bg-accent'>
                    <Button variant='ghost' className='rounded-l-full'>
                      <ThumbsUp className='mr-2 h-4 w-4' />
                      {video.likes}
                    </Button>
                    <Separator orientation='vertical' className='h-6' />
                    <Button variant='ghost' className='rounded-r-full'>
                      <ThumbsDown className='h-4 w-4' />
                    </Button>
                  </div>
                  <Button variant='secondary'>
                    <Share2 className='mr-2 h-4 w-4' />
                    Share
                  </Button>
                  <Button variant='ghost' size='icon'>
                    <MoreHorizontal className='h-4 w-4' />
                  </Button>
                </div>
              </div>
              <div className='rounded-xl bg-accent p-4'>
                <div className='flex items-start justify-between'>
                  <div>
                    <p className='text-sm'>
                      {video.views} • {video.timestamp}
                    </p>
                    <p className='mt-2 whitespace-pre-line text-sm'>
                      {video.description}
                    </p>
                  </div>
                  <Button variant='ghost' size='sm'>
                    Show more
                    <ChevronDown className='ml-2 h-4 w-4' />
                  </Button>
                </div>
              </div>
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-lg font-semibold'>Comments</h3>
                </div>
                {video.comments.map((comment, i) => (
                  <div key={i} className='flex gap-4'>
                    <Avatar>
                      <AvatarImage src={comment.avatar} />
                      <AvatarFallback>{comment.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className='space-y-1'>
                      <div className='flex items-center gap-2'>
                        <span className='font-medium'>{comment.author}</span>
                        <span className='text-sm text-muted-foreground'>
                          {comment.timestamp}
                        </span>
                      </div>
                      <p className='text-sm'>{comment.content}</p>
                      <div className='flex items-center gap-2'>
                        <Button variant='ghost' size='sm'>
                          <ThumbsUp className='mr-2 h-3 w-3' />
                          {comment.likes}
                        </Button>
                        <Button variant='ghost' size='sm'>
                          <ThumbsDown className='h-3 w-3' />
                        </Button>
                        <Button variant='ghost' size='sm'>
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='w-full lg:w-[360px]'>
            <Tabs defaultValue='all'>
              <TabsList className='mb-4'>
                <TabsTrigger value='all'>All</TabsTrigger>
                <TabsTrigger value='related'>Related</TabsTrigger>
                <TabsTrigger value='from-channel'>From channel</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className='space-y-4'>
              {relatedVideos.map((video) => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

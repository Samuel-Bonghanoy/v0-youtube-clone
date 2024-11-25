'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { VideoCard } from '@/components/video-card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

const categories = [
  'All',
  'Music',
  'Mixes',
  'Lo-fi',
  'Live',
  'Swing Music',
  'Jazz piano',
  'Gaming',
  'Guitar chords',
  'Joe Hisaishi',
  'News',
  'Albums',
  'Grandmaster chess title',
];

const videos = [
  {
    id: 1,
    title: 'jazz lofi radio 🎷 beats to chill/study to',
    channel: 'Lofi Girl',
    views: '2.9K watching',
    timestamp: 'LIVE',
    thumbnail:
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amF6eiUyMGxvZml8ZW58MHx8MHx8fDA%3D',
    avatar:
      'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWUlMjBnaXJsfGVufDB8fDB8fHww',
  },
  {
    id: 2,
    title: 'Mix - yoasobi acoustic session',
    channel: 'Yoasobi',
    views: 'Recommended for you',
    timestamp: 'Updated today',
    thumbnail:
      'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWNvdXN0aWMlMjBzZXNzaW9ufGVufDB8fDB8fHww',
    avatar:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWNpYW58ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 3,
    title: 'Mix - Your obedient servant - Hamilton',
    channel: 'Original Broadway Cast of Hamilton',
    views: 'Recommended for you',
    timestamp: 'Updated today',
    thumbnail:
      'https://images.unsplash.com/photo-1503095396549-807759245b35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFtaWx0b24lMjBtdXNpY2FsfGVufDB8fDB8fHww',
    avatar:
      'https://images.unsplash.com/photo-1522863602463-afaeb58d6fb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtaWx0b258ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 4,
    title: 'FULL GAME HIGHLIGHTS',
    channel: 'NBA',
    views: '1.2M views',
    timestamp: '2 days ago',
    thumbnail:
      'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmJhfGVufDB8fDB8fHww',
    avatar:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmJhfGVufDB8fDB8fHww',
  },
  {
    id: 5,
    title: 'SOOTHING CAFE',
    channel: 'Cafe Music BGM',
    views: '2.3M views',
    timestamp: '1 week ago',
    thumbnail:
      'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D',
    avatar:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhZmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 6,
    title: 'Jazz HipHop',
    channel: 'Cafe Music BGM',
    views: '1.8M views',
    timestamp: '3 days ago',
    thumbnail:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amF6eiUyMGhpcCUyMGhvcHxlbnwwfHwwfHx8MA%3D%3D',
    avatar:
      'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amF6eiUyMGhpcCUyMGhvcHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 7,
    title: 'Classical Piano Masterpieces',
    channel: 'Classical Music',
    views: '890K views',
    timestamp: '5 days ago',
    thumbnail:
      'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsYXNzaWNhbCUyMHBpYW5vfGVufDB8fDB8fHww',
    avatar:
      'https://images.unsplash.com/photo-1466428996289-fb355538da1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsYXNzaWNhbCUyMG11c2ljaWFufGVufDB8fDB8fHww',
  },
  {
    id: 8,
    title: 'Top 10 Gaming Moments 2024',
    channel: 'GameSpot',
    views: '450K views',
    timestamp: '1 day ago',
    thumbnail:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nfGVufDB8fDB8fHww',
    avatar:
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWluZyUyMGxvZ298ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 9,
    title: 'Learn React in 1 Hour',
    channel: 'Code Academy',
    views: '1.1M views',
    timestamp: '2 weeks ago',
    thumbnail:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D',
    avatar:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 10,
    title: 'Cooking with Gordon Ramsay',
    channel: 'Kitchen Nightmares',
    views: '3.4M views',
    timestamp: '4 days ago',
    thumbnail:
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va2luZ3xlbnwwfHwwfHx8MA%3D%3D',
    avatar:
      'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZnxlbnwwfHwwfHx8MA%3D',
  },
  {
    id: 11,
    title: 'Travel Vlog: Tokyo Adventures',
    channel: 'Travel Bros',
    views: '670K views',
    timestamp: '1 week ago',
    thumbnail:
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9reW98ZW58MHx8MHx8fDA%3D',
    avatar:
      'https://images.unsplash.com/photo-1542931287-023b922fa89b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwdmxvZ2dlcnxlbnwwfHwwfHx8MA%3D',
  },
  {
    id: 12,
    title: 'DIY Home Improvement Tips',
    channel: 'HandyMan',
    views: '220K views',
    timestamp: '3 days ago',
    thumbnail:
      'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGltcHJvdmVtZW50fGVufDB8fDB8fHww',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhbmR5bWFufGVufDB8fDB8fHww',
  },
];

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className='min-h-screen bg-background'>
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className='flex'>
        <Sidebar className='hidden lg:block' isOpen={isSidebarOpen} />
        <main className='flex-1'>
          <div className='border-b'>
            <ScrollArea className='w-full whitespace-nowrap'>
              <div className='flex w-max space-x-2 p-4'>
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant='secondary'
                    className='rounded-lg px-3 py-1'
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              <ScrollBar orientation='horizontal' />
            </ScrollArea>
          </div>
          <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {videos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

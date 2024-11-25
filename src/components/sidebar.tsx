'use client';

import {
  Home,
  PlaySquare,
  Clock,
  ThumbsUp,
  ChevronDown,
  Clapperboard,
  Flame,
  ShoppingBag,
  Music2,
  Radio,
  Film,
  Gamepad2,
  Newspaper,
  Trophy,
  Lightbulb,
  Shirt,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const mainItems = [
  { icon: Home, label: 'Home' },
  { icon: Clapperboard, label: 'Shorts' },
  { icon: PlaySquare, label: 'Subscriptions' },
];

const secondaryItems = [
  { icon: PlaySquare, label: 'Your videos' },
  { icon: Clock, label: 'Watch later' },
  { icon: ThumbsUp, label: 'Liked videos' },
  { icon: ChevronDown, label: 'Show more' },
];

const subscriptions = [
  { icon: '/placeholder.svg?height=32&width=32', label: 'MLBB Philippine...' },
  { icon: '/placeholder.svg?height=32&width=32', label: 'Jake "The Viking...' },
  { icon: '/placeholder.svg?height=32&width=32', label: 'Ludwig' },
];

const explore = [
  { icon: Flame, label: 'Trending' },
  { icon: ShoppingBag, label: 'Shopping' },
  { icon: Music2, label: 'Music' },
  { icon: Film, label: 'Movies & TV' },
  { icon: Radio, label: 'Live' },
  { icon: Gamepad2, label: 'Gaming' },
  { icon: Newspaper, label: 'News' },
  { icon: Trophy, label: 'Sports' },
  { icon: Lightbulb, label: 'Learning' },
  { icon: Shirt, label: 'Fashion & Beauty' },
];

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
}

export function Sidebar({ className, isOpen = true, ...props }: SidebarProps) {
  if (!isOpen) return null;

  return (
    <div className={cn('pb-12 w-60', className)} {...props}>
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <div className='space-y-1'>
            {mainItems.map((item, index) => (
              <Button
                key={index}
                variant='ghost'
                className='w-full justify-start'
              >
                <item.icon className='mr-2 h-4 w-4' />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
        <Separator />
        <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
            You
          </h2>
          <div className='space-y-1'>
            {secondaryItems.map((item, index) => (
              <Button
                key={index}
                variant='ghost'
                className='w-full justify-start'
              >
                <item.icon className='mr-2 h-4 w-4' />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
        <Separator />
        <div className='py-2'>
          <h2 className='mb-2 px-7 text-lg font-semibold tracking-tight'>
            Subscriptions
          </h2>
          <div className='space-y-1 p-2'>
            {subscriptions.map((item, index) => (
              <Button
                key={index}
                variant='ghost'
                className='w-full justify-start'
              >
                <img
                  src={item.icon}
                  alt=''
                  className='mr-2 h-4 w-4 rounded-full'
                />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
        <Separator />
        <div className='py-2'>
          <h2 className='mb-2 px-7 text-lg font-semibold tracking-tight'>
            Explore
          </h2>
          <div className='space-y-1 p-2'>
            {explore.map((item, index) => (
              <Button
                key={index}
                variant='ghost'
                className='w-full justify-start'
              >
                <item.icon className='mr-2 h-4 w-4' />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

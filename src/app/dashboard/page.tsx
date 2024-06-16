'use client';
import { buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useSupabase from '@/lib/useSupabase';
import { Calendar, Ellipsis, Loader2, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Page = () => {
  const { supabase, loading, error } = useSupabase();
  const [events, setEvents] = useState<any>();
  const [stale, setStale] = useState(false);

  useEffect(() => {
    if (!supabase) return;
    const listEvents = async () => {
      const { data, error } = await supabase.from('events').select();
      if (!error) setEvents(data);
    };

    listEvents();
  }, [supabase, stale]);

  const getHandleDelete = (id: string) => async () => {
    supabase!
      .from('events')
      .delete()
      .eq('id', id)
      .then(() => {
        setStale((stale) => !stale);
      });
  };

  return (
    <div className="container justify-center max-w-6xl pb-52">
      <div className="justify-between flex flex-1 mt-3 items-center">
        <h1 className="text-4xl font-semibold">
          Active Events{' '}
          {events && <span className="text-gray-400 text-2xl">{events?.length}/100</span>}
        </h1>
        <Link className={buttonVariants()} href="/dashboard/new">
          New Event
        </Link>
      </div>
      {loading && <Loader2 size={32} className="animate-spin" />}
      {error && <p className="text-red-500">An unknown error has occurred</p>}
      {events && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {events.map((event: any) => (
            <div className="relative" key={event.id}>
              <Link
                href={`/dashboard/event${event.id}`}
                className="bg-gray-500 bg-opacity-30 shadow-lg p-3 rounded-lg hover:bg-opacity-40 flex flex-col w-full"
              >
                <h2 className="text-xl font-semibold mb-1">{event.name}</h2>
                <p className="text-md flex flex-1 items-center">
                  <Calendar size={16} className="mr-1 text-gray-400" />
                  {event.start_date || 'None'}
                </p>
                <p className="test-md flex flex-1 items-center">
                  <MapPin size={16} className="mr-1 text-gray-400" />
                  {event.location || 'None'}
                </p>
              </Link>
              <div className="absolute right-3 top-3">
                <DropdownMenu>
                  <DropdownMenuTrigger className="rounded-md hover:bg-gray-500 bg-opacity-60">
                    <Ellipsis size={24} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-500 bg-opacity-60 outline-none">
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuItem onClick={getHandleDelete(event.id)}>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;

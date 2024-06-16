'use client';
import { useForm } from 'react-hook-form';
import useSupabase from '@/lib/useSupabase';
import { useRouter } from 'next/navigation';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(1),
  start_date: z.coerce.date().optional(),
  end_date: z.coerce.date().optional(),
  max_attendees: z.coerce.number().int().positive().optional(),
  location: z.string().optional(),
  details: z.string().optional(),
});

const Page = () => {
  const { supabase, loading, error } = useSupabase();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setSubmitting(true);
    const { error } = await supabase.from('events').insert([
      {
        name: data.name,
        start_date: data.start_date,
        end_date: data.end_date,
        max_attendees: data.max_attendees,
        location: data.location,
        details: data.details,
      },
    ]);

    if (error) {
      console.error(error);
      setSubmitting(false);
    } else {
      router.push('/dashboard'); // Redirect to a success page or somewhere else
    }
  };

  return (
    <div className="container justify-center max-w-6xl pb-52 mt-5">
      {loading && <Loader2 size={32} className="animate-spin" />}
      {loading || (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-xl">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="start_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="end_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="max_attendees"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Max Attendees</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Details</FormLabel>
                  <FormControl>
                    <Input type="textarea" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && <FormMessage>{error.message}</FormMessage>}
            <div className="flex items-center">
              <Button type="submit" disabled={submitting}>
                Submit
              </Button>
              {submitting && <Loader2 size={24} className="animate-spin ml-2" />}
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default Page;

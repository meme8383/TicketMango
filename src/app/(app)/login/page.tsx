'use client';

import { Credentials, CredentialsValidator } from '@/lib/validators/credentials.validator';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>({
    resolver: zodResolver(CredentialsValidator),
  });

  return (
    <div className="absolute top-0 min-h-screen flex flex-col items-center justify-center w-full h-full">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold mb-4">Log In</h1>
        <form>
          <div className="flex flex-col space-y-4 min-w-72">
            <div className="flex flex-col space-y-1">
              <Input type="email" id="email" {...register('email')} placeholder="email" />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div className="flex flex-col space-y-1">
              <Input
                type="password"
                id="password"
                {...register('password')}
                placeholder="password"
              />
              {errors.password && <span>{errors.password.message}</span>}
            </div>
            <Button type="submit" variant="link" className="text-foreground ml-auto px-0">
              Go →
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;

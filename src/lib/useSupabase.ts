import { useAuth } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { createClerkSupabaseClient } from './supabaseClient';
import { type SupabaseClient } from '@supabase/supabase-js';

export const useSupabase = () => {
  const { getToken } = useAuth();
  const [supabase, setSupabase] = useState<SupabaseClient>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchTokenAndInitializeClient = async () => {
      try {
        const token = await getToken({ template: 'supabase' });
        if (!token) {
          throw new Error('No token found');
        }
        const supabase = createClerkSupabaseClient(token);
        setSupabase(supabase);
        setLoading(false);
      } catch (err) {
        setError(err as any);
        setLoading(false);
      }
    };

    fetchTokenAndInitializeClient();
  }, [getToken]);

  return { supabase, loading, error };
};

export default useSupabase;

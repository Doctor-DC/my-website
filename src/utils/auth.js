import {createClient} from '@supabase/supabase-js';

const CLIENT_URL = process.env.NODE_ENV === 'production' ? 
										'https://jjbvnefqhottbivaybsi.supabase.co':
										'https://jjbvnefqhottbivaybsi.supabase.co';
const ANON_KEY = process.env.NODE_ENV === 'production' ?
										 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqYnZuZWZxaG90dGJpdmF5YnNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4MjQwNTgsImV4cCI6MTk3NzQwMDA1OH0.q9n3UqhmnRLiiLkNwnW0jOMTMfYHALVjU-gad--WEKY':
										 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqYnZuZWZxaG90dGJpdmF5YnNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE4MjQwNTgsImV4cCI6MTk3NzQwMDA1OH0.q9n3UqhmnRLiiLkNwnW0jOMTMfYHALVjU-gad--WEKY';
export const supabase = createClient(CLIENT_URL, ANON_KEY)

export async function signout() {
	const { error } = await supabase.auth.signOut();
	console.log(error);
};
export async function signInWithGithub() {
    console.log(process.env.BLOB_READ_WRITE_TOKEN);
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
            redirectTo: process.env.NODE_ENV === 'production' ? 'https://website-dc.vercel.app/' : 'http://localhost:3000'
        }
      })

};

export async function getUserInfo() {
    const { data: { user } = {} } = await supabase.auth.getUser()
	console.log('getUser', user);
    return user
};
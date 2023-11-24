import { useEffect, useState } from "react"
import { supabase } from "../utils/auth";
import { getUserInfo } from '../utils/auth';

export const useUser = () => {
	const [user, setUser] = useState(null);

  useEffect(() => {
        // const userInfo = () => { 
    //    getUserInfo().then(res => {
    //         console.log('user',res);
    //     })
    //     // }
    //     // console.log('user', userInfo);
    //     setUser(user);

        supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });
    }, []);

return user;
}
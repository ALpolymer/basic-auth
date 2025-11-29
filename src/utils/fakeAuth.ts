import type {UserData} from "../types/types.ts";



const fetcher = (key: string) :UserData[] =>{
    const data = localStorage.getItem(key);
    if(data === null){

        return [];
    }
    return JSON.parse(data);
}

export const fakeAuth = (user: UserData): Promise<string> => {
    const fetchedUsers = fetcher("users");

    if( !fetchedUsers.length ){
        return new Promise((_, reject) => {
            setTimeout(() => reject(new Error("Could not fetch users")), 1000);
        });
    }

    const foundUser = fetchedUsers.find((u)=> u?.email === user?.email);
    if(!foundUser){
         return new Promise((_, reject) => {
            setTimeout(() => reject(new Error("Email does not exist")), 1000);
        });
    }
    const foundUserPassword = foundUser?.password === user?.password;
    if(!foundUserPassword){
        return new Promise((_, reject) => {
            setTimeout(() => reject(new Error("Wrong Password")), 1000);
        })
    }
    if (foundUser && foundUserPassword) {
        return new Promise((resolve) => {
            setTimeout(() => resolve("2342f2f1d131rf12"), 1000);
        });
    } else {
        return new Promise((_, reject) => {
            setTimeout(() => reject(new Error("Invalid credentials")), 1000);
        });
    }
}
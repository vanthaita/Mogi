"use server"
import { cookies } from "next/headers";

function setTokenCookies(atToken: string, rt_token: string) {
    cookies().set('access_token', atToken, {
        httpOnly: true,  
        secure: true,   
        maxAge: 60 * 24,  
        path: "/",      
        sameSite: "none",
    });
    cookies().set('refresh_token', rt_token, {
        httpOnly: true,  
        secure: true,   
        maxAge: 60 * 24,  
        path: "/",      
        sameSite: "none",
    });
}
function setTokenFromCookies(token: string) {
    cookies().set('access-token', token, {
        httpOnly: true,  
        secure: true,   
        maxAge: 60 * 24,  
        path: "/",      
        sameSite: "none",
    });
}
function removeTokenFromCookies() {
    cookies().delete('access_token');
    cookies().delete('refresh_token');
}

export { setTokenCookies, removeTokenFromCookies ,setTokenFromCookies};

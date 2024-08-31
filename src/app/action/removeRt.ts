"use server";

import { cookies } from "next/headers";

function setTokenFromCookies(token: string) {
    cookies().set('access-token', token, {
        httpOnly: true,  
        secure: true,   
        maxAge: 60 * 24,  
        path: "/",      
        sameSite: "strict",
    });
}
function removeTokenFromCookies() {
    cookies().delete('access_token');
    cookies().delete('refresh_token');
}

export { setTokenFromCookies, removeTokenFromCookies };

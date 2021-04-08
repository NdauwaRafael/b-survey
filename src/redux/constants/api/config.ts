require('dotenv').config();
export const url = process.env.REACT_APP_BASE_URL;

export const headersConfig = ()=>{
    let token = localStorage.getItem('access_token');

    if (token) {
        return { 'Authorization': 'Bearer ' + token };
    } else {
        const encodedSecret = Buffer.from(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`).toString('base64');
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${encodedSecret}`,
        };
    }
}

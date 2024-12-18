/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2024-12-18 19:37
*****************************************************************************************/
export async function handleQueryString(txt: string) {
    const [key, value] = txt?.split("=");

    if(key == "p") return value; // TODO: MAKE THIS WORK FOR ALL THE QUERYSTRING'S
}
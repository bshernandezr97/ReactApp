

export const useFetch = async (url, args, values) => {
    let urlArgs = '?';
    args.forEach((arg, index) => {
        urlArgs += `${arg}=${values[index]}&`;
    });
    
    const urlDef = url + urlArgs;
    const response =  await fetch(urlDef);
    const data = await response.json();
    return data;
}

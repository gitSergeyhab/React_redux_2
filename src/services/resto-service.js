// export default class RestoService{
//     url = 'http://localhost:3002/menu';

//     getMenuItems = async () => {
//         const response = await fetch(this.url);
//         if (!response.ok){
//             throw new Error('Server Error');
//         }
//         const result = await response.json();
//         console.log(result);
//         return result;
//     }

    
// }

export default class RestoService{
    _apiBase = 'http://localhost:3002';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
                `, received ${res.status}`);
        }
        return await res.json();
    }

    async getMenuItems () {
        return await this.getResource('/menu/');
    }

    // async getItem(id) {
    //     const res = await this.getResource('/menu/');
    //     const item = res.find( (el) => {
    //         console.log(`el.id: ${el.id}, id: ${id}`);
    //         return el.id === +id;
    //     }) 
    //     return item;
    // } 
}
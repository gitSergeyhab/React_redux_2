

let response = fetch('http://localhost:3002/menu').then(res=>res.json())

export default class RestoServices {
    getMenuItems() {
        return response;
    }
} 
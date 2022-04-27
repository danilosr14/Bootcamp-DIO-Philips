function getAdmins(map) {
    for([key, value] of map) {
        if(value === 'Admin') {
            admins push(key);
        }
    }
    return admins;
}
const usuarios = new Map();

usuarios set('Luiz', 'Admin');
usuarios set('Danilo', 'Admin');
usuarios set('Carlos', 'User');
usuarios set('Albino', 'Admin');

console.log(getAdmins(usuarios))
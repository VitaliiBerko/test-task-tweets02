export const readUsersFromLs =()=> {

    try {
        const usersInLs = JSON.parse(localStorage.getItem('users')) ?? [];

        if (usersInLs.length ===0) {
            return []
        }

        return usersInLs;
    } catch (error) {
        console.log(error);
        return []
    }
}
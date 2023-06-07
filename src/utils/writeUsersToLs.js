export const writeUsersToLs =(users)=> {
try {
    localStorage.setItem('users', JSON.stringify(users))
} catch (error) {
    console.log(error);
}
}
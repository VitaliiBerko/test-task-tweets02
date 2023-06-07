import { useEffect, useRef, useState } from "react"
import { STATUS } from "../constans/status";
import { readUsersFromLs } from "./readUsersFromLS";
import { LIMIT_PER_PAGE } from "../constans/operation.constans";
import { getUsers } from "../services/user.services";
import { writeUsersToLs } from "./writeUsersToLs";


export const useFetchUsers=()=>{


    const [isMoreUsers, setIsMoreUsers] = useState(true);
    const [status, setStatus] = useState(STATUS.idle);
    const firstRun = useRef(true);

    const usersInLs = readUsersFromLs();

    if(usersInLs.length ===0 ) {
        firstRun.current=false
    }

    const pageInLs = usersInLs.length<LIMIT_PER_PAGE? 1 : Math.ceil(usersInLs.length /LIMIT_PER_PAGE)

    const [page, setPage]= useState(pageInLs);
    const [users, setUsers] = useState(usersInLs);

    useEffect(()=>{
        const fetchData = async(page=1)=>{
            const params={
                page,
                limit: LIMIT_PER_PAGE
            }
            try {
                setStatus(STATUS.loading);
                const data = await getUsers(params);

                if(data.length ===0 ) {
                    setIsMoreUsers(false);
                    setStatus(STATUS.success);
                    return
                }

                if(data.length<params.limit) {
                    setIsMoreUsers(false)
                }

                setUsers(prev=>[...prev, ...data])
                setStatus(STATUS.success);

            } catch (error) {
                console.log(error);
                setStatus(STATUS.error)
            }
        }
        if(firstRun.current) {
            firstRun.current=false
            return
        }

        fetchData(page)
    }, [page]);

    writeUsersToLs(users);

    return {users, setUsers, isMoreUsers, status,page, setPage};

}
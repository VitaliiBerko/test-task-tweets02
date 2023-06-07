
import UserCardItem from "../UserCardItem/UserCardItem";

import {  useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
// import { LIMIT_PER_PAGE } from "../../constans/operation.constans";
import { STATUS } from "../../constans/status";
import { Loader } from "../Loader/Loader";
import { ButtonLoadMore } from "../Buttons/ButtonLoadMore";
import { Filter } from "../Filter/Filter";
import { FILTER } from "../../constans/filter.constans";
import { Btn, UserCards, Wrapper } from "./UserCardList.styled";
import { useFetchUsers } from "../../utils/useFetchusers";
import { writeUsersToLs } from "../../utils/writeUsersToLs";

export const UserCardList = () => {
  const{users, setUsers, isMoreUsers, status,page, setPage}= useFetchUsers();
  // const isLoading = status===STATUS.loading;
  const [filteredUsers, setFilteredUsers]= useState(users);
  const [selectedSortOption, setSelectedSortOption] = useState(FILTER.showAll);
  const navigate = useNavigate();

  useEffect(()=>{
    if(selectedSortOption===FILTER.follow) {
      setFilteredUsers(users.filter(({isFollowing})=>!isFollowing))
      return
    }
    if(selectedSortOption ===FILTER.followings) {
      setFilteredUsers(users.filter(({isFollowing})=>isFollowing===true))
      return
    }

    setFilteredUsers(users)
  }, [users, selectedSortOption])

  const toggleUserIsFollowing =(id)=>{
    const updatedUsers = users.map(user=>{
      if(user.id===id) {
        return {...user, isFollowing: !user.isFollowing}
      }
      return user;
    })

    writeUsersToLs(updatedUsers);
    setUsers(updatedUsers);
  }

  // const [page] = useState(1);
  // const users = useSelector(selectUsers);
  // const status = useSelector(selectStatus);
  // const followingStatus = useSelector(selectFollowingStatud);
  // const dispatch = useDispatch();
  
  // const [limit, setLimit] = useState(LIMIT_PER_PAGE);
  

  // useEffect(() => {
  //   dispatch(fetchUsers({ page, limit }));
  // }, [dispatch, page, limit]);

  // const handleOnLoadMore = () => {
  //   setLimit((prev) => prev + 3);
  // };

  // const getFilteredUsers = (users, selectedSortOption, followingStatus) => {
  //   if (selectedSortOption === FILTER.showAll) {
  //     return users;
  //   } else if (selectedSortOption === FILTER.follow) {
  //     return users.filter((user) => !followingStatus[user.id]);
  //   } else if (selectedSortOption === FILTER.followings) {
  //     return users.filter((user) => followingStatus[user.id]);
  //   }
  //   return [];
  // };

  // const filteredUsers = useMemo(
  //   () => getFilteredUsers(users, selectedSortOption, followingStatus),
  //   [followingStatus, selectedSortOption, users]
  // );
  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <Wrapper>
        <Btn onClick={onBack}> &#10094; Back </Btn>

        <Filter setSelectedSortOption={setSelectedSortOption} />
      </Wrapper>

      {status === STATUS.loading ? (
        <Loader />
      ) : (
        <>
          <UserCards>
            {filteredUsers?.map((user) => (
              <UserCardItem  key={user.id} user={user} toggleUserIsFollowing={toggleUserIsFollowing}  />
            ))}
          </UserCards>
          {!isMoreUsers ? (
            ""
          ) : (
            <ButtonLoadMore status={status} onClickFn={()=>{setPage(page+1)}} text="Load More" />
          )}
        </>
      )}
    </div>
  );
};

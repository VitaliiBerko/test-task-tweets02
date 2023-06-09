import {UserCardItem} from "../../components/UserCardItem/UserCardItem";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { STATUS } from "../../constans/status";
import { Loader } from "../../components/Loader/Loader";
import { ButtonLoadMore } from "../../components/Buttons/ButtonLoadMore";
import { Filter } from "../../components/Filter/Filter";
import { FILTER } from "../../constans/filter.constans";
import { Btn, UserCards, Wrapper } from "./Tweets.styled";
import { useFetchUsers } from "../../utils/useFetchusers";
import { writeUsersToLs } from "../../utils/writeUsersToLs";

function Tweets  ()  {
  const { users, setUsers, isMoreUsers, status, page, setPage } =
    useFetchUsers();
  // const isLoading = status===STATUS.loading;
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [selectedSortOption, setSelectedSortOption] = useState(FILTER.showAll);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedSortOption === FILTER.follow) {
      setFilteredUsers(users.filter(({ isFollowing }) => !isFollowing));
      return;
    }
    if (selectedSortOption === FILTER.followings) {
      setFilteredUsers(users.filter(({ isFollowing }) => isFollowing === true));
      return;
    }

    setFilteredUsers(users);

  }, [users, 
    selectedSortOption
  ]);

  const toggleUserIsFollowing = (id) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, isFollowing: !user.isFollowing };
      }
      return user;
    });

    writeUsersToLs(updatedUsers);
    setUsers(updatedUsers);
  };

  
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
            {filteredUsers.map((user) => {
              return (
                <li key={user.id}>
                  <UserCardItem
                    // key={user.id}
                    user={user}
                    toggleUserIsFollowing={toggleUserIsFollowing}
                  />
                </li>
              );
            })}
          </UserCards>

          {!isMoreUsers ? (
            ""
          ) : (
            <ButtonLoadMore
              status={status}
              onClickFn={() => {
                setPage(page + 1);
              }}
              text="Load More"
            />
          )}
        </>
      )}
    </div>
  );
}

export default Tweets

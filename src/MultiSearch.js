import React, { useEffect, useRef, useState } from "react";
import Pill from "./Pill";

const MultiSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const [selectedUserSet, setSelectedUsersSet] = useState(new Set());

  useEffect(() => {
    // if(searchTerm)
    fetchData();
  }, [searchTerm]);

  const fetchData = async () => {
    const data = await fetch(
      `https://dummyjson.com/users/search?q=${searchTerm}`
    );
    const json = await data.json();
    console.log(json.users);
    setSearchSuggestions(json.users);
  };
  console.log(searchSuggestions);

  const handleSelectedUser = (user) => {
    console.log(user);
    // to store users in the input field
    setSelectedUsers([...selectedUsers, user]);
    // used set to remove selected item from the dropdown
    setSelectedUsersSet(new Set([...selectedUserSet, user.email]));
    // after type anythings for search then make the search field empty
    setSearchTerm("");
    // after check from dropdown should hide the dropdown
    setSearchSuggestions([]);
    // to focus directly after adding new users
    inputRef.current.focus();
  };

  const handleRemove = (user) => {
    // check if the current user id and already has user id same then remove from array
    const updatedUser = selectedUsers.filter(
      (selectedUser) => user.id !== selectedUser.id
    );
    // update filtered array
    setSelectedUsers(updatedUser);

    // need to remove from set also so that the remove item will appear in the dropdown again
    // so created a copy of that set array
    const updatedEmails = new Set(selectedUserSet);
    // then directly remove from set
    updatedEmails.delete(user.email);
  };

  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    // e.key - to select backspace in keyboard
    // e.target.value === "" - means if user type something then this removing pills from input won't work
    // selectedUsers.length > 0 - if more than one user is there in the array
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      selectedUsers.length > 0
    ) {
      const lastUser = selectedUsers[selectedUsers.length - 1];
      handleRemove(lastUser);
      setSearchSuggestions([]);
    }
  };

  console.log("selectedUsers", selectedUsers);
  console.log(selectedUserSet);

  return (
    <>
      <div className="user_search_container">
        <div className="user_search_input">
          {/* Pills */}
          {selectedUsers?.map((user) => {
            return (
              <Pill
                key={user.id}
                image={user.image}
                text={`${user.firstName} ${user.maidenName} ${user.lastName}`}
                onClick={() => handleRemove(user)}
              />
            );
          })}
          <div>
            <input
              type="text"
              placeholder="Search for a user..."
              value={searchTerm}
              ref={inputRef}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <ul className="suggestion_list">
              {searchSuggestions.map((sug) => {
                return !selectedUserSet.has(sug.email) ? (
                  <li key={sug.id} onClick={() => handleSelectedUser(sug)}>
                    {console.log("hasornot", selectedUserSet.has(sug.email))}
                    <img src={sug.image} alt={sug.maidenName} />
                    <h3>
                      {sug.firstName} - {sug.maidenName} - {sug.lastName}
                    </h3>
                  </li>
                ) : (
                  <></>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiSearch;

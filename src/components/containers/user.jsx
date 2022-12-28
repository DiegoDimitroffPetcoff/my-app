import React from "react";
import  { UserComponent }  from "../pure/user";
import { User } from "../../models/user";

export const UserContainer = () => {
  const UserDefault = new User("Diego", "DImitroff", "diegodimitroffpetcoff@gmail.com", true);

  return (
    <div>
      <UserComponent user={ UserDefault }></UserComponent>
    </div>
  );
};

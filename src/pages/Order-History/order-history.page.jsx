import React from "react";
import * as usersService from "../../utils/users/users-service";

const OrderHistoryPage = () => {
  const handleCheckToken = async () => {
    const expire = await usersService.checkToken();
    console.log(expire);
  };

  return (
    <div>
      <h1>Order History</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>
  );
};

export default OrderHistoryPage;

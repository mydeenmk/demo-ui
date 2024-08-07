import React from "react";
import {User} from '@nextui-org/user';

export default function Loguser() {
  return (
    <User   
      name="Jane Doe"
      description="Product Designer"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
  );
}

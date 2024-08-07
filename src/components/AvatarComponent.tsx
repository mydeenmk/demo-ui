// components/AvatarComponent.tsx

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import styles from '../components/AvatarComponent.module.css';

const AvatarComponent: React.FC = () => {
  return (
    <div className={styles.avatarContainer}>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AvatarComponent;

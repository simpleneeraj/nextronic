'use client';

import React from 'react';
// import Header from './header'
import Sidebar from './sidebar';
import UIView from '@/ui-kit/UIView';
import { MenuData } from '@/typings/layout';
import menusData from '@/constants/private.json';

type Props = {
  session?: object;
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <section className="flex flex-col">
      {/* <Header /> */}
      <UIView className="w-full flex">
        <Sidebar menus={menusData as MenuData[]} />
        <UIView className="flex flex-col flex-1">{children}</UIView>
      </UIView>
    </section>
  );
};

export default DashboardLayout;

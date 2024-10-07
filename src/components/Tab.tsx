"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { GoChecklist } from 'react-icons/go';
import { IoAnalyticsOutline } from 'react-icons/io5';

const Tabs = [
    {
        icon: BiHomeAlt,
        name: "Home",
        path: "/"
    },
    {
        icon: FiSettings,
        name: "Setup",
        path: "/setup"
    },
    {
        icon: GoChecklist,
        name: "Manage",
        path: "/manage"
    },
    {
        icon: IoAnalyticsOutline,
        name: "Reporting",
        path: "/reporting"
    },
];

const Tab = () => {
  const pathname = usePathname();
  return (
    <div className='w-[8%] h-full flex flex-col items-center bg-slate-50 sticky'>
        {Tabs.map((t, i) => {
          return (
            <Link href={t.path} className={`text-sm flex flex-col items-center w-full py-4 ${pathname === t.path ? "bg-slate-200" : ""}`} key={i}>
                <t.icon className='text-2xl mb-1'/>
                {t.name}
            </Link>
          );
        })}
    </div>
  )
}

export default Tab;

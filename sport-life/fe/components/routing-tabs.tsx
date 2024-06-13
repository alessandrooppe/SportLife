'use client'

import Link from 'next/link';
import { For } from './for';
import { usePathname } from 'next/navigation';
import { TabProp } from '@/model/tab-type';

type RoutngTabsProp = {
    tabs: TabProp[];
};
  
export const RoutingTabs = ({tabs}: RoutngTabsProp) => {
    const currentPath = usePathname();

    return (
      <div className="flex space-x-4 p-4 justify-end">
        <For each={tabs}>
          {(tab) => (
            <Link href={tab.href} key={tab.label}>
              <p className={`py-2 px-6 transition duration-300 ${
                currentPath === tab.href
                    ? 'bg-blue-500 text-white shadow-lg dark:bg-darkBackground'
                    : 'bg-white text-blue-500 hover:bg-blue-100 dark:bg-darkForeground dark:text-darkBackground'
                }`}>
                {tab.label}
              </p>
            </Link>
          )}
        </For>
      </div>
    );
};

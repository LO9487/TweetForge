"use client";
import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

const UserPage = () => {
  const router = useRouter();

  const handleProfileClick = () => {
    router.push('/mainpage');
  };

  return (
    <div className="bg-gray-800 text-gray-50 min-h-screen flex flex-col">
      <header className="flex items-center justify-between h-16 px-4 md:px-6 border-b border-gray-700 bg-gray-900">
        <div className="flex items-center space-x-4">
          <Link className="flex items-center space-x-2" href="#">
            <TwitterIcon className="h-6 w-6" />
            <span className="text-xl font-bold">TweetForge</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8">
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleProfileClick}>MainPage</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="container mx-auto py-8 px-4 md:px-6 flex-1 flex flex-col justify-center dark:bg-gray-800">
        <div className="flex flex-col items-center space-y-4 md:space-y-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-center">
              <h1 className="text-2xl font-bold md:text-3xl">Olivia Davis</h1>
              <p className="text-gray-400">@olivia_davis</p>
            </div>
          </div>
          <Tabs className="w-full max-w-3xl" defaultValue="tweets">
            <TabsList className="flex w-full justify-around border-b border-gray-700">
              <TabsTrigger value="tweets">Tweets</TabsTrigger>
            </TabsList>
            <TabsContent className="py-6 flex-1" value="tweets">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="rounded-lg border p-4 dark:border-gray-800">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">Exploring the Wonders of Nature</h3>
                    <p className="text-gray-400 line-clamp-2">
                      Join me on an adventure as we discover the hidden gems of the great outdoors.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-900 p-4 dark:border-gray-800">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">The Art of Minimalism</h3>
                    <p className="text-gray-400 line-clamp-2">
                      Discover the beauty in simplicity and learn how to declutter your life.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-900 p-4 dark:border-gray-800">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">Cooking for Beginners</h3>
                    <p className="text-gray-400 line-clamp-2">
                      Learn essential cooking techniques and create delicious meals with ease.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-900 p-4 dark:border-gray-800">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">The Power of Meditation</h3>
                    <p className="text-gray-400 line-clamp-2">
                      Discover the transformative benefits of mindfulness and find inner peace.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

interface TwitterIconProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string | number;
  strokeLinecap?: "inherit" | "round" | "butt" | "square" | undefined;
  strokeLinejoin?: "inherit" | "round" | "miter" | "bevel" | undefined;
}

function TwitterIcon(props: TwitterIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "24"}
      height={props.height || "24"}
      viewBox={props.viewBox || "0 0 24 24"}
      fill={props.fill || "none"}
      stroke={props.stroke || "currentColor"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap={props.strokeLinecap}
      strokeLinejoin={props.strokeLinejoin}
      className={props.className}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export default UserPage;

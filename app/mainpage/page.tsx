"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  const router = useRouter();

  const handleProfileClick = () => {
    router.push('/profile');
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <TwitterIcon className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">TweetForge</span>
          </div>
          <div className="flex items-center">
            <Button className="mr-2" size="icon" variant="ghost">
              <SignalIcon className="h-6 w-6" />
            </Button>
            <Button className="mr-2" size="icon" variant="ghost">
              <MessageCircleIcon className="h-6 w-6" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8">
                  <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={handleProfileClick}>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-gray-100 dark:bg-gray-800 py-6 px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md mb-6 p-4">
            <div className="flex items-center mb-4">
              <Avatar className="h-10 w-10 mr-4">
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <Textarea
                className="flex-1 border-none focus:ring-0 dark:bg-gray-900 dark:text-white"
                placeholder="What's happening?"
              />
            </div>
            <div className="flex justify-end">
              <Button variant="default">Tweet</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

interface MessageCircleIconProps {
  className?: string;
}

const MessageCircleIcon: React.FC<MessageCircleIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}

interface SignalIconProps {
  className?: string;
}

const SignalIcon: React.FC<SignalIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  );
}

interface TwitterIconProps {
  className?: string;
}

const TwitterIcon: React.FC<TwitterIconProps> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export default MainPage;

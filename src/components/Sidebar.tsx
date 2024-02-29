import { Button } from "./ui/button";

import UIFryLogo from '@/assets/uifry-logo.png';

import { HelpCircle, LayoutDashboard, LineChart, Moon, Settings, ShieldCheck, User, Wallet } from 'lucide-react';
import Image from "next/image";
import { Switch } from "./ui/switch";

export function Sidebar() {
  return (
    <div className="min-w-[329px] bg-sidebar-background border-r-2 border-black rounded-xl justify-center">
      <div className="mt-[57px] ml-7">
        <Button className="bg-transparent shadow-none hover:bg-transparent">
          <Image src={UIFryLogo} alt="Logo" className="w-[170px] h-[50px]"/>
        </Button>
      </div>
      <div className="grid mt-[61px] justify-center">
        <Button className="w-[263px] h-[57px] gap-x-3 justify-start text-[16px] font-semibold bg-sidebar-active hover:bg-sidebar-active/60 hover:ease-out">
          <LayoutDashboard className="size-6" />
          Dashboard
        </Button>
        <Button className="w-[263px] h-[57px] gap-x-3 justify-start text-base font-light bg-transparent shadow-none hover:font-medium hover:bg-transparent">
          <LineChart className="size-6" />
          Analytics
        </Button>
        <Button className="w-[263px] h-[57px] gap-x-3 justify-start text-base font-light bg-transparent shadow-none hover:font-medium hover:bg-transparent">
          <Wallet className="size-6" />
          My wallet
        </Button>
        <Button className="w-[263px] h-[57px] gap-x-3 justify-start text-base font-light bg-transparent shadow-none hover:font-medium hover:bg-transparent">
          <User className="size-6" />
          Accounts
        </Button>
        <Button className="w-[263px] h-[57px] gap-x-3 justify-start text-base font-light bg-transparent shadow-none hover:font-medium hover:bg-transparent">
          <Settings className="size-6" />
          Settings
        </Button>
      </div>
      <div className="flex justify-center pt-5">
        <div className="border-t-[1px] border-t-[#4B4B99]">
          <div className="grid mt-4">
            <Button className="w-[263px] h-[57px] gap-x-3 justify-start text-base font-light bg-transparent shadow-none hover:font-medium hover:bg-transparent">
              <ShieldCheck className="size-6" />
              Security
            </Button>
            <Button className="w-[263px] h-[57px] gap-x-3 justify-start text-base font-light bg-transparent shadow-none hover:font-medium hover:bg-transparent">
              <HelpCircle className="size-6" />
              Help Centre
            </Button>
            {/* <div className="flex ml-[50px]"> */}
              <Button className="w-[263px] h-[57px] gap-x-3 justify-start text-base font-light bg-transparent shadow-none hover:bg-transparent cursor-default">
                <Moon className="size-6" />
                Dark Mode
                <Switch id="dark-mode" className="ml-[15px]" />
              </Button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

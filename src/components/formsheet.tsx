import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ReactNode } from "react";

interface SheetDemoProps {
    children: ReactNode;
  }

  export function SheetDemo({ children }: SheetDemoProps) {
  return (
    <div >
        <Sheet >
        <SheetTrigger asChild>
        <a className="flex items-center cursor-pointer">
          {children}
        </a>
      </SheetTrigger>
      <SheetContent className="bg-white ">
        <SheetHeader className="">
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4 ">
          <div className="grid grid-cols-4 items-center gap-4 ">
            <Label htmlFor="name" className="text-right">
              Name 
            </Label>
            <Input id="name"  className="col-span-3"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username 
            </Label>
            <Input id="username"  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Password" className="text-right">
              Password 
            </Label>
            <Input id="password"  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Password" className="text-right">
             confirm Password 
            </Label>
            <Input id="password"  className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

    </div>
    
  )
}

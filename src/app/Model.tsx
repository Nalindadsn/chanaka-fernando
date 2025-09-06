import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import FoodMenu from "./FoodMenu";

export function FoodMenuModel() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="z-[10000] cursor-pointer">MENU</Button>
      </DialogTrigger>
      <DialogContent className="w-full h-screen overflow-y-auto m-0 p-0 z-[10000]">
        <DialogHeader>
          <DialogTitle className="p-5">
            <DialogClose asChild>
            <Button variant="outline" size={"sm"} className="mr-2 md:hidden block">x</Button>
          </DialogClose>
          Our Menu</DialogTitle>
          <FoodMenu/>
        </DialogHeader>
        <div className="grid gap-4"></div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default FoodMenuModel;

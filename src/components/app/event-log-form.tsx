import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, MinusIcon, PlusIcon } from "lucide-react";
import { format } from "date-fns";
import React from "react";
import { Calendar } from "../ui/calendar";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function EventLogForm() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="mx-auto overflow-auto bg-app_white">
      <Card className="mb-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-3xl text-app_primary">
            GODZILLA X KONG: THE TITAN CHALLENGE: 5K/10K/13.1
          </CardTitle>
          <CardDescription>
            Rise together or fall alone. embark on an epic journey like no other
            as you unite with fellow participants and step into the monsterverse
            with godzilla and kong!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">
            Event Period: APR. 1 - DEC. 31
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-2 gap-2">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Participant Information</CardTitle>
            <CardDescription>Enter your details</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-2">
              <div className="flex items-center gap-2">
                <Label>Name</Label>
                <Input placeholder="Name" />
              </div>
              <div className="flex items-center gap-2">
                <Label>Email</Label>
                <Input placeholder="Email" />
              </div>
              <div className="flex items-center gap-2">
                <Label>Age</Label>
                <Input placeholder="Age" />
              </div>
              <div className="flex items-center gap-2">
                <Label>Gender</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Choose Distance</CardTitle>
            <CardDescription>Select the distance covered</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">5k</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">10k</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">13.1</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Choose Mode</CardTitle>
            <CardDescription>Select the distance covered mode</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1" className="w-full">
                  Completed all at once
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2" className="w-full">
                  Completed in multiple segments
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
        <Card className="col-span-2 relative">
          <CardHeader>
            <CardTitle>Segment Details</CardTitle>
            <CardDescription>Enter Segment Details</CardDescription>
          </CardHeader>
          <div className="flex items-center justify-start gap-x-2 absolute top-4 right-4">
            <Button variant={"outline"} size={"sm"}>
              <PlusIcon size={16} color="green" />
            </Button>
            <Button variant={"outline"} size={"sm"}>
              <MinusIcon size={16} color="red" />
            </Button>
          </div>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-x-4 my-2 text-xs text-gray-600 tracking-widest">
              <h2 className="col-span-2 pl-2">DATE</h2>
              <h2 className="pl-2">START TIME</h2>
              <h2 className="pl-2">END TIME</h2>
              <h2 className="pl-2">DISTANCE (KM)</h2>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-x-4 my-2 text-xs text-gray-600 tracking-widest">
                <div className="col-span-2 pl-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="pl-2">
                  <Input placeholder="Start Time" type="time" />
                </div>
                <div className="pl-2">
                  <Input placeholder="End Time" type="time" />
                </div>
                <div className="pl-2">
                  <Input placeholder="Distance" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-x-4 my-2 text-xs text-gray-600 tracking-widest">
                <div className="col-span-2 pl-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="pl-2">
                  <Input placeholder="Start Time" type="time" />
                </div>
                <div className="pl-2">
                  <Input placeholder="End Time" type="time" />
                </div>
                <div className="pl-2">
                  <Input placeholder="Distance" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Verification</CardTitle>
            <CardDescription>Select the distance covered mode</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 w-full"
              >
                I confirm that the entered information is accurate.
              </label>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-between">
          <Button className="bg-app_primary">Submit Details</Button>
        </div>
      </div>
    </div>
  );
}

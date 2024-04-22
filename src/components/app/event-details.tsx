import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ThreeDCardDemo } from "../common/event-card";
import { AnimatedTooltip } from "../common/animated-tooltip";
import FiveKData from "./table/5k";
import { people } from "@/data";
import TenKData from "./table/10K";
import AppHeader from "../common/header";

export default function EventDetails() {
  return (
    <AppHeader>
      <div className="grid grid-cols-5 px-5">
        <div className="">
          <ThreeDCardDemo />
        </div>
        <div className="col-span-3">
          <Tabs defaultValue="5k" className="p-5">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="5k">5K</TabsTrigger>
                <TabsTrigger value="10k">10K</TabsTrigger>
                <TabsTrigger value="13.5">13.5</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="5k">
              <FiveKData />
            </TabsContent>
            <TabsContent value="10k">
              <TenKData />
            </TabsContent>
          </Tabs>
        </div>
        <div className="flex flex-col gap-y-5 mt-16">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Top Performers - 5K</CardTitle>
                <CardDescription>
                  GODZILLA X KONG: THE TITAN CHALLENGE 5K
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row items-center justify-center">
                  <AnimatedTooltip items={people} />
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Top Performers - 10K</CardTitle>
                <CardDescription>
                  GODZILLA X KONG: THE TITAN CHALLENGE 10K
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row items-center justify-center">
                  <AnimatedTooltip items={people} />
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Top Performers - 13.1</CardTitle>
                <CardDescription>
                  GODZILLA X KONG: THE TITAN CHALLENGE 13.1
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row items-center justify-center">
                  <AnimatedTooltip items={people} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppHeader>
  );
}

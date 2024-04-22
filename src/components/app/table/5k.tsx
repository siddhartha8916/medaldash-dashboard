import CircularProgressBar from "@/components/common/circular-progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { participants } from "@/data";
import { Award, ChevronsUpDown } from "lucide-react";

const FiveKData = () => {
  return (
    <Card x-chunk="dashboard-05-chunk-3">
      <CardHeader className="px-7">
        <CardTitle>Leadership Dashboard - 5k</CardTitle>
        <CardDescription>Total Participants - 5400</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Participant Name</TableHead>
              <TableHead className="hidden sm:table-cell">Location</TableHead>
              <TableHead className="hidden sm:table-cell">
                Total Distance
              </TableHead>
              <TableHead className="hidden md:table-cell">
                Total Time Taken
              </TableHead>
              <TableHead className="hidden md:table-cell">
                Total Segments
              </TableHead>
              <TableHead className="hidden md:table-cell">
                Completion Rate
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {participants
              ? participants.map((participant) => (
                  <Dialog key={participant.id}>
                    <TableRow>
                      <TableCell>
                        {participant.completion_rate >= 75 && (
                          <Award className="w-5 h-5 text-[#833ab4]" />
                        )}
                        <div className="font-medium">{participant.name}</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          {participant.age} - {participant.gender}
                        </div>
                      </TableCell>

                      <TableCell className="hidden sm:table-cell">
                        {participant.location}
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-center">
                        <Badge className="text-xs" variant="secondary">
                          {participant.total_distance} K
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {participant.total_time_taken}
                      </TableCell>
                      <DialogTrigger asChild>
                        <TableCell className="hidden md:table-cell cursor-pointer">
                          <Badge className="text-xs" variant="secondary">
                            {participant.segments &&
                            participant?.segments?.length > 0
                              ? participant.segments?.length
                              : 1}
                            {participant.segments &&
                              participant?.segments?.length > 0 && (
                                <ChevronsUpDown className="w-3 h-3 ml-2" />
                              )}
                          </Badge>
                        </TableCell>
                      </DialogTrigger>
                      <TableCell className="hidden sm:table-cell">
                        <div className="flex items-center gap-x-2">
                          <CircularProgressBar
                            value={participant.completion_rate}
                            size={25}
                            thickness={3}
                          />
                          <span className="font-medium">
                            {participant.completion_rate}%
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>

                    <DialogContent className="sm:max-w-[625px]">
                      <DialogHeader>
                        <DialogTitle>Segment Details</DialogTitle>
                        <DialogDescription>
                          Segment Details for {participant.name}
                        </DialogDescription>
                      </DialogHeader>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Distance</TableHead>
                            <TableHead>Time Taken</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {participant.segments?.map((segment) => (
                            <TableRow key={segment.segment_id}>
                              <TableCell className="font-medium">
                                {segment.segment_date}
                              </TableCell>
                              <TableCell>{segment.segment_distance}</TableCell>
                              <TableCell>
                                {segment.segment_time_taken}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>

                      <DialogFooter>
                        <DialogClose asChild>
                          <Button type="button" variant="destructive">
                            Close
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                ))
              : null}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default FiveKData;

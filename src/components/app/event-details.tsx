import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function EventDetails() {
  return (
    <Card className="mb-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-3xl">
          GODZILLA X KONG: THE TITAN CHALLENGE: 5K/10K/13.1
        </CardTitle>
        <CardDescription>
          Rise together or fall alone. embark on an epic journey like no other
          as you unite with fellow participants and step into the monsterverse
          with godzilla and kong!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">Event Period: APR. 1 - DEC. 31</div>
      </CardContent>
    </Card>
  );
}

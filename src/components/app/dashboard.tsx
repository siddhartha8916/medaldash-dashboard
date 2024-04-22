import { images2 } from "@/data";
import { ParallaxScroll } from "../common/parallex-scroll";
import "./EventLogForm.css";
import AppHeader from "../common/header";

export function Dashboard() {
  return (
    <AppHeader>
      <ParallaxScroll images={images2} />;
    </AppHeader>
  );
}

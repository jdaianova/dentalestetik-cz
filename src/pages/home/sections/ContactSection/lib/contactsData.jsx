import Address from "../ui/Address";
import ContactInfo from "../ui/ContactInfo";
import WorkingHours from "../ui/WorkingHours";
import MapLocation from "../ui/MapLocation";

export const contactsData = [
  {
    id: "address",
    component: Address,
  },
  {
    id: "contact-info",
   component: ContactInfo,
  },
  {
    id: "working-hours",
    component: WorkingHours,
  },
  {
    id: "map-location",
    component: MapLocation,
  },
];

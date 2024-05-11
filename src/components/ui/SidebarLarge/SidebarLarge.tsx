import {
  ChevronDownIcon,
  PowerIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/16/solid";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SidebarLarge = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="bg-gray-900 text-gray-50 col-span-2 h-screen sticky top-0 left-0 overflow-y-auto overflow-x-hidden">
      <div className="mb-2 p-4">
        <Typography
          as="a"
          href="/"
          className="text-gray-50 mr-4 cursor-pointer py-1.5 font-bold text-base md:text-xl"
        >
          Disaster Helpline.
        </Typography>
      </div>
      <List>
        <NavLink
          to=""
          end
          className={({ isActive }) =>
            isActive ? "bg-blue-gray-50/50 text-blue-gray-700 rounded-md" : ""
          }
        >
          <ListItem className="text-gray-50">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </NavLink>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0 group" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3 text-gray-50"
            >
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal text-gray-50 group-hover:text-gray-800"
              >
                Supply Maintenance
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="ps-8">
              <NavLink
                to="create-supply"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-gray-50/50 text-blue-gray-700 rounded-md"
                    : ""
                }
              >
                <ListItem className="text-gray-50">Create Supply</ListItem>
              </NavLink>
              <NavLink
                to="supplies"
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-gray-50/50 text-blue-gray-700 rounded-md"
                    : ""
                }
              >
                <ListItem className="text-gray-50">Get Supplies</ListItem>
              </NavLink>
            </List>
          </AccordionBody>
        </Accordion>
        <ListItem className="text-gray-50">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </div>
  );
};

export default SidebarLarge;

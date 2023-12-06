"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

const MobileNavbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState("dashboard");

  const handleNavChange = (event: React.SyntheticEvent, newValue: string) => {
    setNav(newValue);
    router.push(`/${newValue}`);
  };

  return (
    <div style={{ width: "100%", position: "absolute", bottom: "0", borderTop: '1px solid #A9A9A9' }}>
      <BottomNavigation
        value={nav}
        onChange={handleNavChange}
        sx={{ height: "8vh", fontWeight: 600 }}
      >
        <BottomNavigationAction
          label="Dashboard"
          value="dashboard"
          icon={<SpaceDashboardRoundedIcon />}
        />
        <BottomNavigationAction
          label="Stats"
          value="stats"
          icon={<QueryStatsIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default MobileNavbar;

import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./applayout";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";
import HealthPage from "./modules/health/pages/healthpage";
import FamilyPage from "./modules/family/pages/familypage";
import TravelPage from "./modules/travel/pages/travelpage";
import FinancePage from "./modules/finance/pages/financepage";
import PrayerPage from "./modules/prayer/pages/prayerpage";
import SchoolPage from "./modules/school/pages/schoolpage";
import DailyTaskPage from "./modules/dailyTask/pages/dailytaskpage";
import HostelLayout from "./modules/hostel/pages/hostellayout";
import HostelDashboard from "./modules/hostel/pages/dashboard";
import HostelStudents from "./modules/hostel/pages/students";
import HostelMeals from "./modules/hostel/pages/meals";
import HostelRent from "./modules/hostel/pages/rent";
import HostelReports from "./modules/hostel/pages/reports";

export default function App() {
  return (
    <Routes>
      <Route element={<Applayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/health" element={<HealthPage />} />
        <Route path="/family" element={<FamilyPage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/finance" element={<FinancePage />} />
        <Route path="/prayer" element={<PrayerPage />} />
        <Route path="/school" element={<SchoolPage />} />
        <Route path="/daily-task" element={<DailyTaskPage />} />

        <Route path="/hostel" element={<hostellayout />}>
          <Route index element={<hosteldashboard />} />
          <Route path="students" element={<hostelstudents />} />
          <Route path="meals" element={<hostelmeals />} />
          <Route path="rent" element={<hostelrent />} />
          <Route path="reports" element={<hostelreports />} />
        </Route>
      </Route>
    </Routes>
  );
}

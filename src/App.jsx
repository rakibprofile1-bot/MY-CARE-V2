import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./appLayout";
import HomePage from "./pages/home";
import ProfilePage from "./pages/profile";
import HealthPage from "./modules/health/pages/healthPage";
import FamilyPage from "./modules/family/pages/FamilyPage";
import TravelPage from "./pages/travelpage";
import FinancePage from "./modules/finance/pages/FinancePage";
import PrayerPage from "./modules/prayer/pages/prayerpage";
import SchoolPage from "./modules/school/pages/SchoolPage";
import DailyTaskPage from "./modules/dailyTask/pages/dailyTaskPage";
import HostelLayout from "./modules/hostel/pages/hostelLayout";
import HostelDashboard from "./modules/hostel/pages/dashboard";
import HostelStudents from "./modules/hostel/pages/students";
import HostelMeals from "./modules/hostel/pages/meals";
import HostelRent from "./modules/hostel/pages/rent";
import HostelReports from "./modules/hostel/pages/reports";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/health" element={<HealthPage />} />
        <Route path="/family" element={<FamilyPage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/finance" element={<FinancePage />} />
        <Route path="/prayer" element={<PrayerPage />} />
        <Route path="/school" element={<SchoolPage />} />
        <Route path="/daily-task" element={<DailyTaskPage />} />

        <Route path="/hostel" element={<HostelLayout />}>
          <Route index element={<HostelDashboard />} />
          <Route path="students" element={<HostelStudents />} />
          <Route path="meals" element={<HostelMeals />} />
          <Route path="rent" element={<HostelRent />} />
          <Route path="reports" element={<HostelReports />} />
        </Route>
      </Route>
    </Routes>
  );
}

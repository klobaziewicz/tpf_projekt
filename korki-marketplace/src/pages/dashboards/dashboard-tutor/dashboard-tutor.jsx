import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import "../dashboard-student/dashboard-student.css";

export default function DashboardTutor() {
  return (
    <div className="ds-page">
      <Navbar />

      <div className="ds-body">
        <div className="ds-topbar">
          <div>
            <h1 className="ds-title">Panel korepetytora</h1>
            <p className="ds-subtitle">
              Tutaj będziesz mógł zarządzać ofertą, harmonogramem i uczniami.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

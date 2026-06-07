import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import "../dashboard-student/dashboard-student.css";

export default function DashboardParent() {
  return (
    <div className="ds-page">
      <Navbar />

      <div className="ds-body">
        <div className="ds-topbar">
          <div>
            <h1 className="ds-title">Panel rodzica</h1>
            <p className="ds-subtitle">
              Tutaj będziesz mógł śledzić postępy dziecka i zarządzać lekcjami.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

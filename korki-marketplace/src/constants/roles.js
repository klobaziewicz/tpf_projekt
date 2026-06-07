export const ROLES = {
  PARENT: "parent",
  STUDENT: "student",
  TUTOR: "tutor",
};

export const ROLE_OPTIONS = [
  {
    value: ROLES.STUDENT,
    label: "Uczeń",
    description: "Szukam korepetycji i śledzę postępy w nauce",
    icon: "📚",
  },
  {
    value: ROLES.PARENT,
    label: "Rodzic",
    description: "Zarządzam nauką mojego dziecka",
    icon: "👨‍👩‍👧",
  },
  {
    value: ROLES.TUTOR,
    label: "Korepetytor",
    description: "Prowadzę lekcje i przyjmuję uczniów",
    icon: "🎓",
  },
];

export const REGISTER_ROLE_CARDS = [
  {
    value: ROLES.PARENT,
    label: "Rodzic",
    description:
      "Monitoruj postępy swojego dziecka, zarządzaj harmonogramem zajęć i wybieraj spośród zweryfikowanych ekspertów z całego kraju.",
    features: [
      "Raporty postępów w czasie rzeczywistym",
      "Bezpieczne płatności i fakturowanie",
    ],
    icon: "parent",
  },
  {
    value: ROLES.STUDENT,
    label: "Uczeń",
    description:
      "Rozwijaj swoje pasje i nadrabiaj zaległości pod okiem najlepszych mentorów. Dostęp do interaktywnych materiałów i biblioteki wiedzy.",
    features: [
      "Interaktywna tablica do nauki",
      "Dostęp do nagrań z lekcji",
    ],
    icon: "student",
  },
  {
    value: ROLES.TUTOR,
    label: "Korepetytor",
    description:
      "Zbuduj swoją markę osobistą jako edukator. Uzyskaj dostęp do profesjonalnych narzędzi dydaktycznych i bazy zmotywowanych uczniów.",
    features: [
      "Elastyczny grafik i własne stawki",
      "System poleceń i certyfikacja",
    ],
    icon: "tutor",
  },
];

export function getDashboardPath(role) {
  switch (role) {
    case ROLES.STUDENT:
      return "/dashboard/student";
    case ROLES.PARENT:
      return "/dashboard/parent";
    case ROLES.TUTOR:
      return "/dashboard/tutor";
    default:
      return "/home";
  }
}

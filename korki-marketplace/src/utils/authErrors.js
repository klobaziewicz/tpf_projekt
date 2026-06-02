const AUTH_ERROR_MESSAGES = {
  "auth/invalid-email": "Nieprawidłowy adres email.",
  "auth/user-disabled": "To konto zostało wyłączone.",
  "auth/user-not-found": "Nie znaleziono konta z tym adresem email.",
  "auth/wrong-password": "Nieprawidłowe hasło.",
  "auth/invalid-credential": "Nieprawidłowy email lub hasło.",
  "auth/email-already-in-use": "Konto z tym adresem email już istnieje.",
  "auth/weak-password": "Hasło musi mieć co najmniej 6 znaków.",
  "auth/too-many-requests": "Zbyt wiele prób. Spróbuj ponownie później.",
  "auth/popup-closed-by-user": "Logowanie zostało anulowane.",
  "auth/network-request-failed": "Błąd połączenia. Sprawdź internet.",
};

export function getAuthErrorMessage(error) {
  return (
    AUTH_ERROR_MESSAGES[error?.code] ||
    "Wystąpił błąd. Spróbuj ponownie."
  );
}

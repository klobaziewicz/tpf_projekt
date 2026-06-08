# 📚 Korki Marketplace

Platforma webowa umożliwiająca wyszukiwanie korepetytorów oraz zarządzanie profilem ucznia, rodzica i tutora.

---

## 🚀 Demo

👉 https://github.com/klobaziewicz/tpf_projekt

---

## 🧩 Funkcjonalności

* 🔍 Wyszukiwanie korepetytorów
* 👤 Profile tutorów
* 🔐 Autoryzacja użytkowników (login / rejestracja)
* 🎓 Dashboardy dla różnych ról:

  * Student
  * Parent
  * Tutor
* 📊 Integracja z Google Analytics

---

## 🛠️ Technologie

* ⚛️ React
* 🌐 React Router
* 🔥 Firebase
* 📈 Google Analytics (GA4)
* 🎨 CSS

---

## 📂 Struktura projektu

```
src/
├── components/
├── contexts/
├── pages/
│   ├── dashboards/
│   ├── home/
│   ├── login/
│   ├── register/
│   └── search/
├── firebase/
├── constants/
```

---

## ⚙️ Instalacja

1. Sklonuj repozytorium:

```bash
git clone https://github.com/klobaziewicz/tpf_projekt.git
cd tpf_projekt
```

2. Zainstaluj zależności:

```bash
npm install
```

3. Skonfiguruj zmienne środowiskowe:

```bash
cp .env.example .env
```

Uzupełnij dane Firebase w `.env`:

```
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_APP_ID=...
```

4. Uruchom projekt:

```bash
npm start
```

---

## 🧪 Dostępne skrypty

```bash
npm start      # uruchamia aplikację
npm run build  # build produkcyjny
npm test       # testy
```

---

## ⚠️ Uwagi

* Projekt wymaga poprawnej konfiguracji Firebase
* Brak konfiguracji `.env` spowoduje błędy runtime

---

## 👥 Autorzy

* @klobaziewicz
* @mblkx
* @JakubKw19

---

## 📄 Licencja

Projekt edukacyjny

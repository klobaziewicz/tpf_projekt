# 📚 Korki Marketplace

**TwojeKorki.pl** to nowoczesna platforma typu marketplace (model B2C/C2C) łącząca uczniów i rodziców poszukujących korepetytorów z nauczycielami oferującymi prywatne lekcje. Umożliwia wygodne wyszukiwanie i rezerwację terminów lekcji, komunikację oraz kompleksowe zarządzanie procesem edukacji poprzez dedykowane panele (Dashboardy) dla ucznia, rodzica i nauczyciela.

---

## 🔗 Przydatne linki

* 🚀 **Aplikacja (Vercel):** [tpf-projekt-itft.vercel.app](https://tpf-projekt-itft.vercel.app/)
* 🎨 **Projekt Figma:** [Figma Design System & Makiety](https://www.figma.com/design/faij0qEutM8qtd59RSRbu7/TwojeKorki-pl?node-id=0-1&t=7IYyyL3O3JXVTDpa-1)
* 📋 **Dokumentacja (Checklista):** [Google Docs](https://docs.google.com/document/d/1P3CQ-kKfGa8OT12JZqVS_p1CX8SQKhsU5vA1ucU_MSI/edit?usp=sharing)

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

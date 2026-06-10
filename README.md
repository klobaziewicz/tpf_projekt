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
* 📈 Google Analytics (GA4) i Contentsquare
* 🎨 CSS


---

## 📄 Analiza

* Google Analytics

Ogólny raport związany mi. z lokalizacją:

https://analytics.google.com/analytics/web/?authuser=1#/a395258357p538329856/realtime/overview?params=_u..nav%3Dmaui&collectionId=user

Ogólny raport związany z użytkownikami:

https://analytics.google.com/analytics/web/?authuser=1#/a395258357p538329856/reports/dashboard?params=_u..nav%3Dmaui%26_r.3..selmet%3D%5B%22conversions%22%5D&collectionId=business-objectives&ruid=business-objectives-generate-leads-overview,business-objectives,generate-leads&r=business-objectives-generate-leads-overview

Szczegółowy raport związany z użytkownikami:

https://analytics.google.com/analytics/web/?authuser=1#/a395258357p538329856/reports/dashboard?params=_u..nav%3Dmaui&collectionId=user&ruid=user-demographics-overview,user,demographics&r=user-demographics-overview

* Contentsquare

Analiza kliknięć na stronie:

<img width="375" height="583" alt="Page On The Fly - June 10, 2026 - KRZYSZTOF Lobaziewicz-ClickMap-2026-06-10" src="https://github.com/user-attachments/assets/cf992eeb-9b5b-42f9-92e3-f75e44eba4b9" />

Analiza ustawienia kursora na stronie:

<img width="375" height="583" alt="Page On The Fly - June 10, 2026 - KRZYSZTOF Lobaziewicz-MoveMap-2026-06-10" src="https://github.com/user-attachments/assets/1c9815a9-2c58-421a-b1e0-1db1ae15eb69" />

Analiza użycia scrolla na stronie:

<img width="375" height="583" alt="Page On The Fly - June 10, 2026 - KRZYSZTOF Lobaziewicz-ScrollMap-2026-06-10" src="https://github.com/user-attachments/assets/3370fb20-6134-47ee-8cc0-7740676b63ed" />

![Uploading Page On The Fly - June 10, 2026 - KRZYSZTOF Lobaziewicz-MoveMap-2026-06-10.png…]()

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

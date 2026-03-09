# 네이티브 앱 껍데기 + WebView 콘텐츠 방식 가이드

## 0. 지금 프로젝트에 해둔 것 vs 당신이 해야 할 것

| 구분 | 내용 |
|------|------|
| **이미 해둔 것** | `@capacitor/core`, `@capacitor/ios`, `@capacitor/android`, `@capacitor/cli` 패키지 추가, `capacitor.config.ts` 설정, `cap:sync` / `cap:open:ios` / `cap:open:android` 스크립트 추가. |
| **당신이 해야 할 것** | ① 터미널에서 `pnpm install` 실행 → ② `pnpm run build` → ③ `npx cap add ios` 및 `npx cap add android` (최초 1회, 네이티브 프로젝트 생성) → ④ `pnpm run cap:sync` → ⑤ `pnpm run cap:open:ios` 또는 `cap:open:android` 로 앱 실행. iOS 빌드는 **macOS + Xcode** 필요, Android는 **Android Studio** 필요. |

즉, **설치·설정은 되어 있으니, 위 순서대로 터미널 명령만 실행**하면 됩니다.

---

## 1. 구성 방식 요약

| 구분 | 설명 |
|------|------|
| **껍데기(Shell)** | 네이티브 앱 — 상태바, 스플래시, Safe Area, 앱 아이콘/이름, 생명주기 등 |
| **콘텐츠** | 기존 React 웹 앱이 **WebView** 안에서 그대로 실행 |

지금 만든 웹 페이지는 **수정 없이** 그대로 두고, iOS/Android 네이티브 프로젝트에서 이 웹을 WebView로 불러오는 형태로 전환할 수 있습니다.

---

## 2. 선택지

### A. **Capacitor** (권장)

- **역할**: 지금 있는 Vite/React 빌드 결과물을 그대로 넣고, iOS/Android 네이티브 프로젝트를 생성해 WebView로 띄움.
- **장점**: 설정이 단순하고, 나중에 네이티브 플러그인(카메라, 푸시 등) 추가하기 좋음. 한 코드베이스로 웹 + iOS + Android 유지 가능.
- **껍데기**: 스플래시, 상태바, Safe Area, 앱 이름/아이콘 등은 네이티브에서 처리하고, **화면 전체를 WebView 한 개**로 채우면 됨. (지금 웹의 상단 StatusBar·하단 네비는 그대로 WebView 안에 있음.)

### B. **Cordova**

- 비슷한 개념이지만 툴체인과 생태계가 오래됨. 새로 시작한다면 Capacitor를 쓰는 편이 일반적.

### C. **React Native + WebView**

- 네이티브 UI(상단바, 하단 탭 등)를 React Native로 만들고, **일부 화면만** WebView로 웹 URL을 띄우는 방식.  
- “껍데기는 완전 네이티브, 안만 WebView”를 세밀하게 나누고 싶을 때 유리하지만, 지금 웹 전체를 그대로 앱으로 쓰려면 작업량이 큼.

### D. **TWA (Trusted Web Activity, Android만)**

- PWA를 Chrome 기반 네이티브 앱처럼 패키징. URL만 웹 서버로 두고, 껍데기는 최소한일 때 적합.

---

## 3. 권장: Capacitor로 전환하는 흐름

현재 프로젝트는 **웹은 그대로 두고**, 아래만 추가하면 됩니다.

### 3.1 사전 조건

- Node 18+
- iOS: macOS + Xcode  
- Android: Android Studio

### 3.2 단계 요약

1. **Capacitor 설치**
   ```bash
   pnpm add @capacitor/core @capacitor/cli
   pnpm add @capacitor/ios @capacitor/android
   ```

2. **Capacitor 초기화**
   ```bash
   npx cap init "까먹지마" "com.yourcompany.tfapp"
   ```
   - 앱 이름·번들 ID는 원하는 값으로 변경.

3. **빌드 출력 폴더 맞추기**  
   `capacitor.config.ts`에서 `webDir`을 Vite 빌드 결과물로 설정 (예: `dist`).
   - Vite 기본값이 `dist`이면 보통 수정 없이 사용.

4. **웹 빌드 후 네이티브에 복사**
   ```bash
   pnpm run build
   npx cap sync
   ```

5. **네이티브 앱 실행**
   ```bash
   npx cap open ios
   npx cap open android
   ```
   - iOS Simulator / Android 에뮬레이터 또는 실제 기기에서 실행하면, **껍데기는 네이티브 앱**, **안쪽은 지금 웹 앱(WebView)** 이 됨.

### 3.3 껍데기에서 조정 가능한 것들

- **스플래시 화면**: 네이티브 스플래시 이미지/색상 (Capacitor Splash 플러그인 또는 네이티브 설정).
- **상태바**: 네이티브 상태바 스타일(어두운/밝은 테마 등).
- **Safe Area**: WebView를 전체 화면으로 채우면, 기기 노치/홈 인디케이터는 네이티브가 처리. 웹 쪽 `viewport-fit=cover` + `env(safe-area-inset-*)` 는 그대로 유효.
- **앱 아이콘·이름**: Xcode / Android Studio에서 앱 아이콘과 표시 이름 설정.

이렇게 하면 “웹 페이지를 브라우저로 보는 것”이 아니라 **네이티브 앱 하나를 실행하면, 그 안이 WebView로 현재 웹 앱**을 보는 형태가 됩니다.

---

## 4. “껍데기만 네이티브, 안은 전부 WebView” vs “일부만 WebView”

- **지금 설명한 방식**: 앱 전체가 네이티브 껍데기 1개 + WebView 1개. 상단 StatusBar·하단 네비까지 모두 **웹(React) 안**에 있음. 구현이 빠름.
- **상단바·하단 탭까지 네이티브로 만들고, 가운데만 WebView**로 하려면: React Native나 Flutter 등으로 네이티브 UI를 만들고, 특정 영역에만 WebView 컴포넌트를 넣는 방식이 필요합니다. 현재 웹을 그대로 쓰는 것보다 설계·개발량이 커짐.

원하시는 것이 “앱 설치형으로 배포하고, 열면 우리 웹이 통째로 WebView로 보이게”라면 **Capacitor로 껍데기만 네이티브 + 내부 전부 WebView**가 가장 적합합니다.

---

## 5. Android Studio란? — 무료인지, 어떻게 쓰는지

### 5.1 Android Studio가 뭔가요?

**Android Studio**는 **구글(Google)이 만든 공식 Android 앱 개발 도구**입니다.

- Android 앱을 만들고, 빌드하고, 에뮬레이터(가상 폰)나 실제 기기에 설치·실행할 때 사용합니다.
- Capacitor로 만든 `android` 폴더를 열어서 **Android 앱으로 빌드·실행**하려면 이 프로그램이 필요합니다.

### 5.2 무료로 사용할 수 있나요?

**네. 완전 무료**입니다.

- Google이 제공하는 공식 도구라서 **비용 없이** 다운로드·사용할 수 있습니다.
- 상업용 앱을 만들어도 **Android Studio 사용에 대한 별도 요금은 없습니다.**

### 5.3 사용하려면 어떻게 해야 하나요?

#### 1) 다운로드

- 공식 사이트: **https://developer.android.com/studio**
- "Download Android Studio" 버튼으로 **Windows / macOS / Linux**용 설치 파일을 받습니다.

#### 2) 설치

- 받은 설치 파일을 실행한 뒤, 화면 안내대로 "Next" 등을 눌러 설치합니다.
- 첫 실행 시 **Android SDK** 설치를 묻는데, **그대로 진행**하면 됩니다 (Android 빌드에 필요합니다).
- 디스크 용량: SDK 포함 시 대략 **수 GB** 정도 필요할 수 있습니다.

#### 3) Capacitor Android 앱을 열 때

프로젝트에서 이미 `npx cap add android`를 했다면:

```bash
pnpm run cap:open:android
```

또는 터미널에서:

```bash
npx cap open android
```

위 명령을 실행하면 **Android Studio가 자동으로 실행**되고, 프로젝트의 `android` 폴더가 열립니다.

#### 4) 앱 실행 방법 (두 가지)

| 방법 | 설명 |
|------|------|
| **에뮬레이터** | Android Studio 안에서 "Device Manager"로 가상 기기(AVD)를 하나 만든 뒤, 상단 재생(▶) 버튼으로 에뮬레이터를 띄우고, 그 다음 같은 재생 버튼으로 앱을 실행합니다. |
| **실제 기기** | USB로 Android 폰을 연결하고, 폰 설정에서 "개발자 옵션" → "USB 디버깅"을 켠 뒤, Android Studio 상단 기기 목록에서 해당 기기를 선택하고 재생(▶) 버튼을 누르면 폰에 앱이 설치·실행됩니다. |

### 5.4 정리

- **Android Studio** = Android 앱을 빌드·실행하는 공식 **무료** 프로그램.
- **https://developer.android.com/studio** 에서 다운로드 후 설치하면 됩니다.
- Capacitor Android 앱을 쓰려면: 설치한 뒤 터미널에서 `pnpm run cap:open:android`로 `android` 프로젝트를 열고, 에뮬레이터나 실제 기기에서 실행하면 됩니다.

---

## 6. 다음 단계

- **지금 구조를 유지한 채 앱으로만 감싸기**  
  → 위 3.2 단계대로 Capacitor 추가 후 `build` → `cap sync` → `cap open ios/android` 로 확인.

- **Capacitor 설정 파일 예시**가 필요하면 프로젝트 루트에 `capacitor.config.ts` 를 추가해 두었으니, `webDir`만 빌드 결과에 맞게 수정하면 됩니다.

**요약: “어떤 방법 써야 하냐” → Capacitor. “내가 해줘야 행동이 있냐” → 네. 터미널에서 `pnpm install` → `pnpm run build` → `npx cap add ios` / `npx cap add android` (최초 1회) → `pnpm run cap:sync` → `cap:open:ios` 또는 `cap:open:android` 까지 실행해 주면 됩니다.**

---

## 7. Android Studio에서 화면이 안 나올 때 (흰 화면 / 출력 안 됨)

### 가능한 원인
- 웹 빌드 결과가 Android 앱에 반영되지 않음 (`cap sync` 누락)
- 에셋 경로가 절대 경로(`/assets/...`)라 WebView에서 로드 실패 → **Vite `base: './'`** 로 해결
- WebView/React 쪽 JavaScript 오류

### 조치 순서

1. **다시 빌드 후 동기화**  
   터미널에서:
   ```bash
   npm run build
   npx cap sync
   ```
   그다음 Android Studio에서 **Run** 다시 실행.

2. **Logcat으로 에러 확인**  
   - Android Studio 하단 **Logcat** 탭 열기  
   - 필터에 `chromium` 또는 `Capacitor` 또는 `Console` 입력  
   - 앱 실행 후 빨간색 에러 메시지 확인 → 메시지 내용으로 원인 파악

3. **Chrome으로 WebView 디버깅**  
   - PC에서 Chrome 실행 → 주소창에 `chrome://inspect` 입력  
   - 에뮬레이터/연결된 기기에서 앱 실행  
   - 목록에 해당 WebView가 보이면 **inspect** 클릭  
   - 열리는 DevTools의 **Console** 탭에서 JavaScript 에러 확인

4. **dist 폴더 확인**  
   - 프로젝트 루트의 `dist` 폴더에 `index.html`, `assets` 폴더가 있는지 확인  
   - 없으면 `npm run build`가 실패한 것이므로, 터미널 빌드 로그 확인

5. **Android 쪽 웹 에셋 경로 확인**  
   - `android/app/src/main/assets/public/` 안에 `index.html`, `assets` 등이 들어와 있는지 확인  
   - 비어 있거나 오래된 파일만 있으면 `npx cap sync`를 다시 실행

위 순서대로 해도 해결되지 않으면, Logcat/Chrome Console에 나온 **에러 메시지**를 기준으로 추가로 조치하면 됩니다.

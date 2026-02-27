## AWS S3 이미지 정적 호스팅 가이드 (기획자용)

이 문서는 **프로그래머가 아닌 기획자**가, 앱에서 사용하는 이미지를 **AWS S3에 올려서(정적 파일로)** 링크로 사용하는 방법을 정리한 것입니다.

구성:
- 1. AWS 계정 생성 및 S3 버킷 만들기
- 2. S3에 이미지 업로드 & 정적 호스팅(공개 설정)
- 3. 코드에서 S3 이미지 경로를 쓰는 방법
- 4. Cursor에서 코드 변경 작업 방법
- 5. 추가로 알아두면 좋은 것들 (이유 포함)

---

### 1. AWS 계정 생성 및 S3 버킷 만들기 (Free Tier)

1. **AWS 계정 만들기**
   - 브라우저에서 `https://aws.amazon.com/ko/` 접속
   - 오른쪽 위 **“콘솔에 로그인” → “새 AWS 계정 생성”**
   - 이메일, 비밀번호, 카드 정보 입력 (Free Tier라도 카드 필요)
   - 계정 유형은 **개인** 선택
   - 가입 완료 후, **AWS Management Console** 에 로그인

2. **S3 콘솔 들어가기**
   - 상단 검색창에 `S3` 입력 → **S3** 서비스 클릭

3. **버킷(Bucket) 생성**
   - 오른쪽 위 **“버킷 만들기(Create bucket)”** 클릭
   - **버킷 이름**: 전 세계에서 유일해야 함  
     예: `dont-forget-images-2026` 처럼 영문/숫자/하이픈 조합
   - **AWS 리전**: 서울이면 `ap-northeast-2` 선택 (가까운 리전)
   - **퍼블릭 액세스 차단 설정**
     - 기본으로 “모든 퍼블릭 액세스 차단”이 켜져 있음
     - **이미지 링크로 공개 사용**하려면:
       - “모든 퍼블릭 액세스 차단” 체크를 **해제**
       - 경고 문구가 뜨면, 내용 확인 후 진행 (이미지용이므로 괜찮음)
   - 나머지는 기본값 두고, 맨 아래 **버킷 만들기(Create bucket)** 클릭

> 이 버킷 하나가 **이미지 전용 저장소** 역할을 합니다.

---

### 2. S3에 이미지 업로드 & 정적 호스팅(공개 설정)

1. **버킷 열기**
   - S3 리스트에서 방금 만든 버킷 이름 클릭

2. **폴더 구조 (선택)**
   - 정리하고 싶다면 `app-images/` 같은 폴더를 하나 만들고 안에 이미지를 넣어도 됩니다.
   - 필수는 아니니, 귀찮다면 루트에 바로 이미지들을 올려도 됩니다.

3. **이미지 업로드**
   - **“업로드(Upload)” 버튼 클릭**
   - “파일 추가(Add files)” 버튼 → 로컬 PC에서 사용할 이미지 선택
   - **Upload** 버튼 클릭 → 완료될 때까지 기다림

4. **퍼블릭 읽기 권한 설정 (중요)**
   - 업로드한 파일 목록에서 특정 이미지 파일 이름 클릭
   - 상단의 **“권한(Permissions)” 탭** 선택
   - “Object Ownership” 는 기본값 유지
   - “퍼블릭 액세스” 항목에서, 필요 시 **“이 객체는 퍼블릭으로 액세스 가능”** 상태가 되도록 접근 권한을 열어야 함
   - 가장 간단한 방법:
     - 버킷 전체를 정적 파일용으로 쓸 거라면, **버킷 정책(Bucket Policy)** 로 일괄 공개

5. **버킷 정책으로 전체 공개 (이미지 전용 버킷일 때 추천)**

   - S3에서 버킷 선택 → 상단 **“권한(Permissions)” 탭** → **“버킷 정책(Bucket policy)”** 편집
   - 아래 예시에서 `YOUR_BUCKET_NAME` 을 실제 버킷 이름으로 바꿔서 붙여넣기:

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "AllowPublicRead",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
       }
     ]
   }
   ```

   - 저장하면, 이 버킷 안의 **모든 파일을 URL로 읽을 수 있게** 됩니다.

6. **이미지 URL 확인**
   - 다시 **버킷 → 객체 목록**에서 원하는 이미지 파일 클릭
   - **“객체 URL(Object URL)”** 또는 **“퍼블릭 URL”** 항목을 복사  
     예:  
     `https://YOUR_BUCKET_NAME.s3.ap-northeast-2.amazonaws.com/app-images/intro-bg.png`

이 URL을 코드에서 `src="..."` 로 사용하면 됩니다.

---

### 3. 코드에서 S3 이미지 경로를 쓰는 방법

현재 프로젝트는 여러 곳에서 이미지 경로를 사용하고 있습니다.
기본 아이디어는 **“코드 안의 하드코딩된 URL/경로를 S3 URL로 바꾼다”** 입니다.

#### 3-1. 간단한 방법: 각 파일에서 직접 상수 변경

예: `Intro.tsx` 에서

```ts
const bgImage =
  "https://via.placeholder.com/400x800.png?text=Intro+Background";
```

위 값을, S3 에 올린 이미지 URL로 교체:

```ts
const bgImage =
  "https://YOUR_BUCKET_NAME.s3.ap-northeast-2.amazonaws.com/app-images/intro-bg.png";
```

다른 컴포넌트들도 같은 방식:
- `HomeScreen.tsx` 의 `imgGeminiGeneratedImage...`
- `RecordScreen.tsx` 의 `image_***` 상수들
- `AnimatedOnboardingScreen.tsx` 의 `imgCharacterA`, `imgCharacterB`
- `MyScreen.tsx` 의 프로필 이미지 상수
- `CharacterVideo.tsx` 의 fallback 이미지 상수 등

#### 3-2. 조금 더 정리된 방법: 공통 설정 파일 사용

1. `src/config/imageUrls.ts` 파일 생성 (파일이 없으면 새로 만듦)

2. 안에 이렇게 작성:

```ts
export const IMAGE_URLS = {
  introBackground:
    "https://YOUR_BUCKET_NAME.s3.ap-northeast-2.amazonaws.com/app-images/intro-bg.png",
  homeCoach:
    "https://YOUR_BUCKET_NAME.s3.ap-northeast-2.amazonaws.com/app-images/home-coach.png",
  recordGolf:
    "https://YOUR_BUCKET_NAME.s3.ap-northeast-2.amazonaws.com/app-images/record-golf.png",
  recordPilates:
    "https://YOUR_BUCKET_NAME.s3.ap-northeast-2.amazonaws.com/app-images/record-pilates.png",
  recordRunning:
    "https://YOUR_BUCKET_NAME.s3.ap-northeast-2.amazonaws.com/app-images/record-running.png",
  myProfile:
    "https://YOUR_BUCKET_NAME.s3.ap-northeast-2.amazonaws.com/app-images/my-profile.png",
  // 필요한 만큼 계속 추가
} as const;
```

3. 각 컴포넌트에서:

```ts
import { IMAGE_URLS } from "@/config/imageUrls";

// 예시
const bgImage = IMAGE_URLS.introBackground;
```

이렇게 하면 나중에 이미지 위치를 바꾸더라도 **한 파일(imageUrls.ts)만 수정하면 전체가 바뀜**.

---

### 4. Cursor에서 2번 작업(코드 변경)을 하기 위한 프로젝트 설정

1. **Workspace 폴더 열기**
   - Cursor에서 **File → Open Folder** 선택
   - `D:\까먹지마\App Prototype Creation\TFapptest_clean` 폴더 선택
   - 이 폴더가 **프로젝트 루트**로 열려 있어야, 경로가 정확하게 인식됩니다.

2. **검색으로 이미지 상수 위치 찾기**
   - 좌측 탐색기에서 상단 돋보기(검색) 아이콘 클릭
   - 아래 키워드로 검색:
     - `"placeholder.com"` (지금까지 임시로 넣어둔 URL)
     - `"figma:asset"` (혹시 남아 있다면)
   - 검색 결과에서 각 파일을 클릭 → 상단의 상수 부분을 S3 URL로 교체

3. **새 설정 파일 추가 (선택)**  
   - `src/config/imageUrls.ts` 파일을 만들고 싶으면,  
     왼쪽 파일 트리에서 `src` 폴더 우클릭 → **New File** → `config/imageUrls.ts` 입력
   - 이 파일 안에 **3-2에서 적은 내용**을 붙여넣기

4. **GitHub Desktop과 연동**
   - 변경 후 **Ctrl+S** 저장
   - GitHub Desktop 열어서:
     - 변경된 파일 확인 → Summary 에 메모 → **Commit to main**
     - 상단 **Push origin** 클릭 → Vercel 자동 재배포

---

### 5. 추가로 알아두면 좋은 것들 (비개발자용)

1. **비용(Free Tier & S3 요금)**
   - S3는 **저장 용량 + 트래픽(다운로드)** 기준으로 과금
   - Free Tier(1년) 동안은:
     - 5GB 저장, 매월 2만 번 GET 요청, 15GB 정도 전송까지 무료(정책은 변동 가능)
   - 이미지 몇십~몇백 개, 테스트 수준 트래픽은 대부분 무료 안에서 해결됨
   - 이유: 실제 릴리즈 전에 과금 걱정 없이 실험 가능

2. **보안**
   - 이 버킷에는 **이미지 같은 공개용 자료만** 넣어야 함
   - 절대 넣으면 안 되는 것:
     - 비밀번호, 엑셀 사용자 정보, 내부 문서, 인증 키(.pem, .env 등)
   - 이유: 버킷 정책으로 **전 세계 누구나 URL만 알면 접근** 가능한 상태이기 때문

3. **캐시(브라우저에 남는 이미지)**
   - S3의 이미지는 브라우저에 캐시될 수 있어서,  
     같은 URL의 이미지를 바꾸면 브라우저가 예전 이미지를 보여줄 수 있음
   - 이런 경우:
     - 파일명을 바꾸거나(`intro-bg-v2.png`)
     - URL 뒤에 쿼리스트링 (`...?v=2`) 을 붙여서 새 버전임을 알려줌
   - 이유: 실제로 이미지를 교체했는데 사용자가 “왜 안 바뀌지?” 하고 헷갈리지 않도록

4. **환경 분리(개발용 / 운영용) – 나중에 고려**
   - 나중에 서비스가 커지면:
     - 개발용 버킷 (예: `dont-forget-dev-images`)
     - 운영용 버킷 (예: `dont-forget-prod-images`)
   - 그리고 코드에서 `.env` 파일로 어느 버킷을 쓸지 바꾸는 구조를 쓰게 됨
   - 지금은 단일 버킷으로도 충분하지만, **장기적으로 이런 구조가 생긴다** 정도만 이해하면 됨

5. **CloudFront(선택 사항, 나중 단계)**
   - S3 앞에 **CloudFront(콘텐츠 전송 네트워크)** 를 두면:
     - 전 세계 어디서든 더 빠르게 이미지 로딩
     - 도메인을 예쁘게(`https://img.dontforget.app/...`) 쓸 수 있음
   - 현재 단계에서는 **필수 아님**,  
     나중에 서비스가 안정되면 개발자에게 “S3 앞에 CloudFront 붙일까?” 정도만 물어보면 됨

---

이 문서는 **“이미지를 S3에 올리고, 그 링크를 코드에서 쓰는 흐름 전체”** 를 이해하기 위한 참고용입니다.  
실제 코드에서 어떤 상수들을 어디에 연결해야 할지는,  
`src/app/components/*`, `src/imports/*` 파일들에서 이미지 상수들을 하나씩 보면서 S3 URL로 바꾸면 됩니다.


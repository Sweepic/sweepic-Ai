# SweepicAI

**Sweepic BE - AI**

---

## 주요 기능

- **이미지 OCR**: 사진에서 텍스트를 감지하고 추출하여 텍스트 파일로 변환.
- **이미지 분류**: 다양한 카테고리(예: 스크린샷, 인물, 음식등)로 사진을 분류.
- **API 제공**: Android 클라이언트와 통신을 위한 RESTful API 제공.
- **자동화된 처리**: 클라이언트 요청 시 이미지 데이터 처리와 결과 반환.

---

## 기술 스택

- **언어**: JavaScript
- **AI 모델**: Google Cloud Vision AI (OCR 및 이미지 분류)
- **클라우드 플랫폼**: Google Cloud Platform (GCP)

---

## 주요 라이브러리

- **@google-cloud/vision** (`^4.3.2`): Google Cloud Vision API와 상호작용하기 위한 공식 클라이언트 라이브러리. 이미지 OCR 및 분류 작업에 사용.

---

## Git Branch 전략

### Issue 생성

- 이슈 템플릿 지정
- 이슈 템플릿 작성, 할당자, 라벨 등록
- 이슈 템플릿에서 개발 예상 계획 수립
- 이슈 이름: [SWEP-?] 해당 기능 설명

- 브랜치 생성 : 브랜치 이름은 **업무종류/이슈번호**
- ex. feature/SWEP-? : feature, fix ,docs 등등 상황에 맞게 지정

### Branch Rule

1. **main** 브랜치에서 시작.
2. 기능 개발이 필요한 경우 **main 브랜치에서 feature 브랜치 생성** 후 기능 구현

- (참고) 원격 저장소의 branch 가져오기: `git checkout -t origin/develop`
  - 방법: `git checkout -b <생성할 브랜치 이름> <분기할 브랜치 이름>`
    - 예) `git checkout -b feature/login develop`
  - branch 이름 규칙
    - `해당 작업 유형/이슈번호` ex) feature/SWEP-12
    - feature : 새로운 기능 개발
    - fix : 버그 수정
    - refactor : 리팩토링
    - docs : 문서수정
    - chore : 빌드 업무 수정, 패키지 매니저 수정 등
    - test : 테스트 코드

4. 완료된 feature/SWEP-? 브랜치는 PR을 거쳐 **develop 브랜치에 merge**

### Commit Rule

- **커밋 메시지만 봐도 내용을 알 수 있게 적어야 한다.**
- 작업은 다음의 규칙에 따라 구분한다.
- `[이슈 번호] 작업 내용` ex) [SWEP-12] 아이디 포함 각 항목 정규식 구현
- 한 기능에 여러 개의 이슈 번호를 포함한 커밋 메세지 가능
  - ex. PR 제목: [SWEP-16] 소셜로그인 구현
    - [SWEP-16] 사용자 추가 정보 입력 API
    - [SWEP-16] 네이버 소셜로그인 구현
    - [SWEP-16] 카카오 소셜로그인 구현

### PR rule

- PR 제목: **[SWEP-?] 작업 내용**

- **1. close 키워드** : PR 생성 시 내용에 관련 *github 이슈 번호*를 꼭 입력. 사용 시 merge 시 자동으로 issue가 닫힘. (close #?)
- **2. Reviewers 설정**: 서버 리드
- **3. Assignees 설정**: 본인
- **4. Labels 설정**
- **5. 코드 리뷰 진행**
- **6. merge 시 Squash and Merge로 진행**

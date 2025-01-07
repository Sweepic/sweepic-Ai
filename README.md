# Sweepic-AI

## 기술 스택

- **언어**:
- **런타임**:
- **빌드 도구**:
- **환경 변수 관리**:
- **기타**:

---

## 프로세스

- **0. Sweepic-Ai 레포지토리 Fork**
- **1. Jira 확인 및 변경**: 담당 이슈 확인 후, 이슈 번호 및 세부 내용 파악 후 스프린트 배정 및 워크플로 *진행 중*으로 변경
- **2. Github 이슈 생성**: 이슈 생성 후 브랜치 생성
- **3. 해당 브랜치에 PR 및 Merge(개발 중)**: 개인 레포지토리에서 개발 후, 해당 브랜치에 Merge (PR rules & Template 미적용)
- **4. main 브랜치 PR 생성 및 리뷰(개발 후)**: 해당 기능 개발 완료 후, main 브랜치에 PR 생성 (PR rules & Template 적용)
- **5. develop Merge(리뷰 해결 후)**: 팀원의 리뷰들 해결 후, approve 후에 Merge
- **주의할 점: 개발 중 main 브랜치와 다를 수 있기에 개발 시작 전, git pull 을 항상 할 것**

---

## Git Branch 전략

### Issue 생성

![issue1](https://github.com/user-attachments/assets/54d9408c-2198-4490-a8b6-9bbe96da4a92)

- 이슈 템플릿 지정

![issue2](https://github.com/user-attachments/assets/283a0bb0-acad-4efb-ab88-c2da1cdba39a)

- 이슈 템플릿 작성, 할당자, 라벨 등록
  - 이슈 템플릿에서 개발 예상 계획을 수립
  - 이슈 이름: [SWEP-?] 해당 기능 설명

![issue3](https://github.com/user-attachments/assets/57b67393-fdf5-44ee-8d26-32a54a225d0d)

- 브랜치 생성
  - 저 동그라미(Create a branch)를 통해 브랜치를 만들어주세요!
  - 브랜치 이름: **업무종류/이슈번호**
  - ex. feature/SWEP-? : eature, fix, docs 등등 상황에 맞게 지정
  - Checkout locally 선택

![issue4](https://github.com/user-attachments/assets/63141e51-0875-4edc-869e-1847c5bd5b13)

- 브랜치 작업 명령어 복사 후, 터미널에서 작업
- **주의할 점**
  - **새 브랜치가 뻗어나갈 브랜치에서 브랜치를 만들어줘야 한다는 것**
  - 항상 main 브랜치와 기능 개발 브랜치(feature/SWEP-12)와 같아야 함.

![issue5](https://github.com/user-attachments/assets/3e4157a5-9035-4809-8121-8657df2cb012)

### Branch Rule

- 브랜치 설명
  - feature/SWEP-?: 각자 기능 개발할 때 사용, 로컬에서 각자 테스트
    - Squash and Merge 로 Merge 할 것
  - main: 실제 AI 개발 완료

1. **main** 브랜치에서 시작
2. 기능 개발이 필요한 경우 **main 브랜치에서 feature 브랜치 생성** 후 기능 구현
   - (참고) 원격 저장소의 branch 가져오기: `git checkout -t origin/develop`
   - 방법: `git checkout -b <생성할 브랜치 이름> <분기할 브랜치 이름>`
     - 예) `git checkout -b feature/login main`
   - branch 이름 규칙
     - `해당 작업 유형/이슈번호` ex) feature/SWEP-12
     - feature : 새로운 기능 개발
     - fix : 버그 수정
     - refactor : 리팩토링
     - docs : 문서수정
     - chore : 빌드 업무 수정, 패키지 매니저 수정 등
     - test : 테스트 코드
3. 완료된 feature/SWEP-? 브랜치는 PR을 거쳐 **main 브랜치에 merge**

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

- **PR 템플릿**
  <https://github.com/Sweepic/sweepic-Ai/blob/main/.github/PULL_REQUEST_TEMPLATE.md>

![PR1](https://github.com/user-attachments/assets/816ea931-fd49-40f5-98ed-4b4cd62431d9)

- _feature/SWEP-? 브랜치 -> develop 브랜치_ 에서 적용
- **0. PR 제목**: **[SWEP-?] 작업 내용**
- **1. close 키워드** : PR 생성 시 내용에 관련 *github 이슈 번호*를 꼭 입력. 사용 시 merge 시 자동으로 issue가 닫힘. (close #?)
- **2. Reviewers 설정**: Server Lead Develop
- **3. Assignees 설정**: 본인
- **4. Labels 설정**
- **5. 코드 리뷰 진행**
- **6. merge 시 Squash and Merge로 진행**
  ![PR2](https://github.com/user-attachments/assets/327f5e01-25e4-4157-a03a-c577c4e24c11)

- **feature → develop Merge 시 Squash and Merge**가 적합
  - feature 브랜치에서 기능을 개발하기 위한 지저분한 커밋 내역을 하나의 커밋으로 묶어 develop 브랜치에 병합하면서, develop에는 기능 단위로 커밋이 추가되도록 정리할 수 있다. 또한 feature 브랜치는 develop 브랜치에 병합 후 제거되므로, Merge Commit을 남길 필요가 없다.

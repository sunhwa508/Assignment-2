# 프리온보딩 Assignment 2 - [Mr.Camel]

## 1. 과제 구현 목록 (팀원별)

**선주**

- 00시 기준으로 최근 조회이력과 관심 없는 상품목록 초기화
- 상품상세 조회 시 이력데이터 누적하고, 동일 상품 조회 시 최신 데이터로 갱신

**선화**

- 00시 기준으로 최근 조회이력과 관심 없는 상품목록 초기화
- '랜덤상품 조회' 클릭 시 현 상품을 제외하고 랜덤 로드
- '관심 없음' 클릭 시 랜덤 로드하며, 현 상품은 앞으로 상품상세에서 노출되지 않음
- Storage Manager utils 함수 구성

**준영**

- 필터: '브랜드'(전체 및 존재하는 브랜드 목록으로 구성), 다중선택 가능
- 필터: '관심 없는 상품 숨기기' 체크박스
- 정렬: 최근 조회 순, 낮은 가격 순 (선택 팝업)
- 상품 클릭 시 '상품상세 페이지'로 이동, 관심 없는 상품 클릭 시 경고메세지 노출되며 이동하지 않음

## 2. 설치 및 시작하는 법

이 프로젝트는 Create React App으로 생성되었습니다.

- This project was bootstrapped with Create React App.

### 실행 가능한 스크립트

#### `npm i`

프로젝트에 필요한 npm packages, node_modules 다운로드

#### `npm run start`

개발모드로 웹 환경을 시작하는 명령어로
접속주소는 http://localhost:3000 입니다.

#### `npm run build`

빌드하는 명령어로 현재 설정되어있는 환경 변수에 따라 빌드 됩니다.
(cra 기본설정)

## 3. 프로젝트 구조

### src 디렉토리 구성

- components 컴포넌트 구성요소
- constants 상수를 모아놓은 폴더
- layout 공통적으로 사용되는 Common layout
- pages
- style global style, normalize 설정
- utils 공통으로 사용되는 로직들을 모아 놓은 폴더
  (storage를 쉽게 사용할 수 있는 utils manager)

### 4.배포

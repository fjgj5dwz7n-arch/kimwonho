# Vercel Deployment Guide

이 문서는 문학 포트폴리오 사이트를 Vercel에 배포하고 개인 도메인을 연결하기 위한 체크리스트입니다.

## 1. Git 저장소 준비

프로젝트 루트에서 Git 저장소를 만들고 원격 저장소에 업로드합니다.

```bash
git init
git add .
git commit -m "Create Korean literary portfolio"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```

## 2. Vercel 프로젝트 생성

1. Vercel 대시보드에서 `Add New...`를 선택합니다.
2. `Project`를 선택합니다.
3. 위에서 업로드한 Git 저장소를 가져옵니다.
4. Framework Preset이 `Astro`로 감지되는지 확인합니다.
5. Build Command는 `npm run build`를 사용합니다.
6. Output Directory는 `dist`를 사용합니다.
7. Deploy를 실행합니다.

이 프로젝트에는 `vercel.json`이 포함되어 있어 Vercel이 아래 설정을 기준으로 빌드합니다.

```json
{
  "framework": "astro",
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "outputDirectory": "dist"
}
```

## 3. 배포 전 확인

로컬에서 가능한 경우 아래 명령을 먼저 실행합니다.

```bash
npm install
npm run build
```

현재 프로젝트의 콘텐츠 수정 위치는 다음과 같습니다.

- 홈·소개·연락 문구: `src/data/content.json`
- 메뉴와 기본 사이트 정보: `src/data/site.ts`
- 이력 목록: `src/data/cv.json`
- 연구 프로젝트: `src/data/research.json`

## 4. 도메인 연결

Vercel 프로젝트가 생성된 뒤 다음 순서로 도메인을 연결합니다.

1. Vercel 프로젝트의 `Settings`로 이동합니다.
2. `Domains` 메뉴를 엽니다.
3. 연결할 도메인을 입력합니다. 예: `yourname.kr` 또는 `literature.yourname.com`
4. Vercel이 안내하는 DNS 레코드를 도메인 관리 업체에 등록합니다.
5. 루트 도메인은 보통 `A` 레코드를, 서브도메인은 보통 `CNAME` 레코드를 사용합니다.
6. Vercel의 도메인 상태가 `Valid Configuration`으로 바뀌는지 확인합니다.

DNS 반영은 보통 몇 분 안에 완료되지만, 도메인 업체에 따라 더 오래 걸릴 수 있습니다.

## 5. 배포 후 점검

배포 URL과 연결 도메인에서 아래 항목을 확인합니다.

- 홈, 소개, 연구, 이력, 연락 페이지가 모두 열리는지
- 모바일 화면에서 메뉴와 본문이 겹치지 않는지
- `src/data/site.ts`의 이름과 이메일이 실제 정보로 바뀌었는지
- 이력 항목의 연도, 발표처, 상태가 최신인지
- 연락 링크가 올바른 메일 앱으로 연결되는지

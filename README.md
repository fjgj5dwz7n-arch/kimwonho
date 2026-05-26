# Korean Literary Portfolio

Astro로 만든 한국어 문학 포트폴리오입니다. 시, 현대시 연구, 문학 활동의 기록을 정리하는 정적 사이트이며 Vercel 배포를 기준으로 구성했습니다.

## 공개 주소

https://kimwonho.vercel.app

## 사이트에서 직접 편집

배포 후 `https://kimwonho.vercel.app/admin/`으로 들어가면 편집실을 사용할 수 있습니다.
GitHub Personal Access Token을 입력하면 홈 문구, 소개, 이력, 연구, 작품·기록,
프로필 사진과 대문 사진 경로를 수정하고 GitHub에 커밋할 수 있습니다.

토큰은 GitHub에서 Fine-grained personal access token으로 만들고, 이 저장소에 대해
Contents 읽기/쓰기 권한만 주면 됩니다. 저장 후 Vercel 재배포까지 보통 1-2분 걸립니다.

## 시작하기

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

Vercel에서는 `vercel.json`의 설정에 따라 `npm run build`를 실행하고 `dist`를 배포합니다.
배포와 도메인 연결 절차는 `docs/deployment.md`를 참고하세요.

## 콘텐츠 수정

- 홈·소개·연락 문구: `src/data/content.json`
- 이력 항목: `src/data/cv.json`
- 연구 항목: `src/data/research.json`
- 작품·기록 상세 항목: `src/data/records.json`
- 홈의 최근 기록 목록: `src/data/archive.ts`
- 기본 프로필과 연락처: `src/data/site.ts`

외부 기록을 다시 가져와야 할 때는 HTML을 내려받은 뒤 `scripts/import-tistory.mjs`,
이미지는 `scripts/download-tistory-images.mjs`를 사용합니다. 지금 저장소에는
34개 글과 144개 이미지가 로컬 정적 파일로 들어 있습니다.

## 사진 자산

프로필 사진과 대문 사진은 `public/assets` 또는 관리자 화면의 사진 업로드 기능으로 관리합니다.

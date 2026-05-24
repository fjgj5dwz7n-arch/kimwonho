# Korean Literary Portfolio

Astro로 만든 한국어 문학 포트폴리오입니다. 시, 현대시 연구, 문학비평 활동을 아카이브하는 정적 사이트이며 Vercel 배포를 기준으로 구성했습니다.

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

- 작품 항목: `src/data/works.ts`
- 이력 항목: `src/data/cv.ts`
- 연구 항목: `src/data/research.ts`
- 아카이브 항목: `src/data/archive.ts`
- 기본 프로필과 연락처: `src/data/site.ts`

## 시각 자산 재생성

홈 화면의 흑백 지면 이미지는 외부 이미지가 아니라 로컬 스크립트로 생성합니다.

```bash
npm run assets
```

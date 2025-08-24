# 📋 편집 가능한 포트폴리오 웹사이트

> 실시간으로 수정 가능한 개인 포트폴리오 웹사이트

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-brightgreen)](https://yourusername.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## ✨ 주요 특징

- 🎨 **실시간 편집**: 브라우저에서 직접 내용 수정 가능
- 💾 **자동 저장**: 로컬 스토리지에 변경사항 자동 저장
- 📱 **반응형 디자인**: 모든 기기에서 최적화된 사용자 경험
- 🎯 **원클릭 배포**: GitHub Pages로 간단한 배포
- ⚡ **빠른 성능**: 순수 HTML/CSS/JavaScript로 구현

## 🚀 빠른 시작

### 1. 저장소 클론/다운로드
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

### 2. 로컬에서 실행
- `index.html` 파일을 브라우저에서 열기
- 또는 Live Server 확장 프로그램 사용

### 3. GitHub Pages 배포
1. GitHub에서 새 저장소 생성 (`yourusername.github.io`)
2. 파일들을 저장소에 업로드
3. Settings → Pages → Source를 `Deploy from a branch`로 설정
4. Branch를 `main`으로 선택
5. `https://yourusername.github.io`로 접속

## 🛠️ 사용 방법

### 콘텐츠 편집
1. 웹페이지에서 원하는 텍스트 옆의 **편집** 버튼 클릭
2. 내용 수정 후 **저장** 버튼 클릭 또는 Enter 키 입력
3. 변경사항이 자동으로 로컬 스토리지에 저장

### 키보드 단축키
- `Ctrl + E`: 편집 버튼 표시/숨기기 토글

### 섹션별 편집 가능 항목
- **헤더**: 사이트 제목
- **메인**: 인사말, 소개 문구
- **소개**: 이름, 자기소개, 상세 설명
- **프로젝트**: 각 프로젝트 제목과 설명
- **연락처**: 이메일, GitHub 주소

## 📁 프로젝트 구조

```
portfolio-website/
├── index.html          # 메인 HTML 파일
├── README.md           # 프로젝트 설명서
└── assets/             # 이미지, 폰트 등 리소스 (선택사항)
```

## 🎨 커스터마이징

### CSS 변수로 테마 색상 변경
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #333;
    --background-color: #f5f7fa;
}
```

### 새로운 섹션 추가
1. HTML에 섹션 추가
2. CSS 스타일링
3. 편집 기능을 원하면 `editable` 클래스와 `data-field` 속성 추가

## 🌟 기능 상세

### 실시간 편집 시스템
- **인라인 편집**: 페이지를 떠나지 않고 내용 수정
- **자동 저장**: localStorage를 사용한 데이터 영속성
- **타입 감지**: 텍스트 길이에 따른 적절한 입력 필드 제공

### 애니메이션 및 인터랙션
- **페이드 인**: 스크롤 시 요소 등장 효과
- **스무스 스크롤**: 부드러운 내비게이션
- **호버 효과**: 사용자 인터랙션 피드백

### 성능 최적화
- **순수 자바스크립트**: 외부 라이브러리 의존성 없음
- **CSS Grid & Flexbox**: 효율적인 레이아웃
- **Intersection Observer**: 성능 최적화된 스크롤 애니메이션

## 🔧 기술 스택

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Storage**: LocalStorage API
- **Deployment**: GitHub Pages
- **Design**: CSS Grid, Flexbox, CSS Animations

## 📱 브라우저 호환성

- ✅ Chrome (권장)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 💡 향후 개선 계획

- [ ] 다크모드 테마 추가
- [ ] 프로젝트 이미지 업로드 기능
- [ ] 소셜 미디어 링크 추가
- [ ] 다국어 지원
- [ ] 템플릿 시스템 구현
- [ ] 데이터 내보내기/가져오기 기능

## 📞 문의 및 지원

- **이슈**: [GitHub Issues](https://github.com/yourusername/portfolio-website/issues)
- **이메일**: your.email@example.com
- **데모**: [Live Demo](https://yourusername.github.io)

## 📸 스크린샷

### 데스크톱 버전
![Desktop View](screenshots/desktop.png)

### 모바일 버전
![Mobile View](screenshots/mobile.png)

### 편집 모드
![Edit Mode](screenshots/edit-mode.png)

---

⭐ **이 프로젝트가 도움이 되었다면 Star를 눌러주세요!**

Made with ❤️ by [Your Name]

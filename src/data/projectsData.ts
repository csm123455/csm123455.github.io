export const projects = [
  {
    id: 'map-ai-restaurant',
    title: 'Map.zip: 장거리 이동 맞춤형 AI 맛집 추천 서비스',
    description: 'MSA 구조와 AI 추천 시스템을 결합하여, 사용자의 장거리 이동 경로와 스케줄에 최적화된 맛집을 추천하는 플랫폼입니다.',
    imageUrl: '/images/mapzip.jpg',
    notionUrl: 'https://www.notion.so/likelion/1f444860a4f480339472e6f8743816aa?p=25344860a4f480e994e7ea34ff53a849&pm=s',
    githubLinks: [
      { name: 'App', url: 'https://github.com/CLD3rd-Team4/App' },
      { name: 'Infra', url: 'https://github.com/CLD3rd-Team4/Infra' },
    ],
    presentationPdfUrl: '/pdf/mapzip.pdf',
    tags: ['MSA', 'AI', 'React', 'Spring Boot', 'AWS'],
    details: '🛠 사용 기술\nReact, Java Spring Boot, PostgreSQL, Valkey, AWS (CloudFront, S3, EKS, Bedrock, DynamoDB 등), Terraform, GitHub Actions, ArgoCD, Istio, Prometheus, Grafana, gRPC\n\n✨ 주요 기능\n스케줄 기반 식사 지점 예측, 반경 기반 맛집 검색, AI 개인화 추천 (AWS Bedrock Claude-3-Sonnet), 영수증 OCR 기반 리뷰 시스템\n\n🧑‍💼 담당 역할\nMSA 아키텍처 설계 및 구축, CI/CD 파이프라인 구축, 모니터링 시스템 구축, AI 추천 시스템 연동\n\n📅 개발 기간\n(정보 없음)\n\n📚 배운 점\nMSA 환경에서의 복잡한 시스템 설계 및 구축 경험, 클라우드 네이티브 환경에서의 인프라 관리 및 자동화 역량 강화, AI 서비스 연동 및 데이터 처리 경험'
  },
  {
    id: 'jazz-lp-ecommerce',
    title: 'Jazz LP E-commerce Platform: 재즈 LP 중고거래 플랫폼',
    description: '재즈 LP 매니아를 위한 중고거래 플랫폼으로, 안정적인 서비스 운영을 위한 CI/CD 배포 자동화 파이프라인을 설계했습니다.',
    imageUrl: '/images/jazz.jpg',
    notionUrl: 'https://www.notion.so/likelion/1f444860a4f480339472e6f8743816aa?p=22a44860a4f4803bb60cf51c5424d90f&pm=c',
    githubLinks: [
      { name: 'Infra', url: 'https://github.com/CLD-3rd/team1-infra/tree/dev' },
      { name: 'Manifest', url: 'https://github.com/CLD-3rd/team1-manifest/tree/dev' },
    ],
    tags: ['E-commerce', 'CI/CD', 'Next.js', 'Terraform', 'ArgoCD'],
    details: '🛠 사용 기술\nNext.js, Terraform, ArgoCD, CI/CD\n\n✨ 주요 기능\n재즈 LP 중고거래 플랫폼 구축, 안정적인 서비스 운영을 위한 CI/CD 배포 자동화 파이프라인 설계\n\n🧑‍💼 담당 역할\nCI/CD 파이프라인 설계 및 구축, 인프라 자동화\n\n📅 개발 기간\n(정보 없음)\n\n📚 배운 점\nCI/CD 자동화 및 GitOps 기반 배포 환경 구축 경험, Terraform을 활용한 인프라 관리 역량'
  },
  {
    id: 'smokezone',
    title: 'Smokezone: 흡연구역 정보 공유 애플리케이션',
    description: 'Kotlin 안드로이드 앱과 Spring Boot 백엔드로 사용자 참여형 흡연구역 정보 공유 서비스를 개발했습니다.',
    imageUrl: '/images/smokezone.jpg',
    notionUrl: '#',
    githubLinks: [
      { name: 'GitHub', url: 'https://github.com/csm123455/Smokezone' },
    ],
    presentationPdfUrl: '/pdf/smokezone.pdf',
    tags: ['Android', 'Kotlin', 'Spring Boot', 'Native App'],
    details: '🛠 사용 기술\nKotlin, Android SDK, Google Maps SDK, Firebase (Realtime Database, Authentication, Cloud Messaging), MVVM\n\n✨ 주요 기능\n지도 기반 흡연구역 표시, 흡연구역 등록, 댓글 기능, 흡연 활동 기록, 알림 기능, 사용자 인증\n\n🧑‍💼 담당 역할\n안드로이드 앱 개발, 흡연구역 정보 공유 서비스 구현\n\n📅 개발 기간\n(정보 없음)\n\n📚 배운 점\n안드로이드 앱 개발 경험, Firebase를 활용한 백엔드 연동, MVVM 아키텍처 패턴 적용'
  },
  {
    id: 'study-room-management',
    title: 'Study Room Management: 스터디룸 예약 및 알림 서비스',
    description: '스터디룸 예약 및 관리를 위한 백엔드 시스템을 개발하고, FCM을 통해 실시간 예약 알림 기능을 구현했습니다.',
    imageUrl: '/images/studyroom.jpg',
    notionUrl: 'https://www.notion.so/likelion/1f444860a4f480339472e6f8743816aa?p=1f544860a4f48080a2fde7549105b848&pm=c&pvs=25#1f644860a4f4808882aacc41365565be',
    githubLinks: [
      { name: 'GitHub', url: 'https://github.com/CLD-3rd/infra-team4' },
    ],
    presentationPdfUrl: '/pdf/studyroom.pdf',
    tags: ['Backend', 'Java', 'FCM', 'Reservation'],
    details: '🛠 사용 기술\nJava, FCM (Firebase Cloud Messaging), Docker\n\n✨ 주요 기능\n스터디룸 예약 및 관리, 실시간 예약 알림 (FCM)\n\n🧑‍💼 담당 역할\n백엔드 시스템 개발, FCM 연동\n\n📅 개발 기간\n(정보 없음)\n\n📚 배운 점\n백엔드 시스템 설계 및 구현 경험, FCM을 활용한 알림 기능 구현, Docker를 활용한 배포 경험'
  },
  {
    id: 'personal-fullstack-blog',
    title: '개인 풀스택 블로그 프로젝트',
    description: '회원가입/로그인, 글 작성/수정/삭제, 댓글 기능을 포함한 개인 풀스택 블로그 프로젝트입니다.',
    imageUrl: '/images/placeholder.jpg', // Placeholder, user should replace this
    notionUrl: '#',
    githubLinks: [],
    presentationPdfUrl: '#',
    tags: ['React', 'Spring Boot', 'MySQL', 'AWS', 'Node.js'],
    details: '🛠 사용 기술\nReact, Spring Boot, MySQL, AWS(EB), Node.js\n\n✨ 주요 기능\n회원가입/로그인, 글 작성/수정/삭제, 댓글 기능\n\n🧑‍💼 담당 역할\n프론트엔드/백엔드 전체 구현. React 기반 UI, Spring Boot REST API 설계, AWS Elastic Beanstalk로 배포까지 (개인프로젝트)\n\n개발 기간\n2025.06.20 - 2025.07.18\n\n📚 배운 점\nReact와 Spring Boot 간의 RESTful 통신 구조를 직접 설계하며 클라이언트와 서버 간 데이터 흐름을 깊이 있게 이해할 수 있었습니다. JWT 인증 처리, 예외 핸들링, 요청-응답 구조를 명확히 정리하면서 백엔드의 견고한 아키텍처 설계의 중요성을 체득했습니다. 또한 AWS 환경에서의 배포 및 오류 대응 과정을 통해 운영 환경에서도 안정적인 서비스를 제공하는 능력을 키웠습니다.'
  },
  {
    id: 'tripmate-web',
    title: 'tripmate-web',
    description: '일정 공유 및 관리가 가능한 여행 메이트 플랫폼 웹 버전입니다.',
    imageUrl: '/images/tripmate-web.jpg', // Placeholder, user should provide this image file
    notionUrl: '#',
    githubLinks: [],
    presentationPdfUrl: '#',
    tags: ['React', 'Node.js', 'MySQL', 'Spring Boot'],
    details: '🛠 사용 기술\nReact\nNode.js\nMySQL\nSpring Boot\n\n✨ 주요 기능\n일정 등록 및 공유\n지도 기반 일정 보기\n자동 일정 추천 기능\n공유 일정에 대한 로그인 사용자들의 좋아요/댓글 기능\n장소 추천 기능\n\n🧑‍💼 담당 역할\n백엔드 메인 개발자. UI 설계, 일정 공유 기능 구현, 지도 기반 위치 기능 및 댓글 시스템 구현 담당.\n\n📅 개발 기간\n2025.06.30 ~ 2025.07.19\n\n📚 배운 점\n사용자 간 실시간 소통 및 협업 기능을 고려해 인터페이스를 구성하고, 외부 API(Kakao Maps API 등)를 적극 활용해 사용자 맞춤형 기능을 구현했습니다. 여러 사용자 시나리오에 따라 예외 처리를 유연하게 구성하면서 사용자 경험을 최우선으로 고려한 기능 구현 능력을 기를 수 있었습니다. 또한 Node.js 서버와 Spring Boot 백엔드 구조를 분리 구성하며 모듈화된 아키텍처 설계 경험도 쌓았습니다.'
  }
];
import React from 'react';
import profileImage from '../assets/images/facephoto.png';
import { FaBirthdayCake, FaDownload } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-left-card">
            <div className="profile-image">
              <img src={profileImage} alt="조성민 프로필 사진" />
            </div>
            <div className="profile-intro-text">
              <h3>안녕하세요!</h3>
              <p>도전과 성장을 좋아하는<br/>조성민입니다.</p>
              <p className="intro-summary">새로운 기술 학습, 협력, 소통을 중요하게 생각하며 함께 성장하는 엔지니어 입니다.</p>
              <div className="intro-item">
                <FaBirthdayCake />
                <span>1998.09.17</span>
              </div>
              <div className="intro-item download-resume">
                <a href="/pdf/portfolio.docx" target="_blank" rel="noopener noreferrer">
                  <FaDownload />
                  <span>자기소개서 다운로드</span>
                </a>
              </div>
            </div>
          </div>
          <div className="about-right-details">
            <h4>🎓 학력 (Education)</h4>
            <ul>
              <li>경동대학교 소프트웨어학과 (졸업)
                <ul>
                  <li><em>2021.03 ~ 2025.02</em></li>
                </ul>
              </li>
            </ul>

            <hr />

            <h4>💻 기술 스택 (Technical Skills)</h4>
            <ul>
              <li><strong>Backend:</strong> Spring Boot, Spring Cloud, Java, Kotlin, JPA, gRPC</li>
              <li><strong>Frontend & Mobile:</strong> React, Next.js, Android (Kotlin), TypeScript</li>
              <li><strong>Database & MQ:</strong> MySQL, Amazon Aurora, DynamoDB, Redis, Kafka</li>
              <li><strong>DevOps & Cloud:</strong> AWS (EKS, S3, CloudFront), Docker, Kubernetes, Terraform</li>
              <li><strong>CI/CD & Monitoring:</strong> GitHub Actions, ArgoCD, Istio, Prometheus, Grafana</li>
              <li><strong>Collaboration:</strong> Git, GitHub, Jira, Slack, Notion</li>
            </ul>

            <hr />

            <h4>🛠 핵심 역량 (Core Competencies)</h4>
            <ul>
              <li><strong>클라우드 인프라 설계 및 자동화:</strong> Terraform(IaC)을 활용해 AWS EKS 기반의 인프라를 코드로 설계하고, 재사용성과 확장성을 갖춘 클러스터 환경을 구축한 경험이 있습니다.</li>
              <li><strong>GitOps 기반 CI/CD 파이프라인 구축:</strong> GitHub Actions와 ArgoCD를 연동하여 개발부터 배포까지의 과정을 자동화하고, 안정적인 애플리케이션 릴리즈 환경을 구축 및 운영했습니다.</li>
              <li><strong>시스템 관측 가능성(Observability) 확보:</strong> Istio, Prometheus, Grafana를 도입하여 MSA 환경의 장애를 사전에 감지하고 신속하게 대응할 수 있는 모니터링 시스템을 구축했습니다.</li>
              <li><strong>애플리케이션 친화적 인프라 운영:</strong> Full-Stack 개발 경험을 바탕으로 애플리케이션의 특성을 이해하고, 서비스에 최적화된 인프라 아키텍처를 제안하고 구현할 수 있습니다.</li>
            </ul>

            <hr />

            <h4>📚 교육 및 활동 (Education & Activities)</h4>
            <ul>
              <li><strong>멋쟁이사자처럼 클라우드 스쿨: AWS 기반 DevOps 엔지니어 과정 (수료)</strong>
                <ul>
                  <li><em>2025.03 ~ 2025.08</em></li>
                  <li>DevOps 및 클라우드 엔지니어링 심화 학습, 풀스택 개발 및 인프라 배포 프로젝트 수행.</li>
                </ul>
              </li>
            </ul>

            <hr />

            <h4>🌱 나의 다짐 (My Aspirations)</h4>
            <ul>
                <li>비즈니스의 성장을 뒷받침하는 견고하고 효율적인 클라우드 인프라를 구축하는 <strong>엔지니어</strong>를 지향합니다.</li>
                <li>반복적인 작업을 자동화하고, 데이터를 기반으로 시스템을 선제적으로 개선하여 안정적인 서비스 운영에 기여하고 싶습니다.</li>
                <li>개발팀과의 긴밀한 협력을 통해 최적의 아키텍처를 함께 고민하고 만들어가는 과정에서 가장 큰 보람을 느낍니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
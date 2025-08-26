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
              <div className="intro-item">
                <FaBirthdayCake />
                <span>1998.09.17</span>
              </div>
              <p className="intro-summary">새로운 기술 학습, 협력, 소통을 중요하게 생각하며 함께 성장하는 개발자를 지향합니다.</p>
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
              <li><strong>Languages:</strong> Java, Kotlin, TypeScript</li>
              <li><strong>Frontend & Mobile:</strong> React, Next.js</li>
              <li><strong>Backend:</strong> Spring Boot, Spring Cloud, gRPC, JPA</li>
              <li><strong>Database & Message Queue:</strong> MySQL, Amazon Aurora, Amazon DynamoDB, Redis, Apache Kafka</li>
              <li><strong>DevOps & Cloud Native:</strong>
                <ul>
                  <li><strong>Cloud:</strong> Amazon AWS</li>
                  <li><strong>Container & Orchestration:</strong> Docker, Kubernetes</li>
                  <li><strong>IaC (Infrastructure as Code):</strong> Terraform</li>
                  <li><strong>CI/CD:</strong> GitHub Actions, ArgoCD</li>
                  <li><strong>Service Mesh & Monitoring:</strong> Istio, Prometheus, Grafana</li>
                </ul>
              </li>
              <li><strong>Collaboration & Tools:</strong> Git, GitHub, Jira, Slack, Notion, Figma, IntelliJ IDEA, Android Studio, VSCode, Postman</li>
            </ul>

            <hr />

            <h4>🛠 핵심 역량 (Core Competencies)</h4>
            <ul>
              <li><strong>End-to-End 서비스 개발:</strong> React/Next.js 기반의 프론트엔드부터 Spring Boot 백엔드, AWS 클라우드 배포까지 서비스 개발 <strong>전체 사이클을 독립적으로 수행</strong>할 수 있습니다.</li>
              <li><strong>클라우드 네이티브 인프라 구축 및 운영:</strong> Terraform(IaC)으로 인프라를 코드화하고, AWS EKS 환경에서 <strong>GitOps(ArgoCD) 기반의 CI/CD 파이프라인을 구축 및 운영</strong>한 경험이 있습니다.</li>
              <li><strong>시스템 안정성 및 관측 가능성(Observability) 확보:</strong> Istio, Prometheus, Grafana를 활용해 <strong>MSA 환경의 모니터링 시스템을 구축</strong>하고, 데이터베이스(RDB/NoSQL) 및 캐시(Redis) 설계를 통해 <strong>시스템 성능을 최적화</strong>한 경험이 있습니다.</li>
            </ul>

            <hr />

            <h4>🚀 주요 프로젝트 경험 (Key Projects)</h4>
            <h5>1. MSA 환경을 위한 AWS EKS 기반 GitOps CI/CD 파이프라인 및 모니터링 시스템 구축</h5>
            <ul>
              <li><strong>목표:</strong> 컨테이너화된 마이크로서비스의 배포 자동화 및 운영 안정성 확보를 목표로, AWS EKS 환경에 GitOps 기반의 파이프라인과 관측 가능성 시스템을 설계 및 구축했습니다.</li>
              <li><strong>주요 역할 및 성과:</strong>
                <ul>
                  <li><strong>Terraform(IaC) 기반 인프라 프로비저닝:</strong> AWS EKS 클러스터, VPC 등 모든 인프라 자원을 코드로 관리하여 <strong>재사용성과 운영 일관성을 확보</strong>했습니다.</li>
                  <li><strong>GitHub Actions & ArgoCD 기반 CI/CD 자동화:</strong> 코드 푸시 시 Docker 이미지를 자동 빌드(CI)하고, Git Repository를 기준으로 클러스터 상태를 자동 동기화(CD)하는 <strong>GitOps 워크플로우를 구현하여 배포 안정성을 높이고 롤백 절차를 간소화</strong>했습니다.</li>
                  <li><strong>관측 가능성 시스템 구축:</strong> Istio Service Mesh를 도입하여 트래픽을 제어하고, Prometheus와 Grafana를 연동해 <strong>컨테이너 및 애플리케이션의 핵심 지표를 실시간으로 시각화하고 모니터링</strong> 환경을 구축했습니다.</li>
                </ul>
              </li>
              <li><strong>사용한 기술:</strong> <code>AWS EKS</code>, <code>Docker</code>, <code>Kubernetes</code>, <code>Terraform</code>, <code>GitHub Actions</code>, <code>ArgoCD</code>, <code>Istio</code>, <code>Prometheus</code>, <code>Grafana</code></li>
            </ul>

            <hr />

            <h5>2. 비용 효율적인 AWS Serverless 프론트엔드 아키텍처 설계 및 구축</h5>
            <ul>
              <li><strong>목표:</strong> React 기반 프론트엔드 애플리케이션을 위해 서버 관리 없이 운영 비용을 최소화하고, 글로벌 사용자에게 빠른 응답 속도를 제공하는 서버리스 아키텍처를 구축했습니다.</li>
              <li><strong>주요 역할 및 성과:</strong>
                <ul>
                  <li><strong>S3와 CloudFront(CDN)를 활용한 배포 최적화:</strong> S3 정적 호스팅과 CloudFront를 연동하여 <strong>스토리지 비용을 최소화</strong>하고, CDN 캐싱을 통해 <strong>전 세계 사용자에게 빠른 페이지 로딩 속도</strong>를 제공했습니다.</li>
                  <li><strong>안전한 서비스 환경 구축:</strong> Route53으로 도메인을 관리하고 ACM에서 발급한 SSL 인증서를 적용하여 모든 통신을 <strong>HTTPS로 암호화</strong>했습니다.</li>
                  <li><strong>성과:</strong> 서버리스 아키텍처 도입으로 인프라 <strong>관리 리소스를 획기적으로 줄였으며, 트래픽 기반의 유연한 비용 구조</strong>를 통해 운영 효율성을 극대화했습니다.</li>
                </ul>
              </li>
              <li><strong>사용한 기술:</strong> <code>React</code>, <code>Next.js</code>, <code>AWS S3</code>, <code>CloudFront</code>, <code>Route53</code>, <code>ACM</code></li>
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

            <h4>🌱 개발자로서의 다짐 (My Aspirations)</h4>
            <ul>
              <li>단순히 기능을 구현하는 것을 넘어, <strong>기술의 본질적인 '''왜'''를 탐구</strong>하고 비즈니스 가치에 기여하는 최적의 아키텍처를 고민합니다.</li>
              <li>문제 발생 시, 현상만 덮는 해결이 아닌 <strong>로그와 데이터를 기반으로 근본 원인을 분석</strong>하여 장기적으로 안정적인 시스템을 구축하는 것을 목표로 삼습니다.</li>
              <li>투명한 소통과 코드 리뷰를 통한 <strong>동반 성장을 추구</strong>하며, 제가 만든 서비스가 사용자에게 어떤 가치를 전달하는지를 가장 중요하게 생각하는 개발자가 되겠습니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

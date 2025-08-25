export interface Project {
  title: string;
  description: string;
}

export interface ContentData {
  hero: {
    title: string;
    subtitle: string;
  };
  about: {
    name: string;
    intro: string;
    description: string;
  };
  projects: Project[];
  contact: {
    email: string;
    github: string;
  };
}

export const initialContent: ContentData = {
  hero: {
    title: '안녕하세요, 도전과 성장을 좋아하는 조성민입니다.',
    subtitle: '웹 개발과 디자인에 열정을 가지고 있습니다',
  },
  about: {
    name: '자기소개',
    intro: '안녕하세요! 도전과 성장을 좋아하는 조성민입니다.',
    description: '새로운 기술을 배우고자 하며, 협력과 소통을 중요한 코드를 작성하기 위해 노력합니다.',
  },
  projects: [
    {
      title: '프로젝트 1',
      description: '간단한 설명이 들어갑니다.',
    },
    {
      title: '프로젝트 2',
      description: '간단한 설명이 들어갑니다.',
    },
    {
      title: '프로젝트 3',
      description: '간단한 설명이 들어갑니다.',
    },
  ],
  contact: {
    email: 'email@example.com',
    github: 'github.com/username',
  },
};

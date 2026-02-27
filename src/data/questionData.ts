// 운동별 질문 데이터 구조
export interface QuestionOption {
  label: string;
  value: string;
}

export interface Question {
  title: string;
  description: string;
  type: 'single' | 'multi' | 'scale' | 'input';
  options?: QuestionOption[];
  scaleRange?: { min: number; max: number; labels?: string[] };
  placeholder?: string;
}

export interface QuestionSet {
  category1: Question; // 감정 (만족도)
  category2: Question; // 결과 (수치/범위)
  category3: Question; // 좋지 않았던 점 (선택)
  category4: Question; // 기억나는 점 (선택)
}

// 골프 질문 세트
export const golfQuestionSets: QuestionSet[] = [
  // 세트 1
  {
    category1: {
      title: '전반적인 만족도',
      description: '오늘 라운드는 어떠셨나요?',
      type: 'scale',
      scaleRange: { min: 1, max: 5, labels: ['1점', '2점', '3점', '4점', '5점'] }
    },
    category2: {
      title: '스코어/볼스피드',
      description: '오늘의 결과를 선택해주세요.',
      type: 'single',
      options: [
        { label: '70대', value: '70대' },
        { label: '80대', value: '80대' },
        { label: '90대', value: '90대' },
        { label: '100대 이상', value: '100대 이상' }
      ]
    },
    category3: {
      title: '미스샷 원인',
      description: '가장 많았던 미스샷 원인을 선택해주세요.',
      type: 'multi',
      options: [
        { label: '에이밍 실수', value: '에이밍 실수' },
        { label: '헤드업', value: '헤드업' },
        { label: '힘 전달 실패', value: '힘 전달 실패' },
        { label: '기타', value: '기타' }
      ]
    },
    category4: {
      title: '오늘의 베스트',
      description: '가장 기억에 남는 순간을 선택해주세요.',
      type: 'multi',
      options: [
        { label: '롱퍼트 성공', value: '롱퍼트 성공' },
        { label: '완벽한 티샷', value: '완벽한 티샷' },
        { label: '위기 탈출', value: '위기 탈출' },
        { label: '기타', value: '기타' }
      ]
    }
  },
  // 세트 2
  {
    category1: {
      title: '멘탈 관리 상태',
      description: '오늘 멘탈 관리는 어떠셨나요?',
      type: 'single',
      options: [
        { label: '매우 좋음', value: '매우 좋음' },
        { label: '보통', value: '보통' },
        { label: '아쉬움', value: '아쉬움' }
      ]
    },
    category2: {
      title: '3퍼트 횟수',
      description: '오늘 3퍼트가 몇 번 있었나요?',
      type: 'single',
      options: [
        { label: '0회', value: '0회' },
        { label: '1-2회', value: '1-2회' },
        { label: '3회 이상', value: '3회 이상' }
      ]
    },
    category3: {
      title: '타수를 잃은 이유',
      description: '가장 큰 이유를 선택해주세요.',
      type: 'multi',
      options: [
        { label: '벙커 탈출 실패', value: '벙커 탈출 실패' },
        { label: '어프로치 실수', value: '어프로치 실수' },
        { label: '퍼팅 난조', value: '퍼팅 난조' },
        { label: '기타', value: '기타' }
      ]
    },
    category4: {
      title: '동반자 피드백',
      description: '동반자에게 들은 피드백이 있나요?',
      type: 'multi',
      options: [
        { label: '안정적인 루틴', value: '안정적인 루틴' },
        { label: '매너와 태도', value: '매너와 태도' },
        { label: '비거리 향상', value: '비거리 향상' },
        { label: '기타', value: '기타' }
      ]
    }
  },
  // 세트 3
  {
    category1: {
      title: '목표 달성 여부',
      description: '오늘 세운 목표를 달성하셨나요?',
      type: 'single',
      options: [
        { label: '달성', value: '달성' },
        { label: '부분 달성', value: '부분 달성' },
        { label: '미달', value: '미달' }
      ]
    },
    category2: {
      title: '페어웨이 안착(14홀 기준)',
      description: '페어웨이 안착 횟수를 선택해주세요.',
      type: 'single',
      options: [
        { label: '10회 이상', value: '10회 이상' },
        { label: '5-9회', value: '5-9회' },
        { label: '4회 이하', value: '4회 이하' }
      ]
    },
    category3: {
      title: '가장 잦은 구질 실수',
      description: '오늘 가장 많았던 구질 실수를 선택해주세요.',
      type: 'multi',
      options: [
        { label: '슬라이스', value: '슬라이스' },
        { label: '훅', value: '훅' },
        { label: '뒤땅 및 탑볼', value: '뒤땅 및 탑볼' },
        { label: '기타', value: '기타' }
      ]
    },
    category4: {
      title: '시도한 기술',
      description: '오늘 시도한 새로운 기술이 있나요?',
      type: 'multi',
      options: [
        { label: '스윙 궤도 수정', value: '스윙 궤도 수정' },
        { label: '그립 변화', value: '그립 변화' },
        { label: '클럽 선택 전략', value: '클럽 선택 전략' },
        { label: '기타', value: '기타' }
      ]
    }
  },
  // 세트 4
  {
    category1: {
      title: '체력 상태',
      description: '오늘 체력은 어떠셨나요?',
      type: 'single',
      options: [
        { label: '충분', value: '충분' },
        { label: '조금 지침', value: '조금 지침' },
        { label: '방전', value: '방전' }
      ]
    },
    category2: {
      title: '샌드 세이브 횟수',
      description: '벙커에서 세이브한 횟수를 선택해주세요.',
      type: 'single',
      options: [
        { label: '3회 이상', value: '3회 이상' },
        { label: '1-2회', value: '1-2회' },
        { label: '0회', value: '0회' }
      ]
    },
    category3: {
      title: '심리적 위기 순간',
      description: '심리적으로 어려웠던 순간을 선택해주세요.',
      type: 'multi',
      options: [
        { label: '해저드 공포', value: '해저드 공포' },
        { label: '스코어 압박', value: '스코어 압박' },
        { label: '체력 저하', value: '체력 저하' },
        { label: '기타', value: '기타' }
      ]
    },
    category4: {
      title: '라운드 분위기',
      description: '오늘 라운드 분위기는 어땠나요?',
      type: 'multi',
      options: [
        { label: '최고의 날씨', value: '최고의 날씨' },
        { label: '매끄러운 진행', value: '매끄러운 진행' },
        { label: '즐거운 대화', value: '즐거운 대화' },
        { label: '기타', value: '기타' }
      ]
    }
  },
  // 세트 5
  {
    category1: {
      title: '게임 즐거움 정도',
      description: '오늘 라운드를 즐기셨나요?',
      type: 'single',
      options: [
        { label: '매우 즐거움', value: '매우 즐거움' },
        { label: '보통', value: '보통' },
        { label: '아쉬움', value: '아쉬움' }
      ]
    },
    category2: {
      title: 'OB/해저드 발생',
      description: 'OB나 해저드는 몇 번 있었나요?',
      type: 'single',
      options: [
        { label: '0회', value: '0회' },
        { label: '1-2회', value: '1-2회' },
        { label: '3회 이상', value: '3회 이상' }
      ]
    },
    category3: {
      title: '판단 착오',
      description: '아쉬웠던 판단을 선택해주세요.',
      type: 'multi',
      options: [
        { label: '클럽 선택 미스', value: '클럽 선택 미스' },
        { label: '거리 계산 오류', value: '거리 계산 오류' },
        { label: '바람 계산 실패', value: '바람 계산 실패' },
        { label: '기타', value: '기타' }
      ]
    },
    category4: {
      title: '새로운 발견',
      description: '오늘 새롭게 발견한 점이 있나요?',
      type: 'multi',
      options: [
        { label: '코스 공략법 습득', value: '코스 공략법 습득' },
        { label: '장비 성능 확인', value: '장비 성능 확인' },
        { label: '스윙 감각 발견', value: '스윙 감각 발견' },
        { label: '기타', value: '기타' }
      ]
    }
  }
];

// 필라테스 질문 세트
export const pilatesQuestionSets: QuestionSet[] = [
  // 세트 1
  {
    category1: {
      title: '몸의 개운함',
      description: '오늘 운동 후 기분은 어떠신가요?',
      type: 'scale',
      scaleRange: { min: 1, max: 5, labels: ['1점', '2점', '3점', '4점', '5점'] }
    },
    category2: {
      title: '자세 유지 성공률',
      description: '정확한 자세를 유지한 비율은?',
      type: 'single',
      options: [
        { label: '90% 이상', value: '90% 이상' },
        { label: '70-89%', value: '70-89%' },
        { label: '70% 이하', value: '70% 이하' }
      ]
    },
    category3: {
      title: '불안정했던 부위',
      description: '어느 부위가 불안정했나요?',
      type: 'multi',
      options: [
        { label: '코어 흔들림', value: '코어 흔들림' },
        { label: '어깨 솟음', value: '어깨 솟음' },
        { label: '손목 통증', value: '손목 통증' },
        { label: '기타', value: '기타' }
      ]
    },
    category4: {
      title: '집중 포인트',
      description: '가장 집중했던 부분은?',
      type: 'multi',
      options: [
        { label: '정교한 호흡', value: '정교한 호흡' },
        { label: '타겟 근육 인지', value: '타겟 근육 인지' },
        { label: '균형 감각', value: '균형 감각' },
        { label: '기타', value: '기타' }
      ]
    }
  },
  // 세트 2
  {
    category1: {
      title: '호흡 일치도',
      description: '호흡과 동작이 잘 맞았나요?',
      type: 'single',
      options: [
        { label: '잘 맞음', value: '잘 맞음' },
        { label: '보통', value: '보통' },
        { label: '어려움', value: '어려움' }
      ]
    },
    category2: {
      title: '버티기(홀딩) 시간',
      description: '자세를 유지한 최대 시간은?',
      type: 'single',
      options: [
        { label: '60초 이상', value: '60초 이상' },
        { label: '30-59초', value: '30-59초' },
        { label: '30초 이하', value: '30초 이하' }
      ]
    },
    category3: {
      title: '기구 사용 어려움',
      description: '어떤 부분이 어려웠나요?',
      type: 'multi',
      options: [
        { label: '스프링 저항 조절', value: '스프링 저항 조절' },
        { label: '균형 잡기', value: '균형 잡기' },
        { label: '가동 범위 제한', value: '가동 범위 제한' },
        { label: '기타', value: '기타' }
      ]
    },
    category4: {
      title: '강사 피드백',
      description: '강사님께 어떤 피드백을 받으셨나요?',
      type: 'multi',
      options: [
        { label: '정렬 개선', value: '정렬 개선' },
        { label: '유연성 칭찬', value: '유연성 칭찬' },
        { label: '근력 향상 확인', value: '근력 향상 확인' },
        { label: '기타', value: '기타' }
      ]
    }
  },
  // 세트 3
  {
    category1: {
      title: '코어 힘 사용',
      description: '코어를 잘 사용하셨나요?',
      type: 'single',
      options: [
        { label: '잘 사용', value: '잘 사용' },
        { label: '보통', value: '보통' },
        { label: '부족', value: '부족' }
      ]
    },
    category2: {
      title: '최대 스프링 강도',
      description: '사용한 최대 스프링 강도는?',
      type: 'single',
      options: [
        { label: '고강도', value: '고강도' },
        { label: '중강도', value: '중강도' },
        { label: '저강도', value: '저강도' }
      ]
    },
    category3: {
      title: '신체 불편감',
      description: '불편했던 부위를 선택해주세요.',
      type: 'multi',
      options: [
        { label: '허리 과신전', value: '허리 과신전' },
        { label: '무릎 압박', value: '무릎 압박' },
        { label: '고관절 찝힘', value: '고관절 찝힘' },
        { label: '기타', value: '기타' }
      ]
    },
    category4: {
      title: '자세 개선 부위',
      description: '개선된 부위를 선택해주세요.',
      type: 'multi',
      options: [
        { label: '척추 분절', value: '척추 분절' },
        { label: '골반 중립', value: '골반 중립' },
        { label: '라운드 숄더 교정', value: '라운드 숄더 교정' },
        { label: '기타', value: '기타' }
      ]
    }
  },
  // 세트 4
  {
    category1: {
      title: '전반적인 세션 만족도',
      description: '오늘 세션은 만족스러웠나요?',
      type: 'single',
      options: [
        { label: '만족', value: '만족' },
        { label: '보통', value: '보통' },
        { label: '불만족', value: '불만족' }
      ]
    },
    category2: {
      title: '목표 가동 범위 도달',
      description: '목표한 가동 범위에 도달한 횟수는?',
      type: 'single',
      options: [
        { label: '5회 이상', value: '5회 이상' },
        { label: '1-4회', value: '1-4회' },
        { label: '0회', value: '0회' }
      ]
    },
    category3: {
      title: '컨디션 방해 요인',
      description: '컨디션을 방해한 요인은?',
      type: 'multi',
      options: [
        { label: '근육통 존재', value: '근육통 존재' },
        { label: '수면 부족', value: '수면 부족' },
        { label: '식사 직후', value: '식사 직후' },
        { label: '기타', value: '기타' }
      ]
    },
    category4: {
      title: '새로운 깨달음',
      description: '오늘 새롭게 깨달은 점은?',
      type: 'multi',
      options: [
        { label: '좌우 불균형 인지', value: '좌우 불균형 인지' },
        { label: '속근육 힘 인지', value: '속근육 힘 인지' },
        { label: '유연성 확인', value: '유연성 확인' },
        { label: '기타', value: '기타' }
      ]
    }
  },
  // 세트 5
  {
    category1: {
      title: '마인드-바디 연결',
      description: '정신과 신체의 연결은 어땠나요?',
      type: 'single',
      options: [
        { label: '잘 연결', value: '잘 연결' },
        { label: '보통', value: '보통' },
        { label: '따로 놈', value: '따로 놈' }
      ]
    },
    category2: {
      title: '동작 반복 횟수',
      description: '각 동작의 평균 반복 횟수는?',
      type: 'single',
      options: [
        { label: '15회 이상', value: '15회 이상' },
        { label: '10-14회', value: '10-14회' },
        { label: '10회 이하', value: '10회 이하' }
      ]
    },
    category3: {
      title: '컨트롤 부족',
      description: '컨트롤이 부족했던 부분은?',
      type: 'multi',
      options: [
        { label: '반동 사용', value: '반동 사용' },
        { label: '동작 끊김', value: '동작 끊김' },
        { label: '시선 처리 불안정', value: '시선 처리 불안정' },
        { label: '기타', value: '기타' }
      ]
    },
    category4: {
      title: '성취감 느낀 동작',
      description: '가장 성취감을 느낀 동작은?',
      type: 'multi',
      options: [
        { label: '고난도 동작 성공', value: '고난도 동작 성공' },
        { label: '스트레칭 완성', value: '스트레칭 완성' },
        { label: '전신 이완', value: '전신 이완' },
        { label: '기타', value: '기타' }
      ]
    }
  }
];

// 러닝 질문 세트
export const runningQuestionSets: QuestionSet[] = [
  // 세트 1
  {
    category1: {
      title: '상쾌함/성취감',
      description: '오늘 러닝은 어떠셨나요?',
      type: 'scale',
      scaleRange: { min: 1, max: 5, labels: ['1점', '2점', '3점', '4점', '5점'] }
    },
    category2: {
      title: '주행 거리',
      description: '오늘 달린 거리는?',
      type: 'single',
      options: [
        { label: '10km 이상', value: '10km 이상' },
        { label: '5-9km', value: '5-9km' },
        { label: '5km 이하', value: '5km 이하' }
      ]
    },
    category3: {
      title: '신체적 불편함',
      description: '어떤 불편함이 있었나요?',
      type: 'multi',
      options: [
        { label: '가쁜 호흡', value: '가쁜 호흡' },
        { label: '발바닥 통증', value: '발바닥 통증' },
        { label: '옆구리 결림', value: '옆구리 결림' },
        { label: '기타', value: '기타' }
      ]
    },
    category4: {
      title: '러닝 컨디션',
      description: '좋았던 점을 선택해주세요.',
      type: 'multi',
      options: [
        { label: '가벼운 발걸음', value: '가벼운 발걸음' },
        { label: '일정한 페이스', value: '일정한 페이스' },
        { label: '최적의 날씨', value: '최적의 날씨' },
        { label: '기타', value: '기타' }
      ]
    }
  },
  // 세트 2
  {
    category1: {
      title: '페이스 조절 만족도',
      description: '페이스 조절은 잘 되었나요?',
      type: 'single',
      options: [
        { label: '잘함', value: '잘함' },
        { label: '보통', value: '보통' },
        { label: '실패', value: '실패' }
      ]
    },
    category2: {
      title: '평균 페이스',
      description: '1km당 평균 페이스는?',
      type: 'single',
      options: [
        { label: '4분대', value: '4분대' },
        { label: '5-6분대', value: '5-6분대' },
        { label: '7분대 이상', value: '7분대 이상' }
      ]
    },
    category3: {
      title: '심리적 고비',
      description: '심리적으로 힘들었던 순간은?',
      type: 'multi',
      options: [
        { label: '지루함', value: '지루함' },
        { label: '포기 유혹', value: '포기 유혹' },
        { label: '급격한 체력 저하', value: '급격한 체력 저하' },
        { label: '기타', value: '기타' }
      ]
    },
    category4: {
      title: '외부 요인',
      description: '도움이 되었던 외부 요인은?',
      type: 'multi',
      options: [
        { label: '플레이리스트 성공', value: '플레이리스트 성공' },
        { label: '새로운 경로', value: '새로운 경로' },
        { label: '풍경 감상', value: '풍경 감상' },
        { label: '기타', value: '기타' }
      ]
    }
  },
  // 세트 3
  {
    category1: {
      title: '러닝 자세 만족도',
      description: '러닝 자세는 만족스러웠나요?',
      type: 'single',
      options: [
        { label: '만족', value: '만족' },
        { label: '보통', value: '보통' },
        { label: '개선 필요', value: '개선 필요' }
      ]
    },
    category2: {
      title: '최고 속도/케이던스',
      description: '오늘의 최고 기록은?',
      type: 'single',
      options: [
        { label: '상', value: '상' },
        { label: '중', value: '중' },
        { label: '하', value: '하' }
      ]
    },
    category3: {
      title: '특정 통증 부위',
      description: '통증이 있었던 부위는?',
      type: 'multi',
      options: [
        { label: '무릎 주변', value: '무릎 주변' },
        { label: '발목 불안정', value: '발목 불안정' },
        { label: '정강이 통증', value: '정강이 통증' },
        { label: '기타', value: '기타' }
      ]
    },
    category4: {
      title: '목표 달성의 순간',
      description: '성취감을 느낀 순간은?',
      type: 'multi',
      options: [
        { label: '언덕 정복', value: '언덕 정복' },
        { label: '마지막 스퍼트', value: '마지막 스퍼트' },
        { label: '최장 거리 경신', value: '최장 거리 경신' },
        { label: '기타', value: '기타' }
      ]
    }
  },
  // 세트 4
  {
    category1: {
      title: '시작 전 컨디션',
      description: '러닝 시작 전 컨디션은?',
      type: 'single',
      options: [
        { label: '최상', value: '최상' },
        { label: '보통', value: '보통' },
        { label: '피로', value: '피로' }
      ]
    },
    category2: {
      title: '평균 심박수 범위',
      description: '평균 심박수 강도는?',
      type: 'single',
      options: [
        { label: '고강도', value: '고강도' },
        { label: '중강도', value: '중강도' },
        { label: '저강도', value: '저강도' }
      ]
    },
    category3: {
      title: '준비 부족',
      description: '준비가 부족했던 부분은?',
      type: 'multi',
      options: [
        { label: '복장 불편', value: '복장 불편' },
        { label: '수분 부족', value: '수분 부족' },
        { label: '보급 실패', value: '보급 실패' },
        { label: '기타', value: '기타' }
      ]
    },
    category4: {
      title: '장비 체감',
      description: '장비에 대한 만족도는?',
      type: 'multi',
      options: [
        { label: '러닝화 쿠션감', value: '러닝화 쿠션감' },
        { label: '스마트워치 데이터', value: '스마트워치 데이터' },
        { label: '복장 적절성', value: '복장 적절성' },
        { label: '기타', value: '기타' }
      ]
    }
  },
  // 세트 5
  {
    category1: {
      title: '러닝의 즐거움',
      description: '러닝이 즐거웠나요?',
      type: 'single',
      options: [
        { label: '매우 즐거움', value: '매우 즐거움' },
        { label: '보통', value: '보통' },
        { label: '낮음', value: '낮음' }
      ]
    },
    category2: {
      title: '가장 빠른 1km 기록',
      description: '가장 빠른 1km 기록은?',
      type: 'single',
      options: [
        { label: '3-4분대', value: '3-4분대' },
        { label: '5-6분대', value: '5-6분대' },
        { label: '7분 이상', value: '7분 이상' }
      ]
    },
    category3: {
      title: '환경 방해 요인',
      description: '환경적 방해 요인이 있었나요?',
      type: 'multi',
      options: [
        { label: '맞바람', value: '맞바람' },
        { label: '높은 습도', value: '높은 습도' },
        { label: '좁은 경로', value: '좁은 경로' },
        { label: '기타', value: '기타' }
      ]
    },
    category4: {
      title: '사회적 경험',
      description: '사회적으로 좋았던 경험은?',
      type: 'multi',
      options: [
        { label: '크루와 동반주', value: '크루와 동반주' },
        { label: '인사 나눔', value: '인사 나눔' },
        { label: '타인의 응원', value: '타인의 응원' },
        { label: '기타', value: '기타' }
      ]
    }
  }
];

// 랜덤 질문 세트 선택 함수
export function getRandomQuestions(exerciseType: 'golf' | 'pilates' | 'running'): Question[] {
  let questionSets: QuestionSet[];
  
  switch (exerciseType) {
    case 'golf':
      questionSets = golfQuestionSets;
      break;
    case 'pilates':
      questionSets = pilatesQuestionSets;
      break;
    case 'running':
      questionSets = runningQuestionSets;
      break;
  }

  // 각 카테고리에서 랜덤으로 1개씩 선택
  const randomIndex1 = Math.floor(Math.random() * questionSets.length);
  const randomIndex2 = Math.floor(Math.random() * questionSets.length);
  const randomIndex3 = Math.floor(Math.random() * questionSets.length);
  const randomIndex4 = Math.floor(Math.random() * questionSets.length);

  return [
    questionSets[randomIndex1].category1,
    questionSets[randomIndex2].category2,
    questionSets[randomIndex3].category3,
    questionSets[randomIndex4].category4
  ];
}

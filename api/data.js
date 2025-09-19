export default function handler(req, res) {
  // 设置响应头，允许跨域访问
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  // 返回固定的JSON数据
  res.status(200).json({
  "positions": [
    {
      "title": "高级前端架构师",
      "department": "技术部",
      "level": "专家级",
      "location": "北京/上海/深圳",
      "salary_range": "40-60K",
      "requirements": {
        "education": "本科及以上学历，计算机相关专业",
        "experience": "8-12年前端开发经验，3年以上架构设计经验",
        "skills": [
          "精通React、Vue3、Angular等主流框架源码原理",
          "深度掌握TypeScript、WebAssembly、WebGL等前沿技术",
          "具备微前端架构设计经验（qiankun、single-spa等）",
          "熟悉前端工程化体系（Webpack5、Vite、Rollup、esbuild）",
          "掌握前端性能优化和监控体系搭建",
          "具备大型项目重构和迁移经验"
        ],
        "preferred": [
          "有开源项目维护经验，GitHub Star 1000+",
          "熟悉Node.js全栈开发",
          "具备前端团队管理经验",
          "有技术分享和培训经验"
        ]
      },
      "responsibilities": [
        "负责前端技术架构设计和演进",
        "制定前端开发规范和最佳实践",
        "指导团队进行复杂前端项目开发",
        "解决前端技术难题和性能瓶颈",
        "参与产品技术决策和规划"
      ],
      "benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
    },
    {
      "title": "Java技术专家",
      "department": "技术部",
      "level": "专家级",
      "location": "北京/上海/深圳",
      "salary_range": "45-70K",
      "requirements": {
        "education": "本科及以上学历，计算机相关专业",
        "experience": "10-15年Java开发经验，5年以上大型系统架构经验",
        "skills": [
          "深度掌握JVM调优、并发编程、内存管理",
          "精通Spring生态（Spring Boot、Spring Cloud、Spring Security）",
          "具备分布式系统设计经验（分布式事务、分布式锁、分布式缓存）",
          "熟悉高并发架构设计（限流、熔断、降级、异步处理）",
          "掌握大数据处理技术（Kafka、Elasticsearch、ClickHouse）",
          "具备云原生技术栈经验（Kubernetes、Service Mesh）"
        ],
        "preferred": [
          "有大型互联网公司核心系统开发经验",
          "熟悉AI/ML技术栈集成",
          "具备技术团队管理和人才培养经验",
          "有技术专利或论文发表"
        ]
      },
      "responsibilities": [
        "负责核心业务系统架构设计",
        "解决复杂技术难题和性能优化",
        "指导团队进行高质量代码开发",
        "参与技术选型和架构决策",
        "培养和提升团队技术能力"
      ],
      "benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
    },
    {
      "title": "Python AI工程师",
      "department": "AI技术部",
      "level": "高级",
      "location": "北京/上海/深圳",
      "salary_range": "35-50K",
      "requirements": {
        "education": "硕士及以上学历，计算机、数学、统计学相关专业",
        "experience": "5-8年Python开发经验，3年以上AI/ML项目经验",
        "skills": [
          "精通Python生态（NumPy、Pandas、Scikit-learn、PyTorch、TensorFlow）",
          "熟悉深度学习框架和模型优化技术",
          "具备NLP、CV、推荐系统等AI应用开发经验",
          "掌握MLOps流程（模型训练、部署、监控、A/B测试）",
          "熟悉分布式训练和推理优化",
          "具备大模型微调和应用开发经验"
        ],
        "preferred": [
          "有Kaggle竞赛获奖经历",
          "熟悉Transformer、BERT、GPT等预训练模型",
          "具备AI产品化经验",
          "有论文发表或技术专利"
        ]
      },
      "responsibilities": [
        "负责AI算法模型的设计和实现",
        "参与AI产品的工程化开发",
        "优化模型性能和推理效率",
        "与产品团队协作，将AI技术转化为业务价值",
        "跟踪前沿AI技术发展"
      ],
      "benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
    },
    {
      "title": "Go微服务工程师",
      "department": "技术部",
      "level": "中级",
      "location": "北京/上海/深圳",
      "salary_range": "25-35K",
      "requirements": {
        "education": "本科及以上学历，计算机相关专业",
        "experience": "3-5年Go开发经验，2年以上微服务开发经验",
        "skills": [
          "精通Go语言和并发编程（goroutine、channel、sync包）",
          "熟练掌握Gin、Echo、gRPC等框架",
          "熟悉微服务架构模式（服务发现、配置中心、链路追踪）",
          "掌握容器化技术（Docker、Kubernetes）",
          "了解服务网格（Istio、Linkerd）",
          "具备高并发系统开发经验"
        ],
        "preferred": [
          "有云原生技术栈经验",
          "熟悉分布式系统设计",
          "有开源项目贡献经验",
          "了解区块链或Web3技术"
        ]
      },
      "responsibilities": [
        "负责微服务的设计和开发",
        "参与系统架构优化",
        "编写高质量的技术文档",
        "参与代码审查和技术分享",
        "解决线上技术问题"
      ],
      "benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
    },
    {
      "title": "Android技术专家",
      "department": "移动端技术部",
      "level": "专家级",
      "location": "北京/上海/深圳",
      "salary_range": "40-55K",
      "requirements": {
        "education": "本科及以上学历，计算机相关专业",
        "experience": "8-12年Android开发经验，3年以上技术团队管理经验",
        "skills": [
          "深度掌握Android系统架构和底层原理",
          "精通Kotlin、Java语言和Android SDK",
          "熟悉Android性能优化和内存管理",
          "具备大型Android应用架构设计经验",
          "掌握跨平台技术（Flutter、React Native）",
          "了解音视频处理、图像处理技术"
        ],
        "preferred": [
          "有Android Framework开发经验",
          "熟悉NDK和JNI开发",
          "有应用上架和推广经验",
          "具备移动端团队管理经验"
        ]
      },
      "responsibilities": [
        "负责Android技术架构设计",
        "指导团队进行复杂功能开发",
        "解决Android技术难题",
        "参与产品技术决策",
        "培养Android开发团队"
      ],
      "benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
    },
    {
      "title": "iOS高级工程师",
      "department": "移动端技术部",
      "level": "高级",
      "location": "北京/上海/深圳",
      "salary_range": "30-45K",
      "requirements": {
        "education": "本科及以上学历，计算机相关专业",
        "experience": "5-8年iOS开发经验，2年以上SwiftUI开发经验",
        "skills": [
          "精通Swift语言和iOS SDK",
          "深度掌握UIKit和SwiftUI框架",
          "熟悉iOS性能优化和内存管理",
          "具备大型iOS应用开发经验",
          "掌握Core Data、Realm等数据存储技术",
          "了解iOS底层技术和系统调用"
        ],
        "preferred": [
          "有iOS Framework开发经验",
          "熟悉Metal、Core Animation等图形技术",
          "有App Store上架和推广经验",
          "了解跨平台开发技术"
        ]
      },
      "responsibilities": [
        "负责iOS应用的设计和开发",
        "参与iOS技术架构设计",
        "优化应用性能和用户体验",
        "指导初级iOS开发工程师",
        "参与技术方案评审"
      ],
      "benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
    },
    {
      "title": "测试架构师",
      "department": "质量保证部",
      "level": "专家级",
      "location": "北京/上海/深圳",
      "salary_range": "35-50K",
      "requirements": {
        "education": "本科及以上学历，计算机相关专业",
        "experience": "8-12年软件测试经验，5年以上测试架构设计经验",
        "skills": [
          "精通测试理论、测试方法和测试策略",
          "深度掌握自动化测试框架设计和开发",
          "熟悉性能测试、安全测试、兼容性测试",
          "具备测试平台和工具开发经验",
          "掌握CI/CD流程和DevOps实践",
          "了解AI测试和智能化测试技术"
        ],
        "preferred": [
          "有大型互联网公司测试经验",
          "熟悉测试左移和测试右移实践",
          "具备测试团队管理经验",
          "有测试工具开源项目经验"
        ]
      },
      "responsibilities": [
        "负责测试架构设计和测试体系建设",
        "制定测试策略和测试标准",
        "指导团队进行复杂测试项目",
        "参与产品技术评审",
        "培养和提升测试团队能力"
      ],
      "benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
    },
    {
      "title": "DevOps专家",
      "department": "运维部",
      "level": "专家级",
      "location": "北京/上海/深圳",
      "salary_range": "40-60K",
      "requirements": {
        "education": "本科及以上学历，计算机相关专业",
        "experience": "8-12年运维经验，5年以上DevOps实践经验",
        "skills": [
          "深度掌握Linux系统管理和Shell/Python脚本开发",
          "精通容器化技术（Docker、Kubernetes、Helm）",
          "熟悉云原生技术栈（Service Mesh、Serverless）",
          "具备大规模系统运维和故障处理经验",
          "掌握监控体系搭建（Prometheus、Grafana、ELK）",
          "熟悉安全运维和合规要求"
        ],
        "preferred": [
          "有大型互联网公司运维经验",
          "熟悉多云架构和混合云部署",
          "具备运维自动化平台开发经验",
          "有技术团队管理经验"
        ]
      },
      "responsibilities": [
        "负责DevOps体系建设和运维架构设计",
        "指导团队进行复杂运维项目",
        "解决系统性能和安全问题",
        "参与技术选型和架构决策",
        "培养运维团队技术能力"
      ],
      "benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
    },
    {
      "title": "系统架构师",
      "department": "技术部",
      "level": "专家级",
      "location": "北京/上海/深圳",
      "salary_range": "50-80K",
      "requirements": {
        "education": "本科及以上学历，计算机相关专业",
        "experience": "10-15年技术开发经验，5年以上大型系统架构经验",
        "skills": [
          "精通多种编程语言和框架",
          "深度掌握分布式系统架构设计",
          "熟悉微服务架构和服务治理",
          "具备大数据和AI技术架构经验",
          "掌握云原生技术栈和混合云架构",
          "具备系统性能优化和容量规划经验"
        ],
        "preferred": [
          "有大型互联网公司核心系统架构经验",
          "熟悉开源技术栈和社区贡献",
          "具备技术团队管理和人才培养经验",
          "有技术演讲和行业影响力"
        ]
      },
      "responsibilities": [
        "负责公司整体技术架构设计",
        "制定技术发展路线图",
        "指导各技术团队进行架构设计",
        "解决复杂技术难题",
        "参与公司技术决策和规划"
      ],
      "benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
    },
    {
      "title": "产品经理",
      "department": "产品部",
      "level": "高级",
      "location": "北京/上海/深圳",
      "salary_range": "25-40K",
      "requirements": {
        "education": "本科及以上学历，计算机、设计、商业相关专业",
        "experience": "5-8年产品管理经验，3年以上AI/ToB产品经验",
        "skills": [
          "精通产品设计方法论和用户体验设计",
          "熟悉AI技术和应用场景",
          "具备ToB产品设计和运营经验",
          "掌握数据分析方法和工具",
          "熟悉敏捷开发和项目管理",
          "具备跨部门协作和沟通能力"
        ],
        "preferred": [
          "有AI产品成功案例",
          "熟悉企业级软件产品",
          "具备产品团队管理经验",
          "有技术背景或技术理解能力"
        ]
      },
      "responsibilities": [
        "负责AI产品的规划和设计",
        "与技术和设计团队协作",
        "分析用户需求和市场趋势",
        "制定产品发展策略",
        "参与产品决策和规划"
      ],
      "benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
    },
    {
      "title": "市场总监",
      "department": "市场部",
      "level": "高级",
      "location": "北京/上海/深圳",
      "salary_range": "30-50K",
      "requirements": {
        "education": "本科及以上学历，市场营销、商业管理相关专业",
        "experience": "8-12年市场营销经验，5年以上ToB市场经验",
        "skills": [
          "精通市场营销策略和品牌建设",
          "熟悉ToB市场特点和客户需求",
          "具备AI/科技行业市场经验",
          "掌握数字营销和内容营销",
          "熟悉市场分析和竞品分析",
          "具备团队管理和跨部门协作能力"
        ],
        "preferred": [
          "有AI/科技公司市场经验",
          "熟悉企业级软件市场",
          "具备市场团队管理经验",
          "有成功市场案例"
        ]
      },
      "responsibilities": [
        "负责公司市场策略制定和执行",
        "管理市场团队和预算",
        "与销售和产品团队协作",
        "分析市场趋势和竞争环境",
        "参与公司战略决策"
      ],
      "benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
    },
    {
      "title": "运营经理",
      "department": "运营部",
      "level": "中级",
      "location": "北京/上海/深圳",
      "salary_range": "20-30K",
      "requirements": {
        "education": "本科及以上学历，商业管理、数据分析相关专业",
        "experience": "3-5年运营经验，2年以上用户运营经验",
        "skills": [
          "精通用户运营和数据分析",
          "熟悉内容运营和活动运营",
          "掌握运营工具和平台使用",
          "具备数据分析和报表制作能力",
          "熟悉用户增长和留存策略",
          "具备跨部门协作能力"
        ],
        "preferred": [
          "有AI/科技产品运营经验",
          "熟悉ToB产品运营",
          "具备运营团队管理经验",
          "有成功运营案例"
        ]
      },
      "responsibilities": [
        "负责用户运营和产品运营",
        "分析用户数据和产品数据",
        "制定运营策略和活动方案",
        "与产品和市场团队协作",
        "优化用户体验和产品功能"
      ],
      "benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
    },
    {
      "title": "销售总监",
      "department": "销售部",
      "level": "高级",
      "location": "北京/上海/深圳",
      "salary_range": "35-60K",
      "requirements": {
        "education": "本科及以上学历，商业管理、销售相关专业",
        "experience": "8-12年销售经验，5年以上ToB销售管理经验",
        "skills": [
          "精通ToB销售策略和客户关系管理",
          "熟悉AI/科技产品销售",
          "具备大客户销售和商务谈判能力",
          "掌握销售管理和团队建设",
          "熟悉销售流程和CRM系统",
          "具备市场分析和竞品分析能力"
        ],
        "preferred": [
          "有AI/科技公司销售经验",
          "熟悉企业级软件销售",
          "具备销售团队管理经验",
          "有成功销售案例和客户资源"
        ]
      },
      "responsibilities": [
        "负责销售策略制定和团队管理",
        "开拓和维护大客户关系",
        "与产品和市场团队协作",
        "分析销售数据和市场趋势",
        "参与公司战略决策"
      ],
      "benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
    },
    {
      "title": "UI/UX设计师",
      "department": "设计部",
      "level": "高级",
      "location": "北京/上海/深圳",
      "salary_range": "20-35K",
      "requirements": {
        "education": "本科及以上学历，设计、艺术相关专业",
        "experience": "5-8年UI/UX设计经验，3年以上ToB产品设计经验",
        "skills": [
          "精通UI/UX设计理论和设计工具",
          "熟悉ToB产品设计特点",
          "具备AI/科技产品设计经验",
          "掌握交互设计和用户体验设计",
          "熟悉设计系统和组件库",
          "具备跨部门协作和沟通能力"
        ],
        "preferred": [
          "有AI/科技产品设计经验",
          "熟悉企业级软件设计",
          "具备设计团队管理经验",
          "有成功设计案例"
        ]
      },
      "responsibilities": [
        "负责产品UI/UX设计",
        "与产品和开发团队协作",
        "制定设计规范和标准",
        "优化用户体验和界面设计",
        "参与产品设计决策"
      ],
      "benefits": "五险一金、年终奖、股权激励、弹性工作、技术培训"
    }
  ],
  "company_info": {
    "name": "TeGo-AI",
    "industry": "人工智能",
    "scale": "50-200人",
    "stage": "B轮",
    "culture": "技术驱动、开放包容、持续学习",
    "contact": {
      "email": "hr@tego-ai.com",
      "phone": "400-888-8888",
      "website": "https://www.tego-ai.com"
    }
  }
});
}

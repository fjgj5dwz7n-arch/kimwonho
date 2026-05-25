export type TistoryArchiveType = "프로필" | "게재" | "수상" | "입주" | "증명" | "인터뷰" | "지원";

export type TistoryArchiveEntry = {
  id: number;
  slug: string;
  title: string;
  originalTitle: string;
  date: string;
  sourceUrl: string;
  type: TistoryArchiveType;
  summary: string;
  body: string[];
  images: Array<{ src: string; originalSrc: string; alt: string; width?: number; height?: number }>;
  links: Array<{ href: string; label: string }>;
};

export const tistoryArchive = [
  {
    "id": 39,
    "slug": "39-포트폴리오",
    "title": "포트폴리오",
    "originalTitle": "《포트폴리오》",
    "date": "2025-12-24T18:30:57+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/39",
    "type": "프로필",
    "summary": "이름",
    "body": [
      "이름",
      "김원호",
      "소개",
      "1997년 경상남도 창원에서 태어나 진주에서 자랐다",
      "발단",
      "2020년 12월 7일 처음 글을 쓰고 읽기 시작했다",
      "근황",
      "동국대학교 국어국문학과(현대문학 전공) 석사 과정에 재학 중이다",
      "활동",
      "시 | 희곡 | 에세이 를 썼다",
      "메일",
      "ssonss81@naver.com"
    ],
    "images": [
      {
        "src": "/assets/tistory/39-1.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/6dszP/dJMb99ZhS96/AAAAAAAAAAAAAAAAAAAAAH5FHueD3pV2W-p2CGDpWqxws4hOUt8QNP6lCqtIjPLb/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=xIJY00w0V2ABHGKk8ZM6n5oqkyM%3D",
        "alt": "포트폴리오",
        "width": 1024,
        "height": 1024
      }
    ],
    "links": []
  },
  {
    "id": 38,
    "slug": "38-연희문학창작촌-입주작가",
    "title": "연희문학창작촌 입주작가",
    "originalTitle": "《연희문학창작촌 입주작가》",
    "date": "2025-12-17T19:50:42+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/38",
    "type": "입주",
    "summary": "연희문학창작촌 입주작가 2026년 3분기(7~9월) 선정",
    "body": [
      "연희문학창작촌 입주작가 2026년 3분기(7~9월) 선정"
    ],
    "images": [
      {
        "src": "/assets/tistory/38-1.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/drmV14/dJMcahXilfS/AAAAAAAAAAAAAAAAAAAAAEdYJxcakHKzP1OLkxLcslY05LdadyOrj1XqJMpTEwEG/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=fSlweMfrLj7W%2BJYqN5lWEpEBxAs%3D",
        "alt": "연희문학창작촌 입주작가",
        "width": 3584,
        "height": 2076
      }
    ],
    "links": []
  },
  {
    "id": 37,
    "slug": "37-동대문학상",
    "title": "동대문학상",
    "originalTitle": "《동대문학상》",
    "date": "2025-11-24T17:23:47+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/37",
    "type": "수상",
    "summary": "제31회 동대문학상 시 부문/희곡 부문 심사위원 특별 언급 전문",
    "body": [
      "제31회 동대문학상 시 부문/희곡 부문 심사위원 특별 언급 전문",
      "시 부문 전문 공개 링크",
      "동국대학교 대학미디어센터",
      "동대신문, 동국포스트, dongguk post, DUBS",
      "희곡 부문 전문 공개 링크"
    ],
    "images": [
      {
        "src": "/assets/tistory/37-1.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/bQOb9G/dJMcafE1BZN/AAAAAAAAAAAAAAAAAAAAAIxUHSJZjLFI1pYh-KHuu_5MpkQQN64WsjjxbPi45VbK/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=bb3ZNaXT1PBsiqKqgH%2Bcgm2OCdY%3D",
        "alt": "동대문학상",
        "width": 1784,
        "height": 1838
      },
      {
        "src": "/assets/tistory/37-2.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/nrY6F/dJMcaaDIcmy/AAAAAAAAAAAAAAAAAAAAAHdTlBYTzKKnHY8trazpxC1wQQ0joMp0OlwISqUC_pWQ/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=%2FfPWhWvqqUlXTsDnVX9MTBsbwPQ%3D",
        "alt": "동대문학상",
        "width": 1914,
        "height": 2000
      },
      {
        "src": "/assets/tistory/37-3.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/1UzA0/dJMcaa4MEsi/AAAAAAAAAAAAAAAAAAAAALVHfKN4_nhs_LAxsheYPyr6ZL3o0L7jQJMpr8vr3_bK/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=znYZhSa%2FOUrCG%2B%2Baeyqm8%2Fz1fhk%3D",
        "alt": "동대문학상",
        "width": 1866,
        "height": 1778
      }
    ],
    "links": [
      {
        "href": "https://www.donggukmedia.com/bbs/view.html?idxno=9614&sc_category=1",
        "label": "https://www.donggukmedia.com/bbs/view.html?idxno=9614&sc_category=1"
      },
      {
        "href": "https://www.donggukmedia.com/bbs/view.html?idxno=9618&sc_category=1",
        "label": "https://www.donggukmedia.com/bbs/view.html?idxno=9618&sc_category=1"
      }
    ]
  },
  {
    "id": 35,
    "slug": "35-한국예술인복지재단-예술인-예술활동증명",
    "title": "한국예술인복지재단 예술인 예술활동증명",
    "originalTitle": "《한국예술인복지재단 예술인 예술활동증명》",
    "date": "2025-09-02T18:18:31+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/35",
    "type": "증명",
    "summary": "한국예술인복지재단 예술인 예술활동증명 관련 이미지와 링크를 이전한 기록입니다.",
    "body": [],
    "images": [
      {
        "src": "/assets/tistory/35-1.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/ctI4Os/btsQhmlkJjx/AAAAAAAAAAAAAAAAAAAAAJRgG6UNnHfpo9ZQvkHIeCu4gXlck721vKVMjKTSAGpF/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=D4YHP08qqjuFtMIp9A7CdIQ6By4%3D",
        "alt": "한국예술인복지재단 예술인 예술활동증명",
        "width": 1106,
        "height": 1204
      },
      {
        "src": "/assets/tistory/35-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/byO2YR/btsQjAvEFq7/AAAAAAAAAAAAAAAAAAAAAHr5zBdtdpoOHj8bGKyQuFQJxIFSS03SiszKqAJl5ToU/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=DwqVeLbfu3CXiml%2FHle47TtWIHw%3D",
        "alt": "한국예술인복지재단 예술인 예술활동증명",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/35-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/crv9SZ/btsQjmEmAwd/AAAAAAAAAAAAAAAAAAAAABfblyMNydXH-uLfSDflPciqS5Qdg8gSkx0lwPEF_30c/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=0MwgO5%2FYvfR27%2FRsnVeMx%2FnqdZs%3D",
        "alt": "한국예술인복지재단 예술인 예술활동증명",
        "width": 1920,
        "height": 1080
      }
    ],
    "links": []
  },
  {
    "id": 34,
    "slug": "34-웹진-포엣푸념-푸념-인터뷰",
    "title": "웹진 포엣푸념-푸념 인터뷰",
    "originalTitle": "《웹진 포엣푸념-푸념 인터뷰》",
    "date": "2025-09-02T18:07:55+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/34",
    "type": "인터뷰",
    "summary": "웹진 포엣푸념-푸념 인터뷰 관련 이미지와 링크를 이전한 기록입니다.",
    "body": [],
    "images": [
      {
        "src": "/assets/tistory/34-1.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/7nhMn/btsQhB3B3UT/AAAAAAAAAAAAAAAAAAAAAOWp2b1v-OB5n8ngkOavxV1i_BoXbazOBaaKQGWnVfby/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=Pcq6e8nn8TgxyRyOmk7TYBI1Gy8%3D",
        "alt": "웹진 포엣푸념-푸념 인터뷰",
        "width": 902,
        "height": 1389
      },
      {
        "src": "/assets/tistory/34-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/PQMfL/btsQiUnOeDo/AAAAAAAAAAAAAAAAAAAAAIzdALlbJK58ypQcqSCe1cxdyenlpPn5p0cbX2A-H-LB/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=%2BK%2BMIpjffI%2FMp%2FHzu%2BQSOojA1Qc%3D",
        "alt": "웹진 포엣푸념-푸념 인터뷰",
        "width": 1284,
        "height": 1605
      },
      {
        "src": "/assets/tistory/34-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bNqTGC/btsQjxeChay/AAAAAAAAAAAAAAAAAAAAABPiqpgEDLs16KarfTCHKzE-9ucwwb8b2Rzej6F2nSKf/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=bVUhNyhcZy15JxhJvyVqGd1qB3g%3D",
        "alt": "웹진 포엣푸념-푸념 인터뷰",
        "width": 1284,
        "height": 1589
      },
      {
        "src": "/assets/tistory/34-4.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/I9uKZ/btsQf9fPhYK/AAAAAAAAAAAAAAAAAAAAAMO9tFtxVTGmTfKEHaMh87TQbziLankrhCiEJcohArZU/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=TmoenxmBCb2FpRf%2B7CjK1f5OW%2Bs%3D",
        "alt": "웹진 포엣푸념-푸념 인터뷰",
        "width": 1284,
        "height": 1616
      },
      {
        "src": "/assets/tistory/34-5.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/cUIf8D/btsQiHaZw0i/AAAAAAAAAAAAAAAAAAAAAI1_RFpjNEp_hsFbKUft23_sENRt-J79D2p0ta3HtHvE/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=48om23ExSHo4Ps9eLBakw4TGiV4%3D",
        "alt": "웹진 포엣푸념-푸념 인터뷰",
        "width": 1284,
        "height": 1622
      },
      {
        "src": "/assets/tistory/34-6.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/boAjtg/btsQjgRGXjK/AAAAAAAAAAAAAAAAAAAAAE6Iu9dVR8ug90G5Mji8482SsJEVCpAwx9lxYwEuB3zM/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=8cWXmTyL0f25SUCj0XPWKKUMVBw%3D",
        "alt": "웹진 포엣푸념-푸념 인터뷰",
        "width": 1284,
        "height": 1621
      },
      {
        "src": "/assets/tistory/34-7.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/TAXiO/btsQgdJeLph/AAAAAAAAAAAAAAAAAAAAAAyxRsfObKwcxqJlNhKUIITK_DmkHTOVzntzdz92WNGD/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=OWwtIreen%2F8wiTUa6YaDiLicego%3D",
        "alt": "웹진 포엣푸념-푸념 인터뷰",
        "width": 1284,
        "height": 1600
      },
      {
        "src": "/assets/tistory/34-8.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/dpJgy3/btsQhSRCzqJ/AAAAAAAAAAAAAAAAAAAAAChFrNwg3KUs092vyJSSt9sAh2QQ4NTXi93JI7LnHqGB/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=HlvlktrD5dKd5K6C7m6Wmd838mw%3D",
        "alt": "웹진 포엣푸념-푸념 인터뷰",
        "width": 1284,
        "height": 1600
      },
      {
        "src": "/assets/tistory/34-9.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/lEEtE/btsQgTwTfIj/AAAAAAAAAAAAAAAAAAAAAIJW1sPVx4oD7K2MJJ7MpxaCjSHmYp1kAJn1PYdHsjek/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=bP06euEwg4UUpOl9NnFeG0QWZB0%3D",
        "alt": "웹진 포엣푸념-푸념 인터뷰",
        "width": 1284,
        "height": 1593
      },
      {
        "src": "/assets/tistory/34-10.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/FC0gF/btsQiDNrGl5/AAAAAAAAAAAAAAAAAAAAAIoTsSu0It3SQKy1eEeyDBEQgli9PF6Ka36qz-OHYD09/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=p0EjGdMjYKdpkCJpYHJcUhFQAYc%3D",
        "alt": "웹진 포엣푸념-푸념 인터뷰",
        "width": 1284,
        "height": 1593
      }
    ],
    "links": [
      {
        "href": "https://www.instagram.com/p/DJRWwGUpN8I/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "label": "https://www.instagram.com/p/DJRWwGUpN8I/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      }
    ]
  },
  {
    "id": 1,
    "slug": "1-다층-2025-봄",
    "title": "다층 2025 봄",
    "originalTitle": "《다층》 2025 봄",
    "date": "2025-06-17T06:20:23+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/1",
    "type": "게재",
    "summary": "다층 2025.봄 : 알라딘",
    "body": [
      "다층 2025.봄 : 알라딘"
    ],
    "images": [
      {
        "src": "/assets/tistory/1-1.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/bNxpNY/btsOCjiC1Ju/AAAAAAAAAAAAAAAAAAAAALsaFcKbmi2DpJC51D-sUbeOZ_7jmOQLipxKwZyV0MZV/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=OMwS%2BHPEhTLL6AdCMAhFubZZA1E%3D",
        "alt": "다층 2025 봄",
        "width": 507,
        "height": 768
      },
      {
        "src": "/assets/tistory/1-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/miXSp/btsQjfSKwBX/AAAAAAAAAAAAAAAAAAAAABuB8TFJHb4OlAJQ5-Kd6QFAANzrIqPoXf4-b-k0ly_A/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=qaornVtUoWzx%2FJq8iyWeY8MAmbg%3D",
        "alt": "다층 2025 봄",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/1-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bwB5FY/btsQhsS8dKK/AAAAAAAAAAAAAAAAAAAAABT-7znv94xAO8i-SQNzGsGVNiBZWvSjdOXjCQ1-QFon/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=2imrP41QfWRAORKaIB7HlzShOVQ%3D",
        "alt": "다층 2025 봄",
        "width": 1920,
        "height": 1080
      }
    ],
    "links": [
      {
        "href": "https://www.aladin.co.kr/shop/wproduct.aspx?start=short&ItemId=361701647",
        "label": "https://www.aladin.co.kr/shop/wproduct.aspx?start=short&ItemId=361701647"
      }
    ]
  },
  {
    "id": 2,
    "slug": "2-시와-산문-2025-봄",
    "title": "시와 산문 2025 봄",
    "originalTitle": "《시와 산문》 2025 봄",
    "date": "2025-06-17T06:20:16+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/2",
    "type": "게재",
    "summary": "시와 산문 2025.봄 : 알라딘",
    "body": [
      "시와 산문 2025.봄 : 알라딘"
    ],
    "images": [
      {
        "src": "/assets/tistory/2-1.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/uwtYJ/btsOAX85W5v/AAAAAAAAAAAAAAAAAAAAAKw87XQwGJMlC_FdSZvyHU44qrMz9-H45K58-Z0doraO/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=UDbjOxLBuLMYjWlxumTJuRCldl8%3D",
        "alt": "시와 산문 2025 봄",
        "width": 1378,
        "height": 2044
      },
      {
        "src": "/assets/tistory/2-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/ba9hp6/btsQiW0cJBP/AAAAAAAAAAAAAAAAAAAAAI5C7Zb8ly_dVqlsJ-MwAgQ4HcevjKYkeI6LNPxbY_1q/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=lztyMrSmuwDHI1qRCbWiJR%2Fp6Ng%3D",
        "alt": "시와 산문 2025 봄",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/2-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/k2YYV/btsOE5quG6p/AAAAAAAAAAAAAAAAAAAAAMTd8Lui_7lX8ey9WsKBUdymiZ6F1b2xsTg5wxVsU3ws/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=OnDnzcHpEpxJ5GC60j5Mc2DXaQk%3D",
        "alt": "시와 산문 2025 봄",
        "width": 4032,
        "height": 3024
      },
      {
        "src": "/assets/tistory/2-4.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/Qb9b6/btsOEkuVofZ/AAAAAAAAAAAAAAAAAAAAAAnrw60zt8llqejCq7TeXM-ZoQOeR3Uq0SrvyyQnQ4xQ/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=z%2FiilQT3BgXOmJeoqc1EntiGy3k%3D",
        "alt": "시와 산문 2025 봄",
        "width": 4032,
        "height": 3024
      },
      {
        "src": "/assets/tistory/2-5.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/deV9OM/btsOEObrQXG/AAAAAAAAAAAAAAAAAAAAAMXlHmvKhfPvdUiyjw2rE54WukeTeUENnRZg-n-uld_E/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=If4%2Bs%2Fvl4liYpr2yhh0Pqg2nzVE%3D",
        "alt": "시와 산문 2025 봄",
        "width": 4032,
        "height": 3024
      }
    ],
    "links": [
      {
        "href": "https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=K702037247&start=pnaver_02",
        "label": "https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=K702037247&start=pnaver_02"
      }
    ]
  },
  {
    "id": 3,
    "slug": "3-모닥",
    "title": "모닥",
    "originalTitle": "《모닥》",
    "date": "2025-06-17T06:20:10+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/3",
    "type": "게재",
    "summary": "첫 번째 투고",
    "body": [
      "첫 번째 투고",
      "김원호"
    ],
    "images": [
      {
        "src": "/assets/tistory/3-1.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/qydzi/btsOCge9koI/AAAAAAAAAAAAAAAAAAAAAApFypv1FHuU9Nscreo6ZyKmnQtAzwp_tnkOOyzQ7nnB/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=CfXl%2FvXSKe8nClqB57GwuuoD53k%3D",
        "alt": "모닥",
        "width": 1074,
        "height": 1342
      },
      {
        "src": "/assets/tistory/3-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/pe81k/btsQgrN9yag/AAAAAAAAAAAAAAAAAAAAAHcsaspMrlFmtTnxpKusNc2uVgpzfvlJOs_u6b7Po50T/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=Z%2F2%2FWT7FpOXC0I46Z8zsawLgsm8%3D",
        "alt": "모닥",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/3-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bqoPkw/btsOClh3TpO/AAAAAAAAAAAAAAAAAAAAAAKyaZOpNY21HGL4a0O1bIVipdqpo6nnn5qgQ2cMLeM2/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=0MFearMns%2FdGQZot4GSWG1cshbQ%3D",
        "alt": "모닥",
        "width": 1080,
        "height": 1350
      },
      {
        "src": "/assets/tistory/3-4.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/4Hayy/btsOB922msa/AAAAAAAAAAAAAAAAAAAAACUO2iXhs8u_eKn60yinU4Va8-PK12QxqRCHL2Xt12Ht/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=J6veZl%2BuNuWHsXaHxS%2BRzz1oXpM%3D",
        "alt": "모닥",
        "width": 1080,
        "height": 1350
      },
      {
        "src": "/assets/tistory/3-5.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/EUT8e/btsOCLAA2uA/AAAAAAAAAAAAAAAAAAAAACWVZwsR1wbVcrHQ6RxTzMs28N1g9asVQp2bGR6XznlY/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=R0wVHqemfLAMGBbABdYGjxGyoQk%3D",
        "alt": "모닥",
        "width": 1080,
        "height": 1350
      },
      {
        "src": "/assets/tistory/3-6.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bNo8NB/btsOD287clf/AAAAAAAAAAAAAAAAAAAAAAIrtWxS0m8jZnk975sL2XZPN3kGb8izt5LK7jxbL5Gz/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=Xm5m942NnIGgfSvKp%2ByGQ0E1J9M%3D",
        "alt": "모닥",
        "width": 1080,
        "height": 1350
      },
      {
        "src": "/assets/tistory/3-7.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bj6F2P/btsODVvFFLT/AAAAAAAAAAAAAAAAAAAAAMC0BavV1Hq817JMLTw3ASmSd6OTXVbU-XaOMTC59Ivs/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=RdXNX0px1Yz35tgXy52RoMW6%2FFQ%3D",
        "alt": "모닥",
        "width": 1080,
        "height": 1350
      },
      {
        "src": "/assets/tistory/3-8.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/b0dVVU/btsOCPir0e8/AAAAAAAAAAAAAAAAAAAAABuallxHXF2B9INdwLeRMF0r_uvTRSzzQXku7XJgLM-n/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=z9VCAHtp2iodl89tpvBe3VIuwvM%3D",
        "alt": "모닥",
        "width": 1080,
        "height": 1350
      }
    ],
    "links": [
      {
        "href": "https://www.tadak.co/5228551089/5411797",
        "label": "https://www.tadak.co/5228551089/5411797"
      }
    ]
  },
  {
    "id": 4,
    "slug": "4-살림문학",
    "title": "살림문학",
    "originalTitle": "《살림문학》",
    "date": "2025-06-17T06:20:05+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/4",
    "type": "게재",
    "summary": "살림문학 : 알라딘",
    "body": [
      "살림문학 : 알라딘",
      "‘살림’이라는 낱말을 들여다보면 ‘살다’, ‘살리다’, ‘사랑하다’, ‘사람답다’는 말과 이어진다는 걸 알아차릴 수 있다. 사람이 사는 동안 무언가를 살리며 어울려 살아가는 일이 살림"
    ],
    "images": [
      {
        "src": "/assets/tistory/4-1.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bFEqwu/btsOCSdOFnQ/AAAAAAAAAAAAAAAAAAAAAHo3-dg0YhPxf1Uu323x1ig6kykKE3c3U2xxb6pNG1wh/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=MN2VbxYgq%2Bsg6yShTqi8TkKTFcg%3D",
        "alt": "살림문학",
        "width": 707,
        "height": 1016
      },
      {
        "src": "/assets/tistory/4-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/pl9k4/btsQgb5L2FA/AAAAAAAAAAAAAAAAAAAAAJX64HvG2kBDU14unwv8wIyalaGh8XzxfOT8nas-QlQf/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=y8Agn4tMQhCBrTs5CXwzgaxLMUg%3D",
        "alt": "살림문학",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/4-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/Ku49v/btsOCCDRpv8/AAAAAAAAAAAAAAAAAAAAAP9fiebYHvdZvr38N8wqQg5phOT9lxsgqz-Rs6liu991/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=AXc4GbX1cvmb1ejZpjoEptEoLIA%3D",
        "alt": "살림문학",
        "width": 3024,
        "height": 4032
      },
      {
        "src": "/assets/tistory/4-4.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/R7WJh/btsODqbAGlb/AAAAAAAAAAAAAAAAAAAAAHQtPF5IRmOVkyjlWOa8RFP6B8QejjFAIQLwd_Rh45ln/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=PbTBI5mqHTHCWAhBAMITBwpNAKY%3D",
        "alt": "살림문학",
        "width": 4032,
        "height": 3024
      },
      {
        "src": "/assets/tistory/4-5.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/2ClKT/btsOB1qhkQ7/AAAAAAAAAAAAAAAAAAAAABWP2yt5nMV7-88RctOTiCd0MbWVzongtbhNkT8qdQol/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=wlMLKzkKTxojQu6YX%2FSRATmi2Gs%3D",
        "alt": "살림문학",
        "width": 4032,
        "height": 3024
      }
    ],
    "links": [
      {
        "href": "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=356528172",
        "label": "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=356528172"
      }
    ]
  },
  {
    "id": 5,
    "slug": "5-현대시학-2025-1-2월",
    "title": "현대시학 2025 1-2월",
    "originalTitle": "《현대시학》 2025 1-2월",
    "date": "2025-06-17T06:20:00+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/5",
    "type": "게재",
    "summary": "현대시학 2025.1.2 : 알라딘",
    "body": [
      "현대시학 2025.1.2 : 알라딘"
    ],
    "images": [
      {
        "src": "/assets/tistory/5-1.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/QeZL2/btsOBEU6Vi7/AAAAAAAAAAAAAAAAAAAAAFJb0WmDetU-wX9-1dyw00qw90YuABORQtSdMLxOArE_/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=XhtyT4T73ZhnyxPvUt073FR%2FQvc%3D",
        "alt": "현대시학 2025 1-2월",
        "width": 545,
        "height": 831
      },
      {
        "src": "/assets/tistory/5-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/Gsanu/btsQiGpzWhm/AAAAAAAAAAAAAAAAAAAAACO4XvxA0UWMfdXHCQJUdf6cu5cd_HT1DElzIy0zjXuX/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=N7aJ0UWtF2TKtdCtBnMkKiRgucw%3D",
        "alt": "현대시학 2025 1-2월",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/5-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bEAnhC/btsOD0Q1lzu/AAAAAAAAAAAAAAAAAAAAAHAtDghkm9fhKuZcb6nrgbq_XekvSNfXsy302awlV0CE/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=QKfix1fkYECmMEdXeGERl6Gox%2B0%3D",
        "alt": "현대시학 2025 1-2월",
        "width": 4032,
        "height": 3024
      },
      {
        "src": "/assets/tistory/5-4.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/EziOC/btsOEAK5x9Y/AAAAAAAAAAAAAAAAAAAAANtv3cQudOdN9HrocHa0B4BXeiR8Vl9CKFz70pO_2OIy/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=1G%2Fnb4gkI1KNsqO1IZVZFWDW%2FPM%3D",
        "alt": "현대시학 2025 1-2월",
        "width": 1080,
        "height": 1350
      }
    ],
    "links": [
      {
        "href": "https://www.aladin.co.kr/shop/wproduct.aspx?start=short&ItemId=355693083",
        "label": "https://www.aladin.co.kr/shop/wproduct.aspx?start=short&ItemId=355693083"
      }
    ]
  },
  {
    "id": 6,
    "slug": "6-윤동주시문학상",
    "title": "윤동주시문학상",
    "originalTitle": "《윤동주시문학상》",
    "date": "2025-06-17T06:19:54+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/6",
    "type": "수상",
    "summary": "공지사항 게시판읽기 ( 제24회 윤동주시문학상 당선자 발표 ) | 윤동주기념관",
    "body": [
      "공지사항 게시판읽기 ( 제24회 윤동주시문학상 당선자 발표 ) | 윤동주기념관",
      "제23회 윤동주시문학상 당선자 발표 시인 윤동주의 시 정신을 기리고 그 뜻을 널리 알리기 위해 연세대학교 윤동주기념사업회가 주최하고 있는 윤동주 시문학상이 24회를 맞았습니다. 윤동주"
    ],
    "images": [
      {
        "src": "/assets/tistory/6-1.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/7VWRs/btsOCjQwQY6/AAAAAAAAAAAAAAAAAAAAANhEi_tbKdp32neRy4pRL2amnJTg2GeoOYqGPX3LX6Hd/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=oKWiCqYYOceExYBS%2B%2Fu8fFLLGmQ%3D",
        "alt": "윤동주시문학상",
        "width": 1654,
        "height": 2339
      },
      {
        "src": "/assets/tistory/6-2.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/Hiy5e/btsOCkpTL9S/AAAAAAAAAAAAAAAAAAAAAEmpmZfIiy9nskLsLv-J-IBJFDYBX84lykoUkP6nWJR9/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=HTFyqwv7poV1rj08Usvucda2BRA%3D",
        "alt": "윤동주시문학상",
        "width": 948,
        "height": 782
      },
      {
        "src": "/assets/tistory/6-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bUya86/btsODkvXEtQ/AAAAAAAAAAAAAAAAAAAAAPi3fkmfLWYrzTWJ0D_zsxzdnk58GVKjEDlrN1QkloD0/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=y9YLH6Rn%2FDpkzNSi%2BRpfXWqNl2c%3D",
        "alt": "윤동주시문학상",
        "width": 750,
        "height": 1020
      },
      {
        "src": "/assets/tistory/6-4.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bEp6wW/btsOCKayWiB/AAAAAAAAAAAAAAAAAAAAAEUgxa7QwTrFXz9-PSdOB9rvwrAoD5PL1I7Um1txuDP1/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=%2BxUAfzKLA9riUO401668OVnXbio%3D",
        "alt": "윤동주시문학상",
        "width": 750,
        "height": 1022
      },
      {
        "src": "/assets/tistory/6-5.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bRp8Ao/btsOEX0lJju/AAAAAAAAAAAAAAAAAAAAAHeLZWuR2s7r5lIUVbTesQi4ayQSimIZGb_6DZWjBXka/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=djdWBdcl4ycJX%2B54G6%2FmhFHJDEo%3D",
        "alt": "윤동주시문학상",
        "width": 588,
        "height": 836
      }
    ],
    "links": [
      {
        "href": "https://yoondongju.yonsei.ac.kr/yoondongju_m/notice/ydj_6_1.do?mode=view&articleNo=218372#/list",
        "label": "https://yoondongju.yonsei.ac.kr/yoondongju_m/notice/ydj_6_1.do?mode=view&articleNo=218372#/list"
      }
    ]
  },
  {
    "id": 7,
    "slug": "7-자음과모음-2024-겨울",
    "title": "자음과모음 2024 겨울",
    "originalTitle": "《자음과모음》 2024 겨울",
    "date": "2025-06-17T06:19:48+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/7",
    "type": "게재",
    "summary": "자음과모음 2024.겨울 : 알라딘",
    "body": [
      "자음과모음 2024.겨울 : 알라딘",
      "63호를 맞는 계간 『자음과모음』겨울호에서는 ‘동료’에 관해 다룬다. 과거 한국문학은 공동체와 집단적 행위성을 통해 형성·발전해왔다. ‘동인’과 ‘동지’는 특정 목표를 공유하는 공동"
    ],
    "images": [
      {
        "src": "/assets/tistory/7-1.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/2sBNU/btsOB0DDiWS/AAAAAAAAAAAAAAAAAAAAAIyBdgJlmKvJ_npTIJkGk4ID1V1U68LbIA0HYf1ZyGf2/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=8UvIdqLBIa3iiusFyuNlIaoVc%2Bw%3D",
        "alt": "자음과모음 2024 겨울",
        "width": 500,
        "height": 706
      },
      {
        "src": "/assets/tistory/7-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/ptwqQ/btsQgNpZTZb/AAAAAAAAAAAAAAAAAAAAAIfEQ2GRHW9sEaNSpIMJDB8DndsHD3m4nZ8JMudqMt8e/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=YCqKhQwHSx5mxg9SmLdkUdQ0kKs%3D",
        "alt": "자음과모음 2024 겨울",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/7-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/r9jbm/btsOCkwFGrw/AAAAAAAAAAAAAAAAAAAAAHkbEB2OX2vkV9BQRAUUkwWJFCBludFCh5J1jtB8KUN7/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=h1kIPIZjM0CCNd3JA4QuGaWoAqM%3D",
        "alt": "자음과모음 2024 겨울",
        "width": 4032,
        "height": 4032
      },
      {
        "src": "/assets/tistory/7-4.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/wQep5/btsOEObrSXY/AAAAAAAAAAAAAAAAAAAAAOxr3v7l0u6Hhe1QOlXt-l0LQdg4fu86hJb6pVvjfQ6s/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=XUEpJmJQ60rUHzxc21d%2BZ6fl1Gw%3D",
        "alt": "자음과모음 2024 겨울",
        "width": 654,
        "height": 503
      },
      {
        "src": "/assets/tistory/7-5.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/ARBpf/btsOD4lCl71/AAAAAAAAAAAAAAAAAAAAALqn8bq3CRoCAXFE2770-PEbOpgIhF5pXA6lhyxFzbY1/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=d27GX3yCBnDP40RS2qPd5px2ryE%3D",
        "alt": "자음과모음 2024 겨울",
        "width": 4032,
        "height": 4032
      }
    ],
    "links": [
      {
        "href": "https://www.aladin.co.kr/shop/wproduct.aspx?start=short&ItemId=353241213",
        "label": "https://www.aladin.co.kr/shop/wproduct.aspx?start=short&ItemId=353241213"
      }
    ]
  },
  {
    "id": 8,
    "slug": "8-가람이병기청년시문학상",
    "title": "가람이병기청년시문학상",
    "originalTitle": "《가람이병기청년시문학상》",
    "date": "2025-06-17T06:19:42+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/8",
    "type": "수상",
    "summary": "제24회 가람이병기청년시문학상 대학부문 당선작 - 전북대학교 신문방송사",
    "body": [
      "제24회 가람이병기청년시문학상 대학부문 당선작 - 전북대학교 신문방송사",
      "이 계란을 삶는 동안 영원이 올 것입니다먼바다를 바라보던 네가 냄비의 뚜껑을 덮는다 나는 일어나 저 멀찍이수평선 너머로 낚싯대를 던져 넣었다 금세 끓기 시작하는 물희부연 증기가 뭉게뭉"
    ],
    "images": [
      {
        "src": "/assets/tistory/8-1.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bq2xue/btsOAWI70mi/AAAAAAAAAAAAAAAAAAAAAPkhwnLFCSbou0TEOdlH7XgREWIkG5W6sDpRiKgDjJii/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=cSTerYAVvG%2BXxvDoX2FbmwVhJx4%3D",
        "alt": "가람이병기청년시문학상",
        "width": 920,
        "height": 1279
      },
      {
        "src": "/assets/tistory/8-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/lu6pv/btsQhBoY1Pr/AAAAAAAAAAAAAAAAAAAAADlniYRfyRaohf25lebBf08JI_ysespHk0iRDXa_oNVG/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=p44jTo2%2BesdOv26VIPu%2FjSQ%2FKjY%3D",
        "alt": "가람이병기청년시문학상",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/8-3.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/blhwQW/btsOE630EOe/AAAAAAAAAAAAAAAAAAAAACTUMyhu2sOpI7R_y6zV4pYSfVOd2mNsR6R954j0PGFH/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=%2FhZW49hzwesVh%2BRsYgy4xijEbIs%3D",
        "alt": "가람이병기청년시문학상",
        "width": 1166,
        "height": 1542
      },
      {
        "src": "/assets/tistory/8-4.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/bSMz2g/btsOEQNPS5W/AAAAAAAAAAAAAAAAAAAAABWrVXWZ1hgkx6L5b1LfDGQSJfWH081u_0AkCRDbeWXb/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=bOwbRshr%2B779t4So5OrbGJErxQU%3D",
        "alt": "가람이병기청년시문학상",
        "width": 1162,
        "height": 1492
      },
      {
        "src": "/assets/tistory/8-5.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/bcTwK3/btsOCjqETb0/AAAAAAAAAAAAAAAAAAAAAOXtPS78llmMkPB-ct_CvOPEgHEg-YNkndVlXtriymZ-/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=OgmP6jL2lLHimMyYFpJ79r1UdFw%3D",
        "alt": "가람이병기청년시문학상",
        "width": 774,
        "height": 1456
      }
    ],
    "links": [
      {
        "href": "https://www.jbpresscenter.com/news/articleView.html?idxno=504929",
        "label": "https://www.jbpresscenter.com/news/articleView.html?idxno=504929"
      }
    ]
  },
  {
    "id": 9,
    "slug": "9-펄벅기념문학상",
    "title": "펄벅기념문학상",
    "originalTitle": "《펄벅기념문학상》",
    "date": "2025-06-17T06:19:37+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/9",
    "type": "수상",
    "summary": "펄벅기념문학상 관련 이미지와 링크를 이전한 기록입니다.",
    "body": [],
    "images": [
      {
        "src": "/assets/tistory/9-1.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bOvdET/btsOAuF8LLE/AAAAAAAAAAAAAAAAAAAAAL_jOQuxf_eer5S_CWdJc_3wlBxxwqgQQFc0n29H_4SD/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=EOljmLmmBGFbwzihIQgCuYs3S2Q%3D",
        "alt": "펄벅기념문학상",
        "width": 740,
        "height": 1074
      },
      {
        "src": "/assets/tistory/9-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/m0FJd/btsQhoi6ChF/AAAAAAAAAAAAAAAAAAAAAOiSExGPxeQLgURZc1rQWr5KXRqDtZ3Q_v7Q4cHb7M0R/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=Y0%2FYwTlXaqcZaoY92s4%2BVsu%2FvKo%3D",
        "alt": "펄벅기념문학상",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/9-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bVFZzk/btsQhwHXNuu/AAAAAAAAAAAAAAAAAAAAAN2TzzGMsUS_sFKF4ttCGuZDn4cg0ogOzNX2aBj8zxUU/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=DZxV%2FUt5yWn1qS5oaRRVQFe0OgY%3D",
        "alt": "펄벅기념문학상",
        "width": 1920,
        "height": 1080
      }
    ],
    "links": [
      {
        "href": "https://www.bcmuseum.or.kr/ko/boards/notice/572",
        "label": "https://www.bcmuseum.or.kr/ko/boards/notice/572"
      }
    ]
  },
  {
    "id": 10,
    "slug": "10-p-s-시와-징후-2023-겨울",
    "title": "P.S 시와 징후 2023 겨울",
    "originalTitle": "《P.S 시와 징후》 2023 겨울",
    "date": "2025-06-17T06:19:30+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/10",
    "type": "게재",
    "summary": "P.S 시와 징후 2023 겨울 관련 이미지와 링크를 이전한 기록입니다.",
    "body": [],
    "images": [
      {
        "src": "/assets/tistory/10-1.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/7K3hK/btsOCBi7OfY/AAAAAAAAAAAAAAAAAAAAAD5RANnCnICAPF0DQkZb7uK4Fbity_xv8s5ZnZ7GLsX7/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=UI5%2FgJFbndOjWi1HmBDoMkrTIwc%3D",
        "alt": "P.S 시와 징후 2023 겨울",
        "width": 1366,
        "height": 2040
      },
      {
        "src": "/assets/tistory/10-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/p0iMw/btsQjfrFkFl/AAAAAAAAAAAAAAAAAAAAADk6mcGnrBbGphdlCnEmeIcxiuC-_becEqq29Sh6FVTE/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=gejLBywWvk6OqqjXL9y1NUFRwa0%3D",
        "alt": "P.S 시와 징후 2023 겨울",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/10-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bYxeR3/btsOClh3WC7/AAAAAAAAAAAAAAAAAAAAALVpW6x4XrmMiqoCU6bmzLbnmcW-rbdIN0OL-4qQ5nLJ/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=rYnh%2F04CHBia1CGQIrHrTabVVvc%3D",
        "alt": "P.S 시와 징후 2023 겨울",
        "width": 2100,
        "height": 2100
      },
      {
        "src": "/assets/tistory/10-4.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/CF4t0/btsQiCHGKta/AAAAAAAAAAAAAAAAAAAAAG5SNHpF-B9mLgpRjHUc67cT3u--qhNO2Fj82OsK-In8/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=8zn9SLLD9AP3LmC3X8TXS7iSxzE%3D",
        "alt": "P.S 시와 징후 2023 겨울",
        "width": 1920,
        "height": 1080
      }
    ],
    "links": [
      {
        "href": "https://www.aladin.co.kr/m/mproduct.aspx?start=short&itemid=330083707",
        "label": "https://www.aladin.co.kr/m/mproduct.aspx?start=short&itemid=330083707"
      }
    ]
  },
  {
    "id": 11,
    "slug": "11-의혈창작문학상",
    "title": "의혈창작문학상",
    "originalTitle": "《의혈창작문학상》",
    "date": "2025-06-17T06:19:24+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/11",
    "type": "수상",
    "summary": "제33회 의혈창작문학상: 시 부문",
    "body": [
      "제33회 의혈창작문학상: 시 부문",
      "가자 지구우리 거실에서 TV를 보고 있었다. 먼 곳에서는 전쟁이 한창이었다. 흰 벽 앞엔 멀겋게 선 팔레스타인 모녀. 소가죽 소파에 파묻힌 채 그걸 보던 너와 나. 화면 하단으로 자막은 또 흐른"
    ],
    "images": [
      {
        "src": "/assets/tistory/11-1.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bLtvW7/btsOBz0OxVl/AAAAAAAAAAAAAAAAAAAAAEA3Z3IRkIPtCyG-dTUyJ69KNDlkzNKXjhMsT4g-axOe/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=beOf7%2BmcMhI5%2BtRyfwhay786nNw%3D",
        "alt": "의혈창작문학상",
        "width": 900,
        "height": 1272
      },
      {
        "src": "/assets/tistory/11-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/cJSCJN/btsQiWslk2D/AAAAAAAAAAAAAAAAAAAAANQrH9ltSboMaRwy1s8RkD6Fiejizbq94zeEJ0W0b1_5/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=WRug4YqJJ6yQOnx6acKJe4QraP8%3D",
        "alt": "의혈창작문학상",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/11-3.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/qleE6/btsOECB8Lf1/AAAAAAAAAAAAAAAAAAAAALzlZiRLDxJgjuuMvY-ky6AcU1tNwMuE2IXKnJMZtUI_/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=d3BRGWRdQLnSkt%2FPJqQeYtOEEcU%3D",
        "alt": "의혈창작문학상",
        "width": 1184,
        "height": 1164
      },
      {
        "src": "/assets/tistory/11-4.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/bjRO7a/btsOEkhtF4D/AAAAAAAAAAAAAAAAAAAAAFZLPrmrU-PE1ar5QdM4JZNFIG7AJC53_76tXF5v0_s2/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=CUjBvJs6zJRv3BZO9lWpeb7DEqU%3D",
        "alt": "의혈창작문학상",
        "width": 1172,
        "height": 1558
      },
      {
        "src": "/assets/tistory/11-5.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/cGB5Jf/btsOCx97nTr/AAAAAAAAAAAAAAAAAAAAALTRpQbkDMOJxmmCxy2HBzWbg6fR1JLlPno8MSzBVwas/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=zq4ox1t4fSwnu8aJp9nbpIv46Gg%3D",
        "alt": "의혈창작문학상",
        "width": 1190,
        "height": 1778
      }
    ],
    "links": [
      {
        "href": "https://news.cauon.net/news/articleView.html?idxno=40158",
        "label": "https://news.cauon.net/news/articleView.html?idxno=40158"
      }
    ]
  },
  {
    "id": 12,
    "slug": "12-황해문화-2023-겨울",
    "title": "황해문화 2023 겨울",
    "originalTitle": "《황해문화》 2023 겨울",
    "date": "2025-06-17T06:19:16+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/12",
    "type": "게재",
    "summary": "황해문화 2023 겨울 관련 이미지와 링크를 이전한 기록입니다.",
    "body": [],
    "images": [
      {
        "src": "/assets/tistory/12-1.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/dv8GHO/btsOBS6XcHK/AAAAAAAAAAAAAAAAAAAAAOuWMiRfZM_ji_FTle81lMq5PtQCVApOkMGasx3fJrim/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=tbXc%2FoGR05Wytw%2FM1RifmfNN038%3D",
        "alt": "황해문화 2023 겨울",
        "width": 1436,
        "height": 2040
      },
      {
        "src": "/assets/tistory/12-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bfhJJY/btsQh2GDYln/AAAAAAAAAAAAAAAAAAAAADX1UFtRBB0yHpzMM4KpnNl04bLmiCXpiZvwbsxHWiiE/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=jubVm7Nm2aNOAwXPE1C%2BQeAHlaI%3D",
        "alt": "황해문화 2023 겨울",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/12-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/6r5hL/btsQhmS82C7/AAAAAAAAAAAAAAAAAAAAANLdaiMuf9rTVojHKnqn0fMEUuRfhdfAQ0VxqMRg7TEP/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=2WmgGPQu5%2BYB5q%2FRTYd5j%2F583LY%3D",
        "alt": "황해문화 2023 겨울",
        "width": 1920,
        "height": 1080
      }
    ],
    "links": [
      {
        "href": "https://www.aladin.co.kr/m/mproduct.aspx?start=short&itemid=329519405",
        "label": "https://www.aladin.co.kr/m/mproduct.aspx?start=short&itemid=329519405"
      }
    ]
  },
  {
    "id": 13,
    "slug": "13-파란-2023-가을",
    "title": "파란 2023 가을",
    "originalTitle": "《파란》 2023 가을",
    "date": "2025-06-17T06:19:03+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/13",
    "type": "게재",
    "summary": "파란 2023 가을 관련 이미지와 링크를 이전한 기록입니다.",
    "body": [],
    "images": [
      {
        "src": "/assets/tistory/13-1.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/bkhHuk/btsOCJ83JgO/AAAAAAAAAAAAAAAAAAAAAPV7eRctbR-X9anVEwZhpX9nOvq3JkoldYSOuEps0ugK/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=X%2Br%2BN6TopSsyBWvJZbEfFkGtWgs%3D",
        "alt": "파란 2023 가을",
        "width": 1404,
        "height": 2038
      },
      {
        "src": "/assets/tistory/13-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bmjuXW/btsQhScYZC3/AAAAAAAAAAAAAAAAAAAAAMIwBTSzJodaniVT1Poiq36mVEIiaJdSXQmjUhaKMTQL/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=Q6EuWHYbBLM8p%2FIcGtAH3jJNeHA%3D",
        "alt": "파란 2023 가을",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/13-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/MnJsc/btsOE4LTdwe/AAAAAAAAAAAAAAAAAAAAAOvIje3xNmPqC7WTQng5nQL9fBRHrMRVoV3zqiOLQzyD/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=7qghgjEudXU0wKiXoWHraPEMKmg%3D",
        "alt": "파란 2023 가을",
        "width": 4032,
        "height": 4032
      },
      {
        "src": "/assets/tistory/13-4.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bdyimL/btsODHEslvL/AAAAAAAAAAAAAAAAAAAAALngXIW8Zz_gIe0ISCTN6v9lWDiD42kGaLnRFHVFUOrs/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=9iu5ID9eiCO4ZFV3N2JAy04ahtc%3D",
        "alt": "파란 2023 가을",
        "width": 2100,
        "height": 2100
      }
    ],
    "links": [
      {
        "href": "https://www.aladin.co.kr/m/mproduct.aspx?start=short&itemid=325736666",
        "label": "https://www.aladin.co.kr/m/mproduct.aspx?start=short&itemid=325736666"
      }
    ]
  },
  {
    "id": 14,
    "slug": "14-기아-인스파이어링-문학상",
    "title": "기아 인스파이어링 문학상",
    "originalTitle": "《기아 인스파이어링 문학상》",
    "date": "2025-06-17T06:18:57+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/14",
    "type": "수상",
    "summary": "기아 인스파이어링 문학상 관련 이미지와 링크를 이전한 기록입니다.",
    "body": [],
    "images": [
      {
        "src": "/assets/tistory/14-1.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/XfrmF/btsOBZSgyX9/AAAAAAAAAAAAAAAAAAAAAJmy6EsFQ8Q2KjVoBSioUqL5A7yMwhKiImxQHE66Du7_/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=sRuhRqPhDMihrFFfz1LyR3CKbV0%3D",
        "alt": "기아 인스파이어링 문학상",
        "width": 400,
        "height": 565
      },
      {
        "src": "/assets/tistory/14-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/Tz2hD/btsOD04ziR8/AAAAAAAAAAAAAAAAAAAAANQfvu_HIUX9uHbJOmoJWDkZTKtIcy8gZ5Laz3FYhGLU/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=cBAvT3u4hYhMEnEnbeBZ%2FHn%2F%2FS4%3D",
        "alt": "기아 인스파이어링 문학상",
        "width": 3024,
        "height": 4032
      }
    ],
    "links": []
  },
  {
    "id": 15,
    "slug": "15-시산맥-2023-여름",
    "title": "시산맥 2023 여름",
    "originalTitle": "《시산맥》 2023 여름",
    "date": "2025-06-17T06:18:52+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/15",
    "type": "게재",
    "summary": "시산맥 2023 여름 관련 이미지와 링크를 이전한 기록입니다.",
    "body": [],
    "images": [
      {
        "src": "/assets/tistory/15-1.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/97Src/btsOBCQxDju/AAAAAAAAAAAAAAAAAAAAAHjf3YKzzJ7NrX86nmVTWJoaY_-OMHU4eBsjjMDTjAfn/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=Aehro4TUdPi0FZUJRDg54D3aGYY%3D",
        "alt": "시산맥 2023 여름",
        "width": 1344,
        "height": 2042
      },
      {
        "src": "/assets/tistory/15-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/VXWWq/btsQhb5dnwh/AAAAAAAAAAAAAAAAAAAAADydPWSCPiHqi0F-JRyBhQlfO32JAx6Lou-mnaR2aGwY/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=DLJN01eKMHrz%2BFt3e3iFiH0P9yc%3D",
        "alt": "시산맥 2023 여름",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/15-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/nURqK/btsOD0XNrz6/AAAAAAAAAAAAAAAAAAAAAIPY3T18XB_mYQ_Zz7I_8Qnby41niWUX9zvR0VHC69ON/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=Huv6UDoUsa%2Be2BZ1vn%2Ft4%2F6f93I%3D",
        "alt": "시산맥 2023 여름",
        "width": 4032,
        "height": 4032
      },
      {
        "src": "/assets/tistory/15-4.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/WYHna/btsOECPG7Eo/AAAAAAAAAAAAAAAAAAAAAIEuRPzEC51Bc93BVvN0xhvsUImGrEcKI72C0rYaYuVd/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=yewWTu8KmOiA2pjqYIvbQllIs7g%3D",
        "alt": "시산맥 2023 여름",
        "width": 4032,
        "height": 4032
      }
    ],
    "links": [
      {
        "href": "https://www.aladin.co.kr/shop/wproduct.aspx?start=short&ItemId=317060561",
        "label": "https://www.aladin.co.kr/shop/wproduct.aspx?start=short&ItemId=317060561"
      }
    ]
  },
  {
    "id": 16,
    "slug": "16-공정한시인의사회-2023-4월",
    "title": "공정한시인의사회 2023 4월",
    "originalTitle": "《공정한시인의사회》 2023 4월",
    "date": "2025-06-17T06:18:44+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/16",
    "type": "게재",
    "summary": "공정한시인의사회::공시사 - 호흡은 작고 둥글지",
    "body": [
      "공정한시인의사회::공시사 - 호흡은 작고 둥글지",
      "호흡은 작고 둥글지 호루라기야, 적요의 놋그릇 속 은빛 호루라기야 참았던 숨을 크게 몰아쉬었다가 단 한순간 뱉어내어 볼게 그럼 소리를 내어주겠니? 휘, 너를 양호실 침대 위에 포근히 뉘어"
    ],
    "images": [
      {
        "src": "/assets/tistory/16-1.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/c7yqin/btsOA4z9djR/AAAAAAAAAAAAAAAAAAAAABtxfIJomYlVdm7AaCVy3Lnowkbz1ovWEVdhUGHpx-EM/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=cTi7PznYJU2PjloQAY2hyMerPnE%3D",
        "alt": "공정한시인의사회 2023 4월",
        "width": 1090,
        "height": 946
      },
      {
        "src": "/assets/tistory/16-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/D1Hru/btsQhhK3yap/AAAAAAAAAAAAAAAAAAAAAJpIbvDVp87J2Z8q1MSU9_8jmUmiwp-mJKFPEGYypBOW/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=nb6tt6rAouFsFodi%2Bf9irD6teko%3D",
        "alt": "공정한시인의사회 2023 4월",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/16-3.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/HQYTQ/btsOCPWXCua/AAAAAAAAAAAAAAAAAAAAAHdOih_grqPcc1VuFjPzgs6no99MBrtgtAeZXl0ytN87/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=Ec2Ksc4OdQMdIRqUxtkENO4pcgA%3D",
        "alt": "공정한시인의사회 2023 4월",
        "width": 1764,
        "height": 1826
      }
    ],
    "links": [
      {
        "href": "https://gongsisa.com/board_wdNc92/13840",
        "label": "https://gongsisa.com/board_wdNc92/13840"
      }
    ]
  },
  {
    "id": 18,
    "slug": "18-가글-2호",
    "title": "가글 2호",
    "originalTitle": "《가글》 2호",
    "date": "2025-06-17T06:18:36+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/18",
    "type": "게재",
    "summary": "가글 2호 관련 이미지와 링크를 이전한 기록입니다.",
    "body": [],
    "images": [
      {
        "src": "/assets/tistory/18-1.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/cMtqGh/btsOAIRPosN/AAAAAAAAAAAAAAAAAAAAAGS9B3b5aQHiYlF348cVlkY90qbIkmeXyg6a8VUOeGNI/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=BI01OcKVQyLkOxhG7XNzwn%2B5Rz0%3D",
        "alt": "가글 2호",
        "width": 984,
        "height": 1568
      },
      {
        "src": "/assets/tistory/18-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/DYrCA/btsQiMiZ0fq/AAAAAAAAAAAAAAAAAAAAAP7LMFYN81oECok_mxodhVwMIWbHdLwFXXq1RvBLrDW5/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=JtFCdDbEG%2FD%2F1hiarojvci7PZyk%3D",
        "alt": "가글 2호",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/18-3.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/dPyx3U/btsOClvCqxR/AAAAAAAAAAAAAAAAAAAAAGp4x3y_AMnJlDcJLl3-hqUnJyzOunx_t0GhyNtIJThA/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=FSHaLWkgG53zlBhFlweO%2B4u9iiU%3D",
        "alt": "가글 2호",
        "width": 914,
        "height": 1230
      },
      {
        "src": "/assets/tistory/18-4.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/JUCcG/btsQgfUwL1x/AAAAAAAAAAAAAAAAAAAAAMztjgkwdyCofReRTd1PNPQB_GXVW0QqYp-Oa66ai5OY/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=I1gODfaVD9%2BCxcE0J0qkfMWZc4k%3D",
        "alt": "가글 2호",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/18-5.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/cTd6ep/btsQguqzUoD/AAAAAAAAAAAAAAAAAAAAAOoND15QlWV9yAZ6U4-XlKAdLzulLbNkZx-qZuInZc_a/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=Af0QQFdtyDBLhLRLlUPcnismbY0%3D",
        "alt": "가글 2호",
        "width": 1283,
        "height": 1277
      },
      {
        "src": "/assets/tistory/18-6.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/dEcmoN/btsQfxgS7dv/AAAAAAAAAAAAAAAAAAAAANknX8jsNxY3pv90Ftt6Y8Ox-rdk-qtjWVv6H6WR_Bie/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=2oAlTkW43GSAX%2FdPvoBpYcvNk1A%3D",
        "alt": "가글 2호",
        "width": 1284,
        "height": 1267
      },
      {
        "src": "/assets/tistory/18-7.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/cMyLDn/btsQhvoMyQJ/AAAAAAAAAAAAAAAAAAAAAOxICoC_71RsJMqQMbMrW_cxj4fNYK1ULRT4E7BIoHWD/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=fSkEDCL%2BY4yx8yGlveZVJcUK2xs%3D",
        "alt": "가글 2호",
        "width": 1284,
        "height": 1279
      },
      {
        "src": "/assets/tistory/18-8.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bgwHnq/btsQiWTsTIV/AAAAAAAAAAAAAAAAAAAAAFKb30w0fNKn2i4D4ZWqMwEkbI0OwgC_jWITH41C8-Ov/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=G%2BX1Y12CQyrAeBCAD9nw247%2B1qY%3D",
        "alt": "가글 2호",
        "width": 1284,
        "height": 1270
      },
      {
        "src": "/assets/tistory/18-9.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bWZhKh/btsQjcPi4nD/AAAAAAAAAAAAAAAAAAAAAFfD5OC9PNgTTvCPtLTIEDkNtfOg8vkprZMobPKkkrat/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=igBkUn7oJ17VG7sqcoaXFHheo8s%3D",
        "alt": "가글 2호",
        "width": 1284,
        "height": 1286
      },
      {
        "src": "/assets/tistory/18-10.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/kKWye/btsQhxfQMzu/AAAAAAAAAAAAAAAAAAAAANGxq7oyY9JUz2KWJOOqGR6NSwX0sRV0omJr6YEIzW2t/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=g7LUXKfuMt3mTHpWAc%2F9OwMzzcc%3D",
        "alt": "가글 2호",
        "width": 1284,
        "height": 1270
      },
      {
        "src": "/assets/tistory/18-11.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bulcSG/btsQg8m9i3d/AAAAAAAAAAAAAAAAAAAAAKWIJ4ssPVyvHwSVRxKkbTZDm5Kr1tKLWdRripF4e5Q1/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=L25sqUh46yhmpgNMGO8MU42i%2FhA%3D",
        "alt": "가글 2호",
        "width": 1284,
        "height": 1269
      },
      {
        "src": "/assets/tistory/18-12.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/zjwXF/btsQhxmEk8T/AAAAAAAAAAAAAAAAAAAAAMK7hVaEzFce8PX3PCkGZYF6dAfMPTS_8nddeH2FmWhy/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=tR6D3ZOOLQKuiVG75nW7Gt06r1A%3D",
        "alt": "가글 2호",
        "width": 1284,
        "height": 1269
      },
      {
        "src": "/assets/tistory/18-13.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/8LaIy/btsQgfNPo2E/AAAAAAAAAAAAAAAAAAAAAJqLjc2RDnzUi0EOzxWC2NaPYt5WalpOKyUvFTMFZ80Z/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=%2FWkzQpQvOeLKrnzPZ%2FPPqeQQYZA%3D",
        "alt": "가글 2호",
        "width": 1284,
        "height": 1286
      },
      {
        "src": "/assets/tistory/18-14.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/dbN3Zv/btsOEPnSkEd/AAAAAAAAAAAAAAAAAAAAAPTAqioqzuTNPxvv9I0UxkiBrHUp7ByGGih3ONwX9Ui4/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=56bl6C8byQZQAWsralgDxT5Erng%3D",
        "alt": "가글 2호",
        "width": 1080,
        "height": 1080
      }
    ],
    "links": [
      {
        "href": "https://tumblbug.com/rhdvh/story",
        "label": "https://tumblbug.com/rhdvh/story"
      }
    ]
  },
  {
    "id": 19,
    "slug": "19-무트로-vol-3",
    "title": "무트로 VOL.3",
    "originalTitle": "《무트로》 VOL.3",
    "date": "2025-06-17T06:18:31+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/19",
    "type": "게재",
    "summary": "독립문예지 무트로 VOL.3 ㅡ 헤매고 헤엄치는 밤",
    "body": [
      "독립문예지 무트로 VOL.3 ㅡ 헤매고 헤엄치는 밤",
      "모두에게 무해한 문예지, MUTO VOL.3ㅡ'헤매고 헤엄치는 밤' 지금 시작합니다."
    ],
    "images": [
      {
        "src": "/assets/tistory/19-1.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/ddKDcn/btsOAWoXvAa/AAAAAAAAAAAAAAAAAAAAAGYEa4g8pB1UCMrzY8SQyv8Z4nXMkZbY0RF5e4S6QuBv/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=1aVh2P7u9bjU6p1ZNs0ElGMJFfg%3D",
        "alt": "무트로 VOL.3",
        "width": 894,
        "height": 1266
      },
      {
        "src": "/assets/tistory/19-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bcgO47/btsQfyNDdwU/AAAAAAAAAAAAAAAAAAAAAHTYyDBVNWca51AUJQ9cnmh7C_VjpoLLcgGCVJUWUUrD/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=gXmSCs9Dh2cqGVwDWyKD2EbLJTA%3D",
        "alt": "무트로 VOL.3",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/19-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/Dp74s/btsODm8ns8G/AAAAAAAAAAAAAAAAAAAAAPaubSTHghBrZkSc1YKUKP1Ynj8joZxUsXaqvNet0N-2/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=ypyioGJTzwzbkNKgHboVCdes7QU%3D",
        "alt": "무트로 VOL.3",
        "width": 4032,
        "height": 4032
      },
      {
        "src": "/assets/tistory/19-4.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/Jzg7L/btsQfGdPPIZ/AAAAAAAAAAAAAAAAAAAAALMXTdDFpsGwy_8ayUmLE3nQwoPwo88230l-1rR0oNGT/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=zo2wHx8kV89ZxO6M9HWqjz%2Bfa4k%3D",
        "alt": "무트로 VOL.3",
        "width": 1920,
        "height": 1080
      }
    ],
    "links": [
      {
        "href": "https://tumblbug.com/mutro3",
        "label": "https://tumblbug.com/mutro3"
      }
    ]
  },
  {
    "id": 20,
    "slug": "20-주머니시-5th",
    "title": "주머니시 5th",
    "originalTitle": "《주머니시》 5th",
    "date": "2025-06-17T06:18:26+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/20",
    "type": "게재",
    "summary": "휘어진 숲길을 오래도록 걸었다 | 김서현 - 교보문고",
    "body": [
      "휘어진 숲길을 오래도록 걸었다 | 김서현 - 교보문고",
      "휘어진 숲길을 오래도록 걸었다 | 주머니시는 사람들이 문학을 가볍게 소비하고 공유할 수 있게 하고자 기획한 서적입니다. 담뱃갑 형태의 패키지에 20개의 작품으로 구성된 주머니시는 문학을"
    ],
    "images": [
      {
        "src": "/assets/tistory/20-1.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/b5qeHB/btsOCkB9D5t/AAAAAAAAAAAAAAAAAAAAAEn7jXPJcRo3vO4ghk2dzgP2KuaOfxyZ9vVoOXuOk8xh/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=BCdnmE0jxWGIxic6jRM3sjMRxeQ%3D",
        "alt": "주머니시 5th",
        "width": 458,
        "height": 811
      },
      {
        "src": "/assets/tistory/20-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/Z4ikE/btsQgeg6qYF/AAAAAAAAAAAAAAAAAAAAAJWV5_MvruhSATW2tMOf80ix5MAG1SlnSs0E5fMjTK9X/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=zDrOpQ546ei0JOkx%2B6frRxNQBEo%3D",
        "alt": "주머니시 5th",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/20-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bFVzGF/btsQg9GkWpj/AAAAAAAAAAAAAAAAAAAAAE0lvqc58HMU_EzemjUqtfw0raJyglMQpHfSDiBhShYJ/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=iSutYjYr1mOdHiptfRQofLH2AwM%3D",
        "alt": "주머니시 5th",
        "width": 1920,
        "height": 1080
      }
    ],
    "links": [
      {
        "href": "https://product.kyobobook.co.kr/detail/S000203156852",
        "label": "https://product.kyobobook.co.kr/detail/S000203156852"
      }
    ]
  },
  {
    "id": 21,
    "slug": "21-경남청년문학상",
    "title": "경남청년문학상",
    "originalTitle": "《경남청년문학상》",
    "date": "2025-06-17T06:18:20+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/21",
    "type": "수상",
    "summary": "경남청년문학상 관련 이미지와 링크를 이전한 기록입니다.",
    "body": [],
    "images": [
      {
        "src": "/assets/tistory/21-1.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/MJma3/btsOA1DO1rN/AAAAAAAAAAAAAAAAAAAAAIMyUjvXh-QjbitmbGlaolC5YWdSnow4ku81sulcw7Vm/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=fWjZlHnpzNgwc93EsdXXHQGHU4Q%3D",
        "alt": "경남청년문학상",
        "width": 600,
        "height": 847
      },
      {
        "src": "/assets/tistory/21-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/d1wfEL/btsQjDMFS25/AAAAAAAAAAAAAAAAAAAAAL8mJc-z-WWppKA_LnAjHHrmC016JOijA-uKQsWAqLL8/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=AhvzImTvAXU3uhE1K2ZiaJk%2FqBs%3D",
        "alt": "경남청년문학상",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/21-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/cp0HAD/btsOCSlQ1m0/AAAAAAAAAAAAAAAAAAAAAAYZS4SAMVDo0HfGPdE96t_EpQAQI3lvFVFthcTqEc3D/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=rUC5pxO8vtSXyqUE1Unl68uXdAM%3D",
        "alt": "경남청년문학상",
        "width": 4032,
        "height": 3024
      },
      {
        "src": "/assets/tistory/21-4.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bdiM8e/btsQfBjgLyG/AAAAAAAAAAAAAAAAAAAAAGudKtWCPu2Q8Z9Is_FOv8LAoWFf_spfZb9w-53d8qU4/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=zsu63A6QHQnGMxHGuLc7Rd%2FWhVg%3D",
        "alt": "경남청년문학상",
        "width": 1920,
        "height": 1080
      }
    ],
    "links": []
  },
  {
    "id": 22,
    "slug": "22-전주동네책방문학상",
    "title": "전주동네책방문학상",
    "originalTitle": "《전주동네책방문학상》",
    "date": "2025-06-17T06:18:10+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/22",
    "type": "수상",
    "summary": "전주동네책방문학상 관련 이미지와 링크를 이전한 기록입니다.",
    "body": [],
    "images": [
      {
        "src": "/assets/tistory/22-1.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/bH4gWR/btsOBgtCpmF/AAAAAAAAAAAAAAAAAAAAADgIjInmQpsBGqnShfl-2j_MjBcJDStVAnzyw5wNGTjl/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=Intehnn3fdQ1rNqPDkb3y%2BMUQeg%3D",
        "alt": "전주동네책방문학상",
        "width": 1240,
        "height": 1753
      },
      {
        "src": "/assets/tistory/22-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bd17Oj/btsQfGkvz0v/AAAAAAAAAAAAAAAAAAAAAHnHPYtmvIL4oJkxSOWdlP0IAN2WshnXSvkuBSWGG9ZT/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=3pYaIMTv6oCll7EkY86F6HqkaQs%3D",
        "alt": "전주동네책방문학상",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/22-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bkZ3Jb/btsOEAEjtwl/AAAAAAAAAAAAAAAAAAAAAJSF1F0M4HmdYhUjU3n6bRYEsQ6diQcZGd9brejzo0Xy/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=wf%2BLP4EouzElYUIJa%2BrcpCurMu4%3D",
        "alt": "전주동네책방문학상",
        "width": 1240,
        "height": 1240
      },
      {
        "src": "/assets/tistory/22-4.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/dqbPE9/btsQimdTUCT/AAAAAAAAAAAAAAAAAAAAADldi97nY0m0Gx7DNdzFBzdXNUx6esFP8IPyLBg0cgCD/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=qyf5Tjfu7%2FxuPzgGjJvfcaT4MKQ%3D",
        "alt": "전주동네책방문학상",
        "width": 1920,
        "height": 1080
      }
    ],
    "links": [
      {
        "href": "https://tumblbug.com/jeonjubookstore2?ref=프로필%2F올린프로젝트",
        "label": "https://tumblbug.com/jeonjubookstore2?ref=프로필%2F올린프로젝트"
      }
    ]
  },
  {
    "id": 24,
    "slug": "24-같이-가는-기분-2022-봄",
    "title": "같이 가는 기분 2022 봄",
    "originalTitle": "《같이 가는 기분》 2022 봄",
    "date": "2025-06-17T06:18:00+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/24",
    "type": "게재",
    "summary": "같이 가는 기분 2022 봄 관련 이미지와 링크를 이전한 기록입니다.",
    "body": [],
    "images": [
      {
        "src": "/assets/tistory/24-1.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/b8SV18/btsOBoMvhFg/AAAAAAAAAAAAAAAAAAAAAECoXEwt8z-85S2dppUqvfR9oHTVbCqvYqI7nta-Urzd/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=QwWSHYHmCCwO2gmWaSCBQr5Nun4%3D",
        "alt": "같이 가는 기분 2022 봄",
        "width": 1744,
        "height": 1742
      },
      {
        "src": "/assets/tistory/24-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/byQoQO/btsQiL5xNgy/AAAAAAAAAAAAAAAAAAAAAG_9KFX64SwZmbGDHMNH6jB2bckjKwGAMk-cd1sR9smO/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=A6XYCfxXTfV4SKqa%2BbR9h0Lcmto%3D",
        "alt": "같이 가는 기분 2022 봄",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/24-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/chIlLq/btsQiVUySSU/AAAAAAAAAAAAAAAAAAAAAD_bG-olCDX-KKbSf442EO6qLkMkV1eCEyCrtJiJvbd9/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=WcMS%2FinH4VV36uu0fFYWxJSTM30%3D",
        "alt": "같이 가는 기분 2022 봄",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/24-4.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/dpkTYD/btsOCjXwDDA/AAAAAAAAAAAAAAAAAAAAANC5YT5h0EJwn2kmBdY6VDaxnCXMA-W1-lqtH6d16SJC/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=aW8o%2Ba3f7o%2BpYR5SMiDWpBO695w%3D",
        "alt": "같이 가는 기분 2022 봄",
        "width": 1778,
        "height": 1996
      }
    ],
    "links": [
      {
        "href": "https://m.blog.naver.com/webzineseein/222645750182",
        "label": "https://m.blog.naver.com/webzineseein/222645750182"
      }
    ]
  },
  {
    "id": 25,
    "slug": "25-계명문학상",
    "title": "계명문학상",
    "originalTitle": "《계명문학상》",
    "date": "2025-06-17T06:17:43+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/25",
    "type": "수상",
    "summary": "[계명대 통합 뉴스 포털] 제41회 계명문학상 수상작 및 심사위원 발표",
    "body": [
      "[계명대 통합 뉴스 포털] 제41회 계명문학상 수상작 및 심사위원 발표",
      "제41회 계명문학상 수상작 및 심사위원 발표 제41회 계명문학상의 부문별 당선작과 심사위원을 알려드립니다. 대학문학상 사상 최고의 권위와 최대의 규모로 대학문단을 이끌고 있는 계명문학"
    ],
    "images": [
      {
        "src": "/assets/tistory/25-1.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/chMLWv/btsOAWvJrwk/AAAAAAAAAAAAAAAAAAAAALUMNrF4fCvTOBjr2SGrr3fvsrAkOYcj4QmXTf2YdDx1/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=1cgEgeDdqDq7mR5SRsQ62BR3O4s%3D",
        "alt": "계명문학상",
        "width": 680,
        "height": 872
      },
      {
        "src": "/assets/tistory/25-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/dCLL27/btsQjzjcZ3y/AAAAAAAAAAAAAAAAAAAAAMsK7x-uD3aOq4UMYMvBH23VeTzwqWTdwyFvxRBIeWsx/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=VJFOQeEYcmSv3bl3GW0IeiF0YTE%3D",
        "alt": "계명문학상",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/25-3.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/3aOHU/btsOEBDePHF/AAAAAAAAAAAAAAAAAAAAAAz48MkqokUOcCJhv6GUhZXKSvQjNp4rWHJfAZ0bUYfK/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=fj8DTCZWGGgVqu5ghxj1l3p%2FuRI%3D",
        "alt": "계명문학상",
        "width": 1224,
        "height": 1652
      },
      {
        "src": "/assets/tistory/25-4.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/lnP3Q/btsOB1qhquU/AAAAAAAAAAAAAAAAAAAAAG-oTkPPSx0h7zDZhzZHTlxju4PZc5L3IrLovYuxGsW9/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=23IHhNQXW3geTNNk22xAwIr0xoo%3D",
        "alt": "계명문학상",
        "width": 1246,
        "height": 770
      },
      {
        "src": "/assets/tistory/25-5.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/dCZPAh/btsOEkuVxJd/AAAAAAAAAAAAAAAAAAAAACNtbJM_Y12zo1A4WoiV0KRH5S1OhPsNbjNQbA1W8sFA/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=efpm5FPbVoBscYfCFwTJTVlHZt8%3D",
        "alt": "계명문학상",
        "width": 1246,
        "height": 1396
      }
    ],
    "links": [
      {
        "href": "http://www.gokmu.com/mobile/bbs.html?mode=view&bbs_code=comm14&cate=&page=&search=&keyword=&type=&bbs_no=228133",
        "label": "http://www.gokmu.com/mobile/bbs.html?mode=view&bbs_code=comm14&cate=&page=&search=&keyword=&type=&bbs_no=228133"
      }
    ]
  },
  {
    "id": 26,
    "slug": "26-의정부전국문학공모전",
    "title": "의정부전국문학공모전",
    "originalTitle": "《의정부전국문학공모전》",
    "date": "2025-06-17T06:17:35+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/26",
    "type": "수상",
    "summary": "의정부전국문학공모전 관련 이미지와 링크를 이전한 기록입니다.",
    "body": [],
    "images": [
      {
        "src": "/assets/tistory/26-1.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/dzF5TA/btsOBiycJCY/AAAAAAAAAAAAAAAAAAAAAPmP4tn6AzWZ2wPE2m42ECzgdVUQ_oocoSXCY9EfPMTG/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=zOKJCBkSqDbBcHuEeksWMBosCZE%3D",
        "alt": "의정부전국문학공모전",
        "width": 979,
        "height": 1382
      },
      {
        "src": "/assets/tistory/26-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bLmiKa/btsQfHwZ74e/AAAAAAAAAAAAAAAAAAAAAEdlNC8YkVlqTjwFkYfTjxcOvX6uKn2sIiptCBrJBrF5/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=PeLUMNn5peB5O2P4CSOD%2FLOTUfM%3D",
        "alt": "의정부전국문학공모전",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/26-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/cj8asf/btsQiyL8mJv/AAAAAAAAAAAAAAAAAAAAAF_JBs3EjDQbgpegHFPLScsHqYkCHMlCQk6YCYdrjClf/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=Ffa5YW7BNDN7%2FTuRxAxQ4fkEKpc%3D",
        "alt": "의정부전국문학공모전",
        "width": 1920,
        "height": 1080
      }
    ],
    "links": []
  },
  {
    "id": 32,
    "slug": "32-완산도서관-자작사색-전문작가-집필실-입주작가",
    "title": "완산도서관 자작사색(전문작가 집필실) 입주작가",
    "originalTitle": "《완산도서관 자작사색(전문작가 집필실) 입주작가》",
    "date": "2025-06-17T06:16:49+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/32",
    "type": "입주",
    "summary": "완산도서관 자작사색(전문작가 집필실) 입주작가 관련 이미지와 링크를 이전한 기록입니다.",
    "body": [],
    "images": [
      {
        "src": "/assets/tistory/32-1.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bR5MgY/btsOEW8c0Ti/AAAAAAAAAAAAAAAAAAAAAALUOBbQ6iSvRq64yPiC_3bjcHowby2cJniVu4nD1sAc/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=sV%2Fab%2BgFD4YTennGKWZVRNjHFTk%3D",
        "alt": "완산도서관 자작사색(전문작가 집필실) 입주작가",
        "width": 1080,
        "height": 1080
      },
      {
        "src": "/assets/tistory/32-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/lhU6v/btsQgf79NUI/AAAAAAAAAAAAAAAAAAAAAEH_bILVnUzMWD5-_N5bxINVOwN9Ag8pRYypaqGc3uS8/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=FV7UemHIuh2bd8t5Xn3UqrtGqZA%3D",
        "alt": "완산도서관 자작사색(전문작가 집필실) 입주작가",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/32-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/wv9Kf/btsODMMc92T/AAAAAAAAAAAAAAAAAAAAAErKrmASnW0dKLg9GxeaClh_ExOIiIB_xGZaUJ6WwTyy/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=AZ9OO4AzAmPC9SO8%2BUFKsQOTsZE%3D",
        "alt": "완산도서관 자작사색(전문작가 집필실) 입주작가",
        "width": 4032,
        "height": 3024
      },
      {
        "src": "/assets/tistory/32-4.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bdJ90g/btsOCxoJdA8/AAAAAAAAAAAAAAAAAAAAAPjzliJSvZq4RB_R3GlHoYin-iB-5b0mVRhoU0BkAAgR/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=Mt9FvzekDvUi8D40hZpGW4ieKhE%3D",
        "alt": "완산도서관 자작사색(전문작가 집필실) 입주작가",
        "width": 4032,
        "height": 3024
      },
      {
        "src": "/assets/tistory/32-5.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bOi53q/btsOE6QttdO/AAAAAAAAAAAAAAAAAAAAAOLBfzhFkW5U_drhEx2Bl7mAwxcB0d2Y_WzK-36h01DT/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=s1tqlkdbQFnXTq1xvT42dybOEX8%3D",
        "alt": "완산도서관 자작사색(전문작가 집필실) 입주작가",
        "width": 4032,
        "height": 3024
      },
      {
        "src": "/assets/tistory/32-6.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/c37QdA/btsODJopy5E/AAAAAAAAAAAAAAAAAAAAABPt33bYcdY0NQiUTbhHIy8E3VWSOMsWkW4oz3PuH36r/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=pTpF2%2FO9vnY9aOjuTU0cb7M9fpE%3D",
        "alt": "완산도서관 자작사색(전문작가 집필실) 입주작가",
        "width": 4032,
        "height": 3024
      }
    ],
    "links": []
  },
  {
    "id": 30,
    "slug": "30-한국예술인복지재단-신진예술인-예술활동증명",
    "title": "한국예술인복지재단 신진예술인 예술활동증명",
    "originalTitle": "《한국예술인복지재단 신진예술인 예술활동증명》",
    "date": "2025-06-17T06:16:44+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/30",
    "type": "증명",
    "summary": "한국예술인복지재단 신진예술인 예술활동증명 관련 이미지와 링크를 이전한 기록입니다.",
    "body": [],
    "images": [
      {
        "src": "/assets/tistory/30-1.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/yZZSt/btsQhtdvLJk/AAAAAAAAAAAAAAAAAAAAANmp8jclO2JD4Q6jSquQeBzCxUvIMlqF9GYzXfg3t2R_/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=SE%2FnWDJnIWYuQ7OuD0AzAvq%2BsNU%3D",
        "alt": "한국예술인복지재단 신진예술인 예술활동증명",
        "width": 718,
        "height": 782
      },
      {
        "src": "/assets/tistory/30-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/bYyF7E/btsQgTqaAwT/AAAAAAAAAAAAAAAAAAAAABshj-Dme_buk1YXIzHDjHzXtfQqnHs6okGCO-4JKmjT/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=NiSYqTmYU8AgEa4W9ANcBQ5uHlM%3D",
        "alt": "한국예술인복지재단 신진예술인 예술활동증명",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/30-3.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/oXzEL/btsODJvczij/AAAAAAAAAAAAAAAAAAAAAOvs-a9JBkzuXU5z79uJsVyj13kFldkyBq2YdXL6QCSy/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=tNUsV%2Btf37hC7Ft8OC0l53ZzKkY%3D",
        "alt": "한국예술인복지재단 신진예술인 예술활동증명",
        "width": 1052,
        "height": 668
      }
    ],
    "links": []
  },
  {
    "id": 33,
    "slug": "33-경남문화예술진흥원-지역문화예술육성지원사업-공모-문학-개인-생애최초",
    "title": "경남문화예술진흥원 지역문화예술육성지원사업 공모: 문학_개인(생애최초)",
    "originalTitle": "《경남문화예술진흥원 지역문화예술육성지원사업 공모: 문학_개인(생애최초)》",
    "date": "2025-06-17T06:16:39+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/33",
    "type": "지원",
    "summary": "경남문화예술진흥원 지역문화예술육성지원사업 공모: 문학_개인(생애최초) 관련 이미지와 링크를 이전한 기록입니다.",
    "body": [],
    "images": [
      {
        "src": "/assets/tistory/33-1.png",
        "originalSrc": "https://blog.kakaocdn.net/dna/seWue/btsOE7PnDzi/AAAAAAAAAAAAAAAAAAAAAJll-x6kbkffhmvt7misne6PP9rV7lBfZMSpToeWSkUi/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=IWx2bUfUK81wNykhM1mE%2BFvavDQ%3D",
        "alt": "경남문화예술진흥원 지역문화예술육성지원사업 공모: 문학_개인(생애최초)",
        "width": 1976,
        "height": 1496
      }
    ],
    "links": []
  },
  {
    "id": 29,
    "slug": "29-한국문화예술위원회-후원-전국-예비-극작가-인큐베이팅-프로젝트-희곡-읽기-좋은-날",
    "title": "한국문화예술위원회 후원 전국 예비 극작가 인큐베이팅 프로젝트-희곡 읽기 좋은 날",
    "originalTitle": "《한국문화예술위원회 후원 전국 예비 극작가 인큐베이팅 프로젝트-희곡 읽기 좋은 날》",
    "date": "2025-06-17T06:16:33+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/29",
    "type": "게재",
    "summary": "한국문화예술위원회 후원 전국 예비 극작가 인큐베이팅 프로젝트-희곡 읽기 좋은 날 관련 이미지와 링크를 이전한 기록입니다.",
    "body": [],
    "images": [
      {
        "src": "/assets/tistory/29-1.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/EWWH2/btsOClViUNs/AAAAAAAAAAAAAAAAAAAAAD-iXlBOamRJLO5_sEJeH0GtUN7VTxRI2kaN4Uea2rTn/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=jLmrKS7HYwMy2RUmM%2BrmBWpzWjw%3D",
        "alt": "한국문화예술위원회 후원 전국 예비 극작가 인큐베이팅 프로젝트-희곡 읽기 좋은 날",
        "width": 746,
        "height": 1054
      },
      {
        "src": "/assets/tistory/29-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/borRJ6/btsQjhbYGZk/AAAAAAAAAAAAAAAAAAAAAArnY53g_7gR_IaP7ZaTwiYarfYMvyE0zy6L1-DKvOT-/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=OhrmTSNQPAVByY%2BQzumHA6O1HJU%3D",
        "alt": "한국문화예술위원회 후원 전국 예비 극작가 인큐베이팅 프로젝트-희곡 읽기 좋은 날",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/29-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/b688cc/btsQhpblAYJ/AAAAAAAAAAAAAAAAAAAAAPiT4H_fPUkVxIvXjxzyuEY2LkWC2VtpUtz5nxUDHiXy/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=iVPwBJghq2Xl5syJjFP3kaP8rPg%3D",
        "alt": "한국문화예술위원회 후원 전국 예비 극작가 인큐베이팅 프로젝트-희곡 읽기 좋은 날",
        "width": 1920,
        "height": 1080
      }
    ],
    "links": []
  },
  {
    "id": 28,
    "slug": "28-토지문화재단-문인-창작실-입주작가",
    "title": "토지문화재단 문인 창작실 입주작가",
    "originalTitle": "《토지문화재단 문인 창작실 입주작가》",
    "date": "2025-06-17T06:16:28+09:00",
    "sourceUrl": "https://kimwonho.tistory.com/28",
    "type": "입주",
    "summary": "토지문화재단 문인 창작실 입주작가 관련 이미지와 링크를 이전한 기록입니다.",
    "body": [],
    "images": [
      {
        "src": "/assets/tistory/28-1.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/ENqoB/btsOCB4ESip/AAAAAAAAAAAAAAAAAAAAAAL_61NleF8CrfezUJSxOShHsq1hx9fKSnJNMsOW9tTh/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=vvbeNJvyQcGbPjKzAJeGHhSwWM0%3D",
        "alt": "토지문화재단 문인 창작실 입주작가",
        "width": 745,
        "height": 1054
      },
      {
        "src": "/assets/tistory/28-2.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/ATu2Y/btsQiNCgTRv/AAAAAAAAAAAAAAAAAAAAALrZPUGKux5fmnIFuxSapCz2xynfmWjXV3D1JYLSDL_9/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=nBYqv2TJziT%2FoAoIAkTzKsSWhaw%3D",
        "alt": "토지문화재단 문인 창작실 입주작가",
        "width": 1920,
        "height": 1080
      },
      {
        "src": "/assets/tistory/28-3.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/ekS4t0/btsODZEyZNw/AAAAAAAAAAAAAAAAAAAAAEl66JdBlnvdNewXZgaV1ERUyBJbmEaZNwiA8Hs1OwcW/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=V22%2Foj1KnnNLHQ%2Fdx0Tn%2FFWhA94%3D",
        "alt": "토지문화재단 문인 창작실 입주작가",
        "width": 4032,
        "height": 3024
      },
      {
        "src": "/assets/tistory/28-4.jpg",
        "originalSrc": "https://blog.kakaocdn.net/dna/ZI35L/btsOEzZHLAQ/AAAAAAAAAAAAAAAAAAAAAOGVZddCoXAq8BEJLbrt5_Obw954WK1Pzy1eygorDOx6/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=RJ3bVr9TWJhfyOWugGMJUVMagLY%3D",
        "alt": "토지문화재단 문인 창작실 입주작가",
        "width": 4032,
        "height": 3024
      }
    ],
    "links": []
  }
] satisfies TistoryArchiveEntry[];

export const recentTistoryArchive = tistoryArchive.slice(0, 6);

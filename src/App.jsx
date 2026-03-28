import { useState, useEffect, useRef } from 'react'
import './App.css'

// 宾客配置文件
const guestsConfig = {
  // 男方宾客
  "weihongxia": "魏红霞",
  "weizhigang": "魏志刚",
  "maguanglong": "马广龙",
  "duanruiqiang": "段瑞强",
  "mengxianghuan": "孟祥欢",
  "songwenli": "宋文丽",
  "weimingze": "魏铭泽",
  "hanyonglong": "韩勇龙",
  "weizhiqiang": "魏志强",
  "houboyu": "候勃聿",
  "baikangyuan": "白康元",
  "weihongbo": "魏红波",
  "laoshi": "毕老师",
  "lizhijin": "李质锦",
  "weining": "魏宁",
  "jiangwenduo": "姜文朵",
  "duanweijie": "段伟杰",
  "weilanxizi": "魏蓝熙子",
  "yangyulan": "杨玉兰",
  "zhangzheng": "张铮",
  "weiqiquan": "魏齐全",
  "zhangmengyuan": "张梦媛",
  "shenhuijuan": "沈蕙娟",
  "wangmanping": "王曼屏",
  "duanpeiqi": "段佩琦",
  "duanpeiyu": "段佩宇",
  "duanshibao": "段世宝",
  "duanlanming": "段兰铭",
  "zhangguangrong": "张广荣",
  "weibaoxing": "魏保兴",
  "dingxiuzhen": "丁秀珍",
  "lizengying": "李增英",
  
  // 女方宾客
  "chenli": "陈李",
  "cuiguanlin": "崔冠琳",
  "miaoyulin": "苗玉琳",
  "yangmoyu": "杨默予",
  "liqing": "李晴",
  "fujiayun": "付嘉韵",
  "guotongshuai": "郭桐帅",
  "shenzhaojun": "沈兆均",
  "zhaoyicun": "赵翌存",
  "yijianing": "尹佳宁",
  "wangziming": "王子铭",
  "bicheng": "毕成",
  "zhangduanduan": "张端端",
  "wangzi": "王梓",
  "zhanghanyu": "张翰予",
  "musiyao": "穆思垚",
  "mahuanglong": "马广龙",
  "mengxianghuan_nv": "孟祥欢",
  "houboyu_nv": "侯勃聿",
  "songjiayi": "宋佳宜",
  "limengdi": "李梦迪",
  // 默认
  "default": "尊敬的宾客"
};

function App() {
  const [guestName, setGuestName] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestKey = urlParams.get('guest');
    
    if (guestKey && guestsConfig[guestKey]) {
      setGuestName(guestsConfig[guestKey] + ' 您好');
    } else if (guestKey) {
      setGuestName(guestKey + ' 您好');
    } else {
      setGuestName(guestsConfig["default"] + ' 您好');
    }
  }, []);

  // 监听滚动到底部
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      if (scrollTop + clientHeight >= scrollHeight - 50) {
        if (!showConfetti) {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showConfetti]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {});
      }
    }
  };

  const openNavigation = (type) => {
    const lat = 39.94;
    const lng = 116.49;
    const name = '大董郡王府·覠宴';
    const address = '北京市朝阳区朝阳公园南路19号郡王府内西侧别院（顺承酒店内园中园一层101）';
    
    let navUrl = '';
    
    // 优先使用URL Scheme直接唤起APP
    switch(type) {
      case 'amap':
      // 高德地图
      navUrl = `https://uri.amap.com/marker?position=${lng},${lat}&name=${encodeURIComponent(name)}&coordinate=gaode&callnative=1`;
      break;
    case 'bmap':
      // 百度地图
      navUrl = `http://api.map.baidu.com/marker?location=${lat},${lng}&title=${encodeURIComponent(name)}&content=${encodeURIComponent(address)}&output=html&src=webapp.baidu.openAPIDemo`;
      break;
    case 'tmap':
      // 腾讯地图
      navUrl = `https://apis.map.qq.com/uri/v1/marker?marker=coord:${lat},${lng};title:${encodeURIComponent(name)};addr:${encodeURIComponent(address)}&referer=myapp`;
      break;
    default:
      // 默认打开高德
      navUrl = `https://uri.amap.com/marker?position=${lng},${lat}&name=${encodeURIComponent(name)}&coordinate=gaode&callnative=1`;
    }
    
    // 尝试直接打开APP
    window.location.href = navUrl;
  };

  return (
    <div className="invitation-card">
      <audio ref={audioRef} loop preload="auto">
        <source src="https://audio.fukit.cn/autoupload/f/yFByTdpHkJTMpG-kZkEwZ6rqKxwR0n1kQhJ7sNM0ESs/20260328/gJhO/music.mp3" type="audio/mpeg" />
      </audio>
      
      <div className={`music-btn ${isPlaying ? 'playing' : ''}`} onClick={toggleMusic}>
        <span className="note-icon">{isPlaying ? '🎶' : '🎶'}</span>
      </div>
      
      <div className="banner">
        <div className="banner-track">
          {/* <img src="https://picui.ogmua.cn/s1/2026/03/28/69c7dbc81107f.webp" alt="" /> */}
          <img src="https://img.feria.eu.org/bw5cx5.webp" alt="" />
          <img src="https://img.feria.eu.org/l6agsk.webp" alt="" />
          <img src="https://img.feria.eu.org/sd1tmw.webp" alt="" />
          <img src="https://img.feria.eu.org/yf8x5d.webp" alt="" />

        </div>
        <div className="banner-overlay">
          <div className="banner-content">
            <div className="ornament">✿</div>
            <div className="title">新婚答谢宴</div>
            <div className="subtitle">Wedding Reception</div>
            <div className="couple-names">韩笑 & 段佩珊</div>
          </div>
        </div>
      </div>
      
      <div className="card-content">
        
        <div className="guest-name-section">{guestName}</div>
        
        <div className="divider"></div>
        
        <div className="intro-text">
          谨定于<br />
          <span className="date-highlight">2026年4月25日 · 周六</span>
          <br />
          在北京举办我们的新婚答谢宴
        </div>
        
        <div className="divider"></div>
        
        <div className="event-details">
          <div className="detail-row">
            <span className="detail-label">时间</span>
            <span className="detail-value time-display">11:58</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">地点</span>
            <div className="detail-value address">
              <div className="restaurant-name">大董郡王府·覠宴</div>
            </div>
          </div>
        </div>
        
        <div className="closing-text">
          诚邀您莅临，与我们共享这份喜悦
        </div>
        
        <div className="notice">
          <div className="notice-title">温馨提示</div>
          <p><span className="icon">✿</span> 为营造温馨明亮的氛围，恳请各位身着亮色系服饰出席</p>
          <p><span className="icon">✿</span> 因场地座位数量有限，仅按邀请名单安排席位</p>
          <p><span className="icon">✿</span> 若您需额外携带来宾，烦请提前告知，以便我们妥善协调安排</p>
        </div>
      </div>
      
      <div className="nav-buttons">
        <div className="nav-btn" onClick={() => openNavigation('amap')}>
          <span className="nav-icon">🗺️</span>
          <span>高德地图</span>
        </div>
        <div className="nav-btn" onClick={() => openNavigation('bmap')}>
          <span className="nav-icon">📍</span>
          <span>百度地图</span>
        </div>
        <div className="nav-btn" onClick={() => openNavigation('tmap')}>
          <span className="nav-icon">🔵</span>
          <span>腾讯地图</span>
        </div>
      </div>
      
      <div className="footer">
        期待与您相见
      </div>
      
      {showConfetti && <Confetti />}
    </div>
  );
}

// 彩带组件
function Confetti() {
  const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd'];
  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100 + '%',
    delay: Math.random() * 0.5 + 's',
    color: colors[Math.floor(Math.random() * colors.length)],
    size: Math.random() * 8 + 6 + 'px',
    duration: Math.random() * 2 + 2 + 's'
  }));
  
  return (
    <div className="confetti-container">
      {confettiPieces.map(piece => (
        <div
          key={piece.id}
          className="confetti"
          style={{
            left: piece.left,
            animationDelay: piece.delay,
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
            animation: `confetti-fall ${piece.duration} ease-out forwards`
          }}
        />
      ))}
    </div>
  );
}

export default App;

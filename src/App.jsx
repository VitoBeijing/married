import { useState, useEffect } from 'react'
import './App.css'

// 宾客配置文件
const guestsConfig = {
  // 男方宾客
  "weihongxia": "魏红霞 女士",
  "weizhigang": "魏志刚 先生",
  "maguanglong": "马广龙 先生",
  "duanruiqiang": "段瑞强 先生",
  "chenli": "陈李 先生",
  "mengxianghuan": "孟祥欢 先生",
  "songwenli": "宋文丽 女士",
  "weimingze": "魏铭泽 先生",
  "hanyonglong": "韩勇龙 先生",
  "weizhiqiang": "魏志强 先生",
  "houboyu": "候勃聿 先生",
  "baikangyuan": "白康元 先生",
  "weihongbo": "魏红波 先生",
  "laoshi": "毕老师",
  "lizhijin": "李质锦 先生",
  "weining": "魏宁 女士",
  "jiangwenduo": "姜文朵 女士",
  "duanweijie": "段伟杰 先生",
  "weilanxizi": "魏蓝熙子 女士",
  "yangyulan": "杨玉兰 女士",
  "zhangzheng": "张铮 先生",
  "weiqiquan": "魏齐全 先生",
  "zhangmengyuan": "张梦媛 女士",
  "shenhuijuan": "沈蕙娟 女士",
  "wangmanping": "王曼屏 女士",
  "duanpeiqi": "段佩琦",
  "duanpeiyu": "段佩宇",
  "duanshibao": "段世宝",
  "duanlanming": "段兰铭 先生",
  "zhangguangrong": "张广荣 先生",
  "weibaoxing": "魏保兴 先生",
  "dingxiuzhen": "丁秀珍 女士",
  "lizengying": "李增英 女士",
  
  // 女方宾客
  "cuiguanlin": "崔冠琳 女士",
  "miaoyulin": "苗玉琳 女士",
  "yangmoyu": "杨默予 女士",
  "liqing": "李晴 女士",
  "fujiayun": "付嘉韵 女士",
  "guotongshuai": "郭桐帅 先生",
  "shenzhaojun": "沈兆均 先生",
  "zhaoyicun": "赵翌存 先生",
  "yijianing": "尹佳宁 女士",
  "wangziming": "王子铭 先生",
  "bicheng": "毕成 先生",
  "zhangduanduan": "张端端 女士",
  "wangzi": "王梓 先生",
  "zhanghanyu": "张翰予 先生",
  "musiyao": "穆思垚 女士",
  "mahuanglong": "马广龙 先生",
  "mengxianghuan_nv": "孟祥欢 女士",
  "houboyu_nv": "侯勃聿 女士",
  "songjiayi": "宋佳宜 女士",
  
  // 别名/简称
  "laoda": "老大",
  "xiaoshen": "小沈",
  "desa": "大嫂",
  "yingjie": "莹姐",
  "laoer": "老二",
  "xiaolingling": "小00",
  "ersao": "二嫂",
  "laosan": "老三",
  "tora": "Tora",
  "ff": "FF",
  "siyao": "思垚",
  
  // 默认
  "default": "尊敬的宾客"
};

function App() {
  const [guestName, setGuestName] = useState('');

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

  const openNavigation = (type) => {
    const lat = 39.929;
    const lng = 116.459;
    const name = '大董郡王府·覠宴';
    const address = '北京市朝阳区朝阳公园南路19号郡王府内西侧别院（顺承酒店内园中园一层101）';
    
    let navUrl = '';
    
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
    
    window.location.href = navUrl;
  };

  return (
    <div className="invitation-card">
      <div className="banner">
        <div className="banner-track">
          <img src="/pic1.webp" alt="婚礼照片1" />
          <img src="/pic2.webp" alt="婚礼照片2" />
          <img src="/pic3.webp" alt="婚礼照片3" />
          <img src="/pic4.webp" alt="婚礼照片4" />
        </div>
      </div>
      
      <div className="card-content">
        <div className="ornament">✿</div>
        
        <div className="title">新婚答谢宴</div>
        <div className="subtitle">Wedding Reception</div>
        
        <div className="couple-names">韩笑 & 段佩珊</div>
        
        <div className="guest-name">{guestName}</div>
        
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
    </div>
  );
}

export default App;

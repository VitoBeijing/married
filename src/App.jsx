import { useState, useEffect } from 'react'
import './App.css'

// 宾客配置文件
const guestsConfig = {
  // 家人
  "weihongxia": "魏红霞 女士",
  "weizhigang": "魏志刚 先生",
  "maguanglong": "马广龙 先生",
  "laoda": "老大",
  "xiaoshen": "小沈",
  "duanruiqiang": "段瑞强 先生",
  "chenli": "陈李 先生",
  "mengxianghuan": "孟祥欢 先生",
  "desa": "大嫂",
  "xiaoshen_nvyou": "小沈男友",
  "songwenli": "宋文丽 女士",
  "weimingze": "魏铭泽 先生",
  "yingjie": "莹姐",
  "laoer": "老二",
  "xiaolingling": "小00",
  "hanyonglong": "韩勇龙 先生",
  "weizhiqiang": "魏志强 先生",
  "houboyu": "候勃聿 先生",
  "ersao": "二嫂",
  "xiaolingling_nvyou": "小00男友",
  "baikangyuan": "白康元 先生",
  "weihongbo": "魏红波 先生",
  "hounvyou": "侯女友",
  "laosan": "老三",
  "laoshi": "毕老师",
  "lizhijin": "李质锦 先生",
  "weining": "魏宁 女士",
  "zhangchi": "张驰 先生",
  "jiangwenduo": "姜文朵 女士",
  "duanduan": "端端",
  "duanweijie": "段伟杰 先生",
  "weilanxizi": "魏蓝熙子 女士",
  "wanghuanhuan": "王欢欢 女士",
  "limengdi": "李梦迪 女士",
  "wangzong": "王总",
  "yangyulan": "杨玉兰 女士",
  "zhangzheng": "张政 先生",
  "wanghuanhuan_lao gong": "王欢欢老公",
  "laobeijing": "老北京",
  "zhangjie": "张姐",
  "weiqiquan": "魏齐全 先生",
  "zhangmengyuan": "张梦圆 女士",
  "tora": "Tora",
  "ff": "FF",
  "siyao": "思垚",
  "shenhuijuan": "沈蕙娟 女士",
  "wangmanping": "王曼屏 女士",
  "ergunainai": "二姑奶奶",
  "pengqigeng": "彭启耕 先生",
  "erguyeye": "二姑爷爷",
  "duanpeiqi": "段佩琦",
  "duanpeiyu": "段佩宇",
  "duanshibao": "段世宝",
  
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

  const openNavigation = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const lat = 39.929;
    const lng = 116.459;
    const name = '大董·覠宴(意境菜·火锅涮·郡王府店)';
    
    let navUrl = '';
    
    if (isMobile) {
      navUrl = `bdapp://map/direction?destination=latlng:${lat},${lng}|name:${name}&origin=latlng:0,0|name:我的位置&mode=driving`;
    } else {
      navUrl = `https://map.baidu.com/search/${encodeURIComponent(name)}/@${lng},${lat},17,1`;
    }
    
    window.location.href = navUrl;
  };

  return (
    <div className="invitation-card">
      <div className="banner">
        <div className="banner-track">
          <img src="/WechatIMG54.jpg" alt="婚礼照片1" />
          <img src="/WechatIMG55.jpg" alt="婚礼照片2" />
          <img src="/WechatIMG54.jpg" alt="婚礼照片1" />
          <img src="/WechatIMG55.jpg" alt="婚礼照片2" />
        </div>
      </div>
      
      <div className="card-content">
        <div className="ornament">✿</div>
        
        <div className="title">新婚答谢宴</div>
        <div className="subtitle">Wedding Reception</div>
        
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
            <span className="detail-value time-display">12:00</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">地点</span>
            <div className="detail-value address">
              北京市朝阳区麦子店街道<br />
              朝阳公园南路19号顺承酒店<br />
              内园中园一层101<br />
              <div className="restaurant-name">大董·覠宴</div>
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
      
      <div className="map-section">
        <div className="map-container">
          <img 
            className="amap-static" 
            src="https://restapi.amap.com/v3/staticmap?location=116.459,39.929&zoom=17&size=750*400&markers=mid,,,:116.459,39.929&key=YOUR_AMAP_KEY"
            alt="地图"
          />
          <div className="map-marker-overlay">
            <div className="map-marker-wrapper" onClick={openNavigation}>
              <div className="pulse"></div>
              <div className="heart">❤️</div>
              <div className="label">大董·覠宴</div>
            </div>
          </div>
        </div>
        <div className="nav-hint" onClick={openNavigation}>点击桃心 · 打开导航</div>
      </div>
      
      <div className="footer">
        期待与您相见
      </div>
    </div>
  );
}

export default App;

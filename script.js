
// 定义起始和结束颜色
const startColor = { r: 30, g: 30, b: 80 };
const endColor = { r: 230, g: 240, b: 255 };
function updateBackgroundColor() {
    // 获取当前滚动位置和页面总高度
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let progress = maxScroll > 0 ? scrollY / maxScroll : 0;
    // 确保进度在0到1之间
    progress = Math.min(1, Math.max(0, progress));
    const scrollFraction = progress;
    // 线性插值计算当前背景颜色
    const r = startColor.r + (endColor.r - startColor.r) * progress;
    const g = startColor.g + (endColor.g - startColor.g) * progress;
    const b = startColor.b + (endColor.b - startColor.b) * progress;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
// 监听滚动事件，更新背景颜色
window.addEventListener('scroll', updateBackgroundColor, { passive: true });
// 初始化背景颜色
updateBackgroundColor();

const textstartColor ={ r: 222, g: 222, b: 228 }
const textendColor = { r: 30, g: 30, b: 80 }
function updatecontentColor() {
    // 获取当前滚动位置和页面总高度
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let progress = maxScroll > 0 ? scrollY / maxScroll : 0;
    // 确保进度在0到1之间
    progress = Math.min(1, Math.max(0, progress));
    // 线性插值计算当前背景颜色
    const r = textstartColor.r + (textendColor.r - textstartColor.r) * progress;
    const g = textstartColor.g + (textendColor.g - textstartColor.g) * progress;
    const b = textstartColor.b + (textendColor.b - textstartColor.b) * progress;
    const content = document.querySelector('article .content,.About,.Contact');
    const About = document.querySelector('.About');
    const Contact = document.querySelector('.Contact');
   if (content) {
        content.style.color = `rgb(${r}, ${g}, ${b})`;
   }
   if (About) {
        About.style.color = `rgb(${r}, ${g}, ${b})`;
   }
   if (Contact) {
        Contact.style.color = `rgb(${r}, ${g}, ${b})`;
   }
}
// 监听滚动事件，更新背景颜色
window.addEventListener('scroll', updatecontentColor, { passive: true });
// 初始化背景颜色
updatecontentColor();

const video = document.getElementById('myVideo');
video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {        
        video.pause();
    }
});

// 邮箱复制
    const emailBtn = document.querySelector('#a1');
    const emailAddress = 'jiubugaosuni';
    if (emailBtn) {
        emailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // 现代复制方法
            navigator.clipboard.writeText(emailAddress).then(() => {
                alert('很不高兴认识你！( ᓀ◞ᓂ..)');
            }).catch(() => {
                // 降级方案
                const textarea = document.createElement('textarea');
                textarea.value = emailAddress;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                alert('很不高兴认识你！( ᓀ◞ᓂ..)');
            });
        });
    }

let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let road = document.getElementById('road');
let text = document.getElementById('text');

//  火箭返回顶部
const rocket = document.getElementById('pointer2');
if (rocket) {
    rocket.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

window.addEventListener('scroll', function () {
    let value = window.scrollY;


    if (moon) {
        moon.style.transform = `translateX(calc(-${value}px + 0.5px))`;
    }

    if (mountain) mountain.style.top = -value * 0.15 + 'px';
    if (road) road.style.top = value * 0.15 + 'px';
    if (text) text.style.top = value * 1 + 'px';
});

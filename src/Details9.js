import React, { Component } from 'react';
import './details.css';
var $ = require('jquery');

class Details extends Component {
  render() {
    return (
      <section class="detail">
        <section className="top-bg">
          <img src="static/image/slider1.png" className="top-image"/>
        </section>
        <section className="detail-box">
          <section className="nav-box">
            <div className="detail-nav">
              <p>新闻动态 / 行业资讯 / <span className="current-nav">新闻详情</span></p>
            </div>
            <div className="detail-time">
              <p>2016-12-30</p>
            </div>
          </section>
          <section className="content-box">
            <h1 className="news-title">几年后才有真正的虚拟现实？</h1>
            <section className="news-content">
              <img src="static/image/news/industry1/image1.jpeg"/>
              <p>谁都知道 VR（虚拟现实） 火了</p>
              <p>商场有蛋蛋椅，淘宝上有便宜到 9.9 包邮、加附送资源的 VR 眼镜，HTC 不遗余力的宣传 Vive，索粉们争抢预订 Playstation VR。</p>
              <p>坦率讲，VR 并不是一个很新颖的技术，如果你非常关注这个行业，也知道这个技术早在 60 年前已经有产品出来，但是他们异常笨重也只用于实验室内的模拟，消费者摸不到，后来几十年有了军用的版本，他们用来模拟一系列的飞行任务。</p>
              <p>直到现在出来了消费版，世界上惊呼 VR 消费时代来了。</p>
              <p>显示方式的变迁</p>
              <p>这个拥有屏幕的设备告诉我们，VR 很可能是下一代的显示设备。</p>
              <p>如果计算能力跟上的话，它还能变成一个具备交互、计算、感知能力的结合体，这样你就可以将它称为下一代通用计算平台了。</p>
              <img src="static/image/news/industry1/image2.jpeg"/>
              <p>▲图为：最早的 VR</p>
              <p>“人最早的需求是在石头上记录信息，石头是一个很难以交互，你要刻字很难，是不可以移动，有很大范围的显示设备；后来人们发明了纸，然后发明了屏幕，进而发明了电视，然后发明了电脑；最后是这几年我们发明了智能手机或者叫做掌上电脑，是可以互动可以移动的小屏幕，历史上我们很难把便捷性和显示面积都兼顾。”锤子科技的 VR 负责人罗子雄这样说。</p>
              <p>可互动、便携性以及显示屏幕像是三个顶点。人们可以很方便，但显示面积就会有局限，要么显示面积很大，不可以移动。移动头显出现了，可以移动，而且一上来就是 360 度的显示画面，它已然是最大的显示器了。</p>
              <p>“无线的解决方案还没有成熟，HMD（Head Mounted Display 头戴显示器） 就在于谁能将这些顶点集合好，在目前来说就是最好的。”</p>
              <p>行为、交互、语音、最自然的方式代表了最真实的虚拟世界，这也可能只能算是第一代移动头显，如果讲“拷贝现实”作为真正虚拟现实的最高标准，可能还需要加入味觉——因为在一些 VR 游戏里你甚至是要喝上一杯咖啡的。</p>
              <p>技术的局限</p>
              <p>2016 年虚拟现实之火也在于你打开了这扇门后发现巨头林立。</p>
              <p>哦，虚拟现实元年来了。</p>
              <p>阿里巴巴要 VR 虚拟购物，微软要开放 HoloLens SDK，Facebook 总不会看错吧，它花了 20 亿美元买了 Oculus，HTC 将 Vive 带入各种世界级的科技展会大肆宣传，苹果也低调的收了很多家 VR 相关领域的公司、挖了很多业内专家。</p>
              <p>比起巨头公司的圈地占坑，事实上有更多实际问题等着他们。</p>
              <img src="static/image/news/industry1/image3.jpeg"/>
              <p>▲图片来自ifanr</p>
              <p>NVIDIA 全球副总裁、中国区总经理张建中在奇点大会上表示，“我们不光推出了认证了 VR Ready PC，还针对 VR 做出了底层优化 VR Works，内置了多种 VR Works 的 SDK。”</p>
              <p>简而言之，这套系统包括了很多个与 VR 相关的 SDK，它们在底层帮助 VR 内容在声音、行为、画质上的表现力，成为一个技术上的通用接口。</p>
              <p>但技术的限制远没有目前的优化提及的那么简单，同样是 NVIDIA 黄仁勋教主则认为 20 年内见不到真正的虚拟现实技术。</p>
              <p>他谈到现在的虚拟现实头显的屏幕技术并不能达到更好的效果，或许即将到来的 4K 分辨率手机可以改善这个情况，不过一些头显的缆线也是问题，而且他认为现在的头显设备还是很大很重，这都会影响佩戴用户的体验。 </p>
              <img src="static/image/news/industry1/image1.jpeg"/>
              <p>▲图片来自ifanr</p>
              <p>线缆码率、无线趋势，计算能力，头显重量，这些是可见的限制。</p>
              <p>“PC Gaming = 60MP/S 这是需要处理像素点，他们仅仅是 1920 1080 @MIN 30FPS，如果换到 VR 上则需要 7 倍的 GPU 能力。”张建中说。</p>
              <p>罗子雄认为，“主流一线厂商 VR 头盔分辨率是 2160 × 1200，但是分配到每个眼睛的只有一半，就是 1200 × 1080，更糟糕的是，实际上肉眼接受的极限分辨率是 730 × 730，是什么概念，在 2016 年的今天我们的 VR 设备能够看到的像素等于 1998 年的 15 寸 CRT 的显示器。”</p>
              <p>而且，目前地球上只有 3% 的电脑能满足 VR 的需求，1% 的能满足 VR 的理想需求。“如果想达到理想的画面，视网膜级的画面，我们需要两个 16K 屏幕，240 帧的刷新率。”</p>
              <p>拷贝现实的难点</p>
              <p>形容虚拟现实恐怕就像是 Google I/O 开发者大会上 VR 负责人的一句话，“虚拟现实世界中的设计具备很强的可参考性，就是将人们在现实生活中的行为、感知原封不动的搬到虚拟世界中。”</p>
              <img src="static/image/news/industry1/image4.jpeg"/>
              <p>▲图片来自ifanr</p>
              <p>这句话值得推敲。</p>
              <p>人类是拥有视觉、听觉、触觉、行为甚至味觉等这些感知的高级物种，如果全部应用在虚拟现实技术上，这可能才是真正的虚拟现实。</p>
              <p>我们习惯于背上一台背负式外星人电脑游玩 VR 游戏，因为这样可以免于 VR 头盔连接线的干扰，但游戏里其实我身上什么都没有；为了营造出游戏中飞翔内容的可感知性，我们在外部放上一台鼓风机，但理论上说这并不是匹配的风；VR 游戏中你驾驶一辆坦克走在泥泞不堪的乡间小路，可是你的屁股告诉你你其实在凳子上。</p>
              <p>无数的感知和你所看到的视觉不匹配，你的前庭系统告诉这是假的，你开始变晕。</p>
              <p>这样的标准看，甚至你想象的那些科幻电影中的全息图像其实同样没有手部感知——他们只能在空中划来划去，一点手感都没有。</p>
              <p>如果看一下今年市面上最一流的 VR、AR 设备，Gear VR、Rift CV1 等，你发现 5 种设备没有一个长得一样的。但是我们看 PC 就一个鼠标和键盘，最多还有一个触摸板。移动端更简单，就一个触摸屏。而 VR、AR，HMD 有多少设备，据不完全的统计已经有 10 种交互方案。</p>
              <p>相反这个 VR 时代，人们用“跑步机”模拟 VR 世界的跑，用手套捕捉手指的指点，用眼神注视一个方向进行选择，“现在的 VR 体验不是 iPhone 时代，更像是 Pocket PC 的时代。”</p>
              <p>“一个统一的交互方式仍然没有形成。”罗子雄说。</p>
              <p>内容创造的思考</p>
              <p>重新被定位的还有 VR 内容的创作，连知名公司的大导演站在片场也不能马上就进入状态，甚至会随时甩出一句“我应该站在哪？”——因为 VR 电影使用的 360 度捕捉。电影内容中故事线也不会根据之前导演安排的那样走，变得自由度更高，这样想来 VR 电影可能是一个沙盒游戏（开放世界）？</p>
              <img src="static/image/news/industry1/image5.GIF"/>
              <p>▲图为PS VR 射击游戏《伦敦劫案》</p>
              <p>这种局限也并不只是在 VR 技术以及内容自身，教育用户同样是一个很大的问题：</p>
              <p>我们经常看到在没人告诉这位第一次体验 VR 的体验者他其实可以直接往前移动的情况下，人们习惯在虚拟世界中站立在原地——即使她够不到，她也会问你这样的问题，“按哪个按钮是往前走？”</p>
              <p>不过，反倒是我们将一个 VR 头盔戴在一个没有任何接触过这项技术的小朋友身上，她竟然自觉的低头去抚摸虚拟世界的小狗。这里边似乎有双面问题：VR 对一部分人来说是本能；VR 也还需要教育那些已经习惯 2D 屏幕的大量用户的“反本能”。</p>
              <p>它很像人类在更早的按键手机上使用功能按钮，然后在大屏触控手机上寻找按钮，最后习惯在大屏手机上吐槽为什么这台手机还需要实体按钮？这更像是一个过程，整个过程值得探讨。</p>
              <p>标准定义者</p>
              <p>我们简单回顾一下 PC、手机的历史来寻找一些线索。</p>
              <p>产业链条上，PC 的产品链是 1994-2011 呈上升趋势，2011-2015 呈下降趋势，iPhone 是 2007-2015 呈上升趋势，2015 年首次出现下滑，但我们并不知道下一个季度是否持续下滑。</p>
              <p>一个可取的经验是，PC 经历了 13 年，从 IBM 发明第一个智能手机，到苹果出现经历了 14 年时间。HMD 从出现到现在还没有定义者出现，已经历了 21 年。</p>
              <p>罗子雄认为，VR 硬件出现了 Gear VR、Oculus 等一系列的封闭平台，然后衍生出了 Daydream、SteamVR 等这种开放平台，慢慢下一步就会再次出现 iOS 这种标准定义者，从软硬件到 SDK 到交互设备全部都做。</p>
              <p>“然后会有一个叫做标准跟随者的公司出现。标准制定者和标准跟随者是对 VR、AR 同样重要的两件事情，这两件事情标志着什么时候可以成，所以我们认为第二件非常重要的事情就是开放性平台的出现。”</p>
              <p>写在最后</p>
              <p>不过，VR 技术本身确实很好，它帮助一些病人模拟出虚拟世界用来治病，它帮助学生学习，它在目前已经给了很多 WoW 一样的体验，锤子甚至表示几个体验过他们 VR 的人都说“wow，impressive.”</p>
              <p>只是这项技术多少年后才能成为今天的手机、人类的最后一块屏呢？</p>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default Details;

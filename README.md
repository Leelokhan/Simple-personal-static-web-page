[English version](README_EN.md) | [中文版本](README.md)

更新能直接一键部署在vercel 和 cloudflare

用ai做一个简单的网页给自己练练手，培养一下兴趣爱好

实例：   https://live2d.honkai.ct8.pl/  还有一个ai做的小游戏 http://dar.honkai.ct8.pl/ O(∩_∩)O~


另一个例子： https://oh.mei.cc.cd/

https://github.com/Leelokhan/Simple-IP-Check-Page

傻瓜式搭建一个属于你的ip检测页面，纯html

![微信截图_20250423033407](https://github.com/user-attachments/assets/ff4e2c55-3b62-4ad0-9e96-d7a81c981413)
为了不那么单调加入了live2d→ https://github.com/imuncle/live2d 这位大大的项目，我仓库里删除了大部分模型只留了几个用作测试，喜欢的可以去他的项目地址下载

进阶→ 能把live2d模型放到任何网站   例： https://nz.562427418.xyz/  https://z.meizizi.nyc.mn/
<img width="1913" height="916" alt="image" src="https://github.com/user-attachments/assets/72860bdd-1b58-49bf-af67-e9d508e1c727" />
<img width="1909" height="918" alt="image" src="https://github.com/user-attachments/assets/83add36b-1ddd-4330-b1a8-45d888497e49" />
试用我的代码在上面文件live2d窗口，我设置了只显示一个模型无法切换其他模型，还有音乐播放器更新代码


功能：

1.音乐播放器，就很常规的播放器

2.视频播放器，也是很常规的播放器

3.图片查看器，也是很常规，我这里代码写的背景，其实是图片查看器 O(∩_∩)O wasd控制图片位置，顶部控制大小

4.鼠标自定义

5.一些简单的页面特效


后续可能会更新！
vercel绑定GitHub就可以了
cf用法：
<img width="633" height="474" alt="ScreenShot_2026-05-15_170616_101" src="https://github.com/user-attachments/assets/5eedc4c3-ed7b-459e-a14b-5970b1d32f2f" />
<img width="586" height="648" alt="ScreenShot_2026-05-15_170712_445" src="https://github.com/user-attachments/assets/401de982-0006-42a9-9e09-c051b4a4be50" />
然后正常部署就行了


--------------------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓过时了↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓


![image](https://github.com/user-attachments/assets/647d328e-dc62-450e-a397-9ecb07ac5106)

很简单这样打包下载然后解压到你服务器的域名文件夹里，不能保证直接丢进去就行，不是所有服务器都一样，我就测了自己有的.

我这里用我之前注册的serv00来测试一下

准备工作

注册个域名 dash.domain.digitalplat.org 这里免费，尽量不要用qq和163注册，注册很简单的看不懂的话浏览器插件翻译一下

dash.cloudflare.com 注册一个cf账号解析域名 注册完cf点注册域，填你刚刚注册的域名，![微信截图_20250423040430](https://github.com/user-attachments/assets/67c0da7f-4836-4562-8864-39fc12679646)

然后复制这两条信息到域名面板点确认

![微信截图_20250423040927](https://github.com/user-attachments/assets/cd92df75-577a-4d0c-aa33-ab75558aab76)![微信截图_20250423041100](https://github.com/user-attachments/assets/bf04e5e4-db6c-46bf-a941-ebb457849a4b)

然后去到服务器，我的是serv00，添加一个域名，要添加前缀哦![image](https://github.com/user-attachments/assets/75ab6a91-5231-4e16-8363-704579b954cc)
![image](https://github.com/user-attachments/assets/1e0b4bec-d258-4d2e-bbf5-c9f43bc49355)![image](https://github.com/user-attachments/assets/536502df-3547-454a-a122-dcbf907f3cb5)

然后回到cf添加dns a记录 ![image](https://github.com/user-attachments/assets/658a54b5-65cd-4016-8e92-85752ee62354)

然后到服务器打开文件管理器 ![image](https://github.com/user-attachments/assets/3d5d475d-cf4d-487d-a457-d2b6f8eb35e9)

找到域名地址先把默认页删除，然后把打包好的代码上传上来

![微信截图_20250423093631](https://github.com/user-attachments/assets/18296c1c-577b-4c53-95b7-618516a17ecb)![微信截图_20250423093746](https://github.com/user-attachments/assets/2c1067b5-9971-4a30-98e1-60e8e977d83c)

解压到域名的位置就行了，然后到你浏览器直接输域名就打开了。https://meizizi.hengzai.dpdns.org/

代码我都加注释了的，修改应该都不难的，你可以打包回本地让ai帮你修改
![image](https://github.com/user-attachments/assets/f9ada10e-50f7-4fef-a58c-791056db0882)
![image](https://github.com/user-attachments/assets/ceaa3bcb-16d3-4429-91f3-18584da86180)
![image](https://github.com/user-attachments/assets/5d25acf9-f7f8-4dbc-8b7a-74612900da03)

这里添加你想要的元素

![image](https://github.com/user-attachments/assets/ba33e92e-f6a9-43f5-ad85-835bba6affe7)

![image](https://github.com/user-attachments/assets/5d717f4b-25a1-4ed4-ad68-457dfb4f6f58)

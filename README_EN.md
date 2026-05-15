# Simple Personal Static Web Page

[English version](README_EN.md) | [中文版本](README.md)

Updated to support direct one-click deployment on Vercel and Cloudflare.

Used AI to create a simple web page for practice and to cultivate hobbies.

**Examples:**
- [live2d.honkai.ct8.pl](https://live2d.honkai.ct8.pl/)
- [Small AI-made game](http://dar.honkai.ct8.pl/) O(∩_∩)O~
- [oh.mei.cc.cd](https://oh.mei.cc.cd/)
- [Simple IP Check Page](https://github.com/Leelokhan/Simple-IP-Check-Page)

A "idiot-proof" setup for your own IP detection page, pure HTML.

![WeChat Screenshot](https://github.com/user-attachments/assets/ff4e2c55-3b62-4ad0-9e96-d7a81c981413)

To make it less monotonous, I added Live2D → [imuncle/live2d](https://github.com/imuncle/live2d). I deleted most models in my repository and only kept a few for testing. You can download more from the original project address.

**Advanced:** Live2D models can be placed on any website.
Examples: [nz.562427418.xyz](https://nz.562427418.xyz/), [z.meizizi.nyc.mn](https://z.meizizi.nyc.mn/)

<img width="1913" height="916" alt="image" src="https://github.com/user-attachments/assets/72860bdd-1b58-49bf-af67-e9d508e1c727" />
<img width="1909" height="918" alt="image" src="https://github.com/user-attachments/assets/83add36b-1ddd-4330-b1a8-45d888497e49" />

Try my code in the `live2d` window file. I set it to show only one model and cannot switch to others. Also updated the music player code.

## Features:

1. **Music Player:** A very conventional player.
2. **Video Player:** Also a very conventional player.
3. **Image Viewer:** Also very conventional. My code uses the background as an image viewer. O(∩_∩)O Use `WASD` to control image position, and the top slider to control size.
4. **Custom Mouse Cursor**
5. **Simple Page Special Effects**

Might update in the future!

For Vercel, just bind it to your GitHub.

**Cloudflare Usage:**
<img width="633" height="474" alt="ScreenShot_2026-05-15_170616_101" src="https://github.com/user-attachments/assets/5eedc4c3-ed7b-459e-a14b-5970b1d32f2f" />
<img width="586" height="648" alt="ScreenShot_2026-05-15_170712_445" src="https://github.com/user-attachments/assets/401de982-0006-42a9-9e09-c051b4a4be50" />
Then deploy normally.


--------------------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Outdated ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓


![image](https://github.com/user-attachments/assets/647d328e-dc62-450e-a397-9ecb07ac5106)

It's very simple: download the package, then extract it to your server's domain folder. I can't guarantee it works by just dropping it in everywhere, as not all servers are the same. I only tested on my own.

I'm using my previously registered Serv00 for testing here.

### Preparation

1. **Register a domain:** [dash.domain.digitalplat.org](http://dash.domain.digitalplat.org) is free here. Try not to use QQ or 163 emails. Registration is simple; use a browser translation plugin if you don't understand.
2. **Setup Cloudflare:** Register a Cloudflare account at [dash.cloudflare.com](https://dash.cloudflare.com/) to resolve the domain. After registering, click "Add a Site" and fill in the domain you just registered. ![Screenshot](https://github.com/user-attachments/assets/67c0da7f-4836-4562-8864-39fc12679646)
3. Copy the two nameserver entries to your domain panel and click confirm.
![Screenshot](https://github.com/user-attachments/assets/cd92df75-577a-4d0c-aa33-ab75558aab76) ![Screenshot](https://github.com/user-attachments/assets/bf04e5e4-db6c-46bf-a941-ebb457849a4b)
4. Go to your server (mine is Serv00), add a domain. Remember to add the prefix! ![image](https://github.com/user-attachments/assets/75ab6a91-5231-4e16-8363-704579b954cc)
![image](https://github.com/user-attachments/assets/1e0b4bec-d258-4d2e-bbf5-c9f43bc49355) ![image](https://github.com/user-attachments/assets/536502df-3547-454a-a122-dcbf907f3cb5)
5. Go back to Cloudflare and add a DNS `A` record. ![image](https://github.com/user-attachments/assets/658a54b5-65cd-4016-8e92-85752ee62354)
6. Go to your server's file manager. ![image](https://github.com/user-attachments/assets/3d5d475d-cf4d-487d-a457-d2b6f8eb35e9)
7. Find the domain folder, delete the default page first, then upload the packaged code.
![Screenshot](https://github.com/user-attachments/assets/18296c1c-577b-4c53-95b7-618516a17ecb) ![Screenshot](https://github.com/user-attachments/assets/2c1067b5-9971-4a30-98e1-60e8e977d83c)
8. Extract it to the domain location. Then type the domain in your browser to open it. [meizizi.hengzai.dpdns.org](https://meizizi.hengzai.dpdns.org/)

I've added comments to the code, so modification shouldn't be hard. You can download it locally and let AI help you modify it.
![image](https://github.com/user-attachments/assets/f9ada10e-50f7-4fef-a58c-791056db0882)
![image](https://github.com/user-attachments/assets/ceaa3bcb-16d3-4429-91f3-18584da86180)
![image](https://github.com/user-attachments/assets/5d25acf9-f7f8-4dbc-8b7a-74612900da03)

Add the elements you want here:
![image](https://github.com/user-attachments/assets/ba33e92e-f6a9-43f5-ad85-835bba6affe7)
![image](https://github.com/user-attachments/assets/5d717f4b-25a1-4ed4-ad68-457dfb4f6f58)

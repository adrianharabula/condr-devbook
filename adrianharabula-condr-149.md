# [Is there a way to automatically import new products with characteristics?](https://github.com/adrianharabula/condr/issues/149)

> state: **open** opened by: **adrianharabula** on: **5/28/2017**

When a product is not found, can we search it and import it automatically?

API-uri disponibile am avea:

- http://www.upcitemdb.com
- https://upcdatabase.org

Exemplu răspuns upcitemdb:
Request url: https://api.upcitemdb.com/prod/trial/lookup?upc&#x3D;885909918188
Response body:
&#x60;&#x60;&#x60;json
{
  &quot;code&quot;: &quot;OK&quot;,
  &quot;total&quot;: 1,
  &quot;offset&quot;: 0,
  &quot;items&quot;: [
    {
      &quot;ean&quot;: &quot;0885909918188&quot;,
      &quot;title&quot;: &quot;Apple MacBook Pro 13.3&amp;quot; Retina Display Notebook Computer 2.7GHz Dual-core Intel Core i5 (Broadwell) 8GB DDR3 RAM 256GB PCIe Flash Storage (Early 2015)&quot;,
      &quot;description&quot;: &quot;A Spectacular display is just the beginning   A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performanc&quot;,
      &quot;upc&quot;: &quot;885909918188&quot;,
      &quot;brand&quot;: &quot;Apple&quot;,
      &quot;model&quot;: &quot;MF840LL/A&quot;,
      &quot;color&quot;: &quot;Silver&quot;,
      &quot;size&quot;: &quot;13.3in. Retin A Display&quot;,
      &quot;dimension&quot;: &quot;&quot;,
      &quot;weight&quot;: &quot;&quot;,
      &quot;currency&quot;: &quot;&quot;,
      &quot;lowest_recorded_price&quot;: 250,
      &quot;images&quot;: [
        &quot;http://images.highspeedbackbone.net/SKUimages/large/40300998_vmain01_at_mn_4719591.jpg&quot;,
        &quot;https://i5.walmartimages.com/asr/19d6cafd-e520-4a6f-b6c3-3ddcbc2cbfe5_1.b191d88d51a33125c7334c23ccafd17c.jpeg?odnHeight&#x3D;450&amp;odnWidth&#x3D;450&amp;odnBg&#x3D;ffffff&quot;,
        &quot;http://img.bbystatic.com/BestBuy_US/images/products/8532/8532029_sc.jpg&quot;,
        &quot;http://img1.r10.io/PIC/100026633/0/1/250/100026633.jpg&quot;,
        &quot;http://images.frys.com/art/product/300x300/8408658.01.prod.jpg&quot;,
        &quot;http://image1.cc-inc.com/prod/13446000/13446712_xlg.jpg&quot;,
        &quot;http://images.qvc.com/is/image/e/03/e282303.001?$uslarge$&quot;,
        &quot;http://images10.newegg.com/ProductImageCompressAll200/A5E6_1_20150416344022063.jpg&quot;,
        &quot;http://www.adorama.com/images/large/ACMF840LLA.JPG&quot;,
        &quot;http://images.prosperentcdn.com/images/250x250/content.abt.com/media/images/products/l_MF841LLA.jpg&quot;
      ],
      &quot;offers&quot;: [
        {
          &quot;merchant&quot;: &quot;Abt&quot;,
          &quot;domain&quot;: &quot;abt.com&quot;,
          &quot;title&quot;: &quot;Apple MacBook Pro 13.3\&quot;\&quot; With Retina Display 2.7GHz Intel Core i5 Laptop Computer&quot;,
          &quot;currency&quot;: &quot;&quot;,
          &quot;list_price&quot;: &quot;&quot;,
          &quot;price&quot;: 1463.7,
          &quot;shipping&quot;: &quot;&quot;,
          &quot;condition&quot;: &quot;New&quot;,
          &quot;availability&quot;: &quot;&quot;,
          &quot;link&quot;: &quot;http://www.upcitemdb.com/norob/alink/?id&#x3D;u2s233230363b4d4y2&amp;tid&#x3D;1&amp;seq&#x3D;1495966973&amp;plt&#x3D;a91fdcbd73c8bd4e60a9714aeee31a9d&quot;,
          &quot;updated_t&quot;: 1465780889
        },
        {
          &quot;merchant&quot;: &quot;Adorama&quot;,
          &quot;domain&quot;: &quot;adorama.com&quot;,
          &quot;title&quot;: &quot;Apple MacBook Pro 13.3&amp;quot; Retina Display Notebook Computer 2.7GHz Dual-core Intel Core i5 (Broadwell) 8GB DDR3 RAM 256GB PCIe Flash Storage (Early 2015)&quot;,
          &quot;currency&quot;: &quot;&quot;,
          &quot;list_price&quot;: &quot;&quot;,
          &quot;price&quot;: 1399,
          &quot;shipping&quot;: &quot;Free Shipping&quot;,
          &quot;condition&quot;: &quot;New&quot;,
          &quot;availability&quot;: &quot;&quot;,
          &quot;link&quot;: &quot;http://www.upcitemdb.com/norob/alink/?id&#x3D;u2q2y2t20333f4d4v2&amp;tid&#x3D;1&amp;seq&#x3D;1495966973&amp;plt&#x3D;3a991c30da14501f7312723dad5d133c&quot;,
          &quot;updated_t&quot;: 1474863552
        },
        {
          &quot;merchant&quot;: &quot;Newegg.com&quot;,
          &quot;domain&quot;: &quot;newegg.com&quot;,
          &quot;title&quot;: &quot;Apple MacBook Pro Core i5 2.7GHz (Broadwell) 256GB SSD 8GB 13.3\&quot; Retina (2560x1600) BT Mac OS X 10.10 Yosemite FaceTime Camera (Early 2015)&quot;,
          &quot;currency&quot;: &quot;&quot;,
          &quot;list_price&quot;: &quot;&quot;,
          &quot;price&quot;: 1400,
          &quot;shipping&quot;: &quot;19.99&quot;,
          &quot;condition&quot;: &quot;New&quot;,
          &quot;availability&quot;: &quot;&quot;,
          &quot;link&quot;: &quot;http://www.upcitemdb.com/norob/alink/?id&#x3D;v2p213x2z213e4d4v2&amp;tid&#x3D;1&amp;seq&#x3D;1495966973&amp;plt&#x3D;deb4f6650100517f14a271418d220b45&quot;,
          &quot;updated_t&quot;: 1479210487
        },
        {
          &quot;merchant&quot;: &quot;QVC.com&quot;,
          &quot;domain&quot;: &quot;qvc.com&quot;,
          &quot;title&quot;: &quot;Apple 13\&quot; MacBook Pro - Core i5, 8GB RAM, 256GB SSD &amp; Software&quot;,
          &quot;currency&quot;: &quot;&quot;,
          &quot;list_price&quot;: 2449.96,
          &quot;price&quot;: 2229.96,
          &quot;shipping&quot;: &quot;26.22&quot;,
          &quot;condition&quot;: &quot;New&quot;,
          &quot;availability&quot;: &quot;&quot;,
          &quot;link&quot;: &quot;http://www.upcitemdb.com/norob/alink/?id&#x3D;u2q213u2w21394c4z2&amp;tid&#x3D;1&amp;seq&#x3D;1495966973&amp;plt&#x3D;40ad7a815d023aff6248c1274a3e0047&quot;,
          &quot;updated_t&quot;: 1495194894
        },
        {
          &quot;merchant&quot;: &quot;MacMall&quot;,
          &quot;domain&quot;: &quot;macmall.com&quot;,
          &quot;title&quot;: &quot;Apple MF840LL/A 13.3 MacBook Pro with Retina display  Dual-core Intel Core i5 2.7GHz (5th generation processor)  8GB RAM  256GB PCIe-based flash storage  Intel&quot;,
          &quot;currency&quot;: &quot;&quot;,
          &quot;list_price&quot;: 1499,
          &quot;price&quot;: 1449,
          &quot;shipping&quot;: &quot;0&quot;,
          &quot;condition&quot;: &quot;New&quot;,
          &quot;availability&quot;: &quot;&quot;,
          &quot;link&quot;: &quot;http://www.upcitemdb.com/norob/alink/?id&#x3D;u2q2y2u203y2a484s2&amp;tid&#x3D;1&amp;seq&#x3D;1495966973&amp;plt&#x3D;05ee68a4c8840f1d1d98683c2b4fd5ea&quot;,
          &quot;updated_t&quot;: 1493828651
        },
        {
          &quot;merchant&quot;: &quot;Frys Electronics&quot;,
          &quot;domain&quot;: &quot;frys.com&quot;,
          &quot;title&quot;: &quot;NEW! Apple 13.3\&quot; MacBook Pro with Retina display, Dual-core Intel Core i5 2.7GHz (5th generation processor), 8GB RAM, 256GB PCIe-based flash storage, Intel Iris Graphics 6100, Two Thunderbolt 2 ports, 802.11ac Wi-Fi, 10 hours of battery life, OS X Yosemit&quot;,
          &quot;currency&quot;: &quot;&quot;,
          &quot;list_price&quot;: &quot;&quot;,
          &quot;price&quot;: 826.2,
          &quot;shipping&quot;: &quot;&quot;,
          &quot;condition&quot;: &quot;New&quot;,
          &quot;availability&quot;: &quot;&quot;,
          &quot;link&quot;: &quot;http://www.upcitemdb.com/norob/alink/?id&#x3D;u2r2y2u2w2z29454u2&amp;tid&#x3D;1&amp;seq&#x3D;1495966973&amp;plt&#x3D;71b0016c76923334976e1e1276fcb654&quot;,
          &quot;updated_t&quot;: 1488643982
        },
        {
          &quot;merchant&quot;: &quot;Rakuten(Buy.com)&quot;,
          &quot;domain&quot;: &quot;rakuten.com&quot;,
          &quot;title&quot;: &quot;Apple MacBook Pro 13-inch - Retina 2.7Ghz 8GB 256GB - Mar 2015 / MF840LL/A Apple MacBook Pro MF840LL/A 13.3-Inch Laptop with Retina Display (256 GB) NEWEST VERSION&quot;,
          &quot;currency&quot;: &quot;&quot;,
          &quot;list_price&quot;: &quot;&quot;,
          &quot;price&quot;: 1456.39,
          &quot;shipping&quot;: &quot;Free Shipping&quot;,
          &quot;condition&quot;: &quot;New&quot;,
          &quot;availability&quot;: &quot;Out of Stock&quot;,
          &quot;link&quot;: &quot;http://www.upcitemdb.com/norob/alink/?id&#x3D;u2q2z2x233z2d454r2&amp;tid&#x3D;1&amp;seq&#x3D;1495966973&amp;plt&#x3D;99f13618f01e1dff11e4be71651ba804&quot;,
          &quot;updated_t&quot;: 1495830797
        },
        {
          &quot;merchant&quot;: &quot;Best Buy&quot;,
          &quot;domain&quot;: &quot;bestbuy.com&quot;,
          &quot;title&quot;: &quot;Apple - Macbook Pro With Retina Display (latest Model) - 13.3\&quot; Display - 8gb Memory - 256gb Flash Storage - Silver&quot;,
          &quot;currency&quot;: &quot;&quot;,
          &quot;list_price&quot;: &quot;&quot;,
          &quot;price&quot;: 1499.99,
          &quot;shipping&quot;: &quot;&quot;,
          &quot;condition&quot;: &quot;New&quot;,
          &quot;availability&quot;: &quot;&quot;,
          &quot;link&quot;: &quot;http://www.upcitemdb.com/norob/alink/?id&#x3D;u2q2y2y243z2a494t2&amp;tid&#x3D;1&amp;seq&#x3D;1495966973&amp;plt&#x3D;675f0e0e62217e008130da95bf5559c4&quot;,
          &quot;updated_t&quot;: 1486163626
        },
        {
          &quot;merchant&quot;: &quot;Wal-Mart.com&quot;,
          &quot;domain&quot;: &quot;walmart.com&quot;,
          &quot;title&quot;: &quot;Apple MacBook Pro 13\&quot; Retina Display MF840LLA Intel Core i5 2.7GHz 8GB 256GB SSD&quot;,
          &quot;currency&quot;: &quot;&quot;,
          &quot;list_price&quot;: &quot;&quot;,
          &quot;price&quot;: 2499.99,
          &quot;shipping&quot;: &quot;Free Shipping&quot;,
          &quot;condition&quot;: &quot;New&quot;,
          &quot;availability&quot;: &quot;Out of Stock&quot;,
          &quot;link&quot;: &quot;http://www.upcitemdb.com/norob/alink/?id&#x3D;u2r2x2v223z264d4u2&amp;tid&#x3D;1&amp;seq&#x3D;1495966973&amp;plt&#x3D;68d38043ead4b8c58b21e94c52f8bf48&quot;,
          &quot;updated_t&quot;: 1495839438
        },
        {
          &quot;merchant&quot;: &quot;TigerDirect&quot;,
          &quot;domain&quot;: &quot;tigerdirect.com&quot;,
          &quot;title&quot;: &quot;Apple MacBook Pro - MF840LL/A&quot;,
          &quot;currency&quot;: &quot;&quot;,
          &quot;list_price&quot;: &quot;&quot;,
          &quot;price&quot;: 1494,
          &quot;shipping&quot;: &quot;&quot;,
          &quot;condition&quot;: &quot;New&quot;,
          &quot;availability&quot;: &quot;&quot;,
          &quot;link&quot;: &quot;http://www.upcitemdb.com/norob/alink/?id&#x3D;v2p24323y2637464s2&amp;tid&#x3D;1&amp;seq&#x3D;1495966973&amp;plt&#x3D;66b097fc123d469aeb62b2848a4808f0&quot;,
          &quot;updated_t&quot;: 1495919811
        },
        {
          &quot;merchant&quot;: &quot;Blinq.com&quot;,
          &quot;domain&quot;: &quot;blinq.com&quot;,
          &quot;title&quot;: &quot;Apple MacBook Pro 13.3in Laptop i5 3.1GHz 8GB 512GB Mac OS X (MF843LL/A)&quot;,
          &quot;currency&quot;: &quot;&quot;,
          &quot;list_price&quot;: &quot;&quot;,
          &quot;price&quot;: 1510.39,
          &quot;shipping&quot;: &quot;&quot;,
          &quot;condition&quot;: &quot;New&quot;,
          &quot;availability&quot;: &quot;&quot;,
          &quot;link&quot;: &quot;http://www.upcitemdb.com/norob/alink/?id&#x3D;u2x2531323y2c464x2&amp;tid&#x3D;1&amp;seq&#x3D;1495966973&amp;plt&#x3D;0124fecae18fb0c7ba7597c53ba0280c&quot;,
          &quot;updated_t&quot;: 1478056130
        },
        {
          &quot;merchant&quot;: &quot;Newegg Business&quot;,
          &quot;domain&quot;: &quot;neweggbusiness.com&quot;,
          &quot;title&quot;: &quot;Apple MacBook Pro Core i5 2.7GHz (Broadwell) 256GB SSD 8GB 13.3\&quot; Retina (2560x1600) BT Mac OS X 10.10 Yosemite FaceTime Camera (Early 2015)&quot;,
          &quot;currency&quot;: &quot;&quot;,
          &quot;list_price&quot;: &quot;&quot;,
          &quot;price&quot;: 1527.69,
          &quot;shipping&quot;: &quot;Free Shipping&quot;,
          &quot;condition&quot;: &quot;New&quot;,
          &quot;availability&quot;: &quot;Out of Stock&quot;,
          &quot;link&quot;: &quot;http://www.upcitemdb.com/norob/alink/?id&#x3D;v2o263v2y2337464z2&amp;tid&#x3D;1&amp;seq&#x3D;1495966973&amp;plt&#x3D;4a640983f6c43696ba10ec5c19027b3b&quot;,
          &quot;updated_t&quot;: 1495894981
        }
      ],
      &quot;elid&quot;: &quot;152538538811&quot;
    }
  ]
}
&#x60;&#x60;&#x60;

### Comments

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/149#issuecomment-304505810) on: **5/28/2017**

Pentru a căuta upc code pentru un produs putem folosi

- https://www.barcodelookup.com doar că preţurile încep de la 99$ pe lună :))
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/149#issuecomment-304551614) on: **5/29/2017**

Am găsit şi documentaţia pentru apiul de mai sus. http://www.upcitemdb.com/wp/docs/main/development/responses/
---
> from: [**elis47**](https://github.com/adrianharabula/condr/issues/149#issuecomment-305310984) on: **5/31/2017**

Api pentru scanarea codului de bare
https://www.microsoft.com/en-us/store/p/scandit-barcode-scanner/9nblggh4sskh
---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/149#issuecomment-305402786) on: **6/1/2017**

hmm... interesant... eu n-am windows şi nu îmi merge, dar nu m-am gândit să caut librărie de scanat barcode pe pc.

Am găsit [zbar-tools](http://zbar.sourceforge.net/) utilitar cross platform care scanează codul de bare. Nu ştiu cum să îl implementăm la noi pe site, dar am reuşit să scanez cu el coduri de bare cu pc-ul :))

![image](https://cloud.githubusercontent.com/assets/2271038/26667442/f186625c-46ad-11e7-810c-01b24d2249aa.png)

---
> from: [**adrianharabula**](https://github.com/adrianharabula/condr/issues/149#issuecomment-305405426) on: **6/1/2017**

Paşii ca să scanăm cod de bare ar fi

1. să găsim un cititor de carduri pe telefon/pc(pe telefon avem [ionic](https://ionicframework.com/docs/native/barcode-scanner/)) (de partea asta mă pot ocupa eu)
3. trimitem codul de bare într-un request la aplicaţia noastră laravel: ex: [condr.me/lookup/885909918188](condr.me/lookup/885909918188)
4. din laravel facem un request către unul sau mai multe apiuri care pot procesa acest cod, de exemplu [https://api.upcitemdb.com/prod/trial/lookup?upc&#x3D;885909918188](https://api.upcitemdb.com/prod/trial/lookup?upc&#x3D;885909918188) Folosim guzzle http pentru asta. Mai multe info [aici](http://wern-ancheta.com/blog/2016/01/20/making-http-requests-with-guzzle/)
3. datele obţinute de aici, sunt în format json, le putem folosi cum vrem noi
4. end of story
---
> from: [**elis47**](https://github.com/adrianharabula/condr/issues/149#issuecomment-305640695) on: **6/2/2017**

3,4,5 done; 1,2 to go 👍 
